(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var copy=require("copy-to-clipboard");document.addEventListener("keypress",function(e){if(99===e.keyCode){var r=document.querySelector("svg").innerHTML;copy("<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n    <svg width='521px' height='521px' version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg'>"+r+"</svg>")}});var createViewer=require("../irc"),viewer=createViewer();document.body.appendChild(viewer.container);

},{"../irc":2,"copy-to-clipboard":3}],2:[function(require,module,exports){
const loop=()=>{};function createNode(t){return document.createElement(t)}function setAttribute(t,i,o){t.setAttribute(i,o)}module.exports=function(t={}){const i=createNode("img");let o=t.width||200,e=t.height||200;return t.pxNotRatio||(o=window.innerWidth*(t.width||.25)|0,e=0|(window.innerHeight*t.height||o),"minWidth"in t&&o<t.minWidth&&(o=t.minWidth,e=t.minWidth*t.height/t.width|0)),setAttribute(i,"width",o),setAttribute(i,"height",e),setAttribute(i,"src","./ir.svg"),document.body.appendChild(i),{container:i,lookAt:loop,setFollowMouse:loop,setFollowMotion:loop,stopAnimation:loop,startAnimation:loop}};

},{}],3:[function(require,module,exports){
"use strict";var deselectCurrent=require("toggle-selection"),defaultMessage="Copy to clipboard: #{key}, Enter";function format(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function copy(e,t){var o,r,n,c,s,a,l=!1;t||(t={}),o=t.debug||!1;try{if(n=deselectCurrent(),c=document.createRange(),s=document.getSelection(),(a=document.createElement("span")).textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",document.body.appendChild(a),c.selectNode(a),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),l=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),r=format("message"in t?t.message:defaultMessage),window.prompt(r,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),a&&document.body.removeChild(a),n()}return l}module.exports=copy;

},{"toggle-selection":4}],4:[function(require,module,exports){
module.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],a=0;a<e.rangeCount;a++)t.push(e.getRangeAt(a));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach(function(n){e.addRange(n)}),n&&n.focus()}};

},{}]},{},[1]);
