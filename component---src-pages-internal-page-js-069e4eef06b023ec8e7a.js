/*! For license information please see component---src-pages-internal-page-js-069e4eef06b023ec8e7a.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[257],{5900:function(e,a){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var l=r.apply(null,t);l&&e.push(l)}}else if("object"===c)if(t.toString===Object.prototype.toString)for(var s in t)n.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(a,[]))||(e.exports=t)}()},381:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(7294),r=t(5444),c=t(9499),l=t(8631),s=t(5900),i=t.n(s),o=t(4091),d=function(e){var a,t=e.title,r=e.typeName,c=e.setActiveArea,s=e.activeArea,d=(0,l.I0)();return n.createElement("li",{className:i()({menuActive:s===r}),onClick:(a=r,function(){c(a),d((0,o.X)(a))})},t)},m=[{title:"Москва",typeName:"msk"},{title:"Екатеринбург",typeName:"ekb"},{title:"Казань",typeName:"kz"}],u=function(){var e=n.useState("ekb"),a=e[0],t=e[1];return n.createElement("nav",{className:"header__menu menu"},n.createElement("div",{className:"menu__body"},n.createElement("ul",{className:"menu__list"},m.map((function(e,r){return n.createElement(d,Object.assign({setActiveArea:t,activeArea:a,key:e.title+"__"+r},e))})))))},f=function(){var e=(0,c.useLocation)();return n.createElement("header",{className:"header"},n.createElement("div",{className:"container"},n.createElement("div",{className:"header__row"},n.createElement("div",{className:"header__logo"},n.createElement(r.Link,{to:"/"},"Yoga ")),n.createElement("div",{className:"menu__icon icon-menu"},n.createElement("span",null),n.createElement("span",null),n.createElement("span",null)),"/"===e.pathname&&n.createElement(u,null))))},p=function(e){var a=e.children;return n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement("main",null,a))}},7599:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var n=t(7294),r=t(381),c=t(2359),l=function(e){var a=e.data;return n.createElement("div",{className:"internal__item"},n.createElement("h1",{className:"internal__title"},a.allMongodbYogasYoga.edges[0].node.title),n.createElement("p",{className:"internal__desc"},a.allMongodbYogasYoga.edges[0].node.description),n.createElement("div",{className:"internal__cost"},n.createElement("span",{className:"internal__dec"},"Средняя стоимость:"),a.allMongodbYogasYoga.edges[0].node.price),n.createElement("div",{className:"internal__info"},n.createElement("div",{className:"internal__info-title"},"Контактная информация"),n.createElement("div",{className:"internal__address"},n.createElement("span",{className:"internal__dec"},"Адрес:"),a.allMongodbYogasYoga.edges[0].node.address),n.createElement("div",{className:"internal__телефон"},n.createElement("span",{className:"internal__dec"},"Телефон:"),a.allMongodbYogasYoga.edges[0].node.tel),n.createElement("div",{className:"internal__address"},n.createElement("span",{className:"internal__dec"},"Сайт:"),n.createElement("a",{href:a.allMongodbYogasYoga.edges[0].node.site},a.allMongodbYogasYoga.edges[0].node.site))))},s=function(e){var a=e.data;return n.createElement(r.Z,null,n.createElement("section",{className:"internal"},n.createElement("div",{className:"internal__image"},n.createElement(c.S,{src:"../images/internal.jpg",alt:"Girl",__imageData:t(4470)})),n.createElement("div",{className:"container"},n.createElement("div",{className:"internal__content"},n.createElement(l,{data:a})))))}},4091:function(e,a,t){"use strict";t.d(a,{f:function(){return n},X:function(){return r}});var n=function(e){return{type:"SET_PLACIES",payload:e}},r=function(e){return{type:"SET_CURRENT_AREA",payload:e}}},4470:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/3bb10fd18a49e062d2f3a60cf21cdca7/5267c/internal.jpg","srcSet":"/static/3bb10fd18a49e062d2f3a60cf21cdca7/fa695/internal.jpg 480w,\\n/static/3bb10fd18a49e062d2f3a60cf21cdca7/a0d3e/internal.jpg 960w,\\n/static/3bb10fd18a49e062d2f3a60cf21cdca7/5267c/internal.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/3bb10fd18a49e062d2f3a60cf21cdca7/95a23/internal.webp 480w,\\n/static/3bb10fd18a49e062d2f3a60cf21cdca7/5bdbe/internal.webp 960w,\\n/static/3bb10fd18a49e062d2f3a60cf21cdca7/9c00f/internal.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1280}')}}]);
//# sourceMappingURL=component---src-pages-internal-page-js-069e4eef06b023ec8e7a.js.map