$(document).ready(function() {
  $('#night').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'night')
      })
  });
  $('#day').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'day')
      })
  });
  $('#secret').on('click', function(e) {
    e.preventDefault();
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'secret')
      })
  });
});