/*! For license information please see furo.js.LICENSE.txt */
(()=>{var e={212:function(e,t,n){var o,r;r=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(e,t,n){if(n.settings.events){var o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t.dispatchEvent(o)}},o=function(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0},r=function(e){e&&e.sort((function(e,t){return o(e.content)<o(t.content)?-1:1}))},c=function(t,n,o){var r=t.getBoundingClientRect(),c=function(e){return"function"==typeof e.offset?parseFloat(e.offset()):parseFloat(e.offset)}(n);return o?parseInt(r.bottom,10)<(e.innerHeight||document.documentElement.clientHeight):parseInt(r.top,10)<=c},s=function(){return Math.ceil(e.innerHeight+e.pageYOffset)>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,t){var n=e[e.length-1];if(function(e,t){return!(!s()||!c(e.content,t,!0))}(n,t))return n;for(var o=e.length-1;o>=0;o--)if(c(e[o].content,t))return e[o]},i=function(e,t){if(t.nested&&e.parentNode){var n=e.parentNode.closest("li");n&&(n.classList.remove(t.nestedClass),i(n,t))}},l=function(e,t){if(e){var o=e.nav.closest("li");o&&(o.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),i(o,t),n("gumshoeDeactivate",o,{link:e.nav,content:e.content,settings:t}))}},u=function(e,t){if(t.nested){var n=e.parentNode.closest("li");n&&(n.classList.add(t.nestedClass),u(n,t))}};return function(o,c){var s,i,d,f,m,v={setup:function(){s=document.querySelectorAll(o),i=[],Array.prototype.forEach.call(s,(function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));t&&i.push({nav:e,content:t})})),r(i)},detect:function(){var e=a(i,m);e?d&&e.content===d.content||(l(d,m),function(e,t){if(e){var o=e.nav.closest("li");o&&(o.classList.add(t.navClass),e.content.classList.add(t.contentClass),u(o,t),n("gumshoeActivate",o,{link:e.nav,content:e.content,settings:t}))}}(e,m),d=e):d&&(l(d,m),d=null)}},h=function(t){f&&e.cancelAnimationFrame(f),f=e.requestAnimationFrame(v.detect)},p=function(t){f&&e.cancelAnimationFrame(f),f=e.requestAnimationFrame((function(){r(i),v.detect()}))};return v.destroy=function(){d&&l(d,m),e.removeEventListener("scroll",h,!1),m.reflow&&e.removeEventListener("resize",p,!1),i=null,s=null,d=null,f=null,m=null},m=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e}(t,c||{}),v.setup(),v.detect(),e.addEventListener("scroll",h,!1),m.reflow&&e.addEventListener("resize",p,!1),v}}(r)}.apply(t,[]),void 0===o||(e.exports=o)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(212),t=n.n(e),o=null,r=null,c=window.pageYOffset||document.documentElement.scrollTop;function s(){const e=localStorage.getItem("theme")||"auto";var t;"light"!==(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"auto"===e?"light":"light"==e?"dark":"auto":"auto"===e?"dark":"dark"==e?"light":"auto")&&"dark"!==t&&"auto"!==t&&(console.error(`Got invalid theme mode: ${t}. Resetting to auto.`),t="auto"),document.body.dataset.theme=t,localStorage.setItem("theme",t),console.log(`Changed to ${t} mode.`)}function a(){!function(){const e=document.getElementsByClassName("theme-toggle");Array.from(e).forEach((e=>{e.addEventListener("click",s)}))}(),function(){let e=0,t=!1;window.addEventListener("scroll",(function(n){e=window.scrollY,t||(window.requestAnimationFrame((function(){var n;n=e,0==Math.floor(r.getBoundingClientRect().top)?r.classList.add("scrolled"):r.classList.remove("scrolled"),function(e){e<64?document.documentElement.classList.remove("show-back-to-top"):e<c?document.documentElement.classList.add("show-back-to-top"):e>c&&document.documentElement.classList.remove("show-back-to-top"),c=e}(n),function(e){null!==o&&(0==e?o.scrollTo(0,0):Math.ceil(e)>=Math.floor(document.documentElement.scrollHeight-window.innerHeight)?o.scrollTo(0,o.scrollHeight):document.querySelector(".scroll-current"))}(n),t=!1})),t=!0)})),window.scroll()}(),null!==o&&new(t())(".toc-tree a",{reflow:!0,recursive:!0,navClass:"scroll-current",offset:()=>{let e=parseFloat(getComputedStyle(document.documentElement).fontSize);return r.getBoundingClientRect().height+.5*e+1}})}const i=["Flytekit SDK","FlyteIDL","Flytectl"];function l(){jQuery(".mermaid").each((function(e,t){"true"===jQuery(t).parent()[0].getAttribute("hidden")||mermaid.init(jQuery(t))}))}document.addEventListener("DOMContentLoaded",(function(){var e;document.body.parentNode.classList.remove("no-js"),r=document.querySelector("header"),o=document.querySelector(".toc-scroll"),a(),e=$(".sidebar-tree").children("ul.current").prev("p.caption").text(),i.includes(e)&&(e="API Reference"),$(".nav-header .main-sections").find("div a div.brand").each((function(){$(this).text()===e&&$(this).addClass("current")})),$(".sidebar-tree").children("ul.current").each((function(){$(this).css("display","block"),$(this).prev("p.caption").css("display","block")})),setTimeout((function(){$(".sidebar-tree").children("ul").first().css("display","none"),$(".sidebar-tree .caption-text").css("display","none")}),10),setTimeout((function(){jQuery(".sidebar-scroll").animate({opacity:1},100)}),10)})),jQuery((function(){l(),jQuery("button.sphinx-tabs-tab").on("click",(function(){l()})),jQuery("div.nav-toggler").on("click",(function(){var e=jQuery(".nav-header .main-sections");e.toggleClass("nav-collapsed"),jQuery(".nav-header .external-links").toggleClass("nav-collapsed");var t=jQuery(".nav-header .nav-toggler i.fas");e.hasClass("nav-collapsed")?(t.addClass("fa-chevron-down"),t.removeClass("fa-chevron-up")):(t.addClass("fa-chevron-up"),t.removeClass("fa-chevron-down"))}))}))})()})();
//# sourceMappingURL=furo.js.map