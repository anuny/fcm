!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports={comment:{pattern:/(\/\/.*|\/\*([\s\S]*?)\*\/)/g,style:"h-comment"},comment_hash:{pattern:/(\#.*)/g,style:"h-comment"},string:{pattern:/((\'.*?\')|(\".*?\")|(\`.*?\`))/g,style:"h-string"},numbers:{pattern:/(\-?(\d+|\d+\.\d+|\.\d+))/g,style:"h-number"},regex:{pattern:/([^\/]\/[^\/].+\/(g|i|m)*)/g,style:"h-regex"},keywords:{pattern:/(?:\b)(export |const|then|catch|let|new|RegExp|function|for|foreach|while|if|else|elseif|switch|break|as|return|this|class|self|default|var|false|true|null|undefined)(?:\b)/gi,style:"h-keyword"},operators:{pattern:/(\+|\-|\/|\*|\%|\/|\=|\!|\&lt;|\&gt;|\||\?|\.|\,|\;|\~|\`|\:|\^|\"|\'|\&amp;)/g,style:"h-operators"}}},function(e,t,n){"use strict";(function(e){function n(){o=!1;var e=i.slice(0);i.length=0,e.forEach(function(e){return e()})}function r(e,t){i.push(function(){return"function"==typeof e&&e.call(t)}),o||(o=!0,a())}t.a=r;var i=[],o=!1,a=void 0;if("undefined"!=typeof Promise){var s=Promise.resolve();a=function(){return s.then(n)}}else if(void 0!==e)a=function(){return e(n)};else if("undefined"!=typeof MessageChannel){var c=new MessageChannel,l=c.port1,u=c.port2;l.onmessage=n,a=function(){return u.postMessage(1)}}else a=function(){return setTimeout(n,0)}}).call(t,n(5).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach(function(n){return i(e,t,n)})}function i(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}function o(e,t,n){var r=e[t]||e._options[t]||{};if(Array.isArray(n))n.forEach(function(n){return o(e,t,n)});else{var i=e[n];Object.keys(r).forEach(function(e){i&&i.hasOwnProperty(e)&&(delete r[e],console.warn(t+'["'+e+'"] has already been defined as a "'+n+'" property'))})}return r}function a(){this.id=ee++,this.subs=[]}function s(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function c(e){if(e&&"object"===(void 0===e?"undefined":ie(e))){var t=void 0;return e.hasOwnProperty("__ob__")&&e.__ob__ instanceof l?t=e.__ob__:e.isSilk||(t=new l(e)),t}}function l(e){this.dep=new a,s(e,"__ob__",this),Array.isArray(e)?(e.__proto__=re,this.observeArray(e)):this.walk(e)}function u(e,t,n){var r=new a,i=c(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return a.target&&(r.depend(),i&&i.dep.depend(),Array.isArray(n)&&n.forEach(function(e){return e.__ob__&&e.__ob__.dep.depend()})),n},set:function(e){n!==e&&(n=e,i=c(e),r.notify())}})}function d(e){var t=e.id;null==se[t]&&(se[t]=1,ae.push(e)),ce||(ce=!0,Object(oe.a)(h))}function h(){ae.forEach(function(e){return e.run()}),ce=!1,se={},ae=[]}function f(e,t,n){var r=e._isSync;e._watchers.push(this),this.id=++ue,this.vm=e,this.sync=!!r,this.dirty=this.lazy,this.deps=[],this.depIds=[],this.cb=n,"function"==typeof t?(this.getter=t,this.setter=void 0):(this.getter=function(){return e[t]},this.setter=function(n){return e[t]=n}),this.lazy?this.value=void 0:this.value=this.get()}function p(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._options=t,this._watchers=[],this._isSync=!!t.sync,this._nextTick=function(t){return Object(oe.a)(t,e)},this._watcher=function(t,n){return new f(e,t,n)},this._set=function(t,n){var i={};i[t]=n,r(e,i),c(i)},m(this),g(this),y(this),v(this),"function"==typeof t.init&&t.init.call(this)}function m(e){var t=e._options.data;"function"==typeof t&&(t=t.call(e)),r(e,t),c(t)}function g(e){var t=o(e,"computed",["data"]);Z(e,t)}function y(e){var t=o(e,"method",["data","computed"]);for(var n in t)e[n]=t[n]}function v(e){var t=e._options.watch;if(t){Object.keys(t).forEach(function(n){return e.hasOwnProperty(n)&&e._watcher(n,t[n])})}}function b(e){var t=void 0,n=348;for(t=32768;t>8;t>>=1)n+=de[e-1900]&t?1:0;return n+w(e)}function w(e){return x(e)?65536&de[e-1900]?30:29:0}function x(e){return 15&de[e-1900]}function _(e,t){return de[e-1900]&65536>>t?30:29}function k(e){var t=void 0,n=0,r=0,i=new Date(1900,0,31),o=Math.round((e-i)/864e5);for(this.dayCyl=o+40,this.monCyl=14,t=1900;t<2050&&o>0;t++)r=b(t),o-=r,this.monCyl+=12;for(o<0&&(o+=r,t--,this.monCyl-=12),this.year=t,this.yearCyl=t-1864,n=x(t),this.isLeap=!1,t=1;t<13&&o>0;t++)n>0&&t==n+1&&0==this.isLeap?(--t,this.isLeap=!0,r=w(this.year)):r=_(this.year,t),1==this.isLeap&&t==n+1&&(this.isLeap=!1),o-=r,0==this.isLeap&&this.monCyl++;0==o&&n>0&&t==n+1&&(this.isLeap?this.isLeap=!1:(this.isLeap=!0,--t,--this.monCyl)),o<0&&(o+=r,--t,--this.monCyl),this.month=t,this.day=o+1}function T(e){return e=e-1900+36,he[e%10]+fe[e%12]}function E(e){return pe[(e-4)%12]}function S(e,t){var n=void 0;n=1===e?"正":e>10?"十"+me[e-10]:me[e],n+="月";var r={10:"初十",20:"二十",30:"三十"},i=r[t];return i||(i=ge[Math.floor(t/10)]+me[t%10]),{month:n,day:i}}function C(e,t,n){var r=new Date(e,t,n),i=new k(r),o=T(e),a=E(e),s=S(i.month,i.day);return{ganzhi:o,animal:a,month:s.month,day:s.day}}function A(e,t){return new Date(31556925974.7*(e-1900)+6e4*ve[t]+Date.UTC(1900,0,6,2,5)).getUTCDate()}function I(e,t,n){var r="",i="",o=new Date(e,t,n),a=new k(o);return be.forEach(function(e){var t=void 0,n=void 0;e.match(/^(\d{2})(.{2})([\s\*])(.+)$/)&&(t=Number(RegExp.$1)-a.month,n=Number(RegExp.$2)-a.day,0==t&&0==n&&(i=RegExp.$4))}),A(e,2*t)===n&&(r=ye[2*t]),A(e,2*t+1)===n&&(r=ye[2*t+1]),i||r}function j(e){var t=e.split("-"),n=new Date;return n.setUTCFullYear(t[0],t[1]-1,t[2]),n.setUTCHours(0,0,0,0),n}function O(e){var t=j(e),n=t.getFullYear(),r=t.getMonth(),i=t.getDate();return{date:t,lunar:C(n,r,i),solar:I(n,r,i)}}function L(e){return this.init(e)}function M(e){var t=[].slice.call(e.getElementsByTagName("li")),n=function(){return B(e,t)};window.onload=n,window.onresize=n}function B(e,t){xe(e).css("display","block");var n=e.offsetWidth,r=t[0].offsetWidth,i=Math.round(n/r),o=(n-i*r)/i,a=[];t.forEach(function(e,t){var n=void 0,s=void 0,c=e.offsetHeight+o;if(t<i)a[t]=c,n=0,s=t*(r+o);else{var l=D(a);n=a[l],s=l*(r+o),a[l]+=c}n+="px",s+="px",xe(e).css({top:n,left:s})});var s=R(a)+"px";xe(e).css("height",s)}function R(e){for(var t=e.length,n=e[0],r=1;r<t;r++)n<e[r]&&(n=e[r]);return n}function D(e){for(var t=0,n=e[t],r=1,i=e.length;r<i;r++){var o=e[r];o<n&&(t=r,n=o)}return t}function H(e){var t=Object.prototype.toString,n=/\[object\s|\]/g;return t.call(e).replace(n,"")}function N(e,t){var n=t.language;"RegExp"==H(n)&&(e=e.replace(t.pattern,function(e){n=e.match(n)[0],t.language=n.trim()}))}function P(){this.data=this.parse(),this.language={generic:_e};for(var e in ke)this.extend(ke[e]);return this.render()}function F(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;")}function U(e,t){var n=Ee[t],r=n.imgs,i=r[e];Ce||(Ce=z(e,r.length),Te.appendChild(Ce.root)),Se.album=t,Se.len=r.length,X(i,function(t){Y(),Ce.index.innerText=e+1,Ce.imgBox.innerHTML="",Ce.imgBox.appendChild(t),Se.id=e})}function q(e){function t(e){if(1===e.nodeType){var n=e.getAttribute("ref");n&&(r[n]=e),[].slice.call(e.children).forEach(function(e){return t(e)})}}var n=document.createElement("div");n.innerHTML=e;var r={};return t(n.children[0]),r}function z(e,t){var n='\n  <div class="light-box-bot">\n    <div class="light-box-prev" ref="prevBtn">&lt;</div>\n    <div class="light-box-next" ref="nextBtn">&gt;</div>\n    <div class="light-box-info">\n      <i class="index" ref="index">0</i>/<i class="num" ref="num">'+t+"</i>\n    </div>\n  </div>\n  ",r='\n  <div class="light-box" ref="root">\n    <div class="light-box-mask" ref="mask"></div>\n    <div class="light-box-main" ref="main">\n      <div class="light-box-img" ref="imgBox"></div>\n      <div class="light-box-close" ref="closeBtn">&times;</div>\n      '+(t>1?n:"")+"\n    </div>\n  </div>\n  ",i=q(r);return i.prevBtn&&i.prevBtn.addEventListener("click",function(){Se.id>0&&(Se.id--,U(Se.id,Se.album))},!1),i.nextBtn&&i.nextBtn.addEventListener("click",function(){Se.id<Se.len-1&&(Se.id++,U(Se.id,Se.album))},!1),i.mask&&i.mask.addEventListener("click",function(){$(i.root)},!1),i.closeBtn&&i.closeBtn.addEventListener("click",function(){$(i.root)},!1),i}function $(e){e.parentNode&&e.parentNode.removeChild(e),Se.id=0,Ce=null,e=null}function W(){var e,t;return window.innerWidth?e=window.innerWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),window.innerHeight?t=window.innerHeight:document.body&&document.body.clientHeight&&(t=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(t=document.documentElement.clientHeight,e=document.documentElement.clientWidth),{width:e,height:t}}function Y(){var e=W().width,t=W().height,n=Se.img.width,r=Se.img.height,i=n/r;n>=e&&(n=e-30,r=parseInt(n/i)),r>=t&&(r=t-100,n=parseInt(r*i)),Ce.main.style.width=n+"px",Ce.main.style.height=r+"px",Ce.main.style.marginTop=-r/2+"px",Ce.main.style.marginLeft=-n/2+"px"}function X(e,t){var n=new Image;if(n.src=e,n.complete)return Se.img.width=n.width,Se.img.height=n.height,t(n),void(n=null);n.onload=function(){Se.img.width=n.width,Se.img.height=n.height,t(n),n=null}}function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(void 0===t){var r=null;if(document.cookie&&""!=document.cookie)for(var i=document.cookie.split(";"),o=0;o<i.length;o++){var a=i[o].trim();if(a.substring(0,e.length+1)==e+"="){r=decodeURIComponent(a.substring(e.length+1));break}}return r}null===t&&(t="",n.expires=-1);var s="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,s="; expires="+c.toUTCString()}var l=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,l,u,d].join("")}function J(e,t){var n=void 0;t instanceof Node?n=t.childNodes:(n=document.body.childNodes,document.title=K(e,document.title));for(var r=0;r<n.length;r++){var i=n.item(r);"||BR|HR|TEXTAREA|".indexOf("|"+i.tagName+"|")>0||(""!=i.title&&null!=i.title&&(i.title=K(e,i.title)),""!=i.alt&&null!=i.alt&&(i.alt=K(e,i.alt)),"INPUT"==i.tagName&&""!=i.value&&"text"!=i.type&&"hidden"!=i.type&&(i.value=K(e,i.value)),3==i.nodeType?i.data=K(e,i.data):J(e,i))}}function K(e,t){return""==t||null==t?"":e?Q(t):V(t)}function Q(e){for(var t="",n=0;n<e.length;n++)e.charCodeAt(n)>1e4&&-1!=Ae.indexOf(e.charAt(n))?t+=Ie.charAt(Ae.indexOf(e.charAt(n))):t+=e.charAt(n);return t}function V(e){for(var t="",n=0;n<e.length;n++)e.charCodeAt(n)>1e4&&-1!=Ie.indexOf(e.charAt(n))?t+=Ae.charAt(Ie.indexOf(e.charAt(n))):t+=e.charAt(n);return t}Object.defineProperty(t,"__esModule",{value:!0});var Z=(n(4),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t){var r=t[n];"function"==typeof r&&(r={get:r},r.enumerable=!0,r.configurable=!0,Object.defineProperty(e,n,r))}}),ee=0;a.target=null,a.prototype={depend:function(){a.target&&a.target.addDep(this)},addSub:function(e){this.subs.push(e)},removeSub:function(e){var t=this.subs.indexOf(e);t>-1&&this.subs.splice(t,1)},notify:function(){this.subs.forEach(function(e){return e.update()})}};var te=Array.prototype,ne=Object.create(te);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=te[e];s(ne,e,function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t.apply(this,r),a=this.__ob__,s=void 0;switch(e){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2)}return s&&a.observeArray(s),a.dep.notify(),o})});var re=ne,ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};l.prototype={walk:function(e){Object.keys(e).forEach(function(t){return u(e,t,e[t])})},observeArray:function(e){e.forEach(function(e){return c(e)})}};var oe=n(1),ae=[],se={},ce=!1,le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue=0;f.prototype={get:function(){var e=this.vm;a.target=this;var t=this.getter?this.getter.call(e,e):null;return a.target=null,t},set:function(e){this.setter.call(this.vm,e)},update:function(){this.lazy?this.dirty=!0:this.sync?this.run():d(this)},run:function(){var e=this.get(),t=this.value;this.value=e,e===t&&"object"!==(void 0===e?"undefined":le(e))||this.cb&&this.cb.call(this.vm,e,t)},addDep:function(e){this.depIds.indexOf(e.id)<0&&(this.deps.push(e),this.depIds.push(e.id),e.addSub(this))},teardown:function(){this.vm._watchers.splice(this.vm._watchers.indexOf(this),1);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.vm=this.cb=this.value=null},evaluate:function(){var e=a.target;this.value=this.get(),this.dirty=!1,a.target=e},depend:function(){this.deps.forEach(function(e){return e.depend()})}};var de=new Array(19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448),he=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸"),fe=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"),pe=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"),me=new Array("日","一","二","三","四","五","六","七","八","九","十"),ge=new Array("初","十","廿","卅","　"),ye=new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"),ve=new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483633,504758),be=new Array("0101 春节","0115 元宵","0505 端午","0603 生日","0707 七夕","0715 中元","0815 中秋","0909 重阳","1208 腊八","1224 小年","0100 除夕"),we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};L.prototype={constructor:L,init:function(e){return"string"==typeof e&&(e=document.querySelector(e)),e&&e.nodeType?(this.el=e,this):this},text:function(e){return e?(this.el.textContent=e,this):this.el.textContent},html:function(e){return e?(this.el.innerHTML=e,this):this.el.innerHTML},val:function(e){return e?(this.el.value=e,this):this.el.value},attr:function(e,t){return void 0!=t?(this.el.setAttribute(e,t),this):this.el.getAttribute(e)},css:function(e,t){if(void 0==t){if("object"!==(void 0===e?"undefined":we(e))){return(window.getComputedStyle(this.el)||this.el.currentStyle)[e]}for(var n in e)this.el.style[n]=e[n]}else this.el.style[e]=t;return this},hasClass:function(e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(this.el.className)},addClass:function(e){return this.hasClass(e)||(this.el.className=[this.el.className,e].join(" ").replace(/(^\s+)|(\s+$)/g,"")),this},removeClass:function(e){return this.hasClass(e)&&(this.el.className=this.el.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/(^\s+)|(\s+$)/g,"")),this}};var xe=function(e){return new L(e)},_e=n(0),ke={css:n(8),html:n(9),javascript:n(10),java:n(11),json:n(12),markdown:n(13),shell:n(14),sql:n(15),tree:n(16),php:n(17),apache:n(18)};P.prototype={constructor:P,parse:function(){for(var e=[],t=document.getElementsByTagName("pre"),n=/\blang(?:uage)?-(\w+)\b/i,r=0,i=t.length;r<i;r++){var o=t[r],a=o.getElementsByTagName("code")[0],s=xe(o).attr("class"),c="",l=null;if(a?(c=xe(a).text(),s=xe(a).attr("class")):c=xe(o).text(),s){var u=s.match(n);u&&(l=u[1]),l&&(l=l.toLowerCase())}e.push({element:{pre:o,code:a},language:l,source:c})}return e},extend:function(e){var t=e.language,n=e.suffix,r=e.rule;if(this.language[t]=r,n&&Array==n.constructor)for(var i=0,o=n.length;i<o;i++)this.language[n[i]]=r;return this},render:function(e){for(var t=this.data,n=0,r=t.length;n<r;n++){var i=t[n].element.pre,e=t[n].element.code,o=t[n].language,a=t[n].source;a=F(a),o&&(a=this._highlight(a,o)),e?xe(e).addClass("code-highlight").html(a):xe(i).addClass("code-highlight").html(a)}return this},_highlight:function(e,t){var n=this,r=0,i=[],t=n.language[t];if(!t)return e;for(var o in t)N(e,t[o]),t.hasOwnProperty(o)&&t[o].language&&n.language[t[o].language]&&(e=e.replace(t[o].pattern,function(e,a,s){return i[r++]=n._highlight(a,t[o].language),e.replace(a,"___subtmpl"+(r-1)+"___")}));for(var o in t)t.hasOwnProperty(o)&&void 0===t[o].language&&(e=e.replace(t[o].pattern,"___"+o+"___$1___end"+o+"___"));var a=[];e=e.replace(/___(?!subtmpl)\w+?___/g,function(e){var n="end"==e.substr(3,3),r=(n?e.substr(6):e.substr(3)).replace(/_/g,""),i=a.length>0?a[a.length-1]:null;return!n&&(null==i||r==i||null!=i&&t[i]&&void 0!=t[i].embed&&t[i].embed.indexOf(r)>=0)?(a.push(r),e):n&&r==i?(a.pop(),e):""});for(var o in t)t.hasOwnProperty(o)&&(e=e.replace(new RegExp("___end"+o+"___","g"),"</span>").replace(new RegExp("___"+o+"___","g"),'<span class="'+t[o].style+'">'));for(var o in t)t.hasOwnProperty(o)&&void 0!==t[o].language&&void 0!==n.language[t[o].language]&&(e=e.replace(/___subtmpl\d+___/g,function(e){var t=parseInt(e.replace(/___subtmpl(\d+)___/,"$1"),10);return i[t]}));return e}};var Te=document.querySelector("body"),Ee={},Se={album:"",img:{width:0,height:0},len:0,id:0},Ce=void 0,Ae="皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄",Ie="皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩",je=Array.prototype.slice;!function(){var e=void 0;je.call(document.querySelectorAll("a")).forEach(function(t){var n=t.href;/^((.*\:)?\/\/)/.test(n)&&(t.addEventListener("mouseenter",function(){e=document.createElement("link"),e.href=n,e.rel="prerender",document.head.appendChild(e)}),t.addEventListener("mouseleave",function(){document.head.removeChild(e),e=null}))})}(),function(){je.call(document.querySelectorAll(".lunar-calendar")).forEach(function(e){var t=xe(e).text(),n=O(t),r=n.lunar,i=r.ganzhi+"["+r.animal+"]年 "+r.month+r.day;if(""!==n.solar){i+="<a "+("生日"==n.solar?' href="javascript:void(0)"':' href="https://baike.baidu.com/item/'+n.solar+'" target="_blank"')+">"+n.solar+"</a>"}xe(e).html(i).attr("title",t)})}(),function(){je.call(document.querySelectorAll(".waterfall")).forEach(function(e,t){var n="";je.call(e.getElementsByTagName("img")).forEach(function(e){n+='<li><a href="'+e.src+'" data-lightbox="lightbox-'+t+'"><img src="'+e.src+'"></a></li>'}),xe(e).html(n),M(e)})}(),function(){var e=document.querySelectorAll("a");[].slice.call(e).forEach(function(e){var t=e.getAttribute("data-lightbox");if(t){var n=e.getAttribute("href");t in Ee?(Ee[t].imgs.push(n),Ee[t].els.push(e)):(Ee[t]={},Ee[t].imgs=[n],Ee[t].els=[e])}});for(var t in Ee)!function(e){Ee[e].els.forEach(function(t,n){t.addEventListener("click",function(t){if(U(n,e),!t.preventDefault)return!1;t.preventDefault()})})}(t)}(),function(){new P}(),new p({data:{langBtn:xe("#setting-lang"),colorBtn:xe("#setting-color"),docEl:xe(document.documentElement),isDk:"true"==G("isDk"),isTc:"true"==G("isTc")},watch:{isTc:function(e){this.updateLang()},isDk:function(e){this.updateColor()}},method:{updateLang:function(){J(this.isTc),this.isTc?this.langBtn.addClass("active").attr("title","简体"):this.langBtn.removeClass("active").attr("title","繁体")},updateColor:function(){this.isDk?(this.docEl.addClass("color-dark"),this.colorBtn.addClass("active").attr("title","白天")):(this.docEl.removeClass("color-dark"),this.colorBtn.removeClass("active").attr("title","夜晚"))},bindLang:function(){var e=this;this.langBtn.el.addEventListener("click",function(){e.isTc=!e.isTc,G("isTc",e.isTc,{path:"/"})})},bindColor:function(){var e=this;this.colorBtn.el.addEventListener("click",function(){e.isDk=!e.isDk,G("isDk",e.isDk,{path:"/"})})}},init:function(){this.updateLang(),this.updateColor(),this.bindLang(),this.bindColor()}});new p({data:function(){var e=document.documentElement,t=document.body,n=document.querySelector("#backtop");return{docHeight:0,scrollTop:0,element:e,elebody:t,backEl:n,ratioEl:n.getElementsByTagName("span")[0],backIsShow:!1,timer:null,isTop:!0}},computed:{ratio:function(){return 0===this.docHeight&&this.setDocHeight(),parseInt((this.scrollTop/this.docHeight*100).toFixed())}},watch:{ratio:function(e){e>0?this.showBackTop():this.hideBackTop(),this.isTop||this.clearTimer(),this.isTop=!1}},method:{goTop:function(){var e=this;this.timer=setInterval(function(){var t=Math.floor(-e.scrollTop/5);e.element.scrollTop=e.scrollTop+t,e.isTop=!0,0===e.scrollTop&&e.clearTimer()},30)},showBackTop:function(){this.backIsShow||(xe(this.backEl).addClass("show"),this.backIsShow=!0),xe(this.ratioEl).text(this.ratio+"%")},hideBackTop:function(){this.backIsShow&&(xe(this.backEl).removeClass("show"),this.backIsShow=!1)},setDocHeight:function(){var e=this.element?this.element.clientHeight:0,t=this.elebody?this.elebody.clientHeight:0,n=void 0;window.innerHeight?n=window.innerHeight:t&&(n=t),e&&(n=e),this.docHeight=Math.max(e,t)-n},setScrollTop:function(){var e=this.element?this.element.scrollTop:0,t=this.elebody?this.elebody.scrollTop:0;this.scrollTop=Math.max(e,t)},clearTimer:function(){clearInterval(this.timer)}},init:function(){var e=this;window.addEventListener("load",function(){return e.setDocHeight()}),window.addEventListener("scroll",function(){return e.setScrollTop()}),this.backEl.addEventListener("click",function(){return e.goTop()})}})},function(e,t){},function(e,t,n){(function(e){function r(e,t){this._id=e,this._clearFn=t}var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[c]=r,s(c),c++}function i(e){delete l[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(u)setTimeout(a,0,e);else{var t=l[e];if(t){u=!0;try{o(t)}finally{i(e),u=!1}}}}if(!e.setImmediate){var s,c=1,l={},u=!1,d=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},s=function(t){e.port2.postMessage(t)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;s=function(t){var n=d.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(a,0,e)}}(),h.setImmediate=r,h.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(2),n(7))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&f&&(m=!1,f.length?p=f.concat(p):g=-1,p.length&&s())}function s(){if(!m){var e=i(a);m=!0;for(var t=p.length;t;){for(f=p,p=[];++g<t;)f&&f[g].run();g=-1,t=p.length}f=null,m=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,d,h=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var f,p=[],m=!1,g=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||m||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.prependListener=l,h.prependOnceListener=l,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,n){var r=n(0);e.exports={language:"css",suffix:["css","less"],rule:{comment:r.comment,string:r.string,numbers:{pattern:/((\-?(\d+|\d+\.\d+|\.\d+)(\%|px|em|pt|in)?)|\#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g,style:"h-number"},property:{pattern:/(\@\w+|\:?\:\w+|[a-z\-]+\:)/g,style:"h-property"}}}},function(e,t,n){var r=n(0);e.exports={language:"html",suffix:["html","htm","tpl"],rule:{prolog:{pattern:/&lt;\?[\w\W]+?\?&gt;/,style:"h-doctype"},doctype:{pattern:/(&lt;\!DOCTYPE[\w\W]+?&gt;)/g,style:"h-doctype"},cdata:{pattern:/&lt;\!\[CDATA\[[\w\W]*?]]&gt;/g,style:"h-doctype"},comment:{pattern:/(&lt;\!--[\s\S]*?--&gt;)/g,style:"h-comment"},tag:{pattern:/(\&lt\;\/?\w(.|\n)*?\/?\&gt\;)/g,style:"h-tag",embed:["string"]},string:r.string,css:{pattern:/(?:\&lt;style.*?\&gt;)([\s\S]+?)(?:\&lt;\/style\&gt;)/gi,language:"css"},script:{pattern:/(?:\&lt;script.*?\&gt;)([\s\S]+?)(?:\&lt;\/script\&gt;)/gi,language:"js"}}}},function(e,t,n){var r=n(0),i=/(?:\b)(alert|all|anchor|anchors|area|assign|blur|button|checkbox|clearInterval|clearTimeout|clientInformation|close|closed|confirm|constructor|crypto|defaultStatus|document|element|elements|embed|embeds|event|fileUpload|focus|frame|innerHeight|innerWidth|link|location|mimeTypes|navigate|navigator|frames|frameRate|hidden|history|image|images|offscreenBuffering|open|opener|option|options|outerHeight|outerWidth|onblur|onclick|onerror|onfocus|onkeydown|onkeypress|onkeyup|onmouseover|onload|onmouseup|onmousedown|onsubmit|packages|pageXOffset|pageYOffset|parent|password|pkcs11|plugin|prompt|propertyIsEnum|radio|screenX|screenY|scroll|secure|self|status|submit|setTimeout|setInterval|taint|text|textarea|top|window)(?:\b)/gi,o=/(?:\b)(as|abstract|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|foreach|final|finally|float|for|from|function|false|goto|if|implements|import|in|instanceof|int|interface|let|long|native|NaN|new|null|of|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|true|throws|transient|try|typeof|then|var|void|volatile|while|with|undefined|forEach|map|keys|prototype|filter)(?:\b)/gi,a=/(?:\b)(Array|apply|Boolean|concat|call|cos|charAt|Date|decodeURI|decodeURIComponent|eval|encodeURI|encodeURIComponent|escape|fixed|getTime|hasOwnProperty|Infinity|indexOf|isFinite|isNaN|isPrototypeOf|join|console|log|lastIndexOf|Math|match|max|min|Number|Object|push|pop|print|parseFloat|parseInt|RegExp|reset|replace|String|substring|substr|sub|sup|slice|sort|shift|search|slice|splice|split|select|toString|toLowerCase|toUpperCase|toSource|unshift|unescape|untaint|valueOf|write|writeln)(?:\b)/gi;e.exports={language:"javascript",suffix:["js","jsx"],rule:{comment:r.comment,string:r.string,numbers:r.numbers,regex:r.regex,keywords:{pattern:o,style:"h-keyword h-bold"},bui:{pattern:i,style:"h-built-keyword"},obj:{pattern:a,style:"h-built-object"},operators:r.operators}}},function(e,t,n){var r=n(0),i=/(?:\b)(strictfp|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|false|true|null)(?:\b)/gi;e.exports={language:"java",suffix:["java","jsp","jsf"],rule:{comment:r.comment,string:r.string,numbers:r.numbers,regex:r.regex,keywords:{pattern:i,style:"h-keyword h-bold"},operators:r.operators}}},function(e,t,n){var r=n(0);e.exports={language:"json",suffix:["json"],rule:{comment:r.comment,keywords:r.keywords,property:{pattern:/([^{\n\$]*?\:)/g,style:"h-property"},string:r.string,numbers:r.numbers,regex:r.regex,operators:{pattern:/(\{|\}|\[|\])/g,style:"h-operators"}}}},function(e,t,n){n(0);e.exports={language:"markdown",suffix:["markdown","md"],rule:{heading:{pattern:/(\#.*)/g,style:"h-bold"},h1:{pattern:/(.*?\n\={1}.+\n)/g,style:"h-bold"},html:{pattern:/(&lt;\/?\w+(?:.*?)&gt;)/gi,language:"html"},code:{pattern:/\```([\s\S\r\n]*?)\```/gi,language:/([^`|^`\s].*\n)/gi}}}},function(e,t,n){var r=n(0),i=/(?:\b)(npm|cd|cp|run|install|i|basename|ls|dir|mkdir|mv|rm|echo|enable|eval|exec|exit|export|sftp|ssh|sudo|rpm|service|yum)(?:\b)/gi;e.exports={language:"shell",suffix:["shell","cmd","bash"],rule:{comment:{pattern:/(\#.*)/g,style:"h-comment"},string:r.string,keyword:r.keywords,npm:{pattern:i,style:"h-keyword h-bold"},par:{pattern:/(\s\-.*?\s|\:.*?\!)/gi,style:"h-keyword"},url:{pattern:/([a-zA-z]+\:\/\/[^\s]*)/g,style:"h-string"},path:{pattern:/(\.*\s|\/.*\n)/g,style:"h-string"}}}},function(e,t,n){var r=n(0),i="backup|alter|print|if|abs|avg|case|cast|coalesce|convert|count|current_timestamp|current_user|day|isnull|left|lower|month|nullif|replace|right|session_user|space|substring|sum|system_user|upper|user|yearabsolute|action|add|after|alter|as|asc|at|authorization|begin|bigint|binary|bit|by|cascade|char|character|check|checkpoint|close|collate|column|commit|committed|connect|connection|constraint|contains|continue|create|cube|current|current_date|current_time|cursor|database|date|deallocate|dec|decimal|declare|default|delete|desc|distinct|double|drop|dynamic|else|end|end-exec|escape|except|exec|execute|false|fetch|first|float|for|force|foreign|forward|free|from|full|function|global|goto|grant|group|grouping|having|hour|ignore|index|inner|insensitive|insert|instead|int|integer|intersect|into|is|isolation|key|last|level|load|local|max|min|minute|modify|move|name|national|nchar|next|no|numeric|of|off|on|only|open|option|order|out|output|partial|password|precision|prepare|primary|prior|privileges|procedure|public|read|real|references|relative|repeatable|restrict|return|returns|revoke|rollback|rollup|rows|rule|schema|scroll|second|section|select|sequence|serializable|set|size|smallint|static|statistics|table|temp|temporary|then|time|timestamp|to|top|transaction|translation|trigger|true|truncate|uncommitted|union|unique|update|values|varchar|varying|view|when|where|with|workall|use|createtable|dbcc|while|droptable|setup|nocount",o=new RegExp("(?:\\b)("+i+"|"+i.toUpperCase()+")(?:\\b)","gi"),a="all|and|any|between|cross|in|join|like|not|null|or|outer|some",s=new RegExp("(?:\\b)("+a+"|"+a.toUpperCase()+")(?:\\b)","gi");e.exports={language:"sql",suffix:["sql"],rule:{comment:{pattern:/(\-\-.*|\/\*[\s\S]*?\*\/)/g,style:"h-comment"},string:r.string,numbers:r.numbers,keywords:{pattern:o,style:"h-keyword h-bold"},obj:{pattern:s,style:"h-built-object"},vars:{pattern:/(\@[\w][\w\d]*)/g,style:"h-keyword"}}}},function(e,t,n){var r=n(0);e.exports={language:"tree",suffix:["tree"],rule:{comment:r.comment,comment2:{pattern:/(\#.*)/g,style:"h-comment"}}}},function(e,t,n){var r=n(0),i=/(?:\b)(and|base64_decode|base64_encode|copy|Cos|count|crypt|current|date|dbase_close|delete|dir|dirname|each|end|else|elseif|endif|if|ereg|eregi|eval|exec|Exp|explode|extract|exception|fclose|or|substr|this|xor|mktime|str_replace|strrpos|mail|function|while|for|foreach)(?:\b)/gi,o=/(?:\b)(array|as|break|case|class|const|continue|default|die|do|echo|empty|exit|extends|global|include|include_once|isset|list|new|print|require|require_once|return|static|switch|unset|use|var|final|interface|implements|public|private|protected|abstract|clone|try|catch|throw|int|string|bool|classic|object)(?:\b)/gi;e.exports={language:"php",suffix:["php"],rule:{comment:r.comment,string:r.string,numbers:r.numbers,regex:r.regex,var:{pattern:/(\$[\w][\w\d]*)/g,style:"h-tag"},keywords:{pattern:i,style:"h-keyword h-bold"},obj:{pattern:o,style:"h-built-object"},operators:r.operators}}},function(e,t,n){var r=n(0),i=/(?:\b)(ServerRoot|PidFile|Mutex|Listen|LoadModule|User|Group|ServerAdmin|ServerName|DocumentRoot|DirectoryIndex|Require|ErrorLog|LogLevel|LogFormat|CustomLog|Redirect|Alias|ScriptAlias|ScriptAliases|Scriptsock|AllowOverride|Options|TypesConfig|AddType|AddEncoding|AddHandler|Filters|AddOutputFilter|MIMEMagicFile|ErrorDocument|MaxRanges|EnableMMAP|EnableSendfile|Supplemental|Server-pool|Include|Configure|SSLSessionCache|SSLSessionCacheTimeout|LimitRequestBody|SSLRandomSeed|BrowserMatch|RequestHeader|unset|DNT|Order|Allow|OFFExecCGI|FollowSymLinks|Indexes|None|Deny|prefork|StartServers|MinSpareServers|MaxSpareServers|MaxClients|MaxRequestsPerChild|UserDir|chmod|warn|RewriteMap|RewriteCond|RewriteRule|ExpiresActive|ExpiresByType)(?:\b)/gi,o=/(?:\b)(All|all|On|on|off|Off)(?:\b)/gi;e.exports={language:"apache",suffix:["apache"],rule:{comment:r.comment_hash,string:r.string,numbers:r.numbers,keyword:{pattern:i,style:"h-keyword h-bold"},obj:{pattern:o,style:"h-built-object"},operators:r.operators}}}])});