(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(m);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var r=n("NOtv")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,s,c=t.prefix||"__jp",u=t.name||c+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){d(),n&&n(new Error("Timeout"))}),f));function d(){i.parentNode&&i.parentNode.removeChild(i),window[u]=a,s&&clearTimeout(s)}return window[u]=function(e){r("jsonp got",e),d(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,p.parentNode.insertBefore(i,p),function(){window[u]&&d()}};var o=0;function a(){}},FGiv:function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(s=e,a,"day")||i(s,o,"hour")||i(s,r,"minute")||i(s,n,"second")||s+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("8ujH"),a=(r=o)&&r.__esModule?r:{default:r},i=n("H/qo");var s=function(e){return new Promise((function(t,n){return(0,a.default)(e,{param:"c",timeout:3500},(function(e,r){e&&n(e),r&&t(r)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+r+"="+e[n])}return t};t.default=function(e,t,n){var r=(0,i.validate)(e),o=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var a="https://vnovick.us19.list-manage.com/subscribe/post?u=2a6de8fa171277b6e4d0de1cd&amp;id=cdbfd95a3e";arguments.length<3&&"string"==typeof t?a=t:"string"==typeof n&&(a=n),a=a.replace(/\/post/g,"/post-json");var u="&EMAIL="+o+c(t),l=""+a+u;return s(l)}},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},IPpM:function(e,t,n){e.exports=n.p+"static/bg01_remote-c836cf6cc0f1bdfd2c30533e81b90a2a.jpg"},NOtv:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("lv48")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("7oih"),i=(n("f3/d"),n("obyI")),s=n.n(i);function c(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"icons"},s.a.socialLinks.map((function(e){var t=e.icon,n=e.name,r=e.url;return o.a.createElement("li",{key:n},o.a.createElement("a",{href:r,className:"icon "+t},o.a.createElement("span",{className:"label"},n)))}))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© RemoteTechTalks."),o.a.createElement("li",null,"Credits: ",o.a.createElement("a",{href:"http://unsplash.com/"},"Unsplash")," +",o.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function u(){return o.a.createElement("header",{id:"header"},o.a.createElement("h1",null,s.a.heading),o.a.createElement("p",null,s.a.subHeading))}n("a1Th"),n("Btvt"),n("I5cv"),n("KKXr");var l=n("G04T"),f=n.n(l);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,n;n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=a;function a(){var t;return(t=e.call(this)||this).state={email:"",msg:""},t.onSubmit=t.onSubmit.bind(m(t)),t}var i=a.prototype;return i.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation(),f()(this.state.email).then((function(e){""===t.state.email?t.setState({msg:"Please provide valid email"}):t.setState({email:"",msg:e.msg.split(".").slice(0,2).join(".")})})).catch((function(){console.log("Error"),t.setState({email:""})}))},i.render=function(){var e=this,t=this.state.msg;return o.a.createElement("form",{id:"signup-form",onSubmit:this.onSubmit},o.a.createElement("input",{type:"email",name:"email",value:this.state.email,id:"email",onChange:function(t){e.setState({email:t.target.value})},placeholder:"Email Address"}),o.a.createElement("input",{type:"submit",value:"Sign Up"}),o.a.createElement("span",{className:(t?"visible success":"")+" message"},t))},a}(r.Component);function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,n;n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=a;function a(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(d(t)),t}var i=a.prototype;return i.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var n=e.state,r=n.pos,o=n.lastPos;o=r,++r>=t.images.length&&(r=0),setTimeout((function(){o=r,e.setState({lastPos:o})}),t.delay/2),e.setState({lastPos:o,pos:r})}),t.delay)},i.componentDidMount=function(){this.rotateSlide()},i.render=function(){var e=this.state,t=e.pos,n=e.lastPos,r=this.props.settings;return o.a.createElement("div",{id:"bg"},r.images.map((function(e,r){return o.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:r===t?"visible top":r===n?"visible":""})})),";")},a}(r.PureComponent),g={images:[{url:n("IPpM"),position:"center"},{url:n("pyaX"),position:"center"},{url:n("uytB"),position:"center"}],delay:6e3};t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(u,null),o.a.createElement(p,null),o.a.createElement(c,null),o.a.createElement(h,{settings:g}))}},lv48:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var a=i[c];n=o.call(e,a),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("FGiv"),t.names=[],t.skips=[],t.formatters={}},obyI:function(e,t){e.exports={siteTitle:"Remote Tech Talks",manifestName:"remotetechtalks",manifestShortName:"Remotetechtalks",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/remote-tech-talks/",heading:"Remote Tech Talks",subHeading:"Talks about technology streamed live. Subscribe for updates",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/vnovick"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/vladimirnovick"},{icon:"fa-envelope-o",name:"Email",url:"mailto:vnovick@gmail.com"}]}},pyaX:function(e,t,n){e.exports=n.p+"static/bg02_remote-bde89f9089f5fa7762331e4b4a924f5d.jpg"},uytB:function(e,t,n){e.exports=n.p+"static/bg03_remote-7e3b10a4826d2881494adcb3770ad783.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-c820639e67fc8676b0e0.js.map