(()=>{"use strict";var n={671:(n,t,e)=>{function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,{Z:()=>r})},521:(n,t,e)=>{function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),n}e.d(t,{Z:()=>o})},120:(n,t,e)=>{function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e.d(t,{Z:()=>r})},136:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(611);function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&(0,r.Z)(n,t)}},772:(n,t,e)=>{function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}e.d(t,{Z:()=>o})},611:(n,t,e)=>{function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}e.d(t,{Z:()=>r})},64:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(120),o=e(611);function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,t,e){return(c=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(n,r));return e&&(0,o.Z)(a,e.prototype),a}).apply(null,arguments)}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return c(n,arguments,(0,r.Z)(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(a,n)})(n)}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(671),t=e(521),r=e(136),o=e(772),a=e(120),c=e(64);var i=document.createElement("template");i.innerHTML='\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">\n<style>\n  .navbar{\n    background-color: #F2D027;\n  }\n  .nav-link{\n    color: #000000;\n    font-size:1.2rem;\n    font-weight: bold;\n    font-family: \'Fjalla One\', sans-serif;\n  }\n  .nav-item a:hover{\n    color: #D98E04;\n  }\n  .navbar-nav > li{\n    padding-left:30px;\n    padding-right:30px;\n  }\n\n</style>\n\n<nav class="navbar navbar-expand-lg fixed-top">\n<div class="container-fluid">\n  <a class="navbar-brand" href="./index.html">   <img\n  src="https://i.ibb.co/hxGrxRF/logo-1.png"\n  alt="Matcha"/></a>\n  <div class="collapse navbar-collapse" id="navbarNav">\n    <ul class="navbar-nav ms-auto">\n      <li class="nav-item">\n        <a class="nav-link " aria-current="page" href="./results.html">A to Z</a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n';var u=function(e){(0,r.Z)(f,e);var c,u,l=(c=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=(0,a.Z)(c);if(u){var e=(0,a.Z)(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)});function f(){return(0,n.Z)(this,f),l.call(this)}return(0,t.Z)(f,[{key:"connectedCallback",value:function(){this.attachShadow({mode:"closed"}).appendChild(i.content)}}]),f}((0,c.Z)(HTMLElement));customElements.define("header-component",u)})()})();