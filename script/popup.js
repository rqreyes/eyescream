// $('#dark').on('click', function() {
//   $('*').css('background-color', 'yellow');
//   console.log('hello');
// });

// console.log($('#dark'));
// $('*').css('background-color', 'red');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)

  function onclick() {
    chrome.tabs.query({currentWindow: true, active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'hi')
    })
  }
}, false)