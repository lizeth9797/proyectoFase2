(()=>{"use strict";var e,t={612:(e,t,n)=>{n(169),n(818),n(426),localStorage.setItem("idMeal","52867"),fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){var t=document.getElementById("recommendation-title"),n=document.createTextNode(e.meals[0].strMeal);t.appendChild(n),console.log(e);var o=function(e){var t=e.meals[0].strYoutube.substr(32,11);return"".concat("https://www.youtube.com/embed","/").concat(t)}(e);document.getElementById("youtube-video").src=o}));var o=document.getElementById("search");document.getElementById("searchButton").addEventListener("click",(function(){var e=o.value;if(console.log("SEARCH",e),e){var t=function(e){return"".concat("https://www.themealdb.com/api/json/v1/1/search.php?s=").concat(e)}(function(e){return e.replace(/ /g,"+")}(e));return console.log(t),function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(e){console.log(e)}))}(t).then((function(e){console.log(e)}))}}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={id:e,exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,n,r,c)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,r,c]=e[s],u=!0,l=0;l<n.length;l++)(!1&c||a>=c)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(u=!1,c<a&&(a=c));if(u){e.splice(s--,1);var i=r();void 0!==i&&(t=i)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[n,r,c]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.b=document.baseURI||self.location.href;var e={826:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,c,[a,u,l]=n,i=0;for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(l)var s=l(o);for(t&&t(n);i<a.length;i++)c=a[i],o.o(e,c)&&e[c]&&e[c][0](),e[a[i]]=0;return o.O(s)},n=self.webpackChunkproyecto=self.webpackChunkproyecto||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[863,735],(()=>o(612)));r=o.O(r)})();