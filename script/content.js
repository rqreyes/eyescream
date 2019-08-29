chrome.runtime.onMessage.addListener(function(message) {
  if (message === 'night') {
    $('*').css('background', '#000');
    $('p').css('color', 'grey');
    $('span').css('color', 'grey');
    $('input').css('color', 'grey');
    $('a').css('color', 'gold');
  }
  if (message === 'day') {
    $('*').css('background', 'white');
    $('p').css('color', 'grey');
    $('span').css('color', 'grey');
    $('a').css('color', 'blue');
  }
  if (message === 'secret') {
    $('body').css('background', 'url(https://avatars3.githubusercontent.com/u/6164474?s=460&v=4)');
  }
});