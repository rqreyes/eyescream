$(document).ready(function () {
  let audio = new Audio('../audio/darude-sandstorm.mp3');

  $('#secret').on('click', function (e) {
    e.preventDefault();
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'secret');
    });
  });
  $('#night').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'night');
    });
  });
  $('#day').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'day');
    });
  });
  $('#disappear').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'disappear');
    });
  });
  $('#fonts').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'fonts');
    });
  });
  $('#upside-down').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'upside-down');
    });
  });
  $('#rotate').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'rotate');
    });
  });
  $('#random').on('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'random');
    });
  });
  $('#party').on('click', function () {
    audio.play();
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'party');
    });
  });
  $('#reset').on('click', function () {
    audio.pause();
    audio.currentTime = 0;
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'reset');
    });
  });
});
