/* Minification failed. Returning unminified contents.
(11825,29-36): run-time error JS1019: Can't have 'break' outside of loop: break e
(11287,37-44): run-time error JS1019: Can't have 'break' outside of loop: break e
 */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e)||(t=r(e))&&("function"!=typeof(n=v.call(t,"constructor")&&t.constructor)||a.call(n)!==l))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){for((f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;o--;)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){for(d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a!==e)););return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){for(;e=e[u];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v)for(i=Te(p,u),v(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(y||d){if(y){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r&&!b.relative[e[n].type];n++);return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){for(t||(t=h(e)),n=t.length;n--;)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument==C||(T(o),n=!E);s=v[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){for(a=0;s=y[a++];)s(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=G.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this);if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1)for(t=u.shift();++l<s.length;)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1);r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){for(var n;-1<(n=S.inArray(t,s,n));)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();for(;t--;)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e).catch(function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(t=a?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n)for(c=0;o=a[c++];)he.test(o.type||"")&&n.push(o);return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return void 0!==S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;l--;)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){for(l=(t=(t||"").match(P)||[""]).length;l--;)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(a=S.event.handlers.call(this,u,l),t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],"input"===(l=(u=a[r]).nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){return S.cssProps[e]||_e[e]||(e in $e?e:_e[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Be.length;n--;)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=m(e)?(t=e,["*"]):e.match(P)).length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=e[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=S(this),r=vt(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=S.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}for(i=0;(o=p[i++])&&!e.isPropagationStopped();)f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=qt.exec(p);)n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),i=("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,r.left):(a=parseFloat(o)||0,parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},void 0===e&&(C.jQuery=C.$=S),S}),window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return"pfx"!=b||e}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return!1===d?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):I(e=(a+" "+q.join(d+" ")+d).split(" "),b,c)}var x,C,e={},g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r_svg="http://www.w3.org/2000/svg",s={},t={},u={},v=[],w=v.slice,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)(j=b.createElement("div")).id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},A=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}}(),B={}.hasOwnProperty;for(var L in C=F(B,"undefined")||F(B.call,"undefined")?function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")}:function(a,b){return B.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||7<b.documentMode)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return""===b.createElement("div").style.textShadow},s.opacity=function(){return a="opacity:.55",D(n.join(a+";")+(b||"")),/^0.55$/.test(j.opacity);var a,b},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:";return D((a+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+a)+n.join("linear-gradient(left top,#9f9, white);"+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=3<=b.offsetHeight}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&((c=new Boolean(c)).ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&((c=new Boolean(c)).ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r_svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r_svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r_svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r_svg,"clipPath")))},s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||(e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var e,f,h,d=0,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),(e="text"!==k.type)&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),e=(h=b.defaultView).getComputedStyle&&"textfield"!==h.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,g.removeChild(k)):/^(search|tel)$/.test(f)||(e=/^(url|email)$/.test(f)?k.checkValidity&&!1===k.checkValidity():k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))),e.addTest=function(a,b){if("object"==typeof a)for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;b="function"==typeof b?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function l(){var a=r.elements;return"string"==typeof a?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){return c||(c=b),j?c.createElement(a):(f||(f=m(c)),(g=f.cache[a]?f.cache[a].cloneNode():e.test(a)?(f.cache[a]=f.createElem(a)).cloneNode():f.createElem(a)).canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g);var g}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!function(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||function(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}(a,c),a}var f,j,c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",h=0,i={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return void 0===a.cloneNode||void 0===a.createDocumentFragment||void 0===a.createElement}()}catch(c){j=f=!0}}();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==c.shivCSS,supportsUnknownElements:j,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:q,createElement:n,createDocumentFragment:function(a,c){if(a||(a=b),j)return a.createDocumentFragment();for(var d=(c=c||m(a)).frag.cloneNode(),e=0,f=l(),g=f.length;e<g;e++)d.createElement(f[e]);return d}};a.html5=r,q(b)}(this,b),e._version="2.6.2",e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=function(b){var d,c=a.matchMedia||a.msMatchMedia;return c?c(b).matches:(y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d)},e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+v.join(" "),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b))for(var d in"img"!=a&&m(function(){t.removeChild(l)},50),y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}j=j||B.errorTimeout;var l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,u=(l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,r?"object":l?"script":"img"),v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};(B=function(a){function g(a,e,f,g,h){var i=function(a){a=a.split("!");var e,f,g,b=x.length,c=a.pop(),d=a.length;for(c={url:c,origUrl:c,prefixes:a},f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":void 0,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)e(j=a[i])?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)}).addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script");e=e||B.errorTimeout;for(o in k.src=a,d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||c(l=1)},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j;e=b.createElement("link"),c=i?h:c||f;for(j in e.href=a,e.rel="stylesheet",e.type="text/css",d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a,b){var c=a.Modernizr,d={addAllFeaturesAsClass:!1,detectDevice:!0,detectDeviceModel:!0,detectScreen:!0,detectOS:!0,detectBrowser:!0,detectPlugins:!0};function e(e){var m,n,o,p,q,r,s,t,f=function(a,b){var c,d,e;if(2<arguments.length)for(c=1,d=arguments.length;c<d;c+=1)f(a,arguments[c]);else for(e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},g=this,h=c.Detectizr.device,i=document.documentElement,j=["tv","tablet","mobile","desktop"],k=/[\t\r\n]/g,l={acrobat:{substrs:["Adobe","Acrobat"],progIds:["AcroPDF.PDF","PDF.PDFCtrl.5"]},flash:{substrs:["Shockwave","Flash"],progIds:["ShockwaveFlash.ShockwaveFlash.1"]},mediaplayer:{substrs:["Windows Media"],progIds:["wmplayer.ocx"]},silverlight:{substrs:["Silverlight"],progIds:["AgControl.AgControl"]}};if(d=f({},d,e||{}),g.is=function(a){return-1<h.userAgent.indexOf(a)},g.test=function(a){return a.test(h.userAgent)},g.exec=function(a){return a.exec(h.userAgent)},g.trim=function(a){return a.replace(/^\s+|\s+$/g,"")},g.toCamel=function(a){return null==a?"":String(a).replace(/((\s|\-|\.)+[a-z0-9])/g,function(a){return a.toUpperCase().replace(/(\s|\-|\.)/g,"")})},g.removeClass=function(a,b){var c=b||"",d=1===a.nodeType&&(a.className?(" "+a.className+" ").replace(k," "):"");if(d){for(;0<=d.indexOf(" "+c+" ");)d=d.replace(" "+c+" "," ");a.className=b?g.trim(d):""}},g.addVersionTest=function(a,b,c){null!=b&&""!==b&&(""!==(b=g.toCamel(b))&&(void 0!==c&&0<c&&(b=b.substr(0,c)),g.addConditionalTest(a+b,!0)))},g.checkOrientation=function(){a.clearTimeout(s),s=a.setTimeout(function(){t=h.orientation,h.orientation=a.innerHeight>a.innerWidth?"portrait":"landscape",g.addConditionalTest(h.orientation,!0),t!==h.orientation&&g.addConditionalTest(t,!1)},10)},g.addConditionalTest=function(a,b){null!=a&&""!==a&&(d.addAllFeaturesAsClass?c.addTest(a,b):(b="function"==typeof b?b():b)?c.addTest(a,!0):(delete c[a],g.removeClass(i,a)))},d.detectDevice){for(g.test(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)?(h.type=j[0],h.model="smartTv"):g.test(/Xbox|PLAYSTATION.3|Wii/i)?(h.type=j[0],h.model="gameConsole"):g.test(/iP(a|ro)d/i)?(h.type=j[1],h.model="ipad"):g.test(/tablet/i)&&!g.test(/RX-34/i)||g.test(/FOLIO/i)?(h.type=j[1],h.model=String(g.exec(/playbook/)||"")):g.test(/Linux/i)&&g.test(/Android/i)&&!g.test(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)?(h.type=j[1],h.model="android"):g.test(/Kindle/i)||g.test(/Mac.OS/i)&&g.test(/Silk/i)?(h.type=j[1],h.model="kindle"):g.test(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||g.test(/MB511/i)&&g.test(/RUTEM/i)?(h.type=j[1],h.model="android"):g.test(/BB10/i)?(h.type=j[1],h.model="blackberry"):(h.model=g.exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/i),null!==h.model?(h.type=j[2],h.model=String(h.model)):(h.model="",g.test(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)?h.type=j[2]:g.test(/Opera/i)&&g.test(/Windows.NT.5/i)&&g.test(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)?h.type=j[2]:g.test(/Windows.(NT|XP|ME|9)/i)&&!g.test(/Phone/i)||g.test(/Win(9|.9|NT)/i)||g.test(/\(Windows 8\)/i)?h.type=j[3]:g.test(/Macintosh|PowerPC/i)&&!g.test(/Silk/i)?h.type=j[3]:g.test(/Linux/i)&&g.test(/X11/i)?h.type=j[3]:g.test(/Solaris|SunOS|BSD/i)?h.type=j[3]:g.test(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!g.test(/Mobile/i)?(h.type=j[3],h.model="crawler"):h.type=j[2])),m=0,n=j.length;m<n;m+=1)g.addConditionalTest(j[m],h.type===j[m]);d.detectDeviceModel&&g.addConditionalTest(g.toCamel(h.model),!0),(h.type===j[1]||h.type===j[2])&&(a.onresize=function(a){g.checkOrientation(a)},g.checkOrientation())}if(d.detectScreen&&c.mq&&(g.addConditionalTest("smallScreen",c.mq("only screen and (max-width: 480px)")),g.addConditionalTest("verySmallScreen",c.mq("only screen and (max-width: 320px)")),g.addConditionalTest("veryVerySmallScreen",c.mq("only screen and (max-width: 240px)"))),d.detectOS&&(""!==h.model&&("ipad"===h.model||"iphone"===h.model||"ipod"===h.model?(h.osVersion=g.test(/os\s(\d+)_/)?RegExp.$1:"",h.os="ios",h.osVersionFull=g.test(/os ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""):"android"===h.model?(h.osVersion=(g.test(/os\s(\d+)_/)?RegExp.$1:"").substr(0,2),h.osVersion||(h.osVersion=g.test(/android\s(\d+)\./)?RegExp.$1:"",h.osVersionFull=g.test(/android ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""),h.os="android"):"blackberry"===h.model?(h.osVersion=g.test(/version\/([^\s]+)/)?RegExp.$1:"",h.os="blackberry"):"playbook"===h.model&&(h.osVersion=g.test(/os ([^\s]+)/)?RegExp.$1.replace(";",""):"",h.os="blackberry")),""===h.os&&(g.is("win")||g.is("16bit")?(h.os="windows",g.is("windows nt 6.3")?(h.osVersion="8",h.osVersionFull="8.1"):g.is("windows nt 6.2")||g.test(/\(windows 8\)/)?h.osVersion="8":g.is("windows nt 6.1")?h.osVersion="7":g.is("windows nt 6.0")?h.osVersion="vista":g.is("windows nt 5.2")||g.is("windows nt 5.1")||g.is("windows xp")?h.osVersion="xp":g.is("windows nt 5.0")||g.is("windows 2000")?h.osVersion="2k":g.is("winnt")||g.is("windows nt")?h.osVersion="nt":g.is("win98")||g.is("windows 98")?h.osVersion="98":(g.is("win95")||g.is("windows 95"))&&(h.osVersion="95")):g.is("mac")||g.is("darwin")?(h.os="mac",g.is("68k")||g.is("68000")?h.osVersion="68k":g.is("ppc")||g.is("powerpc")?h.osVersion="ppc":g.is("os x")&&(h.osVersion="os x")):g.is("webtv")?h.os="webtv":g.is("x11")||g.is("inux")?h.os="linux":g.is("sunos")?h.os="sun":g.is("irix")?h.os="irix":g.is("freebsd")?h.os="freebsd":g.is("bsd")&&(h.os="bsd")),""!==h.os&&(!h.osVersionFull&&h.osVersion&&(h.osVersionFull=h.osVersion),g.addConditionalTest(h.os,!0),g.addVersionTest(h.os,h.osVersionFull.replace(/\./g,"_")),g.addVersionTest(h.os,h.osVersion))),d.detectBrowser&&(g.test(/opera|webtv/i)||!g.test(/msie\s([0-9]{1,})/)&&!g.is("trident")?g.is("firefox")?(h.browserEngine="gecko",h.browser="firefox",h.browserVersion=(g.test(/firefox\/(\d+(\.?\d+)*)/)?RegExp.$1:"").substr(0,2)):g.is("gecko/")?h.browserEngine="gecko":g.is("opera")?(h.browser="opera",h.browserEngine="presto",h.browserVersion=g.test(/version\/(\d+)/)?RegExp.$1:g.test(/opera(\s|\/)(\d+)/)?RegExp.$2:""):g.is("konqueror")?h.browser="konqueror":g.is("chrome")?(h.browserEngine="webkit",h.browser="chrome",h.browserVersion=g.test(/chrome\/(\d+)/)?RegExp.$1:""):g.is("iron")?(h.browserEngine="webkit",h.browser="iron"):g.is("crios")?(h.browser="chrome",h.browserEngine="webkit",h.browserVersion=g.test(/crios\/(\d+)/)?RegExp.$1:""):g.is("applewebkit/")?(h.browser="safari",h.browserEngine="webkit",h.browserVersion=g.test(/version\/(\d+)/)?RegExp.$1:""):g.is("mozilla/")&&(h.browserEngine="gecko"):(h.browserEngine="trident",h.browser="ie",h.browserVersion=!a.addEventListener&&document.documentMode&&7===document.documentMode?"8compat":g.test(/trident.*rv[ :](\d+)\./)?RegExp.$1:g.test(/trident\/4\.0/)?"8":RegExp.$1),""!==h.browser&&(g.addConditionalTest(h.browser,!0),""!==h.browserVersion&&g.addVersionTest(h.browser,h.browserVersion)),g.addConditionalTest(h.browserEngine,!0)),d.detectPlugins){if(g.detectPlugin=function(a){for(m=0,n=b.plugins.length;m<n;m++){var c=b.plugins[m],d=c.name+c.description,e=0;for(o=0,p=a.length;o<p;o+=1)-1!==d.indexOf(a[o])&&(e+=1);if(e===a.length)return!0}return!1},g.detectObject=function(a,b){for(m=0,n=a.length;m<n;m++)try{var c=new ActiveXObject(a[m]);if(c)return!b||!b[m]||b[m].call(c)}catch(d){}return!1},a.ActiveXObject)for(q in l)l.hasOwnProperty(q)&&(r=l[q],g.detectObject(r.progIds,r.fns)&&(h.browserPlugins.push(q),g.addConditionalTest(q,!0)));else if(b.plugins)for(q in l)l.hasOwnProperty(q)&&(r=l[q],g.detectPlugin(r.substrs)&&(h.browserPlugins.push(q),g.addConditionalTest(q,!0)));b.javaEnabled()&&(h.browserPlugins.push("java"),g.addConditionalTest("java",!0))}}void 0!==c&&(c.Detectizr=c.Detectizr||{},c.Detectizr.device={type:"",model:"",orientation:"",browser:"",browserEngine:"",browserPlugins:[],browserVersion:"",os:"",osVersion:"",osVersionFull:"",userAgent:(b.userAgent||b.vendor||a.opera).toLowerCase()},c.Detectizr.detect=function(a){return new e(a)})}(this,navigator),function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=1<c||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){var b,c,e;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b));this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&d<a&&(d=Number(a))}),"function"==typeof(e=a.extend({},this.options,c[d])).stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||0<a.grep(this._pipe[b].filter,d).length)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(d=a.support.transform?{x:(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===d.length?12:4],y:d[16===d.length?13:5]}:(d=this.$stage.position(),{x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=0<d.x^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(3<Math.abs(d.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&h-30<b&&b<h+30?d=a:"right"===c&&h-f-30<b&&b<h-f+30?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=0<this.speed();this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&0<this._states.current[a]},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||c+e<=a)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&!(d<(c+=this._items[b].width()+this.settings.margin)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(0<e)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),(d=(((a=c+e)-h)%g+g)%g+h)!==a&&d-e<=i&&0<d-e&&(c=d-e,a=d,this.reset(c))):a=this.settings.rewind?(a%(i+=1)+i)%i:Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return(a===d||(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)===this.$stage.get(0)))&&(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){for(var d in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?c<a:a<c;case">":return d?a<c:c<a;case">=":return d?a<=c:c<=a;case"<=":return d?c<=a:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&-1<a.namespace.indexOf("owl"):c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return(a=(a=a.originalEvent||a||b.event).touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a).pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;for(a in b.clearInterval(this._interval),this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&void 0!==b.property.value?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||-1<a.inArray(d.get(0),this._loaded)||(e.each(a.proxy(function(c,d){var e,f=a(d),g=1<b.devicePixelRatio&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):((e=new Image).onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var f,b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[];a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(-1<(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))c="youtube";else if(-1<d[3].indexOf("vimeo"))c="vimeo";else{if(!(-1<d[3].indexOf("vzaar")))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){'<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after('<div class="owl-video-play-icon"></div>')};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,e=a(b.target).closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;for(a in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;for(a in this.stop(),this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;for(b in this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this)),this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0;a<e;a++){if(h<=b||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,0}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):0<b?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);void 0!==f&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;for(c in a(b).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=!c||b,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j_csstransforms=function(){return!!e("transform")},j_csstransforms3d=function(){return!!e("perspective")},j_cssanimations=function(){return!!e("animation")};(function(){return!!e("transition")})()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j_cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j_csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j_csstransforms3d())}(window.Zepto||window.jQuery,window,document),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(e),a=i(n);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var f="transitionend",d={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=o.default(t).css("transition-duration"),n=o.default(t).css("transition-delay"),i=parseFloat(e),a=parseFloat(n);return i||a?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){o.default(t).trigger(f)},supportsTransitionEnd:function(){return Boolean(f)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=e[i],s=a&&d.isElement(a)?"element":null===(l=a)||void 0===l?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?d.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if(void 0===o.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=o.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};d.jQueryDetection(),o.default.fn.emulateTransitionEnd=function(t){var e=this,n=!1;return o.default(this).one(d.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||d.triggerTransitionEnd(e)},t),this},o.default.event.special[d.TRANSITION_END]={bindType:f,delegateType:f,handle:function(t){if(o.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var c="bs.alert",h=o.default.fn.alert,g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.default.removeData(this._element,c),this._element=null},e._getRootElement=function(t){var e=d.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=o.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=o.default.Event("close.bs.alert");return o.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(o.default(t).removeClass("show"),o.default(t).hasClass("fade")){var n=d.getTransitionDurationFromElement(t);o.default(t).one(d.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){o.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this),i=n.data(c);i||(i=new t(this),n.data(c,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();o.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',g._handleDismiss(new g)),o.default.fn.alert=g._jQueryInterface,o.default.fn.alert.Constructor=g,o.default.fn.alert.noConflict=function(){return o.default.fn.alert=h,g._jQueryInterface};var m="bs.button",p=o.default.fn.button,_="active",v='[data-toggle^="button"]',y='input:not([type="hidden"])',b=".btn",E=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=o.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var i=this._element.querySelector(y);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(_))t=!1;else{var a=n.querySelector(".active");a&&o.default(a).removeClass(_)}t&&("checkbox"!==i.type&&"radio"!==i.type||(i.checked=!this._element.classList.contains(_)),this.shouldAvoidTriggerChange||o.default(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(_)),t&&o.default(this._element).toggleClass(_))},e.dispose=function(){o.default.removeData(this._element,m),this._element=null},t._jQueryInterface=function(e,n){return this.each(function(){var i=o.default(this),a=i.data(m);a||(a=new t(this),i.data(m,a)),a.shouldAvoidTriggerChange=n,"toggle"===e&&a[e]()})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();o.default(document).on("click.bs.button.data-api",v,function(t){var e=t.target,n=e;if(o.default(e).hasClass("btn")||(e=o.default(e).closest(b)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var i=e.querySelector(y);if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||E._jQueryInterface.call(o.default(e),"toggle","INPUT"===n.tagName)}}).on("focus.bs.button.data-api blur.bs.button.data-api",v,function(t){var e=o.default(t.target).closest(b)[0];o.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))}),o.default(window).on("load.bs.button.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(y);o.checked||o.hasAttribute("checked")?i.classList.add(_):i.classList.remove(_)}for(var a=0,s=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;a<s;a++){var l=t[a];"true"===l.getAttribute("aria-pressed")?l.classList.add(_):l.classList.remove(_)}}),o.default.fn.button=E._jQueryInterface,o.default.fn.button.Constructor=E,o.default.fn.button.noConflict=function(){return o.default.fn.button=p,E._jQueryInterface};var T="carousel",w="bs.carousel",C=o.default.fn[T],S="active",N="next",D="prev",A="slid.bs.carousel",I=".active.carousel-item",k={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},O={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},j={TOUCH:"touch",PEN:"pen"},P=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(N)},e.nextWhenVisible=function(){var t=o.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(D)},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(d.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(I);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)o.default(this._element).one(A,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?N:D;this._slide(i,this._items[t])}},e.dispose=function(){o.default(this._element).off(".bs.carousel"),o.default.removeData(this._element,w),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},k,t),d.typeCheckConfig(T,t,O),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&o.default(this._element).on("keydown.bs.carousel",function(e){return t._keydown(e)}),"hover"===this._config.pause&&o.default(this._element).on("mouseenter.bs.carousel",function(e){return t.pause(e)}).on("mouseleave.bs.carousel",function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",function(t){return t.preventDefault()}),this._pointerEvent?(o.default(this._element).on("pointerdown.bs.carousel",function(t){return e(t)}),o.default(this._element).on("pointerup.bs.carousel",function(t){return n(t)}),this._element.classList.add("pointer-event")):(o.default(this._element).on("touchstart.bs.carousel",function(t){return e(t)}),o.default(this._element).on("touchmove.bs.carousel",function(e){return function(e){t.touchDeltaX=e.originalEvent.touches&&1<e.originalEvent.touches.length?0:e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),o.default(this._element).on("touchend.bs.carousel",function(t){return n(t)}))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===N,i=t===D,o=this._getItemIndex(e),a=this._items.length-1;if((i&&0===o||n&&o===a)&&!this._config.wrap)return e;var s=(o+(t===D?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(I)),a=o.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:i,to:n});return o.default(this._element).trigger(a),a},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(e).removeClass(S);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&o.default(n).addClass(S)}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(I);if(t){var e=parseInt(t.getAttribute("data-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var n,i,a,s=this,l=this._element.querySelector(I),r=this._getItemIndex(l),u=e||l&&this._getItemByDirection(t,l),f=this._getItemIndex(u),c=Boolean(this._interval);if(a=t===N?(n="carousel-item-left",i="carousel-item-next","left"):(n="carousel-item-right",i="carousel-item-prev","right"),u&&o.default(u).hasClass(S))this._isSliding=!1;else if(!this._triggerSlideEvent(u,a).isDefaultPrevented()&&l&&u){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(u),this._activeElement=u;var h=o.default.Event(A,{relatedTarget:u,direction:a,from:r,to:f});if(o.default(this._element).hasClass("slide")){o.default(u).addClass(i),d.reflow(u),o.default(l).addClass(n),o.default(u).addClass(n);var g=d.getTransitionDurationFromElement(l);o.default(l).one(d.TRANSITION_END,function(){o.default(u).removeClass(n+" "+i).addClass(S),o.default(l).removeClass("active "+i+" "+n),s._isSliding=!1,setTimeout(function(){return o.default(s._element).trigger(h)},0)}).emulateTransitionEnd(g)}else o.default(l).removeClass(S),o.default(u).addClass(S),this._isSliding=!1,o.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this).data(w),i=r({},k,o.default(this).data());"object"==typeof e&&(i=r({},i,e));var a="string"==typeof e?e:i.slide;if(n||(n=new t(this,i),o.default(this).data(w,n)),"number"==typeof e)n.to(e);else if("string"==typeof a){if(void 0===n[a])throw new TypeError('No method named "'+a+'"');n[a]()}else i.interval&&i.ride&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=d.getSelectorFromElement(this);if(n){var i=o.default(n)[0];if(i&&o.default(i).hasClass("carousel")){var a=r({},o.default(i).data(),o.default(this).data()),s=this.getAttribute("data-slide-to");s&&(a.interval=!1),t._jQueryInterface.call(o.default(i),a),s&&o.default(i).data(w).to(s),e.preventDefault()}}},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return k}}]),t}();o.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",P._dataApiClickHandler),o.default(window).on("load.bs.carousel.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var i=o.default(t[e]);P._jQueryInterface.call(i,i.data())}}),o.default.fn[T]=P._jQueryInterface,o.default.fn[T].Constructor=P,o.default.fn[T].noConflict=function(){return o.default.fn[T]=C,P._jQueryInterface};var L="collapse",R="bs.collapse",x=o.default.fn[L],q="show",F="collapse",Q="collapsing",B="collapsed",H="width",U='[data-toggle="collapse"]',M={toggle:!0,parent:""},W={toggle:"boolean",parent:"(string|element)"},V=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(U)),i=0,o=n.length;i<o;i++){var a=n[i],s=d.getSelectorFromElement(a),l=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<l.length&&(this._selector=s,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){o.default(this._element).hasClass(q)?this.hide():this.show()},e.show=function(){var e,n,i=this;if(!(this._isTransitioning||o.default(this._element).hasClass(q)||(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t){return"string"==typeof i._config.parent?t.getAttribute("data-parent")===i._config.parent:t.classList.contains(F)})).length&&(e=null),e&&(n=o.default(e).not(this._selector).data(R))&&n._isTransitioning))){var a=o.default.Event("show.bs.collapse");if(o.default(this._element).trigger(a),!a.isDefaultPrevented()){e&&(t._jQueryInterface.call(o.default(e).not(this._selector),"hide"),n||o.default(e).data(R,null));var s=this._getDimension();o.default(this._element).removeClass(F).addClass(Q),this._element.style[s]=0,this._triggerArray.length&&o.default(this._triggerArray).removeClass(B).attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(s[0].toUpperCase()+s.slice(1)),r=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,function(){o.default(i._element).removeClass(Q).addClass("collapse show"),i._element.style[s]="",i.setTransitioning(!1),o.default(i._element).trigger("shown.bs.collapse")}).emulateTransitionEnd(r),this._element.style[s]=this._element[l]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&o.default(this._element).hasClass(q)){var e=o.default.Event("hide.bs.collapse");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",d.reflow(this._element),o.default(this._element).addClass(Q).removeClass("collapse show");var i=this._triggerArray.length;if(0<i)for(var a=0;a<i;a++){var s=this._triggerArray[a],l=d.getSelectorFromElement(s);null!==l&&(o.default([].slice.call(document.querySelectorAll(l))).hasClass(q)||o.default(s).addClass(B).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var r=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,function(){t.setTransitioning(!1),o.default(t._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse")}).emulateTransitionEnd(r)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){o.default.removeData(this._element,R),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},M,t)).toggle=Boolean(t.toggle),d.typeCheckConfig(L,t,W),t},e._getDimension=function(){return o.default(this._element).hasClass(H)?H:"height"},e._getParent=function(){var e,n=this;d.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',a=[].slice.call(e.querySelectorAll(i));return o.default(a).each(function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}),e},e._addAriaAndCollapsedClass=function(t,e){var n=o.default(t).hasClass(q);e.length&&o.default(e).toggleClass(B,!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=d.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this),i=n.data(R),a=r({},M,n.data(),"object"==typeof e&&e?e:{});if(!i&&a.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(a.toggle=!1),i||(i=new t(this,a),n.data(R,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return M}}]),t}();o.default(document).on("click.bs.collapse.data-api",U,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=o.default(this),n=d.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(n));o.default(i).each(function(){var t=o.default(this),n=t.data(R)?"toggle":e.data();V._jQueryInterface.call(t,n)})}),o.default.fn[L]=V._jQueryInterface,o.default.fn[L].Constructor=V,o.default.fn[L].noConflict=function(){return o.default.fn[L]=x,V._jQueryInterface};var z="dropdown",K="bs.dropdown",X=o.default.fn[z],Y=new RegExp("38|40|27"),$="disabled",J="show",G="dropdown-menu-right",Z="hide.bs.dropdown",tt="hidden.bs.dropdown",et="click.bs.dropdown.data-api",nt="keydown.bs.dropdown.data-api",it='[data-toggle="dropdown"]',ot=".dropdown-menu",at={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},st={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},lt=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!o.default(this._element).hasClass($)){var e=o.default(this._menu).hasClass(J);t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||o.default(this._element).hasClass($)||o.default(this._menu).hasClass(J))){var n={relatedTarget:this._element},i=o.default.Event("show.bs.dropdown",n),s=t._getParentFromElement(this._element);if(o.default(s).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar&&e){if(void 0===a.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var l=this._element;"parent"===this._config.reference?l=s:d.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&o.default(s).addClass("position-static"),this._popper=new a.default(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===o.default(s).closest(".navbar-nav").length&&o.default(document.body).children().on("mouseover",null,o.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),o.default(this._menu).toggleClass(J),o.default(s).toggleClass(J).trigger(o.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!o.default(this._element).hasClass($)&&o.default(this._menu).hasClass(J)){var e={relatedTarget:this._element},n=o.default.Event(Z,e),i=t._getParentFromElement(this._element);o.default(i).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),o.default(this._menu).toggleClass(J),o.default(i).toggleClass(J).trigger(o.default.Event(tt,e)))}},e.dispose=function(){o.default.removeData(this._element,K),o.default(this._element).off(".bs.dropdown"),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;o.default(this._element).on("click.bs.dropdown",function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=r({},this.constructor.Default,o.default(this._element).data(),t),d.typeCheckConfig(z,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(ot))}return this._menu},e._getPlacement=function(){var t=o.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=o.default(this._menu).hasClass(G)?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":o.default(this._menu).hasClass(G)&&(e="bottom-end"),e},e._detectNavbar=function(){return 0<o.default(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets,t._element)),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),r({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this).data(K);if(n||(n=new t(this,"object"==typeof e?e:null),o.default(this).data(K,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll(it)),i=0,a=n.length;i<a;i++){var s=t._getParentFromElement(n[i]),l=o.default(n[i]).data(K),r={relatedTarget:n[i]};if(e&&"click"===e.type&&(r.clickEvent=e),l){var u=l._menu;if(o.default(s).hasClass(J)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&o.default.contains(s,e.target))){var f=o.default.Event(Z,r);o.default(s).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),n[i].setAttribute("aria-expanded","false"),l._popper&&l._popper.destroy(),o.default(u).removeClass(J),o.default(s).removeClass(J).trigger(o.default.Event(tt,r)))}}}},t._getParentFromElement=function(t){var e,n=d.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||o.default(e.target).closest(ot).length):!Y.test(e.which))&&!this.disabled&&!o.default(this).hasClass($)){var n=t._getParentFromElement(this),i=o.default(n).hasClass(J);if(i||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!i||27===e.which||32===e.which)return 27===e.which&&o.default(n.querySelector(it)).trigger("focus"),void o.default(this).trigger("click");var a=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t){return o.default(t).is(":visible")});if(0!==a.length){var s=a.indexOf(e.target);38===e.which&&0<s&&s--,40===e.which&&s<a.length-1&&s++,s<0&&(s=0),a[s].focus()}}}},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return at}},{key:"DefaultType",get:function(){return st}}]),t}();o.default(document).on(nt,it,lt._dataApiKeydownHandler).on(nt,ot,lt._dataApiKeydownHandler).on(et+" keyup.bs.dropdown.data-api",lt._clearMenus).on(et,it,function(t){t.preventDefault(),t.stopPropagation(),lt._jQueryInterface.call(o.default(this),"toggle")}).on(et,".dropdown form",function(t){t.stopPropagation()}),o.default.fn[z]=lt._jQueryInterface,o.default.fn[z].Constructor=lt,o.default.fn[z].noConflict=function(){return o.default.fn[z]=X,lt._jQueryInterface};var rt="bs.modal",ut=o.default.fn.modal,ft="modal-open",dt="fade",ct="show",ht="modal-static",gt="hidden.bs.modal",mt="show.bs.modal",pt="focusin.bs.modal",_t="resize.bs.modal",vt="click.dismiss.bs.modal",yt="keydown.dismiss.bs.modal",bt="mousedown.dismiss.bs.modal",Et=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Tt={backdrop:!0,keyboard:!0,focus:!0,show:!0},wt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ct=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){var n=o.default.Event(mt,{relatedTarget:t});o.default(this._element).trigger(n),n.isDefaultPrevented()||(this._isShown=!0,o.default(this._element).hasClass(dt)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default(this._element).on(vt,'[data-dismiss="modal"]',function(t){return e.hide(t)}),o.default(this._dialog).on(bt,function(){o.default(e._element).one("mouseup.dismiss.bs.modal",function(t){o.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=o.default.Event("hide.bs.modal");if(o.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=o.default(this._element).hasClass(dt);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),o.default(document).off(pt),o.default(this._element).removeClass(ct),o.default(this._element).off(vt),o.default(this._dialog).off(bt),i){var a=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(a)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return o.default(t).off(".bs.modal")}),o.default(document).off(pt),o.default.removeData(this._element,rt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},Tt,t),d.typeCheckConfig("modal",t,wt),t},e._triggerBackdropTransition=function(){var t=this,e=o.default.Event("hidePrevented.bs.modal");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(ht);var i=d.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(d.TRANSITION_END),o.default(this._element).one(d.TRANSITION_END,function(){t._element.classList.remove(ht),n||o.default(t._element).one(d.TRANSITION_END,function(){t._element.style.overflowY=""}).emulateTransitionEnd(t._element,i)}).emulateTransitionEnd(i),this._element.focus()}},e._showElement=function(t){var e=this,n=o.default(this._element).hasClass(dt),i=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),o.default(this._dialog).hasClass("modal-dialog-scrollable")&&i?i.scrollTop=0:this._element.scrollTop=0,n&&d.reflow(this._element),o.default(this._element).addClass(ct),this._config.focus&&this._enforceFocus();var a=o.default.Event("shown.bs.modal",{relatedTarget:t}),s=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,o.default(e._element).trigger(a)};if(n){var l=d.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(d.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},e._enforceFocus=function(){var t=this;o.default(document).off(pt).on(pt,function(e){document!==e.target&&t._element!==e.target&&0===o.default(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown?o.default(this._element).on(yt,function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()}):this._isShown||o.default(this._element).off(yt)},e._setResizeEvent=function(){var t=this;this._isShown?o.default(window).on(_t,function(e){return t.handleUpdate(e)}):o.default(window).off(_t)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){o.default(document.body).removeClass(ft),t._resetAdjustments(),t._resetScrollbar(),o.default(t._element).trigger(gt)})},e._removeBackdrop=function(){this._backdrop&&(o.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=o.default(this._element).hasClass(dt)?dt:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),o.default(this._backdrop).appendTo(document.body),o.default(this._element).on(vt,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())}),n&&d.reflow(this._backdrop),o.default(this._backdrop).addClass(ct),!t)return;if(!n)return void t();var i=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){o.default(this._backdrop).removeClass(ct);var a=function(){e._removeBackdrop(),t&&t()};if(o.default(this._element).hasClass(dt)){var s=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,a).emulateTransitionEnd(s)}else a()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(Et)),n=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each(function(e,n){var i=n.style.paddingRight,a=o.default(n).css("padding-right");o.default(n).data("padding-right",i).css("padding-right",parseFloat(a)+t._scrollbarWidth+"px")}),o.default(n).each(function(e,n){var i=n.style.marginRight,a=o.default(n).css("margin-right");o.default(n).data("margin-right",i).css("margin-right",parseFloat(a)-t._scrollbarWidth+"px")});var i=document.body.style.paddingRight,a=o.default(document.body).css("padding-right");o.default(document.body).data("padding-right",i).css("padding-right",parseFloat(a)+this._scrollbarWidth+"px")}o.default(document.body).addClass(ft)},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Et));o.default(t).each(function(t,e){var n=o.default(e).data("padding-right");o.default(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each(function(t,e){var n=o.default(e).data("margin-right");void 0!==n&&o.default(e).css("margin-right",n).removeData("margin-right")});var n=o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var i=o.default(this).data(rt),a=r({},Tt,o.default(this).data(),"object"==typeof e&&e?e:{});if(i||(i=new t(this,a),o.default(this).data(rt,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else a.show&&i.show(n)})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Tt}}]),t}();o.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e,n=this,i=d.getSelectorFromElement(this);i&&(e=document.querySelector(i));var a=o.default(e).data(rt)?"toggle":r({},o.default(e).data(),o.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=o.default(e).one(mt,function(t){t.isDefaultPrevented()||s.one(gt,function(){o.default(n).is(":visible")&&n.focus()})});Ct._jQueryInterface.call(o.default(e),a,this)}),o.default.fn.modal=Ct._jQueryInterface,o.default.fn.modal.Constructor=Ct,o.default.fn.modal.noConflict=function(){return o.default.fn.modal=ut,Ct._jQueryInterface};var St=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Nt=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Dt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function At(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),a=[].slice.call(i.body.querySelectorAll("*")),s=function(t,n){var i=a[t],s=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var l=[].slice.call(i.attributes),r=[].concat(e["*"]||[],e[s]||[]);l.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===St.indexOf(n)||Boolean(Nt.test(t.nodeValue)||Dt.test(t.nodeValue));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,a=i.length;o<a;o++)if(i[o].test(n))return!0;return!1})(t,r)||i.removeAttribute(t.nodeName)})},l=0,r=a.length;l<r;l++)s(l);return i.body.innerHTML}var It="tooltip",kt="bs.tooltip",Ot=o.default.fn.tooltip,jt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Pt=["sanitize","whiteList","sanitizeFn"],Lt="fade",Rt="show",xt="show",Ft="hover",Bt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Ht={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ut={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Mt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Wt=function(){function t(t,e){if(void 0===a.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=o.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(o.default(this.getTipElement()).hasClass(Rt))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),o.default.removeData(this.element,this.constructor.DATA_KEY),o.default(this.element).off(this.constructor.EVENT_KEY),o.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&o.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===o.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=o.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){o.default(this.element).trigger(e);var n=d.findShadowRoot(this.element),i=o.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var s=this.getTipElement(),l=d.getUID(this.constructor.NAME);s.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&o.default(s).addClass(Lt);var r="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,u=this._getAttachment(r);this.addAttachmentClass(u);var f=this._getContainer();o.default(s).data(this.constructor.DATA_KEY,this),o.default.contains(this.element.ownerDocument.documentElement,this.tip)||o.default(s).appendTo(f),o.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new a.default(this.element,s,this._getPopperConfig(u)),o.default(s).addClass(Rt),o.default(s).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&o.default(document.body).children().on("mouseover",null,o.default.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,o.default(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(o.default(this.tip).hasClass(Lt)){var h=d.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(d.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(t){var e=this,n=this.getTipElement(),i=o.default.Event(this.constructor.Event.HIDE),a=function(){e._hoverState!==xt&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),o.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(o.default(this.element).trigger(i),!i.isDefaultPrevented()){if(o.default(n).removeClass(Rt),"ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,o.default(this.tip).hasClass(Lt)){var s=d.getTransitionDurationFromElement(n);o.default(n).one(d.TRANSITION_END,a).emulateTransitionEnd(s)}else a();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){o.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),o.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=At(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?o.default(e).parent().is(t)||t.empty().append(e):t.text(o.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return r({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t.config.offset(e.offsets,t.element)),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:d.isElement(this.config.container)?o.default(this.config.container):o.default(document).find(this.config.container)},e._getAttachment=function(t){return Bt[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)o.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if("manual"!==e){var n=e===Ft?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=e===Ft?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;o.default(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}}),this._hideModalHandler=function(){t.element&&t.hide()},o.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||o.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":Ft]=!0),o.default(e.getTipElement()).hasClass(Rt)||e._hoverState===xt?e._hoverState=xt:(clearTimeout(e._timeout),e._hoverState=xt,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===xt&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||o.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":Ft]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=o.default(this.element).data();return Object.keys(e).forEach(function(t){-1!==Pt.indexOf(t)&&delete e[t]}),"number"==typeof(t=r({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),d.typeCheckConfig(It,t,this.constructor.DefaultType),t.sanitize&&(t.template=At(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=o.default(this.getTipElement()),e=t.attr("class").match(jt);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(o.default(t).removeClass(Lt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this),i=n.data(kt),a="object"==typeof e&&e;if((i||!/dispose|hide/.test(e))&&(i||(i=new t(this,a),n.data(kt,i)),"string"==typeof e)){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Ht}},{key:"NAME",get:function(){return It}},{key:"DATA_KEY",get:function(){return kt}},{key:"Event",get:function(){return Mt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Ut}}]),t}();o.default.fn.tooltip=Wt._jQueryInterface,o.default.fn.tooltip.Constructor=Wt,o.default.fn.tooltip.noConflict=function(){return o.default.fn.tooltip=Ot,Wt._jQueryInterface};var Vt="bs.popover",zt=o.default.fn.popover,Kt=new RegExp("(^|\\s)bs-popover\\S+","g"),Xt=r({},Wt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Yt=r({},Wt.DefaultType,{content:"(string|element|function)"}),$t={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Jt=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),u(e.prototype.constructor=e,n);var a=i.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){o.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},a.setContent=function(){var t=o.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=o.default(this.getTipElement()),e=t.attr("class").match(Kt);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(t){return this.each(function(){var e=o.default(this).data(Vt),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new i(this,n),o.default(this).data(Vt,e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},l(i,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Xt}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return Vt}},{key:"Event",get:function(){return $t}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Yt}}]),i}(Wt);o.default.fn.popover=Jt._jQueryInterface,o.default.fn.popover.Constructor=Jt,o.default.fn.popover.noConflict=function(){return o.default.fn.popover=zt,Jt._jQueryInterface};var Gt="scrollspy",Zt="bs.scrollspy",te=o.default.fn[Gt],ee="active",ne="position",ie=".nav, .list-group",oe={offset:10,method:"auto",target:""},ae={offset:"number",method:"string",target:"(string|element)"},se=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,o.default(this._scrollElement).on("scroll.bs.scrollspy",function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":ne,n="auto"===this._config.method?e:this._config.method,i=n===ne?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,a=d.getSelectorFromElement(t);if(a&&(e=document.querySelector(a)),e){var s=e.getBoundingClientRect();if(s.width||s.height)return[o.default(e)[n]().top+i,a]}return null}).filter(Boolean).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){o.default.removeData(this._element,Zt),o.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},oe,"object"==typeof t&&t?t:{})).target&&d.isElement(t.target)){var e=o.default(t.target).attr("id");e||(e=d.getUID(Gt),o.default(t.target).attr("id",e)),t.target="#"+e}return d.typeCheckConfig(Gt,t,ae),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=o.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(ee),n.addClass(ee)):(n.addClass(ee),n.parents(ie).prev(".nav-link, .list-group-item").addClass(ee),n.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)),o.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(ee)}).forEach(function(t){return t.classList.remove(ee)})},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this).data(Zt);if(n||(n=new t(this,"object"==typeof e&&e),o.default(this).data(Zt,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return oe}}]),t}();o.default(window).on("load.bs.scrollspy.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=o.default(t[e]);se._jQueryInterface.call(n,n.data())}}),o.default.fn[Gt]=se._jQueryInterface,o.default.fn[Gt].Constructor=se,o.default.fn[Gt].noConflict=function(){return o.default.fn[Gt]=te,se._jQueryInterface};var le="bs.tab",re=o.default.fn.tab,ue="active",ce=".active",he="> li > .active",ge=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o.default(this._element).hasClass(ue)||o.default(this._element).hasClass("disabled")||this._element.hasAttribute("disabled"))){var e,n,i=o.default(this._element).closest(".nav, .list-group")[0],a=d.getSelectorFromElement(this._element);if(i){var s="UL"===i.nodeName||"OL"===i.nodeName?he:ce;n=(n=o.default.makeArray(o.default(i).find(s)))[n.length-1]}var l=o.default.Event("hide.bs.tab",{relatedTarget:this._element}),r=o.default.Event("show.bs.tab",{relatedTarget:n});if(n&&o.default(n).trigger(l),o.default(this._element).trigger(r),!r.isDefaultPrevented()&&!l.isDefaultPrevented()){a&&(e=document.querySelector(a)),this._activate(this._element,i);var u=function(){var e=o.default.Event("hidden.bs.tab",{relatedTarget:t._element}),i=o.default.Event("shown.bs.tab",{relatedTarget:n});o.default(n).trigger(e),o.default(t._element).trigger(i)};e?this._activate(e,e.parentNode,u):u()}}},e.dispose=function(){o.default.removeData(this._element,le),this._element=null},e._activate=function(t,e,n){var i=this,a=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?o.default(e).children(ce):o.default(e).find(he))[0],s=n&&a&&o.default(a).hasClass("fade"),l=function(){return i._transitionComplete(t,a,n)};if(a&&s){var r=d.getTransitionDurationFromElement(a);o.default(a).removeClass("show").one(d.TRANSITION_END,l).emulateTransitionEnd(r)}else l()},e._transitionComplete=function(t,e,n){if(e){o.default(e).removeClass(ue);var i=o.default(e.parentNode).find("> .dropdown-menu .active")[0];i&&o.default(i).removeClass(ue),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}o.default(t).addClass(ue),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),d.reflow(t),t.classList.contains("fade")&&t.classList.add("show");var a=t.parentNode;if(a&&"LI"===a.nodeName&&(a=a.parentNode),a&&o.default(a).hasClass("dropdown-menu")){var s=o.default(t).closest(".dropdown")[0];if(s){var l=[].slice.call(s.querySelectorAll(".dropdown-toggle"));o.default(l).addClass(ue)}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this),i=n.data(le);if(i||(i=new t(this),n.data(le,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();o.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),ge._jQueryInterface.call(o.default(this),"show")}),o.default.fn.tab=ge._jQueryInterface,o.default.fn.tab.Constructor=ge,o.default.fn.tab.noConflict=function(){return o.default.fn.tab=re,ge._jQueryInterface};var me="bs.toast",pe=o.default.fn.toast,ve="show",ye="showing",be="click.dismiss.bs.toast",Ee={animation:!0,autohide:!0,delay:500},Te={animation:"boolean",autohide:"boolean",delay:"number"},we=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=o.default.Event("show.bs.toast");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove(ye),t._element.classList.add(ve),o.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove("hide"),d.reflow(this._element),this._element.classList.add(ye),this._config.animation){var i=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains(ve)){var t=o.default.Event("hide.bs.toast");o.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains(ve)&&this._element.classList.remove(ve),o.default(this._element).off(be),o.default.removeData(this._element,me),this._element=null,this._config=null},e._getConfig=function(t){return t=r({},Ee,o.default(this._element).data(),"object"==typeof t&&t?t:{}),d.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;o.default(this._element).on(be,'[data-dismiss="toast"]',function(){return t.hide()})},e._close=function(){var t=this,e=function(){t._element.classList.add("hide"),o.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove(ve),this._config.animation){var n=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each(function(){var n=o.default(this),i=n.data(me);if(i||(i=new t(this,"object"==typeof e&&e),n.data(me,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e](this)}})},l(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"DefaultType",get:function(){return Te}},{key:"Default",get:function(){return Ee}}]),t}();o.default.fn.toast=we._jQueryInterface,o.default.fn.toast.Constructor=we,o.default.fn.toast.noConflict=function(){return o.default.fn.toast=pe,we._jQueryInterface},t.Alert=g,t.Button=E,t.Carousel=P,t.Collapse=V,t.Dropdown=lt,t.Modal=Ct,t.Popover=Jt,t.Scrollspy=se,t.Tab=ge,t.Toast=we,t.Tooltip=Wt,t.Util=d,Object.defineProperty(t,"__esModule",{value:!0})});;
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if((b=a.event.fix(g)).type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(j=m=-1*g.deltaY),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if((b=a.event.fix(g)).type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(j=m=-1*g.deltaY),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){var o,a,n;o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if(void 0!==t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&void 0!==c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&void 0!==c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);o.data(a)&&(o.data(a),N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3]))})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){t.autoDraggerLength=!(e.inArray(t.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"])>-1)&&t.autoDraggerLength,t.autoExpandScrollbar=!(e.inArray(t.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"])>-1)&&t.autoExpandScrollbar,t.scrollButtons.enable=!(e.inArray(t.theme,["minimal","minimal-dark"])>-1)&&t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,["minimal","minimal-dark"])>-1||t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,["minimal","minimal-dark"])>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){var r,o=e(this),n=o.data(a),i=n.opt;n.bindEvents||(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable&&function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}(),P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0)},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r);var a=(o=e(this)).offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])t=0;else{t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-i*B.scrollRatio.y&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-l*B.scrollRatio.x&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])t=0;else{t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){var n="mcsEaseOut",i=2.5>(_=1e3/(v-p)),r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),!1!==a&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return!1!==a&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver;return e.inArray(n,i)>-1&&!(e.inArray(n,["select","textarea"])>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?17*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:0}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:0})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r||(e?o?p/1.5:g:1e3/60),n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i||(e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":clearTimeout(f.step),$(f,"step"),Q(t),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&void 0!==t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=function(){!0===c.advanced.updateOnSelectorChange&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){!function(t){if(e(t).hasClass(d[2]))r();else{var n=new Image;n.onload=function(e,t){return function(){return t.apply(e,arguments)}}(n,function(){this.onload=null,e(t).addClass(d[2]),r(2)}),n.src=t.src}}(this)}))},c.advanced.autoUpdateTimeout))}()},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=function(e,t,o){return Math.round(e/t)*t-o}(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w])},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=function(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return 1>(e/=a/2)?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return 1>(e/=a/2)?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return 1>(e/=a/2)?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=a,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null),f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){var t=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!t&&document[t]};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),(a=[i[0].offsetTop,i[0].offsetLeft])[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})}()});;
function innerTab() { $(".innercontent").hide(), $(".innercontent:first").show(), $(".innerTab li").on("click", function(e) { e.stopPropagation(); var innerAbc = $(this).attr("data-tab");
        $(".innercontent").removeClass("current").hide(), $(this).addClass("current").siblings().removeClass("current"), $("#" + innerAbc).fadeIn(600).addClass("current") }) }

function ulToSelect() {
    function DropDown(el) { this.dd = el, this.placeholder = this.dd.children("span"), this.opts = this.dd.find("ul.dropdown > li"), this.val = "", this.index = -1, this.initEvents() } DropDown.prototype = { initEvents: function() { var obj = this;
            obj.dd.on("click", function(event) { return $(this).toggleClass("active"), !1 }), obj.opts.on("click", function() { var opt = $(this);
                obj.val = opt.text(), obj.index = opt.index(), obj.placeholder.text(obj.val) }) }, getValue: function() { return this.val }, getIndex: function() { return this.index } }, $(function() { new DropDown($("#dd"));
        $(document).click(function() { $(".wrapper-dropdown-3").removeClass("active") }) }) }

function checkButton() { $(".switch input").on("change", function() { $(this).is(":checked") ? ($(this).parents(".checkbox-slider").addClass("active"), $(this).parents(".checkbox-slider").find(".label2").addClass("white"), $(this).parents(".checkbox-slider").find(".label1").removeClass("white")) : ($(this).parents(".checkbox-slider").removeClass("active"), $(this).parents(".checkbox-slider").find(".label1").addClass("white"), $(this).parents(".checkbox-slider").find(".label2").removeClass("white")) }) }
;
function startDictation(){window.speechToText(function(e){var n=e.eventName,t=e.handle;switch(n){case"load":$("#micBtn").hasClass("mic-off")?t.start():($("#micBtn").removeClass("mic-on").addClass("mic-off"),t.stop());break;case"start":$(".mic-off").removeClass("mic-off").addClass("mic-on"),$(".inptSearch").attr("placeholder","Speak to search");break;case"result":if($("#micBtn").hasClass("mic-on")){var a=e.text;t.stop(),$(".inptSearch").val(a),getSearchResultTest(a),$(".lblResult").css("visibility","visible"),$(".blackoverlay").show(),$(".lblResult_new").length>0&&$("body").addClass("searchActive01")}break;case"error":case"end":default:turnOffMic(),t.stop(),$(".inptSearch").attr("placeholder","What are you looking for?")}})}function turnOffMic(){$(".mic-on").removeClass("mic-on").addClass("mic-off")}$(".mic-off").click(function(){$(".headsearch1").val(""),$(".mic-off").removeClass("mic-off").addClass("mic-on")}),window.speechToText=function(e){if(window.hasOwnProperty("webkitSpeechRecognition")){var n=new webkitSpeechRecognition;n.continuous=!0,n.interimResults=!1,n.lang="en-GB",e({eventName:"load",handle:n}),n.onstart=function(t){e({eventName:"start",handle:n})},n.onresult=function(t){var a={eventName:"result",handle:n,text:t.results[0][0].transcript};e(a)},n.onerror=function(t){if("no-speech"===t.error)var a={eventName:"start",handle:n};else a={eventName:"error",handle:n};e(a)},n.onend=function(){e({eventName:"end",handle:n})}}else{console.log("no voice support"),e({eventName:"unsupported",handle:n})}},-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?$("#micBtn").hide():-1!=navigator.userAgent.indexOf("Chrome")?$("#micBtn").show():-1!=navigator.userAgent.indexOf("Safari")?$("#micBtn").hide():-1!=navigator.userAgent.indexOf("Firefox")?$("#micBtn").hide():-1!=(navigator.userAgent.indexOf("UCBrowser/")||navigator.userAgent.indexOf("UCMini/"))?$("#micBtn").hide():(-1!=navigator.userAgent.indexOf("MSIE")||document.documentMode,$("#micBtn").hide());;
var windowWidth=$(window).width(),windowHeight=$(window).height();if($("footer").length)var footerHeight=$("footer").offset().top;var owlRefObj,is_chrome="object"==typeof window.chrome&&-1===navigator.appVersion.indexOf("Edge");function stickyHeadNav(){$(window).scroll(function(){44<$(window).scrollTop()?$("body").addClass("header-fixed"):$("body").removeClass("header-fixed")})}function telAsstsform(){$(".footerMainUl li a[data-tel]").each(function(){var tel=$(this).attr("data-tel");$(this).attr("href","tel:"+tel)})}function generateOwlBoth(target,looping,navigation,displayDots,itemCount,itemTabCount,itemMobileCount,margin,autoPlay,autoplayTimeout,navtext,lazyLoading){owlRefObj=$(target).owlCarousel({items:itemCount,loop:looping,margin:margin,dots:displayDots,nav:navigation,navText:navtext,autoplay:autoPlay,autoplayTimeout:2500,lazyLoad:lazyLoading,responsive:{0:{items:itemMobileCount},768:{items:itemTabCount},992:{items:itemCount}}})}function generateOwlMobile(target,looping,navigation,padding,itemCount,displayDots,responsivecount,desktopCount,margin,lazyLoading){$(window).width()<992?$(target).owlCarousel({items:itemCount,loop:looping,margin:margin,dots:displayDots,nav:navigation,navText:["",""],autoplay:!1,autoplayTimeout:2500,lazyLoad:lazyLoading,responsive:{0:{items:itemCount},600:{items:responsivecount},992:{items:desktopCount}}}):($(target).owlCarousel("destroy"),$(target).css("display","block"))}function generateOwlSmlDesk(target,looping,navigation,padding,itemCount,displayDots,responsivecount,desktopCount,margin,lazyLoading){$(window).width()<1200?$(target).owlCarousel({items:itemCount,loop:looping,margin:margin,dots:displayDots,nav:navigation,navText:["",""],autoplay:!1,autoplayTimeout:2500,lazyLoad:lazyLoading,responsive:{0:{items:itemCount},600:{items:responsivecount},1200:{items:desktopCount}}}):($(target).owlCarousel("destroy"),$(target).css("display","block"))}function mobileNav(){$(document).on("click",".js-hamburger",function(e){e.preventDefault(),$("body").css("position","fixed"),$("body").css("width","100%"),$(".overLay").show(),$(".mobiNav").animate({left:"0"}),$("body").hasClass("wob")?$(".mobileMenu .logoSect img").attr("src","assets/images/logo-white.png"):$(".mobileMenu .logoSect img").attr("src","assets/images/logo.png")}),$(document).on("click",".js-closebtn",function(e){$("body").css("position","relative"),$("body").css("width","auto"),$(".overLay").hide(),$(".mobiNav").animate({left:"-32rem"},"slow"),$(".exploreProd").animate({left:"-32rem"},"slow")}),$(document).on("click",".js-explore",function(e){var navigation=$(this).attr("data-href");$("#"+navigation).animate({left:"0"},"slow")}),$(document).on("click",".js-expProd",function(e){$(".exploreProd").animate({left:"-32rem"},"slow")}),$(document).on("click",".js-business",function(e){e.preventDefault()}),$(document).on("click",".js-personal",function(e){e.preventDefault()}),$(document).on("click",".js-mLnk",function(e){e.preventDefault(),$(this).hasClass("openTab")?$(this).removeClass("openTab").addClass("closeTab"):($(".js-mLnk").removeClass("openTab").addClass("closeTab"),$(this).removeClass("closeTab").addClass("openTab")),$(".openTab").next().slideDown(),$(".closeTab").next().slideUp()}),$(document).on("click",".js-sLevelM",function(e){e.preventDefault(),$(this).hasClass("openTab")?$(this).removeClass("openTab").addClass("closeTab"):($(".js-sLevelM").removeClass("openTab").addClass("closeTab"),$(this).removeClass("closeTab").addClass("openTab")),$(".openTab").next().slideDown(),$(".closeTab").next().slideUp()}),$(document).on("click",".js-sideMenu a",function(e){e.preventDefault();var tab_id=$(this).attr("data-tab");$(this).closest(".expMenuSect").find(".mSectnHd").removeClass("active"),$(this).closest("ul").find(".js-sideMenu a").removeClass("active"),$(this).addClass("active"),$("#"+tab_id).addClass("active")})}function scrollToUp(){var backToTop=function(){500<$(window).scrollTop()?$(".back-to-top").addClass("view"):$(".back-to-top").removeClass("view")};backToTop(),$(window).on("scroll",function(){backToTop()}),$(".back-to-top").on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},500)})}function expTab(){$(document).on("click",".js-lngMenu .tabBar li a",function(e){e.preventDefault();var tabs=$(this).attr("rel");$(".js-lngMenu .exmTab").hide(),$(".js-lngMenu .exmenuTab"+tabs).show(),$(".js-lngMenu .tabBar li a").removeClass("active"),$(this).addClass("active"),$(".exploreList li a").attr("tabindex","-1"),$(".exploreList li").removeClass("active"),$(".exploreList li:first-child").addClass("active"),$(".sLevel ul").removeClass("middleShow").attr("tabindex","-1").hide(),1==tabs&&($(".sLevel ul.accounts").addClass("middleShow").attr("tabindex","0").show(),$(".tLevel .tlist.savings").show()),2==tabs&&($(".sLevel ul.Nriaccounts").addClass("middleShow").attr("tabindex","0").show(),$(".tLevel .tlist.Nrisavings").show()),3==tabs&&$(".sLevel ul.Agriloans").addClass("middleShow").attr("tabindex","0").show()})}function exploreCatClick(){$(document).on("click",".js-sLevel li",function(e){var dataright=$(this).attr("data-right");$(".tLevel .tlist").hide(),$(".tLevel .tlist."+dataright).show(),$(this).parent("ul").find("a").removeClass("active"),$(this).find("a").addClass("active")})}function exploreHover(){$(document).on("mouseenter",".js-exploreList>li",function(e){$(this);e.preventDefault();var datatype=$(this).attr("data-type");$(".exploreList li").removeClass("active"),$(this).addClass("active"),$(".sLevel ul."+datatype).length?($(".sLevel ul").removeClass("middleShow").attr("tabindex","-1").hide(),$(this).parents(".mainSect").find(".sLevel ul."+datatype).attr("tabindex","0").addClass("middleShow").show()):$(".sLevel ul").removeClass("middleShow").attr("tabindex","-1").hide();var hoverThridCol=$(".middleShow .active").parent("li").data("right");$(".tLevel .tlist").hide(),$(".tLevel .tlist."+hoverThridCol).show()}),$(document).on("focusout",".js-exploreList>li>a",function(e){var parent=$(this).parent("li"),datatype=$(this).parent("li").attr("data-type");if(!$(".sLevel ul."+datatype).length){$(".exploreList li").removeClass("active"),parent.next().addClass("active");var nextDataType=parent.next().attr("data-type");$(".sLevel ul").removeClass("middleShow").attr("tabindex","-1").hide(),parent.parents(".mainSect").find(".sLevel ul."+nextDataType).attr("tabindex","0").addClass("middleShow").show()}})}function noHover(){$(".js-sLevel li.noHover").click(function(e){location.href=$(this).children("a").attr("href")})}function navMenu(){var _this;$(".js-nav > li").hover(function(e){(_this=$(this)).find(".subMenus").show(),_this.find(".mLnk").addClass("srw"),$(".js-nav > li").removeClass("active").addClass("nAct"),_this.addClass("active").removeClass("nAct"),$(".overLay").css("z-index","99").show();var sMenu=_this.find(".subMenus").height();_this.find(".blck").css("min-height",sMenu),$(".regional").length&&(_this.find(".js-exploreList li:first-child").addClass("active"),_this.find(".js-sLevel ul:first-child").show())},function(e){(_this=$(this)).find(".subMenus").hide(),_this.find(".mLnk").removeClass("srw"),_this.removeClass("active"),$(".js-nav li").removeClass("nAct"),$(".overLay").css("z-index","99").hide(),_this.find(".blck").css("min-height","auto")}),$(".keyboard").length&&$(".js-nav > li > a").hover(function(e){(_this=$(this).parent("li")).find(".subMenus").show(),_this.find(".mLnk").addClass("srw"),$(".js-nav > li").removeClass("active").addClass("nAct"),_this.addClass("active").removeClass("nAct"),$(".overLay").css("z-index","99").show();var sMenu=_this.find(".subMenus").height();_this.find(".blck").css("min-height",sMenu),$(".regional").length&&(_this.find(".js-exploreList li:first-child").addClass("active"),_this.find(".js-sLevel ul:first-child").show())},function(e){(_this=$(this).parent("li")).find(".subMenus").hide(),_this.find(".mLnk").removeClass("srw"),_this.removeClass("active"),$(".js-nav li").removeClass("nAct"),$(".overLay").css("z-index","99").hide(),_this.find(".blck").css("min-height","auto")}),$(".accessibleMenu .subMenus .megaColumn:last-child li:last-child a").focusout(function(event){$(this).parents(".subMenus").hide(),$(this).parents("li.fleft").find("a").removeClass("srw")}),$(".js-nav > li > a").on("keydown blur",function(e){$(document).unbind("hover"),e.shiftKey&&9===e.keyCode&&($(this).parent("li.fleft").find(".subMenus").hide(),$(this).parent("li.fleft").find("a").removeClass("srw"))}),$(".accessibleMenu").length||$(".js-nav > li").keyup(function(e){e.preventDefault(),e.stopImmediatePropagation(),$(".js-nav > li").unbind("hover"),$(".subMenus").hide(),$(".js-nav > li").find(".mLnk").removeClass("srw")})}function hideLoader(){$(".overLay, .loader").hide()}function heightAdjust(refDiv,isStatic,winW,resolution){var maxHeight=0;$(refDiv).find(".eq-height").each(function(index){isStatic?$(this).height()>maxHeight&&(maxHeight=$(this).height()):$(this).outerHeight()>maxHeight&&(maxHeight=$(this).outerHeight())}),"desktop"==resolution?$(window).width()>winW?isStatic?$(refDiv).find(".eq-height").height(maxHeight):$(refDiv).find(".eq-height").css({"min-height":maxHeight+"px"}):$(refDiv).find(".eq-height").removeAttr("style"):"mobile"==resolution&&($(window).width()<winW?isStatic?$(refDiv).find(".eq-height").height(maxHeight):$(refDiv).find(".eq-height").css({"min-height":maxHeight+"px"}):$(refDiv).find(".eq-height").removeAttr("style"))}function loginAccordian(){$(window).width()<1200?$(document).on("click",".jsloginClk",function(){$(".topMenu").css("z-index","10001"),$(this).parent("li").toggleClass("open"),$(this).parent("li").hasClass("open")?($(".loginDrpDown").show(),$(".overLay").css("z-index","9998").show(),$(".topMenuNewWrapper .topH, .notyBox").slideUp(),$(".loginSectMob").find("li").removeClass("open"),$(this).parent("li").addClass("open")):($(".overLay").hide(),$(".loginDrpDown").hide()),$("body").removeClass("topMenuOpen")}):($(".jsloginClk").mouseover(function(e){e.preventDefault(),$(".loginDrpDown").show(),$(".overLay").css("z-index","9998").show(),$(window).width()<1200&&($(".loginSectMob").find("li").removeClass("open"),$(".topMenuNewWrapper .topH, .notyBox").slideUp(),$(this).parent("li").toggleClass("open"))}).mouseout(function(e){e.preventDefault(),$(".loginDrpDown").hide(),$(".overLay").css("z-index","9998").hide(),$(window).width()<1200&&$(this).parent("li").toggleClass("open")}),$(document).on("keyup",function(event){"Tab"===event.key&&$(".loginDrpDown").is(":hidden")&&(event.preventDefault(),$(".overLay").hide())}),$(".jsloginClk").prev().focus(function(e){e.preventDefault(),console.log($(this).prev().is(":focus")),$(".loginDrpDown").hide(),$(".overLay").css("z-index","9998").hide(),$(window).width()<1200&&$(this).parent("li").toggleClass("open")})),$(".accordian").hide(),$(".accordian:first").show(),$(document).on("click",".jsLoginDrpDwn a.accTitle",function(e){e.preventDefault(),$(this).hasClass("current")?($(this).removeClass("current"),$(this).next(".accordian").slideUp(500)):(console.log("add"),$(".accordian").slideUp(400),$(".loginDrpDown a.accTitle").removeClass("current"),$(this).addClass("current"),$(this).next(".accordian").slideDown(400))})}function topMenuClick(){$(document).on("click",".js-clickdetail",function(e){$(".topStrip").hide();var dataSection=$(this).data("href");$(this).parent("li").hasClass("open")?($(".topStrip").show(),$("."+dataSection).slideUp(),$(".topMenuNewWrapper .topH").slideUp(),$(this).parent("li").removeClass("open"),$("body").removeClass("topMenuOpen"),$(".topMenu").css("z-index","9999"),$(".overLay").css("z-index","9998").hide(),1199<$(window).width()&&$(".js-notification").css("pointer-events","inherit")):($("body").addClass("topMenuOpen"),1199<$(window).width()?($(".topMenu").css("z-index","9"),$(".js-notification").css("pointer-events","none")):$(".topMenu").css("z-index","10001"),$(".navbar-nav").find("li").removeClass("open"),$(".loginSectMob").find("li").removeClass("open"),$(".othLnk").find("li").removeClass("open"),$(this).parent("li").addClass("open"),$(".topMenuNewWrapper .topH").slideUp(),$("."+dataSection).attr("role","dialog").slideDown().focus(),$(".searchInptBox input[type=text]").focus(),$(".overLay").css("z-index","9998").show(),$(".notyBox, .loginDrpDown").hide(),$(".notification").removeClass("open"))}),$(document).on("click",".js-colseBtn",function(e){e.preventDefault(),$(".topStrip").show(),$(this).parents(".topMenuNewWrapper .topH").slideUp(),$(".navbar-nav li.open a").focus(),1199<$(window).width()?($(".navbar-nav li").removeClass("open"),$(".othLnk").find("li").removeClass("open"),$(".js-notification").css("pointer-events","inherit")):$(".navbar-right li").removeClass("open"),$("body").removeClass("topMenuOpen"),$(".overLay").css("z-index","9998").hide(),$(".topMenu").css("z-index","9999"),$(".notyBox").hide()})}function searchClickMb(){$(document).on("click",".navbar-right .search",function(){$("body").toggleClass("searchActive")}),$(document).on("click",".searchBox .js-colseBtn",function(){$("body").removeClass("searchActive")})}function notificationOpen(){$(window).width()<1200?$(document).on("click",".js-notification",function(){$(this).parent("li").hasClass("open")?($(".overLay").show(),$(".notyBox").show(),$(".loginDrpDown").hide()):($(".overLay").hide(),$(".notyBox").hide()),$(".topMenu").css("z-index","10001"),$("body").removeClass("topMenuOpen")}):$(".js-notification").mouseover(function(e){e.preventDefault(),$(".notyBox, .overLay").show(),$(this).addClass("open")}).mouseout(function(e){e.preventDefault(),$(".notyBox, .overLay").hide(),$(this).removeClass("open")})}function footerMainAccord(){$(document).on("click",".js-accordMob",function(){$(this).hasClass("openTab")?$(this).removeClass("openTab").addClass("closeTab"):($(".js-accordMob").removeClass("openTab").addClass("closeTab"),$(this).removeClass("closeTab").addClass("openTab"),$("html,body").animate({scrollTop:$(this).offset().top},"slow")),$(".openTab").next().slideDown(),$(".closeTab").next().slideUp()})}function removeBlock(){windowWidth<768&&$(".js-mHide").css("display","none")}function faqAccordion(){$(document).on("click",".panel-heading a",function(e){e.preventDefault(),$(this).parent("h5").hasClass("openAcc")?($(this).attr({"aria-expanded":"false"}),$(this).parent("h5").removeClass("openAcc").addClass("closeAcc")):($(".panel-heading a").attr({"aria-expanded":"false"}),$(this).attr({"aria-expanded":"true"}),$(".panel-heading").find("h5").removeClass("openAcc").addClass("closeAcc"),$(this).parent("h5").addClass("openAcc").removeClass("closeAcc")),$(".openAcc").parent().next().slideDown(),$(".closeAcc").parent().next().slideUp()})}function lazyLoadImgs(){var lazy=[];function lazyLoad(){for(var i=0;i<lazy.length;i++)el=lazy[i],void 0,0<=(rect=el.getBoundingClientRect()).bottom&&0<=rect.right&&rect.top<=(window.innerHeight||document.documentElement.clientHeight)&&rect.left<=(window.innerWidth||document.documentElement.clientWidth)&&lazy[i].getAttribute("data-src")&&(lazy[i].src=lazy[i].getAttribute("data-src"),lazy[i].removeAttribute("data-src"));var el,rect;lazy=Array.prototype.filter.call(lazy,function(l){return l.getAttribute("data-src")})}function registerListener(event,func){window.addEventListener?window.addEventListener(event,func):window.attachEvent("on"+event,func)}registerListener("load",function(){lazy=document.getElementsByClassName("lazy")}),registerListener("load",lazyLoad),registerListener("scroll",lazyLoad),registerListener("resize",lazyLoad)}windowWidth<1025&&telAsstsform(),Modernizr.Detectizr.detect({detectScreen:!0}),$(document).ready(function(){if(is_chrome||$(".voicesearch").hide(),$(".moreNless").length&&$(document).on("keyup",".contentBox .moreNless",function(e){13==(e.keyCode||e.which)&&$(this).trigger("click")}),$(document).on("keyup",".loanDesigned > ul > li, .emi_cont",function(e){9==(e.keyCode||e.which)&&$(this).is(":focus")&&$(this).addClass("selected").siblings().removeClass("selected")}),$(document).on("keyup",".tmainList > li",function(e){9==(e.keyCode||e.which)&&$(this).is(":focus")&&$(this).addClass("selected").siblings().removeClass("selected")}),$(".contactMenu").length&&contactMenu(),readMoreOwl(),$(".importantLinks").length&&$(".largeContent").mCustomScrollbar(),$(".axisWrap").hasClass("home")&&(charmClick(),fdRatesClck(),formAnimation(),subcribeNowClck(),windowWidth<1199&&searchClickMb(),dealsInterest(),bankDigiClck(),window.screen.height<800&&1199<windowWidth?$(".subMenus").addClass("laptopActive"):$(".subMenus").removeClass("laptopActive")),$(".axisWrap").hasClass("aboutUs")&&(mobileHorScroll(),readMoreLess(),stickynav(),upperMngClck(),aboutUsTab()),$(".axisWrap").hasClass("loanCategory")&&(exploreRangeHover(),globlaAccordian(),loadMoreLoans(),heightAdjust(".redeemBox",!0,767,"desktop")),$(".axisWrap").hasClass("feature")&&(globlaAccordian(),readMoreLess(),sitemaplink()),($(".axisWrap").hasClass("loanCmp")||$(".axisWrap").hasClass("listingpageReg"))&&(exploreRangeHover(),globlaAccordian(),loanCompare(),compareBar(),bottomFilter(),$(".savingAccBox").length)){if($(window).width()<992){var filter=$(".offerWrapper").detach(),sortBox=$(".sortBox").detach();$("footer").after(filter),$(".offerWrapper").append(sortBox);var btnBlock=$(".offerWrapper .btnBlock").height(),totalHeight=windowHeight-btnBlock;$(".offerWrapper").height(totalHeight),mobFilter()}else{filter=$(".offerWrapper").detach(),sortBox=$(".sortBox").detach();$(".mainFilterBox").before(filter),$(".filterHeading").after(sortBox)}setTimeout(function(){heightAdjust(".loanDesigned",!1,767,"desktop")},500)}if($(".axisWrap").hasClass("pressRelease")&&(heightAdjust(".shareHolderInfo",!0,767,"desktop"),heightAdjust(".csrBoxWrap",!0,767,"desktop"),globalTab(),$(window).width()<992?($(".tabsSeleBox").addClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").addClass("dropdown"),ulToSelect()):($(".tabsSeleBox").removeClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").removeClass("dropdown"))),$(".axisWrap").hasClass("shareholder")&&(globalTab(),innerTab(),checkButton(),heightAdjust(".stockSectionWrapper",!0,767,"desktop"),heightAdjust(".faqContent",!0,767,"desktop"),$(window).width()<992?($(".tabsSeleBox").addClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").addClass("dropdown"),ulToSelect()):($(".tabsSeleBox").removeClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").removeClass("dropdown"))),$(".axisWrap").hasClass("shareholder")&&heightAdjust(".shareHolderInfo",!0,767,"desktop"),$(".axisWrap").hasClass("contactUs")&&heightAdjust(".topQueryBox",!0,767,"desktop"),$(".axisWrap").hasClass("grabDetails")){filterAccord(),globalTab(),generateOwlMobile(".js-offerexpire .owl-carousel",!1,!0,0,1,!1,2,3,15,!1),generateOwlMobile(".js-grabTab .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),grabFilterMob(),grabOffersCheck(),$(".gtabOfferwrap ").length&&grabdealofferTab();var owl=$(".grabBannerBox .owl-carousel");owl.owlCarousel({items:1,loop:!0,margin:0,autoplay:!0,dots:!0,autoplayTimeout:2500,autoplayHoverPause:!0}),$(document).on("click",".play",function(e){e.preventDefault(),owl.trigger("play.owl.autoplay",[1e3]),$(".stop").show(),$(".play").hide()}),$(document).on("click",".stop",function(e){e.preventDefault(),owl.trigger("stop.owl.autoplay"),$(".play").show(),$(".stop").hide()})}if($(".axisWrap").hasClass("hostDebitCards")&&hostDebitCardScroll(),$(".benefitsBox").length&&benefitsBoxCarousel(),$(".messageBox").length&&messageBox(),$(".back-to-top").length&&scrollToUp(),$(window).width()<768?($(".footerMainUl .mobAccord, .middleFooterCon .mobAccord").addClass("js-accordMob"),footerMainAccord()):$(".footerMainUl .mobAccord, .middleFooterCon .mobAccord").removeClass("js-accordMob"),$(".loginSect").length&&loginAccordian(),$(window).width()<1200){$(".mobiNav").length&&mobileNav();var mobileLogin=$(".loginDrpDown").detach();$(".mlogin").after(mobileLogin);var mobileNoftify=$(".notyBox").detach();$(".notificationBox .container").append(mobileNoftify)}$(".infowrapper").length&&($(".infowrapper").find("h5").addClass("closeAcc"),$(".infowrapper .panel:first-child h5").removeClass("closeAcc").addClass("openAcc"),faqAccordion()),$(document).on("click",".js-closeW",function(e){e.preventDefault(),$(".overLay").hide(),$(this).parent(".callbackCharm").hide(),$(this).parents(".topH").hide(),$("body").removeClass("topMenuOpen")}),lazyLoadImgs(),stickyHeadNav(),$(".js-mHide").length&&windowWidth<768&&removeBlock(),downloadAppLink(),$(".list-unstyled").length&&customSelect(),$(".axisWrap").hasClass("progressUs")&&(generateOwlMobile(".progressUsSlider .owl-carousel",!1,!0,0,1,!1,2,2,0,!1),heightAdjust(".progressUsSlider",!0,767,"desktop"),992<$(window).width()&&$(".floaterFilter").length&&$(".floaterFilter").theiaStickySidebar({additionalMarginTop:100})),generateOwlBoth(".js-applyNow .owl-carousel",!1,!0,!1,1,1,1,0,!1,0,["P","N"],!1),$(".axisWrap").hasClass("gallery")&&new CBPGridGallery(document.getElementById("grid-gallery")),keyboardAssesibility(),fontIncrease(),contrastColor(),uatFunctions(),tabbingFocus(),$(document).on("click",".voicesearch",function(){if(!$(this).hasClass("active"))if($(this).hasClass("first"))startDictation();else{$(this).addClass("first");var audio=document.getElementById("searchaudio");audio.play(),setTimeout(function(){audio.pause(),startDictation()},3e3)}}),$(document).on("click",".js-colseBtn",function(){recognition.stop(),$(".voicesearch").removeClass("active")}),$(".headerSection").length&&(langChangeDD(),selectLanguage()),$(".mobileSlider").length&&generateOwlMobile(".ods_explore .mobileSlider",!1,!1,0,1,!0,1,1,0,!1),starActive(),coachHide()}),$(window).resize(function(){var owl;(generateOwlMobile(".mobile-carousel .owl-carousel",!0,!1,0,1.4,!1,3,3,15,!1),$(".axisWrap").hasClass("home"))&&(generateOwlMobile(".bannerOffer .owl-carousel",!0,!0,0,1,!1,2,3,0,!1),heightAdjust(".offerDtls",!0,1200,"mobile"),generateOwlMobile(".js-dealSlider .owl-carousel",!1,!0,0,1,!1,2,3,15,!1),setTimeout(function(){$(".otherInfoBlocks .eq-height").css("min-height","0"),heightAdjust(".otherInfoBlocks",!1,767,"desktop")},500),(owl=$(".bannerWrapper .bannerItem")).owlCarousel({items:1,loop:!0,margin:0,autoplay:!0,dots:!0,autoplayTimeout:2500}));if($(".axisWrap").hasClass("aboutUs")&&(generateOwlMobile(".js-mobileScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".bodBlock .owl-carousel",!1,!0,!1,4,3,1,0,!1,0,["P","N"],!1),generateOwlSmlDesk(".js-corpTab .owl-carousel",!1,!0,0,2,!1,4,5,0,!1)),$(".axisWrap").hasClass("feature")&&(generateOwlMobile(".js-loanScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".js-featureCarousal .owl-carousel",!1,!0,!1,3,2,1,0,!1,0,["P","N"],!1),$(".eligibilityBox").length&&heightAdjust(".eligibilityBox",!0,992,"desktop")),$(".axisWrap").hasClass("contactUs")&&(generateOwlMobile(".js-loanScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".js-featureCarousal .owl-carousel",!1,!0,!1,3,2,1,0,!1,0,["P","N"],!1),$(".eligibilityBox").length&&heightAdjust(".eligibilityBox",!0,992,"desktop")),$(".axisWrap").hasClass("loanCategory")&&loadMoreLoans(),($(".axisWrap").hasClass("loanCmp")||$(".axisWrap").hasClass("listingpageReg"))&&(loanCompare(),$(".savingAccBox").length)){if($(window).width()<992){var filter=$(".offerWrapper").detach(),sortBox=$(".sortBox").detach();$("footer").after(filter),$(".offerWrapper").append(sortBox);var btnBlock=$(".offerWrapper .btnBlock").height(),totalHeight=windowHeight-btnBlock;$(".offerWrapper").height(totalHeight),mobFilter()}else{filter=$(".offerWrapper").detach(),sortBox=$(".sortBox").detach();$(".mainFilterBox").before(filter),$(".filterHeading").after(sortBox)}setTimeout(function(){heightAdjust(".loanDesigned",!1,767,"desktop")},500)}($(".axisWrap").hasClass("shareholder")&&(heightAdjust(".stockSectionWrapper",!0,767,"desktop"),heightAdjust(".faqContent",!0,767,"desktop")),$(".axisWrap").hasClass("grabDetails"))&&(generateOwlBoth(".js-applyNow .owl-carousel",!1,!0,!1,1,1,1,0,!1,0,["P","N"],!1),generateOwlMobile(".js-grabTab .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),(owl=$(".grabBannerBox .owl-carousel")).owlCarousel({items:1,loop:!0,margin:0,autoplay:!0,dots:!0,autoplayTimeout:2500,autoplayHoverPause:!0}),$(document).on("click",".play",function(e){e.preventDefault(),owl.trigger("play.owl.autoplay",[1e3]),$(".stop").show(),$(".play").hide()}),$(document).on("click",".stop",function(e){e.preventDefault(),owl.trigger("stop.owl.autoplay"),$(".play").show(),$(".stop").hide()}),generateOwlMobile(".js-offerexpire .owl-carousel",!1,!0,0,1,!1,2,3,15,!1));if($(".js-mHide").length&&windowWidth<768&&removeBlock(),$(".linkNblogBox").length&&setInterval(function(){heightAdjust(".linkNblogBox",!0,767,"desktop")},100),$(".benefitsBox").length&&benefitsBoxCarousel(),$(window).width()<768?$(".footerMainUl .mobAccord, .middleFooterCon .mobAccord").addClass("js-accordMob"):$(".footerMainUl .mobAccord, .middleFooterCon .mobAccord").removeClass("js-accordMob"),$(window).width()<768){var sd=$(".cont").detach();$(".sds").after(sd)}else{var sd1=$(".cont").detach();$(".othLnk").after(sd1)}$(".axisWrap").hasClass("pressRelease")&&($(window).width()<992?($(".tabsSeleBox").addClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").addClass("dropdown"),ulToSelect()):($(".tabsSeleBox").removeClass("wrapper-dropdown-3"),$(".tabsSeleBox ul").removeClass("dropdown"))),$(".axisWrap").hasClass("progressUs")&&generateOwlMobile(".progressUsSlider .owl-carousel",!0,!1,0,1.4,!1,3,3,15,!1),$(".axisWrap").hasClass("sendMoneyIndia")&&(generateOwlMobile(".js-mobileScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),$(window).width()<767&&noticeboardOwl()),$(".headerSection").length&&resetLangChangeDD(),$(".mobileSlider").length&&generateOwlMobile(".ods_explore .mobileSlider",!1,!1,0,1,!0,1,1,0,!1)}),$(window).on("scroll",function(){$(".axisWrap").hasClass("progressUs")}),$(window).on("load",function(){if(hideLoader(),toolTipCustmRead(),$(".accordianBox h4").attr({tabindex:"0"}),$(".loanDesigned > ul > li").attr({tabindex:"0"}),$(".tmainList > li").attr({tabindex:"0"}),$(".ourOfficeBlock").length&&CommanreadMoreLess(),$(".topBand").length&&notificationOpen(),$(".axisWrap").hasClass("feature")&&scrollPatch(),generateOwlMobile(".mobile-carousel .owl-carousel",!0,!1,0,1.4,!1,3,3,15,!1),$(".axisWrap").hasClass("home")){mobiQlinks(),generateOwlMobile(".bannerOffer .owl-carousel",!0,!0,0,1,!1,2,3,0,!1),heightAdjust(".offerDtls",!0,1200,"mobile"),generateOwlMobile(".js-dealSlider .owl-carousel",!1,!0,0,1,!1,2,3,15,!1),setTimeout(function(){$(".otherInfoBlocks .eq-height").css("min-height","0"),heightAdjust(".otherInfoBlocks",!1,767,"desktop")},500);var owl=$(".bannerWrapper .bannerItem, .bannerWrapperWrap .bannerItem");owl.owlCarousel({items:1,loop:!0,margin:0,autoplay:!0,dots:!0,autoplayTimeout:2500,autoplayHoverPause:!0}),$(document).on("click",".play",function(e){e.preventDefault(),owl.trigger("play.owl.autoplay",[1e3]),$(".stop").show(),$(".play").hide()}),$(document).on("click",".stop",function(e){e.preventDefault(),owl.trigger("stop.owl.autoplay"),$(".play").show(),$(".stop").hide()})}if($(".axisWrap").hasClass("aboutUs")&&(generateOwlMobile(".js-mobileScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".bodBlock .owl-carousel",!1,!0,!1,4,3,1,0,!1,0,["P","N"],!1),generateOwlSmlDesk(".js-corpTab .owl-carousel",!1,!0,0,2,!1,4,4,0,!1)),$(".axisWrap").hasClass("feature")&&(generateOwlMobile(".js-loanScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".js-featureCarousal .owl-carousel",!1,!0,!1,3,2,1,0,!1,0,["P","N"],!1),$(".eligibilityBox").length&&heightAdjust(".eligibilityBox",!0,992,"desktop")),$(".axisWrap").hasClass("contactUs")&&(generateOwlMobile(".js-loanScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),generateOwlBoth(".js-featureCarousal .owl-carousel",!1,!0,!1,3,2,1,0,!1,0,["P","N"],!1),$(".eligibilityBox").length&&heightAdjust(".eligibilityBox",!0,992,"desktop")),$(".axisWrap").hasClass("loanCategory")&&(scrollLi(),heightAdjust(".redeemBox",!0,767,"desktop")),$(window).width()<768){var sd=$(".cont").detach();$(".sds").after(sd)}else{var sd1=$(".cont").detach();$(".othLnk").after(sd1)}$(".linkNblogBox").length&&setInterval(function(){heightAdjust(".linkNblogBox",!0,767,"desktop")},100),($(".axisWrap").hasClass("sendMoneyIndia")||$(".axisWrap").hasClass("expProd"))&&(sendMoneyHoverEff(),$(".useFulLinkBox").length&&usefulLinks()),$(".axisWrap").hasClass("progressUs"),($(".axisWrap").hasClass("sendMoneyIndia")||$(".axisWrap").hasClass("expProd"))&&(generateOwlMobile(".js-mobileScroll .owl-carousel",!1,!0,0,2,!1,4,4,0,!1),$(window).width()<767&&noticeboardOwl()),$(".topMenu").length&&(navMenu(),exploreHover(),exploreCatClick(),expTab()),($(".topBand").length||$(".regional").length)&&topMenuClick(),$(".axisWrap").hasClass("contactUs")&&setTimeout(function(){heightAdjust(".callLocateWrapper",!1,767,"desktop")},1e3)});var GrayScaleFix=function(){function replaceImage(image){var tmpImage=new Image;tmpImage.onload=function(){var imgWrapper=document.createElement("span"),svgTemplate='<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 '+tmpImage.width+" "+tmpImage.height+'" width="100%" height="100%"><defs><filter id="gray"><feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" /></filter></defs><image filter="url(&quot;#gray&quot;)" x="0" y="0" width="'+tmpImage.width+'" height="'+tmpImage.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+tmpImage.src+'" /></svg>';imgWrapper.innerHTML=svgTemplate,imgWrapper.className="grayscale-fix",image.parentNode.insertBefore(imgWrapper,image),image.style.cssText+="visibility:hidden;display:block",imgWrapper.querySelector("svg").style.position="absolute",imgWrapper.style.cssText="display:inline-block;position:relative;",imgWrapper.appendChild(image)},tmpImage.src=image.src}function replaceAll(){for(var images=document.querySelectorAll("img.grayscale"),i=0;i<images.length;i++)replaceImage(images[i])}return/(MSIE 10)|(Trident.*rv:11\.0)|( Edge\/[\d\.]+$)/.test(navigator.userAgent)&&document.addEventListener("DOMContentLoaded",replaceAll),{replace:replaceImage,refresh:replaceAll}}();function downloadAppLink(){$(document).on("click",".appDownlLink",function(event){event.preventDefault(),$(".android").length?window.open("https://play.google.com/store/apps/details?id=com.axis.mobile&hl=en","_blank"):$(".ios").length&&window.open("https://itunes.apple.com/in/app/axis-bank-mobile-banking/id699582556?mt=8","_blank")})}function formAnimation(){var rtrim;function onInputFocus(ev){classie.add(ev.target.parentNode,"input--filled")}function onInputBlur(ev){""===ev.target.value.trim()&&classie.remove(ev.target.parentNode,"input--filled")}String.prototype.trim||(rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(rtrim,"")}),[].slice.call(document.querySelectorAll("input.input__field")).forEach(function(inputEl){""!==inputEl.value.trim()&&classie.add(inputEl.parentNode,"input--filled"),inputEl.addEventListener("focus",onInputFocus),inputEl.addEventListener("blur",onInputBlur)})}function customSelect(){$("footer .list-unstyled, header .list-unstyled").on("click",".init",function(){$(this).closest(".list-unstyled").children("li:not(.init)").toggle()});var allOptions=$(".list-unstyled").children("li:not(.init)");$("footer .list-unstyled, header .list-unstyled").on("click","li:not(.init)",function(){allOptions.removeClass("selected"),$(this).addClass("selected"),$(".list-unstyled").children(".init").html($(this).html()),allOptions.toggle();var selCountry=$(".list-unstyled").children(".init").find(".countryNm").html();"India"==selCountry||("Sri Lanka"==selCountry?window.open("https://www.axisbank.lk/?AspxAutoDetectCookieSupport=1","_blank"):"United Kingdom"==selCountry&&window.open("https://www.axisbankuk.co.uk/","_blank"))}),$(document).click(function(e){var container=$(".list-unstyled");container.is(e.target)||0!==container.has(e.target).length||container.children("li:not(.init)").hide()}),$(document).on("focusout","footer .list-unstyled li:last-child a",function(e){$(this).parents(".list-unstyled").children("li:not(.init)").hide()}),$(document).on("keyup","footer .list-unstyled .init",function(e){13==e.keyCode&&$(this).trigger("click")})}function benefitsBoxCarousel(){$(window).width()<768?($(".benefitsBox").find("ul").addClass("owl-carousel"),generateOwlBoth(".benefitsBox .owl-carousel",!1,!0,!1,4,2,2,0,!1,2500,!1,!1)):$(".benefitsBox .owl-carousel").owlCarousel("destroy")}function readMoreOwl(){$(".moreNless").attr("tabindex","0");$(".moreNless").text();var xyz=$(".moreCont").outerHeight(!0);$(document).on("click",".owl-next",function(event){$(".featureBox .owl-stage .owl-item").each(function(){$(this).hasClass("active")||($(this).find(".contentBox").find(".moreCont").css({height:xyz,overflow:"hidden"}),$(this).find(".contentBox").find(".moreNless").text("Read More"),maxHgt())})})}function globalTab(){$(".content:first").show(),$(".tabs li").on("click",function(e){e.preventDefault();var abc=$(this).attr("data-tab");$(".content").removeClass("current").hide(),$(this).addClass("current").siblings().removeClass("current"),$("#"+abc).fadeIn(600).addClass("current")})}function CommanreadMoreLess(){var xyz=$(".moreCont").outerHeight(!0);$(document).on("click",".contentBox .moreNless",function(){var text=$(this).text();"Read More"==text?($(this).parents(".contentBox").find(".moreCont").css({height:xyz,overflow:"inherit"}),$(this).text(text.replace("Read More","Read Less")),$(".moreNless").attr("aria-expanded","true")):($(this).parents(".contentBox").find(".moreCont").css({height:xyz,overflow:"hidden"}),$(this).text(text.replace("Read Less","Read More")),$(".moreNless").attr("aria-expanded","false"))}),$(document).on("keyup",".contentBox .moreNless",function(e){e.preventDefault(),13==(e.keyCode||e.which)&&$(this).trigger("click")})}function contactMenu(){$(document).on("click",".js_contactMenu li a",function(e){e.preventDefault();var index=$(this).attr("title");$(".js_contactMenu li").removeClass("active"),$(this).parents("li").addClass("active"),$(".addressdiv .address").addClass("hidden"),$(".addressdiv").find("."+index).removeClass("hidden")})}function keyboardAssesibility(){document.addEventListener("keyup",function(e){9==e.keyCode&&($(e.target).parents().hasClass("navbarSect")&&$(e.target).mouseout().parents().mouseout(),$(e.target).mouseover())},!1),$("#mainContentWrap *").focus(function(){$(".loginDrpDown").hide()}),$(".openDem").focusout(function(){$(".fdRatesBox").removeClass("fdActive")}),$(".getACallBox ul>li:last").keydown(function(){"Tab"==event.key&&$(".getACallBox").removeClass("getCallActive")})}function fontIncrease(){$(document).on("click",".fontScaler",function(e){$(this).siblings().removeClass("current"),$(this).addClass("current"),$(this).hasClass("current")&&e.preventDefault(),$(this).hasClass("smallFont")?($("html").removeClass("plusOne"),$("html").addClass("minusOne"),setTimeout(function(){heightAdjust(".redeemBox",!0,767,"desktop"),$(".loanDesigned li.eq-height,.otherInfoBlocks .eq-height").css("min-height","0"),heightAdjust(".loanDesigned",!1,767,"desktop"),heightAdjust(".otherInfoBlocks",!1,767,"desktop"),heightAdjust(".redeemBox",!0,767,"desktop")},500)):$(this).hasClass("normalFont")?($("html").removeClass("plusOne , minusOne"),setTimeout(function(){heightAdjust(".redeemBox",!0,767,"desktop"),$(".loanDesigned li.eq-height").css("min-height","0"),heightAdjust(".loanDesigned",!1,767,"desktop")},500)):$(this).hasClass("largeFont")&&($("html").removeClass("minusOne"),$("html").addClass("plusOne"),setTimeout(function(){heightAdjust(".redeemBox",!0,767,"desktop"),$(".loanDesigned li.eq-height").css("min-height","0"),heightAdjust(".loanDesigned",!1,767,"desktop"),heightAdjust(".redeemBox",!0,767,"desktop")},500))})}function contrastColor(){$(document).on("click",".contrastChanger",function(e){$(this).hasClass("wob")?(document.cookie="addHC=1;expires=Session;path=/",$("body").removeClass("normal"),$("body").addClass("wob"),$(".maroontheme .whitebg").addClass("menucurvewob"),$("iframe").contents().find("body").addClass("wobProd"),$(".maroontheme").length||$(".logoSect img").attr("src","assets/images/logo-white.png")):$(this).hasClass("normal")&&(document.cookie="addHC=0;expires=Session;path=/",$("body").removeClass("wob"),$("body").addClass("normal"),$(".maroontheme .whitebg").removeClass("menucurvewob"),$("iframe").contents().find("body").removeClass("wobProd"),$(".maroontheme").length||$(".logoSect img").attr("src","assets/images/logo.png"))})}function uatFunctions(){$(document).on("focus",".js-notification",function(){$(".vz-drop-down-menu-desktop").addClass("open")}),$(document).on("keyup",function(){"Tab"===event.key&&$(".vz-drop-down-menu-desktop").is(":hidden")&&(event.preventDefault(),$(".vz-drop-down-menu-desktop").removeClass("open"),$(".overLay").hide())}),$(".js-notification").parent("li").siblings().find("a").on("focusin",function(){$(".vz-drop-down-menu-desktop").removeClass("open"),$(".overLay").hide()}),$(document).on("focus",".getIn",function(e){$(".getCon").show()}),$(".logoSect a").focus(function(event){$(".vz-drop-down-menu-desktop").is(":visible")&&$(".vz-drop-down-menu-desktop").removeClass("open")}),$(".getIn").parent("li").siblings().find("a").on("focusin",function(){$(".getCon").is(":visible")&&$(".getCon").hide()})}var recognition=new webkitSpeechRecognition;function startDictation(){window.hasOwnProperty("webkitSpeechRecognition")&&(recognition.continuous=!1,recognition.interimResults=!1,recognition.lang="en-US",recognition.start(),recognition.onstart=function(){console.log("onstart"),$("button.voicesearch").addClass("active"),$(".inner_Vsearch ").addClass("active"),$("#transcript").val(""),$("#transcript").attr("placeholder","Listening, Speak Now")},recognition.onresult=function(e){console.log("onresult"),document.getElementById("transcript").value=e.results[0][0].transcript,2<$(".headsearch1").val().length?($(".lblResult").css("visibility","visible"),$(".blackoverlay").show(),$("body").addClass("searchActive01"),$("button.voicesearch").removeClass("active"),$(".vsearchoverlay").show()):($("button.voicesearch").removeClass("active"),$("#transcript").attr("placeholder","What are you looking for?"),$(".vsearchoverlay").hide()),$(".inner_Vsearch ").removeClass("active"),recognition.stop()},recognition.onspeechend=function(){setTimeout(function(){$(".headsearch1").val().length<1&&($("#vsearcherror").modal("show"),$("button.voicesearch").removeClass("active"))},3e3),console.log("onspeechend"),$(".inner_Vsearch ").removeClass("active"),recognition.stop()},recognition.onerror=function(e){console.log("onerror"),$("#vsearcherror").modal("show"),$("button.voicesearch").removeClass("active"),$("#transcript").attr("placeholder","What are you looking for?"),$(".inner_Vsearch ").removeClass("active"),recognition.stop()})}function tabbingFocus(){$(document).on("keydown",function(event){"Tab"==event.key&&($("html").addClass("keyboard"),$("html").removeClass("mouse"))}),$(document).on("mousedown mousemove",function(event){$("html").addClass("mouse"),$("html").removeClass("keyboard")})}function toolTipCustmRead(){$("a.tooltipWrap").each(function(){var tooltipText=$(this).attr("data-tooltip");$(this).attr("aria-label",tooltipText)})}function fdRatesClck(){windowWidth<1200&&$(".menuBody h4").on("click",function(){$(this).next().slideToggle()})}function langChangeDD(){$(document).on("click",".js-changeLanguage",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".langList").fadeOut()):($(".js-changeLanguage").removeClass("active"),$(this).addClass("active"),$(this).siblings(".langList").fadeIn())})}function selectLanguage(){$(document).on("click",".langList li a",function(){$(".langList li a").removeClass("active"),$(this).addClass("active");var languageType=$(this).text();$(".langType").text(languageType),$(this).parents(".langList").fadeOut(),$(".js-changeLanguage").removeClass("active")})}function resetLangChangeDD(){$(".js-changeLanguage").removeClass("active"),$(".langList").fadeOut()}function coachHide(){$(document).on("keyup",function(){$(".coachOverlay:visible")&&$("html").hasClass("keyboard")&&($(".coachOverlay , .firstCoachMarkDiv , .secondCoachMarkDiv").css("display","none"),$("html").removeClass("coachMarkMain"))})}function starActive(){$(document).on("click",".starSgtn",function(event){event.preventDefault(),$(this).toggleClass("active")})}
/* From Template*/
$(document).ready(function () {
        $('a[href^="https://"]').each(function () {
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("https://application.axisbank.com/", "https://application.axisbank.co.in/"); // Create new url
            $(this).attr("href", newUrl); // Set herf value
        });

        $('a[data-href^="https://"]').each(function () {
            var oldUrl = $(this).attr("data-href"); // Get current url
            var newUrl = oldUrl.replace("https://application.axisbank.com/", "https://application.axisbank.co.in/"); // Create new url
            $(this).attr("data-href", newUrl); // Set herf value
        });


 /* PWU */
   var pwuURL = location.pathname;
 
  if(pwuURL.indexOf('progress-with-us') > -1) {
    $(".pwuForm").show();
  }
  if(pwuURL.indexOf('home') > -1) {
    $(".pwuForm").show();
  }
  if(pwuURL.indexOf('nri') > -1) {
    $(".pwuForm").hide();
  }
  else{
    $(".pwuForm").hide();
  }	
  
 });

/* Data layer for Target */
var pathArray = window.location.pathname.split("/");
	  var businessType = pathArray[1];
	  var prodcategory = pathArray[2];
	  var prodsubcategory = pathArray[3];
	  var productName = pathArray[4];
	  var pageType = pathArray[5];

      var dataLayerTarget = {"businessType": businessType,
      "prodcategory": prodcategory,
      "prodsubcategory": prodsubcategory,
      "productName": productName,
      "pageType": pageType
  };

/* get user agent function */
function  getUserAgent() {
        var userAgent = navigator.userAgent;

        if (/ipad/i.test(userAgent)) {
            return "MOBILE";
        } else if (/android|Tablet/ig.test(userAgent) && !(/mobile/i.test(userAgent))) {
            return "MOBILE";
        } else if ((/mqqbrowser|tencenttraveler|baidubrowser|criOS|ucbrowser|mobile|CrMo/ig.test(userAgent)) || (/opera|opr/ig.test(userAgent) && /mobi|mini/ig.test(userAgent))) {
            return "MOBILE";
        }
        return "DESKTOP";
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }
    
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
            return fToBind.apply(this instanceof fNOP && oThis ?
                this :
                oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
            };
    
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
    
        return fBound;
        };
    }
    var vizAd = null;
    if(getUserAgent() === 'MOBILE'){
        vizAd ={
            url: (location.protocol == 'https:' ? 'https:' : 'http:') + "//cdn25-s.lemnisk.co/ssp/nb/IN_AxisBank_DMP_Mobile/axisbanknb-mobile.html",
            advId: 4666,
            trigger: "click",
            parentId: "vzNotifyDropdownMobile",
            toggleId: "vzNotificationsMobile",
            container: "notificationContainerMobile",
            domain: ".axisbank.com"
        };
    }else{
        vizAd = {
            url: (location.protocol == 'https:' ? 'https:' : 'http:') + "//cdn25-s.lemnisk.co/ssp/nb/IN_AxisBank_DMP_Desktop/axisbanknb-desktop.html",
            advId: 4666,
            trigger: "hover",
            parentId: "vzNotifyDropdownDesktop",
            toggleId: "vzNotificationsDesktop",
            container: "notificationContainerDesktop",
            domain: ".axisbank.com"
        };
    }
    function NB() {
        this.parentElm = document.getElementById(vizAd.parentId);
        this.containerElm = document.getElementById(vizAd.container);
        this.toggleElm = document.getElementById(vizAd.toggleId);
        this.trigger = vizAd.trigger;
             this.advId = vizAd.advId;
             this.domain = vizAd.domain;
         }
         
         
         NB.prototype.ajax = function(url, cb) {
             var ref = this,
             httpRequest;
             if (window.XDomainRequest) {
             httpRequest = new XDomainRequest();
             if (!httpRequest) {
                 return false;
             }
             httpRequest.onload = function() { return cb(httpRequest, true); };
             httpRequest.open("get", url);
             httpRequest.send();
             } else {
             httpRequest = new XMLHttpRequest();
             if (!httpRequest) {
                 return false;
             }
             httpRequest.onreadystatechange = function() { return cb(httpRequest); };
             httpRequest.open('GET', url);
             httpRequest.send();
             }
         };
         NB.prototype.getCookie = function(name) {
             var regexp = new RegExp("(?:^" + name + "|;\\\s*" + name + ")=(.*?)(?:;|$)", "g");
             var result = regexp.exec(document.cookie);
             return (result === null) ? null : result[1];
         };
         NB.prototype.renderResponse = function(req, isIE8) {
             if (isIE8) {
             this.renderHTML(req);
             } else if (req.readyState === XMLHttpRequest.DONE) {
             if (req.status === 200) {
                 this.renderHTML(req);
                 //this.renderIframe(req.responseText);
             } else {
                 console.log('There was a problem with the request.');
             }
             }
         };
         
         NB.prototype.renderHTML = function(req) {
             var responseId = document.getElementById("vzAjax");
             responseId.innerHTML = req.responseText;
             var respElm = responseId.getElementsByTagName("script");
             if (respElm.length) {
             this.DOMEval(respElm, 0);
             }
         };
         
         NB.prototype.connect = function() {
             this.ajax(vizAd.url, this.renderResponse.bind(this));
         };
         
         NB.prototype.DOMEval = function(dom, i) {
             var ref = this;
             var script = document.createElement("script");
             if (dom[i].src) {
             script.src = dom[i].src;
             } else {
             script.innerHTML = dom[i].innerHTML;
             }
             dom[i].appendChild(script);
             if (dom[i].src) {
             script.onload = this.loading_complete.bind(this, dom, i, script);
             script.onerror = this.loading_complete.bind(this, dom, i, script);
             } else {
             this.loading_complete(dom, i, script);
             }
         };
         
         NB.prototype.loading_complete = function(dom, i, script) {
             dom[i].removeChild(script);
             if (dom[i + 1]) {
             this.DOMEval(dom, i + 1);
             }
         };
         var $notify = new NB();
         $notify.connect();
	$(document).on("click", ".lnkthirdpartypopup", function (e) {
        var dealName = $(this).attr("data-name");
        var dealLink = $(this).attr("data-href");
        $(".dealName").text(dealName);
        $(".btnLinks .accept").attr("href", dealLink);
    });
    $(document).on("click", ".lnkthirdpartypopup", function (e) {
        //$(".dealPopup, .overLay").fadeIn();
        //$("body").addClass("topMenuOpen");

        $(".overLay").show();
        $(".dealPopup").fadeIn();
    }); 
    $(document).on("click", ".secondaryPopup", function (e) {
        var dealName = $(this).attr("data-name");
        var dealLink = $(this).attr("data-href");
        $(".dealName").text(dealName);
        $(".btnLinks .accept").attr("href", dealLink);
    });
    $(document).on("click", ".secondaryPopup", function (e) {
        $(".overLay").show();
        $(".dealPopupSecondary").fadeIn();
    }); 
    $(document).on("click", ".eclgsPopup", function (e) {
        var dealName = $(this).attr("data-name");
        var dealLink = $(this).attr("data-href");
        $(".dealName").text(dealName);
        $(".btnLinks .accept").attr("href", dealLink);
    });
    $(document).on("click", ".eclgsPopup", function (e) {
        $(".overLay").show();
        $(".eclgsApplyPopup").fadeIn();
    });;
var windowWidth = $(window).width(), windowHeight = $(window).height(); $(document).ready(function () { var onlyDigits = []; for (i = 48; i < 58; i++) onlyDigits.push(i); $(".inputLine input").on("focus", function () { $(this).parent().removeClass("error"), $(this).parents(".inputBox").find(".errorMsg").hide() }), $(".inputLine input").on("blur", function () { $(this).each(function () { "" != $(this).val() && $(this).addClass("valid") }) }), $(".js-required").on("blur", function () { var error_div = $(this).parents(".inputBox").find(".errorMsg"), field_container = $(this).parent(); $.empty_field_validation($(this).val()) ? (error_div.html(""), error_div.css("display", "none"), field_container.removeClass("error"), !1) : (error_div.html("This field is required."), error_div.css("display", "block"), field_container.addClass("error"), !0) }), $(".email").on("blur", function () { var error_div = $(this).parent().find(".error_message"), field_container = $(this).parent(); $.email_validation($(this).val()) ? (error_div.html(""), error_div.css("display", "none"), field_container.removeClass("error"), !1) : (error_div.html("Expected Input: email"), error_div.css("display", "block"), field_container.addClass("error"), !0) }), $(".name").on("blur", function () { var error_div = $(this).parents(".inputBox").find(".errorMsg"), field_container = $(this).parent(); $.empty_field_validation($(this).val()) ? (error_div.html(""), error_div.css("display", "none"), field_container.removeClass("error"), !1) : (error_div.html("Name is required."), error_div.css("display", "block"), field_container.addClass("error"), !0) }), $(".mobile").on("blur", function () { var error_div = $(this).parents(".inputBox").find(".errorMsg"), field_container = $(this).parent(); $.empty_field_validation($(this).val()) ? (error_div.html(""), error_div.css("display", "none"), field_container.removeClass("error"), !1) : (error_div.html("Mobile Number is required."), error_div.css("display", "block"), field_container.addClass("error"), !0) }), $(".js-alphabateOnly").keyup(function (e) { $(this).val($(this).val().replace(/[^a-z A-Z]/g, "")); var error_div = $(this).parent().find(".errorMsg"), inputValue = e.which; if (!(inputValue >= 65 && inputValue <= 122 && 8 != inputValue || 32 == inputValue || 0 == inputValue || 8 == inputValue)) return error_div.html("Please use only alphabets."), error_div.css("display", "block"), e.preventDefault(), !1; error_div.html(""), error_div.css("display", "none") }), $(".js-alphabateOnly").on("keypress ", function (e) { var error_div = $(this).parents(".inputBox").find(".errorMsg"), inputValue = e.which; if (!(inputValue >= 65 && inputValue <= 122 && 8 != inputValue || 32 == inputValue || 0 == inputValue || 8 == inputValue)) return error_div.html("Please use only alphabets."), error_div.css("display", "block"), e.preventDefault(), !1; error_div.html(""), error_div.css("display", "none") }), $(".numbersDecimal").on("input", function (evt) { var self = $(this); self.val(self.val().replace(/[^0-9\.]/g, "")), 46 == evt.which && -1 == self.val().indexOf(".") || !(evt.which < 48 || evt.which > 57) || evt.preventDefault() }), $(document).on("keypress ", ".js-numbersOnly", function (e) { var error_div = $(this).parents(".inputBox").find(".errorMsg"), k = e.which; onlyDigits.indexOf(parseInt(k)) >= 0 ? (error_div.html(""), error_div.css("display", "none")) : (error_div.html("numbers only."), error_div.css("display", "block"), e.preventDefault()) }), $(document).on("keyup", ".js-numbersOnly", function (e) { $(this).val($(this).val().replace(/[^0-9]/g, "")) }), $(document).on("keypress", ".js-mnumbersOnly", function (e) { var error_div = $(this).parents(".inputBox").find(".errorMsg"), mLen = $(this).val().length, k = e.which; return 8 == e.which || (onlyDigits.indexOf(parseInt(k)) >= 0 ? !(0 == mLen && k < 54) && (error_div.html(""), void error_div.css("display", "none")) : (error_div.html("numbers only."), error_div.css("display", "block"), !1)) }), $(document).on("keyup", ".js-mnumbersOnly", function (e) { $(this).val($(this).val().replace(/[^0-9]/g, "")) }), $(".js-email").on("blur", function () { var error_div = $(this).parents(".inputBox").find(".errorMsg"), field_container = $(this).parent(); $.email_validation($(this).val()) ? (error_div.html(""), error_div.css("display", "none"), field_container.removeClass("error"), !1) : $(this).val().length <= 0 ? (error_div.html("Email Id is Required"), !0) : (error_div.html("Invalid Email Id"), error_div.css("display", "block"), field_container.addClass("error")) }), $.empty_field_validation = function (field_value) { return "" != field_value.trim() }, $.email_validation = function (email) { return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) }, $.fn.serializeObject = function () { var o = {}, a = this.serializeArray(); return $.each(a, function () { o[this.name] ? (o[this.name].push || (o[this.name] = [o[this.name]]), o[this.name].push(this.value || "")) : o[this.name] = this.value || "" }), o } }), $(window).on("load", function () { windowWidth < 1200 && ($(".js-numbersOnly").each(function () { $(this).attr("type", "tel") }), $(".js-mnumbersOnly").each(function () { $(this).attr("type", "tel") })) });;
// generic functions start
function IsNumeric(e) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    var keyCode = e.which ? e.which : e.keyCode
    //alert(keyCode);
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 46 || specialKeys.indexOf(keyCode) != -1) {
        return true;
    }
    else {
        return false;
    }
}
function OnlyAlphanumeric(e) { // Alphanumeric only
    var specialKeys = new Array();
    specialKeys.push(8);
    var k = (e.which) ? e.which : e.keyCode;
    if ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123) || k == 0 || specialKeys.indexOf(k) != -1) {
        return true;
    }
    else {
        return false;
    }

}
function OnlyAlphabetic(obj, e) {
    //var regex = new RegExp("^[a-zA-Z ]*$");
    //var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    //if (regex.test(str)) {
    //    return true;
    //}
    //e.preventDefault();
    //return false;
    var name = $(obj).val();
    if (name.length > 0) {
        var k = (e.which) ? e.which : e.keyCode;
        return ((k > 32 && k < 46) || (k > 46 && k < 65) || (k > 90 && k < 97) || (k == 46) || (k == 123 || (k == 125)) || (k == 126)) ? false : true;
    }
    else {
        var k = (e.which) ? e.which : e.keyCode;
        return ((k > 32 && k < 46) || (k > 46 && k < 65) || (k > 90 && k < 97) || (k == 32) || (k == 46) || (k == 123 || (k == 125)) || (k == 126)) ? false : true;
    }
}
function validateEmail(sEmail) {
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-zA-Z][a-zA-Z-0-9]*\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    if (regex.test(sEmail.trim())) {
        return true;
    }
    else {
        return false;
    }
}
function validatePanNo(PanNo) {
    var regex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    if (regex.test(PanNo)) {
        return true;
    }
    else {
        return false;
    }
}
function OnlyPrice(obj, e) {
    var charCode = (e.which) ? e.which : event.keyCode;
    var number = obj.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if (number.length > 1 && charCode == 46) {
        return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(obj);
    var dotPos = obj.value.indexOf(".");
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1) && charCode != 8) {
        return false;
    }
    return true;
}
function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
        return o.value.lastIndexOf(r.text)
    } else return o.selectionStart
}
function OnlyQuantity(e) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    var keyCode = e.which ? e.which : e.keyCode
    //alert(keyCode);
    if ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function GetUrlParam() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function GetUrlArray() {
    var hashes = window.location.href.split('/').slice(3);
    if (hashes[0].toLowerCase() == "sitefinity")
        return null;
    return hashes;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookieTillMidnight(cname, cvalue) {
    var date = new Date();
    var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
    var expires = "expires=" + midnight.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function deleteCookie(cookiename) {
    try {
        var now = new Date();
        now.setMonth(now.getMonth() - 1);
        var expires = "expires=" + now.toUTCString();
        document.cookie = cookiename + "='';" + expires + ";path=/";
    } catch (e) {
        console.log(e);
    }
}
function SessionExpired() {
    try {
        deleteCookie(UserCookie);
        deleteCookie(UserToken);
        deleteCookie(UserAccId);
        deleteCookie(UserDetails);
        deleteCookie(BrokerName);
        deleteCookie(BranchId);
        deleteCookie(ClientCode);
        deleteCookie(StockCart);
        deleteCookie(MFCart);
        deleteCookie(StockBasketCart);
        deleteCookie(MFBasketCart);
        deleteCookie(Source);
        deleteCookie(EXEValidationSession);
        ///
        localStorage.removeItem('name');
        localStorage.removeItem('status');
        localStorage.removeItem('showconsent');
        _ss_track.api.remove_chat_widget();
    } catch (e) {
        console.log("GTM Error Remove Local Storage & _ss_track.api.remove_chat_widget()");
        console.log(e);
        console.log("============================================================");
    }
}
function Logout() {
    SessionExpired();
}

function AjaxCall(url, data, successEvent, failureEvent) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successEvent,
        error: failureEvent,
        async: true
    });
}
function AjaxCallHelper(url, data, successEvent, failureEvent) {
    $.ajax({
        type: "POST",
        url: "http://localhost:9008/" + url,//Local
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successEvent,
        error: failureEvent,
    });
}
function onFailure(msg) {
    console.log(msg);
    $("#loader").hide();
    $(".loginbtn").button("reset");
}

function RefreshPage() {
    location.reload();
}
function Redirect(url) {
    location.href = url;
}
function redirection(section) {
    if (section == "home") {
        setTimeout(function () { Redirect("/"); }, 2000);
    }
    else {
        setTimeout(function () { location.reload(); }, 2000);
    }
}

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

function dateDiff(dt) {
    var timestamp = new Date(dt);
    var d = Math.abs(timestamp - new Date().getTime()) / 1000;                 // delta
    var r = {};                                                                // result
    var s = {                                                                  // structure
        year: 31536000,
        month: 2592000,
        week: 604800, // uncomment row to ignore
        day: 86400,   // feel free to add your own row
        hour: 3600,
        minute: 60,
        second: 1
    };

    Object.keys(s).forEach(function (key) {
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
    });
    return r;
};
function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY)
}
function GetMaxElapsedTime(time) {
    var elapsedtime;
    switch (true) {
        case time.year > 0:
            elapsedtime = time.year + " year" + (time.year < 2 ? "" : "s") + " ago";
            break;
        case time.month > 0:
            elapsedtime = time.month + " month" + (time.month < 2 ? "" : "s") + " ago";
            break;
        case time.week > 0:
            elapsedtime = time.week + " week" + (time.week < 2 ? "" : "s") + " ago";
            break;
        case time.day > 0:
            elapsedtime = time.day + " day" + (time.day < 2 ? "" : "s") + " ago";
            break;
        case time.hour > 0:
            elapsedtime = time.hour + " hour" + (time.hour < 2 ? "" : "s") + " ago";
            break;
        case time.minute > 0:
            elapsedtime = time.minute + " minute" + (time.minute < 2 ? "" : "s") + " ago";
            break;
        case time.second > 0:
            elapsedtime = time.second + " second" + (time.second < 2 ? "" : "s") + " ago";
            break;
    }
    return elapsedtime;
}

var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
      , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        var blob = new Blob([format(template, ctx)]);
        var blobURL = window.URL.createObjectURL(blob);
        return blobURL;
    }
})();
function DownloadExcel(filename, tableID, sheetName) {
    var a = document.createElement('a');
    var todaysDate = moment().format('DD-MM-YYYY');
    var blobURL = tableToExcel(tableID, sheetName);
    $(a).attr('download', filename + ' ' + todaysDate + '.xls')
    $(a).attr('href', blobURL);
    //  a.click();

    if (navigator.userAgent.search("Firefox") > 0) {
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else {
        a.click();
    }

}

function exportTableToCSV(a, b) {
    function j(a) {
        return a.get().join(f).split(f).join(h).split(e).join(g)
    }

    function k(a, b) {
        var c = $(b),
            d = c.find("td");
        return d.length || (d = c.find("th")), d.map(l).get().join(e)
    }

    function l(a, b) {
        return $(b).text().replace('"', '""')
    }
    var c = a.find("tr:has(th)"),
        d = a.find("tr:has(td)"),
        e = String.fromCharCode(11),
        f = String.fromCharCode(0),
        g = '","',
        h = '"\r\n"',
        i = '"';
    i += j(c.map(k)), i += h, i += j(d.map(k)) + '"',
    csvData = "data:application/vnd.ms-excel;charset=utf-8," + encodeURIComponent(i),
    window.navigator.msSaveBlob ? window.navigator.msSaveOrOpenBlob(new Blob([i], {
        type: "text/plain;charset=utf-8;"
    }), b) : $(this).attr({
        download: b,
        href: csvData,
        target: "_blank"
    })

}

function PrintDiv(id, docTitle) {
    try {
        var contents = $("#" + id).html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        /// frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        ///
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        ///
        frameDoc.document.write('<html><head><title>' + docTitle + '</title>');
        ///
        frameDoc.document.write('<link href="/assets/css/vendor.min.css" rel="stylesheet" />');
        frameDoc.document.write('<link href="/assets/css/styles.min.css" rel="stylesheet" />');
        frameDoc.document.write('<link href="/assets/customCss/mystyle.min.css" rel="stylesheet" />');
        frameDoc.document.write('<link href="/assets/customCss/search.css" rel="stylesheet" />');
        frameDoc.document.write('</head><body>');
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        ///
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);

    } catch (e) {
        ToastPopup("Error", "Cannot print this page.");
    }
}

function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
}
function saveByteArray(reportName, byte) {
    var blob = new Blob([byte]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName + ".pdf";
    link.download = fileName;
    link.click();
};

function ExportToPDF(htmlContent, width, height, filename) {
    var params = {};
    params.html = htmlContent;
    params.wd = width;
    params.ht = height;
    params = JSON.stringify(params);

    AjaxCallHelper("HelperMethods.aspx/ReturnFile", params,
        function (response) {
            // on success
            /// console.log(response.d.length);
            if (response.d.length > 0) {
                var sampleArr = base64ToArrayBuffer(response.d);
                saveByteArray(filename + "_" + new Date().format("yyyymmdd"), sampleArr);
            }
            else {
                ToastPopup("error", "Cannot export to PDF.");
            }
        },
        function (err) {
            // on failure
            // console.log(err);
        });
}

function numDifferentiation(val) {
    var value = val;
    if (val < 0)
        value = Math.abs(value);

    if (value >= 10000000)
        value = (value / 10000000).toFixed(2) + ' Cr';

    else if (value >= 100000)
        value = (value / 100000).toFixed(2) + ' Lac';

    //else if (val >= 1000) val = (val / 1000).toFixed(2) + ' K';
    if (val < 0)
        value = "-" + value;
    else
        value = value;

    return value;
}
function commaSeparateNumber(val) {
    if (val != "" && val != undefined)
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
    else
        val = 0;

    return val;
}
function commaSeparateNumberNew(val) {
    var isNegative = false;
    if (val != "" && val != undefined) {
        var arr = [];
        if (val.toString().indexOf(".") > 0) {
            arr = val.toString().split('.');
            x = arr[0].toString();
        }
        else {
            x = val.toString();
        }

        if (x.toString().indexOf("-") > -1) {
            isNegative = true;
            x = x.toString().replace(/-/g, "");
        }

        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

        res = arr.length > 1 ? res + "." + arr[1] : res;

        if (isNegative) {
            res = "-" + res;
        }
    }
    else {
        res = 0;
    }
    return res;

}

//Conversion from decimal to binary

function decimaltobinary(val) {
    var binarynum = parseInt(val, 10).toString(2);
    return binarynum;
}


function openSharePopup(url) {
    window.open(url, '_blank', 'scroll=no,height=400,width=600,resizable=no,fullscreen=no,scrollbars=no,status=no');
}
function ToastPopup(popuptype, msg) {
    switch (popuptype) {
        case "success":
            BootstrapAlert.success({
                title: "Success!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "error":
            BootstrapAlert.alert({
                title: "Error!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "info":
            BootstrapAlert.info({
                title: "Info!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "warning":
            BootstrapAlert.warning({
                title: "Warning!",
                message: msg,
                dissmissible: true,
            });
            break;
    }
}
function ReutrnNAIfBlank(value) {
    if (value == "" || value == null) {
        value = "NA";
    }
    return value;
}
function ReutrnZeroIfBlank(value) {
    if (value == "" || value == null) {
        value = "0";
    }
    return value;
}
function FormatString(strContent, maxchar) {
    var formatstring = "";
    if (strContent != "" && strContent != undefined) {
        if (strContent.length > maxchar)
            formatstring = strContent.substring(0, maxchar) + "...";
        else
            formatstring = strContent;
    }
    return formatstring;
}
function compareValues(key, order) {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        var varA = (typeof a[key] === 'string') ?
          a[key].toUpperCase() : a[key];
        var varB = (typeof b[key] === 'string') ?
          b[key].toUpperCase() : b[key];

        var comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
          (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

function isGuid(stringToTest) {
    if (stringToTest[0] === "{") {
        stringToTest = stringToTest.substring(1, stringToTest.length - 1);
    }
    var regexGuid = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
    return regexGuid.test(stringToTest);
}

function handleSelect(ctrl, target) {
    if (ctrl.value != "" && ctrl.value != "javascript:void(0)")
        target == "" ? window.location = ctrl.value : window.open(ctrl.value, target);
}

function setIFrameSrc(iFrameID, type, url) {
    var myFrame = $('#' + iFrameID);
    url = url.replace(/ /g, '-').toLowerCase();
    $(myFrame).attr('src', url);
    return false;
}

// GENERIC FUNCTIONS ENDS


function setIFrameSrcMenu_New(iFrameID, postcodeValue, campaigncode) {
    var myFrame = $('#' + iFrameID);
    var url = '/retail/accounts/apply-now?ProdName=' + postcodeValue;
    url = url.replace(/ /g, '-').toLowerCase();
    $(myFrame).attr('src', url);
    //$('.mega_menu_overlay').addClass('apply_now_overlay');
    //setTimeout("$('.apply_now_form_container_new').show()", 100);
    //$("html, body").animate({ scrollTop: 0 }, "slow");

    $('.apply_now_form_container_new').show();
    return false;
}


function openSharePopup(url) {
    window.open(url, '_blank', 'scroll=no,height=400,width=600,resizable=no,fullscreen=no,scrollbars=no,status=no');
}

function ShareFn(data) {
    var sharetype = $(data).data('name').toLowerCase();
    var domainurl = location.protocol + '//' + location.hostname;
    var detailurl = domainurl + '/' + $(data).data('key');
   // var url = $(data).data('key');
    var url = location.href;

    var sharetext = $(document).find("title")[0].text.trim().replace(/%/g, "-per-").replace(/&/g, "-and-").replace(/\./g, "").replace(/'/g, "~").replace(/\|/g, "").replace(/ /g, "-").replace(/;/g, ',');

    var shareurl = "";

    if (sharetype == "facebook") {
        shareurl = 'https://www.facebook.com/sharer/sharer.php?u=' + detailurl;
    }
    else if (sharetype == "twitter") {
        shareurl = 'https://twitter.com/intent/tweet?text=' + sharetext + '&url=' + detailurl;
    }
    else if (sharetype == "linkedin") {
        shareurl = 'https://www.linkedin.com/shareArticle?mini=true&title=' + sharetext + '&summary=&url=' + detailurl;
    }
    else if (sharetype == "gplus") {
        shareurl = 'https://plus.google.com/share?url=' + detailurl;
    }
    else if (sharetype == "whatsapp") {
        //shareurl = 'whatsapp://send?text=url' + url;
        //shareurl = 'whatsapp://send?text=' + sharetext + '&url=' + detailurl;
		 shareurl = 'whatsapp://send?url=' + detailurl+ '?pwu=whatsapp-social-media-shares' + '&text=' + detailurl;
      
        /* if (sharetext.toLowerCase().indexOf('progress') != -1) { 
            shareurl = 'whatsapp://send?text=' + url + '?cta=homepage-read-all-progress-with-us-blog';
          
        } */
    }

    openSharePopup(shareurl);
    return false;
}


function SetCompareAllAttrs(ctrl) {
    var href = $(ctrl).data("href");
    var compareids = $(ctrl).data("compareids");
    var comparetype = $(ctrl).data("comparetype");
    var ismobile = $(ctrl).data("ismobile");
    var regularorexclusiv = $(ctrl).data("regularorexclusiv") == null ? "" : $(ctrl).data("regularorexclusiv");

    var result = AjaxService.SetCompareAllAttrs(href, compareids, comparetype, ismobile, regularorexclusiv);

    if (result == "true")
        location.href = href;
}



function gotoLink(ctrl) {

    var eventCategory = $(ctrl).data("eventcategory");
    var eventAction = $(ctrl).data("eventaction");
    var eventLabel = $(ctrl).data("eventlabel");
    var event = $(ctrl).data("event");

    //Check whether eventLabel value contains simple value or URL.
    //If URL, then append full URL if not
    if (eventLabel.startsWith("/") || eventLabel.startsWith("http")) {
        if (eventLabel.indexOf(window.location.host) > -1 || eventLabel.indexOf("www.axisbank.com") > -1 || eventLabel.indexOf("http") > -1)
        { }
        else {
            eventLabel = window.location.protocol + "//" + window.location.host + eventLabel;
        }
    }

    dataLayer.push({
        'eventCategory': eventCategory,
        'eventAction': eventAction,
        'eventLabel': eventLabel,
        'event': event
    });
}

//Mobile Optimization of Links
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
//Mobile Optimization of Links

$(document).ready(function () {

    //Mobile Optimization of Links
    var app = getUrlVars()["app"];
    if (app == 'y') {
        $(".topBand").remove();
        $(".topMenu").remove();
        $(".breadcrumSect").remove();
        $(".bannerWrapper").remove();
        $("footer").remove();
    }
    //Mobile Optimization of Links

    /*$(document).on("click", ".js-hamburger", function (e) {
        e.preventDefault();
        var mobileMenuPersonalHTML = AjaxService.GetMobileMenuContent("mobileMenuPersonal_new");
        $(".mobiNav").html(mobileMenuPersonalHTML);
        $("body").css("position", "fixed");
        $("body").css("width", "100%");
        $(".overLay").show();
        $(".mobiNav").animate({
            left: "0"
        });
		$(".mobiNav").focus();
		$("body").hasClass("wob")?$(".mobileMenu .logoSect img").attr("src","assets/images/logo-white.png"):$(".mobileMenu .logoSect img").attr("src","/assets/images/logo.png")
    });*/

    $(document).on("click", ".js-hamburger", function (e) {
        e.preventDefault();
        var lang = $(this).attr("data-type");
        var mobileMenuPersonalHTMLType = "";

        switch (lang) {
            case "hindi":
                mobileMenuPersonalHTMLType = "mobileMenuPersonal_new_Hindi";
                break;
            case "tamil":
                mobileMenuPersonalHTMLType = "mobileMenuPersonal_new_Tamil";
                break;
            default:
                mobileMenuPersonalHTMLType = "mobileMenuPersonal_new"
        }
        if (mobileMenuPersonalHTMLType != "") {
            var mobileMenuPersonalHTML = AjaxService.GetMobileMenuContent(mobileMenuPersonalHTMLType);
            $(".mobiNav").html(mobileMenuPersonalHTML);
            $("body").css("position", "fixed");
            $("body").css("width", "100%");
            $(".overLay").show();
            $(".mobiNav").animate({
                left: "0"
            });
            $(".mobiNav").focus();
            $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
        }

    });

    $(document).on("click", ".js-business", function (e) {
        e.preventDefault();
        var mobileMenuBusinessHTML = AjaxService.GetMobileMenuContent("BusinessHomeMainMenuMobile_new");
        $(".mobiNav").html(mobileMenuBusinessHTML);
        $("body").css("position", "fixed");
        $("body").css("width", "100%");
        $(".overLay").show();
        $(".mobiNav").animate({
            left: "0"
        });
        $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
    });
    $(document).on("click", ".js-personal", function (e) {
        e.preventDefault();
        var mobileMenuPersonalHTML = AjaxService.GetMobileMenuContent("mobileMenuPersonal_new");
        $(".mobiNav").html(mobileMenuPersonalHTML);
        $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
    });

    $(document).on('click', '.axisappDownlLink', function (event) {
        event.preventDefault();
        if ($('.android').length) {
            window.open("https://play.google.com/store/apps/details?id=com.axis.mobile&hl=en", '_blank')
        }
        else if ($('.ios').length) {
            window.open("https://itunes.apple.com/in/app/axis-bank-mobile-banking/id699582556?mt=8", '_blank');
        }
    });

    //To stick the menu when page is loaded from middle
    $(window).scrollTop() > 44 ? $("body").addClass("header-fixed") : $("body").removeClass("header-fixed");

    $(".breadcrumSect").css("top", "0px");

    $(document).on("click", ".close, .cancel, .accept", function (e) {
        $(".dealPopup, .overLay, .dealPopupSecondary, .eclgsApplyPopup").hide(),
        $("body").removeClass("topMenuOpen")
    });

    $(document).on("click", ".js-bankDigiClk", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var URL = $(this).data("href");
        setIFrameSrc("iframeApplyNow", "iframeApplyNow", URL);
        $(".popupWrap, .popOverlay").fadeIn();
        $("body").addClass("topMenuOpen");
    });
    $(document).on("click", ".closeBtn", function (e) {
        $(".popupWrap, .popOverlay").hide();
        $("body").removeClass("topMenuOpen");
    });

    $('.lnksubscribenow').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var type = $(this).data("type");
        var url = $(this).data("url");
        setIFrameSrc("IframePopup", type, url)
        $("#iframeModal").modal("show");

        //$("#IframePopup body").css("background", "none !important");

    });





});

$(window).on("load", function () {
    var loanstabindex = $(".loansListWrapper .owl-stage .owl-item li.active").parent(".owl-item").index();
    $('.loansListWrapper .owl-carousel').trigger('to.owl.carousel', [loanstabindex, 500, true]);

    sendToMoneyTabsActive();
});

function sendToMoneyTabsActive() {

setTimeout(function(){
    var str = window.location.href;
    var lastSlash = str.lastIndexOf("/");
    str.substring(lastSlash+1);
     var tabName =  str.substring(lastSlash+1);

    $('.' + tabName).addClass('active');

},500);

//22.05.19
$(document).ready(function(){
  
var app = getParameterByName('app');
        if (app == 'y' || app == 'Y') {
            $('.latestTitle').show();
            $('header').hide();
            $('.breadcrumSect').hide();
            $('#bannerLt').hide();
            $('.latestP').hide();
            $('.digitalBank').hide();
            $('.socialWrap').hide();
            $('.rgtSide').addClass('brdNone');
            $('footer').hide();
            $("#HomePageStrip").hide();
			$(".backArw").show();
			$('.tabBox').addClass('mrgTop');
			$('.fdOpn').hide();
            $('#chatbotUI, .ab_trending, .headerRevamp, .footer').hide();
          
          $("a.linkEffect, a.backArw, a.wholeLink, .knowMore a,  .tofferExpire a").click(function() {
		  var theHref = $(this).attr("href");
		  if (theHref.indexOf("?app") === -1) {
				$(this).attr("href", theHref + "?app=y");
			}
		});
		var url = document.location.href;
		if (url.toLowerCase().indexOf('/latest-articles/') >= 0) {
       $('.topSearchBox').hide();
     }
     if (url.toLowerCase().indexOf('/money-matters/') >= 0) {
       $('.topSearchBox').hide();
     }
	 if (url.toLowerCase().indexOf('/tech-talk/') >= 0) {
       $('.topSearchBox').hide();
     }
	 if (url.toLowerCase().indexOf('/food-travel/') >= 0) {
       $('.topSearchBox').hide();
     }
	 if (url.toLowerCase().indexOf('/how-to-series/') >= 0) {
       $('.topSearchBox').hide();
     }
        }
  
  var field = 'app';
        function getParameterByName(name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
          
        };
  
});

// 26.06.19
$(".nav a").each(function() {
    //console.log($(this).attr('href'));
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).find('li').addClass('active');
    }
});

// 05.08.19
$(document).scroll(function () {
  if(window.innerWidth < 860){
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.mob-apply, .mobAutoShow').fadeIn();
    } else {
        $('.mob-apply, .mobAutoShow').fadeOut();
    }
	
	if (y > 950) {
        $('.mob-apply-calc').fadeIn();
    } else {
        $('.mob-apply-calc').fadeOut();
    }
}
});

// 26.08.19
$(function(){
		$('#myid li a').filter(function(){
			$('#myid li:first-child').addClass('active');
			return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
		$('#myid li a').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active')	
		})
        if($(".businessBody").length > 0){
        $("#Personal").removeClass("active");
        $("#business").addClass("active");
        }

        if($("*").hasClass("aboutUs")) {
            if($(".navbarSect").length > 0){
            $("#Personal").removeClass("active");
            $("#Aboutus").addClass("active");
        }
        }
        

        //$(function() { $('#Aboutus a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active'); }); 

        /*var path = window.location.pathname.split("/").pop();
        if ( path == '' ) {
            path = 'about-us';
        }
        var target = $('#myid li '+path+'');
        target.addClass('active');*/

	});


     // $('.countriesDetailsBox').find(urlStringName).addClass('active').trigger('click');  
    /*console.log($('.' + str.substring(lastSlash+1));
    console.log('hjkhkhkhk' + str.substring(lastSlash+1));
    console.log('hjkhkhkhk'); */

    // console.log($('.countriesDetailsBox').find('.middle-east').length);
}

/* Read more */
readMore( $('.readCont'), 2);

function readMore(jObj, lineNum) {
  if ( isNaN(lineNum) ) {
    lineNum = 2;
  }
  var go = new ReadMore (jObj, lineNum);
}

function ReadMore(_jObj, lineNum) { 
  var READ_MORE_LABEL = 'Read more <img src="/images/default-source/revamp_new/loans/desktop/down-select.png">';
  var HIDE_LABEL = 'Read less <img src="/images/default-source/revamp_new/loans/desktop/down-select.png">';

  var jObj = _jObj;
  var textMinHeight = ''+ (parseInt(jObj.children('.readMoreCont').css('line-height'),10)*lineNum) +'px';
  var textMaxHeight = ''+jObj.children('.readMoreCont').css('height');

  jObj.children('.readMoreCont').css('height', ''+ textMaxHeight);
  jObj.children('.readMoreCont').css( 'transition', 'height .5s');
  jObj.children('.readMoreCont').css('height', ''+ textMinHeight);

  jObj.append ('<a href="#" class="read-moreText">'+READ_MORE_LABEL+'</a>');

  jObj.children('.read-moreText').click ( function(e) {
	  e.preventDefault();
    if (jObj.children('.readMoreCont').css('height') === textMinHeight) {
      jObj.children('.readMoreCont').css('height', ''+textMaxHeight);
      jObj.children('.read-moreText').html(HIDE_LABEL).addClass('active');
    } else {
      jObj.children('.readMoreCont').css('height', ''+textMinHeight);
      jObj.children('.read-moreText').html(READ_MORE_LABEL).removeClass('active');
    }
  });

}
/* Read more end*/
/* Axis Bank copyright */
$(function() {
	AByear = new Date().getFullYear();
	$('.ABcurrentYear').text(AByear);
});
/* Axis Bank copyright end */
$('.menuBody h4').on('click', function() {
	$('.checkRateBox').attr('style', 'display: block !important');
});

$(document).ready(function () {
            $(window).resize(function () {
                var headerHeight = $(".topMenu").height();
                var winWidth = $(window).width();
                /*if ((winWidth <= 1199)) {
                    
                } */
            }).resize();
          
          var hash= window.location.hash
		if ( hash == '' || hash == '#' || hash == undefined ) return false;
		var target = $(hash);
		headerHeight = 150;
		target = target.length ? target : $('[name=' + hash.slice(1) +']');
		if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 150 //offsets for fixed header
        }, 'linear');
      }


  
});

/* Social media share */
//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
$('#ab_tweetBtn').on('click', function(ev) {
    ev.preventDefault();
    // Remove existing iframe
    $('#ab_tweetBtn iframe').remove();
    // Generate new markup
    var ab_tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', '')
        .attr('data-text', $('#tweetText').val());
    $('#ab_tweetBtn').append(ab_tweetBtn);
    twttr.widgets.load();
});
//twitter end

//facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
//WhatsApp
 $(document).on("click", '.ab_whatsapp', function() {
            var text = $(this).attr("data-text");
            var url = $(this).attr("data-href");
            var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
    });
 /* Social media share end */   

if($(window).width() < 767){
if($("*").hasClass("ab_floatingBtn") || $("*").hasClass("mob-apply") || $("*").hasClass("mob-apply-calc")) {
   $('.footerBtmSec').css({'margin-bottom' : '40px'});
}
}

	$(".inptSearch").on("input", function(){
	var regexp = /[^a-zA-Z ]/g;

   if($(this).val().match(regexp)){
     $(this).val( $(this).val().replace(regexp,'') );
   }
});

/* For carousel slider */
jQuery("#ab_carousel").owlCarousel({
 autoplay: true,
 lazyLoad: true,
 loop: true,
 margin: 20,
 responsiveClass: true,
 autoplayTimeout: 7000,
 smartSpeed: 800,
 dots: true,
 responsive: {
   0: {
     items: 1
   },
   600: {
     items: 1
   },
   1024: {
     items: 1
   },
   1366: {
     items: 1
   }
 }
});
/* For carousel slider */

/* For Axis mobile page slider */
function infoCarousel(target, looping, navigation, padding, itemCount, displayDots, responsivecount, desktopCount, margin, lazyLoading) {
    ($('.infoOwl').owlCarousel({
        items: itemCount,
        loop: looping,
        margin: margin,
        dots: displayDots,
        nav: navigation,
        navText: ["", ""],
        // autoplay: !1,
        autoplay: true,
        autoplayTimeout: 2500,
        lazyLoad: lazyLoading,
        
    }) //: ($(target).owlCarousel("destroy"), $(target).css("display", "block"))
)}
$(window).resize(function() {
    var owl;
    infoCarousel(".js-offerSlider .infoOwl .owl-carousel.infoOwl", true, false, 0, 1.2, false, 2, 1.2, 5, true);    
});
infoCarousel(".js-offerSlider .infoOwl .owl-carousel.infoOwl", true, false, 0, 1.2, false, 2, 1.2, 5, true);

/* For Euqal height */
var matchHeight = function () {
    function init() {
        eventListeners();
        matchHeight();
    }
    function eventListeners(){
        $(window).on('resize', function() {
            matchHeight();
        });
    }
    function matchHeight(){
        var equalHeight = $('[data-height]');
        var groupHeights = [];
        
        equalHeight.css('min-height', 'auto');
        
        equalHeight.each(function() {
            groupHeights.push($(this).outerHeight());
        });
        
        var maxHeight = Math.max.apply(null, groupHeights);
        equalHeight.css('min-height', maxHeight);
    };
    return {
        init: init
    };
} ();
$(document).ready(function() {
    matchHeight.init();
});

/* Listing selected box */
$('.loanDesigned > ul > li').mouseover(function()
        {
            $(".loanDesigned > ul > li").removeClass("maxActive").addClass("liHover");
        });

$('.loanDesigned > ul > li').mouseout(function()
        {
          $(".loanDesigned > ul > li:nth-child(1)").addClass("maxActive");
});

  $(document).ready(function() {
$('.faqSect.reserveClick .panel-title, .plBenefits .panel-title').removeClass('openAcc');
$('.faqSect.reserveClick .panel-title, .plBenefits .panel-title').addClass('closeAcc');
});

/* For Digital savings account*/
$(".savingAccountLP .owl-carousel").owlCarousel({
items: 1,
loop: true,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
nav: true,
navText: ["<i class='reg-left'></i>","<i class='reg-right'></i>"]
});


$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
 
    $('[data-popup-close]').on('click', function(e)  {
       e.preventDefault();
       var targeted_popup_class = jQuery(this).attr('data-popup-close');
       $('.custPopup-inner').children('iframe').attr('src', '');
       $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
   });
});
/* Mobile floater for home page */
$(document).scroll(function () {
  if(window.innerWidth < 768){
    var y = $(this).scrollTop();
    
    if (y > 200) {
      $('.mobfloatingBtn').hide();
        $('.mob-apply-new').fadeIn();
    } else {
        $('.mob-apply-new').fadeOut();
      $('.mobfloatingBtn').show();
    }
}
});
/*Read more */
$(".show-more").click(function () {
        if($(".textCont").hasClass("show-more-height")) {
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }
        $(".textCont").toggleClass("show-more-height");
 });

if($(window).width() >= 992){
$(".carSlider .owl-carousel").owlCarousel({
items: 4,
loop: true,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true
});
}
if($(window).width() < 991){
$(".carSlider .owl-carousel").owlCarousel({
items: 1,
loop: true,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true
});
}
$('.jsPno').on('click',function(){
  $('.pnoLinks').slideToggle(280);
  $(this).toggleClass('pnoArw');
});

/* Deals that will interest you */
$(document).ready(function() {
    $(".dcOffer.offersWrapper li").hover(function() {
        $(this).addClass("hoverActive"),
        $(this).addClass("hoverActiveNew")
    }),
    $(document).on("mouseleave", ".dcOffer.offersWrapper li", function(e) {
        e.preventDefault(),
        $(this).removeClass("hoverActive"),
        $(this).removeClass("hoverActiveNew")
    }),
    $(document).on("keydown", ".dcOffer.offersWrapper li .offerInfo .knowMore, .dcOffer.offersWrapper li .offerInfo .knowmorenew", function(e) {
        "Tab" == e.key && ($(this).parents("li").removeClass("hoverActive"),
        $(this).parents("li").removeClass("hoverActiveNew"))
    })
});
function generateOwlMobile(e, o, t, s, a, n, i, l, r, d) {
    $(window).width() < 992 ? $(e).owlCarousel({
        items: a,
        loop: o,
        margin: r,
        dots: n,
        nav: t,
        navText: ["", ""],
        autoplay: !1,
        autoplayTimeout: 2500,
        lazyLoad: !0,
        responsive: {
            0: {
                items: a
            },
            600: {
                items: i
            },
            992: {
                items: l
            }
        }
    }) : ($(e).owlCarousel("destroy"),
    $(e).css("display", "block"))
}
heightAdjust(".offerDtls", !0, 1200, "mobile"),
        generateOwlMobile(".js-dealSlider .owl-carousel", !1, !0, 0, 1, !1, 2, 3, 15, !1),
        setTimeout(function() {
            $(".otherInfoBlocks .eq-height").css("min-height", "0"),
            heightAdjust(".otherInfoBlocks", !1, 767, "desktop")
}, 500);

/* Equal height */
$(document).ready(function() {
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {
   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0;
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(document).ready(function(){
    setTimeout(function () {
    equalheight('.boxContent .dtlBox, .boxContent1 .dtlBox1');
}, 100);
  $('.btn-viewall').on('click', function() {
    setTimeout(function () {
    equalheight('.boxContent1 .dtlBox1');
}, 100);
  });
});

$(window).resize(function(){
  equalheight('.boxContent .dtlBox, .boxContent1 .dtlBox1');
});
});

/* click to Scroll */
$('.targetClick').click(function() {
    $('html, body').animate({
        scrollTop: $(".scrollCont").offset().top - 120
    }, 1000)
}); /* click to Scroll end*/
/* free charge pay later start*/
$(function() {
    //----- OPEN
    $('[fcdata-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('fcdata-popup-open');
        $('[fcdata-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
       window.setTimeout(function() {
       window.location.href = 'https://www.freecharge.in/fc/app?action=view&page=paylater&utm_campaign=paylateraxiscontentpage&utm_source=newsletter&ut';
}, 5000);
    });
});
/* Blog form */
$('.blogPopup').click(function(){
    window.open('https://application.axisbank.co.in/webforms/axisbank_subscribelink/axisbank_subscribelink.aspx?cta=pwu-subscribe-latest-articles', '_blank', 'width=420,height=458');
return false;
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fadeCont").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
    
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
      }
    });
  }).scroll();
});
$(function(){
 $('.submitQuiz').on('click', function(e) {
  $("input[ans='correct']:checked").length;
  if($("input[ans='correct']:checked").length == 2){
    correctMsg();
  }
  else if($("input[ans='correct']:checked").length == 1){
    incorrectMsg();
  }
  else{
    wrongMsg();
  }
});
});
function correctMsg(){
   $(".correctMsgPop").addClass("showMsg");
 $(".popupCls").click(function () {
   $(".correctMsgPop").removeClass("showMsg");
   });
}
function incorrectMsg(){
   $(".incorrectMsgPop").addClass("showMsg");
 $(".popupCls").click(function () {
   $(".incorrectMsgPop").removeClass("showMsg");
   });
}
function wrongMsg(){
   $(".wrongMsgPop").addClass("showMsg");
 $(".popupCls").click(function () {
   $(".wrongMsgPop").removeClass("showMsg");
   });
}
/* UTM parameter farmer funding */
$("a.utmAgri").click(function() {
    var theHref = $(this).attr("href");
    var pageURL = $(location).attr("href");
    var stringParam = pageURL.split("?cta=")[1];
    var stringParamUtm = pageURL.split("?utm")[1];
    if(pageURL.split("?cta=")[1]){
    $(this).attr("href", theHref + "&utm_campaign=" + stringParam + "&utm_medium=banner&utm_source=agri-farmer-partner-website");
    }
  else if(pageURL.split("?utm")[1]){
    $(this).attr("href", theHref + "&utm" + stringParamUtm);
    }
});
/* Multiple Popup */ 
$('.js-btn-modal').on('click', function(){
  $('#overlayPop').fadeIn();
  var id = $(this).data('id');
  $('.js-modal[data-id="modal' + id + '"]').fadeIn();
});

$('.js-close-btn').on('click', function(){
  $('#overlayPop').fadeOut();
  $('.js-modal').fadeOut();
});
$('#overlayPop').on('click', function(){
  $('#overlayPop').fadeOut();
  $('.js-modal').fadeOut();
});

$(document).ready(function(){
  $('.multiRead .moreNless').on('click', function(){
    $('.contentBox').css('height', 'auto');
  });
});
$(window).scroll(function() {
    $.each($('.topSearchProg .imgBox img'), function() {
        if ( $(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100) ) {
            var source = $(this).data('src');
            $(this).attr('src', source);
            $(this).removeAttr('data-src');
        }
    })
});
/* For Sticky sidebar */
if($(window).width() > 991){
$(function() {
  var top = $('.rightPart').offset().top - parseFloat($('.rightPart').css('marginTop').replace(/auto/, 0));
  var footTop = $('.footerUpSec, .plCity').offset().top - parseFloat($('.footerUpSec, .plCity').css('marginTop').replace(/auto/, 0));

  var maxY = footTop - $('.rightPart').outerHeight();

  $(window).scroll(function(evt) {
    var y = $(this).scrollTop();
    if (y > top) {
      if (y < maxY) {
        $('.rightPart').addClass('fixed').removeAttr('style');
      } else {
        $('.rightPart').removeClass('fixed').css({
          position: 'absolute',
          top: (maxY - top) + 'px'
        });
      }
    } else {
      $('.rightPart').removeClass('fixed');
    }
  });
});
}

 /* click to Scroll */
        $('.panel .panel-heading').bind('click',function(){
          var headerHeight = $('.maroontheme').outerHeight();
       var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - headerHeight });
            }, 500);
  });/* click to Scroll end*/

/* UTM parameter Personal loan pages */
$(".utmParam").click(function() {
    var theHref = $(this).attr("href");
    var pageURL = $(location).attr("href");
    var stringParamUtm = pageURL.split("?utm_source=citi-ready-credit")[1];
    if(pageURL.split("?utm_source=citi-ready-credit")[1]){
    $(this).attr("href", theHref + "&utm_source=citi-ready-credit&utm_medium=citi&utm_campaign=citi-now-axis&utm_term=organic");
    }
    else{
        $(this).attr("href", theHref + "&utm_source=results-personalloan-main-banner&utm_medium=website&utm_campaign=mlp-ipl-website");
    }
  $(this).unbind();
});;
function AjaxCall(url, data, successEvent, failureEvent) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successEvent,
        error: failureEvent,
        async: true
    });
}

function onFailure(msg) {
    console.log(msg);
}

function filterByCategory(item) {
    if (item.Category == "sponser") {
        return true;
    }
    return false;
}

function OnlyNonSpecialcharacters(e) { // Alphanumeric only
    //var specialKeys = new Array();
    //specialKeys.push(8); //Backspace
    //specialKeys.push(9); //Tab
    //specialKeys.push(46); //Delete
    //specialKeys.push(32); //space
    //specialKeys.push(36); //Home
    //specialKeys.push(35); //End
    //specialKeys.push(37); //Left
    //specialKeys.push(38); //Up
    //specialKeys.push(39); //Right
    //specialKeys.push(40); //Down
    //var k = (e.which) ? e.which : e.keyCode;
    //if ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123) || k == 0 || (specialKeys.indexOf(k) != -1 && e.charCode != e.keyCode)) {
    //    return true;
    //}
    //else {
    //    return false;
    //}

    var k = e.key;
    re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    var isSplChar = re.test(k);
    if (isSplChar)
        return false;
    else
        return true;
}


function getParameterByName(name, url) {
    try {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        // return results[2];
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    } catch (e) { return ''; }
}

function getSearchResultTest(text) {

    var url = "/FDRatesUpload/Service/GetAzureSearchDataDR";

    $.post(url, { "text": text }, function (data) {
        var html = '';


        if (data.value.length > 0) {
            html = getHtmlFromJsonTest(data.value, null);
            $('.lblResult').css("border", "1px solid transparent").css("padding-left", "0");



            $('.lblResult').html(html);
            SearchResultsEvents();
        }
        else {
            $('.lblResult').html("Sorry! We did not find a match.");
            $('.lblResult').css("background", "white");
            $('.lblResult').css("border", "1px solid #000").css("font-size", "14px").css("padding-left", "15px");


        }
        //else {
        //    $.get(url2, function (data1) {
        //        html = getHtmlFromJsonTest(data.value, data1.Suggestions);
        //        $('.lblResult').html(html);
        //        SearchResultsEvents();

        //    });
        //}

    }, 'json');
}

function SearchResultsEvents() {
    var $input = $('input.rating');
    if ($input.length) {
        $input.removeClass('rating-loading').addClass('rating-loading').rating();
    }

    $("#barsearchrating").change(function (e) {
        e.preventDefault();

        var keyword = $(".headsearch1").val();
        var star = $(this).val();
        if (star != "") {
            var params = {};
            params.keyword = keyword;
            params.star = star;
            params = JSON.stringify(params);
            AjaxCall("/AxisWebService.asmx/SetSearchRating", params, function (response) {
                onSetSearchRatingSuccess(response, keyword, star);
            }, onFailure);
        }

    });


}

function getHtmlFromJsonTest(data, data1) {
    var html = "";
    var mandate = (typeof data) == 'string' ? eval('(' + data + ')') : data;

    var datapresent = false;
    if (data.length > 0)
        datapresent = true;
    if (data1 != null) { if (data1.length > 0) { datapresent = true; } }

    if (datapresent) {
        html = html + '<div class="lisearchrating" style="display:none;"><div class="dvgiverating">Give your rating</div><input id="barsearchrating" value="0" type="text" class="rating" data-min="0" data-max="5" data-step="0.5" data-size="xs" title="" /></div>';
        html = html + "<UL class='Search'>";
        //html = html + '<LI class="lisearchrating"><input id="barsearchrating" value="0" type="text" class="rating" data-min="0" data-max="5" data-step="0.5" data-size="xs" title="" /></LI>';

        //var sponserdata = data.filter(filterByCategory);

        for (i = 0; i < data.length; i += 1) {

            if (data[i].URI.indexOf('http://') + data[i].URI.indexOf('https://') == -2) {
                //data[i].URI = 'https://uat.axisbank.com' + data[i].URI;
            }
            var Anchor = data[i].URI;
            var ctahtml = "";
            if (data[i].CTAText != "" && data[i].CTAText != null)
                ctahtml = "<a class='lnkctalink' href='" + data[i].CTAURL + "'><em>" + data[i].CTAText + "</em></a>";

            var iconforsearchhtml = "";
            var searchlinkclass = "";
            if (data[i].IconForSearch != "" && data[i].IconForSearch != null) {
                iconforsearchhtml = "<img class='imgiconforsearch' src='" + data[i].IconForSearch + "' />";
                searchlinkclass = "imgSearchContain";
            }

            var finaltitle = "";

            var result = data[i].Title;
            var search = $(".headsearch1").val().trim();
            var sindex = result.toLowerCase().indexOf(search.toLowerCase())
            var eindex = sindex + search.length;
            if (sindex >= 0)
                finaltitle = result.substr(0, sindex) + '<span class="spnfinaltitle">' + result.substr(sindex, search.length) + '</span>' + result.substr(eindex)
            else
                finaltitle = result;



            //data[i].Title.replace($(".headsearch1").val().trim(), '<span class="spnsearchtitle">' + $(".headsearch1").val().trim() + '</span>');

            var searchdesc = "";
            if (data[i].SearchDescription != "" && data[i].SearchDescription != null && data[i].Category == "sponsored")
                searchdesc = "<span class='spnsearchdesc'>" + data[i].SearchDescription + "</span>";

            html = html + "<LI class='lisearchitem " + data[i].Category + "' ><a class='lnksearchlink " + searchlinkclass + "' href='" + Anchor + "' >" + iconforsearchhtml + "<em>" + finaltitle + "" + searchdesc + "</em></a>" + ctahtml + "</LI>";

        }
        if (data1 != null) {
            for (i = 0; i < data1.length; i += 1) {

                var Anchor = '';
                if ($(".lblResult_new").length > 0)
                    Anchor = '/search?indexCatalogue=axissearch&searchQuery=' + data1[i] + '&wordsMode=0';
                else
                    Anchor = '/search?indexCatalogue=axissearch&searchQuery=' + data1[i] + '&wordsMode=0';
                html = html + "<LI ><a href='" + Anchor + "' ><em>" + data1[i] + "</em> </a></LI>";

            }
        }


        html = html + "</UL>";
        return html;
    }
    else { return ''; }
}

function onSetSearchRatingSuccess(response, keyword, star) {
    if (response.d == "success") {
        $(".lisearchrating").hide();
    }
}

var NavAzureSearchResultscurrentpage = 1;
var NavAzureSearchResultsislastpageselected = false;
var NavAzureSearchResultspagesize = 10;
var NavAzureSearchResultsnavlength = 5;

function BindAzureSearchResults(NavAzureSearchResultscurrentpage, NavAzureSearchResultspagesize) {

    var searchText = getParameterByName('searchQuery');

    var NavAzureSearchResultsskip = (NavAzureSearchResultscurrentpage - 1) * NavAzureSearchResultspagesize;

    //UAT

    var url = "/FDRatesUpload/Service/BindAzureSearchDataDR";

    $.post(url, { "text": searchText, "pagesize": NavAzureSearchResultspagesize, "skip": NavAzureSearchResultsskip}, function (data) {

        //var html = '';
        //var template = '<div><div class=""><div class="ms-srch-item"><div class="ms-srch-item-body">' +
        //             '<h3 class="ms-srch-ellipsis"><a href="LinkUrl" class="ms-srch-item-link">Title</a></h3>' +
        //             '<dd class="ms-srch-item-summary">Description</dd> ' +
        //             '<div class="ms-srch-item-path"><a href="LinkUrl">LinkUrl</a></div>' +
        //             '</div></div></div></div>';
        //for (var i = 0; i < data.value.length; i++) {
        //    if (data.value[i].URI.indexOf('http://') + data.value[i].URI.indexOf('https://') == -2) {
        //        data.value[i].URI = 'https://www.axisbank.com' + data.value[i].URI;
        //    }
        //    html = html + template.replace(/Title/g, data.value[i].Title).replace(/LinkUrl/g, data.value[i].URI).replace(/Description/g, data.value[i].Description);
        //}
        //if (data.value.length > 0) {
        //    $('.azureSearchResults > h4').show();
        //}
        //else { $('.azureSearchResults > h4').hide(); $('#ctl00_Body_C008').attr('class', 'col-lg-12 col-md-12 col-sm-12'); }

        //$('.azureSearchResults .sfsearchResultsWrp.sfsearchReultTitleSnippetUrl').html(html);

        if (data.value.length == 0) {
            var $emptydivboxes = $(
                ""
            );
            $("#dvazuresearchresults").html($emptydivboxes);
            return false;
        }
        $(".dlazuresearchresults").html('');
        for (var i = 0; i < data.value.length; i++) {

            if (data.value[i].URI.indexOf('http://') + data.value[i].URI.indexOf('https://') == -2) {
                //data.value[i].URI = 'https://uat.axisbank.com' + data.value[i].URI;
            }

            var row = $('<div>' +
                '<div class="">' +
                '<div class="ms-srch-item">' +
                '<div class="ms-srch-item-body">' +
                '<h3 class="ms-srch-ellipsis"><a class="ms-srch-item-link" runat="server" href="' + data.value[i].URI + '">' + data.value[i].Title + '</a></h3>' +
                '<div class="ms-srch-item-summary">' + data.value[i].Description + '</div>' +
                '<dd class="ms-srch-item-summary"></dd>' +
                '<div class="ms-srch-item-path"><a runat="server" href="' + data.value[i].URI + '">' + data.value[i].URI + '</a></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>');

            $(".dlazuresearchresults").append(row);

        }

        AzureSearchResultsBindNavList(data["@odata.count"], NavAzureSearchResultscurrentpage);


    }, 'json');
}

function AzureSearchResultsBindNavList(TotalNoofRows, NavAzureSearchResultscurrentpage) {

    $("#dvNavAzureSearchResults").empty();

    if (TotalNoofRows > 0) {
        $("#dvNavAzureSearchResults").append(
                                        "<a class='lnkNavAzureSearchResultsPrev' onclick='NavAzureSearchResultsPrevClick(this);' href='javascript:void(0)'>" +
                                            "&laquo;" +
                                        "</a>"
                                    );

        var NoOfPages = Math.ceil(TotalNoofRows / NavAzureSearchResultspagesize);

        for (var i = 0; i < NoOfPages; i++) {
            var liitem = "";
            if ((i + 1) == NavAzureSearchResultscurrentpage) {

                //if it is current page. Make current page active
                liitem = "<a href='javascript:void(0)' onclick='NavAzureSearchResultsClick(this);' class='sf_PagerCurrent lnkNavAzureSearchResults'>" + (i + 1) + "</a>";

                if (NavAzureSearchResultscurrentpage == NoOfPages) {
                    NavAzureSearchResultsislastpageselected = true;
                } else {
                    NavAzureSearchResultsislastpageselected = false;
                }
            } else {
                if (NavAzureSearchResultscurrentpage <= NavAzureSearchResultsnavlength) {
                    //if the page is before initial 5 pages display
                    if ((i + 1) > NavAzureSearchResultsnavlength) {
                        //if the page is above 5 page display. Make them hidden.
                        //liitem = "<li style='display:none;'><a href='' id='liNavMarketEquityTopGainers' >" + (i + 1) + "</a></li>";
                        liitem = "";
                    }
                    else {
                        //if the page is below 5 page display. Make them visible.
                        liitem = "<a href='javascript:void(0)' onclick='NavAzureSearchResultsClick(this);' class='lnkNavAzureSearchResults'>" + (i + 1) + "</a>";
                    }
                }
                else {
                    //if the page is above initial 5 page display
                    if ((NavAzureSearchResultscurrentpage - (i + 1)) >= 0 && (NavAzureSearchResultscurrentpage - (i + 1)) <= (NavAzureSearchResultsnavlength - 1)) {
                        //if the difference between current page and the page lies between 0-4 (pages block to display) then show them
                        liitem = "<a href='javascript:void(0)' onclick='NavAzureSearchResultsClick(this);' class='lnkNavAzureSearchResults'>" + (i + 1) + "</a>";

                    }
                    else {
                        //if the difference between current page and the page does not lies between 0-4 (pages block to display) then hide them
                        //liitem = "<li style='display:none;'><a href='' id='liNavMarketEquityTopGainers' >" + (i + 1) + "</a></li>";
                        liitem = "";
                    }
                }
            }
            if (liitem != "")
                $("#dvNavAzureSearchResults").append(liitem);
        }

        $("#dvNavAzureSearchResults").append(
                                        "<a class='lnkNavAzureSearchResultsNext' onclick='NavAzureSearchResultsNextClick(this);' href='javascript:void(0)' >" +
                                            "&raquo;" +
                                        "</a>"
                                    );
    }

}

function NavAzureSearchResultsClick(ctrl) {

    var pagetogo = $(ctrl).text();

    NavAzureSearchResultscurrentpage = pagetogo;

    BindAzureSearchResults(NavAzureSearchResultscurrentpage, NavAzureSearchResultspagesize);
}

function NavAzureSearchResultsNextClick(ctrl) {


    //Goto Next Page

    var activepage = $("#dvNavAzureSearchResults").find(".sf_PagerCurrent").text();

    var pagetogo = parseInt(activepage) + 1;

    if (NavAzureSearchResultsislastpageselected == true) {
        $(ctrl).find(".sf_PagerCurrent").removeClass(".sf_PagerCurrent");
    } else {
        NavAzureSearchResultscurrentpage = pagetogo;

        BindAzureSearchResults(NavAzureSearchResultscurrentpage, NavAzureSearchResultspagesize);
    }
}

function NavAzureSearchResultsPrevClick(ctrl) {


    //Goto Previous Page

    var activepage = $("#dvNavAzureSearchResults").find(".sf_PagerCurrent").text();

    var pagetogo = parseInt(activepage) - 1;

    if (pagetogo == 0) {
        $(ctrl).find(".sf_PagerCurrent").removeClass(".sf_PagerCurrent");
    } else {
        NavAzureSearchResultscurrentpage = pagetogo;

        BindAzureSearchResults(NavAzureSearchResultscurrentpage, NavAzureSearchResultspagesize);
    }
}

$(document).ready(function () {

    searchUrl = document.location.origin;

    $('.azureSearchResults > h4').hide();

    if ($('.headertopnav').length > 0) {
        $('.headertopnav').html($('.headertopnav').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));

        $('.hiddensearch').html($('.hiddensearch').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));
    }
    //$(".search_butn11").after('<div class="lblResult"> </div> ');
    var searchText = getParameterByName('searchQuery');
    $('.headsearch1').val(searchText);
    //$('.headertopnav .headsearch1').focus();

    if (searchText == '' || searchText == null) {

    }
    else {
        BindAzureSearchResults(NavAzureSearchResultscurrentpage, NavAzureSearchResultspagesize);
    }

    $('.headsearch1, .stickyheadsearch').keypress(function (e) {
        e.stopPropagation();
        $(this).show();
        return OnlyNonSpecialcharacters(e);
    });

    $('.headsearch1').click(function (e) {
        e.stopPropagation();
        $(this).parents('.hiddensearch').show();

    });

    $('.headsearch1, .stickyheadsearch').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            //e.stopPropagation();
            var h = $(this).parent().find('.lblResult .selected a').attr('href');
            var txt = $(this).parent().find('.lblResult .selected a').text();
            if (h != null && h != '' && h != 'undefined') {
                $('.headsearch1').val(txt);
                location.href = h;
            } else {

                if ($(".lblResult_new").length > 0)
                    location.href = searchUrl + "/search-results?indexCatalogue=axissearch&searchQuery=" + $(this).val() + "&wordsMode=0";
                else
                    location.href = searchUrl + "/search-results?indexCatalogue=axissearch&searchQuery=" + $(this).val() + "&wordsMode=0";
            }

            return false;
        }
        else if (e.keyCode == 40) {
            e.preventDefault();
            var index = $(this).parent().find('.lblResult ul li.selected').index();
            $(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            $(this).parent().find('.lblResult ul li ').eq(index + 1).addClass('selected');
            e.stopPropagation();
            return false;
        }
        else if (e.keyCode == 38) {
            var index = $(this).parent().find('.lblResult ul li.selected').index();
            $(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            $(this).parent().find('.lblResult ul li ').eq(index - 1).addClass('selected');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    $('.headsearch1, .stickyheadsearch').keyup(function (e) {
        var text = $(this).val();
        if (e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault();
        }
        else if (text.length > 2) {
            // clearTimeout(delayTimer);
            delayTimer = setTimeout(function () {
                getSearchResultTest(text);
                $('.lblResult').css('visibility', 'visible');
                $('.blackoverlay').show();

                if ($(".lblResult_new").length > 0) {
                    $('body').addClass('searchActive01');
                }

            }, 500);
        }
        else {
            // clearTimeout(delayTimer);
            $('.lblResult').html('');
            $('.lblResult').css('visibility', 'hidden');
            $('.blackoverlay').hide();

            if ($(".lblResult_new").length > 0) {
                $('body').removeClass('searchActive01');
            }
        }
    });

    $(".js-colseBtn").click(function (e) {
        e.preventDefault();
        $('body').removeClass('searchActive01');
    });

    $('.search_butn11').click(function () {
        if ($.trim($(this).prev().val()) == "") {
            $(this).prev().focus();
        } else {

            if ($(".lblResult_new").length > 0)
                window.location = "/search-results?indexCatalogue=axissearch&searchQuery=" + encodeURI($(this).prev().val()) + "&wordsMode=0";
            else
                window.location = "/search-results?indexCatalogue=axissearch&searchQuery=" + encodeURI($(this).prev().val()) + "&wordsMode=0";

        }
        return false;
    });

    $(document).on('click', function (event) {
        if ($('.lblResult').css('visibility', 'hidden')) {
            $(".blackoverlay").hide();
        } else {
            $('.blackoverlay').show();
        }
    });

    $(".lnkSmartSearch").click(function (e) {

        $(".headsearch1").val("");

    });

});;
/*!
 * bootstrap-star-rating v4.0.3
 * http://plugins.krajee.com/star-rating
 *
 * Author: Kartik Visweswaran
 * Copyright: 2013 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */
(function (factory) {
    "use strict";
    //noinspection JSUnresolvedVariable
    if (typeof define === 'function' && define.amd) { // jshint ignore:line
        // AMD. Register as an anonymous module.
        define(['jquery'], factory); // jshint ignore:line
    } else { // noinspection JSUnresolvedVariable
        if (typeof module === 'object' && module.exports) { // jshint ignore:line
            // Node/CommonJS
            // noinspection JSUnresolvedVariable
            module.exports = factory(require('jquery')); // jshint ignore:line
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }
}(function ($) {
    "use strict";

    $.fn.ratingLocales = {};
    $.fn.ratingThemes = {};

    var $h, Rating;

    // global helper methods and constants
    $h = {
        NAMESPACE: '.rating',
        DEFAULT_MIN: 0,
        DEFAULT_MAX: 5,
        DEFAULT_STEP: 0.5,
        isEmpty: function (value, trim) {
            return value === null || value === undefined || value.length === 0 || (trim && $.trim(value) === '');
        },
        getCss: function (condition, css) {
            return condition ? ' ' + css : '';
        },
        addCss: function ($el, css) {
            $el.removeClass(css).addClass(css);
        },
        getDecimalPlaces: function (num) {
            var m = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return !m ? 0 : Math.max(0, (m[1] ? m[1].length : 0) - (m[2] ? +m[2] : 0));
        },
        applyPrecision: function (val, precision) {
            return parseFloat(val.toFixed(precision));
        },
        handler: function ($el, event, callback, skipOff, skipNS) {
            var ev = skipNS ? event : event.split(' ').join($h.NAMESPACE + ' ') + $h.NAMESPACE;
            if (!skipOff) {
                $el.off(ev);
            }
            $el.on(ev, callback);
        }
    };

    // rating constructor
    Rating = function (element, options) {
        var self = this;
        self.$element = $(element);
        self._init(options);
    };
    Rating.prototype = {
        constructor: Rating,
        _parseAttr: function (vattr, options) {
            var self = this, $el = self.$element, elType = $el.attr('type'), finalVal, val, chk, out;
            if (elType === 'range' || elType === 'number') {
                val = options[vattr] || $el.data(vattr) || $el.attr(vattr);
                switch (vattr) {
                    case 'min':
                        chk = $h.DEFAULT_MIN;
                        break;
                    case 'max':
                        chk = $h.DEFAULT_MAX;
                        break;
                    default:
                        chk = $h.DEFAULT_STEP;
                }
                finalVal = $h.isEmpty(val) ? chk : val;
                out = parseFloat(finalVal);
            } else {
                out = parseFloat(options[vattr]);
            }
            return isNaN(out) ? chk : out;
        },
        _parseValue: function (val) {
            var self = this, v = parseFloat(val);
            if (isNaN(v)) {
                v = self.clearValue;
            }
            return (self.zeroAsNull && (v === 0 || v === '0') ? null : v);
        },
        _setDefault: function (key, val) {
            var self = this;
            if ($h.isEmpty(self[key])) {
                self[key] = val;
            }
        },
        _initSlider: function (options) {
            var self = this, v = self.$element.val();
            self.initialValue = $h.isEmpty(v) ? 0 : v;
            self._setDefault('min', self._parseAttr('min', options));
            self._setDefault('max', self._parseAttr('max', options));
            self._setDefault('step', self._parseAttr('step', options));
            if (isNaN(self.min) || $h.isEmpty(self.min)) {
                self.min = $h.DEFAULT_MIN;
            }
            if (isNaN(self.max) || $h.isEmpty(self.max)) {
                self.max = $h.DEFAULT_MAX;
            }
            if (isNaN(self.step) || $h.isEmpty(self.step) || self.step === 0) {
                self.step = $h.DEFAULT_STEP;
            }
            self.diff = self.max - self.min;
        },
        _initHighlight: function (v) {
            var self = this, w, cap = self._getCaption();
            if (!v) {
                v = self.$element.val();
            }
            w = self.getWidthFromValue(v) + '%';
            self.$filledStars.width(w);
            self.cache = {caption: cap, width: w, val: v};
        },
        _getContainerCss: function () {
            var self = this;
            return 'rating-container' +
                $h.getCss(self.theme, 'theme-' + self.theme) +
                $h.getCss(self.rtl, 'rating-rtl') +
                $h.getCss(self.size, 'rating-' + self.size) +
                $h.getCss(self.animate, 'rating-animate') +
                $h.getCss(self.disabled || self.readonly, 'rating-disabled') +
                $h.getCss(self.containerClass, self.containerClass);
        },
        _checkDisabled: function () {
            var self = this, $el = self.$element, opts = self.options;
            self.disabled = opts.disabled === undefined ? $el.attr('disabled') || false : opts.disabled;
            self.readonly = opts.readonly === undefined ? $el.attr('readonly') || false : opts.readonly;
            self.inactive = (self.disabled || self.readonly);
            $el.attr({disabled: self.disabled, readonly: self.readonly});
        },
        _addContent: function (type, content) {
            var self = this, $container = self.$container, isClear = type === 'clear';
            if (self.rtl) {
                return isClear ? $container.append(content) : $container.prepend(content);
            } else {
                return isClear ? $container.prepend(content) : $container.append(content);
            }
        },
        _generateRating: function () {
            var self = this, $el = self.$element, $rating, $container, w;
            $container = self.$container = $(document.createElement("div")).insertBefore($el);
            $h.addCss($container, self._getContainerCss());
            self.$rating = $rating = $(document.createElement("div")).attr('class', 'rating-stars').appendTo($container)
                .append(self._getStars('empty')).append(self._getStars('filled'));
            self.$emptyStars = $rating.find('.empty-stars');
            self.$filledStars = $rating.find('.filled-stars');
            self._renderCaption();
            self._renderClear();
            self._initHighlight();
            $container.append($el);
            if (self.rtl) {
                w = Math.max(self.$emptyStars.outerWidth(), self.$filledStars.outerWidth());
                self.$emptyStars.width(w);
            }
            $el.appendTo($rating);
        },
        _getCaption: function () {
            var self = this;
            return self.$caption && self.$caption.length ? self.$caption.html() : self.defaultCaption;
        },
        _setCaption: function (content) {
            var self = this;
            if (self.$caption && self.$caption.length) {
                self.$caption.html(content);
            }
        },
        _renderCaption: function () {
            var self = this, val = self.$element.val(), html, $cap = self.captionElement ? $(self.captionElement) : '';
            if (!self.showCaption) {
                return;
            }
            html = self.fetchCaption(val);
            if ($cap && $cap.length) {
                $h.addCss($cap, 'caption');
                $cap.html(html);
                self.$caption = $cap;
                return;
            }
            self._addContent('caption', '<div class="caption">' + html + '</div>');
            self.$caption = self.$container.find(".caption");
        },
        _renderClear: function () {
            var self = this, css, $clr = self.clearElement ? $(self.clearElement) : '';
            if (!self.showClear) {
                return;
            }
            css = self._getClearClass();
            if ($clr.length) {
                $h.addCss($clr, css);
                $clr.attr({"title": self.clearButtonTitle}).html(self.clearButton);
                self.$clear = $clr;
                return;
            }
            self._addContent('clear',
                '<div class="' + css + '" title="' + self.clearButtonTitle + '">' + self.clearButton + '</div>');
            self.$clear = self.$container.find('.' + self.clearButtonBaseClass);
        },
        _getClearClass: function () {
            var self = this;
            return self.clearButtonBaseClass + ' ' + (self.inactive ? '' : self.clearButtonActiveClass);
        },
        _toggleHover: function (out) {
            var self = this, w, width, caption;
            if (!out) {
                return;
            }
            if (self.hoverChangeStars) {
                w = self.getWidthFromValue(self.clearValue);
                width = out.val <= self.clearValue ? w + '%' : out.width;
                self.$filledStars.css('width', width);
            }
            if (self.hoverChangeCaption) {
                caption = out.val <= self.clearValue ? self.fetchCaption(self.clearValue) : out.caption;
                if (caption) {
                    self._setCaption(caption + '');
                }
            }
        },
        _init: function (options) {
            var self = this, $el = self.$element.addClass('rating-input'), v;
            self.options = options;
            $.each(options, function (key, value) {
                self[key] = value;
            });
            if (self.rtl || $el.attr('dir') === 'rtl') {
                self.rtl = true;
                $el.attr('dir', 'rtl');
            }
            self.starClicked = false;
            self.clearClicked = false;
            self._initSlider(options);
            self._checkDisabled();
            if (self.displayOnly) {
                self.inactive = true;
                self.showClear = false;
                self.showCaption = false;
            }
            self._generateRating();
            self._initEvents();
            self._listen();
            v = self._parseValue($el.val());
            $el.val(v);
            return $el.removeClass('rating-loading');
        },
        _initEvents: function () {
            var self = this;
            self.events = {
                _getTouchPosition: function (e) {
                    var pageX = $h.isEmpty(e.pageX) ? e.originalEvent.touches[0].pageX : e.pageX;
                    return pageX - self.$rating.offset().left;
                },
                _listenClick: function (e, callback) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (e.handled !== true) {
                        callback(e);
                        e.handled = true;
                    } else {
                        return false;
                    }
                },
                _noMouseAction: function (e) {
                    return !self.hoverEnabled || self.inactive || (e && e.isDefaultPrevented());
                },
                initTouch: function (e) {
                    //noinspection JSUnresolvedVariable
                    var ev, touches, pos, out, caption, w, width, params, clrVal = self.clearValue || 0,
                        isTouchCapable = 'ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch);
                    if (!isTouchCapable || self.inactive) {
                        return;
                    }
                    ev = e.originalEvent;
                    //noinspection JSUnresolvedVariable
                    touches = !$h.isEmpty(ev.touches) ? ev.touches : ev.changedTouches;
                    pos = self.events._getTouchPosition(touches[0]);
                    if (e.type === "touchend") {
                        self._setStars(pos);
                        params = [self.$element.val(), self._getCaption()];
                        self.$element.trigger('change').trigger('rating:change', params);
                        self.starClicked = true;
                    } else {
                        out = self.calculate(pos);
                        caption = out.val <= clrVal ? self.fetchCaption(clrVal) : out.caption;
                        w = self.getWidthFromValue(clrVal);
                        width = out.val <= clrVal ? w + '%' : out.width;
                        self._setCaption(caption);
                        self.$filledStars.css('width', width);
                    }
                },
                starClick: function (e) {
                    var pos, params;
                    self.events._listenClick(e, function (ev) {
                        if (self.inactive) {
                            return false;
                        }
                        pos = self.events._getTouchPosition(ev);
                        self._setStars(pos);
                        params = [self.$element.val(), self._getCaption()];
                        self.$element.trigger('change').trigger('rating:change', params);
                        self.starClicked = true;
                    });
                },
                clearClick: function (e) {
                    self.events._listenClick(e, function () {
                        if (!self.inactive) {
                            self.clear();
                            self.clearClicked = true;
                        }
                    });
                },
                starMouseMove: function (e) {
                    var pos, out;
                    if (self.events._noMouseAction(e)) {
                        return;
                    }
                    self.starClicked = false;
                    pos = self.events._getTouchPosition(e);
                    out = self.calculate(pos);
                    self._toggleHover(out);
                    self.$element.trigger('rating:hover', [out.val, out.caption, 'stars']);
                },
                starMouseLeave: function (e) {
                    var out;
                    if (self.events._noMouseAction(e) || self.starClicked) {
                        return;
                    }
                    out = self.cache;
                    self._toggleHover(out);
                    self.$element.trigger('rating:hoverleave', ['stars']);
                },
                clearMouseMove: function (e) {
                    var caption, val, width, out;
                    if (self.events._noMouseAction(e) || !self.hoverOnClear) {
                        return;
                    }
                    self.clearClicked = false;
                    caption = '<span class="' + self.clearCaptionClass + '">' + self.clearCaption + '</span>';
                    val = self.clearValue;
                    width = self.getWidthFromValue(val) || 0;
                    out = {caption: caption, width: width, val: val};
                    self._toggleHover(out);
                    self.$element.trigger('rating:hover', [val, caption, 'clear']);
                },
                clearMouseLeave: function (e) {
                    var out;
                    if (self.events._noMouseAction(e) || self.clearClicked || !self.hoverOnClear) {
                        return;
                    }
                    out = self.cache;
                    self._toggleHover(out);
                    self.$element.trigger('rating:hoverleave', ['clear']);
                },
                resetForm: function (e) {
                    if (e && e.isDefaultPrevented()) {
                        return;
                    }
                    if (!self.inactive) {
                        self.reset();
                    }
                }
            };
        },
        _listen: function () {
            var self = this, $el = self.$element, $form = $el.closest('form'), $rating = self.$rating,
                $clear = self.$clear, events = self.events;
            $h.handler($rating, 'touchstart touchmove touchend', $.proxy(events.initTouch, self));
            $h.handler($rating, 'click touchstart', $.proxy(events.starClick, self));
            $h.handler($rating, 'mousemove', $.proxy(events.starMouseMove, self));
            $h.handler($rating, 'mouseleave', $.proxy(events.starMouseLeave, self));
            if (self.showClear && $clear.length) {
                $h.handler($clear, 'click touchstart', $.proxy(events.clearClick, self));
                $h.handler($clear, 'mousemove', $.proxy(events.clearMouseMove, self));
                $h.handler($clear, 'mouseleave', $.proxy(events.clearMouseLeave, self));
            }
            if ($form.length) {
                $h.handler($form, 'reset', $.proxy(events.resetForm, self), true);
            }
            return $el;
        },
        _getStars: function (type) {
            var self = this, stars = '<span class="' + type + '-stars">', i;
            for (i = 1; i <= self.stars; i++) {
                stars += '<span class="star">' + self[type + 'Star'] + '</span>';
            }
            return stars + '</span>';
        },
        _setStars: function (pos) {
            var self = this, out = arguments.length ? self.calculate(pos) : self.calculate(), $el = self.$element,
                v = self._parseValue(out.val);
            $el.val(v);
            self.$filledStars.css('width', out.width);
            self._setCaption(out.caption);
            self.cache = out;
            return $el;
        },
        showStars: function (val) {
            var self = this, v = self._parseValue(val);
            self.$element.val(v);
            return self._setStars();
        },
        calculate: function (pos) {
            var self = this, defaultVal = $h.isEmpty(self.$element.val()) ? 0 : self.$element.val(),
                val = arguments.length ? self.getValueFromPosition(pos) : defaultVal,
                caption = self.fetchCaption(val), width = self.getWidthFromValue(val);
            width += '%';
            return {caption: caption, width: width, val: val};
        },
        getValueFromPosition: function (pos) {
            var self = this, precision = $h.getDecimalPlaces(self.step), val, factor, maxWidth = self.$rating.width();
            factor = (self.diff * pos) / (maxWidth * self.step);
            factor = self.rtl ? Math.floor(factor) : Math.ceil(factor);
            val = $h.applyPrecision(parseFloat(self.min + factor * self.step), precision);
            val = Math.max(Math.min(val, self.max), self.min);
            return self.rtl ? (self.max - val) : val;
        },
        getWidthFromValue: function (val) {
            var self = this, min = self.min, max = self.max, factor, $r = self.$emptyStars, w;
            if (!val || val <= min || min === max) {
                return 0;
            }
            w = $r.outerWidth();
            factor = w ? $r.width() / w : 1;
            if (val >= max) {
                return 100;
            }
            return (val - min) * factor * 100 / (max - min);
        },
        fetchCaption: function (rating) {
            var self = this, val = parseFloat(rating) || self.clearValue, css, cap, capVal, cssVal, caption,
                vCap = self.starCaptions, vCss = self.starCaptionClasses;
            if (val && val !== self.clearValue) {
                val = $h.applyPrecision(val, $h.getDecimalPlaces(self.step));
            }
            cssVal = typeof vCss === "function" ? vCss(val) : vCss[val];
            capVal = typeof vCap === "function" ? vCap(val) : vCap[val];
            cap = $h.isEmpty(capVal) ? self.defaultCaption.replace(/\{rating}/g, val) : capVal;
            css = $h.isEmpty(cssVal) ? self.clearCaptionClass : cssVal;
            caption = (val === self.clearValue) ? self.clearCaption : cap;
            return '<span class="' + css + '">' + caption + '</span>';
        },
        destroy: function () {
            var self = this, $el = self.$element;
            if (!$h.isEmpty(self.$container)) {
                self.$container.before($el).remove();
            }
            $.removeData($el.get(0));
            return $el.off('rating').removeClass('rating rating-input');
        },
        create: function (options) {
            var self = this, opts = options || self.options || {};
            return self.destroy().rating(opts);
        },
        clear: function () {
            var self = this, title = '<span class="' + self.clearCaptionClass + '">' + self.clearCaption + '</span>';
            if (!self.inactive) {
                self._setCaption(title);
            }
            return self.showStars(self.clearValue).trigger('change').trigger('rating:clear');
        },
        reset: function () {
            var self = this;
            return self.showStars(self.initialValue).trigger('rating:reset');
        },
        update: function (val) {
            var self = this;
            return arguments.length ? self.showStars(val) : self.$element;
        },
        refresh: function (options) {
            var self = this, $el = self.$element;
            if (!options) {
                return $el;
            }
            return self.destroy().rating($.extend(true, self.options, options)).trigger('rating:refresh');
        }
    };

    $.fn.rating = function (option) {
        var args = Array.apply(null, arguments), retvals = [];
        args.shift();
        this.each(function () {
            var self = $(this), data = self.data('rating'), options = typeof option === 'object' && option,
                theme = options.theme || self.data('theme'), lang = options.language || self.data('language') || 'en',
                thm = {}, loc = {}, opts;
            if (!data) {
                if (theme) {
                    thm = $.fn.ratingThemes[theme] || {};
                }
                if (lang !== 'en' && !$h.isEmpty($.fn.ratingLocales[lang])) {
                    loc = $.fn.ratingLocales[lang];
                }
                opts = $.extend(true, {}, $.fn.rating.defaults, thm, $.fn.ratingLocales.en, loc, options, self.data());
                data = new Rating(this, opts);
                self.data('rating', data);
            }

            if (typeof option === 'string') {
                retvals.push(data[option].apply(data, args));
            }
        });
        switch (retvals.length) {
            case 0:
                return this;
            case 1:
                return retvals[0] === undefined ? this : retvals[0];
            default:
                return retvals;
        }
    };

    $.fn.rating.defaults = {
        theme: '',
        language: 'en',
        stars: 5,
        filledStar: '<i class="glyphicon glyphicon-star"></i>',
        emptyStar: '<i class="glyphicon glyphicon-star-empty"></i>',
        containerClass: '',
        size: 'md',
        animate: true,
        displayOnly: false,
        rtl: false,
        showClear: true,
        showCaption: true,
        starCaptionClasses: {
            0.5: 'label label-danger badge-danger',
            1: 'label label-danger badge-danger',
            1.5: 'label label-warning badge-warning',
            2: 'label label-warning badge-warning',
            2.5: 'label label-info badge-info',
            3: 'label label-info badge-info',
            3.5: 'label label-primary badge-primary',
            4: 'label label-primary badge-primary',
            4.5: 'label label-success badge-success',
            5: 'label label-success badge-success'
        },
        clearButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
        clearButtonBaseClass: 'clear-rating',
        clearButtonActiveClass: 'clear-rating-active',
        clearCaptionClass: 'label label-default',
        clearValue: null,
        captionElement: null,
        clearElement: null,
        hoverEnabled: true,
        hoverChangeCaption: true,
        hoverChangeStars: true,
        hoverOnClear: true,
        zeroAsNull: true
    };

    //$.fn.ratingLocales.en = {
    //    defaultCaption: '{rating} Stars',
    //    starCaptions: {
    //        0.5: 'Half Star',
    //        1: 'One Star',
    //        1.5: 'One & Half Star',
    //        2: 'Two Stars',
    //        2.5: 'Two & Half Stars',
    //        3: 'Three Stars',
    //        3.5: 'Three & Half Stars',
    //        4: 'Four Stars',
    //        4.5: 'Four & Half Stars',
    //        5: 'Five Stars'
    //    },
    //    clearButtonTitle: 'Clear',
    //    clearCaption: 'Not Rated'
    //};

    $.fn.ratingLocales.en = {
        defaultCaption: '{rating} Stars',
        starCaptions: {
            0.5: '0.5 Star',
            1: '1 Star',
            1.5: '1.5 Stars',
            2: '2 Stars',
            2.5: '2.5 Stars',
            3: '3 Stars',
            3.5: '3.5 Stars',
            4: '4 Stars',
            4.5: '4.5 Stars',
            5: '5 Stars'
        },
        clearButtonTitle: 'Clear',
        clearCaption: 'Not Rated'
    };

    $.fn.rating.Constructor = Rating;

    /**
     * Convert automatically inputs with class 'rating' into Krajee's star rating control.
     */
    $(document).ready(function () {
        var $input = $('input.rating');
        if ($input.length) {
            $input.removeClass('rating-loading').addClass('rating-loading').rating();
        }
    });
}));
;
function GetAjaxUrlAjaxService(e){return"/AjaxService/"+e}!function(e){e.WebServiceAjaxService=function(a){var t=e.extend({type:"POST",contentType:"application/json;charset=utf-8",dataType:"json",async:!1,processData:!0,data:{},headers:{},success:function(e){},error:function(e){console.log(e)},serviceMethod:null},a);e.ajax({async:t.async,url:GetAjaxUrlAjaxService(t.serviceMethod),type:t.type,contentType:t.contentType,data:!0===t.processData?JSON.stringify(t.data):t.data,headers:t.headers,processData:t.processData,dataType:t.dataType,success:t.success,error:t.error})}}(jQuery); var AjaxService = {GetMobileMenuContent : function (title) {var result;$.WebServiceAjaxService({serviceMethod: "GetMobileMenuContent",data: { title : title},success: function (data) { result = data; }});return result;},GetMobileMenuContentAsync : function (title,success) {$.WebServiceAjaxService({serviceMethod: "GetMobileMenuContent",data: { title : title},success: success,async:true});},GetGrabDealsList : function (bankingchannel,category,brand,orderbyfilter,currentPage,pageSize,endingsoondays) {var result;$.WebServiceAjaxService({serviceMethod: "GetGrabDealsList",data: { bankingchannel : bankingchannel,category : category,brand : brand,orderbyfilter : orderbyfilter,currentPage : currentPage,pageSize : pageSize,endingsoondays : endingsoondays},success: function (data) { result = data; }});return result;},GetGrabDealsListAsync : function (bankingchannel,category,brand,orderbyfilter,currentPage,pageSize,endingsoondays,success) {$.WebServiceAjaxService({serviceMethod: "GetGrabDealsList",data: { bankingchannel : bankingchannel,category : category,brand : brand,orderbyfilter : orderbyfilter,currentPage : currentPage,pageSize : pageSize,endingsoondays : endingsoondays},success: success,async:true});},GetPressReleasesList : function (library,currentyear,topyears) {var result;$.WebServiceAjaxService({serviceMethod: "GetPressReleasesList",data: { library : library,currentyear : currentyear,topyears : topyears},success: function (data) { result = data; }});return result;},GetPressReleasesListAsync : function (library,currentyear,topyears,success) {$.WebServiceAjaxService({serviceMethod: "GetPressReleasesList",data: { library : library,currentyear : currentyear,topyears : topyears},success: success,async:true});},ExpireCache : function (key) {var result;$.WebServiceAjaxService({serviceMethod: "ExpireCache",data: { key : key},success: function (data) { result = data; }});return result;},ExpireCacheAsync : function (key,success) {$.WebServiceAjaxService({serviceMethod: "ExpireCache",data: { key : key},success: success,async:true});},SetCompareAllAttrs : function (href,compareids,comparetype,ismobile,regularorexclusiv) {var result;$.WebServiceAjaxService({serviceMethod: "SetCompareAllAttrs",data: { href : href,compareids : compareids,comparetype : comparetype,ismobile : ismobile,regularorexclusiv : regularorexclusiv},success: function (data) { result = data; }});return result;},SetCompareAllAttrsAsync : function (href,compareids,comparetype,ismobile,regularorexclusiv,success) {$.WebServiceAjaxService({serviceMethod: "SetCompareAllAttrs",data: { href : href,compareids : compareids,comparetype : comparetype,ismobile : ismobile,regularorexclusiv : regularorexclusiv},success: success,async:true});},GetCurrentAccProducts : function (value,standalone,text) {var result;$.WebServiceAjaxService({serviceMethod: "GetCurrentAccProducts",data: { value : value,standalone : standalone,text : text},success: function (data) { result = data; }});return result;},GetCurrentAccProductsAsync : function (value,standalone,text,success) {$.WebServiceAjaxService({serviceMethod: "GetCurrentAccProducts",data: { value : value,standalone : standalone,text : text},success: success,async:true});},GetSavingsAccProducts : function (strcategory,strsplfeatures,strsortby) {var result;$.WebServiceAjaxService({serviceMethod: "GetSavingsAccProducts",data: { strcategory : strcategory,strsplfeatures : strsplfeatures,strsortby : strsortby},success: function (data) { result = data; }});return result;},GetSavingsAccProductsAsync : function (strcategory,strsplfeatures,strsortby,success) {$.WebServiceAjaxService({serviceMethod: "GetSavingsAccProducts",data: { strcategory : strcategory,strsplfeatures : strsplfeatures,strsortby : strsortby},success: success,async:true});},GetCreditCardsProducts : function (strcategory,strrewardtypes) {var result;$.WebServiceAjaxService({serviceMethod: "GetCreditCardsProducts",data: { strcategory : strcategory,strrewardtypes : strrewardtypes},success: function (data) { result = data; }});return result;},GetCreditCardsProductsAsync : function (strcategory,strrewardtypes,success) {$.WebServiceAjaxService({serviceMethod: "GetCreditCardsProducts",data: { strcategory : strcategory,strrewardtypes : strrewardtypes},success: success,async:true});},GetDebitCardsProducts : function (strcategory,strspecialfeatures,strcustomertypes) {var result;$.WebServiceAjaxService({serviceMethod: "GetDebitCardsProducts",data: { strcategory : strcategory,strspecialfeatures : strspecialfeatures,strcustomertypes : strcustomertypes},success: function (data) { result = data; }});return result;},GetDebitCardsProductsAsync : function (strcategory,strspecialfeatures,strcustomertypes,success) {$.WebServiceAjaxService({serviceMethod: "GetDebitCardsProducts",data: { strcategory : strcategory,strspecialfeatures : strspecialfeatures,strcustomertypes : strcustomertypes},success: success,async:true});},GetShareHoldersInformationList : function (library,title) {var result;$.WebServiceAjaxService({serviceMethod: "GetShareHoldersInformationList",data: { library : library,title : title},success: function (data) { result = data; }});return result;},GetShareHoldersInformationListAsync : function (library,title,success) {$.WebServiceAjaxService({serviceMethod: "GetShareHoldersInformationList",data: { library : library,title : title},success: success,async:true});},GetAnnualReportsList : function (library) {var result;$.WebServiceAjaxService({serviceMethod: "GetAnnualReportsList",data: { library : library},success: function (data) { result = data; }});return result;},GetAnnualReportsListAsync : function (library,success) {$.WebServiceAjaxService({serviceMethod: "GetAnnualReportsList",data: { library : library},success: success,async:true});},getFDStandardCalcRates : function (Amount,NoOfDays) {var result;$.WebServiceAjaxService({serviceMethod: "getFDStandardCalcRates",data: { Amount : Amount,NoOfDays : NoOfDays},success: function (data) { result = data; }});return result;},getFDStandardCalcRatesAsync : function (Amount,NoOfDays,success) {$.WebServiceAjaxService({serviceMethod: "getFDStandardCalcRates",data: { Amount : Amount,NoOfDays : NoOfDays},success: success,async:true});},GetCallableInterestRates : function () {var result;$.WebServiceAjaxService({serviceMethod: "GetCallableInterestRates",data: { },success: function (data) { result = data; }});return result;},GetCallableInterestRatesAsync : function (success) {$.WebServiceAjaxService({serviceMethod: "GetCallableInterestRates",data: { },success: success,async:true});},GetNonCallableInterestRates : function () {var result;$.WebServiceAjaxService({serviceMethod: "GetNonCallableInterestRates",data: { },success: function (data) { result = data; }});return result;},GetNonCallableInterestRatesAsync : function (success) {$.WebServiceAjaxService({serviceMethod: "GetNonCallableInterestRates",data: { },success: success,async:true});},GetForeignCurrencyNonResidentInterestRates : function () {var result;$.WebServiceAjaxService({serviceMethod: "GetForeignCurrencyNonResidentInterestRates",data: { },success: function (data) { result = data; }});return result;},GetForeignCurrencyNonResidentInterestRatesAsync : function (success) {$.WebServiceAjaxService({serviceMethod: "GetForeignCurrencyNonResidentInterestRates",data: { },success: success,async:true});}};;
function calculatorHpAccessible(){$(".emi_cont").attr({tabindex:"0"}),$(document).on("focusin",".emi_cont",function(e){event.preventDefault(),$(this).addClass("selected")}),$(document).on("focusout",".emi_overlay h4 a",function(e){event.preventDefault(),$(this).parents(".emi_cont").removeClass("selected")}),$(document).on("keyup",".emi_cont",function(e){9==(e.keyCode||e.which)&&$(this).is(":focus")&&($(this).addClass("selected"),$(this).parent().siblings().find(".emi_cont").removeClass("selected"))})}function forPixelAccess(){var pct=0;$(document).on("click",".fontScaler",function(e){$(this).siblings().removeClass("current"),$(this).addClass("current"),$(this).hasClass("current")&&e.preventDefault(),$(this).hasClass("smallFont")?($("html").removeClass("plusOne"),$("html").addClass("minusOne"),-1<pct&&($(".forPixel *, .axnri-wrapper *").each(function(index,el){$(this).css("font-size","");var fontSize=$(this).css("font-size").replace("px",""),increase=parseInt(fontSize)-1;$(this).css("font-size",increase+"px")}),pct--)):$(this).hasClass("normalFont")?(pct=0,$("html").removeClass("plusOne , minusOne"),$(".forPixel *, .axnri-wrapper *").each(function(index,el){$(this).css("font-size","")})):$(this).hasClass("largeFont")&&($("html").removeClass("minusOne"),$("html").addClass("plusOne"),pct<1&&($(".forPixel *, .axnri-wrapper *").each(function(index,el){$(this).css("font-size","");var fontSize=$(this).css("font-size").replace("px",""),increase=parseInt(fontSize)+1;$(this).css("font-size",increase+"px")}),pct++))})}function handlingAccessibility(){$(document).one("keyup click",".topStrip",function(e){var keyCode=e.keyCode||e.which;$("#accessible").length||($("html").hasClass("keyboard")&&9==keyCode||$("html").hasClass("mouse"))&&$('<link rel="stylesheet" href="assets/css/accessibility.css" id="accessible"/>').appendTo("head")})}function popupFocusForAccessbility(){$(document).on("click",".lnkthirdpartypopup",function(event){event.preventDefault(),$(".modal-content").is(":visible")&&($(".modal-content").attr({tabindex:"0"}).focus(),$(".modal-content").find("a").first().focus())})}function highcontrastSession(){"1"==function(cname){for(var name=cname+"=",ca=decodeURIComponent(document.cookie).split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(name))return c.substring(name.length,c.length)}return""}("addHC")&&$("body").addClass("wob")}function nriAccessibility(){$(".axnri-wrapper svg").attr({tabindex:"-1","aria-hidden":"true"}),$(".section-products .products-carousel .item .prodbox, .services-carousel .item").attr("tabindex","0"),$(".section-products .products-carousel .item .prodbox").focusin(function(){$(".keyboard").length&&$(this).find(".info-div").height(180)}),$(".section-products .products-carousel .item .prodbox a:last-child").focusout(function(){$(".keyboard").length&&$(this).parents(".prodbox").find(".info-div").height(40)}),$(document).mousemove(function(event){$(".section-products .products-carousel .item .prodbox").find(".info-div").removeAttr("style")}),$(".deposite-range-wrap .col .mask .btnup").attr("tabindex","-1"),$(".deposite-range-wrap .col .col-inr").attr("tabindex","0"),$(".deposite-range-wrap .col .col-inr").focusin(function(){$(".keyboard").length&&($(this).find(".mask").height("100%"),$(this).find(".mask .msk-inr").css({opacity:"1",visibility:"visible"}))}),$(".deposite-range-wrap .col .mask li:last-child a").focusout(function(){$(".keyboard").length&&$(this).parents(".mask").height(5)}),$(document).mousemove(function(event){$(".deposite-range-wrap .col .mask").removeAttr("style"),$(".deposite-range-wrap .col .mask .msk-inr").removeAttr("style")})}$(document).ready(function(){calculatorHpAccessible(),forPixelAccess(),popupFocusForAccessbility(),highcontrastSession(),$(document).on("click",".cntBt",function(event){event.preventDefault(),$(".emtabContent li:first-child").find(".inputbox input").focus()}),nriAccessibility()});;
function sendMoneyHoverEff(){$(".countriesDetailsBox ul.tabContent li").hover(function(){$(".countriesDetailsBox ul.tabContent li").prev("li").removeClass("hoverActive"),$(this).prev("li").toggleClass("hoverActive")}),$(".countriesDetailsBox ul.tabMainBox").owlCarousel({items:8,loop:!1,margin:30,nav:!0,responsive:{0:{items:3,margin:20},767:{items:5},1024:{items:8}}})}function usefulLinks(){$(".usefulFaq").find("h5").addClass("closeAcc"),$(".usefulFaq .panel:first-child h5").removeClass("openAcc"),$(document).on("click",".usefulTab li",function(e){if(991<$(window).width()&&!$(this).hasClass("active")){e.preventDefault();var abc=$(this).attr("data-tab");$(".usefultabBox").removeClass("active").hide(),$(this).siblings().removeClass("active"),$(this).addClass("active"),$("#"+abc).fadeIn(600).addClass("active").focus()}else if($(window).width()<=991){e.preventDefault();abc=$(this).attr("data-tab");$(".usefultabBox").removeClass("active").hide(),$(this).addClass("active").parent(".owl-item").siblings().find("li").removeClass("active"),$("#"+abc).fadeIn(600).addClass("active")}}),$(document).on("keyup",".usefulTab li",function(e){13==e.keyCode&&$(this).trigger("click")})}function noticeboardOwl(){$(".owl-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,responsive:{0:{items:2,nav:!0,navText:[]}}})};
var windowWidth = $(window).width()
  , windowHeight = $(window).height();
function forexAccordian() {
    $(document).on("click", ".thsSholdHelpWrap .accord-head", function() {
        $(this).hasClass("active") ? $(this).removeClass("active").next(".accord-body").slideUp(300) : ($(".thsSholdHelpWrap .accord-head").removeClass("active"),
        $(".thsSholdHelpWrap .accord-body").slideUp(300),
        $(this).addClass("active").next(".accord-body").slideDown(300))
    })
}
function forexCharm() {
    $(document).on("mouseenter", ".forexCharmIcon", function() {
        $(this).parent(".forexCharm").stop(!0, !0).addClass("forexCharmActive")
    }),
    $(document).on("mouseleave", ".forexCharm", function() {
        $(this).removeClass("forexCharmActive").stop(!0, !0)
    }),
    $(document).on("click", ".forexCharmIcon", function() {
        $(this).parent(".forexCharm").toggleClass("forexCharmActive")
    })
}
function mobilecardtab() {
    $(document).on("click", ".js_mobilecardtab .resBox", function() {
        var card = $(this).attr("fortab");
        $(this).addClass("active").siblings().removeClass("active"),
        "Trave_withforex" == card && ($(".wrapOne").addClass("active"),
        $(".wrapTwo, .wrapThr").removeClass("active")),
        "Trave_withdebit" == card && ($(".wrapTwo").addClass("active"),
        $(".wrapOne, .wrapThr").removeClass("active")),
        "Trave_withimportant" == card && ($(".wrapThr").addClass("active"),
        $(".wrapTwo").removeClass("active"));
        var $this = $(this)
          , scrollContLeft = $($this).parents(".js_mobilecardtab").scrollLeft()
          , leftscroll = $($this).position().left + scrollContLeft;
        $($this).parents(".js_mobilecardtab").animate({
            scrollLeft: leftscroll
        }, 500)
    })
}
$(document).ready(function() {
    $(".axisWrap ").hasClass("forexcard") && (forexAccordian(),
    forexCharm(),
    $(".js_mobilecardtab").length && windowWidth < 768 && mobilecardtab())
});

if($(window).width() >= 992){
$(".travelForex .owl-carousel").owlCarousel({
items: 3,
loop: false,
autoplay: false,
autoplayTimeout: 3000,
autoplayHoverPause: true,
nav: true,
navText: ["",""]
});
}
if($(window).width() < 991){
$(".travelForex .owl-carousel").owlCarousel({
items: 1,
loop: false,
autoplay: false,
autoplayTimeout: 3000,
autoplayHoverPause: true,
nav: true,
navText: ["",""]
});
}
;
var dateFormat = function() {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g
      , timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
      , timezoneClip = /[^-+\dA-Z]/g
      , pad = function(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len)
            val = "0" + val;
        return val;
    };

    // Regexes and supporting functions are cached through closure
    return function(date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        if (isNaN(date))
            throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get"
          , d = date[_ + "Date"]()
          , D = date[_ + "Day"]()
          , m = date[_ + "Month"]()
          , y = date[_ + "FullYear"]()
          , H = date[_ + "Hours"]()
          , M = date[_ + "Minutes"]()
          , s = date[_ + "Seconds"]()
          , L = date[_ + "Milliseconds"]()
          , o = utc ? 0 : date.getTimezoneOffset()
          , flags = {
            d: d,
            dd: pad(d),
            ddd: dF.i18n.dayNames[D],
            dddd: dF.i18n.dayNames[D + 7],
            m: m + 1,
            mm: pad(m + 1),
            mmm: dF.i18n.monthNames[m],
            mmmm: dF.i18n.monthNames[m + 12],
            yy: String(y).slice(2),
            yyyy: y,
            h: H % 12 || 12,
            hh: pad(H % 12 || 12),
            H: H,
            HH: pad(H),
            M: M,
            MM: pad(M),
            s: s,
            ss: pad(s),
            l: pad(L, 3),
            L: pad(L > 99 ? Math.round(L / 10) : L),
            t: H < 12 ? "a" : "p",
            tt: H < 12 ? "am" : "pm",
            T: H < 12 ? "A" : "P",
            TT: H < 12 ? "AM" : "PM",
            Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
            o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
            S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };

        return mask.replace(token, function($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    }
    ;
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
Date.prototype.format = function(mask, utc) {
    return dateFormat(this, mask, utc);
};



var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
      , base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    }
      , format = function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
            return c[p];
        })
    }
    return function(table, name) {
        if (!table.nodeType)
            table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        var blob = new Blob([format(template, ctx)]);
        var blobURL = window.URL.createObjectURL(blob);
        return blobURL;
    }
}
)();



function gotoLink(ctrl) {

    var eventCategory = $(ctrl).data("eventcategory");
    var eventAction = $(ctrl).data("eventaction");
    var eventLabel = $(ctrl).data("eventlabel");
    var event = $(ctrl).data("event");

    //Check whether eventLabel value contains simple value or URL.
    //If URL, then append full URL if not
    if (eventLabel.startsWith("/") || eventLabel.startsWith("http")) {
        if (eventLabel.indexOf(window.location.host) > -1 || eventLabel.indexOf("www.axisbank.com") > -1 || eventLabel.indexOf("http") > -1) {} else {
            eventLabel = window.location.protocol + "//" + window.location.host + eventLabel;
        }
    }

    dataLayer.push({
        'eventCategory': eventCategory,
        'eventAction': eventAction,
        'eventLabel': eventLabel,
        'event': event
    });
}

//Mobile Optimization of Links
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
//Mobile Optimization of Links



$(document).ready(function() {
    //Mobile Optimization of Links
    var app = getUrlVars()["app"];
    if (app == 'y') {
        $(".topBand").remove();
        $(".topMenu").remove();
        $(".breadcrumSect").remove();
        $(".bannerWrapper").remove();
        $("footer").remove();
    }
    $(document).on("click", ".js-hamburger", function(e) {
        e.preventDefault();
        var lang = $(this).attr("data-type");
        var mobileMenuPersonalHTMLType = "";

        switch (lang) {
        case "hindi":
            mobileMenuPersonalHTMLType = "mobileMenuPersonal_new_Hindi";
            break;
        case "tamil":
            mobileMenuPersonalHTMLType = "mobileMenuPersonal_new_Tamil";
            break;
        default:
            mobileMenuPersonalHTMLType = "mobileMenuPersonal_new"
        }
        if (mobileMenuPersonalHTMLType != "") {
            var mobileMenuPersonalHTML = AjaxService.GetMobileMenuContent(mobileMenuPersonalHTMLType);
            $(".mobiNav").html(mobileMenuPersonalHTML);
            $("body").css("position", "fixed");
            $("body").css("width", "100%");
            $(".overLay").show();
            $(".mobiNav").animate({
                left: "0"
            });
            $(".mobiNav").focus();
            $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
        }

    });

    $(document).on("click", ".js-business", function(e) {
        e.preventDefault();
        var mobileMenuBusinessHTML = AjaxService.GetMobileMenuContent("BusinessHomeMainMenuMobile_new");
        $(".mobiNav").html(mobileMenuBusinessHTML);
        $("body").css("position", "fixed");
        $("body").css("width", "100%");
        $(".overLay").show();
        $(".mobiNav").animate({
            left: "0"
        });
        $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
    });
    $(document).on("click", ".js-personal", function(e) {
        e.preventDefault();
        var mobileMenuPersonalHTML = AjaxService.GetMobileMenuContent("mobileMenuPersonal_new");
        $(".mobiNav").html(mobileMenuPersonalHTML);
        $("body").hasClass("wob") ? $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo-white.png") : $(".mobileMenu .logoSect img").attr("src", "/assets/images/logo.png")
    });

    $(document).on('click', '.axisappDownlLink', function(event) {
        event.preventDefault();
        if ($('.android').length) {
            window.open("https://play.google.com/store/apps/details?id=com.axis.mobile&hl=en", '_blank')
        } else if ($('.ios').length) {
            window.open("https://itunes.apple.com/in/app/axis-bank-mobile-banking/id699582556?mt=8", '_blank');
        }
    });

    //To stick the menu when page is loaded from middle
    $(window).scrollTop() > 44 ? $("body").addClass("header-fixed") : $("body").removeClass("header-fixed");

    $(".breadcrumSect").css("top", "0px");

    $(document).on("click", ".close, .cancel, .accept", function(e) {
        $(".dealPopup, .overLay, .dealPopupSecondary, .eclgsApplyPopup").hide(),
        $("body").removeClass("topMenuOpen")
    });

    $(document).on("click", ".js-bankDigiClk", function(e) {
        e.preventDefault();
        e.stopPropagation();

        var URL = $(this).data("href");
        setIFrameSrc("iframeApplyNow", "iframeApplyNow", URL);
        $(".popupWrap, .popOverlay").fadeIn();
        $("body").addClass("topMenuOpen");
    });
    $(document).on("click", ".closeBtn", function(e) {
        $(".popupWrap, .popOverlay").hide();
        $("body").removeClass("topMenuOpen");
    });

    $('.lnksubscribenow').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var type = $(this).data("type");
        var url = $(this).data("url");
        setIFrameSrc("IframePopup", type, url)
        $("#iframeModal").modal("show");

        //$("#IframePopup body").css("background", "none !important");

    });

});


    // 13.06.19
    var setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }

    $(document).ready(function($) {
        //$("#HomePageStrip").attr('style','display: block !important');
        if (getCookie("closed") == "closed") {
            $("#HomePageStrip").attr('style','display: none !important');
        }

        $(".ab_ppCloseBand").on('click', function() {
            $("#HomePageStrip").attr('style','display: none !important');
            $("#HomePageStrip").css({'height' : '0'});
            setCookie("closed", "closed", 365)
        });
    });

    // 26.06.19
    $(".nav a").each(function() {
        //console.log($(this).attr('href'));
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).find('li').addClass('active');
        }
    });


    // 26.08.19
    $(function() {
        $('#myid li a').filter(function() {
            $('#myid li:first-child').addClass('active');
            return this.href == location.href
        }).parent().addClass('active').siblings().removeClass('active')
        $('#myid li a').click(function() {
            $(this).parent().addClass('active').siblings().removeClass('active')
        })
        if ($(".businessBody").length > 0) {
            $("#Personal").removeClass("active");
            $("#business").addClass("active");
        }

        if ($("*").hasClass("aboutUs")) {
            if ($(".navbarSect").length > 0) {
                $("#Personal").removeClass("active");
                $("#Aboutus").addClass("active");
            }
        }

    });


/* Axis Bank copyright */
$(function() {
    AByear = new Date().getFullYear();
    $('.ABcurrentYear').text(AByear);
});
/* Axis Bank copyright end */
$('.menuBody h4').on('click', function() {
    $('.checkRateBox').attr('style', 'display: block !important');
});

$(document).ready(function() {
    $(window).resize(function() {
        var headerHeight = $(".topMenu").height();
        var winWidth = $(window).width();
        /*if ((winWidth <= 1199)) {
                    
                } */
    }).resize();

    var hash = window.location.hash
    if (hash == '' || hash == '#' || hash == undefined)
        return false;
    var target = $(hash);
    headerHeight = 150;
    target = target.length ? target : $('[name=' + hash.slice(1) + ']');
    if (target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 150 //offsets for fixed header
        }, 'linear');
    }

});

/* Social media share */
//twitter
!function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");
$('#ab_tweetBtn').on('click', function(ev) {
    ev.preventDefault();
    // Remove existing iframe
    $('#ab_tweetBtn iframe').remove();
    // Generate new markup
    var ab_tweetBtn = $('<a></a>').addClass('twitter-share-button').attr('href', 'http://twitter.com/share').attr('data-url', '').attr('data-text', $('#tweetText').val());
    $('#ab_tweetBtn').append(ab_tweetBtn);
    twttr.widgets.load();
});
//twitter end

//facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//WhatsApp
$(document).on("click", '.ab_whatsapp', function() {
    var text = $(this).attr("data-text");
    var url = $(this).attr("data-href");
    var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
    var whatsapp_url = "whatsapp://send?text=" + message;
    window.location.href = whatsapp_url;
});
/* Social media share end */

if ($(window).width() < 767) {
    if ($("*").hasClass("ab_floatingBtn")) {
        $('.footerBtmSec').css({
            'margin-bottom': '40px'
        });
    }
}
/* For desktop */
$(".newNotify").hide();
if ($(window).width() >= 992) {
    $("body").on("mouseenter", ".notify", function(e) {
        e.preventDefault();
        $(".newNotify").show();
    })
    $("body").on("mouseleave", ".notify", function(e) {
        e.preventDefault();
        $(".newNotify").hide();
    });
}
/* For mobile*/
if ($(window).width() < 991) {
    $("body").on("click", ".notify", function(e) {
        $(".newNotify").toggle();
    });
}

$(".inptSearch").on("input", function() {
    var regexp = /[^a-zA-Z ]/g;

    if ($(this).val().match(regexp)) {
        $(this).val($(this).val().replace(regexp, ''));
    }
});

$(".utmLink").on("click", function (e) {
    var theHref = $(this).attr("href");
    var pageURL = $(location).attr("href");
    var stringParam = pageURL.split("?utm")[1];
    //var stringParamCTA = pageURL.split("?cta")[1];
    if(pageURL.split("?utm")[1]){
    $(this).attr("href", theHref + "&utm" + stringParam);
    }
    /*else{
        $(this).attr("href", theHref + "&cta" + stringParamCTA);
    }*/
    $(this).unbind();
});

/* Mobile floater for home page */
$(document).scroll(function() {
    if (window.innerWidth < 768) {
        var y = $(this).scrollTop();

        if (y > 200) {
            $('.mobfloatingBtn').hide();
            $('.mob-apply-new').fadeIn();
        } else {
            $('.mob-apply-new').fadeOut();
            $('.mobfloatingBtn').show();
        }
    }
});
$('.jsPno').on('click', function() {
    $('.pnoLinks').slideToggle(280);
    $(this).toggleClass('pnoArw');
});

// 20.04.21
    $(document).ready(function() {
        $(".notification").on("mouseover", function() {
            $(".notyCount").hide();
        });
        $(".mobsearch").on("click", function() {
        $(".mobsearch .notyCount").hide();
        })

        $('.topBand ul li .subMenus').hide();
});


function startDictation() {

    window.speechToText(function (dictation) {

        var eventName = dictation.eventName;
        var recognition = dictation.handle;

        switch (eventName) {
            case "load":
                if ($("#micBtn").hasClass("mic-off")) {
                    recognition.start();
                } else {
                    $("#micBtn").removeClass("mic-on").addClass("mic-off");
                    recognition.stop();
                }
                break;

            case "start":
                $(".mic-off").removeClass("mic-off").addClass("mic-on");
                $('.inptSearch').attr("placeholder", "Speak to search");
                break;

            case "result":
                if ($("#micBtn").hasClass("mic-on")) {
                    //$('.inptSearch').attr('readonly', true);
                    var chatText = dictation.text;
					//chatText = chatText.replace(/[^a-zA-Z]/g, '');
                    recognition.stop();
                    $('.inptSearch').val(chatText);
                    getSearchResultTest(chatText);
                    $('.lblResult').css('visibility', 'visible');
                    $('.blackoverlay').show();

                    if ($(".lblResult_new").length > 0) {
                        $('body').addClass('searchActive01');
                    }
                }

                break;

            case "error":
                turnOffMic();
                recognition.stop();
		$('.inptSearch').attr('placeholder', 'What are you looking for?');
                break;

            case "end":
                turnOffMic();
                recognition.stop();
		$('.inptSearch').attr('placeholder', 'What are you looking for?');
                break;

            default:
                turnOffMic();
                recognition.stop();
		$('.inptSearch').attr('placeholder', 'What are you looking for?');
                break;
        }
    });
}
/* below banner bottom search */
function openStartDictation() {

    window.speechToText(function (dictation) {

        var eventName = dictation.eventName;
        var recognition = dictation.handle;

        switch (eventName) {
            case "load":
                if ($("#micBtn").hasClass("mic-off")) {
                    recognition.start();
                } else {
                    $("#micBtn").removeClass("mic-on").addClass("mic-off");
                    recognition.stop();
                }
                break;

            case "start":
                $(".mic-off").removeClass("mic-off").addClass("mic-on");
                $('.openInptSearch').attr("placeholder", "Speak to search");
                break;

            case "result":
                if ($("#micBtn").hasClass("mic-on")) {
                    //$('.inptSearch').attr('readonly', true);
                    var chatText = dictation.text;
					//chatText = chatText.replace(/[^a-zA-Z]/g, '');
                    recognition.stop();
                    $('.openInptSearch').val(chatText);
                    getSearchResultTest(chatText);
                    $('.lblResult').css('visibility', 'visible');
                    $('.blackoverlay').show();

                    if ($(".lblResult_new").length > 0) {
                        $('body').addClass('searchActive01');
                    }
                }

                break;

            case "error":
                turnOffMic();
                recognition.stop();
		$('.openInptSearch').attr('placeholder', 'What are you looking for?');
                break;

            case "end":
                turnOffMic();
                recognition.stop();
		$('.openInptSearch').attr('placeholder', 'What are you looking for?');
                break;

            default:
                turnOffMic();
                recognition.stop();
		$('.openInptSearch').attr('placeholder', 'What are you looking for?');
                break;
        }
    });
}
$(".mic-off").click(function () {
    $(".headsearch1").val("");
    $(".mic-off").removeClass("mic-off").addClass("mic-on");
});

function turnOffMic() {
    $(".mic-on").removeClass("mic-on").addClass("mic-off");
}

window.speechToText = function (dictationCallback) {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.lang = "en-GB";

        var dictation = {
            eventName: "load",
            handle: recognition
        }

        dictationCallback(dictation);

        recognition.onstart = function (e) {

            var dictation = {
                eventName: "start",
                handle: recognition
            }

            dictationCallback(dictation);
        }

        recognition.onresult = function (e) {

            var dictation = {
                eventName: "result",
                handle: recognition,
                text: e.results[0][0].transcript
            }

            dictationCallback(dictation);


        };

        recognition.onerror = function (e) {
            if (e.error === "no-speech") {
                var dictation = {
                    eventName: "start",
                    handle: recognition
                }
            } else {
                var dictation = {
                    eventName: "error",
                    handle: recognition
                }
            }

            dictationCallback(dictation);

        }

        recognition.onend = function () {

            var dictation = {
                eventName: "end",
                handle: recognition

            }

            dictationCallback(dictation);
        };

    } else {
        console.log("no voice support");
        var dictation = {
            eventName: "unsupported",
            handle: recognition

        }

        dictationCallback(dictation);
    }

}
;
// index
!(function (e) {
    function r(r) {
        for (
            var n, a, i = r[0], c = r[1], f = r[2], s = 0, p = [];
            s < i.length;
            s++
        )
            (a = i[s]),
                Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
                (o[a] = 0);
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (l && l(r); p.length;) p.shift()();
        return u.push.apply(u, f || []), t();
    }
    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
                var c = t[i];
                0 !== o[c] && (n = !1);
            }
            n && (u.splice(r--, 1), (e = a((a.s = t[0]))));
        }
        return e;
    }
    var n = {},
        o = { 1: 0 },
        u = [];
    function a(r) {
        if (n[r]) return n[r].exports;
        var t = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
    }
    (a.e = function (e) {
        var r = [],
            t = o[e];
        if (0 !== t)
            if (t) r.push(t[2]);
            else {
                var n = new Promise(function (r, n) {
                    t = o[e] = [r, n];
                });
                r.push((t[2] = n));
                var u,
                    i = document.createElement("script");
                (i.charset = "utf-8"),
                    (i.timeout = 120),
                    a.nc && i.setAttribute("nonce", a.nc),
                    (i.src = (function (e) {
                        return (
                            a.p +
                            "static/js/" +
                            ({}[e] || e) +
                            "." +
                            { 3: "bfa6eabb" }[e] +
                            ".chunk.js"
                        );
                    })(e));
                var c = new Error();
                u = function (r) {
                    (i.onerror = i.onload = null), clearTimeout(f);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type),
                                u = r && r.target && r.target.src;
                            (c.message =
                                "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")"),
                                (c.name = "ChunkLoadError"),
                                (c.type = n),
                                (c.request = u),
                                t[1](c);
                        }
                        o[e] = void 0;
                    }
                };
                var f = setTimeout(function () {
                    u({ type: "timeout", target: i });
                }, 12e4);
                (i.onerror = i.onload = u), document.head.appendChild(i);
            }
        return Promise.all(r);
    }),
        (a.m = e),
        (a.c = n),
        (a.d = function (e, r, t) {
            a.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, r) {
            if ((1 & r && (e = a(e)), 8 & r)) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (a.r(t),
                    Object.defineProperty(t, "default", { enumerable: !0, value: e }),
                    2 & r && "string" != typeof e)
            )
                for (var n in e)
                    a.d(
                        t,
                        n,
                        function (r) {
                            return e[r];
                        }.bind(null, n)
                    );
            return t;
        }),
        (a.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return a.d(r, "a", r), r;
        }),
        (a.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }),
        (a.p = "/"),
        (a.oe = function (e) {
            throw (console.error(e), e);
        });
    var i = (this.webpackJsonpfev = this.webpackJsonpfev || []),
        c = i.push.bind(i);
    (i.push = r), (i = i.slice());
    for (var f = 0; f < i.length; f++) r(i[f]);
    var l = c;
    t();
})([]);
// main
(this.webpackJsonpfev = this.webpackJsonpfev || []).push([
    [0],
    {
        10: function (e, c, A) { },
        11: function (e, c, A) { },
        13: function (e, c, A) {
            "use strict";
            A.r(c);
            var t = A(1),
                l = A.n(t),
                o = A(4),
                y = A.n(o),
                n = (A(10), A(2)),
                s = (A(11), A(5)),
                b = A(0),
                r = function (e) {
                    var c = e.minimize,
                        A = e.close,
                        t = e.mini;
                    e.iframeWindow;
                    return Object(b.jsxs)("div", {
                        className: "top-hearder",
                        onClick: function () {
                            return t ? c() : null;
                        },
                        children: [
                            t
                                ? Object(b.jsxs)("div", {
                                    className: "minimizeContent",
                                    children: [
                                        Object(b.jsxs)("div", {
                                            className: "typing",
                                            children: [
                                                Object(b.jsx)("p", {
                                                    children: "AHA! is here to help you anytime",
                                                }),
                                                Object(b.jsxs)("div", {
                                                    className: "closeMini",
                                                    children: [
                                                        Object(b.jsx)(s.a, { className: "enter-icon" }),
                                                        Object(b.jsx)("input", {
                                                            type: "text",
                                                            disabled: !0,
                                                            placeholder: "Start typing here",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(b.jsx)("img", {
                                            // src: "data:image/png;base64,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",
                                            src: "data:image/png;base64,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",
                                            alt: "axis_aha",
                                            className: "miniChatLoader",
                                        }),
                                    ],
                                })
                                : null,
                            Object(b.jsxs)("span", {
                                className: "pull-right openicon",
                                children: [
                                    !t &&
                                    // Object(b.jsx)("p", {
                                    //   className: "header-title",
                                    //   children: "Axis AHA!",
                                    // }),
                                    Object(b.jsx)("img", {
                                        // src: "data:image/png;base64,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",
                                        src: "data:image/png;base64,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",
                                        alt: "axis_aha",
                                        className: "header-title",
                                    }),
                                    !t &&
                                    Object(b.jsxs)("span", {
                                        className: "closex-close",
                                        children: [
                                            Object(b.jsx)("img", {
                                                alt: "minimize",
                                                onClick: c,
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACzklEQVRYhe2Wy08TURTGf6czrQSiFAtBeSSiLHQr/4U8qmt2Ln0sDLrUuOY/MPGx0Y0RtRr+Co2udGECxAhB6B25d5QGsJ3joq3WKdqXO/lWk/nud75vbs7ce+AA/zuklcVBEIyq72dVmRQ4AYxWqE8KKyIsSrGYy2Qyq/80gDGFYfGLtxS9CPgNlkcgC56WbvT19X3sOEB+K5wR0YfAYWBP4RnCc0TelgqFVQCvu3sE1bMoWYELQAr4qpHMDhw98rLxJ/4BxrmrxrqSsU6NDR9ba8caaTasPWls+KSscSXj3JW2zPNb4UzFvBhsuWtt6OeMdUVjXSn/JZxuSWxMYdhYFxrrtB3zWAg11rn89vbx5oXW3q1ue7vmVRhrF4x1Gtjwzn58XRMGQTCqnr8ClHz0dDqdXukkwIa1pzzkPZCgmDzR39+9Vssn4gL1/SzgKTzr1BxgMJ1eAskBPsnv2ThfH0A5B4CQ69T8Z03RHIBEldp/CyAwDqDw6l8FQOR1OUi5di32O9XK3bq7+zlOGOu0Gb/+dO9vvaU7O2uSOgQwHF9btwNAUyatwPO8qk8U5/bbgXXgsHR1DQEfaon4lzULTSaHiBRgLc7VNyEslR90oh2zfQNUaomy3DCACIuVJHW/TLsQlSyAii7WcfEXQRCMVA6iqISeGUyn61K3gk3nxhPKO5o9iDKZzKogD4CUR2K+E3OAhOo8kBLkXtz8j8jnt4eql1F+K5xr1zxvw+uVy8hufvt2rDXxl3C6eh23E6JiXr6OnZtsVQ+Ace7Kr4HELmxYe6qRZtO5cWPt05qB5PLf1jceycJwSiJ9BBwB9kByKvpcRN5EOzurAImurhFVnRCV86BZIAk4FWYHenvrOr+lAABhGPbvlfQmwiUaD6VFQe5HSe/2QE/PeqPaLZ1sxhSG8fdmBJlSGKNmLBdlWUUXKaZeNN3tBzgA8AOmcIHEopz+DwAAAABJRU5ErkJggg==",
                                            }),
                                            Object(b.jsx)("img", {
                                                id: "chatBoxLogout",
                                                onClick: A,
                                                alt: "close",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB40lEQVRYhe2WzU4TURTH/+PWLpWotZGvWN+FUrZin6BQFwRehJ0YHoBUSoJRH4QuGje6EPZ8rEqpPxZzJh3Knem9A0STcpImzT3n/3HPzNx7pMeY9ohCioGKpBVJS5JmJVUs9UfSb0nfJR1GUXR8nyYFlIEdYMDkGAJt4M19ideBcyPvA3vAe6AKPLVfFVi1XN9qz4Hlu4p/tB1hu5rzwMwD+6lutIqK143gCtgogN807DC4E/bMk7YHi4+ZADgDXoYAd5O2FxVPcXWMa8cXULHW9V3PHGgCM471GaDpWF8wrgFQ9jHQMsd7jtya5bppEybetdyaA9fOyrkM/LDi1YxddtMmXGsOXMPy33wM/LTitxn5ccFcccNUrabnY+DCiks5Nc+BI0bRA17k1Jes7mI898RVP9GlO/LulUTn70SW/+ER/POXcN2KH+IzvHVOuAy8Jj40+sC8Ix96EC0SchAZ6LM53vcC5HMdGNenENArRpfR5h3Et4zjNO8zzQIvM7qOg02YeHIdL4XiE5IWo4GkAyx4YBZTbR8C64XEU4Q14vsce5nawAfgHfEJV7L/DeALcJlqe7GdO0w8A7bxG0oHxAOs1wASOpaXJdUl1STN6eZY/kvxWP41iqKTEN7HmO64BtsZlPR175QhAAAAAElFTkSuQmCC",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            var a = function () {
                var e = Object(t.useState)(!1),
                    c = Object(n.a)(e, 2),
                    A = c[0],
                    l = c[1],
                    o = Object(t.useState)(!0),
                    y = Object(n.a)(o, 2),
                    s = y[0],
                    a = y[1],
                    h = Object(t.useState)(0),
                    B = Object(n.a)(h, 2),
                    g = B[0],
                    w = B[1],
                    U = Object(t.useState)(null),
                    K = Object(n.a)(U, 2),
                    u = K[0],
                    i = K[1],
                    J = Object(t.useRef)(null),
                    v = Object(t.useState)("block"),
                    Z = Object(n.a)(v, 2),
                    Q = Z[0],
                    X = Z[1],
                    m = Object(t.useState)("1"),
                    d = Object(n.a)(m, 2),
                    L = d[0],
                    Y = (d[0], d[1]);
                setTimeout(function () {
                    Y("0");
                }, 1e4);
                var x = function () {
                    s ? (X("block"), i("https://chatbot.axisbank.com/")) : l(!A),
                        a(!1),
                        w(g + 1);
                };
                return (
                    Object(t.useState)(function () {
                        window.addEventListener("message", function (e) {
                            "https://chatbot.axisbank.com" === e.origin &&
                                "onCloseChatBot" === e.data &&
                                (X("none"), l(!1), i(null), a(!0));
                        });
                    }),
                    Object(b.jsxs)("div", {
                        children: [
                            Object(b.jsx)("div", {
                                class: "bounce",
                                style: { opacity: L },
                                children: Object(b.jsx)("i", {
                                    class: "fa fa-angle-double-down",
                                    children: "Ask AHA!",
                                }),
                            }),
                            s
                                ? //  Object(b.jsxs)("div", {
                                //     className: "chatBot-botlogo",
                                //     onClick: function () {
                                //       return x();
                                //     },

                                //     // children: [
                                //     //   Object(b.jsx)("p", {
                                //     //     className: "ask-ana",
                                //     //     children: "Ask AHA!",
                                //     //   }),
                                //     //   Object(b.jsx)("img", {
                                //     //     // src: "data:image/png;base64,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",
                                //     //     src: "data:image/png;base64,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",
                                //     //     alt: "",
                                //     //   }),
                                //     // ],
                                //   })

                                Object(b.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: "axis_aha",
                                    className: "landing-page-icon",
                                    onClick: function () {
                                        return x();
                                    },
                                })
                                : null,
                            g > 0
                                ? Object(b.jsxs)("div", {
                                    style: { display: Q },
                                    className: A ? "containerMini" : "chatBot-size",
                                    children: [
                                        Object(b.jsx)(r, {
                                            minimize: x,
                                            mini: A,
                                            close: function () {
                                                if (
                                                    (console.log(
                                                        J.current.contentWindow,
                                                        "<------------------"
                                                    ),
                                                        J.current)
                                                ) {
                                                    J.current.contentWindow.postMessage(
                                                        "onCloseFeedback",
                                                        "https://chatbot.axisbank.com"
                                                    );
                                                }
                                            },
                                            iframeWindow: J,
                                        }),
                                        Object(b.jsx)("iframe", {
                                            style: { display: "block" },
                                            src: u,
                                            className: A ? "chatBot-hide" : "iframe-size",
                                            frameBorder: "0",
                                            title: "chatbot",
                                            ref: J,
                                            allow: "camera;microphone;geolocation",
                                        }),
                                    ],
                                })
                                : null,
                        ],
                    })
                );
            },
                h = function (e) {
                    e &&
                        e instanceof Function &&
                        A.e(3)
                            .then(A.bind(null, 14))
                            .then(function (c) {
                                var A = c.getCLS,
                                    t = c.getFID,
                                    l = c.getFCP,
                                    o = c.getLCP,
                                    y = c.getTTFB;
                                A(e), t(e), l(e), o(e), y(e);
                            });
                };
            y.a.render(
                Object(b.jsx)(l.a.StrictMode, { children: Object(b.jsx)(a, {}) }),
                document.getElementById("chatbotUI")
            ),
                h();
        },
    },
    [[13, 1, 2]],
]);
//# sourceMappingURL=main.23bdcd5f.chunk.js.map

// chunk
/*! For license information please see 2.72d81b97.chunk.js.LICENSE.txt */
(this.webpackJsonpfev = this.webpackJsonpfev || []).push([
    [2],
    [
        function (e, t, n) {
            "use strict";
            e.exports = n(12);
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(6);
        },
        function (e, t, n) {
            "use strict";
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                l = !1,
                                a = void 0;
                            try {
                                for (
                                    var o, u = e[Symbol.iterator]();
                                    !(r = (o = u.next()).done) &&
                                    (n.push(o.value), !t || n.length !== t);
                                    r = !0
                                );
                            } catch (i) {
                                (l = !0), (a = i);
                            } finally {
                                try {
                                    r || null == u.return || u.return();
                                } finally {
                                    if (l) throw a;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" === typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n
                                    ? Array.from(e)
                                    : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                        ? r(e, t)
                                        : void 0
                            );
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            n.d(t, "a", function () {
                return l;
            });
        },
        function (e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;
            function o(e) {
                if (null === e || void 0 === e)
                    throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                    );
                return Object(e);
            }
            e.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                        return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                        t["_" + String.fromCharCode(n)] = n;
                    if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join("")
                    )
                        return !1;
                    var r = {};
                    return (
                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            r[e] = e;
                        }),
                        "abcdefghijklmnopqrst" ===
                        Object.keys(Object.assign({}, r)).join("")
                    );
                } catch (l) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (e, t) {
                    for (var n, u, i = o(e), s = 1; s < arguments.length; s++) {
                        for (var c in (n = Object(arguments[s])))
                            l.call(n, c) && (i[c] = n[c]);
                        if (r) {
                            u = r(n);
                            for (var f = 0; f < u.length; f++)
                                a.call(n, u[f]) && (i[u[f]] = n[u[f]]);
                        }
                    }
                    return i;
                };
        },
        function (e, t, n) {
            "use strict";
            !(function e() {
                if (
                    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                    "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                )
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                    } catch (t) {
                        console.error(t);
                    }
            })(),
                (e.exports = n(7));
        },
        function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return d;
            });
            var r = n(1),
                l = n.n(r),
                a = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0,
                },
                o = l.a.createContext && l.a.createContext(a),
                u = function () {
                    return (u =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var l in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                            return e;
                        }).apply(this, arguments);
                },
                i = function (e, t) {
                    var n = {};
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            t.indexOf(r) < 0 &&
                            (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var l = 0;
                        for (r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                            t.indexOf(r[l]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                                (n[r[l]] = e[r[l]]);
                    }
                    return n;
                };
            function s(e) {
                return (
                    e &&
                    e.map(function (e, t) {
                        return l.a.createElement(e.tag, u({ key: t }, e.attr), s(e.child));
                    })
                );
            }
            function c(e) {
                return function (t) {
                    return l.a.createElement(
                        f,
                        u({ attr: u({}, e.attr) }, t),
                        s(e.child)
                    );
                };
            }
            function f(e) {
                var t = function (t) {
                    var n,
                        r = e.attr,
                        a = e.size,
                        o = e.title,
                        s = i(e, ["attr", "size", "title"]),
                        c = a || t.size || "1em";
                    return (
                        t.className && (n = t.className),
                        e.className && (n = (n ? n + " " : "") + e.className),
                        l.a.createElement(
                            "svg",
                            u(
                                {
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                    strokeWidth: "0",
                                },
                                t.attr,
                                r,
                                s,
                                {
                                    className: n,
                                    style: u(u({ color: e.color || t.color }, t.style), e.style),
                                    height: c,
                                    width: c,
                                    xmlns: "http://www.w3.org/2000/svg",
                                }
                            ),
                            o && l.a.createElement("title", null, o),
                            e.children
                        )
                    );
                };
                return void 0 !== o
                    ? l.a.createElement(o.Consumer, null, function (e) {
                        return t(e);
                    })
                    : t(a);
            }
            function d(e) {
                return c({
                    tag: "svg",
                    attr: { viewBox: "0 0 24 24" },
                    child: [
                        {
                            tag: "g",
                            attr: {},
                            child: [
                                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                                {
                                    tag: "path",
                                    attr: {
                                        d: "M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z",
                                    },
                                },
                            ],
                        },
                    ],
                })(e);
            }
        },
        function (e, t, n) {
            "use strict";
            var r = n(3),
                l = 60103,
                a = 60106;
            (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
            var o = 60109,
                u = 60110,
                i = 60112;
            t.Suspense = 60113;
            var s = 60115,
                c = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var f = Symbol.for;
                (l = f("react.element")),
                    (a = f("react.portal")),
                    (t.Fragment = f("react.fragment")),
                    (t.StrictMode = f("react.strict_mode")),
                    (t.Profiler = f("react.profiler")),
                    (o = f("react.provider")),
                    (u = f("react.context")),
                    (i = f("react.forward_ref")),
                    (t.Suspense = f("react.suspense")),
                    (s = f("react.memo")),
                    (c = f("react.lazy"));
            }
            var d = "function" === typeof Symbol && Symbol.iterator;
            function p(e) {
                for (
                    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                    n = 1;
                    n < arguments.length;
                    n++
                )
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return (
                    "Minified React error #" +
                    e +
                    "; visit " +
                    t +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                );
            }
            var h = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () { },
                enqueueReplaceState: function () { },
                enqueueSetState: function () { },
            },
                m = {};
            function v(e, t, n) {
                (this.props = e),
                    (this.context = t),
                    (this.refs = m),
                    (this.updater = n || h);
            }
            function y() { }
            function g(e, t, n) {
                (this.props = e),
                    (this.context = t),
                    (this.refs = m),
                    (this.updater = n || h);
            }
            (v.prototype.isReactComponent = {}),
                (v.prototype.setState = function (e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e)
                        throw Error(p(85));
                    this.updater.enqueueSetState(this, e, t, "setState");
                }),
                (v.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                }),
                (y.prototype = v.prototype);
            var b = (g.prototype = new y());
            (b.constructor = g), r(b, v.prototype), (b.isPureReactComponent = !0);
            var w = { current: null },
                k = Object.prototype.hasOwnProperty,
                S = { key: !0, ref: !0, __self: !0, __source: !0 };
            function E(e, t, n) {
                var r,
                    a = {},
                    o = null,
                    u = null;
                if (null != t)
                    for (r in (void 0 !== t.ref && (u = t.ref),
                        void 0 !== t.key && (o = "" + t.key),
                        t))
                        k.call(t, r) && !S.hasOwnProperty(r) && (a[r] = t[r]);
                var i = arguments.length - 2;
                if (1 === i) a.children = n;
                else if (1 < i) {
                    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
                    a.children = s;
                }
                if (e && e.defaultProps)
                    for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
                return {
                    $$typeof: l,
                    type: e,
                    key: o,
                    ref: u,
                    props: a,
                    _owner: w.current,
                };
            }
            function x(e) {
                return "object" === typeof e && null !== e && e.$$typeof === l;
            }
            var _ = /\/+/g;
            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key
                    ? (function (e) {
                        var t = { "=": "=0", ":": "=2" };
                        return (
                            "$" +
                            e.replace(/[=:]/g, function (e) {
                                return t[e];
                            })
                        );
                    })("" + e.key)
                    : t.toString(36);
            }
            function P(e, t, n, r, o) {
                var u = typeof e;
                ("undefined" !== u && "boolean" !== u) || (e = null);
                var i = !1;
                if (null === e) i = !0;
                else
                    switch (u) {
                        case "string":
                        case "number":
                            i = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case l:
                                case a:
                                    i = !0;
                            }
                    }
                if (i)
                    return (
                        (o = o((i = e))),
                        (e = "" === r ? "." + C(i, 0) : r),
                        Array.isArray(o)
                            ? ((n = ""),
                                null != e && (n = e.replace(_, "$&/") + "/"),
                                P(o, t, n, "", function (e) {
                                    return e;
                                }))
                            : null != o &&
                            (x(o) &&
                                (o = (function (e, t) {
                                    return {
                                        $$typeof: l,
                                        type: e.type,
                                        key: t,
                                        ref: e.ref,
                                        props: e.props,
                                        _owner: e._owner,
                                    };
                                })(
                                    o,
                                    n +
                                    (!o.key || (i && i.key === o.key)
                                        ? ""
                                        : ("" + o.key).replace(_, "$&/") + "/") +
                                    e
                                )),
                                t.push(o)),
                        1
                    );
                if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
                    for (var s = 0; s < e.length; s++) {
                        var c = r + C((u = e[s]), s);
                        i += P(u, t, n, c, o);
                    }
                else if (
                    "function" ===
                    typeof (c = (function (e) {
                        return null === e || "object" !== typeof e
                            ? null
                            : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                                ? e
                                : null;
                    })(e))
                )
                    for (e = c.call(e), s = 0; !(u = e.next()).done;)
                        i += P((u = u.value), t, n, (c = r + C(u, s++)), o);
                else if ("object" === u)
                    throw (
                        ((t = "" + e),
                            Error(
                                p(
                                    31,
                                    "[object Object]" === t
                                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                                        : t
                                )
                            ))
                    );
                return i;
            }
            function N(e, t, n) {
                if (null == e) return e;
                var r = [],
                    l = 0;
                return (
                    P(e, r, "", "", function (e) {
                        return t.call(n, e, l++);
                    }),
                    r
                );
            }
            function T(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()),
                        (e._status = 0),
                        (e._result = t),
                        t.then(
                            function (t) {
                                0 === e._status &&
                                    ((t = t.default), (e._status = 1), (e._result = t));
                            },
                            function (t) {
                                0 === e._status && ((e._status = 2), (e._result = t));
                            }
                        );
                }
                if (1 === e._status) return e._result;
                throw e._result;
            }
            var z = { current: null };
            function L() {
                var e = z.current;
                if (null === e) throw Error(p(321));
                return e;
            }
            var O = {
                ReactCurrentDispatcher: z,
                ReactCurrentBatchConfig: { transition: 0 },
                ReactCurrentOwner: w,
                IsSomeRendererActing: { current: !1 },
                assign: r,
            };
            (t.Children = {
                map: N,
                forEach: function (e, t, n) {
                    N(
                        e,
                        function () {
                            t.apply(this, arguments);
                        },
                        n
                    );
                },
                count: function (e) {
                    var t = 0;
                    return (
                        N(e, function () {
                            t++;
                        }),
                        t
                    );
                },
                toArray: function (e) {
                    return (
                        N(e, function (e) {
                            return e;
                        }) || []
                    );
                },
                only: function (e) {
                    if (!x(e)) throw Error(p(143));
                    return e;
                },
            }),
                (t.Component = v),
                (t.PureComponent = g),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
                (t.cloneElement = function (e, t, n) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var a = r({}, e.props),
                        o = e.key,
                        u = e.ref,
                        i = e._owner;
                    if (null != t) {
                        if (
                            (void 0 !== t.ref && ((u = t.ref), (i = w.current)),
                                void 0 !== t.key && (o = "" + t.key),
                                e.type && e.type.defaultProps)
                        )
                            var s = e.type.defaultProps;
                        for (c in t)
                            k.call(t, c) &&
                                !S.hasOwnProperty(c) &&
                                (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
                    }
                    var c = arguments.length - 2;
                    if (1 === c) a.children = n;
                    else if (1 < c) {
                        s = Array(c);
                        for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                        a.children = s;
                    }
                    return {
                        $$typeof: l,
                        type: e.type,
                        key: o,
                        ref: u,
                        props: a,
                        _owner: i,
                    };
                }),
                (t.createContext = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        ((e = {
                            $$typeof: u,
                            _calculateChangedBits: t,
                            _currentValue: e,
                            _currentValue2: e,
                            _threadCount: 0,
                            Provider: null,
                            Consumer: null,
                        }).Provider = { $$typeof: o, _context: e }),
                        (e.Consumer = e)
                    );
                }),
                (t.createElement = E),
                (t.createFactory = function (e) {
                    var t = E.bind(null, e);
                    return (t.type = e), t;
                }),
                (t.createRef = function () {
                    return { current: null };
                }),
                (t.forwardRef = function (e) {
                    return { $$typeof: i, render: e };
                }),
                (t.isValidElement = x),
                (t.lazy = function (e) {
                    return {
                        $$typeof: c,
                        _payload: { _status: -1, _result: e },
                        _init: T,
                    };
                }),
                (t.memo = function (e, t) {
                    return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
                }),
                (t.useCallback = function (e, t) {
                    return L().useCallback(e, t);
                }),
                (t.useContext = function (e, t) {
                    return L().useContext(e, t);
                }),
                (t.useDebugValue = function () { }),
                (t.useEffect = function (e, t) {
                    return L().useEffect(e, t);
                }),
                (t.useImperativeHandle = function (e, t, n) {
                    return L().useImperativeHandle(e, t, n);
                }),
                (t.useLayoutEffect = function (e, t) {
                    return L().useLayoutEffect(e, t);
                }),
                (t.useMemo = function (e, t) {
                    return L().useMemo(e, t);
                }),
                (t.useReducer = function (e, t, n) {
                    return L().useReducer(e, t, n);
                }),
                (t.useRef = function (e) {
                    return L().useRef(e);
                }),
                (t.useState = function (e) {
                    return L().useState(e);
                }),
                (t.version = "17.0.2");
        },
        function (e, t, n) {
            "use strict";
            var r = n(1),
                l = n(3),
                a = n(8);
            function o(e) {
                for (
                    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                    n = 1;
                    n < arguments.length;
                    n++
                )
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return (
                    "Minified React error #" +
                    e +
                    "; visit " +
                    t +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                );
            }
            if (!r) throw Error(o(227));
            var u = new Set(),
                i = {};
            function s(e, t) {
                c(e, t), c(e + "Capture", t);
            }
            function c(e, t) {
                for (i[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
            }
            var f = !(
                "undefined" === typeof window ||
                "undefined" === typeof window.document ||
                "undefined" === typeof window.document.createElement
            ),
                d =
                    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                p = Object.prototype.hasOwnProperty,
                h = {},
                m = {};
            function v(e, t, n, r, l, a, o) {
                (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
                    (this.attributeName = r),
                    (this.attributeNamespace = l),
                    (this.mustUseProperty = n),
                    (this.propertyName = e),
                    (this.type = t),
                    (this.sanitizeURL = a),
                    (this.removeEmptyString = o);
            }
            var y = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
                .split(" ")
                .forEach(function (e) {
                    y[e] = new v(e, 0, !1, e, null, !1, !1);
                }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (e) {
                    var t = e[0];
                    y[t] = new v(t, 1, !1, e[1], null, !1, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(
                    function (e) {
                        y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
                    }
                ),
                [
                    "autoReverse",
                    "externalResourcesRequired",
                    "focusable",
                    "preserveAlpha",
                ].forEach(function (e) {
                    y[e] = new v(e, 2, !1, e, null, !1, !1);
                }),
                "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                    .split(" ")
                    .forEach(function (e) {
                        y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
                    }),
                ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                    y[e] = new v(e, 3, !0, e, null, !1, !1);
                }),
                ["capture", "download"].forEach(function (e) {
                    y[e] = new v(e, 4, !1, e, null, !1, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (e) {
                    y[e] = new v(e, 6, !1, e, null, !1, !1);
                }),
                ["rowSpan", "start"].forEach(function (e) {
                    y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
                });
            var g = /[\-:]([a-z])/g;
            function b(e) {
                return e[1].toUpperCase();
            }
            function w(e, t, n, r) {
                var l = y.hasOwnProperty(t) ? y[t] : null;
                (null !== l
                    ? 0 === l.type
                    : !r &&
                    2 < t.length &&
                    ("o" === t[0] || "O" === t[0]) &&
                    ("n" === t[1] || "N" === t[1])) ||
                    ((function (e, t, n, r) {
                        if (
                            null === t ||
                            "undefined" === typeof t ||
                            (function (e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return (
                                            !r &&
                                            (null !== n
                                                ? !n.acceptsBooleans
                                                : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                                                "aria-" !== e)
                                        );
                                    default:
                                        return !1;
                                }
                            })(e, t, n, r)
                        )
                            return !0;
                        if (r) return !1;
                        if (null !== n)
                            switch (n.type) {
                                case 3:
                                    return !t;
                                case 4:
                                    return !1 === t;
                                case 5:
                                    return isNaN(t);
                                case 6:
                                    return isNaN(t) || 1 > t;
                            }
                        return !1;
                    })(t, n, l, r) && (n = null),
                        r || null === l
                            ? (function (e) {
                                return (
                                    !!p.call(m, e) ||
                                    (!p.call(h, e) &&
                                        (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                                );
                            })(t) &&
                            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                            : l.mustUseProperty
                                ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
                                : ((t = l.attributeName),
                                    (r = l.attributeNamespace),
                                    null === n
                                        ? e.removeAttribute(t)
                                        : ((n =
                                            3 === (l = l.type) || (4 === l && !0 === n) ? "" : "" + n),
                                            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(g, b);
                    y[t] = new v(t, 1, !1, e, null, !1, !1);
                }),
                "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
                    .split(" ")
                    .forEach(function (e) {
                        var t = e.replace(g, b);
                        y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
                    }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                    var t = e.replace(g, b);
                    y[t] = new v(
                        t,
                        1,
                        !1,
                        e,
                        "http://www.w3.org/XML/1998/namespace",
                        !1,
                        !1
                    );
                }),
                ["tabIndex", "crossOrigin"].forEach(function (e) {
                    y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
                }),
                (y.xlinkHref = new v(
                    "xlinkHref",
                    1,
                    !1,
                    "xlink:href",
                    "http://www.w3.org/1999/xlink",
                    !0,
                    !1
                )),
                ["src", "href", "action", "formAction"].forEach(function (e) {
                    y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
                });
            var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                S = 60103,
                E = 60106,
                x = 60107,
                _ = 60108,
                C = 60114,
                P = 60109,
                N = 60110,
                T = 60112,
                z = 60113,
                L = 60120,
                O = 60115,
                R = 60116,
                M = 60121,
                I = 60128,
                F = 60129,
                D = 60130,
                U = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var j = Symbol.for;
                (S = j("react.element")),
                    (E = j("react.portal")),
                    (x = j("react.fragment")),
                    (_ = j("react.strict_mode")),
                    (C = j("react.profiler")),
                    (P = j("react.provider")),
                    (N = j("react.context")),
                    (T = j("react.forward_ref")),
                    (z = j("react.suspense")),
                    (L = j("react.suspense_list")),
                    (O = j("react.memo")),
                    (R = j("react.lazy")),
                    (M = j("react.block")),
                    j("react.scope"),
                    (I = j("react.opaque.id")),
                    (F = j("react.debug_trace_mode")),
                    (D = j("react.offscreen")),
                    (U = j("react.legacy_hidden"));
            }
            var A,
                V = "function" === typeof Symbol && Symbol.iterator;
            function B(e) {
                return null === e || "object" !== typeof e
                    ? null
                    : "function" === typeof (e = (V && e[V]) || e["@@iterator"])
                        ? e
                        : null;
            }
            function $(e) {
                if (void 0 === A)
                    try {
                        throw Error();
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        A = (t && t[1]) || "";
                    }
                return "\n" + A + e;
            }
            var W = !1;
            function H(e, t) {
                if (!e || W) return "";
                W = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (
                            ((t = function () {
                                throw Error();
                            }),
                                Object.defineProperty(t.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                "object" === typeof Reflect && Reflect.construct)
                        ) {
                            try {
                                Reflect.construct(t, []);
                            } catch (i) {
                                var r = i;
                            }
                            Reflect.construct(e, [], t);
                        } else {
                            try {
                                t.call();
                            } catch (i) {
                                r = i;
                            }
                            e.call(t.prototype);
                        }
                    else {
                        try {
                            throw Error();
                        } catch (i) {
                            r = i;
                        }
                        e();
                    }
                } catch (i) {
                    if (i && r && "string" === typeof i.stack) {
                        for (
                            var l = i.stack.split("\n"),
                            a = r.stack.split("\n"),
                            o = l.length - 1,
                            u = a.length - 1;
                            1 <= o && 0 <= u && l[o] !== a[u];

                        )
                            u--;
                        for (; 1 <= o && 0 <= u; o--, u--)
                            if (l[o] !== a[u]) {
                                if (1 !== o || 1 !== u)
                                    do {
                                        if ((o--, 0 > --u || l[o] !== a[u]))
                                            return "\n" + l[o].replace(" at new ", " at ");
                                    } while (1 <= o && 0 <= u);
                                break;
                            }
                    }
                } finally {
                    (W = !1), (Error.prepareStackTrace = n);
                }
                return (e = e ? e.displayName || e.name : "") ? $(e) : "";
            }
            function Q(e) {
                switch (e.tag) {
                    case 5:
                        return $(e.type);
                    case 16:
                        return $("Lazy");
                    case 13:
                        return $("Suspense");
                    case 19:
                        return $("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return (e = H(e.type, !1));
                    case 11:
                        return (e = H(e.type.render, !1));
                    case 22:
                        return (e = H(e.type._render, !1));
                    case 1:
                        return (e = H(e.type, !0));
                    default:
                        return "";
                }
            }
            function q(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case x:
                        return "Fragment";
                    case E:
                        return "Portal";
                    case C:
                        return "Profiler";
                    case _:
                        return "StrictMode";
                    case z:
                        return "Suspense";
                    case L:
                        return "SuspenseList";
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                        case N:
                            return (e.displayName || "Context") + ".Consumer";
                        case P:
                            return (e._context.displayName || "Context") + ".Provider";
                        case T:
                            var t = e.render;
                            return (
                                (t = t.displayName || t.name || ""),
                                e.displayName ||
                                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                            );
                        case O:
                            return q(e.type);
                        case M:
                            return q(e._render);
                        case R:
                            (t = e._payload), (e = e._init);
                            try {
                                return q(e(t));
                            } catch (n) { }
                    }
                return null;
            }
            function K(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return "";
                }
            }
            function Y(e) {
                var t = e.type;
                return (
                    (e = e.nodeName) &&
                    "input" === e.toLowerCase() &&
                    ("checkbox" === t || "radio" === t)
                );
            }
            function X(e) {
                e._valueTracker ||
                    (e._valueTracker = (function (e) {
                        var t = Y(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (
                            !e.hasOwnProperty(t) &&
                            "undefined" !== typeof n &&
                            "function" === typeof n.get &&
                            "function" === typeof n.set
                        ) {
                            var l = n.get,
                                a = n.set;
                            return (
                                Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function () {
                                        return l.call(this);
                                    },
                                    set: function (e) {
                                        (r = "" + e), a.call(this, e);
                                    },
                                }),
                                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                {
                                    getValue: function () {
                                        return r;
                                    },
                                    setValue: function (e) {
                                        r = "" + e;
                                    },
                                    stopTracking: function () {
                                        (e._valueTracker = null), delete e[t];
                                    },
                                }
                            );
                        }
                    })(e));
            }
            function G(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return (
                    e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
                    (e = r) !== n && (t.setValue(e), !0)
                );
            }
            function J(e) {
                if (
                    "undefined" ===
                    typeof (e =
                        e || ("undefined" !== typeof document ? document : void 0))
                )
                    return null;
                try {
                    return e.activeElement || e.body;
                } catch (t) {
                    return e.body;
                }
            }
            function Z(e, t) {
                var n = t.checked;
                return l({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked,
                });
            }
            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                (n = K(null != t.value ? t.value : n)),
                    (e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled:
                            "checkbox" === t.type || "radio" === t.type
                                ? null != t.checked
                                : null != t.value,
                    });
            }
            function te(e, t) {
                null != (t = t.checked) && w(e, "checked", t, !1);
            }
            function ne(e, t) {
                te(e, t);
                var n = K(t.value),
                    r = t.type;
                if (null != n)
                    "number" === r
                        ? ((0 === n && "" === e.value) || e.value != n) &&
                        (e.value = "" + n)
                        : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value")
                    ? le(e, t.type, n)
                    : t.hasOwnProperty("defaultValue") &&
                    le(e, t.type, K(t.defaultValue)),
                    null == t.checked &&
                    null != t.defaultChecked &&
                    (e.defaultChecked = !!t.defaultChecked);
            }
            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (
                        !(
                            ("submit" !== r && "reset" !== r) ||
                            (void 0 !== t.value && null !== t.value)
                        )
                    )
                        return;
                    (t = "" + e._wrapperState.initialValue),
                        n || t === e.value || (e.value = t),
                        (e.defaultValue = t);
                }
                "" !== (n = e.name) && (e.name = ""),
                    (e.defaultChecked = !!e._wrapperState.initialChecked),
                    "" !== n && (e.name = n);
            }
            function le(e, t, n) {
                ("number" === t && J(e.ownerDocument) === e) ||
                    (null == n
                        ? (e.defaultValue = "" + e._wrapperState.initialValue)
                        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
            }
            function ae(e, t) {
                return (
                    (e = l({ children: void 0 }, t)),
                    (t = (function (e) {
                        var t = "";
                        return (
                            r.Children.forEach(e, function (e) {
                                null != e && (t += e);
                            }),
                            t
                        );
                    })(t.children)) && (e.children = t),
                    e
                );
            }
            function oe(e, t, n, r) {
                if (((e = e.options), t)) {
                    t = {};
                    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
                    for (n = 0; n < e.length; n++)
                        (l = t.hasOwnProperty("$" + e[n].value)),
                            e[n].selected !== l && (e[n].selected = l),
                            l && r && (e[n].defaultSelected = !0);
                } else {
                    for (n = "" + K(n), t = null, l = 0; l < e.length; l++) {
                        if (e[l].value === n)
                            return (
                                (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
                            );
                        null !== t || e[l].disabled || (t = e[l]);
                    }
                    null !== t && (t.selected = !0);
                }
            }
            function ue(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                return l({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue,
                });
            }
            function ie(e, t) {
                var n = t.value;
                if (null == n) {
                    if (((n = t.children), (t = t.defaultValue), null != n)) {
                        if (null != t) throw Error(o(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(o(93));
                            n = n[0];
                        }
                        t = n;
                    }
                    null == t && (t = ""), (n = t);
                }
                e._wrapperState = { initialValue: K(n) };
            }
            function se(e, t) {
                var n = K(t.value),
                    r = K(t.defaultValue);
                null != n &&
                    ((n = "" + n) !== e.value && (e.value = n),
                        null == t.defaultValue &&
                        e.defaultValue !== n &&
                        (e.defaultValue = n)),
                    null != r && (e.defaultValue = "" + r);
            }
            function ce(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue &&
                    "" !== t &&
                    null !== t &&
                    (e.value = t);
            }
            var fe = "http://www.w3.org/1999/xhtml",
                de = "http://www.w3.org/2000/svg";
            function pe(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml";
                }
            }
            function he(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e
                    ? pe(t)
                    : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
                        ? "http://www.w3.org/1999/xhtml"
                        : e;
            }
            var me,
                ve,
                ye =
                    ((ve = function (e, t) {
                        if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
                        else {
                            for (
                                (me = me || document.createElement("div")).innerHTML =
                                "<svg>" + t.valueOf().toString() + "</svg>",
                                t = me.firstChild;
                                e.firstChild;

                            )
                                e.removeChild(e.firstChild);
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                        }
                    }),
                        "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
                            ? function (e, t, n, r) {
                                MSApp.execUnsafeLocalFunction(function () {
                                    return ve(e, t);
                                });
                            }
                            : ve);
            function ge(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t);
                }
                e.textContent = t;
            }
            var be = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            },
                we = ["Webkit", "ms", "Moz", "O"];
            function ke(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t
                    ? ""
                    : n ||
                        "number" !== typeof t ||
                        0 === t ||
                        (be.hasOwnProperty(e) && be[e])
                        ? ("" + t).trim()
                        : t + "px";
            }
            function Se(e, t) {
                for (var n in ((e = e.style), t))
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            l = ke(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                            r ? e.setProperty(n, l) : (e[n] = l);
                    }
            }
            Object.keys(be).forEach(function (e) {
                we.forEach(function (t) {
                    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
                });
            });
            var Ee = l(
                { menuitem: !0 },
                {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                }
            );
            function xe(e, t) {
                if (t) {
                    if (
                        Ee[e] &&
                        (null != t.children || null != t.dangerouslySetInnerHTML)
                    )
                        throw Error(o(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(o(60));
                        if (
                            "object" !== typeof t.dangerouslySetInnerHTML ||
                            !("__html" in t.dangerouslySetInnerHTML)
                        )
                            throw Error(o(61));
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(o(62));
                }
            }
            function _e(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0;
                }
            }
            function Ce(e) {
                return (
                    (e = e.target || e.srcElement || window).correspondingUseElement &&
                    (e = e.correspondingUseElement),
                    3 === e.nodeType ? e.parentNode : e
                );
            }
            var Pe = null,
                Ne = null,
                Te = null;
            function ze(e) {
                if ((e = el(e))) {
                    if ("function" !== typeof Pe) throw Error(o(280));
                    var t = e.stateNode;
                    t && ((t = nl(t)), Pe(e.stateNode, e.type, t));
                }
            }
            function Le(e) {
                Ne ? (Te ? Te.push(e) : (Te = [e])) : (Ne = e);
            }
            function Oe() {
                if (Ne) {
                    var e = Ne,
                        t = Te;
                    if (((Te = Ne = null), ze(e), t))
                        for (e = 0; e < t.length; e++) ze(t[e]);
                }
            }
            function Re(e, t) {
                return e(t);
            }
            function Me(e, t, n, r, l) {
                return e(t, n, r, l);
            }
            function Ie() { }
            var Fe = Re,
                De = !1,
                Ue = !1;
            function je() {
                (null === Ne && null === Te) || (Ie(), Oe());
            }
            function Ae(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = nl(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) ||
                            (r = !(
                                "button" === (e = e.type) ||
                                "input" === e ||
                                "select" === e ||
                                "textarea" === e
                            )),
                            (e = !r);
                        break e;
                    default:
                        e = !1;
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                return n;
            }
            var Ve = !1;
            if (f)
                try {
                    var Be = {};
                    Object.defineProperty(Be, "passive", {
                        get: function () {
                            Ve = !0;
                        },
                    }),
                        window.addEventListener("test", Be, Be),
                        window.removeEventListener("test", Be, Be);
                } catch (ve) {
                    Ve = !1;
                }
            function $e(e, t, n, r, l, a, o, u, i) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s);
                } catch (c) {
                    this.onError(c);
                }
            }
            var We = !1,
                He = null,
                Qe = !1,
                qe = null,
                Ke = {
                    onError: function (e) {
                        (We = !0), (He = e);
                    },
                };
            function Ye(e, t, n, r, l, a, o, u, i) {
                (We = !1), (He = null), $e.apply(Ke, arguments);
            }
            function Xe(e) {
                var t = e,
                    n = e;
                if (e.alternate) for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
                    } while (e);
                }
                return 3 === t.tag ? n : null;
            }
            function Ge(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (
                        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
                            null !== t)
                    )
                        return t.dehydrated;
                }
                return null;
            }
            function Je(e) {
                if (Xe(e) !== e) throw Error(o(188));
            }
            function Ze(e) {
                if (
                    !(e = (function (e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Xe(e))) throw Error(o(188));
                            return t !== e ? null : e;
                        }
                        for (var n = e, r = t; ;) {
                            var l = n.return;
                            if (null === l) break;
                            var a = l.alternate;
                            if (null === a) {
                                if (null !== (r = l.return)) {
                                    n = r;
                                    continue;
                                }
                                break;
                            }
                            if (l.child === a.child) {
                                for (a = l.child; a;) {
                                    if (a === n) return Je(l), e;
                                    if (a === r) return Je(l), t;
                                    a = a.sibling;
                                }
                                throw Error(o(188));
                            }
                            if (n.return !== r.return) (n = l), (r = a);
                            else {
                                for (var u = !1, i = l.child; i;) {
                                    if (i === n) {
                                        (u = !0), (n = l), (r = a);
                                        break;
                                    }
                                    if (i === r) {
                                        (u = !0), (r = l), (n = a);
                                        break;
                                    }
                                    i = i.sibling;
                                }
                                if (!u) {
                                    for (i = a.child; i;) {
                                        if (i === n) {
                                            (u = !0), (n = a), (r = l);
                                            break;
                                        }
                                        if (i === r) {
                                            (u = !0), (r = a), (n = l);
                                            break;
                                        }
                                        i = i.sibling;
                                    }
                                    if (!u) throw Error(o(189));
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190));
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t;
                    })(e))
                )
                    return null;
                for (var t = e; ;) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }
                return null;
            }
            function et(e, t) {
                for (var n = e.alternate; null !== t;) {
                    if (t === e || t === n) return !0;
                    t = t.return;
                }
                return !1;
            }
            var tt,
                nt,
                rt,
                lt,
                at = !1,
                ot = [],
                ut = null,
                it = null,
                st = null,
                ct = new Map(),
                ft = new Map(),
                dt = [],
                pt =
                    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                        " "
                    );
            function ht(e, t, n, r, l) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | n,
                    nativeEvent: l,
                    targetContainers: [r],
                };
            }
            function mt(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        ut = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        it = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        st = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        ct.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        ft.delete(t.pointerId);
                }
            }
            function vt(e, t, n, r, l, a) {
                return null === e || e.nativeEvent !== a
                    ? ((e = ht(t, n, r, l, a)),
                        null !== t && null !== (t = el(t)) && nt(t),
                        e)
                    : ((e.eventSystemFlags |= r),
                        (t = e.targetContainers),
                        null !== l && -1 === t.indexOf(l) && t.push(l),
                        e);
            }
            function yt(e) {
                var t = Zr(e.target);
                if (null !== t) {
                    var n = Xe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Ge(n)))
                                return (
                                    (e.blockedOn = t),
                                    void lt(e.lanePriority, function () {
                                        a.unstable_runWithPriority(e.priority, function () {
                                            rt(n);
                                        });
                                    })
                                );
                        } else if (3 === t && n.stateNode.hydrate)
                            return void (e.blockedOn =
                                3 === n.tag ? n.stateNode.containerInfo : null);
                }
                e.blockedOn = null;
            }
            function gt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = el(n)) && nt(t), (e.blockedOn = n), !1;
                    t.shift();
                }
                return !0;
            }
            function bt(e, t, n) {
                gt(e) && n.delete(t);
            }
            function wt() {
                for (at = !1; 0 < ot.length;) {
                    var e = ot[0];
                    if (null !== e.blockedOn) {
                        null !== (e = el(e.blockedOn)) && tt(e);
                        break;
                    }
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break;
                        }
                        t.shift();
                    }
                    null === e.blockedOn && ot.shift();
                }
                null !== ut && gt(ut) && (ut = null),
                    null !== it && gt(it) && (it = null),
                    null !== st && gt(st) && (st = null),
                    ct.forEach(bt),
                    ft.forEach(bt);
            }
            function kt(e, t) {
                e.blockedOn === t &&
                    ((e.blockedOn = null),
                        at ||
                        ((at = !0),
                            a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
            }
            function St(e) {
                function t(t) {
                    return kt(t, e);
                }
                if (0 < ot.length) {
                    kt(ot[0], e);
                    for (var n = 1; n < ot.length; n++) {
                        var r = ot[n];
                        r.blockedOn === e && (r.blockedOn = null);
                    }
                }
                for (
                    null !== ut && kt(ut, e),
                    null !== it && kt(it, e),
                    null !== st && kt(st, e),
                    ct.forEach(t),
                    ft.forEach(t),
                    n = 0;
                    n < dt.length;
                    n++
                )
                    (r = dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < dt.length && null === (n = dt[0]).blockedOn;)
                    yt(n), null === n.blockedOn && dt.shift();
            }
            function Et(e, t) {
                var n = {};
                return (
                    (n[e.toLowerCase()] = t.toLowerCase()),
                    (n["Webkit" + e] = "webkit" + t),
                    (n["Moz" + e] = "moz" + t),
                    n
                );
            }
            var xt = {
                animationend: Et("Animation", "AnimationEnd"),
                animationiteration: Et("Animation", "AnimationIteration"),
                animationstart: Et("Animation", "AnimationStart"),
                transitionend: Et("Transition", "TransitionEnd"),
            },
                _t = {},
                Ct = {};
            function Pt(e) {
                if (_t[e]) return _t[e];
                if (!xt[e]) return e;
                var t,
                    n = xt[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Ct) return (_t[e] = n[t]);
                return e;
            }
            f &&
                ((Ct = document.createElement("div").style),
                    "AnimationEvent" in window ||
                    (delete xt.animationend.animation,
                        delete xt.animationiteration.animation,
                        delete xt.animationstart.animation),
                    "TransitionEvent" in window || delete xt.transitionend.transition);
            var Nt = Pt("animationend"),
                Tt = Pt("animationiteration"),
                zt = Pt("animationstart"),
                Lt = Pt("transitionend"),
                Ot = new Map(),
                Rt = new Map(),
                Mt = [
                    "abort",
                    "abort",
                    Nt,
                    "animationEnd",
                    Tt,
                    "animationIteration",
                    zt,
                    "animationStart",
                    "canplay",
                    "canPlay",
                    "canplaythrough",
                    "canPlayThrough",
                    "durationchange",
                    "durationChange",
                    "emptied",
                    "emptied",
                    "encrypted",
                    "encrypted",
                    "ended",
                    "ended",
                    "error",
                    "error",
                    "gotpointercapture",
                    "gotPointerCapture",
                    "load",
                    "load",
                    "loadeddata",
                    "loadedData",
                    "loadedmetadata",
                    "loadedMetadata",
                    "loadstart",
                    "loadStart",
                    "lostpointercapture",
                    "lostPointerCapture",
                    "playing",
                    "playing",
                    "progress",
                    "progress",
                    "seeking",
                    "seeking",
                    "stalled",
                    "stalled",
                    "suspend",
                    "suspend",
                    "timeupdate",
                    "timeUpdate",
                    Lt,
                    "transitionEnd",
                    "waiting",
                    "waiting",
                ];
            function It(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        l = e[n + 1];
                    (l = "on" + (l[0].toUpperCase() + l.slice(1))),
                        Rt.set(r, t),
                        Ot.set(r, l),
                        s(l, [r]);
                }
            }
            (0, a.unstable_now)();
            var Ft = 8;
            function Dt(e) {
                if (0 !== (1 & e)) return (Ft = 15), 1;
                if (0 !== (2 & e)) return (Ft = 14), 2;
                if (0 !== (4 & e)) return (Ft = 13), 4;
                var t = 24 & e;
                return 0 !== t
                    ? ((Ft = 12), t)
                    : 0 !== (32 & e)
                        ? ((Ft = 11), 32)
                        : 0 !== (t = 192 & e)
                            ? ((Ft = 10), t)
                            : 0 !== (256 & e)
                                ? ((Ft = 9), 256)
                                : 0 !== (t = 3584 & e)
                                    ? ((Ft = 8), t)
                                    : 0 !== (4096 & e)
                                        ? ((Ft = 7), 4096)
                                        : 0 !== (t = 4186112 & e)
                                            ? ((Ft = 6), t)
                                            : 0 !== (t = 62914560 & e)
                                                ? ((Ft = 5), t)
                                                : 67108864 & e
                                                    ? ((Ft = 4), 67108864)
                                                    : 0 !== (134217728 & e)
                                                        ? ((Ft = 3), 134217728)
                                                        : 0 !== (t = 805306368 & e)
                                                            ? ((Ft = 2), t)
                                                            : 0 !== (1073741824 & e)
                                                                ? ((Ft = 1), 1073741824)
                                                                : ((Ft = 8), e);
            }
            function Ut(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return (Ft = 0);
                var r = 0,
                    l = 0,
                    a = e.expiredLanes,
                    o = e.suspendedLanes,
                    u = e.pingedLanes;
                if (0 !== a) (r = a), (l = Ft = 15);
                else if (0 !== (a = 134217727 & n)) {
                    var i = a & ~o;
                    0 !== i
                        ? ((r = Dt(i)), (l = Ft))
                        : 0 !== (u &= a) && ((r = Dt(u)), (l = Ft));
                } else
                    0 !== (a = n & ~o)
                        ? ((r = Dt(a)), (l = Ft))
                        : 0 !== u && ((r = Dt(u)), (l = Ft));
                if (0 === r) return 0;
                if (
                    ((r = n & (((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1)),
                        0 !== t && t !== r && 0 === (t & o))
                ) {
                    if ((Dt(t), l <= Ft)) return t;
                    Ft = l;
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;)
                        (l = 1 << (n = 31 - Wt(t))), (r |= e[n]), (t &= ~l);
                return r;
            }
            function jt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes)
                    ? e
                    : 1073741824 & e
                        ? 1073741824
                        : 0;
            }
            function At(e, t) {
                switch (e) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (e = Vt(24 & ~t)) ? At(10, t) : e;
                    case 10:
                        return 0 === (e = Vt(192 & ~t)) ? At(8, t) : e;
                    case 8:
                        return (
                            0 === (e = Vt(3584 & ~t)) &&
                            0 === (e = Vt(4186112 & ~t)) &&
                            (e = 512),
                            e
                        );
                    case 2:
                        return 0 === (t = Vt(805306368 & ~t)) && (t = 268435456), t;
                }
                throw Error(o(358, e));
            }
            function Vt(e) {
                return e & -e;
            }
            function Bt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t;
            }
            function $t(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                (e.suspendedLanes &= r),
                    (e.pingedLanes &= r),
                    ((e = e.eventTimes)[(t = 31 - Wt(t))] = n);
            }
            var Wt = Math.clz32
                ? Math.clz32
                : function (e) {
                    return 0 === e ? 32 : (31 - ((Ht(e) / Qt) | 0)) | 0;
                },
                Ht = Math.log,
                Qt = Math.LN2;
            var qt = a.unstable_UserBlockingPriority,
                Kt = a.unstable_runWithPriority,
                Yt = !0;
            function Xt(e, t, n, r) {
                De || Ie();
                var l = Jt,
                    a = De;
                De = !0;
                try {
                    Me(l, e, t, n, r);
                } finally {
                    (De = a) || je();
                }
            }
            function Gt(e, t, n, r) {
                Kt(qt, Jt.bind(null, e, t, n, r));
            }
            function Jt(e, t, n, r) {
                var l;
                if (Yt)
                    if ((l = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
                        (e = ht(null, e, t, n, r)), ot.push(e);
                    else {
                        var a = Zt(e, t, n, r);
                        if (null === a) l && mt(e, r);
                        else {
                            if (l) {
                                if (-1 < pt.indexOf(e))
                                    return (e = ht(a, e, t, n, r)), void ot.push(e);
                                if (
                                    (function (e, t, n, r, l) {
                                        switch (t) {
                                            case "focusin":
                                                return (ut = vt(ut, e, t, n, r, l)), !0;
                                            case "dragenter":
                                                return (it = vt(it, e, t, n, r, l)), !0;
                                            case "mouseover":
                                                return (st = vt(st, e, t, n, r, l)), !0;
                                            case "pointerover":
                                                var a = l.pointerId;
                                                return (
                                                    ct.set(a, vt(ct.get(a) || null, e, t, n, r, l)), !0
                                                );
                                            case "gotpointercapture":
                                                return (
                                                    (a = l.pointerId),
                                                    ft.set(a, vt(ft.get(a) || null, e, t, n, r, l)),
                                                    !0
                                                );
                                        }
                                        return !1;
                                    })(a, e, t, n, r)
                                )
                                    return;
                                mt(e, r);
                            }
                            Or(e, t, r, null, n);
                        }
                    }
            }
            function Zt(e, t, n, r) {
                var l = Ce(r);
                if (null !== (l = Zr(l))) {
                    var a = Xe(l);
                    if (null === a) l = null;
                    else {
                        var o = a.tag;
                        if (13 === o) {
                            if (null !== (l = Ge(a))) return l;
                            l = null;
                        } else if (3 === o) {
                            if (a.stateNode.hydrate)
                                return 3 === a.tag ? a.stateNode.containerInfo : null;
                            l = null;
                        } else a !== l && (l = null);
                    }
                }
                return Or(e, t, r, l, n), null;
            }
            var en = null,
                tn = null,
                nn = null;
            function rn() {
                if (nn) return nn;
                var e,
                    t,
                    n = tn,
                    r = n.length,
                    l = "value" in en ? en.value : en.textContent,
                    a = l.length;
                for (e = 0; e < r && n[e] === l[e]; e++);
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
                return (nn = l.slice(e, 1 < t ? 1 - t : void 0));
            }
            function ln(e) {
                var t = e.keyCode;
                return (
                    "charCode" in e
                        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                        : (e = t),
                    10 === e && (e = 13),
                    32 <= e || 13 === e ? e : 0
                );
            }
            function an() {
                return !0;
            }
            function on() {
                return !1;
            }
            function un(e) {
                function t(t, n, r, l, a) {
                    for (var o in ((this._reactName = t),
                        (this._targetInst = r),
                        (this.type = n),
                        (this.nativeEvent = l),
                        (this.target = a),
                        (this.currentTarget = null),
                        e))
                        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]));
                    return (
                        (this.isDefaultPrevented = (
                            null != l.defaultPrevented
                                ? l.defaultPrevented
                                : !1 === l.returnValue
                        )
                            ? an
                            : on),
                        (this.isPropagationStopped = on),
                        this
                    );
                }
                return (
                    l(t.prototype, {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e &&
                                (e.preventDefault
                                    ? e.preventDefault()
                                    : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                                    (this.isDefaultPrevented = an));
                        },
                        stopPropagation: function () {
                            var e = this.nativeEvent;
                            e &&
                                (e.stopPropagation
                                    ? e.stopPropagation()
                                    : "unknown" !== typeof e.cancelBubble &&
                                    (e.cancelBubble = !0),
                                    (this.isPropagationStopped = an));
                        },
                        persist: function () { },
                        isPersistent: an,
                    }),
                    t
                );
            }
            var sn,
                cn,
                fn,
                dn = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function (e) {
                        return e.timeStamp || Date.now();
                    },
                    defaultPrevented: 0,
                    isTrusted: 0,
                },
                pn = un(dn),
                hn = l({}, dn, { view: 0, detail: 0 }),
                mn = un(hn),
                vn = l({}, hn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: Pn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget
                            ? e.fromElement === e.srcElement
                                ? e.toElement
                                : e.fromElement
                            : e.relatedTarget;
                    },
                    movementX: function (e) {
                        return "movementX" in e
                            ? e.movementX
                            : (e !== fn &&
                                (fn && "mousemove" === e.type
                                    ? ((sn = e.screenX - fn.screenX),
                                        (cn = e.screenY - fn.screenY))
                                    : (cn = sn = 0),
                                    (fn = e)),
                                sn);
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : cn;
                    },
                }),
                yn = un(vn),
                gn = un(l({}, vn, { dataTransfer: 0 })),
                bn = un(l({}, hn, { relatedTarget: 0 })),
                wn = un(
                    l({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
                ),
                kn = un(
                    l({}, dn, {
                        clipboardData: function (e) {
                            return "clipboardData" in e
                                ? e.clipboardData
                                : window.clipboardData;
                        },
                    })
                ),
                Sn = un(l({}, dn, { data: 0 })),
                En = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified",
                },
                xn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta",
                },
                _n = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey",
                };
            function Cn(e) {
                var t = this.nativeEvent;
                return t.getModifierState
                    ? t.getModifierState(e)
                    : !!(e = _n[e]) && !!t[e];
            }
            function Pn() {
                return Cn;
            }
            var Nn = un(
                l({}, hn, {
                    key: function (e) {
                        if (e.key) {
                            var t = En[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type
                            ? 13 === (e = ln(e))
                                ? "Enter"
                                : String.fromCharCode(e)
                            : "keydown" === e.type || "keyup" === e.type
                                ? xn[e.keyCode] || "Unidentified"
                                : "";
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: Pn,
                    charCode: function (e) {
                        return "keypress" === e.type ? ln(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type
                            ? ln(e)
                            : "keydown" === e.type || "keyup" === e.type
                                ? e.keyCode
                                : 0;
                    },
                })
            ),
                Tn = un(
                    l({}, vn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0,
                    })
                ),
                zn = un(
                    l({}, hn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Pn,
                    })
                ),
                Ln = un(
                    l({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
                ),
                On = un(
                    l({}, vn, {
                        deltaX: function (e) {
                            return "deltaX" in e
                                ? e.deltaX
                                : "wheelDeltaX" in e
                                    ? -e.wheelDeltaX
                                    : 0;
                        },
                        deltaY: function (e) {
                            return "deltaY" in e
                                ? e.deltaY
                                : "wheelDeltaY" in e
                                    ? -e.wheelDeltaY
                                    : "wheelDelta" in e
                                        ? -e.wheelDelta
                                        : 0;
                        },
                        deltaZ: 0,
                        deltaMode: 0,
                    })
                ),
                Rn = [9, 13, 27, 32],
                Mn = f && "CompositionEvent" in window,
                In = null;
            f && "documentMode" in document && (In = document.documentMode);
            var Fn = f && "TextEvent" in window && !In,
                Dn = f && (!Mn || (In && 8 < In && 11 >= In)),
                Un = String.fromCharCode(32),
                jn = !1;
            function An(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Rn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1;
                }
            }
            function Vn(e) {
                return "object" === typeof (e = e.detail) && "data" in e
                    ? e.data
                    : null;
            }
            var Bn = !1;
            var $n = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
            };
            function Wn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!$n[e.type] : "textarea" === t;
            }
            function Hn(e, t, n, r) {
                Le(r),
                    0 < (t = Mr(t, "onChange")).length &&
                    ((n = new pn("onChange", "change", null, n, r)),
                        e.push({ event: n, listeners: t }));
            }
            var Qn = null,
                qn = null;
            function Kn(e) {
                Cr(e, 0);
            }
            function Yn(e) {
                if (G(tl(e))) return e;
            }
            function Xn(e, t) {
                if ("change" === e) return t;
            }
            var Gn = !1;
            if (f) {
                var Jn;
                if (f) {
                    var Zn = "oninput" in document;
                    if (!Zn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                            (Zn = "function" === typeof er.oninput);
                    }
                    Jn = Zn;
                } else Jn = !1;
                Gn = Jn && (!document.documentMode || 9 < document.documentMode);
            }
            function tr() {
                Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
            }
            function nr(e) {
                if ("value" === e.propertyName && Yn(qn)) {
                    var t = [];
                    if ((Hn(t, qn, e, Ce(e)), (e = Kn), De)) e(t);
                    else {
                        De = !0;
                        try {
                            Re(e, t);
                        } finally {
                            (De = !1), je();
                        }
                    }
                }
            }
            function rr(e, t, n) {
                "focusin" === e
                    ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
                    : "focusout" === e && tr();
            }
            function lr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Yn(qn);
            }
            function ar(e, t) {
                if ("click" === e) return Yn(t);
            }
            function or(e, t) {
                if ("input" === e || "change" === e) return Yn(t);
            }
            var ur =
                "function" === typeof Object.is
                    ? Object.is
                    : function (e, t) {
                        return (
                            (e === t && (0 !== e || 1 / e === 1 / t)) ||
                            (e !== e && t !== t)
                        );
                    },
                ir = Object.prototype.hasOwnProperty;
            function sr(e, t) {
                if (ur(e, t)) return !0;
                if (
                    "object" !== typeof e ||
                    null === e ||
                    "object" !== typeof t ||
                    null === t
                )
                    return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++)
                    if (!ir.call(t, n[r]) || !ur(e[n[r]], t[n[r]])) return !1;
                return !0;
            }
            function cr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e;
            }
            function fr(e, t) {
                var n,
                    r = cr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (((n = e + r.textContent.length), e <= t && n >= t))
                            return { node: r, offset: t - e };
                        e = n;
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e;
                            }
                            r = r.parentNode;
                        }
                        r = void 0;
                    }
                    r = cr(r);
                }
            }
            function dr(e, t) {
                return (
                    !(!e || !t) &&
                    (e === t ||
                        ((!e || 3 !== e.nodeType) &&
                            (t && 3 === t.nodeType
                                ? dr(e, t.parentNode)
                                : "contains" in e
                                    ? e.contains(t)
                                    : !!e.compareDocumentPosition &&
                                    !!(16 & e.compareDocumentPosition(t)))))
                );
            }
            function pr() {
                for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href;
                    } catch (r) {
                        n = !1;
                    }
                    if (!n) break;
                    t = J((e = t.contentWindow).document);
                }
                return t;
            }
            function hr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return (
                    t &&
                    (("input" === t &&
                        ("text" === e.type ||
                            "search" === e.type ||
                            "tel" === e.type ||
                            "url" === e.type ||
                            "password" === e.type)) ||
                        "textarea" === t ||
                        "true" === e.contentEditable)
                );
            }
            var mr = f && "documentMode" in document && 11 >= document.documentMode,
                vr = null,
                yr = null,
                gr = null,
                br = !1;
            function wr(e, t, n) {
                var r =
                    n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br ||
                    null == vr ||
                    vr !== J(r) ||
                    ("selectionStart" in (r = vr) && hr(r)
                        ? (r = { start: r.selectionStart, end: r.selectionEnd })
                        : (r = {
                            anchorNode: (r = (
                                (r.ownerDocument && r.ownerDocument.defaultView) ||
                                window
                            ).getSelection()).anchorNode,
                            anchorOffset: r.anchorOffset,
                            focusNode: r.focusNode,
                            focusOffset: r.focusOffset,
                        }),
                        (gr && sr(gr, r)) ||
                        ((gr = r),
                            0 < (r = Mr(yr, "onSelect")).length &&
                            ((t = new pn("onSelect", "select", null, t, n)),
                                e.push({ event: t, listeners: r }),
                                (t.target = vr))));
            }
            It(
                "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                    " "
                ),
                0
            ),
                It(
                    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                        " "
                    ),
                    1
                ),
                It(Mt, 2);
            for (
                var kr =
                    "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                        " "
                    ),
                Sr = 0;
                Sr < kr.length;
                Sr++
            )
                Rt.set(kr[Sr], 0);
            c("onMouseEnter", ["mouseout", "mouseover"]),
                c("onMouseLeave", ["mouseout", "mouseover"]),
                c("onPointerEnter", ["pointerout", "pointerover"]),
                c("onPointerLeave", ["pointerout", "pointerover"]),
                s(
                    "onChange",
                    "change click focusin focusout input keydown keyup selectionchange".split(
                        " "
                    )
                ),
                s(
                    "onSelect",
                    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                        " "
                    )
                ),
                s("onBeforeInput", [
                    "compositionend",
                    "keypress",
                    "textInput",
                    "paste",
                ]),
                s(
                    "onCompositionEnd",
                    "compositionend focusout keydown keypress keyup mousedown".split(" ")
                ),
                s(
                    "onCompositionStart",
                    "compositionstart focusout keydown keypress keyup mousedown".split(
                        " "
                    )
                ),
                s(
                    "onCompositionUpdate",
                    "compositionupdate focusout keydown keypress keyup mousedown".split(
                        " "
                    )
                );
            var Er =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
                xr = new Set(
                    "cancel close invalid load scroll toggle".split(" ").concat(Er)
                );
            function _r(e, t, n) {
                var r = e.type || "unknown-event";
                (e.currentTarget = n),
                    (function (e, t, n, r, l, a, u, i, s) {
                        if ((Ye.apply(this, arguments), We)) {
                            if (!We) throw Error(o(198));
                            var c = He;
                            (We = !1), (He = null), Qe || ((Qe = !0), (qe = c));
                        }
                    })(r, t, void 0, e),
                    (e.currentTarget = null);
            }
            function Cr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        l = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var u = r[o],
                                    i = u.instance,
                                    s = u.currentTarget;
                                if (((u = u.listener), i !== a && l.isPropagationStopped()))
                                    break e;
                                _r(l, u, s), (a = i);
                            }
                        else
                            for (o = 0; o < r.length; o++) {
                                if (
                                    ((i = (u = r[o]).instance),
                                        (s = u.currentTarget),
                                        (u = u.listener),
                                        i !== a && l.isPropagationStopped())
                                )
                                    break e;
                                _r(l, u, s), (a = i);
                            }
                    }
                }
                if (Qe) throw ((e = qe), (Qe = !1), (qe = null), e);
            }
            function Pr(e, t) {
                var n = rl(t),
                    r = e + "__bubble";
                n.has(r) || (Lr(t, e, 2, !1), n.add(r));
            }
            var Nr = "_reactListening" + Math.random().toString(36).slice(2);
            function Tr(e) {
                e[Nr] ||
                    ((e[Nr] = !0),
                        u.forEach(function (t) {
                            xr.has(t) || zr(t, !1, e, null), zr(t, !0, e, null);
                        }));
            }
            function zr(e, t, n, r) {
                var l =
                    4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                    a = n;
                if (
                    ("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument),
                        null !== r && !t && xr.has(e))
                ) {
                    if ("scroll" !== e) return;
                    (l |= 2), (a = r);
                }
                var o = rl(a),
                    u = e + "__" + (t ? "capture" : "bubble");
                o.has(u) || (t && (l |= 4), Lr(a, e, l, t), o.add(u));
            }
            function Lr(e, t, n, r) {
                var l = Rt.get(t);
                switch (void 0 === l ? 2 : l) {
                    case 0:
                        l = Xt;
                        break;
                    case 1:
                        l = Gt;
                        break;
                    default:
                        l = Jt;
                }
                (n = l.bind(null, t, n, e)),
                    (l = void 0),
                    !Ve ||
                    ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
                    (l = !0),
                    r
                        ? void 0 !== l
                            ? e.addEventListener(t, n, { capture: !0, passive: l })
                            : e.addEventListener(t, n, !0)
                        : void 0 !== l
                            ? e.addEventListener(t, n, { passive: l })
                            : e.addEventListener(t, n, !1);
            }
            function Or(e, t, n, r, l) {
                var a = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var u = r.stateNode.containerInfo;
                            if (u === l || (8 === u.nodeType && u.parentNode === l)) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var i = o.tag;
                                    if (
                                        (3 === i || 4 === i) &&
                                        ((i = o.stateNode.containerInfo) === l ||
                                            (8 === i.nodeType && i.parentNode === l))
                                    )
                                        return;
                                    o = o.return;
                                }
                            for (; null !== u;) {
                                if (null === (o = Zr(u))) return;
                                if (5 === (i = o.tag) || 6 === i) {
                                    r = a = o;
                                    continue e;
                                }
                                u = u.parentNode;
                            }
                        }
                        r = r.return;
                    }
                !(function (e, t, n) {
                    if (Ue) return e(t, n);
                    Ue = !0;
                    try {
                        Fe(e, t, n);
                    } finally {
                        (Ue = !1), je();
                    }
                })(function () {
                    var r = a,
                        l = Ce(n),
                        o = [];
                    e: {
                        var u = Ot.get(e);
                        if (void 0 !== u) {
                            var i = pn,
                                s = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === ln(n)) break e;
                                case "keydown":
                                case "keyup":
                                    i = Nn;
                                    break;
                                case "focusin":
                                    (s = "focus"), (i = bn);
                                    break;
                                case "focusout":
                                    (s = "blur"), (i = bn);
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    i = bn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    i = yn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    i = gn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    i = zn;
                                    break;
                                case Nt:
                                case Tt:
                                case zt:
                                    i = wn;
                                    break;
                                case Lt:
                                    i = Ln;
                                    break;
                                case "scroll":
                                    i = mn;
                                    break;
                                case "wheel":
                                    i = On;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    i = kn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    i = Tn;
                            }
                            var c = 0 !== (4 & t),
                                f = !c && "scroll" === e,
                                d = c ? (null !== u ? u + "Capture" : null) : u;
                            c = [];
                            for (var p, h = r; null !== h;) {
                                var m = (p = h).stateNode;
                                if (
                                    (5 === p.tag &&
                                        null !== m &&
                                        ((p = m),
                                            null !== d &&
                                            null != (m = Ae(h, d)) &&
                                            c.push(Rr(h, m, p))),
                                        f)
                                )
                                    break;
                                h = h.return;
                            }
                            0 < c.length &&
                                ((u = new i(u, s, null, n, l)),
                                    o.push({ event: u, listeners: c }));
                        }
                    }
                    if (0 === (7 & t)) {
                        if (
                            ((i = "mouseout" === e || "pointerout" === e),
                                (!(u = "mouseover" === e || "pointerover" === e) ||
                                    0 !== (16 & t) ||
                                    !(s = n.relatedTarget || n.fromElement) ||
                                    (!Zr(s) && !s[Gr])) &&
                                (i || u) &&
                                ((u =
                                    l.window === l
                                        ? l
                                        : (u = l.ownerDocument)
                                            ? u.defaultView || u.parentWindow
                                            : window),
                                    i
                                        ? ((i = r),
                                            null !==
                                            (s = (s = n.relatedTarget || n.toElement)
                                                ? Zr(s)
                                                : null) &&
                                            (s !== (f = Xe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                                            (s = null))
                                        : ((i = null), (s = r)),
                                    i !== s))
                        ) {
                            if (
                                ((c = yn),
                                    (m = "onMouseLeave"),
                                    (d = "onMouseEnter"),
                                    (h = "mouse"),
                                    ("pointerout" !== e && "pointerover" !== e) ||
                                    ((c = Tn),
                                        (m = "onPointerLeave"),
                                        (d = "onPointerEnter"),
                                        (h = "pointer")),
                                    (f = null == i ? u : tl(i)),
                                    (p = null == s ? u : tl(s)),
                                    ((u = new c(m, h + "leave", i, n, l)).target = f),
                                    (u.relatedTarget = p),
                                    (m = null),
                                    Zr(l) === r &&
                                    (((c = new c(d, h + "enter", s, n, l)).target = p),
                                        (c.relatedTarget = f),
                                        (m = c)),
                                    (f = m),
                                    i && s)
                            )
                                e: {
                                    for (d = s, h = 0, p = c = i; p; p = Ir(p)) h++;
                                    for (p = 0, m = d; m; m = Ir(m)) p++;
                                    for (; 0 < h - p;) (c = Ir(c)), h--;
                                    for (; 0 < p - h;) (d = Ir(d)), p--;
                                    for (; h--;) {
                                        if (c === d || (null !== d && c === d.alternate)) break e;
                                        (c = Ir(c)), (d = Ir(d));
                                    }
                                    c = null;
                                }
                            else c = null;
                            null !== i && Fr(o, u, i, c, !1),
                                null !== s && null !== f && Fr(o, f, s, c, !0);
                        }
                        if (
                            "select" ===
                            (i =
                                (u = r ? tl(r) : window).nodeName &&
                                u.nodeName.toLowerCase()) ||
                            ("input" === i && "file" === u.type)
                        )
                            var v = Xn;
                        else if (Wn(u))
                            if (Gn) v = or;
                            else {
                                v = lr;
                                var y = rr;
                            }
                        else
                            (i = u.nodeName) &&
                                "input" === i.toLowerCase() &&
                                ("checkbox" === u.type || "radio" === u.type) &&
                                (v = ar);
                        switch (
                        (v && (v = v(e, r))
                            ? Hn(o, v, n, l)
                            : (y && y(e, u, r),
                                "focusout" === e &&
                                (y = u._wrapperState) &&
                                y.controlled &&
                                "number" === u.type &&
                                le(u, "number", u.value)),
                            (y = r ? tl(r) : window),
                            e)
                        ) {
                            case "focusin":
                                (Wn(y) || "true" === y.contentEditable) &&
                                    ((vr = y), (yr = r), (gr = null));
                                break;
                            case "focusout":
                                gr = yr = vr = null;
                                break;
                            case "mousedown":
                                br = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                (br = !1), wr(o, n, l);
                                break;
                            case "selectionchange":
                                if (mr) break;
                            case "keydown":
                            case "keyup":
                                wr(o, n, l);
                        }
                        var g;
                        if (Mn)
                            e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e;
                                }
                                b = void 0;
                            }
                        else
                            Bn
                                ? An(e, n) && (b = "onCompositionEnd")
                                : "keydown" === e &&
                                229 === n.keyCode &&
                                (b = "onCompositionStart");
                        b &&
                            (Dn &&
                                "ko" !== n.locale &&
                                (Bn || "onCompositionStart" !== b
                                    ? "onCompositionEnd" === b && Bn && (g = rn())
                                    : ((tn = "value" in (en = l) ? en.value : en.textContent),
                                        (Bn = !0))),
                                0 < (y = Mr(r, b)).length &&
                                ((b = new Sn(b, e, null, n, l)),
                                    o.push({ event: b, listeners: y }),
                                    g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
                            (g = Fn
                                ? (function (e, t) {
                                    switch (e) {
                                        case "compositionend":
                                            return Vn(t);
                                        case "keypress":
                                            return 32 !== t.which ? null : ((jn = !0), Un);
                                        case "textInput":
                                            return (e = t.data) === Un && jn ? null : e;
                                        default:
                                            return null;
                                    }
                                })(e, n)
                                : (function (e, t) {
                                    if (Bn)
                                        return "compositionend" === e || (!Mn && An(e, t))
                                            ? ((e = rn()), (nn = tn = en = null), (Bn = !1), e)
                                            : null;
                                    switch (e) {
                                        case "paste":
                                            return null;
                                        case "keypress":
                                            if (
                                                !(t.ctrlKey || t.altKey || t.metaKey) ||
                                                (t.ctrlKey && t.altKey)
                                            ) {
                                                if (t.char && 1 < t.char.length) return t.char;
                                                if (t.which) return String.fromCharCode(t.which);
                                            }
                                            return null;
                                        case "compositionend":
                                            return Dn && "ko" !== t.locale ? null : t.data;
                                        default:
                                            return null;
                                    }
                                })(e, n)) &&
                            0 < (r = Mr(r, "onBeforeInput")).length &&
                            ((l = new Sn("onBeforeInput", "beforeinput", null, n, l)),
                                o.push({ event: l, listeners: r }),
                                (l.data = g));
                    }
                    Cr(o, t);
                });
            }
            function Rr(e, t, n) {
                return { instance: e, listener: t, currentTarget: n };
            }
            function Mr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var l = e,
                        a = l.stateNode;
                    5 === l.tag &&
                        null !== a &&
                        ((l = a),
                            null != (a = Ae(e, n)) && r.unshift(Rr(e, a, l)),
                            null != (a = Ae(e, t)) && r.push(Rr(e, a, l))),
                        (e = e.return);
                }
                return r;
            }
            function Ir(e) {
                if (null === e) return null;
                do {
                    e = e.return;
                } while (e && 5 !== e.tag);
                return e || null;
            }
            function Fr(e, t, n, r, l) {
                for (var a = t._reactName, o = []; null !== n && n !== r;) {
                    var u = n,
                        i = u.alternate,
                        s = u.stateNode;
                    if (null !== i && i === r) break;
                    5 === u.tag &&
                        null !== s &&
                        ((u = s),
                            l
                                ? null != (i = Ae(n, a)) && o.unshift(Rr(n, i, u))
                                : l || (null != (i = Ae(n, a)) && o.push(Rr(n, i, u)))),
                        (n = n.return);
                }
                0 !== o.length && e.push({ event: t, listeners: o });
            }
            function Dr() { }
            var Ur = null,
                jr = null;
            function Ar(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus;
                }
                return !1;
            }
            function Vr(e, t) {
                return (
                    "textarea" === e ||
                    "option" === e ||
                    "noscript" === e ||
                    "string" === typeof t.children ||
                    "number" === typeof t.children ||
                    ("object" === typeof t.dangerouslySetInnerHTML &&
                        null !== t.dangerouslySetInnerHTML &&
                        null != t.dangerouslySetInnerHTML.__html)
                );
            }
            var Br = "function" === typeof setTimeout ? setTimeout : void 0,
                $r = "function" === typeof clearTimeout ? clearTimeout : void 0;
            function Wr(e) {
                1 === e.nodeType
                    ? (e.textContent = "")
                    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
            }
            function Hr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                }
                return e;
            }
            function Qr(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--;
                        } else "/$" === n && t++;
                    }
                    e = e.previousSibling;
                }
                return null;
            }
            var qr = 0;
            var Kr = Math.random().toString(36).slice(2),
                Yr = "__reactFiber$" + Kr,
                Xr = "__reactProps$" + Kr,
                Gr = "__reactContainer$" + Kr,
                Jr = "__reactEvents$" + Kr;
            function Zr(e) {
                var t = e[Yr];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if ((t = n[Gr] || n[Yr])) {
                        if (
                            ((n = t.alternate),
                                null !== t.child || (null !== n && null !== n.child))
                        )
                            for (e = Qr(e); null !== e;) {
                                if ((n = e[Yr])) return n;
                                e = Qr(e);
                            }
                        return t;
                    }
                    n = (e = n).parentNode;
                }
                return null;
            }
            function el(e) {
                return !(e = e[Yr] || e[Gr]) ||
                    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
                    ? null
                    : e;
            }
            function tl(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(o(33));
            }
            function nl(e) {
                return e[Xr] || null;
            }
            function rl(e) {
                var t = e[Jr];
                return void 0 === t && (t = e[Jr] = new Set()), t;
            }
            var ll = [],
                al = -1;
            function ol(e) {
                return { current: e };
            }
            function ul(e) {
                0 > al || ((e.current = ll[al]), (ll[al] = null), al--);
            }
            function il(e, t) {
                al++, (ll[al] = e.current), (e.current = t);
            }
            var sl = {},
                cl = ol(sl),
                fl = ol(!1),
                dl = sl;
            function pl(e, t) {
                var n = e.type.contextTypes;
                if (!n) return sl;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var l,
                    a = {};
                for (l in n) a[l] = t[l];
                return (
                    r &&
                    (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        t),
                        (e.__reactInternalMemoizedMaskedChildContext = a)),
                    a
                );
            }
            function hl(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e;
            }
            function ml() {
                ul(fl), ul(cl);
            }
            function vl(e, t, n) {
                if (cl.current !== sl) throw Error(o(168));
                il(cl, t), il(fl, n);
            }
            function yl(e, t, n) {
                var r = e.stateNode;
                if (
                    ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
                )
                    return n;
                for (var a in (r = r.getChildContext()))
                    if (!(a in e)) throw Error(o(108, q(t) || "Unknown", a));
                return l({}, n, r);
            }
            function gl(e) {
                return (
                    (e =
                        ((e = e.stateNode) &&
                            e.__reactInternalMemoizedMergedChildContext) ||
                        sl),
                    (dl = cl.current),
                    il(cl, e),
                    il(fl, fl.current),
                    !0
                );
            }
            function bl(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(o(169));
                n
                    ? ((e = yl(e, t, dl)),
                        (r.__reactInternalMemoizedMergedChildContext = e),
                        ul(fl),
                        ul(cl),
                        il(cl, e))
                    : ul(fl),
                    il(fl, n);
            }
            var wl = null,
                kl = null,
                Sl = a.unstable_runWithPriority,
                El = a.unstable_scheduleCallback,
                xl = a.unstable_cancelCallback,
                _l = a.unstable_shouldYield,
                Cl = a.unstable_requestPaint,
                Pl = a.unstable_now,
                Nl = a.unstable_getCurrentPriorityLevel,
                Tl = a.unstable_ImmediatePriority,
                zl = a.unstable_UserBlockingPriority,
                Ll = a.unstable_NormalPriority,
                Ol = a.unstable_LowPriority,
                Rl = a.unstable_IdlePriority,
                Ml = {},
                Il = void 0 !== Cl ? Cl : function () { },
                Fl = null,
                Dl = null,
                Ul = !1,
                jl = Pl(),
                Al =
                    1e4 > jl
                        ? Pl
                        : function () {
                            return Pl() - jl;
                        };
            function Vl() {
                switch (Nl()) {
                    case Tl:
                        return 99;
                    case zl:
                        return 98;
                    case Ll:
                        return 97;
                    case Ol:
                        return 96;
                    case Rl:
                        return 95;
                    default:
                        throw Error(o(332));
                }
            }
            function Bl(e) {
                switch (e) {
                    case 99:
                        return Tl;
                    case 98:
                        return zl;
                    case 97:
                        return Ll;
                    case 96:
                        return Ol;
                    case 95:
                        return Rl;
                    default:
                        throw Error(o(332));
                }
            }
            function $l(e, t) {
                return (e = Bl(e)), Sl(e, t);
            }
            function Wl(e, t, n) {
                return (e = Bl(e)), El(e, t, n);
            }
            function Hl() {
                if (null !== Dl) {
                    var e = Dl;
                    (Dl = null), xl(e);
                }
                Ql();
            }
            function Ql() {
                if (!Ul && null !== Fl) {
                    Ul = !0;
                    var e = 0;
                    try {
                        var t = Fl;
                        $l(99, function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0);
                                } while (null !== n);
                            }
                        }),
                            (Fl = null);
                    } catch (n) {
                        throw (null !== Fl && (Fl = Fl.slice(e + 1)), El(Tl, Hl), n);
                    } finally {
                        Ul = !1;
                    }
                }
            }
            var ql = k.ReactCurrentBatchConfig;
            function Kl(e, t) {
                if (e && e.defaultProps) {
                    for (var n in ((t = l({}, t)), (e = e.defaultProps)))
                        void 0 === t[n] && (t[n] = e[n]);
                    return t;
                }
                return t;
            }
            var Yl = ol(null),
                Xl = null,
                Gl = null,
                Jl = null;
            function Zl() {
                Jl = Gl = Xl = null;
            }
            function ea(e) {
                var t = Yl.current;
                ul(Yl), (e.type._context._currentValue = t);
            }
            function ta(e, t) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t) break;
                        n.childLanes |= t;
                    } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
                    e = e.return;
                }
            }
            function na(e, t) {
                (Xl = e),
                    (Jl = Gl = null),
                    null !== (e = e.dependencies) &&
                    null !== e.firstContext &&
                    (0 !== (e.lanes & t) && (Mo = !0), (e.firstContext = null));
            }
            function ra(e, t) {
                if (Jl !== e && !1 !== t && 0 !== t)
                    if (
                        (("number" === typeof t && 1073741823 !== t) ||
                            ((Jl = e), (t = 1073741823)),
                            (t = { context: e, observedBits: t, next: null }),
                            null === Gl)
                    ) {
                        if (null === Xl) throw Error(o(308));
                        (Gl = t),
                            (Xl.dependencies = {
                                lanes: 0,
                                firstContext: t,
                                responders: null,
                            });
                    } else Gl = Gl.next = t;
                return e._currentValue;
            }
            var la = !1;
            function aa(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: { pending: null },
                    effects: null,
                };
            }
            function oa(e, t) {
                (e = e.updateQueue),
                    t.updateQueue === e &&
                    (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects,
                    });
            }
            function ua(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null,
                };
            }
            function ia(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
                        (e.pending = t);
                }
            }
            function sa(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var l = null,
                        a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null,
                            };
                            null === a ? (l = a = o) : (a = a.next = o), (n = n.next);
                        } while (null !== n);
                        null === a ? (l = a = t) : (a = a.next = t);
                    } else l = a = t;
                    return (
                        (n = {
                            baseState: r.baseState,
                            firstBaseUpdate: l,
                            lastBaseUpdate: a,
                            shared: r.shared,
                            effects: r.effects,
                        }),
                        void (e.updateQueue = n)
                    );
                }
                null === (e = n.lastBaseUpdate)
                    ? (n.firstBaseUpdate = t)
                    : (e.next = t),
                    (n.lastBaseUpdate = t);
            }
            function ca(e, t, n, r) {
                var a = e.updateQueue;
                la = !1;
                var o = a.firstBaseUpdate,
                    u = a.lastBaseUpdate,
                    i = a.shared.pending;
                if (null !== i) {
                    a.shared.pending = null;
                    var s = i,
                        c = s.next;
                    (s.next = null), null === u ? (o = c) : (u.next = c), (u = s);
                    var f = e.alternate;
                    if (null !== f) {
                        var d = (f = f.updateQueue).lastBaseUpdate;
                        d !== u &&
                            (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                                (f.lastBaseUpdate = s));
                    }
                }
                if (null !== o) {
                    for (d = a.baseState, u = 0, f = c = s = null; ;) {
                        i = o.lane;
                        var p = o.eventTime;
                        if ((r & i) === i) {
                            null !== f &&
                                (f = f.next =
                                {
                                    eventTime: p,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null,
                                });
                            e: {
                                var h = e,
                                    m = o;
                                switch (((i = t), (p = n), m.tag)) {
                                    case 1:
                                        if ("function" === typeof (h = m.payload)) {
                                            d = h.call(p, d, i);
                                            break e;
                                        }
                                        d = h;
                                        break e;
                                    case 3:
                                        h.flags = (-4097 & h.flags) | 64;
                                    case 0:
                                        if (
                                            null ===
                                            (i =
                                                "function" === typeof (h = m.payload)
                                                    ? h.call(p, d, i)
                                                    : h) ||
                                            void 0 === i
                                        )
                                            break e;
                                        d = l({}, d, i);
                                        break e;
                                    case 2:
                                        la = !0;
                                }
                            }
                            null !== o.callback &&
                                ((e.flags |= 32),
                                    null === (i = a.effects) ? (a.effects = [o]) : i.push(o));
                        } else
                            (p = {
                                eventTime: p,
                                lane: i,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null,
                            }),
                                null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                                (u |= i);
                        if (null === (o = o.next)) {
                            if (null === (i = a.shared.pending)) break;
                            (o = i.next),
                                (i.next = null),
                                (a.lastBaseUpdate = i),
                                (a.shared.pending = null);
                        }
                    }
                    null === f && (s = d),
                        (a.baseState = s),
                        (a.firstBaseUpdate = c),
                        (a.lastBaseUpdate = f),
                        (Uu |= u),
                        (e.lanes = u),
                        (e.memoizedState = d);
                }
            }
            function fa(e, t, n) {
                if (((e = t.effects), (t.effects = null), null !== e))
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            l = r.callback;
                        if (null !== l) {
                            if (((r.callback = null), (r = n), "function" !== typeof l))
                                throw Error(o(191, l));
                            l.call(r);
                        }
                    }
            }
            var da = new r.Component().refs;
            function pa(e, t, n, r) {
                (n =
                    null === (n = n(r, (t = e.memoizedState))) || void 0 === n
                        ? t
                        : l({}, t, n)),
                    (e.memoizedState = n),
                    0 === e.lanes && (e.updateQueue.baseState = n);
            }
            var ha = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Xe(e) === e;
                },
                enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = si(),
                        l = ci(e),
                        a = ua(r, l);
                    (a.payload = t),
                        void 0 !== n && null !== n && (a.callback = n),
                        ia(e, a),
                        fi(e, l, r);
                },
                enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = si(),
                        l = ci(e),
                        a = ua(r, l);
                    (a.tag = 1),
                        (a.payload = t),
                        void 0 !== n && null !== n && (a.callback = n),
                        ia(e, a),
                        fi(e, l, r);
                },
                enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = si(),
                        r = ci(e),
                        l = ua(n, r);
                    (l.tag = 2),
                        void 0 !== t && null !== t && (l.callback = t),
                        ia(e, l),
                        fi(e, r, n);
                },
            };
            function ma(e, t, n, r, l, a, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate
                    ? e.shouldComponentUpdate(r, a, o)
                    : !t.prototype ||
                    !t.prototype.isPureReactComponent ||
                    !sr(n, r) ||
                    !sr(l, a);
            }
            function va(e, t, n) {
                var r = !1,
                    l = sl,
                    a = t.contextType;
                return (
                    "object" === typeof a && null !== a
                        ? (a = ra(a))
                        : ((l = hl(t) ? dl : cl.current),
                            (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                                ? pl(e, l)
                                : sl)),
                    (t = new t(n, a)),
                    (e.memoizedState =
                        null !== t.state && void 0 !== t.state ? t.state : null),
                    (t.updater = ha),
                    (e.stateNode = t),
                    (t._reactInternals = e),
                    r &&
                    (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        l),
                        (e.__reactInternalMemoizedMaskedChildContext = a)),
                    t
                );
            }
            function ya(e, t, n, r) {
                (e = t.state),
                    "function" === typeof t.componentWillReceiveProps &&
                    t.componentWillReceiveProps(n, r),
                    "function" === typeof t.UNSAFE_componentWillReceiveProps &&
                    t.UNSAFE_componentWillReceiveProps(n, r),
                    t.state !== e && ha.enqueueReplaceState(t, t.state, null);
            }
            function ga(e, t, n, r) {
                var l = e.stateNode;
                (l.props = n), (l.state = e.memoizedState), (l.refs = da), aa(e);
                var a = t.contextType;
                "object" === typeof a && null !== a
                    ? (l.context = ra(a))
                    : ((a = hl(t) ? dl : cl.current), (l.context = pl(e, a))),
                    ca(e, n, l, r),
                    (l.state = e.memoizedState),
                    "function" === typeof (a = t.getDerivedStateFromProps) &&
                    (pa(e, t, a, n), (l.state = e.memoizedState)),
                    "function" === typeof t.getDerivedStateFromProps ||
                    "function" === typeof l.getSnapshotBeforeUpdate ||
                    ("function" !== typeof l.UNSAFE_componentWillMount &&
                        "function" !== typeof l.componentWillMount) ||
                    ((t = l.state),
                        "function" === typeof l.componentWillMount &&
                        l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                        l.UNSAFE_componentWillMount(),
                        t !== l.state && ha.enqueueReplaceState(l, l.state, null),
                        ca(e, n, l, r),
                        (l.state = e.memoizedState)),
                    "function" === typeof l.componentDidMount && (e.flags |= 4);
            }
            var ba = Array.isArray;
            function wa(e, t, n) {
                if (
                    null !== (e = n.ref) &&
                    "function" !== typeof e &&
                    "object" !== typeof e
                ) {
                    if (n._owner) {
                        if ((n = n._owner)) {
                            if (1 !== n.tag) throw Error(o(309));
                            var r = n.stateNode;
                        }
                        if (!r) throw Error(o(147, e));
                        var l = "" + e;
                        return null !== t &&
                            null !== t.ref &&
                            "function" === typeof t.ref &&
                            t.ref._stringRef === l
                            ? t.ref
                            : (((t = function (e) {
                                var t = r.refs;
                                t === da && (t = r.refs = {}),
                                    null === e ? delete t[l] : (t[l] = e);
                            })._stringRef = l),
                                t);
                    }
                    if ("string" !== typeof e) throw Error(o(284));
                    if (!n._owner) throw Error(o(290, e));
                }
                return e;
            }
            function ka(e, t) {
                if ("textarea" !== e.type)
                    throw Error(
                        o(
                            31,
                            "[object Object]" === Object.prototype.toString.call(t)
                                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                                : t
                        )
                    );
            }
            function Sa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r
                            ? ((r.nextEffect = n), (t.lastEffect = n))
                            : (t.firstEffect = t.lastEffect = n),
                            (n.nextEffect = null),
                            (n.flags = 8);
                    }
                }
                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), (r = r.sibling);
                    return null;
                }
                function r(e, t) {
                    for (e = new Map(); null !== t;)
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                            (t = t.sibling);
                    return e;
                }
                function l(e, t) {
                    return ((e = $i(e, t)).index = 0), (e.sibling = null), e;
                }
                function a(t, n, r) {
                    return (
                        (t.index = r),
                        e
                            ? null !== (r = t.alternate)
                                ? (r = r.index) < n
                                    ? ((t.flags = 2), n)
                                    : r
                                : ((t.flags = 2), n)
                            : n
                    );
                }
                function u(t) {
                    return e && null === t.alternate && (t.flags = 2), t;
                }
                function i(e, t, n, r) {
                    return null === t || 6 !== t.tag
                        ? (((t = qi(n, e.mode, r)).return = e), t)
                        : (((t = l(t, n)).return = e), t);
                }
                function s(e, t, n, r) {
                    return null !== t && t.elementType === n.type
                        ? (((r = l(t, n.props)).ref = wa(e, t, n)), (r.return = e), r)
                        : (((r = Wi(n.type, n.key, n.props, null, e.mode, r)).ref = wa(
                            e,
                            t,
                            n
                        )),
                            (r.return = e),
                            r);
                }
                function c(e, t, n, r) {
                    return null === t ||
                        4 !== t.tag ||
                        t.stateNode.containerInfo !== n.containerInfo ||
                        t.stateNode.implementation !== n.implementation
                        ? (((t = Ki(n, e.mode, r)).return = e), t)
                        : (((t = l(t, n.children || [])).return = e), t);
                }
                function f(e, t, n, r, a) {
                    return null === t || 7 !== t.tag
                        ? (((t = Hi(n, e.mode, r, a)).return = e), t)
                        : (((t = l(t, n)).return = e), t);
                }
                function d(e, t, n) {
                    if ("string" === typeof t || "number" === typeof t)
                        return ((t = qi("" + t, e.mode, n)).return = e), t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case S:
                                return (
                                    ((n = Wi(t.type, t.key, t.props, null, e.mode, n)).ref = wa(
                                        e,
                                        null,
                                        t
                                    )),
                                    (n.return = e),
                                    n
                                );
                            case E:
                                return ((t = Ki(t, e.mode, n)).return = e), t;
                        }
                        if (ba(t) || B(t))
                            return ((t = Hi(t, e.mode, n, null)).return = e), t;
                        ka(e, t);
                    }
                    return null;
                }
                function p(e, t, n, r) {
                    var l = null !== t ? t.key : null;
                    if ("string" === typeof n || "number" === typeof n)
                        return null !== l ? null : i(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case S:
                                return n.key === l
                                    ? n.type === x
                                        ? f(e, t, n.props.children, r, l)
                                        : s(e, t, n, r)
                                    : null;
                            case E:
                                return n.key === l ? c(e, t, n, r) : null;
                        }
                        if (ba(n) || B(n)) return null !== l ? null : f(e, t, n, r, null);
                        ka(e, n);
                    }
                    return null;
                }
                function h(e, t, n, r, l) {
                    if ("string" === typeof r || "number" === typeof r)
                        return i(t, (e = e.get(n) || null), "" + r, l);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case S:
                                return (
                                    (e = e.get(null === r.key ? n : r.key) || null),
                                    r.type === x
                                        ? f(t, e, r.props.children, l, r.key)
                                        : s(t, e, r, l)
                                );
                            case E:
                                return c(
                                    t,
                                    (e = e.get(null === r.key ? n : r.key) || null),
                                    r,
                                    l
                                );
                        }
                        if (ba(r) || B(r)) return f(t, (e = e.get(n) || null), r, l, null);
                        ka(t, r);
                    }
                    return null;
                }
                function m(l, o, u, i) {
                    for (
                        var s = null, c = null, f = o, m = (o = 0), v = null;
                        null !== f && m < u.length;
                        m++
                    ) {
                        f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
                        var y = p(l, f, u[m], i);
                        if (null === y) {
                            null === f && (f = v);
                            break;
                        }
                        e && f && null === y.alternate && t(l, f),
                            (o = a(y, o, m)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (f = v);
                    }
                    if (m === u.length) return n(l, f), s;
                    if (null === f) {
                        for (; m < u.length; m++)
                            null !== (f = d(l, u[m], i)) &&
                                ((o = a(f, o, m)),
                                    null === c ? (s = f) : (c.sibling = f),
                                    (c = f));
                        return s;
                    }
                    for (f = r(l, f); m < u.length; m++)
                        null !== (v = h(f, l, m, u[m], i)) &&
                            (e &&
                                null !== v.alternate &&
                                f.delete(null === v.key ? m : v.key),
                                (o = a(v, o, m)),
                                null === c ? (s = v) : (c.sibling = v),
                                (c = v));
                    return (
                        e &&
                        f.forEach(function (e) {
                            return t(l, e);
                        }),
                        s
                    );
                }
                function v(l, u, i, s) {
                    var c = B(i);
                    if ("function" !== typeof c) throw Error(o(150));
                    if (null == (i = c.call(i))) throw Error(o(151));
                    for (
                        var f = (c = null), m = u, v = (u = 0), y = null, g = i.next();
                        null !== m && !g.done;
                        v++, g = i.next()
                    ) {
                        m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
                        var b = p(l, m, g.value, s);
                        if (null === b) {
                            null === m && (m = y);
                            break;
                        }
                        e && m && null === b.alternate && t(l, m),
                            (u = a(b, u, v)),
                            null === f ? (c = b) : (f.sibling = b),
                            (f = b),
                            (m = y);
                    }
                    if (g.done) return n(l, m), c;
                    if (null === m) {
                        for (; !g.done; v++, g = i.next())
                            null !== (g = d(l, g.value, s)) &&
                                ((u = a(g, u, v)),
                                    null === f ? (c = g) : (f.sibling = g),
                                    (f = g));
                        return c;
                    }
                    for (m = r(l, m); !g.done; v++, g = i.next())
                        null !== (g = h(m, l, v, g.value, s)) &&
                            (e &&
                                null !== g.alternate &&
                                m.delete(null === g.key ? v : g.key),
                                (u = a(g, u, v)),
                                null === f ? (c = g) : (f.sibling = g),
                                (f = g));
                    return (
                        e &&
                        m.forEach(function (e) {
                            return t(l, e);
                        }),
                        c
                    );
                }
                return function (e, r, a, i) {
                    var s =
                        "object" === typeof a &&
                        null !== a &&
                        a.type === x &&
                        null === a.key;
                    s && (a = a.props.children);
                    var c = "object" === typeof a && null !== a;
                    if (c)
                        switch (a.$$typeof) {
                            case S:
                                e: {
                                    for (c = a.key, s = r; null !== s;) {
                                        if (s.key === c) {
                                            switch (s.tag) {
                                                case 7:
                                                    if (a.type === x) {
                                                        n(e, s.sibling),
                                                            ((r = l(s, a.props.children)).return = e),
                                                            (e = r);
                                                        break e;
                                                    }
                                                    break;
                                                default:
                                                    if (s.elementType === a.type) {
                                                        n(e, s.sibling),
                                                            ((r = l(s, a.props)).ref = wa(e, s, a)),
                                                            (r.return = e),
                                                            (e = r);
                                                        break e;
                                                    }
                                            }
                                            n(e, s);
                                            break;
                                        }
                                        t(e, s), (s = s.sibling);
                                    }
                                    a.type === x
                                        ? (((r = Hi(a.props.children, e.mode, i, a.key)).return =
                                            e),
                                            (e = r))
                                        : (((i = Wi(a.type, a.key, a.props, null, e.mode, i)).ref =
                                            wa(e, r, a)),
                                            (i.return = e),
                                            (e = i));
                                }
                                return u(e);
                            case E:
                                e: {
                                    for (s = a.key; null !== r;) {
                                        if (r.key === s) {
                                            if (
                                                4 === r.tag &&
                                                r.stateNode.containerInfo === a.containerInfo &&
                                                r.stateNode.implementation === a.implementation
                                            ) {
                                                n(e, r.sibling),
                                                    ((r = l(r, a.children || [])).return = e),
                                                    (e = r);
                                                break e;
                                            }
                                            n(e, r);
                                            break;
                                        }
                                        t(e, r), (r = r.sibling);
                                    }
                                    ((r = Ki(a, e.mode, i)).return = e), (e = r);
                                }
                                return u(e);
                        }
                    if ("string" === typeof a || "number" === typeof a)
                        return (
                            (a = "" + a),
                            null !== r && 6 === r.tag
                                ? (n(e, r.sibling), ((r = l(r, a)).return = e), (e = r))
                                : (n(e, r), ((r = qi(a, e.mode, i)).return = e), (e = r)),
                            u(e)
                        );
                    if (ba(a)) return m(e, r, a, i);
                    if (B(a)) return v(e, r, a, i);
                    if ((c && ka(e, a), "undefined" === typeof a && !s))
                        switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(o(152, q(e.type) || "Component"));
                        }
                    return n(e, r);
                };
            }
            var Ea = Sa(!0),
                xa = Sa(!1),
                _a = {},
                Ca = ol(_a),
                Pa = ol(_a),
                Na = ol(_a);
            function Ta(e) {
                if (e === _a) throw Error(o(174));
                return e;
            }
            function za(e, t) {
                switch ((il(Na, t), il(Pa, e), il(Ca, _a), (e = t.nodeType))) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
                        break;
                    default:
                        t = he(
                            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                            (e = e.tagName)
                        );
                }
                ul(Ca), il(Ca, t);
            }
            function La() {
                ul(Ca), ul(Pa), ul(Na);
            }
            function Oa(e) {
                Ta(Na.current);
                var t = Ta(Ca.current),
                    n = he(t, e.type);
                t !== n && (il(Pa, e), il(Ca, n));
            }
            function Ra(e) {
                Pa.current === e && (ul(Ca), ul(Pa));
            }
            var Ma = ol(0);
            function Ia(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (
                            null !== n &&
                            (null === (n = n.dehydrated) ||
                                "$?" === n.data ||
                                "$!" === n.data)
                        )
                            return t;
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.flags)) return t;
                    } else if (null !== t.child) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
                return null;
            }
            var Fa = null,
                Da = null,
                Ua = !1;
            function ja(e, t) {
                var n = Vi(5, null, null, 0);
                (n.elementType = "DELETED"),
                    (n.type = "DELETED"),
                    (n.stateNode = t),
                    (n.return = e),
                    (n.flags = 8),
                    null !== e.lastEffect
                        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
                        : (e.firstEffect = e.lastEffect = n);
            }
            function Aa(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return (
                            null !==
                            (t =
                                1 !== t.nodeType ||
                                    n.toLowerCase() !== t.nodeName.toLowerCase()
                                    ? null
                                    : t) && ((e.stateNode = t), !0)
                        );
                    case 6:
                        return (
                            null !==
                            (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                            ((e.stateNode = t), !0)
                        );
                    case 13:
                    default:
                        return !1;
                }
            }
            function Va(e) {
                if (Ua) {
                    var t = Da;
                    if (t) {
                        var n = t;
                        if (!Aa(e, t)) {
                            if (!(t = Hr(n.nextSibling)) || !Aa(e, t))
                                return (
                                    (e.flags = (-1025 & e.flags) | 2), (Ua = !1), void (Fa = e)
                                );
                            ja(Fa, n);
                        }
                        (Fa = e), (Da = Hr(t.firstChild));
                    } else (e.flags = (-1025 & e.flags) | 2), (Ua = !1), (Fa = e);
                }
            }
            function Ba(e) {
                for (
                    e = e.return;
                    null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

                )
                    e = e.return;
                Fa = e;
            }
            function $a(e) {
                if (e !== Fa) return !1;
                if (!Ua) return Ba(e), (Ua = !0), !1;
                var t = e.type;
                if (
                    5 !== e.tag ||
                    ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
                )
                    for (t = Da; t;) ja(e, t), (t = Hr(t.nextSibling));
                if ((Ba(e), 13 === e.tag)) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Da = Hr(e.nextSibling);
                                        break e;
                                    }
                                    t--;
                                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                            }
                            e = e.nextSibling;
                        }
                        Da = null;
                    }
                } else Da = Fa ? Hr(e.stateNode.nextSibling) : null;
                return !0;
            }
            function Wa() {
                (Da = Fa = null), (Ua = !1);
            }
            var Ha = [];
            function Qa() {
                for (var e = 0; e < Ha.length; e++)
                    Ha[e]._workInProgressVersionPrimary = null;
                Ha.length = 0;
            }
            var qa = k.ReactCurrentDispatcher,
                Ka = k.ReactCurrentBatchConfig,
                Ya = 0,
                Xa = null,
                Ga = null,
                Ja = null,
                Za = !1,
                eo = !1;
            function to() {
                throw Error(o(321));
            }
            function no(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!ur(e[n], t[n])) return !1;
                return !0;
            }
            function ro(e, t, n, r, l, a) {
                if (
                    ((Ya = a),
                        (Xa = t),
                        (t.memoizedState = null),
                        (t.updateQueue = null),
                        (t.lanes = 0),
                        (qa.current = null === e || null === e.memoizedState ? zo : Lo),
                        (e = n(r, l)),
                        eo)
                ) {
                    a = 0;
                    do {
                        if (((eo = !1), !(25 > a))) throw Error(o(301));
                        (a += 1),
                            (Ja = Ga = null),
                            (t.updateQueue = null),
                            (qa.current = Oo),
                            (e = n(r, l));
                    } while (eo);
                }
                if (
                    ((qa.current = To),
                        (t = null !== Ga && null !== Ga.next),
                        (Ya = 0),
                        (Ja = Ga = Xa = null),
                        (Za = !1),
                        t)
                )
                    throw Error(o(300));
                return e;
            }
            function lo() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null,
                };
                return (
                    null === Ja ? (Xa.memoizedState = Ja = e) : (Ja = Ja.next = e), Ja
                );
            }
            function ao() {
                if (null === Ga) {
                    var e = Xa.alternate;
                    e = null !== e ? e.memoizedState : null;
                } else e = Ga.next;
                var t = null === Ja ? Xa.memoizedState : Ja.next;
                if (null !== t) (Ja = t), (Ga = e);
                else {
                    if (null === e) throw Error(o(310));
                    (e = {
                        memoizedState: (Ga = e).memoizedState,
                        baseState: Ga.baseState,
                        baseQueue: Ga.baseQueue,
                        queue: Ga.queue,
                        next: null,
                    }),
                        null === Ja ? (Xa.memoizedState = Ja = e) : (Ja = Ja.next = e);
                }
                return Ja;
            }
            function oo(e, t) {
                return "function" === typeof t ? t(e) : t;
            }
            function uo(e) {
                var t = ao(),
                    n = t.queue;
                if (null === n) throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = Ga,
                    l = r.baseQueue,
                    a = n.pending;
                if (null !== a) {
                    if (null !== l) {
                        var u = l.next;
                        (l.next = a.next), (a.next = u);
                    }
                    (r.baseQueue = l = a), (n.pending = null);
                }
                if (null !== l) {
                    (l = l.next), (r = r.baseState);
                    var i = (u = a = null),
                        s = l;
                    do {
                        var c = s.lane;
                        if ((Ya & c) === c)
                            null !== i &&
                                (i = i.next =
                                {
                                    lane: 0,
                                    action: s.action,
                                    eagerReducer: s.eagerReducer,
                                    eagerState: s.eagerState,
                                    next: null,
                                }),
                                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
                        else {
                            var f = {
                                lane: c,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null,
                            };
                            null === i ? ((u = i = f), (a = r)) : (i = i.next = f),
                                (Xa.lanes |= c),
                                (Uu |= c);
                        }
                        s = s.next;
                    } while (null !== s && s !== l);
                    null === i ? (a = r) : (i.next = u),
                        ur(r, t.memoizedState) || (Mo = !0),
                        (t.memoizedState = r),
                        (t.baseState = a),
                        (t.baseQueue = i),
                        (n.lastRenderedState = r);
                }
                return [t.memoizedState, n.dispatch];
            }
            function io(e) {
                var t = ao(),
                    n = t.queue;
                if (null === n) throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    l = n.pending,
                    a = t.memoizedState;
                if (null !== l) {
                    n.pending = null;
                    var u = (l = l.next);
                    do {
                        (a = e(a, u.action)), (u = u.next);
                    } while (u !== l);
                    ur(a, t.memoizedState) || (Mo = !0),
                        (t.memoizedState = a),
                        null === t.baseQueue && (t.baseState = a),
                        (n.lastRenderedState = a);
                }
                return [a, r];
            }
            function so(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var l = t._workInProgressVersionPrimary;
                if (
                    (null !== l
                        ? (e = l === r)
                        : ((e = e.mutableReadLanes),
                            (e = (Ya & e) === e) &&
                            ((t._workInProgressVersionPrimary = r), Ha.push(t))),
                        e)
                )
                    return n(t._source);
                throw (Ha.push(t), Error(o(350)));
            }
            function co(e, t, n, r) {
                var l = zu;
                if (null === l) throw Error(o(349));
                var a = t._getVersion,
                    u = a(t._source),
                    i = qa.current,
                    s = i.useState(function () {
                        return so(l, t, n);
                    }),
                    c = s[1],
                    f = s[0];
                s = Ja;
                var d = e.memoizedState,
                    p = d.refs,
                    h = p.getSnapshot,
                    m = d.source;
                d = d.subscribe;
                var v = Xa;
                return (
                    (e.memoizedState = { refs: p, source: t, subscribe: r }),
                    i.useEffect(
                        function () {
                            (p.getSnapshot = n), (p.setSnapshot = c);
                            var e = a(t._source);
                            if (!ur(u, e)) {
                                (e = n(t._source)),
                                    ur(f, e) ||
                                    (c(e),
                                        (e = ci(v)),
                                        (l.mutableReadLanes |= e & l.pendingLanes)),
                                    (e = l.mutableReadLanes),
                                    (l.entangledLanes |= e);
                                for (var r = l.entanglements, o = e; 0 < o;) {
                                    var i = 31 - Wt(o),
                                        s = 1 << i;
                                    (r[i] |= e), (o &= ~s);
                                }
                            }
                        },
                        [n, t, r]
                    ),
                    i.useEffect(
                        function () {
                            return r(t._source, function () {
                                var e = p.getSnapshot,
                                    n = p.setSnapshot;
                                try {
                                    n(e(t._source));
                                    var r = ci(v);
                                    l.mutableReadLanes |= r & l.pendingLanes;
                                } catch (a) {
                                    n(function () {
                                        throw a;
                                    });
                                }
                            });
                        },
                        [t, r]
                    ),
                    (ur(h, n) && ur(m, t) && ur(d, r)) ||
                    (((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: oo,
                        lastRenderedState: f,
                    }).dispatch = c =
                        No.bind(null, Xa, e)),
                        (s.queue = e),
                        (s.baseQueue = null),
                        (f = so(l, t, n)),
                        (s.memoizedState = s.baseState = f)),
                    f
                );
            }
            function fo(e, t, n) {
                return co(ao(), e, t, n);
            }
            function po(e) {
                var t = lo();
                return (
                    "function" === typeof e && (e = e()),
                    (t.memoizedState = t.baseState = e),
                    (e = (e = t.queue =
                    {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: oo,
                        lastRenderedState: e,
                    }).dispatch =
                        No.bind(null, Xa, e)),
                    [t.memoizedState, e]
                );
            }
            function ho(e, t, n, r) {
                return (
                    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                    null === (t = Xa.updateQueue)
                        ? ((t = { lastEffect: null }),
                            (Xa.updateQueue = t),
                            (t.lastEffect = e.next = e))
                        : null === (n = t.lastEffect)
                            ? (t.lastEffect = e.next = e)
                            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
                    e
                );
            }
            function mo(e) {
                return (e = { current: e }), (lo().memoizedState = e);
            }
            function vo() {
                return ao().memoizedState;
            }
            function yo(e, t, n, r) {
                var l = lo();
                (Xa.flags |= e),
                    (l.memoizedState = ho(1 | t, n, void 0, void 0 === r ? null : r));
            }
            function go(e, t, n, r) {
                var l = ao();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== Ga) {
                    var o = Ga.memoizedState;
                    if (((a = o.destroy), null !== r && no(r, o.deps)))
                        return void ho(t, n, a, r);
                }
                (Xa.flags |= e), (l.memoizedState = ho(1 | t, n, a, r));
            }
            function bo(e, t) {
                return yo(516, 4, e, t);
            }
            function wo(e, t) {
                return go(516, 4, e, t);
            }
            function ko(e, t) {
                return go(4, 2, e, t);
            }
            function So(e, t) {
                return "function" === typeof t
                    ? ((e = e()),
                        t(e),
                        function () {
                            t(null);
                        })
                    : null !== t && void 0 !== t
                        ? ((e = e()),
                            (t.current = e),
                            function () {
                                t.current = null;
                            })
                        : void 0;
            }
            function Eo(e, t, n) {
                return (
                    (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                    go(4, 2, So.bind(null, t, e), n)
                );
            }
            function xo() { }
            function _o(e, t) {
                var n = ao();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && no(t, r[1])
                    ? r[0]
                    : ((n.memoizedState = [e, t]), e);
            }
            function Co(e, t) {
                var n = ao();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && no(t, r[1])
                    ? r[0]
                    : ((e = e()), (n.memoizedState = [e, t]), e);
            }
            function Po(e, t) {
                var n = Vl();
                $l(98 > n ? 98 : n, function () {
                    e(!0);
                }),
                    $l(97 < n ? 97 : n, function () {
                        var n = Ka.transition;
                        Ka.transition = 1;
                        try {
                            e(!1), t();
                        } finally {
                            Ka.transition = n;
                        }
                    });
            }
            function No(e, t, n) {
                var r = si(),
                    l = ci(e),
                    a = {
                        lane: l,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null,
                    },
                    o = t.pending;
                if (
                    (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                        (t.pending = a),
                        (o = e.alternate),
                        e === Xa || (null !== o && o === Xa))
                )
                    eo = Za = !0;
                else {
                    if (
                        0 === e.lanes &&
                        (null === o || 0 === o.lanes) &&
                        null !== (o = t.lastRenderedReducer)
                    )
                        try {
                            var u = t.lastRenderedState,
                                i = o(u, n);
                            if (((a.eagerReducer = o), (a.eagerState = i), ur(i, u))) return;
                        } catch (s) { }
                    fi(e, l, r);
                }
            }
            var To = {
                readContext: ra,
                useCallback: to,
                useContext: to,
                useEffect: to,
                useImperativeHandle: to,
                useLayoutEffect: to,
                useMemo: to,
                useReducer: to,
                useRef: to,
                useState: to,
                useDebugValue: to,
                useDeferredValue: to,
                useTransition: to,
                useMutableSource: to,
                useOpaqueIdentifier: to,
                unstable_isNewReconciler: !1,
            },
                zo = {
                    readContext: ra,
                    useCallback: function (e, t) {
                        return (lo().memoizedState = [e, void 0 === t ? null : t]), e;
                    },
                    useContext: ra,
                    useEffect: bo,
                    useImperativeHandle: function (e, t, n) {
                        return (
                            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                            yo(4, 2, So.bind(null, t, e), n)
                        );
                    },
                    useLayoutEffect: function (e, t) {
                        return yo(4, 2, e, t);
                    },
                    useMemo: function (e, t) {
                        var n = lo();
                        return (
                            (t = void 0 === t ? null : t),
                            (e = e()),
                            (n.memoizedState = [e, t]),
                            e
                        );
                    },
                    useReducer: function (e, t, n) {
                        var r = lo();
                        return (
                            (t = void 0 !== n ? n(t) : t),
                            (r.memoizedState = r.baseState = t),
                            (e = (e = r.queue =
                            {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t,
                            }).dispatch =
                                No.bind(null, Xa, e)),
                            [r.memoizedState, e]
                        );
                    },
                    useRef: mo,
                    useState: po,
                    useDebugValue: xo,
                    useDeferredValue: function (e) {
                        var t = po(e),
                            n = t[0],
                            r = t[1];
                        return (
                            bo(
                                function () {
                                    var t = Ka.transition;
                                    Ka.transition = 1;
                                    try {
                                        r(e);
                                    } finally {
                                        Ka.transition = t;
                                    }
                                },
                                [e]
                            ),
                            n
                        );
                    },
                    useTransition: function () {
                        var e = po(!1),
                            t = e[0];
                        return mo((e = Po.bind(null, e[1]))), [e, t];
                    },
                    useMutableSource: function (e, t, n) {
                        var r = lo();
                        return (
                            (r.memoizedState = {
                                refs: { getSnapshot: t, setSnapshot: null },
                                source: e,
                                subscribe: n,
                            }),
                            co(r, e, t, n)
                        );
                    },
                    useOpaqueIdentifier: function () {
                        if (Ua) {
                            var e = !1,
                                t = (function (e) {
                                    return { $$typeof: I, toString: e, valueOf: e };
                                })(function () {
                                    throw (
                                        (e || ((e = !0), n("r:" + (qr++).toString(36))),
                                            Error(o(355)))
                                    );
                                }),
                                n = po(t)[1];
                            return (
                                0 === (2 & Xa.mode) &&
                                ((Xa.flags |= 516),
                                    ho(
                                        5,
                                        function () {
                                            n("r:" + (qr++).toString(36));
                                        },
                                        void 0,
                                        null
                                    )),
                                t
                            );
                        }
                        return po((t = "r:" + (qr++).toString(36))), t;
                    },
                    unstable_isNewReconciler: !1,
                },
                Lo = {
                    readContext: ra,
                    useCallback: _o,
                    useContext: ra,
                    useEffect: wo,
                    useImperativeHandle: Eo,
                    useLayoutEffect: ko,
                    useMemo: Co,
                    useReducer: uo,
                    useRef: vo,
                    useState: function () {
                        return uo(oo);
                    },
                    useDebugValue: xo,
                    useDeferredValue: function (e) {
                        var t = uo(oo),
                            n = t[0],
                            r = t[1];
                        return (
                            wo(
                                function () {
                                    var t = Ka.transition;
                                    Ka.transition = 1;
                                    try {
                                        r(e);
                                    } finally {
                                        Ka.transition = t;
                                    }
                                },
                                [e]
                            ),
                            n
                        );
                    },
                    useTransition: function () {
                        var e = uo(oo)[0];
                        return [vo().current, e];
                    },
                    useMutableSource: fo,
                    useOpaqueIdentifier: function () {
                        return uo(oo)[0];
                    },
                    unstable_isNewReconciler: !1,
                },
                Oo = {
                    readContext: ra,
                    useCallback: _o,
                    useContext: ra,
                    useEffect: wo,
                    useImperativeHandle: Eo,
                    useLayoutEffect: ko,
                    useMemo: Co,
                    useReducer: io,
                    useRef: vo,
                    useState: function () {
                        return io(oo);
                    },
                    useDebugValue: xo,
                    useDeferredValue: function (e) {
                        var t = io(oo),
                            n = t[0],
                            r = t[1];
                        return (
                            wo(
                                function () {
                                    var t = Ka.transition;
                                    Ka.transition = 1;
                                    try {
                                        r(e);
                                    } finally {
                                        Ka.transition = t;
                                    }
                                },
                                [e]
                            ),
                            n
                        );
                    },
                    useTransition: function () {
                        var e = io(oo)[0];
                        return [vo().current, e];
                    },
                    useMutableSource: fo,
                    useOpaqueIdentifier: function () {
                        return io(oo)[0];
                    },
                    unstable_isNewReconciler: !1,
                },
                Ro = k.ReactCurrentOwner,
                Mo = !1;
            function Io(e, t, n, r) {
                t.child = null === e ? xa(t, null, n, r) : Ea(t, e.child, n, r);
            }
            function Fo(e, t, n, r, l) {
                n = n.render;
                var a = t.ref;
                return (
                    na(t, l),
                    (r = ro(e, t, n, r, a, l)),
                    null === e || Mo
                        ? ((t.flags |= 1), Io(e, t, r, l), t.child)
                        : ((t.updateQueue = e.updateQueue),
                            (t.flags &= -517),
                            (e.lanes &= ~l),
                            nu(e, t, l))
                );
            }
            function Do(e, t, n, r, l, a) {
                if (null === e) {
                    var o = n.type;
                    return "function" !== typeof o ||
                        Bi(o) ||
                        void 0 !== o.defaultProps ||
                        null !== n.compare ||
                        void 0 !== n.defaultProps
                        ? (((e = Wi(n.type, null, r, t, t.mode, a)).ref = t.ref),
                            (e.return = t),
                            (t.child = e))
                        : ((t.tag = 15), (t.type = o), Uo(e, t, o, r, l, a));
                }
                return (
                    (o = e.child),
                    0 === (l & a) &&
                        ((l = o.memoizedProps),
                            (n = null !== (n = n.compare) ? n : sr)(l, r) && e.ref === t.ref)
                        ? nu(e, t, a)
                        : ((t.flags |= 1),
                            ((e = $i(o, r)).ref = t.ref),
                            (e.return = t),
                            (t.child = e))
                );
            }
            function Uo(e, t, n, r, l, a) {
                if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
                    if (((Mo = !1), 0 === (a & l)))
                        return (t.lanes = e.lanes), nu(e, t, a);
                    0 !== (16384 & e.flags) && (Mo = !0);
                }
                return Vo(e, t, n, r, a);
            }
            function jo(e, t, n) {
                var r = t.pendingProps,
                    l = r.children,
                    a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                    if (0 === (4 & t.mode))
                        (t.memoizedState = { baseLanes: 0 }), bi(t, n);
                    else {
                        if (0 === (1073741824 & n))
                            return (
                                (e = null !== a ? a.baseLanes | n : n),
                                (t.lanes = t.childLanes = 1073741824),
                                (t.memoizedState = { baseLanes: e }),
                                bi(t, e),
                                null
                            );
                        (t.memoizedState = { baseLanes: 0 }),
                            bi(t, null !== a ? a.baseLanes : n);
                    }
                else
                    null !== a
                        ? ((r = a.baseLanes | n), (t.memoizedState = null))
                        : (r = n),
                        bi(t, r);
                return Io(e, t, l, n), t.child;
            }
            function Ao(e, t) {
                var n = t.ref;
                ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
                    (t.flags |= 128);
            }
            function Vo(e, t, n, r, l) {
                var a = hl(n) ? dl : cl.current;
                return (
                    (a = pl(t, a)),
                    na(t, l),
                    (n = ro(e, t, n, r, a, l)),
                    null === e || Mo
                        ? ((t.flags |= 1), Io(e, t, n, l), t.child)
                        : ((t.updateQueue = e.updateQueue),
                            (t.flags &= -517),
                            (e.lanes &= ~l),
                            nu(e, t, l))
                );
            }
            function Bo(e, t, n, r, l) {
                if (hl(n)) {
                    var a = !0;
                    gl(t);
                } else a = !1;
                if ((na(t, l), null === t.stateNode))
                    null !== e &&
                        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                        va(t, n, r),
                        ga(t, n, r, l),
                        (r = !0);
                else if (null === e) {
                    var o = t.stateNode,
                        u = t.memoizedProps;
                    o.props = u;
                    var i = o.context,
                        s = n.contextType;
                    "object" === typeof s && null !== s
                        ? (s = ra(s))
                        : (s = pl(t, (s = hl(n) ? dl : cl.current)));
                    var c = n.getDerivedStateFromProps,
                        f =
                            "function" === typeof c ||
                            "function" === typeof o.getSnapshotBeforeUpdate;
                    f ||
                        ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                            "function" !== typeof o.componentWillReceiveProps) ||
                        ((u !== r || i !== s) && ya(t, o, r, s)),
                        (la = !1);
                    var d = t.memoizedState;
                    (o.state = d),
                        ca(t, r, o, l),
                        (i = t.memoizedState),
                        u !== r || d !== i || fl.current || la
                            ? ("function" === typeof c &&
                                (pa(t, n, c, r), (i = t.memoizedState)),
                                (u = la || ma(t, n, u, r, d, i, s))
                                    ? (f ||
                                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                                            "function" !== typeof o.componentWillMount) ||
                                        ("function" === typeof o.componentWillMount &&
                                            o.componentWillMount(),
                                            "function" === typeof o.UNSAFE_componentWillMount &&
                                            o.UNSAFE_componentWillMount()),
                                        "function" === typeof o.componentDidMount && (t.flags |= 4))
                                    : ("function" === typeof o.componentDidMount &&
                                        (t.flags |= 4),
                                        (t.memoizedProps = r),
                                        (t.memoizedState = i)),
                                (o.props = r),
                                (o.state = i),
                                (o.context = s),
                                (r = u))
                            : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                                (r = !1));
                } else {
                    (o = t.stateNode),
                        oa(e, t),
                        (u = t.memoizedProps),
                        (s = t.type === t.elementType ? u : Kl(t.type, u)),
                        (o.props = s),
                        (f = t.pendingProps),
                        (d = o.context),
                        "object" === typeof (i = n.contextType) && null !== i
                            ? (i = ra(i))
                            : (i = pl(t, (i = hl(n) ? dl : cl.current)));
                    var p = n.getDerivedStateFromProps;
                    (c =
                        "function" === typeof p ||
                        "function" === typeof o.getSnapshotBeforeUpdate) ||
                        ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                            "function" !== typeof o.componentWillReceiveProps) ||
                        ((u !== f || d !== i) && ya(t, o, r, i)),
                        (la = !1),
                        (d = t.memoizedState),
                        (o.state = d),
                        ca(t, r, o, l);
                    var h = t.memoizedState;
                    u !== f || d !== h || fl.current || la
                        ? ("function" === typeof p &&
                            (pa(t, n, p, r), (h = t.memoizedState)),
                            (s = la || ma(t, n, s, r, d, h, i))
                                ? (c ||
                                    ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                                        "function" !== typeof o.componentWillUpdate) ||
                                    ("function" === typeof o.componentWillUpdate &&
                                        o.componentWillUpdate(r, h, i),
                                        "function" === typeof o.UNSAFE_componentWillUpdate &&
                                        o.UNSAFE_componentWillUpdate(r, h, i)),
                                    "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                                    "function" === typeof o.getSnapshotBeforeUpdate &&
                                    (t.flags |= 256))
                                : ("function" !== typeof o.componentDidUpdate ||
                                    (u === e.memoizedProps && d === e.memoizedState) ||
                                    (t.flags |= 4),
                                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                                    (u === e.memoizedProps && d === e.memoizedState) ||
                                    (t.flags |= 256),
                                    (t.memoizedProps = r),
                                    (t.memoizedState = h)),
                            (o.props = r),
                            (o.state = h),
                            (o.context = i),
                            (r = s))
                        : ("function" !== typeof o.componentDidUpdate ||
                            (u === e.memoizedProps && d === e.memoizedState) ||
                            (t.flags |= 4),
                            "function" !== typeof o.getSnapshotBeforeUpdate ||
                            (u === e.memoizedProps && d === e.memoizedState) ||
                            (t.flags |= 256),
                            (r = !1));
                }
                return $o(e, t, n, r, a, l);
            }
            function $o(e, t, n, r, l, a) {
                Ao(e, t);
                var o = 0 !== (64 & t.flags);
                if (!r && !o) return l && bl(t, n, !1), nu(e, t, a);
                (r = t.stateNode), (Ro.current = t);
                var u =
                    o && "function" !== typeof n.getDerivedStateFromError
                        ? null
                        : r.render();
                return (
                    (t.flags |= 1),
                    null !== e && o
                        ? ((t.child = Ea(t, e.child, null, a)),
                            (t.child = Ea(t, null, u, a)))
                        : Io(e, t, u, a),
                    (t.memoizedState = r.state),
                    l && bl(t, n, !0),
                    t.child
                );
            }
            function Wo(e) {
                var t = e.stateNode;
                t.pendingContext
                    ? vl(0, t.pendingContext, t.pendingContext !== t.context)
                    : t.context && vl(0, t.context, !1),
                    za(e, t.containerInfo);
            }
            var Ho,
                Qo,
                qo,
                Ko = { dehydrated: null, retryLane: 0 };
            function Yo(e, t, n) {
                var r,
                    l = t.pendingProps,
                    a = Ma.current,
                    o = !1;
                return (
                    (r = 0 !== (64 & t.flags)) ||
                    (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
                    r
                        ? ((o = !0), (t.flags &= -65))
                        : (null !== e && null === e.memoizedState) ||
                        void 0 === l.fallback ||
                        !0 === l.unstable_avoidThisFallback ||
                        (a |= 1),
                    il(Ma, 1 & a),
                    null === e
                        ? (void 0 !== l.fallback && Va(t),
                            (e = l.children),
                            (a = l.fallback),
                            o
                                ? ((e = Xo(t, e, a, n)),
                                    (t.child.memoizedState = { baseLanes: n }),
                                    (t.memoizedState = Ko),
                                    e)
                                : "number" === typeof l.unstable_expectedLoadTime
                                    ? ((e = Xo(t, e, a, n)),
                                        (t.child.memoizedState = { baseLanes: n }),
                                        (t.memoizedState = Ko),
                                        (t.lanes = 33554432),
                                        e)
                                    : (((n = Qi(
                                        { mode: "visible", children: e },
                                        t.mode,
                                        n,
                                        null
                                    )).return = t),
                                        (t.child = n)))
                        : (e.memoizedState,
                            o
                                ? ((l = Jo(e, t, l.children, l.fallback, n)),
                                    (o = t.child),
                                    (a = e.child.memoizedState),
                                    (o.memoizedState =
                                        null === a
                                            ? { baseLanes: n }
                                            : { baseLanes: a.baseLanes | n }),
                                    (o.childLanes = e.childLanes & ~n),
                                    (t.memoizedState = Ko),
                                    l)
                                : ((n = Go(e, t, l.children, n)), (t.memoizedState = null), n))
                );
            }
            function Xo(e, t, n, r) {
                var l = e.mode,
                    a = e.child;
                return (
                    (t = { mode: "hidden", children: t }),
                    0 === (2 & l) && null !== a
                        ? ((a.childLanes = 0), (a.pendingProps = t))
                        : (a = Qi(t, l, 0, null)),
                    (n = Hi(n, l, r, null)),
                    (a.return = e),
                    (n.return = e),
                    (a.sibling = n),
                    (e.child = a),
                    n
                );
            }
            function Go(e, t, n, r) {
                var l = e.child;
                return (
                    (e = l.sibling),
                    (n = $i(l, { mode: "visible", children: n })),
                    0 === (2 & t.mode) && (n.lanes = r),
                    (n.return = t),
                    (n.sibling = null),
                    null !== e &&
                    ((e.nextEffect = null),
                        (e.flags = 8),
                        (t.firstEffect = t.lastEffect = e)),
                    (t.child = n)
                );
            }
            function Jo(e, t, n, r, l) {
                var a = t.mode,
                    o = e.child;
                e = o.sibling;
                var u = { mode: "hidden", children: n };
                return (
                    0 === (2 & a) && t.child !== o
                        ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = u),
                            null !== (o = n.lastEffect)
                                ? ((t.firstEffect = n.firstEffect),
                                    (t.lastEffect = o),
                                    (o.nextEffect = null))
                                : (t.firstEffect = t.lastEffect = null))
                        : (n = $i(o, u)),
                    null !== e ? (r = $i(e, r)) : ((r = Hi(r, a, l, null)).flags |= 2),
                    (r.return = t),
                    (n.return = t),
                    (n.sibling = r),
                    (t.child = n),
                    r
                );
            }
            function Zo(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), ta(e.return, t);
            }
            function eu(e, t, n, r, l, a) {
                var o = e.memoizedState;
                null === o
                    ? (e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: l,
                        lastEffect: a,
                    })
                    : ((o.isBackwards = t),
                        (o.rendering = null),
                        (o.renderingStartTime = 0),
                        (o.last = r),
                        (o.tail = n),
                        (o.tailMode = l),
                        (o.lastEffect = a));
            }
            function tu(e, t, n) {
                var r = t.pendingProps,
                    l = r.revealOrder,
                    a = r.tail;
                if ((Io(e, t, r.children, n), 0 !== (2 & (r = Ma.current))))
                    (r = (1 & r) | 2), (t.flags |= 64);
                else {
                    if (null !== e && 0 !== (64 & e.flags))
                        e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Zo(e, n);
                            else if (19 === e.tag) Zo(e, n);
                            else if (null !== e.child) {
                                (e.child.return = e), (e = e.child);
                                continue;
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return;
                            }
                            (e.sibling.return = e.return), (e = e.sibling);
                        }
                    r &= 1;
                }
                if ((il(Ma, r), 0 === (2 & t.mode))) t.memoizedState = null;
                else
                    switch (l) {
                        case "forwards":
                            for (n = t.child, l = null; null !== n;)
                                null !== (e = n.alternate) && null === Ia(e) && (l = n),
                                    (n = n.sibling);
                            null === (n = l)
                                ? ((l = t.child), (t.child = null))
                                : ((l = n.sibling), (n.sibling = null)),
                                eu(t, !1, l, n, a, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, l = t.child, t.child = null; null !== l;) {
                                if (null !== (e = l.alternate) && null === Ia(e)) {
                                    t.child = l;
                                    break;
                                }
                                (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                            }
                            eu(t, !0, n, null, a, t.lastEffect);
                            break;
                        case "together":
                            eu(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                return t.child;
            }
            function nu(e, t, n) {
                if (
                    (null !== e && (t.dependencies = e.dependencies),
                        (Uu |= t.lanes),
                        0 !== (n & t.childLanes))
                ) {
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (
                            n = $i((e = t.child), e.pendingProps), t.child = n, n.return = t;
                            null !== e.sibling;

                        )
                            (e = e.sibling),
                                ((n = n.sibling = $i(e, e.pendingProps)).return = t);
                        n.sibling = null;
                    }
                    return t.child;
                }
                return null;
            }
            function ru(e, t) {
                if (!Ua)
                    switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;)
                                null !== t.alternate && (n = t), (t = t.sibling);
                            null === n ? (e.tail = null) : (n.sibling = null);
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;)
                                null !== n.alternate && (r = n), (n = n.sibling);
                            null === r
                                ? t || null === e.tail
                                    ? (e.tail = null)
                                    : (e.tail.sibling = null)
                                : (r.sibling = null);
                    }
            }
            function lu(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                        return hl(t.type) && ml(), null;
                    case 3:
                        return (
                            La(),
                            ul(fl),
                            ul(cl),
                            Qa(),
                            (r = t.stateNode).pendingContext &&
                            ((r.context = r.pendingContext), (r.pendingContext = null)),
                            (null !== e && null !== e.child) ||
                            ($a(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                            null
                        );
                    case 5:
                        Ra(t);
                        var a = Ta(Na.current);
                        if (((n = t.type), null !== e && null != t.stateNode))
                            Qo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(o(166));
                                return null;
                            }
                            if (((e = Ta(Ca.current)), $a(t))) {
                                (r = t.stateNode), (n = t.type);
                                var u = t.memoizedProps;
                                switch (((r[Yr] = t), (r[Xr] = u), n)) {
                                    case "dialog":
                                        Pr("cancel", r), Pr("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Pr("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < Er.length; e++) Pr(Er[e], r);
                                        break;
                                    case "source":
                                        Pr("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Pr("error", r), Pr("load", r);
                                        break;
                                    case "details":
                                        Pr("toggle", r);
                                        break;
                                    case "input":
                                        ee(r, u), Pr("invalid", r);
                                        break;
                                    case "select":
                                        (r._wrapperState = { wasMultiple: !!u.multiple }),
                                            Pr("invalid", r);
                                        break;
                                    case "textarea":
                                        ie(r, u), Pr("invalid", r);
                                }
                                for (var s in (xe(n, u), (e = null), u))
                                    u.hasOwnProperty(s) &&
                                        ((a = u[s]),
                                            "children" === s
                                                ? "string" === typeof a
                                                    ? r.textContent !== a && (e = ["children", a])
                                                    : "number" === typeof a &&
                                                    r.textContent !== "" + a &&
                                                    (e = ["children", "" + a])
                                                : i.hasOwnProperty(s) &&
                                                null != a &&
                                                "onScroll" === s &&
                                                Pr("scroll", r));
                                switch (n) {
                                    case "input":
                                        X(r), re(r, u, !0);
                                        break;
                                    case "textarea":
                                        X(r), ce(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof u.onClick && (r.onclick = Dr);
                                }
                                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                            } else {
                                switch (
                                ((s = 9 === a.nodeType ? a : a.ownerDocument),
                                    e === fe && (e = pe(n)),
                                    e === fe
                                        ? "script" === n
                                            ? (((e = s.createElement("div")).innerHTML =
                                                "<script></script>"),
                                                (e = e.removeChild(e.firstChild)))
                                            : "string" === typeof r.is
                                                ? (e = s.createElement(n, { is: r.is }))
                                                : ((e = s.createElement(n)),
                                                    "select" === n &&
                                                    ((s = e),
                                                        r.multiple
                                                            ? (s.multiple = !0)
                                                            : r.size && (s.size = r.size)))
                                        : (e = s.createElementNS(e, n)),
                                    (e[Yr] = t),
                                    (e[Xr] = r),
                                    Ho(e, t),
                                    (t.stateNode = e),
                                    (s = _e(n, r)),
                                    n)
                                ) {
                                    case "dialog":
                                        Pr("cancel", e), Pr("close", e), (a = r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Pr("load", e), (a = r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (a = 0; a < Er.length; a++) Pr(Er[a], e);
                                        a = r;
                                        break;
                                    case "source":
                                        Pr("error", e), (a = r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Pr("error", e), Pr("load", e), (a = r);
                                        break;
                                    case "details":
                                        Pr("toggle", e), (a = r);
                                        break;
                                    case "input":
                                        ee(e, r), (a = Z(e, r)), Pr("invalid", e);
                                        break;
                                    case "option":
                                        a = ae(e, r);
                                        break;
                                    case "select":
                                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                                            (a = l({}, r, { value: void 0 })),
                                            Pr("invalid", e);
                                        break;
                                    case "textarea":
                                        ie(e, r), (a = ue(e, r)), Pr("invalid", e);
                                        break;
                                    default:
                                        a = r;
                                }
                                xe(n, a);
                                var c = a;
                                for (u in c)
                                    if (c.hasOwnProperty(u)) {
                                        var f = c[u];
                                        "style" === u
                                            ? Se(e, f)
                                            : "dangerouslySetInnerHTML" === u
                                                ? null != (f = f ? f.__html : void 0) && ye(e, f)
                                                : "children" === u
                                                    ? "string" === typeof f
                                                        ? ("textarea" !== n || "" !== f) && ge(e, f)
                                                        : "number" === typeof f && ge(e, "" + f)
                                                    : "suppressContentEditableWarning" !== u &&
                                                    "suppressHydrationWarning" !== u &&
                                                    "autoFocus" !== u &&
                                                    (i.hasOwnProperty(u)
                                                        ? null != f && "onScroll" === u && Pr("scroll", e)
                                                        : null != f && w(e, u, f, s));
                                    }
                                switch (n) {
                                    case "input":
                                        X(e), re(e, r, !1);
                                        break;
                                    case "textarea":
                                        X(e), ce(e);
                                        break;
                                    case "option":
                                        null != r.value && e.setAttribute("value", "" + K(r.value));
                                        break;
                                    case "select":
                                        (e.multiple = !!r.multiple),
                                            null != (u = r.value)
                                                ? oe(e, !!r.multiple, u, !1)
                                                : null != r.defaultValue &&
                                                oe(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" === typeof a.onClick && (e.onclick = Dr);
                                }
                                Ar(n, r) && (t.flags |= 4);
                            }
                            null !== t.ref && (t.flags |= 128);
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) qo(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode)
                                throw Error(o(166));
                            (n = Ta(Na.current)),
                                Ta(Ca.current),
                                $a(t)
                                    ? ((r = t.stateNode),
                                        (n = t.memoizedProps),
                                        (r[Yr] = t),
                                        r.nodeValue !== n && (t.flags |= 4))
                                    : (((r = (
                                        9 === n.nodeType ? n : n.ownerDocument
                                    ).createTextNode(r))[Yr] = t),
                                        (t.stateNode = r));
                        }
                        return null;
                    case 13:
                        return (
                            ul(Ma),
                            (r = t.memoizedState),
                            0 !== (64 & t.flags)
                                ? ((t.lanes = n), t)
                                : ((r = null !== r),
                                    (n = !1),
                                    null === e
                                        ? void 0 !== t.memoizedProps.fallback && $a(t)
                                        : (n = null !== e.memoizedState),
                                    r &&
                                    !n &&
                                    0 !== (2 & t.mode) &&
                                    ((null === e &&
                                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                                        0 !== (1 & Ma.current)
                                        ? 0 === Iu && (Iu = 3)
                                        : ((0 !== Iu && 3 !== Iu) || (Iu = 4),
                                            null === zu ||
                                            (0 === (134217727 & Uu) && 0 === (134217727 & ju)) ||
                                            mi(zu, Ou))),
                                    (r || n) && (t.flags |= 4),
                                    null)
                        );
                    case 4:
                        return La(), null === e && Tr(t.stateNode.containerInfo), null;
                    case 10:
                        return ea(t), null;
                    case 17:
                        return hl(t.type) && ml(), null;
                    case 19:
                        if ((ul(Ma), null === (r = t.memoizedState))) return null;
                        if (((u = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                            if (u) ru(r, !1);
                            else {
                                if (0 !== Iu || (null !== e && 0 !== (64 & e.flags)))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (s = Ia(e))) {
                                            for (
                                                t.flags |= 64,
                                                ru(r, !1),
                                                null !== (u = s.updateQueue) &&
                                                ((t.updateQueue = u), (t.flags |= 4)),
                                                null === r.lastEffect && (t.firstEffect = null),
                                                t.lastEffect = r.lastEffect,
                                                r = n,
                                                n = t.child;
                                                null !== n;

                                            )
                                                (e = r),
                                                    ((u = n).flags &= 2),
                                                    (u.nextEffect = null),
                                                    (u.firstEffect = null),
                                                    (u.lastEffect = null),
                                                    null === (s = u.alternate)
                                                        ? ((u.childLanes = 0),
                                                            (u.lanes = e),
                                                            (u.child = null),
                                                            (u.memoizedProps = null),
                                                            (u.memoizedState = null),
                                                            (u.updateQueue = null),
                                                            (u.dependencies = null),
                                                            (u.stateNode = null))
                                                        : ((u.childLanes = s.childLanes),
                                                            (u.lanes = s.lanes),
                                                            (u.child = s.child),
                                                            (u.memoizedProps = s.memoizedProps),
                                                            (u.memoizedState = s.memoizedState),
                                                            (u.updateQueue = s.updateQueue),
                                                            (u.type = s.type),
                                                            (e = s.dependencies),
                                                            (u.dependencies =
                                                                null === e
                                                                    ? null
                                                                    : {
                                                                        lanes: e.lanes,
                                                                        firstContext: e.firstContext,
                                                                    })),
                                                    (n = n.sibling);
                                            return il(Ma, (1 & Ma.current) | 2), t.child;
                                        }
                                        e = e.sibling;
                                    }
                                null !== r.tail &&
                                    Al() > $u &&
                                    ((t.flags |= 64), (u = !0), ru(r, !1), (t.lanes = 33554432));
                            }
                        else {
                            if (!u)
                                if (null !== (e = Ia(s))) {
                                    if (
                                        ((t.flags |= 64),
                                            (u = !0),
                                            null !== (n = e.updateQueue) &&
                                            ((t.updateQueue = n), (t.flags |= 4)),
                                            ru(r, !0),
                                            null === r.tail &&
                                            "hidden" === r.tailMode &&
                                            !s.alternate &&
                                            !Ua)
                                    )
                                        return (
                                            null !== (t = t.lastEffect = r.lastEffect) &&
                                            (t.nextEffect = null),
                                            null
                                        );
                                } else
                                    2 * Al() - r.renderingStartTime > $u &&
                                        1073741824 !== n &&
                                        ((t.flags |= 64),
                                            (u = !0),
                                            ru(r, !1),
                                            (t.lanes = 33554432));
                            r.isBackwards
                                ? ((s.sibling = t.child), (t.child = s))
                                : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                                    (r.last = s));
                        }
                        return null !== r.tail
                            ? ((n = r.tail),
                                (r.rendering = n),
                                (r.tail = n.sibling),
                                (r.lastEffect = t.lastEffect),
                                (r.renderingStartTime = Al()),
                                (n.sibling = null),
                                (t = Ma.current),
                                il(Ma, u ? (1 & t) | 2 : 1 & t),
                                n)
                            : null;
                    case 23:
                    case 24:
                        return (
                            wi(),
                            null !== e &&
                            (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                            "unstable-defer-without-hiding" !== r.mode &&
                            (t.flags |= 4),
                            null
                        );
                }
                throw Error(o(156, t.tag));
            }
            function au(e) {
                switch (e.tag) {
                    case 1:
                        hl(e.type) && ml();
                        var t = e.flags;
                        return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
                    case 3:
                        if ((La(), ul(fl), ul(cl), Qa(), 0 !== (64 & (t = e.flags))))
                            throw Error(o(285));
                        return (e.flags = (-4097 & t) | 64), e;
                    case 5:
                        return Ra(e), null;
                    case 13:
                        return (
                            ul(Ma),
                            4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
                        );
                    case 19:
                        return ul(Ma), null;
                    case 4:
                        return La(), null;
                    case 10:
                        return ea(e), null;
                    case 23:
                    case 24:
                        return wi(), null;
                    default:
                        return null;
                }
            }
            function ou(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        (n += Q(r)), (r = r.return);
                    } while (r);
                    var l = n;
                } catch (a) {
                    l = "\nError generating stack: " + a.message + "\n" + a.stack;
                }
                return { value: e, source: t, stack: l };
            }
            function uu(e, t) {
                try {
                    console.error(t.value);
                } catch (n) {
                    setTimeout(function () {
                        throw n;
                    });
                }
            }
            (Ho = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        (n.child.return = n), (n = n.child);
                        continue;
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                }
            }),
                (Qo = function (e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        (e = t.stateNode), Ta(Ca.current);
                        var o,
                            u = null;
                        switch (n) {
                            case "input":
                                (a = Z(e, a)), (r = Z(e, r)), (u = []);
                                break;
                            case "option":
                                (a = ae(e, a)), (r = ae(e, r)), (u = []);
                                break;
                            case "select":
                                (a = l({}, a, { value: void 0 })),
                                    (r = l({}, r, { value: void 0 })),
                                    (u = []);
                                break;
                            case "textarea":
                                (a = ue(e, a)), (r = ue(e, r)), (u = []);
                                break;
                            default:
                                "function" !== typeof a.onClick &&
                                    "function" === typeof r.onClick &&
                                    (e.onclick = Dr);
                        }
                        for (f in (xe(n, r), (n = null), a))
                            if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                                if ("style" === f) {
                                    var s = a[f];
                                    for (o in s)
                                        s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                                } else
                                    "dangerouslySetInnerHTML" !== f &&
                                        "children" !== f &&
                                        "suppressContentEditableWarning" !== f &&
                                        "suppressHydrationWarning" !== f &&
                                        "autoFocus" !== f &&
                                        (i.hasOwnProperty(f)
                                            ? u || (u = [])
                                            : (u = u || []).push(f, null));
                        for (f in r) {
                            var c = r[f];
                            if (
                                ((s = null != a ? a[f] : void 0),
                                    r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                            )
                                if ("style" === f)
                                    if (s) {
                                        for (o in s)
                                            !s.hasOwnProperty(o) ||
                                                (c && c.hasOwnProperty(o)) ||
                                                (n || (n = {}), (n[o] = ""));
                                        for (o in c)
                                            c.hasOwnProperty(o) &&
                                                s[o] !== c[o] &&
                                                (n || (n = {}), (n[o] = c[o]));
                                    } else n || (u || (u = []), u.push(f, n)), (n = c);
                                else
                                    "dangerouslySetInnerHTML" === f
                                        ? ((c = c ? c.__html : void 0),
                                            (s = s ? s.__html : void 0),
                                            null != c && s !== c && (u = u || []).push(f, c))
                                        : "children" === f
                                            ? ("string" !== typeof c && "number" !== typeof c) ||
                                            (u = u || []).push(f, "" + c)
                                            : "suppressContentEditableWarning" !== f &&
                                            "suppressHydrationWarning" !== f &&
                                            (i.hasOwnProperty(f)
                                                ? (null != c && "onScroll" === f && Pr("scroll", e),
                                                    u || s === c || (u = []))
                                                : "object" === typeof c &&
                                                    null !== c &&
                                                    c.$$typeof === I
                                                    ? c.toString()
                                                    : (u = u || []).push(f, c));
                        }
                        n && (u = u || []).push("style", n);
                        var f = u;
                        (t.updateQueue = f) && (t.flags |= 4);
                    }
                }),
                (qo = function (e, t, n, r) {
                    n !== r && (t.flags |= 4);
                });
            var iu = "function" === typeof WeakMap ? WeakMap : Map;
            function su(e, t, n) {
                ((n = ua(-1, n)).tag = 3), (n.payload = { element: null });
                var r = t.value;
                return (
                    (n.callback = function () {
                        qu || ((qu = !0), (Ku = r)), uu(0, t);
                    }),
                    n
                );
            }
            function cu(e, t, n) {
                (n = ua(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var l = t.value;
                    n.payload = function () {
                        return uu(0, t), r(l);
                    };
                }
                var a = e.stateNode;
                return (
                    null !== a &&
                    "function" === typeof a.componentDidCatch &&
                    (n.callback = function () {
                        "function" !== typeof r &&
                            (null === Yu ? (Yu = new Set([this])) : Yu.add(this), uu(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : "",
                        });
                    }),
                    n
                );
            }
            var fu = "function" === typeof WeakSet ? WeakSet : Set;
            function du(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null);
                        } catch (n) {
                            Di(e, n);
                        }
                    else t.current = null;
            }
            function pu(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.flags && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                                t.elementType === t.type ? n : Kl(t.type, n),
                                r
                            )),
                                (e.__reactInternalSnapshotBeforeUpdate = t);
                        }
                        return;
                    case 3:
                        return void (256 & t.flags && Wr(t.stateNode.containerInfo));
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                }
                throw Error(o(163));
            }
            function hu(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (
                            null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
                        ) {
                            e = t = t.next;
                            do {
                                if (3 === (3 & e.tag)) {
                                    var r = e.create;
                                    e.destroy = r();
                                }
                                e = e.next;
                            } while (e !== t);
                        }
                        if (
                            null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
                        ) {
                            e = t = t.next;
                            do {
                                var l = e;
                                (r = l.next),
                                    0 !== (4 & (l = l.tag)) &&
                                    0 !== (1 & l) &&
                                    (Mi(n, e), Ri(n, e)),
                                    (e = r);
                            } while (e !== t);
                        }
                        return;
                    case 1:
                        return (
                            (e = n.stateNode),
                            4 & n.flags &&
                            (null === t
                                ? e.componentDidMount()
                                : ((r =
                                    n.elementType === n.type
                                        ? t.memoizedProps
                                        : Kl(n.type, t.memoizedProps)),
                                    e.componentDidUpdate(
                                        r,
                                        t.memoizedState,
                                        e.__reactInternalSnapshotBeforeUpdate
                                    ))),
                            void (null !== (t = n.updateQueue) && fa(n, t, e))
                        );
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (((e = null), null !== n.child))
                                switch (n.child.tag) {
                                    case 5:
                                        e = n.child.stateNode;
                                        break;
                                    case 1:
                                        e = n.child.stateNode;
                                }
                            fa(n, t, e);
                        }
                        return;
                    case 5:
                        return (
                            (e = n.stateNode),
                            void (
                                null === t &&
                                4 & n.flags &&
                                Ar(n.type, n.memoizedProps) &&
                                e.focus()
                            )
                        );
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (
                            null === n.memoizedState &&
                            ((n = n.alternate),
                                null !== n &&
                                ((n = n.memoizedState),
                                    null !== n && ((n = n.dehydrated), null !== n && St(n))))
                        );
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return;
                }
                throw Error(o(163));
            }
            function mu(e, t) {
                for (var n = e; ;) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t)
                            "function" === typeof (r = r.style).setProperty
                                ? r.setProperty("display", "none", "important")
                                : (r.display = "none");
                        else {
                            r = n.stateNode;
                            var l = n.memoizedProps.style;
                            (l =
                                void 0 !== l && null !== l && l.hasOwnProperty("display")
                                    ? l.display
                                    : null),
                                (r.style.display = ke("display", l));
                        }
                    } else if (6 === n.tag)
                        n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else if (
                        ((23 !== n.tag && 24 !== n.tag) ||
                            null === n.memoizedState ||
                            n === e) &&
                        null !== n.child
                    ) {
                        (n.child.return = n), (n = n.child);
                        continue;
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                }
            }
            function vu(e, t) {
                if (kl && "function" === typeof kl.onCommitFiberUnmount)
                    try {
                        kl.onCommitFiberUnmount(wl, t);
                    } catch (a) { }
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var n = (e = e.next);
                            do {
                                var r = n,
                                    l = r.destroy;
                                if (((r = r.tag), void 0 !== l))
                                    if (0 !== (4 & r)) Mi(t, n);
                                    else {
                                        r = t;
                                        try {
                                            l();
                                        } catch (a) {
                                            Di(r, a);
                                        }
                                    }
                                n = n.next;
                            } while (n !== e);
                        }
                        break;
                    case 1:
                        if (
                            (du(t),
                                "function" === typeof (e = t.stateNode).componentWillUnmount)
                        )
                            try {
                                (e.props = t.memoizedProps),
                                    (e.state = t.memoizedState),
                                    e.componentWillUnmount();
                            } catch (a) {
                                Di(t, a);
                            }
                        break;
                    case 5:
                        du(t);
                        break;
                    case 4:
                        Su(e, t);
                }
            }
            function yu(e) {
                (e.alternate = null),
                    (e.child = null),
                    (e.dependencies = null),
                    (e.firstEffect = null),
                    (e.lastEffect = null),
                    (e.memoizedProps = null),
                    (e.memoizedState = null),
                    (e.pendingProps = null),
                    (e.return = null),
                    (e.updateQueue = null);
            }
            function gu(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag;
            }
            function bu(e) {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (gu(t)) break e;
                        t = t.return;
                    }
                    throw Error(o(160));
                }
                var n = t;
                switch (((t = n.stateNode), n.tag)) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        (t = t.containerInfo), (r = !0);
                        break;
                    default:
                        throw Error(o(161));
                }
                16 & n.flags && (ge(t, ""), (n.flags &= -17));
                e: t: for (n = e; ;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || gu(n.return)) {
                            n = null;
                            break e;
                        }
                        n = n.return;
                    }
                    for (
                        n.sibling.return = n.return, n = n.sibling;
                        5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

                    ) {
                        if (2 & n.flags) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        (n.child.return = n), (n = n.child);
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e;
                    }
                }
                r ? wu(e, n, t) : ku(e, n, t);
            }
            function wu(e, t, n) {
                var r = e.tag,
                    l = 5 === r || 6 === r;
                if (l)
                    (e = l ? e.stateNode : e.stateNode.instance),
                        t
                            ? 8 === n.nodeType
                                ? n.parentNode.insertBefore(e, t)
                                : n.insertBefore(e, t)
                            : (8 === n.nodeType
                                ? (t = n.parentNode).insertBefore(e, n)
                                : (t = n).appendChild(e),
                                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                                null !== t.onclick ||
                                (t.onclick = Dr));
                else if (4 !== r && null !== (e = e.child))
                    for (wu(e, t, n), e = e.sibling; null !== e;)
                        wu(e, t, n), (e = e.sibling);
            }
            function ku(e, t, n) {
                var r = e.tag,
                    l = 5 === r || 6 === r;
                if (l)
                    (e = l ? e.stateNode : e.stateNode.instance),
                        t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ku(e, t, n), e = e.sibling; null !== e;)
                        ku(e, t, n), (e = e.sibling);
            }
            function Su(e, t) {
                for (var n, r, l = t, a = !1; ;) {
                    if (!a) {
                        a = l.return;
                        e: for (; ;) {
                            if (null === a) throw Error(o(160));
                            switch (((n = a.stateNode), a.tag)) {
                                case 5:
                                    r = !1;
                                    break e;
                                case 3:
                                case 4:
                                    (n = n.containerInfo), (r = !0);
                                    break e;
                            }
                            a = a.return;
                        }
                        a = !0;
                    }
                    if (5 === l.tag || 6 === l.tag) {
                        e: for (var u = e, i = l, s = i; ;)
                            if ((vu(u, s), null !== s.child && 4 !== s.tag))
                                (s.child.return = s), (s = s.child);
                            else {
                                if (s === i) break e;
                                for (; null === s.sibling;) {
                                    if (null === s.return || s.return === i) break e;
                                    s = s.return;
                                }
                                (s.sibling.return = s.return), (s = s.sibling);
                            }
                        r
                            ? ((u = n),
                                (i = l.stateNode),
                                8 === u.nodeType
                                    ? u.parentNode.removeChild(i)
                                    : u.removeChild(i))
                            : n.removeChild(l.stateNode);
                    } else if (4 === l.tag) {
                        if (null !== l.child) {
                            (n = l.stateNode.containerInfo),
                                (r = !0),
                                (l.child.return = l),
                                (l = l.child);
                            continue;
                        }
                    } else if ((vu(e, l), null !== l.child)) {
                        (l.child.return = l), (l = l.child);
                        continue;
                    }
                    if (l === t) break;
                    for (; null === l.sibling;) {
                        if (null === l.return || l.return === t) return;
                        4 === (l = l.return).tag && (a = !1);
                    }
                    (l.sibling.return = l.return), (l = l.sibling);
                }
            }
            function Eu(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var n = t.updateQueue;
                        if (null !== (n = null !== n ? n.lastEffect : null)) {
                            var r = (n = n.next);
                            do {
                                3 === (3 & r.tag) &&
                                    ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                                    (r = r.next);
                            } while (r !== n);
                        }
                        return;
                    case 1:
                        return;
                    case 5:
                        if (null != (n = t.stateNode)) {
                            r = t.memoizedProps;
                            var l = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var a = t.updateQueue;
                            if (((t.updateQueue = null), null !== a)) {
                                for (
                                    n[Xr] = r,
                                    "input" === e &&
                                    "radio" === r.type &&
                                    null != r.name &&
                                    te(n, r),
                                    _e(e, l),
                                    t = _e(e, r),
                                    l = 0;
                                    l < a.length;
                                    l += 2
                                ) {
                                    var u = a[l],
                                        i = a[l + 1];
                                    "style" === u
                                        ? Se(n, i)
                                        : "dangerouslySetInnerHTML" === u
                                            ? ye(n, i)
                                            : "children" === u
                                                ? ge(n, i)
                                                : w(n, u, i, t);
                                }
                                switch (e) {
                                    case "input":
                                        ne(n, r);
                                        break;
                                    case "textarea":
                                        se(n, r);
                                        break;
                                    case "select":
                                        (e = n._wrapperState.wasMultiple),
                                            (n._wrapperState.wasMultiple = !!r.multiple),
                                            null != (a = r.value)
                                                ? oe(n, !!r.multiple, a, !1)
                                                : e !== !!r.multiple &&
                                                (null != r.defaultValue
                                                    ? oe(n, !!r.multiple, r.defaultValue, !0)
                                                    : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(o(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void (
                            (n = t.stateNode).hydrate &&
                            ((n.hydrate = !1), St(n.containerInfo))
                        );
                    case 12:
                        return;
                    case 13:
                        return (
                            null !== t.memoizedState && ((Bu = Al()), mu(t.child, !0)),
                            void xu(t)
                        );
                    case 19:
                        return void xu(t);
                    case 17:
                        return;
                    case 23:
                    case 24:
                        return void mu(t, null !== t.memoizedState);
                }
                throw Error(o(163));
            }
            function xu(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new fu()),
                        t.forEach(function (t) {
                            var r = ji.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r));
                        });
                }
            }
            function _u(e, t) {
                return (
                    null !== e &&
                    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
                    null !== (t = t.memoizedState) &&
                    null === t.dehydrated
                );
            }
            var Cu = Math.ceil,
                Pu = k.ReactCurrentDispatcher,
                Nu = k.ReactCurrentOwner,
                Tu = 0,
                zu = null,
                Lu = null,
                Ou = 0,
                Ru = 0,
                Mu = ol(0),
                Iu = 0,
                Fu = null,
                Du = 0,
                Uu = 0,
                ju = 0,
                Au = 0,
                Vu = null,
                Bu = 0,
                $u = 1 / 0;
            function Wu() {
                $u = Al() + 500;
            }
            var Hu,
                Qu = null,
                qu = !1,
                Ku = null,
                Yu = null,
                Xu = !1,
                Gu = null,
                Ju = 90,
                Zu = [],
                ei = [],
                ti = null,
                ni = 0,
                ri = null,
                li = -1,
                ai = 0,
                oi = 0,
                ui = null,
                ii = !1;
            function si() {
                return 0 !== (48 & Tu) ? Al() : -1 !== li ? li : (li = Al());
            }
            function ci(e) {
                if (0 === (2 & (e = e.mode))) return 1;
                if (0 === (4 & e)) return 99 === Vl() ? 1 : 2;
                if ((0 === ai && (ai = Du), 0 !== ql.transition)) {
                    0 !== oi && (oi = null !== Vu ? Vu.pendingLanes : 0), (e = ai);
                    var t = 4186112 & ~oi;
                    return (
                        0 === (t &= -t) &&
                        0 === (t = (e = 4186112 & ~e) & -e) &&
                        (t = 8192),
                        t
                    );
                }
                return (
                    (e = Vl()),
                    0 !== (4 & Tu) && 98 === e
                        ? (e = At(12, ai))
                        : (e = At(
                            (e = (function (e) {
                                switch (e) {
                                    case 99:
                                        return 15;
                                    case 98:
                                        return 10;
                                    case 97:
                                    case 96:
                                        return 8;
                                    case 95:
                                        return 2;
                                    default:
                                        return 0;
                                }
                            })(e)),
                            ai
                        )),
                    e
                );
            }
            function fi(e, t, n) {
                if (50 < ni) throw ((ni = 0), (ri = null), Error(o(185)));
                if (null === (e = di(e, t))) return null;
                $t(e, t, n), e === zu && ((ju |= t), 4 === Iu && mi(e, Ou));
                var r = Vl();
                1 === t
                    ? 0 !== (8 & Tu) && 0 === (48 & Tu)
                        ? vi(e)
                        : (pi(e, n), 0 === Tu && (Wu(), Hl()))
                    : (0 === (4 & Tu) ||
                        (98 !== r && 99 !== r) ||
                        (null === ti ? (ti = new Set([e])) : ti.add(e)),
                        pi(e, n)),
                    (Vu = e);
            }
            function di(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
                    (e.childLanes |= t),
                        null !== (n = e.alternate) && (n.childLanes |= t),
                        (n = e),
                        (e = e.return);
                return 3 === n.tag ? n.stateNode : null;
            }
            function pi(e, t) {
                for (
                    var n = e.callbackNode,
                    r = e.suspendedLanes,
                    l = e.pingedLanes,
                    a = e.expirationTimes,
                    u = e.pendingLanes;
                    0 < u;

                ) {
                    var i = 31 - Wt(u),
                        s = 1 << i,
                        c = a[i];
                    if (-1 === c) {
                        if (0 === (s & r) || 0 !== (s & l)) {
                            (c = t), Dt(s);
                            var f = Ft;
                            a[i] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
                        }
                    } else c <= t && (e.expiredLanes |= s);
                    u &= ~s;
                }
                if (((r = Ut(e, e === zu ? Ou : 0)), (t = Ft), 0 === r))
                    null !== n &&
                        (n !== Ml && xl(n),
                            (e.callbackNode = null),
                            (e.callbackPriority = 0));
                else {
                    if (null !== n) {
                        if (e.callbackPriority === t) return;
                        n !== Ml && xl(n);
                    }
                    15 === t
                        ? ((n = vi.bind(null, e)),
                            null === Fl ? ((Fl = [n]), (Dl = El(Tl, Ql))) : Fl.push(n),
                            (n = Ml))
                        : 14 === t
                            ? (n = Wl(99, vi.bind(null, e)))
                            : (n = Wl(
                                (n = (function (e) {
                                    switch (e) {
                                        case 15:
                                        case 14:
                                            return 99;
                                        case 13:
                                        case 12:
                                        case 11:
                                        case 10:
                                            return 98;
                                        case 9:
                                        case 8:
                                        case 7:
                                        case 6:
                                        case 4:
                                        case 5:
                                            return 97;
                                        case 3:
                                        case 2:
                                        case 1:
                                            return 95;
                                        case 0:
                                            return 90;
                                        default:
                                            throw Error(o(358, e));
                                    }
                                })(t)),
                                hi.bind(null, e)
                            )),
                        (e.callbackPriority = t),
                        (e.callbackNode = n);
                }
            }
            function hi(e) {
                if (((li = -1), (oi = ai = 0), 0 !== (48 & Tu))) throw Error(o(327));
                var t = e.callbackNode;
                if (Oi() && e.callbackNode !== t) return null;
                var n = Ut(e, e === zu ? Ou : 0);
                if (0 === n) return null;
                var r = n,
                    l = Tu;
                Tu |= 16;
                var a = Ei();
                for ((zu === e && Ou === r) || (Wu(), ki(e, r)); ;)
                    try {
                        Ci();
                        break;
                    } catch (i) {
                        Si(e, i);
                    }
                if (
                    (Zl(),
                        (Pu.current = a),
                        (Tu = l),
                        null !== Lu ? (r = 0) : ((zu = null), (Ou = 0), (r = Iu)),
                        0 !== (Du & ju))
                )
                    ki(e, 0);
                else if (0 !== r) {
                    if (
                        (2 === r &&
                            ((Tu |= 64),
                                e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
                                0 !== (n = jt(e)) && (r = xi(e, n))),
                            1 === r)
                    )
                        throw ((t = Fu), ki(e, 0), mi(e, n), pi(e, Al()), t);
                    switch (
                    ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
                    ) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 2:
                            Ti(e);
                            break;
                        case 3:
                            if (
                                (mi(e, n), (62914560 & n) === n && 10 < (r = Bu + 500 - Al()))
                            ) {
                                if (0 !== Ut(e, 0)) break;
                                if (((l = e.suspendedLanes) & n) !== n) {
                                    si(), (e.pingedLanes |= e.suspendedLanes & l);
                                    break;
                                }
                                e.timeoutHandle = Br(Ti.bind(null, e), r);
                                break;
                            }
                            Ti(e);
                            break;
                        case 4:
                            if ((mi(e, n), (4186112 & n) === n)) break;
                            for (r = e.eventTimes, l = -1; 0 < n;) {
                                var u = 31 - Wt(n);
                                (a = 1 << u), (u = r[u]) > l && (l = u), (n &= ~a);
                            }
                            if (
                                ((n = l),
                                    10 <
                                    (n =
                                        (120 > (n = Al() - n)
                                            ? 120
                                            : 480 > n
                                                ? 480
                                                : 1080 > n
                                                    ? 1080
                                                    : 1920 > n
                                                        ? 1920
                                                        : 3e3 > n
                                                            ? 3e3
                                                            : 4320 > n
                                                                ? 4320
                                                                : 1960 * Cu(n / 1960)) - n))
                            ) {
                                e.timeoutHandle = Br(Ti.bind(null, e), n);
                                break;
                            }
                            Ti(e);
                            break;
                        case 5:
                            Ti(e);
                            break;
                        default:
                            throw Error(o(329));
                    }
                }
                return pi(e, Al()), e.callbackNode === t ? hi.bind(null, e) : null;
            }
            function mi(e, t) {
                for (
                    t &= ~Au,
                    t &= ~ju,
                    e.suspendedLanes |= t,
                    e.pingedLanes &= ~t,
                    e = e.expirationTimes;
                    0 < t;

                ) {
                    var n = 31 - Wt(t),
                        r = 1 << n;
                    (e[n] = -1), (t &= ~r);
                }
            }
            function vi(e) {
                if (0 !== (48 & Tu)) throw Error(o(327));
                if ((Oi(), e === zu && 0 !== (e.expiredLanes & Ou))) {
                    var t = Ou,
                        n = xi(e, t);
                    0 !== (Du & ju) && (n = xi(e, (t = Ut(e, t))));
                } else n = xi(e, (t = Ut(e, 0)));
                if (
                    (0 !== e.tag &&
                        2 === n &&
                        ((Tu |= 64),
                            e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
                            0 !== (t = jt(e)) && (n = xi(e, t))),
                        1 === n)
                )
                    throw ((n = Fu), ki(e, 0), mi(e, t), pi(e, Al()), n);
                return (
                    (e.finishedWork = e.current.alternate),
                    (e.finishedLanes = t),
                    Ti(e),
                    pi(e, Al()),
                    null
                );
            }
            function yi(e, t) {
                var n = Tu;
                Tu |= 1;
                try {
                    return e(t);
                } finally {
                    0 === (Tu = n) && (Wu(), Hl());
                }
            }
            function gi(e, t) {
                var n = Tu;
                (Tu &= -2), (Tu |= 8);
                try {
                    return e(t);
                } finally {
                    0 === (Tu = n) && (Wu(), Hl());
                }
            }
            function bi(e, t) {
                il(Mu, Ru), (Ru |= t), (Du |= t);
            }
            function wi() {
                (Ru = Mu.current), ul(Mu);
            }
            function ki(e, t) {
                (e.finishedWork = null), (e.finishedLanes = 0);
                var n = e.timeoutHandle;
                if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== Lu))
                    for (n = Lu.return; null !== n;) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && ml();
                                break;
                            case 3:
                                La(), ul(fl), ul(cl), Qa();
                                break;
                            case 5:
                                Ra(r);
                                break;
                            case 4:
                                La();
                                break;
                            case 13:
                            case 19:
                                ul(Ma);
                                break;
                            case 10:
                                ea(r);
                                break;
                            case 23:
                            case 24:
                                wi();
                        }
                        n = n.return;
                    }
                (zu = e),
                    (Lu = $i(e.current, null)),
                    (Ou = Ru = Du = t),
                    (Iu = 0),
                    (Fu = null),
                    (Au = ju = Uu = 0);
            }
            function Si(e, t) {
                for (; ;) {
                    var n = Lu;
                    try {
                        if ((Zl(), (qa.current = To), Za)) {
                            for (var r = Xa.memoizedState; null !== r;) {
                                var l = r.queue;
                                null !== l && (l.pending = null), (r = r.next);
                            }
                            Za = !1;
                        }
                        if (
                            ((Ya = 0),
                                (Ja = Ga = Xa = null),
                                (eo = !1),
                                (Nu.current = null),
                                null === n || null === n.return)
                        ) {
                            (Iu = 1), (Fu = t), (Lu = null);
                            break;
                        }
                        e: {
                            var a = e,
                                o = n.return,
                                u = n,
                                i = t;
                            if (
                                ((t = Ou),
                                    (u.flags |= 2048),
                                    (u.firstEffect = u.lastEffect = null),
                                    null !== i &&
                                    "object" === typeof i &&
                                    "function" === typeof i.then)
                            ) {
                                var s = i;
                                if (0 === (2 & u.mode)) {
                                    var c = u.alternate;
                                    c
                                        ? ((u.updateQueue = c.updateQueue),
                                            (u.memoizedState = c.memoizedState),
                                            (u.lanes = c.lanes))
                                        : ((u.updateQueue = null), (u.memoizedState = null));
                                }
                                var f = 0 !== (1 & Ma.current),
                                    d = o;
                                do {
                                    var p;
                                    if ((p = 13 === d.tag)) {
                                        var h = d.memoizedState;
                                        if (null !== h) p = null !== h.dehydrated;
                                        else {
                                            var m = d.memoizedProps;
                                            p =
                                                void 0 !== m.fallback &&
                                                (!0 !== m.unstable_avoidThisFallback || !f);
                                        }
                                    }
                                    if (p) {
                                        var v = d.updateQueue;
                                        if (null === v) {
                                            var y = new Set();
                                            y.add(s), (d.updateQueue = y);
                                        } else v.add(s);
                                        if (0 === (2 & d.mode)) {
                                            if (
                                                ((d.flags |= 64),
                                                    (u.flags |= 16384),
                                                    (u.flags &= -2981),
                                                    1 === u.tag)
                                            )
                                                if (null === u.alternate) u.tag = 17;
                                                else {
                                                    var g = ua(-1, 1);
                                                    (g.tag = 2), ia(u, g);
                                                }
                                            u.lanes |= 1;
                                            break e;
                                        }
                                        (i = void 0), (u = t);
                                        var b = a.pingCache;
                                        if (
                                            (null === b
                                                ? ((b = a.pingCache = new iu()),
                                                    (i = new Set()),
                                                    b.set(s, i))
                                                : void 0 === (i = b.get(s)) &&
                                                ((i = new Set()), b.set(s, i)),
                                                !i.has(u))
                                        ) {
                                            i.add(u);
                                            var w = Ui.bind(null, a, s, u);
                                            s.then(w, w);
                                        }
                                        (d.flags |= 4096), (d.lanes = t);
                                        break e;
                                    }
                                    d = d.return;
                                } while (null !== d);
                                i = Error(
                                    (q(u.type) || "A React component") +
                                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                                );
                            }
                            5 !== Iu && (Iu = 2), (i = ou(i, u)), (d = o);
                            do {
                                switch (d.tag) {
                                    case 3:
                                        (a = i),
                                            (d.flags |= 4096),
                                            (t &= -t),
                                            (d.lanes |= t),
                                            sa(d, su(0, a, t));
                                        break e;
                                    case 1:
                                        a = i;
                                        var k = d.type,
                                            S = d.stateNode;
                                        if (
                                            0 === (64 & d.flags) &&
                                            ("function" === typeof k.getDerivedStateFromError ||
                                                (null !== S &&
                                                    "function" === typeof S.componentDidCatch &&
                                                    (null === Yu || !Yu.has(S))))
                                        ) {
                                            (d.flags |= 4096),
                                                (t &= -t),
                                                (d.lanes |= t),
                                                sa(d, cu(d, a, t));
                                            break e;
                                        }
                                }
                                d = d.return;
                            } while (null !== d);
                        }
                        Ni(n);
                    } catch (E) {
                        (t = E), Lu === n && null !== n && (Lu = n = n.return);
                        continue;
                    }
                    break;
                }
            }
            function Ei() {
                var e = Pu.current;
                return (Pu.current = To), null === e ? To : e;
            }
            function xi(e, t) {
                var n = Tu;
                Tu |= 16;
                var r = Ei();
                for ((zu === e && Ou === t) || ki(e, t); ;)
                    try {
                        _i();
                        break;
                    } catch (l) {
                        Si(e, l);
                    }
                if ((Zl(), (Tu = n), (Pu.current = r), null !== Lu))
                    throw Error(o(261));
                return (zu = null), (Ou = 0), Iu;
            }
            function _i() {
                for (; null !== Lu;) Pi(Lu);
            }
            function Ci() {
                for (; null !== Lu && !_l();) Pi(Lu);
            }
            function Pi(e) {
                var t = Hu(e.alternate, e, Ru);
                (e.memoizedProps = e.pendingProps),
                    null === t ? Ni(e) : (Lu = t),
                    (Nu.current = null);
            }
            function Ni(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (((e = t.return), 0 === (2048 & t.flags))) {
                        if (null !== (n = lu(n, t, Ru))) return void (Lu = n);
                        if (
                            (24 !== (n = t).tag && 23 !== n.tag) ||
                            null === n.memoizedState ||
                            0 !== (1073741824 & Ru) ||
                            0 === (4 & n.mode)
                        ) {
                            for (var r = 0, l = n.child; null !== l;)
                                (r |= l.lanes | l.childLanes), (l = l.sibling);
                            n.childLanes = r;
                        }
                        null !== e &&
                            0 === (2048 & e.flags) &&
                            (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                                null !== t.lastEffect &&
                                (null !== e.lastEffect &&
                                    (e.lastEffect.nextEffect = t.firstEffect),
                                    (e.lastEffect = t.lastEffect)),
                                1 < t.flags &&
                                (null !== e.lastEffect
                                    ? (e.lastEffect.nextEffect = t)
                                    : (e.firstEffect = t),
                                    (e.lastEffect = t)));
                    } else {
                        if (null !== (n = au(t))) return (n.flags &= 2047), void (Lu = n);
                        null !== e &&
                            ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
                    }
                    if (null !== (t = t.sibling)) return void (Lu = t);
                    Lu = t = e;
                } while (null !== t);
                0 === Iu && (Iu = 5);
            }
            function Ti(e) {
                var t = Vl();
                return $l(99, zi.bind(null, e, t)), null;
            }
            function zi(e, t) {
                do {
                    Oi();
                } while (null !== Gu);
                if (0 !== (48 & Tu)) throw Error(o(327));
                var n = e.finishedWork;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                    throw Error(o(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes,
                    l = r,
                    a = e.pendingLanes & ~l;
                (e.pendingLanes = l),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= l),
                    (e.mutableReadLanes &= l),
                    (e.entangledLanes &= l),
                    (l = e.entanglements);
                for (var u = e.eventTimes, i = e.expirationTimes; 0 < a;) {
                    var s = 31 - Wt(a),
                        c = 1 << s;
                    (l[s] = 0), (u[s] = -1), (i[s] = -1), (a &= ~c);
                }
                if (
                    (null !== ti && 0 === (24 & r) && ti.has(e) && ti.delete(e),
                        e === zu && ((Lu = zu = null), (Ou = 0)),
                        1 < n.flags
                            ? null !== n.lastEffect
                                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                                : (r = n)
                            : (r = n.firstEffect),
                        null !== r)
                ) {
                    if (
                        ((l = Tu),
                            (Tu |= 32),
                            (Nu.current = null),
                            (Ur = Yt),
                            hr((u = pr())))
                    ) {
                        if ("selectionStart" in u)
                            i = { start: u.selectionStart, end: u.selectionEnd };
                        else
                            e: if (
                                ((i = ((i = u.ownerDocument) && i.defaultView) || window),
                                    (c = i.getSelection && i.getSelection()) && 0 !== c.rangeCount)
                            ) {
                                (i = c.anchorNode),
                                    (a = c.anchorOffset),
                                    (s = c.focusNode),
                                    (c = c.focusOffset);
                                try {
                                    i.nodeType, s.nodeType;
                                } catch (C) {
                                    i = null;
                                    break e;
                                }
                                var f = 0,
                                    d = -1,
                                    p = -1,
                                    h = 0,
                                    m = 0,
                                    v = u,
                                    y = null;
                                t: for (; ;) {
                                    for (
                                        var g;
                                        v !== i || (0 !== a && 3 !== v.nodeType) || (d = f + a),
                                        v !== s || (0 !== c && 3 !== v.nodeType) || (p = f + c),
                                        3 === v.nodeType && (f += v.nodeValue.length),
                                        null !== (g = v.firstChild);

                                    )
                                        (y = v), (v = g);
                                    for (; ;) {
                                        if (v === u) break t;
                                        if (
                                            (y === i && ++h === a && (d = f),
                                                y === s && ++m === c && (p = f),
                                                null !== (g = v.nextSibling))
                                        )
                                            break;
                                        y = (v = y).parentNode;
                                    }
                                    v = g;
                                }
                                i = -1 === d || -1 === p ? null : { start: d, end: p };
                            } else i = null;
                        i = i || { start: 0, end: 0 };
                    } else i = null;
                    (jr = { focusedElem: u, selectionRange: i }),
                        (Yt = !1),
                        (ui = null),
                        (ii = !1),
                        (Qu = r);
                    do {
                        try {
                            Li();
                        } catch (C) {
                            if (null === Qu) throw Error(o(330));
                            Di(Qu, C), (Qu = Qu.nextEffect);
                        }
                    } while (null !== Qu);
                    (ui = null), (Qu = r);
                    do {
                        try {
                            for (u = e; null !== Qu;) {
                                var b = Qu.flags;
                                if ((16 & b && ge(Qu.stateNode, ""), 128 & b)) {
                                    var w = Qu.alternate;
                                    if (null !== w) {
                                        var k = w.ref;
                                        null !== k &&
                                            ("function" === typeof k ? k(null) : (k.current = null));
                                    }
                                }
                                switch (1038 & b) {
                                    case 2:
                                        bu(Qu), (Qu.flags &= -3);
                                        break;
                                    case 6:
                                        bu(Qu), (Qu.flags &= -3), Eu(Qu.alternate, Qu);
                                        break;
                                    case 1024:
                                        Qu.flags &= -1025;
                                        break;
                                    case 1028:
                                        (Qu.flags &= -1025), Eu(Qu.alternate, Qu);
                                        break;
                                    case 4:
                                        Eu(Qu.alternate, Qu);
                                        break;
                                    case 8:
                                        Su(u, (i = Qu));
                                        var S = i.alternate;
                                        yu(i), null !== S && yu(S);
                                }
                                Qu = Qu.nextEffect;
                            }
                        } catch (C) {
                            if (null === Qu) throw Error(o(330));
                            Di(Qu, C), (Qu = Qu.nextEffect);
                        }
                    } while (null !== Qu);
                    if (
                        ((k = jr),
                            (w = pr()),
                            (b = k.focusedElem),
                            (u = k.selectionRange),
                            w !== b &&
                            b &&
                            b.ownerDocument &&
                            dr(b.ownerDocument.documentElement, b))
                    ) {
                        null !== u &&
                            hr(b) &&
                            ((w = u.start),
                                void 0 === (k = u.end) && (k = w),
                                "selectionStart" in b
                                    ? ((b.selectionStart = w),
                                        (b.selectionEnd = Math.min(k, b.value.length)))
                                    : (k =
                                        ((w = b.ownerDocument || document) && w.defaultView) ||
                                        window).getSelection &&
                                    ((k = k.getSelection()),
                                        (i = b.textContent.length),
                                        (S = Math.min(u.start, i)),
                                        (u = void 0 === u.end ? S : Math.min(u.end, i)),
                                        !k.extend && S > u && ((i = u), (u = S), (S = i)),
                                        (i = fr(b, S)),
                                        (a = fr(b, u)),
                                        i &&
                                        a &&
                                        (1 !== k.rangeCount ||
                                            k.anchorNode !== i.node ||
                                            k.anchorOffset !== i.offset ||
                                            k.focusNode !== a.node ||
                                            k.focusOffset !== a.offset) &&
                                        ((w = w.createRange()).setStart(i.node, i.offset),
                                            k.removeAllRanges(),
                                            S > u
                                                ? (k.addRange(w), k.extend(a.node, a.offset))
                                                : (w.setEnd(a.node, a.offset), k.addRange(w))))),
                            (w = []);
                        for (k = b; (k = k.parentNode);)
                            1 === k.nodeType &&
                                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
                        for (
                            "function" === typeof b.focus && b.focus(), b = 0;
                            b < w.length;
                            b++
                        )
                            ((k = w[b]).element.scrollLeft = k.left),
                                (k.element.scrollTop = k.top);
                    }
                    (Yt = !!Ur), (jr = Ur = null), (e.current = n), (Qu = r);
                    do {
                        try {
                            for (b = e; null !== Qu;) {
                                var E = Qu.flags;
                                if ((36 & E && hu(b, Qu.alternate, Qu), 128 & E)) {
                                    w = void 0;
                                    var x = Qu.ref;
                                    if (null !== x) {
                                        var _ = Qu.stateNode;
                                        switch (Qu.tag) {
                                            case 5:
                                                w = _;
                                                break;
                                            default:
                                                w = _;
                                        }
                                        "function" === typeof x ? x(w) : (x.current = w);
                                    }
                                }
                                Qu = Qu.nextEffect;
                            }
                        } catch (C) {
                            if (null === Qu) throw Error(o(330));
                            Di(Qu, C), (Qu = Qu.nextEffect);
                        }
                    } while (null !== Qu);
                    (Qu = null), Il(), (Tu = l);
                } else e.current = n;
                if (Xu) (Xu = !1), (Gu = e), (Ju = t);
                else
                    for (Qu = r; null !== Qu;)
                        (t = Qu.nextEffect),
                            (Qu.nextEffect = null),
                            8 & Qu.flags && (((E = Qu).sibling = null), (E.stateNode = null)),
                            (Qu = t);
                if (
                    (0 === (r = e.pendingLanes) && (Yu = null),
                        1 === r ? (e === ri ? ni++ : ((ni = 0), (ri = e))) : (ni = 0),
                        (n = n.stateNode),
                        kl && "function" === typeof kl.onCommitFiberRoot)
                )
                    try {
                        kl.onCommitFiberRoot(wl, n, void 0, 64 === (64 & n.current.flags));
                    } catch (C) { }
                if ((pi(e, Al()), qu)) throw ((qu = !1), (e = Ku), (Ku = null), e);
                return 0 !== (8 & Tu) || Hl(), null;
            }
            function Li() {
                for (; null !== Qu;) {
                    var e = Qu.alternate;
                    ii ||
                        null === ui ||
                        (0 !== (8 & Qu.flags)
                            ? et(Qu, ui) && (ii = !0)
                            : 13 === Qu.tag && _u(e, Qu) && et(Qu, ui) && (ii = !0));
                    var t = Qu.flags;
                    0 !== (256 & t) && pu(e, Qu),
                        0 === (512 & t) ||
                        Xu ||
                        ((Xu = !0),
                            Wl(97, function () {
                                return Oi(), null;
                            })),
                        (Qu = Qu.nextEffect);
                }
            }
            function Oi() {
                if (90 !== Ju) {
                    var e = 97 < Ju ? 97 : Ju;
                    return (Ju = 90), $l(e, Ii);
                }
                return !1;
            }
            function Ri(e, t) {
                Zu.push(t, e),
                    Xu ||
                    ((Xu = !0),
                        Wl(97, function () {
                            return Oi(), null;
                        }));
            }
            function Mi(e, t) {
                ei.push(t, e),
                    Xu ||
                    ((Xu = !0),
                        Wl(97, function () {
                            return Oi(), null;
                        }));
            }
            function Ii() {
                if (null === Gu) return !1;
                var e = Gu;
                if (((Gu = null), 0 !== (48 & Tu))) throw Error(o(331));
                var t = Tu;
                Tu |= 32;
                var n = ei;
                ei = [];
                for (var r = 0; r < n.length; r += 2) {
                    var l = n[r],
                        a = n[r + 1],
                        u = l.destroy;
                    if (((l.destroy = void 0), "function" === typeof u))
                        try {
                            u();
                        } catch (s) {
                            if (null === a) throw Error(o(330));
                            Di(a, s);
                        }
                }
                for (n = Zu, Zu = [], r = 0; r < n.length; r += 2) {
                    (l = n[r]), (a = n[r + 1]);
                    try {
                        var i = l.create;
                        l.destroy = i();
                    } catch (s) {
                        if (null === a) throw Error(o(330));
                        Di(a, s);
                    }
                }
                for (i = e.current.firstEffect; null !== i;)
                    (e = i.nextEffect),
                        (i.nextEffect = null),
                        8 & i.flags && ((i.sibling = null), (i.stateNode = null)),
                        (i = e);
                return (Tu = t), Hl(), !0;
            }
            function Fi(e, t, n) {
                ia(e, (t = su(0, (t = ou(n, t)), 1))),
                    (t = si()),
                    null !== (e = di(e, 1)) && ($t(e, 1, t), pi(e, t));
            }
            function Di(e, t) {
                if (3 === e.tag) Fi(e, e, t);
                else
                    for (var n = e.return; null !== n;) {
                        if (3 === n.tag) {
                            Fi(n, e, t);
                            break;
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if (
                                "function" === typeof n.type.getDerivedStateFromError ||
                                ("function" === typeof r.componentDidCatch &&
                                    (null === Yu || !Yu.has(r)))
                            ) {
                                var l = cu(n, (e = ou(t, e)), 1);
                                if ((ia(n, l), (l = si()), null !== (n = di(n, 1))))
                                    $t(n, 1, l), pi(n, l);
                                else if (
                                    "function" === typeof r.componentDidCatch &&
                                    (null === Yu || !Yu.has(r))
                                )
                                    try {
                                        r.componentDidCatch(t, e);
                                    } catch (a) { }
                                break;
                            }
                        }
                        n = n.return;
                    }
            }
            function Ui(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                    (t = si()),
                    (e.pingedLanes |= e.suspendedLanes & n),
                    zu === e &&
                    (Ou & n) === n &&
                    (4 === Iu || (3 === Iu && (62914560 & Ou) === Ou && 500 > Al() - Bu)
                        ? ki(e, 0)
                        : (Au |= n)),
                    pi(e, t);
            }
            function ji(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t),
                    0 === (t = 0) &&
                    (0 === (2 & (t = e.mode))
                        ? (t = 1)
                        : 0 === (4 & t)
                            ? (t = 99 === Vl() ? 1 : 2)
                            : (0 === ai && (ai = Du),
                                0 === (t = Vt(62914560 & ~ai)) && (t = 4194304))),
                    (n = si()),
                    null !== (e = di(e, t)) && ($t(e, t, n), pi(e, n));
            }
            function Ai(e, t, n, r) {
                (this.tag = e),
                    (this.key = n),
                    (this.sibling =
                        this.child =
                        this.return =
                        this.stateNode =
                        this.type =
                        this.elementType =
                        null),
                    (this.index = 0),
                    (this.ref = null),
                    (this.pendingProps = t),
                    (this.dependencies =
                        this.memoizedState =
                        this.updateQueue =
                        this.memoizedProps =
                        null),
                    (this.mode = r),
                    (this.flags = 0),
                    (this.lastEffect = this.firstEffect = this.nextEffect = null),
                    (this.childLanes = this.lanes = 0),
                    (this.alternate = null);
            }
            function Vi(e, t, n, r) {
                return new Ai(e, t, n, r);
            }
            function Bi(e) {
                return !(!(e = e.prototype) || !e.isReactComponent);
            }
            function $i(e, t) {
                var n = e.alternate;
                return (
                    null === n
                        ? (((n = Vi(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                            (n.type = e.type),
                            (n.stateNode = e.stateNode),
                            (n.alternate = e),
                            (e.alternate = n))
                        : ((n.pendingProps = t),
                            (n.type = e.type),
                            (n.flags = 0),
                            (n.nextEffect = null),
                            (n.firstEffect = null),
                            (n.lastEffect = null)),
                    (n.childLanes = e.childLanes),
                    (n.lanes = e.lanes),
                    (n.child = e.child),
                    (n.memoizedProps = e.memoizedProps),
                    (n.memoizedState = e.memoizedState),
                    (n.updateQueue = e.updateQueue),
                    (t = e.dependencies),
                    (n.dependencies =
                        null === t
                            ? null
                            : { lanes: t.lanes, firstContext: t.firstContext }),
                    (n.sibling = e.sibling),
                    (n.index = e.index),
                    (n.ref = e.ref),
                    n
                );
            }
            function Wi(e, t, n, r, l, a) {
                var u = 2;
                if (((r = e), "function" === typeof e)) Bi(e) && (u = 1);
                else if ("string" === typeof e) u = 5;
                else
                    e: switch (e) {
                        case x:
                            return Hi(n.children, l, a, t);
                        case F:
                            (u = 8), (l |= 16);
                            break;
                        case _:
                            (u = 8), (l |= 1);
                            break;
                        case C:
                            return (
                                ((e = Vi(12, n, t, 8 | l)).elementType = C),
                                (e.type = C),
                                (e.lanes = a),
                                e
                            );
                        case z:
                            return (
                                ((e = Vi(13, n, t, l)).type = z),
                                (e.elementType = z),
                                (e.lanes = a),
                                e
                            );
                        case L:
                            return ((e = Vi(19, n, t, l)).elementType = L), (e.lanes = a), e;
                        case D:
                            return Qi(n, l, a, t);
                        case U:
                            return ((e = Vi(24, n, t, l)).elementType = U), (e.lanes = a), e;
                        default:
                            if ("object" === typeof e && null !== e)
                                switch (e.$$typeof) {
                                    case P:
                                        u = 10;
                                        break e;
                                    case N:
                                        u = 9;
                                        break e;
                                    case T:
                                        u = 11;
                                        break e;
                                    case O:
                                        u = 14;
                                        break e;
                                    case R:
                                        (u = 16), (r = null);
                                        break e;
                                    case M:
                                        u = 22;
                                        break e;
                                }
                            throw Error(o(130, null == e ? e : typeof e, ""));
                    }
                return (
                    ((t = Vi(u, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t
                );
            }
            function Hi(e, t, n, r) {
                return ((e = Vi(7, e, r, t)).lanes = n), e;
            }
            function Qi(e, t, n, r) {
                return ((e = Vi(23, e, r, t)).elementType = D), (e.lanes = n), e;
            }
            function qi(e, t, n) {
                return ((e = Vi(6, e, null, t)).lanes = n), e;
            }
            function Ki(e, t, n) {
                return (
                    ((t = Vi(4, null !== e.children ? e.children : [], e.key, t)).lanes =
                        n),
                    (t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation,
                    }),
                    t
                );
            }
            function Yi(e, t, n) {
                (this.tag = t),
                    (this.containerInfo = e),
                    (this.finishedWork =
                        this.pingCache =
                        this.current =
                        this.pendingChildren =
                        null),
                    (this.timeoutHandle = -1),
                    (this.pendingContext = this.context = null),
                    (this.hydrate = n),
                    (this.callbackNode = null),
                    (this.callbackPriority = 0),
                    (this.eventTimes = Bt(0)),
                    (this.expirationTimes = Bt(-1)),
                    (this.entangledLanes =
                        this.finishedLanes =
                        this.mutableReadLanes =
                        this.expiredLanes =
                        this.pingedLanes =
                        this.suspendedLanes =
                        this.pendingLanes =
                        0),
                    (this.entanglements = Bt(0)),
                    (this.mutableSourceEagerHydrationData = null);
            }
            function Xi(e, t, n) {
                var r =
                    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: E,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n,
                };
            }
            function Gi(e, t, n, r) {
                var l = t.current,
                    a = si(),
                    u = ci(l);
                e: if (n) {
                    t: {
                        if (Xe((n = n._reactInternals)) !== n || 1 !== n.tag)
                            throw Error(o(170));
                        var i = n;
                        do {
                            switch (i.tag) {
                                case 3:
                                    i = i.stateNode.context;
                                    break t;
                                case 1:
                                    if (hl(i.type)) {
                                        i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t;
                                    }
                            }
                            i = i.return;
                        } while (null !== i);
                        throw Error(o(171));
                    }
                    if (1 === n.tag) {
                        var s = n.type;
                        if (hl(s)) {
                            n = yl(n, s, i);
                            break e;
                        }
                    }
                    n = i;
                } else n = sl;
                return (
                    null === t.context ? (t.context = n) : (t.pendingContext = n),
                    ((t = ua(a, u)).payload = { element: e }),
                    null !== (r = void 0 === r ? null : r) && (t.callback = r),
                    ia(l, t),
                    fi(l, u, a),
                    u
                );
            }
            function Ji(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode;
                }
            }
            function Zi(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t;
                }
            }
            function es(e, t) {
                Zi(e, t), (e = e.alternate) && Zi(e, t);
            }
            function ts(e, t, n) {
                var r =
                    (null != n &&
                        null != n.hydrationOptions &&
                        n.hydrationOptions.mutableSources) ||
                    null;
                if (
                    ((n = new Yi(e, t, null != n && !0 === n.hydrate)),
                        (t = Vi(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
                        (n.current = t),
                        (t.stateNode = n),
                        aa(t),
                        (e[Gr] = n.current),
                        Tr(8 === e.nodeType ? e.parentNode : e),
                        r)
                )
                    for (e = 0; e < r.length; e++) {
                        var l = (t = r[e])._getVersion;
                        (l = l(t._source)),
                            null == n.mutableSourceEagerHydrationData
                                ? (n.mutableSourceEagerHydrationData = [t, l])
                                : n.mutableSourceEagerHydrationData.push(t, l);
                    }
                this._internalRoot = n;
            }
            function ns(e) {
                return !(
                    !e ||
                    (1 !== e.nodeType &&
                        9 !== e.nodeType &&
                        11 !== e.nodeType &&
                        (8 !== e.nodeType ||
                            " react-mount-point-unstable " !== e.nodeValue))
                );
            }
            function rs(e, t, n, r, l) {
                var a = n._reactRootContainer;
                if (a) {
                    var o = a._internalRoot;
                    if ("function" === typeof l) {
                        var u = l;
                        l = function () {
                            var e = Ji(o);
                            u.call(e);
                        };
                    }
                    Gi(t, o, e, l);
                } else {
                    if (
                        ((a = n._reactRootContainer =
                            (function (e, t) {
                                if (
                                    (t ||
                                        (t = !(
                                            !(t = e
                                                ? 9 === e.nodeType
                                                    ? e.documentElement
                                                    : e.firstChild
                                                : null) ||
                                            1 !== t.nodeType ||
                                            !t.hasAttribute("data-reactroot")
                                        )),
                                        !t)
                                )
                                    for (var n; (n = e.lastChild);) e.removeChild(n);
                                return new ts(e, 0, t ? { hydrate: !0 } : void 0);
                            })(n, r)),
                            (o = a._internalRoot),
                            "function" === typeof l)
                    ) {
                        var i = l;
                        l = function () {
                            var e = Ji(o);
                            i.call(e);
                        };
                    }
                    gi(function () {
                        Gi(t, o, e, l);
                    });
                }
                return Ji(o);
            }
            function ls(e, t) {
                var n =
                    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ns(t)) throw Error(o(200));
                return Xi(e, t, null, n);
            }
            (Hu = function (e, t, n) {
                var r = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || fl.current) Mo = !0;
                    else {
                        if (0 === (n & r)) {
                            switch (((Mo = !1), t.tag)) {
                                case 3:
                                    Wo(t), Wa();
                                    break;
                                case 5:
                                    Oa(t);
                                    break;
                                case 1:
                                    hl(t.type) && gl(t);
                                    break;
                                case 4:
                                    za(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    r = t.memoizedProps.value;
                                    var l = t.type._context;
                                    il(Yl, l._currentValue), (l._currentValue = r);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState)
                                        return 0 !== (n & t.child.childLanes)
                                            ? Yo(e, t, n)
                                            : (il(Ma, 1 & Ma.current),
                                                null !== (t = nu(e, t, n)) ? t.sibling : null);
                                    il(Ma, 1 & Ma.current);
                                    break;
                                case 19:
                                    if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                                        if (r) return tu(e, t, n);
                                        t.flags |= 64;
                                    }
                                    if (
                                        (null !== (l = t.memoizedState) &&
                                            ((l.rendering = null),
                                                (l.tail = null),
                                                (l.lastEffect = null)),
                                            il(Ma, Ma.current),
                                            r)
                                    )
                                        break;
                                    return null;
                                case 23:
                                case 24:
                                    return (t.lanes = 0), jo(e, t, n);
                            }
                            return nu(e, t, n);
                        }
                        Mo = 0 !== (16384 & e.flags);
                    }
                else Mo = !1;
                switch (((t.lanes = 0), t.tag)) {
                    case 2:
                        if (
                            ((r = t.type),
                                null !== e &&
                                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                                (e = t.pendingProps),
                                (l = pl(t, cl.current)),
                                na(t, n),
                                (l = ro(null, t, r, e, l, n)),
                                (t.flags |= 1),
                                "object" === typeof l &&
                                null !== l &&
                                "function" === typeof l.render &&
                                void 0 === l.$$typeof)
                        ) {
                            if (
                                ((t.tag = 1),
                                    (t.memoizedState = null),
                                    (t.updateQueue = null),
                                    hl(r))
                            ) {
                                var a = !0;
                                gl(t);
                            } else a = !1;
                            (t.memoizedState =
                                null !== l.state && void 0 !== l.state ? l.state : null),
                                aa(t);
                            var u = r.getDerivedStateFromProps;
                            "function" === typeof u && pa(t, r, u, e),
                                (l.updater = ha),
                                (t.stateNode = l),
                                (l._reactInternals = t),
                                ga(t, r, e, n),
                                (t = $o(null, t, r, !0, a, n));
                        } else (t.tag = 0), Io(null, t, l, n), (t = t.child);
                        return t;
                    case 16:
                        l = t.elementType;
                        e: {
                            switch (
                            (null !== e &&
                                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                                (e = t.pendingProps),
                                (l = (a = l._init)(l._payload)),
                                (t.type = l),
                                (a = t.tag =
                                    (function (e) {
                                        if ("function" === typeof e) return Bi(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === T) return 11;
                                            if (e === O) return 14;
                                        }
                                        return 2;
                                    })(l)),
                                (e = Kl(l, e)),
                                a)
                            ) {
                                case 0:
                                    t = Vo(null, t, l, e, n);
                                    break e;
                                case 1:
                                    t = Bo(null, t, l, e, n);
                                    break e;
                                case 11:
                                    t = Fo(null, t, l, e, n);
                                    break e;
                                case 14:
                                    t = Do(null, t, l, Kl(l.type, e), r, n);
                                    break e;
                            }
                            throw Error(o(306, l, ""));
                        }
                        return t;
                    case 0:
                        return (
                            (r = t.type),
                            (l = t.pendingProps),
                            Vo(e, t, r, (l = t.elementType === r ? l : Kl(r, l)), n)
                        );
                    case 1:
                        return (
                            (r = t.type),
                            (l = t.pendingProps),
                            Bo(e, t, r, (l = t.elementType === r ? l : Kl(r, l)), n)
                        );
                    case 3:
                        if ((Wo(t), (r = t.updateQueue), null === e || null === r))
                            throw Error(o(282));
                        if (
                            ((r = t.pendingProps),
                                (l = null !== (l = t.memoizedState) ? l.element : null),
                                oa(e, t),
                                ca(t, r, null, n),
                                (r = t.memoizedState.element) === l)
                        )
                            Wa(), (t = nu(e, t, n));
                        else {
                            if (
                                ((a = (l = t.stateNode).hydrate) &&
                                    ((Da = Hr(t.stateNode.containerInfo.firstChild)),
                                        (Fa = t),
                                        (a = Ua = !0)),
                                    a)
                            ) {
                                if (null != (e = l.mutableSourceEagerHydrationData))
                                    for (l = 0; l < e.length; l += 2)
                                        ((a = e[l])._workInProgressVersionPrimary = e[l + 1]),
                                            Ha.push(a);
                                for (n = xa(t, null, r, n), t.child = n; n;)
                                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                            } else Io(e, t, r, n), Wa();
                            t = t.child;
                        }
                        return t;
                    case 5:
                        return (
                            Oa(t),
                            null === e && Va(t),
                            (r = t.type),
                            (l = t.pendingProps),
                            (a = null !== e ? e.memoizedProps : null),
                            (u = l.children),
                            Vr(r, l) ? (u = null) : null !== a && Vr(r, a) && (t.flags |= 16),
                            Ao(e, t),
                            Io(e, t, u, n),
                            t.child
                        );
                    case 6:
                        return null === e && Va(t), null;
                    case 13:
                        return Yo(e, t, n);
                    case 4:
                        return (
                            za(t, t.stateNode.containerInfo),
                            (r = t.pendingProps),
                            null === e ? (t.child = Ea(t, null, r, n)) : Io(e, t, r, n),
                            t.child
                        );
                    case 11:
                        return (
                            (r = t.type),
                            (l = t.pendingProps),
                            Fo(e, t, r, (l = t.elementType === r ? l : Kl(r, l)), n)
                        );
                    case 7:
                        return Io(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Io(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            (r = t.type._context),
                                (l = t.pendingProps),
                                (u = t.memoizedProps),
                                (a = l.value);
                            var i = t.type._context;
                            if ((il(Yl, i._currentValue), (i._currentValue = a), null !== u))
                                if (
                                    ((i = u.value),
                                        0 ===
                                        (a = ur(i, a)
                                            ? 0
                                            : 0 |
                                            ("function" === typeof r._calculateChangedBits
                                                ? r._calculateChangedBits(i, a)
                                                : 1073741823)))
                                ) {
                                    if (u.children === l.children && !fl.current) {
                                        t = nu(e, t, n);
                                        break e;
                                    }
                                } else
                                    for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                        var s = i.dependencies;
                                        if (null !== s) {
                                            u = i.child;
                                            for (var c = s.firstContext; null !== c;) {
                                                if (c.context === r && 0 !== (c.observedBits & a)) {
                                                    1 === i.tag &&
                                                        (((c = ua(-1, n & -n)).tag = 2), ia(i, c)),
                                                        (i.lanes |= n),
                                                        null !== (c = i.alternate) && (c.lanes |= n),
                                                        ta(i.return, n),
                                                        (s.lanes |= n);
                                                    break;
                                                }
                                                c = c.next;
                                            }
                                        } else
                                            u = 10 === i.tag && i.type === t.type ? null : i.child;
                                        if (null !== u) u.return = i;
                                        else
                                            for (u = i; null !== u;) {
                                                if (u === t) {
                                                    u = null;
                                                    break;
                                                }
                                                if (null !== (i = u.sibling)) {
                                                    (i.return = u.return), (u = i);
                                                    break;
                                                }
                                                u = u.return;
                                            }
                                        i = u;
                                    }
                            Io(e, t, l.children, n), (t = t.child);
                        }
                        return t;
                    case 9:
                        return (
                            (l = t.type),
                            (r = (a = t.pendingProps).children),
                            na(t, n),
                            (r = r((l = ra(l, a.unstable_observedBits)))),
                            (t.flags |= 1),
                            Io(e, t, r, n),
                            t.child
                        );
                    case 14:
                        return (
                            (a = Kl((l = t.type), t.pendingProps)),
                            Do(e, t, l, (a = Kl(l.type, a)), r, n)
                        );
                    case 15:
                        return Uo(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return (
                            (r = t.type),
                            (l = t.pendingProps),
                            (l = t.elementType === r ? l : Kl(r, l)),
                            null !== e &&
                            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                            (t.tag = 1),
                            hl(r) ? ((e = !0), gl(t)) : (e = !1),
                            na(t, n),
                            va(t, r, l),
                            ga(t, r, l, n),
                            $o(null, t, r, !0, e, n)
                        );
                    case 19:
                        return tu(e, t, n);
                    case 23:
                    case 24:
                        return jo(e, t, n);
                }
                throw Error(o(156, t.tag));
            }),
                (ts.prototype.render = function (e) {
                    Gi(e, this._internalRoot, null, null);
                }),
                (ts.prototype.unmount = function () {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    Gi(null, e, null, function () {
                        t[Gr] = null;
                    });
                }),
                (tt = function (e) {
                    13 === e.tag && (fi(e, 4, si()), es(e, 4));
                }),
                (nt = function (e) {
                    13 === e.tag && (fi(e, 67108864, si()), es(e, 67108864));
                }),
                (rt = function (e) {
                    if (13 === e.tag) {
                        var t = si(),
                            n = ci(e);
                        fi(e, n, t), es(e, n);
                    }
                }),
                (lt = function (e, t) {
                    return t();
                }),
                (Pe = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (
                                    n = n.querySelectorAll(
                                        "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                                    ),
                                    t = 0;
                                    t < n.length;
                                    t++
                                ) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var l = nl(r);
                                        if (!l) throw Error(o(90));
                                        G(r), ne(r, l);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            se(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && oe(e, !!n.multiple, t, !1);
                    }
                }),
                (Re = yi),
                (Me = function (e, t, n, r, l) {
                    var a = Tu;
                    Tu |= 4;
                    try {
                        return $l(98, e.bind(null, t, n, r, l));
                    } finally {
                        0 === (Tu = a) && (Wu(), Hl());
                    }
                }),
                (Ie = function () {
                    0 === (49 & Tu) &&
                        ((function () {
                            if (null !== ti) {
                                var e = ti;
                                (ti = null),
                                    e.forEach(function (e) {
                                        (e.expiredLanes |= 24 & e.pendingLanes), pi(e, Al());
                                    });
                            }
                            Hl();
                        })(),
                            Oi());
                }),
                (Fe = function (e, t) {
                    var n = Tu;
                    Tu |= 2;
                    try {
                        return e(t);
                    } finally {
                        0 === (Tu = n) && (Wu(), Hl());
                    }
                });
            var as = { Events: [el, tl, nl, Le, Oe, Oi, { current: !1 }] },
                os = {
                    findFiberByHostInstance: Zr,
                    bundleType: 0,
                    version: "17.0.2",
                    rendererPackageName: "react-dom",
                },
                us = {
                    bundleType: os.bundleType,
                    version: os.version,
                    rendererPackageName: os.rendererPackageName,
                    rendererConfig: os.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: k.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = Ze(e)) ? null : e.stateNode;
                    },
                    findFiberByHostInstance:
                        os.findFiberByHostInstance ||
                        function () {
                            return null;
                        },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!is.isDisabled && is.supportsFiber)
                    try {
                        (wl = is.inject(us)), (kl = is);
                    } catch (ve) { }
            }
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = as),
                (t.createPortal = ls),
                (t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw Error(o(268, Object.keys(e)));
                    }
                    return (e = null === (e = Ze(t)) ? null : e.stateNode);
                }),
                (t.flushSync = function (e, t) {
                    var n = Tu;
                    if (0 !== (48 & n)) return e(t);
                    Tu |= 1;
                    try {
                        if (e) return $l(99, e.bind(null, t));
                    } finally {
                        (Tu = n), Hl();
                    }
                }),
                (t.hydrate = function (e, t, n) {
                    if (!ns(t)) throw Error(o(200));
                    return rs(null, e, t, !0, n);
                }),
                (t.render = function (e, t, n) {
                    if (!ns(t)) throw Error(o(200));
                    return rs(null, e, t, !1, n);
                }),
                (t.unmountComponentAtNode = function (e) {
                    if (!ns(e)) throw Error(o(40));
                    return (
                        !!e._reactRootContainer &&
                        (gi(function () {
                            rs(null, null, e, !1, function () {
                                (e._reactRootContainer = null), (e[Gr] = null);
                            });
                        }),
                            !0)
                    );
                }),
                (t.unstable_batchedUpdates = yi),
                (t.unstable_createPortal = function (e, t) {
                    return ls(
                        e,
                        t,
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : null
                    );
                }),
                (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                    if (!ns(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return rs(e, t, n, !1, r);
                }),
                (t.version = "17.0.2");
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(9);
        },
        function (e, t, n) {
            "use strict";
            var r, l, a, o;
            if (
                "object" === typeof performance &&
                "function" === typeof performance.now
            ) {
                var u = performance;
                t.unstable_now = function () {
                    return u.now();
                };
            } else {
                var i = Date,
                    s = i.now();
                t.unstable_now = function () {
                    return i.now() - s;
                };
            }
            if (
                "undefined" === typeof window ||
                "function" !== typeof MessageChannel
            ) {
                var c = null,
                    f = null,
                    d = function e() {
                        if (null !== c)
                            try {
                                var n = t.unstable_now();
                                c(!0, n), (c = null);
                            } catch (r) {
                                throw (setTimeout(e, 0), r);
                            }
                    };
                (r = function (e) {
                    null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(d, 0));
                }),
                    (l = function (e, t) {
                        f = setTimeout(e, t);
                    }),
                    (a = function () {
                        clearTimeout(f);
                    }),
                    (t.unstable_shouldYield = function () {
                        return !1;
                    }),
                    (o = t.unstable_forceFrameRate = function () { });
            } else {
                var p = window.setTimeout,
                    h = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var m = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame &&
                        console.error(
                            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                        ),
                        "function" !== typeof m &&
                        console.error(
                            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                        );
                }
                var v = !1,
                    y = null,
                    g = -1,
                    b = 5,
                    w = 0;
                (t.unstable_shouldYield = function () {
                    return t.unstable_now() >= w;
                }),
                    (o = function () { }),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e
                            ? console.error(
                                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                            )
                            : (b = 0 < e ? Math.floor(1e3 / e) : 5);
                    });
                var k = new MessageChannel(),
                    S = k.port2;
                (k.port1.onmessage = function () {
                    if (null !== y) {
                        var e = t.unstable_now();
                        w = e + b;
                        try {
                            y(!0, e) ? S.postMessage(null) : ((v = !1), (y = null));
                        } catch (n) {
                            throw (S.postMessage(null), n);
                        }
                    } else v = !1;
                }),
                    (r = function (e) {
                        (y = e), v || ((v = !0), S.postMessage(null));
                    }),
                    (l = function (e, n) {
                        g = p(function () {
                            e(t.unstable_now());
                        }, n);
                    }),
                    (a = function () {
                        h(g), (g = -1);
                    });
            }
            function E(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; ;) {
                    var r = (n - 1) >>> 1,
                        l = e[r];
                    if (!(void 0 !== l && 0 < C(l, t))) break e;
                    (e[r] = t), (e[n] = l), (n = r);
                }
            }
            function x(e) {
                return void 0 === (e = e[0]) ? null : e;
            }
            function _(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, l = e.length; r < l;) {
                            var a = 2 * (r + 1) - 1,
                                o = e[a],
                                u = a + 1,
                                i = e[u];
                            if (void 0 !== o && 0 > C(o, n))
                                void 0 !== i && 0 > C(i, o)
                                    ? ((e[r] = i), (e[u] = n), (r = u))
                                    : ((e[r] = o), (e[a] = n), (r = a));
                            else {
                                if (!(void 0 !== i && 0 > C(i, n))) break e;
                                (e[r] = i), (e[u] = n), (r = u);
                            }
                        }
                    }
                    return t;
                }
                return null;
            }
            function C(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }
            var P = [],
                N = [],
                T = 1,
                z = null,
                L = 3,
                O = !1,
                R = !1,
                M = !1;
            function I(e) {
                for (var t = x(N); null !== t;) {
                    if (null === t.callback) _(N);
                    else {
                        if (!(t.startTime <= e)) break;
                        _(N), (t.sortIndex = t.expirationTime), E(P, t);
                    }
                    t = x(N);
                }
            }
            function F(e) {
                if (((M = !1), I(e), !R))
                    if (null !== x(P)) (R = !0), r(D);
                    else {
                        var t = x(N);
                        null !== t && l(F, t.startTime - e);
                    }
            }
            function D(e, n) {
                (R = !1), M && ((M = !1), a()), (O = !0);
                var r = L;
                try {
                    for (
                        I(n), z = x(P);
                        null !== z &&
                        (!(z.expirationTime > n) || (e && !t.unstable_shouldYield()));

                    ) {
                        var o = z.callback;
                        if ("function" === typeof o) {
                            (z.callback = null), (L = z.priorityLevel);
                            var u = o(z.expirationTime <= n);
                            (n = t.unstable_now()),
                                "function" === typeof u ? (z.callback = u) : z === x(P) && _(P),
                                I(n);
                        } else _(P);
                        z = x(P);
                    }
                    if (null !== z) var i = !0;
                    else {
                        var s = x(N);
                        null !== s && l(F, s.startTime - n), (i = !1);
                    }
                    return i;
                } finally {
                    (z = null), (L = r), (O = !1);
                }
            }
            var U = o;
            (t.unstable_IdlePriority = 5),
                (t.unstable_ImmediatePriority = 1),
                (t.unstable_LowPriority = 4),
                (t.unstable_NormalPriority = 3),
                (t.unstable_Profiling = null),
                (t.unstable_UserBlockingPriority = 2),
                (t.unstable_cancelCallback = function (e) {
                    e.callback = null;
                }),
                (t.unstable_continueExecution = function () {
                    R || O || ((R = !0), r(D));
                }),
                (t.unstable_getCurrentPriorityLevel = function () {
                    return L;
                }),
                (t.unstable_getFirstCallbackNode = function () {
                    return x(P);
                }),
                (t.unstable_next = function (e) {
                    switch (L) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = L;
                    }
                    var n = L;
                    L = t;
                    try {
                        return e();
                    } finally {
                        L = n;
                    }
                }),
                (t.unstable_pauseExecution = function () { }),
                (t.unstable_requestPaint = U),
                (t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3;
                    }
                    var n = L;
                    L = e;
                    try {
                        return t();
                    } finally {
                        L = n;
                    }
                }),
                (t.unstable_scheduleCallback = function (e, n, o) {
                    var u = t.unstable_now();
                    switch (
                    ("object" === typeof o && null !== o
                        ? (o = "number" === typeof (o = o.delay) && 0 < o ? u + o : u)
                        : (o = u),
                        e)
                    ) {
                        case 1:
                            var i = -1;
                            break;
                        case 2:
                            i = 250;
                            break;
                        case 5:
                            i = 1073741823;
                            break;
                        case 4:
                            i = 1e4;
                            break;
                        default:
                            i = 5e3;
                    }
                    return (
                        (e = {
                            id: T++,
                            callback: n,
                            priorityLevel: e,
                            startTime: o,
                            expirationTime: (i = o + i),
                            sortIndex: -1,
                        }),
                        o > u
                            ? ((e.sortIndex = o),
                                E(N, e),
                                null === x(P) &&
                                e === x(N) &&
                                (M ? a() : (M = !0), l(F, o - u)))
                            : ((e.sortIndex = i), E(P, e), R || O || ((R = !0), r(D))),
                        e
                    );
                }),
                (t.unstable_wrapCallback = function (e) {
                    var t = L;
                    return function () {
                        var n = L;
                        L = t;
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            L = n;
                        }
                    };
                });
        },
        ,
        ,
        function (e, t, n) {
            "use strict";
            n(3);
            var r = n(1),
                l = 60103;
            if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
                var a = Symbol.for;
                (l = a("react.element")), (t.Fragment = a("react.fragment"));
            }
            var o =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                    .ReactCurrentOwner,
                u = Object.prototype.hasOwnProperty,
                i = { key: !0, ref: !0, __self: !0, __source: !0 };
            function s(e, t, n) {
                var r,
                    a = {},
                    s = null,
                    c = null;
                for (r in (void 0 !== n && (s = "" + n),
                    void 0 !== t.key && (s = "" + t.key),
                    void 0 !== t.ref && (c = t.ref),
                    t))
                    u.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
                return {
                    $$typeof: l,
                    type: e,
                    key: s,
                    ref: c,
                    props: a,
                    _owner: o.current,
                };
            }
            (t.jsx = s), (t.jsxs = s);
        },
    ],
]);
//# sourceMappingURL=2.72d81b97.chunk.js.map
;
