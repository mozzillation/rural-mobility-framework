(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3GEu":function(u,D,e){"use strict";e.r(D);var t=e("q1tI"),n=e.n(t),r=e("A2+M"),a=(e("dW3v"),e("Bl7J")),c=e("vrFN"),o=e("W/9C"),i=(e("tUrg"),e("Wbzz")),F=function(u){var D=u.docs;return n.a.createElement(n.a.Fragment,null,n.a.createElement("aside",{className:"navSidebar"},D.map((function(u,D){return n.a.createElement("div",{className:"navSidebar_group",key:u.id},n.a.createElement("span",{className:"navSidebar_group_title"},u.title),n.a.createElement("ul",{className:"navSidebar_group_sub"},u.items.map((function(u,D){return n.a.createElement("li",{className:"navSidebar_group_sub_item",key:D},n.a.createElement(i.Link,{to:u.link,activeClassName:"is-active"},u.title))}))))}))))},l=e("QJUA"),E=e("9eSz"),s=e.n(E),f=e("ZVJz"),p=e.n(f),C=e("oEq0"),d=function(u){var D=u.current,e=u.headings,t=new p.a;return n.a.createElement("div",{className:"toc"},n.a.createElement("div",{className:"toc__entries text"},e.map((function(u){return n.a.createElement("li",{key:u.value,className:"toc__entry toc__entry-"+u.depth},n.a.createElement("i",{className:"abstract"}),n.a.createElement(C.AnchorLink,{to:"/"+D+"#"+t.slug(u.value)},u.value))}))))};e.d(D,"docQuery",(function(){return m}));var m="534207439";D.default=function(u){var D=u.data,e=D.mdx,t=D.allSidebarNavYaml,i=e.frontmatter.featuredImage,E=t.nodes,f=e.parent.relativePath,p=e.parent.modifiedTime;return n.a.createElement(a.a,null,n.a.createElement(c.a,{title:e.frontmatter.title}),n.a.createElement("div",{className:"page-doc"},n.a.createElement(F,{docs:E}),n.a.createElement(d,{current:e.frontmatter.slug,headings:e.headings}),n.a.createElement("section",{className:"page-doc__content"},n.a.createElement("header",{className:"page-doc__content_header"},n.a.createElement("div",{className:"module"},n.a.createElement("div",{className:"grid"},n.a.createElement("div",{className:"page-doc__content_header_text"},e.frontmatter.category?n.a.createElement("span",{className:"page-doc__content_header_text_category"},e.frontmatter.category):null,n.a.createElement("h1",null,e.frontmatter.title)))),i?n.a.createElement("div",{className:"page-doc__content_header_thumb"},n.a.createElement(s.a,{fluid:i.childImageSharp.fluid,alt:e.frontmatter.title})):null),n.a.createElement("main",{className:"page-doc__content_body"},n.a.createElement(r.MDXRenderer,{headings:e.headings},e.body)),n.a.createElement(l.b,{path:f,lastEdit:p}),n.a.createElement(l.a,null),n.a.createElement(o.a,null))))}},"A2+M":function(u,D,e){var t=e("X8hv");u.exports={MDXRenderer:t}},F0uZ:function(u,D,e){"use strict";Object.defineProperty(D,"__esModule",{value:!0}),D.AnchorLink=o;var t,n=(t=e("q1tI"))&&t.__esModule?t:{default:t},r=e("Wbzz"),a=e("dj5g"),c=e("PDH8");function o(u){var D=u.to,e=u.title,t=u.children,c=u.className,o=u.stripHash,i=void 0!==o&&o,F={to:i?(0,a.stripHashedLocation)(D):D,onClick:function(u){return i?(0,a.handleStrippedLinkClick)(D,u):(0,a.handleLinkClick)(D,u)}};return e&&(F.title=e),c&&(F.className=c),n.default.createElement(r.Link,F,Boolean(t)?t:e)}o.propTypes=c.anchorLinkTypes},I5cv:function(u,D,e){var t=e("XKFU"),n=e("Kuth"),r=e("2OiF"),a=e("y3w9"),c=e("0/R4"),o=e("eeVq"),i=e("8MEG"),F=(e("dyZX").Reflect||{}).construct,l=o((function(){function u(){}return!(F((function(){}),[],u)instanceof u)})),E=!o((function(){F((function(){}))}));t(t.S+t.F*(l||E),"Reflect",{construct:function(u,D){r(u),a(D);var e=arguments.length<3?u:r(arguments[2]);if(E&&!l)return F(u,D,e);if(u==e){switch(D.length){case 0:return new u;case 1:return new u(D[0]);case 2:return new u(D[0],D[1]);case 3:return new u(D[0],D[1],D[2]);case 4:return new u(D[0],D[1],D[2],D[3])}var t=[null];return t.push.apply(t,D),new(i.apply(u,t))}var o=e.prototype,s=n(c(o)?o:Object.prototype),f=Function.apply.call(u,s,D);return c(f)?f:s}})},PDH8:function(u,D,e){"use strict";Object.defineProperty(D,"__esModule",{value:!0}),D.anchorLinkTypes=void 0;var t,n=(t=e("17x9"))&&t.__esModule?t:{default:t};var r={to:n.default.string.isRequired,title:n.default.string,className:n.default.string,stripHash:n.default.bool,children:n.default.node};D.anchorLinkTypes=r},Roim:function(u,D){u.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},X8hv:function(u,D,e){function t(u,D,e){return(t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(u){return!1}}()?Reflect.construct:function(u,D,e){var t=[null];t.push.apply(t,D);var r=new(Function.bind.apply(u,t));return e&&n(r,e.prototype),r}).apply(null,arguments)}function n(u,D){return(n=Object.setPrototypeOf||function(u,D){return u.__proto__=D,u})(u,D)}function r(u){return function(u){if(Array.isArray(u)){for(var D=0,e=new Array(u.length);D<u.length;D++)e[D]=u[D];return e}}(u)||function(u){if(Symbol.iterator in Object(u)||"[object Arguments]"===Object.prototype.toString.call(u))return Array.from(u)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(u,D){var e=Object.keys(u);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(u);D&&(t=t.filter((function(D){return Object.getOwnPropertyDescriptor(u,D).enumerable}))),e.push.apply(e,t)}return e}function c(u){for(var D=1;D<arguments.length;D++){var e=null!=arguments[D]?arguments[D]:{};D%2?a(Object(e),!0).forEach((function(D){o(u,D,e[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(D){Object.defineProperty(u,D,Object.getOwnPropertyDescriptor(e,D))}))}return u}function o(u,D,e){return D in u?Object.defineProperty(u,D,{value:e,enumerable:!0,configurable:!0,writable:!0}):u[D]=e,u}e("jm62"),e("yt8O"),e("RW0V"),e("XfO3"),e("HEwt"),e("rE2o"),e("ioFf"),e("rGqo"),e("/SS/"),e("a1Th"),e("Btvt"),e("I5cv"),e("I5cv"),e("/SS/"),e("XfO3"),e("HEwt"),e("a1Th"),e("rE2o"),e("jm62"),e("ioFf"),e("rGqo"),e("yt8O"),e("Btvt"),e("RW0V");var i=e("q1tI"),F=e("7ljp"),l=F.useMDXComponents,E=F.mdx,s=e("BfwJ").useMDXScope;u.exports=function(u){var D=u.scope,e=u.components,n=u.children,a=function(u,D){if(null==u)return{};var e,t,n={},r=Object.keys(u);for(t=0;t<r.length;t++)e=r[t],D.indexOf(e)>=0||(n[e]=u[e]);return n}(u,["scope","components","children"]),o=l(e),F=s(D),f=i.useMemo((function(){if(!n)return null;var u=c({React:i,mdx:E},F),D=Object.keys(u),e=D.map((function(D){return u[D]}));return t(Function,["_fn"].concat(r(D),[""+n])).apply(void 0,[{}].concat(r(e)))}),[n,D]);return i.createElement(f,c({components:o},a))}},ZVJz:function(u,D,e){e("Tze0"),e("pIFo"),e("hHhE");var t=e("Roim");u.exports=c;var n=Object.hasOwnProperty,r=/\s/g,a=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function c(){if(!(this instanceof c))return new c;this.reset()}c.prototype.slug=function(u,D){for(var e=function(u,D){if("string"!=typeof u)return"";D||(u=u.toLowerCase());return u.trim().replace(a,"").replace(t(),"").replace(r,"-")}(u,!0===D),c=e;n.call(this.occurrences,e);)this.occurrences[c]++,e=c+"-"+this.occurrences[c];return this.occurrences[e]=0,e},c.prototype.reset=function(){this.occurrences=Object.create(null)}},oEq0:function(u,D,e){"use strict";Object.defineProperty(D,"__esModule",{value:!0}),Object.defineProperty(D,"AnchorLink",{enumerable:!0,get:function(){return t.AnchorLink}});var t=e("F0uZ")}}]);
//# sourceMappingURL=component---src-template-doc-js-e667f2ade86ffc3fe89d.js.map