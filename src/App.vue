<template>
  <div id="app">
    <NavBarComponent id="navSpace" />
    <BlocklyComponent id="blocklySpace" :options="options" />
  </div>
</template>

<script>
import * as Blockly from 'blockly/core';
import NavBarComponent from './components/NavigationBar/NavigationBar.vue';
import BlocklyComponent from './components/BlocklyComponent.vue';
import Theme from '@blockly/theme-modern';

console.log('User is currently on platform', navigator.userAgent);

Blockly.Tooltip.HOVER_MS = 100;

import './components/S4DDebugTool';
import './prompt';

// Load blocks
// load the entire folder mf
import './blocks';

//my events
//channel
import './blocks/logs-events/channel/channel-permissions-update/';
import './blocks/logs-events/channel/channel-topic-update/';
//member
import './blocks/logs-events/member/member_boosted/';
import './blocks/logs-events/member/member_unboosted/';
import './blocks/logs-events/member/role_add/';
import './blocks/logs-events/member/role_remove/';
//server
import './blocks/logs-events/guild/boost_level_up/';
import './blocks/logs-events/guild/boost_level_down/';
import './blocks/logs-events/guild/guild_banner_add/';
import './blocks/logs-events/guild/vanity_url_add/';
import './blocks/logs-events/guild/vanity_url_remove/';
import './blocks/logs-events/guild/vanity_url_update/';
//finish of my events

//events
//channel
import './blocks/events/channel/channelCreate/';
import './blocks/events/channel/channelUpdate/';
import './blocks/events/channel/channelDelete/';
//emoji
import './blocks/events/emoji/emojiCreate/';
import './blocks/events/emoji/emojiUpdate/';
import './blocks/events/emoji/emojiDelete/';
//member
import './blocks/events/member/join-event/';
import './blocks/events/member/leave-event/';
import './blocks/events/member/guildBanAdd/';
import './blocks/events/member/guildBanRemove/';
import './blocks/events/server/serverUpdate/';
//role
import './blocks/events/role/roleCreate/';
import './blocks/events/role/roleUpdate/';
import './blocks/events/role/roleDelete/';
//sticker
import './blocks/events/sticker/stickerCreate/';
import './blocks/events/sticker/stickerUpdate/';
import './blocks/events/sticker/stickerDelete/';

export default {
  name: 'App',
  components: {
    BlocklyComponent,
    NavBarComponent
  },
  data() {
    let extra = {};
    // April fools month starts at 0 day starts at 1
    if (new Date().getMonth() == 3 && new Date().getDate() == 1) {
      extra = {
        rtl: true
      };
    }
    return {
      options: {
        renderer: 'zelos',
        theme: Theme,
        zoom: {
          controls: true,
          startScale: 0.9,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        ...extra
      },
      move: {
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true
      }
    };
  },
  beforeCreate() {
    this.$root.$i18n.locale = this.$store.state.blocklyLocale;
  },
  mounted() {
    console.log('...wait a second... a user?');
    console.log('i gotta tell them!');
    console.log('%cCAREFUL WHAT YOU TYPE IN CONSOLE! %cbarry and johnathan are watching all of your moves...', 'color:#f00;font-family:system-ui;font-size:2rem;font-weight:bold', 'color:#b00;font-family:system-ui;font-size:2rem;font-weight:bold');
    console.log('...');
    if (!('ScratchNative' in window) && window.parent?.ScratchNative) window.ScratchNative = window.parent.ScratchNative;
    const blocklyLocale = localStorage.getItem('blocklyLocale');
    if (blocklyLocale !== null) {
      this.$store.commit('setLocale', {
        newLocale: blocklyLocale
      });
      this.setLanguage(blocklyLocale);
    }
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#blocklySpace {
  position: absolute;
  width: 100%;
  height: calc(100% - 66px);
}

.boldtext {
  font-weight: bolder;
}

.testopa {
  opacity: 0.1;
}
</style>
