import * as Blockly from 'blockly/core';
import Swal from 'sweetalert2';

Blockly.dialog.setPrompt((msg, defaultValue, callback) => {
  // Blockly bubles events weirdly, setTimeout to prevent imediate close on mobile
  setTimeout(() => {
    Swal.fire({
      theme: document.querySelector('[data-bs-theme="light"]') ? 'light' : 'dark',
      title: msg,
      input: 'text',
      inputValue: defaultValue,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.value) callback(result.value);
    });
  }, 0);
});
