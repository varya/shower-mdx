_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var f=p[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&a||!d.has(l)?(d.add(l),r[f]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FHnh:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={prop:{},eaten:""},a={defaultValue:function(){}};e.exports=function(e,t,n){var c="",u=!1,s=!1,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{},n);if("function"!==typeof f.defaultValue){var l=f.defaultValue;f.defaultValue=function(){return l}}var p,d,b={},v="";void 0===t&&(t=0);var y="\n\r{}",h=function(){return t>=e.length||y.indexOf(e[t])>-1?(u&&"}"!==e[t]&&(s=!0),!0):"}"===e[t]&&u},m="",O=function(n){for(m="";t<e.length&&y.indexOf(e.charAt(t))<0&&n.indexOf(e.charAt(t))>=0;)c+=e.charAt(t),m+=e.charAt(t),t++;return h()},j=function(n){for(m="";t<e.length&&y.indexOf(e.charAt(t))<0&&n.indexOf(e.charAt(t))<0;)c+=e.charAt(t),m+=e.charAt(t),t++;return v?p=m:v=m,h()},g=function(e,n){return c+=e,t++,!n&&h()},w=function(n){return g(n,!0),function(n){if(m="",e[t]!==n){for(;t<e.length&&(n!==e[t]||"\\"===e[t-1])&&"\n"!==e[t]&&"\r"!==e[t];)c+=e.charAt(t),m+=e.charAt(t),t++;"\n"===e[t]||"\r"===e[t]||t>=e.length?s=!0:(v?p=m.replace(/\\"/g,'"'):v=m.replace(/\\"/g,'"'),h())}}(n),e.charAt(t)!==n?i:g(n)?-1:void 0},x=!1,_=function(){switch(d){case"id":x?(b.id=v,x=!1):b.id=b.id||v;break;case"class":b.class||(b.class=[]),b.class.indexOf(v)<0&&b.class.push(v);break;case"key":if(!v)return i;v in b?"class"===v&&Boolean(p)&&b.class.push(p):(b[v]=void 0===p?f.defaultValue(v):"class"===v?[p]:p,"id"===v&&(x=!0))}d=void 0,v="",p=void 0};for(O(" \t\v"),"{"===e[t]&&(g("{"),u=!0);!h()&&!O(" \t\v");){if("."===e.charAt(t)){if(d="class",g(".")){s=!0;break}}else if("#"===e.charAt(t)){if(d="id",g("#")){s=!0;break}}else d="key";if(j("=\t\b\v \xa0")||!v)break;if("="===e.charAt(t)&&"key"===d){if(g("="))break;if('"'===e.charAt(t)){var P=w('"');if(-1===P)break;if(P===i)return i}else if("'"===e.charAt(t)){var A=w("'");if(-1===A)break;if(A===i)return i}else if(j(" \t\n\r\v=}"))break}_()}if(_(),u){if(!(t<e.length&&"}"===e[t]))return i;u=!1,g("}")}return s?i:{prop:b,eaten:c}}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n("nKUr"),o=n("rePB"),i=n("q1tI"),a=n("g4pe"),c=n.n(a),u=function(e){var t=e.title,n=(e.description,e.style),o=e.meta;return Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:t}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(null===o||void 0===o?void 0:o.description)&&Object(r.jsx)("meta",{name:"description",content:o.description}),Object(r.jsx)("meta",{property:"og:url",content:null===o||void 0===o?void 0:o.website}),Object(r.jsx)("meta",{property:"og:title",content:t}),(null===o||void 0===o?void 0:o.description)&&Object(r.jsx)("meta",{property:"og:description",content:o.description}),(null===o||void 0===o?void 0:o.cover)&&Object(r.jsx)("meta",{property:"og:image",content:o.cover}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),(null===o||void 0===o?void 0:o.twitter)&&Object(r.jsx)("meta",{name:"twitter:creator",content:o.twitter}),(null===o||void 0===o?void 0:o.twitter)&&Object(r.jsx)("meta",{name:"twitter:site",content:o.twitter}),Object(r.jsx)("meta",{name:"twitter:title",content:t}),Object(r.jsx)("meta",{name:"twitter:description",content:null===o||void 0===o?void 0:o.description}),(null===o||void 0===o?void 0:o.cover)&&Object(r.jsx)("meta",{name:"twitter:image",content:o.cover}),Object(r.jsx)("meta",{name:"twitter:image:alt",content:t}),Object(r.jsx)("style",{children:"\n          body {\n            background-color: var(--color-grey);\n          }\n            .shower {\n              --slide-ratio: calc(16 / 9);\n            }\n          ".concat(n)}),Object(r.jsx)("script",{async:!0,src:"https://cdn.splitbee.io/sb.js"})]})};u.defaultProps={title:"My Awesome Presentation"};var s=u;n("FHnh");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.e(8).then(n.t.bind(null,"kSrM",7));var p=!0;function d(e){var t=e.content,n=e.frontMatter,o=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=function(){return o.current.focus()};return document.getElementById("__next").setAttribute("tabindex","-1"),document.getElementById("__next").addEventListener("focus",e),document.body.className="shower",function(){document.getElementById("__next").removeEventListener("focus",e),document.body.className=""}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,l({},n)),Object(r.jsx)("div",{className:"shower list",ref:o,tabIndex:"-1",dangerouslySetInnerHTML:{__html:t}})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);