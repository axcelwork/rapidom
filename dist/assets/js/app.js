!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){var n=[],r=0,o=0;function u(){n=[],r=0;let e=document.querySelectorAll("h2"),t=document.scrollingElement.scrollTop,u=(document.body.clientHeight,window.parent.screen.height);if(e.forEach(function(e,t){let r=e.id.replace(/\/|\{|\}/g,"");document.querySelector("#nav #"+r);n.push(e.offsetTop)}),n.forEach(function(e,o){t+.5*u>n[o]&&r++}),r!==o){o=r,document.querySelectorAll("#nav li").forEach(function(e){e.classList.remove("current")}),document.querySelectorAll("#nav li")[r-1].classList.add("current")}}u(),window.addEventListener("scroll",()=>{u()},!1)}]);