import * as Blockly from 'blockly/core';
import localforage from 'localforage';
import Swal from 'sweetalert2';
import { useToast } from 'vue-toast-notification';
import { disableUnapplicable } from './restrictions.js';
import upgradeXml from './upgradexml.js';

// Hardcoded backpack events since no enum in Blockly.Events
const DISABLED_EVENTS = [Blockly.Events.BUBBLE_OPEN, Blockly.Events.BUMP_EVENTS, Blockly.Events.CLICK, Blockly.Events.BLOCK_DRAG, Blockly.Events.FINISHED_LOADING, Blockly.Events.SELECTED, Blockly.Events.THEME_CHANGE, Blockly.Events.TOOLBOX_ITEM_SELECT, Blockly.Events.TRASHCAN_OPEN, Blockly.Events.UI, Blockly.Events.VIEWPORT_CHANGE, 'backpack_open', 'backpack_change'];

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

let BlockCounter;
let toast = useToast();
let loginToast;
let dbToast;
let registerToast;
async function handle(workspace, t) {
  console.log('saved changes...');
  const content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
  await localforage.setItem('save3', content);
  await localforage.setItem('autosaveName', document.querySelector('#docName').textContent);
  await localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));

  localforage.getItem('hide-warnings').then((item) => {
    if (String(item) === 'true') return;
    let allBlocks = workspace.getAllBlocks(false);
    // Restrictions
    disableUnapplicable(allBlocks);
    let loginBlock = false;
    let dbCreate = false;
    let dbBlock = false;
    let registerBlockCount = 0;
    allBlocks.forEach((block) => {
      if (loginBlock && dbCreate && dbBlock && registerBlockCount >= 2) return;
      if (block.type === 's4d_login') loginBlock = true;
      if (block.type === 's4d_database_create_new') dbCreate = true;
      if (['s4d_add_data_new', 's4d_delete_all_data_new', 's4d_delete_data_new', 's4d_get_all_data_new', 's4d_get_data_new', 's4d_has_data_new', 's4d_set_data_new', 's4d_subtract_data_new'].includes(block.type)) dbBlock = true;
      if (block.type === 'frost_slash_register') registerBlockCount++;
    });
    if (loginBlock) {
      if (loginToast) loginToast.dismiss();
    } else {
      loginToast ??= toast.open({
        message: t('warnings.login_block'),
        type: 'warning',
        dismissible: false,
        duration: 1000000000
      });
    }
    if (dbCreate || (!dbCreate && !dbBlock)) {
      if (dbToast) dbToast.dismiss();
    } else {
      dbToast ??= toast.open({
        message: 'The "Create a new database" block in the "Database" category is required.',
        type: 'error',
        dismissible: false,
        duration: 1000000000
      });
    }
    if (registerBlockCount < 2) {
      if (registerToast) registerToast.dismiss();
    } else {
      registerToast ??= toast.open({
        message: 'You may only use one "Create Slash Commands" block.',
        type: 'error',
        dismissible: false,
        duration: 1000000000
      });
    }

    // Counter
    BlockCounter ??= document.getElementById('block-counter');
    let blocks = allBlocks.length;
    let rgb = '182, 182, 182';
    let bold = ['', ''];
    if (blocks >= 300 && blocks < 750) {
      rgb = '255, 125, 125';
      bold = ['<b>', '</b>'];
    } else if (blocks >= 750 && blocks < 1500) {
      rgb = '255, 60, 60';
      bold = ['<b><strong>', '</strong></b>'];
    } else if (blocks >= 1500 && blocks < 5000) {
      rgb = '255, 35, 35';
      bold = ['<b style="font-size: 110%"><strong>', '</strong></b>'];
    } else if (blocks >= 5000) {
      rgb = '255, 20, 20';
      bold = ['<b style="font-size: 125%"><strong>', '</strong></b>'];
    }
    let plural = blocks === 1 ? '' : 's';
    BlockCounter.innerHTML = bold[0] + `<p id="block-counter-textParagraph" style="margin:0px;color:rgb(${rgb});">${blocks} block${plural}</p>` + bold[1];
  });
}

export default async function register(app, t) {
  console.log('started!');

  setTimeout(async () => {
    let workspace = app.config.globalProperties.$store.state.workspace;
    const xml = await localforage.getItem('save3');
    if (xml !== null && xml.length > 61) {
      Swal.fire({
        theme: document.querySelector('[data-bs-theme="light"]') ? 'light' : 'dark',
        icon: 'question',
        title: t('autosave.title2'),
        html: "<span>Did you not save your project before quitting Scratch For Discord?</span><br><span>No problem, you can just click 'Load' to restore your project!</span>",
        showDenyButton: true,
        denyButtonText: t('autosave.cancell'),
        confirmButtonText: t('autosave.confirm'),
        preConfirm: async () => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
          Toast.fire({
            theme: 'auto',
            icon: 'success',
            title: t('autosave.text')
          });
          console.log('loading a save!');

          window.blocklyWorkspaceGlobalRef.clear();
          const cb = await localforage.getItem('autosave_customBlocks');
          if (cb && cb != '[]') {
            await window.fetchCustomBlocks({
              customBlocks: typeof cb === 'object' ? JSON.stringify(cb) : cb
            });
          }
          Blockly.Xml.domToWorkspace(upgradeXml(Blockly.utils.xml.textToDom(xml)), window.blocklyWorkspaceGlobalRef);

          console.log('loaded the save!');

          const saveNickname = await localforage.getItem('autosaveName');
          document.getElementById('docName').textContent = saveNickname == null || saveNickname == '' ? 'Untitled autosave' : saveNickname;
          document.title = `Scratch For Discord - ${document.getElementById('docName').textContent}`;
        }
      });
    }
    const debouncedHandle = debounce(handle, 100);
    workspace.addChangeListener((event) => {
      if (DISABLED_EVENTS.includes(event.type)) return;
      debouncedHandle(workspace, t);
    });
  }, 1000);
}
