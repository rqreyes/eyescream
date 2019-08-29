$(document).ready(function() {
  $('#secret').on('click', function(e) {
    e.preventDefault();
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'secret')
      })
  });
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
  $('#disappear').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'disappear')
      })
  });
  $('#chalkduster').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'chalkduster')
      })
  });
  $('#upside-down').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'upside-down')
      })
  });
  $('#rotate').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'rotate')
      })
  });
  $('#random').on('click', function() {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'random')
      })
  });
  $('#party').on('click', function() {
    let audio = new Audio('https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'); 
    audio.play();
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'party')
      })
  });
});