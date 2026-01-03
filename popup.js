document.getElementById('enableFocusBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'enableFocus' }, (response) => {
    if (response && response.status) {
      document.getElementById('statusMessage').textContent = response.status;
    } else {
      document.getElementById('statusMessage').textContent = "Failed to enable focus mode.";
    }
  });
});

document.getElementById('disableFocusBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'disableFocus' }, (response) => {
    if (response && response.status) {
      document.getElementById('statusMessage').textContent = response.status;
    } else {
      document.getElementById('statusMessage').textContent = "Failed to disable focus mode.";
    }
  });
});
