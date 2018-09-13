var copy = require('copy-to-clipboard');

document.addEventListener('keypress', function(event) {
  if (event.keyCode === 99) { // the c key
    var svg = document.querySelector('svg');
    var inner = svg.innerHTML;
    var head = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width='521px' height='521px' version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg'>`;
    var foot = '</svg>';

    var full = head + inner + foot;

    copy(full);
  }
});

var createViewer = require('../irc');

var viewer = createViewer();

document.body.appendChild(viewer.container);
