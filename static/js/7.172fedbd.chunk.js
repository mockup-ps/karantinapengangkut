(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{644:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(45),c=t(168),o=t(1),a=t.n(o),s=t(643),i=t(22),l=["name","text"],d=function(e){var r=e.name,t=e.text,o=Object(c.a)(e,l),a=r?"https://coreui.io/react/docs/components/".concat(r):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(s.bb,Object(n.a)(Object(n.a)({},o),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:t||"docs"})}))})},u=a.a.memo(d)},645:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(647);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,c=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(i){c=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(c)throw o}}return t}}(e,r)||Object(n.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},646:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,"a",(function(){return n}))},647:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(646);function c(e,r){if(e){if("string"===typeof e)return Object(n.a)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,r):void 0}}},649:function(e,r){!function(e,r){for(var t in r)e[t]=r[t]}(r,function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t.d(r,"deepObjectsMerge",(function(){return n})),t.d(r,"getColor",(function(){return i})),t.d(r,"getStyle",(function(){return s})),t.d(r,"hexToRgb",(function(){return l})),t.d(r,"hexToRgba",(function(){return d})),t.d(r,"makeUid",(function(){return u})),t.d(r,"omitByKeys",(function(){return b})),t.d(r,"pickByKeys",(function(){return j})),t.d(r,"rgbToHex",(function(){return h}));var n=function e(r,t){for(var n=0,c=Object.keys(t);n<c.length;n++){var o=c[n];t[o]instanceof Object&&Object.assign(t[o],e(r[o],t[o]))}return Object.assign(r||{},t),r},c=function(){for(var e={},r=document.styleSheets,t="",n=r.length-1;n>-1;n--){for(var c=r[n].cssRules,o=c.length-1;o>-1;o--)if(".ie-custom-properties"===c[o].selectorText){t=c[o].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(r){if(r){var t=r.split(": ")[0],n=r.split(": ")[1];t&&n&&(e["--".concat(t.trim())]=n.trim())}})),e},o=function(){return Boolean(document.documentMode)&&document.documentMode>=10},a=function(e){return e.match(/^--.*/i)},s=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(a(e)&&o()){var n=c();r=n[e]}else r=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return r},i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),n=s(t,r);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var r,t,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(t,", ").concat(n,")")},d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,c,o=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(c,", ").concat(r/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,r){for(var t={},n=Object.keys(e),c=0;c<n.length;c++)!r.includes(n[c])&&(t[n[c]]=e[n[c]]);return t},j=function(e,r){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t},h=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(r[1],10).toString(16)),n="0".concat(parseInt(r[2],10).toString(16)),c="0".concat(parseInt(r[3],10).toString(16));return"#".concat(t.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))},f={deepObjectsMerge:n,getColor:i,getStyle:s,hexToRgb:l,hexToRgba:d,makeUid:u,omitByKeys:b,pickByKeys:j,rgbToHex:h};r.default=f}]))},722:function(e,r,t){"use strict";t.r(r);var n=t(645),c=t(1),o=t(659),a=t.n(o),s=t(643),i=t(649),l=t(644),d=t(22),u=function(){var e=Object(c.useState)("rgb(255, 255, 255)"),r=Object(n.a)(e,2),t=r[0],o=r[1],a=Object(c.createRef)();return Object(c.useEffect)((function(){var e=a.current.parentNode.firstChild,r=window.getComputedStyle(e).getPropertyValue("background-color");o(r)}),[a]),Object(d.jsx)("table",{className:"table w-100",ref:a,children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-muted",children:"HEX:"}),Object(d.jsx)("td",{className:"font-weight-bold",children:Object(i.rgbToHex)(t)})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-muted",children:"RGB:"}),Object(d.jsx)("td",{className:"font-weight-bold",children:t})]})]})})},b=function(e){var r=e.className,t=e.children,n=a()(r,"theme-color w-75 rounded mb-3");return Object(d.jsxs)(s.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4",children:[Object(d.jsx)("div",{className:n,style:{paddingTop:"75%"}}),t,Object(d.jsx)(u,{})]})};r.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(s.j,{children:[Object(d.jsxs)(s.n,{children:["Theme colors",Object(d.jsx)(l.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(d.jsx)(s.k,{children:Object(d.jsxs)(s.ub,{children:[Object(d.jsx)(b,{className:"bg-primary",children:Object(d.jsx)("h6",{children:"Brand Primary Color"})}),Object(d.jsx)(b,{className:"bg-secondary",children:Object(d.jsx)("h6",{children:"Brand Secondary Color"})}),Object(d.jsx)(b,{className:"bg-success",children:Object(d.jsx)("h6",{children:"Brand Success Color"})}),Object(d.jsx)(b,{className:"bg-danger",children:Object(d.jsx)("h6",{children:"Brand Danger Color"})}),Object(d.jsx)(b,{className:"bg-warning",children:Object(d.jsx)("h6",{children:"Brand Warning Color"})}),Object(d.jsx)(b,{className:"bg-info",children:Object(d.jsx)("h6",{children:"Brand Info Color"})}),Object(d.jsx)(b,{className:"bg-light",children:Object(d.jsx)("h6",{children:"Brand Light Color"})}),Object(d.jsx)(b,{className:"bg-dark",children:Object(d.jsx)("h6",{children:"Brand Dark Color"})})]})})]}),Object(d.jsxs)(s.j,{children:[Object(d.jsx)(s.n,{children:"Grays"}),Object(d.jsx)(s.k,{children:Object(d.jsxs)(s.ub,{className:"mb-3",children:[Object(d.jsx)(b,{className:"bg-gray-100",children:Object(d.jsx)("h6",{children:"Gray 100 Color"})}),Object(d.jsx)(b,{className:"bg-gray-200",children:Object(d.jsx)("h6",{children:"Gray 200 Color"})}),Object(d.jsx)(b,{className:"bg-gray-300",children:Object(d.jsx)("h6",{children:"Gray 300 Color"})}),Object(d.jsx)(b,{className:"bg-gray-400",children:Object(d.jsx)("h6",{children:"Gray 400 Color"})}),Object(d.jsx)(b,{className:"bg-gray-500",children:Object(d.jsx)("h6",{children:"Gray 500 Color"})}),Object(d.jsx)(b,{className:"bg-gray-600",children:Object(d.jsx)("h6",{children:"Gray 600 Color"})}),Object(d.jsx)(b,{className:"bg-gray-700",children:Object(d.jsx)("h6",{children:"Gray 700 Color"})}),Object(d.jsx)(b,{className:"bg-gray-800",children:Object(d.jsx)("h6",{children:"Gray 800 Color"})}),Object(d.jsx)(b,{className:"bg-gray-900",children:Object(d.jsx)("h6",{children:"Gray 900 Color"})})]})})]})]})}}}]);
//# sourceMappingURL=7.172fedbd.chunk.js.map