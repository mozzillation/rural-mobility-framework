(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9I2h":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Bl7J"),l=a("vrFN");t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(l.a,{title:"Risorse"}))}},Bl7J:function(e,t,a){"use strict";var i=a("IRj2"),n=a("q1tI"),r=a.n(n),l=(a("tUrg"),a("HtOF")),c=a("Wbzz"),o=function(e){var t=e.open,a=e.setOpen;return r.a.createElement("div",{open:t,onClick:function(){return a(!t)},role:"link",tabIndex:"0",className:t?"header__sidebarButton is-open":"header__sidebarButton"},r.a.createElement("i",{className:"header__sidebarButton_bar"}),r.a.createElement("i",{className:"header__sidebarButton_bar"}))},s=function(e){var t=e.open,a=e.links,i=e.docs;return r.a.createElement("nav",{open:t,className:t?"header__mobileNav is-open":"header__mobileNav"},a.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item",key:t},r.a.createElement(c.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title),0===t?r.a.createElement("ul",{className:"header__mobileNav_item_sub"},i.map((function(e,t){return r.a.createElement("div",{className:"header__mobileNav_item_sub_group",key:e.id},r.a.createElement("span",{className:"header__mobileNav_item_sub_group_title"},e.title),r.a.createElement("ul",{className:"header__mobileNav_item_sub_group_sub"},e.items.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item_sub_group_sub_item",key:t},r.a.createElement(c.Link,{to:e.link,activeClassName:"is-active"},e.title))}))))}))):null)})))},m=a("jq+2"),d=a.n(m),u=function(e){var t=e.siteTitle,a=Object(n.useState)(!1),i=a[0],m=a[1],u=l.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:d.a,alt:t}))),r.a.createElement("div",{className:"header__hamburger"},r.a.createElement(o,{open:i,setOpen:m})),r.a.createElement("nav",{className:"header__nav"},u.allHeaderNavYaml.nodes[0].items.map((function(e,t){return r.a.createElement("li",{className:"header__nav_item",key:t},r.a.createElement(c.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title))}))),r.a.createElement("div",{className:"header__contribute"},r.a.createElement(c.Link,{to:"/contribute",activeClassName:"is-active",className:"btn-small btn-secondary_purple"},"Contribuisci")))),r.a.createElement(s,{open:i,setOpen:m,links:u.allHeaderNavYaml.nodes[0].items,docs:u.allSidebarNavYaml.nodes}))};u.defaultProps={siteTitle:""};var p=u;t.a=function(e){var t=e.children,a=i.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("main",{className:"content"},t))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework","description":"RMF è un framework open-source che aiuta le aziende di trasporto pubblico a migliorare l\'esperienza di mobilità nelle zone emarginate.","author":"@mozzillation"}}}}')},HtOF:function(e){e.exports=JSON.parse('{"data":{"allHeaderNavYaml":{"nodes":[{"id":"af222891-9372-5e0f-ade4-bdfca8c9f59d","items":[{"link":"/doc/","title":"Documentazione"},{"link":"/about","title":"Il Progetto"},{"link":"/resources","title":"Risorse"}]}]},"allSidebarNavYaml":{"nodes":[{"id":"8248f216-94dd-55dd-b1af-efa652ce0d3a","title":"Introduzione","items":[{"title":"Una nuova ruralità in movimento","link":"/doc/"}]},{"id":"6e832fa3-4040-559e-9c47-9cccc6e56d52","title":"Soluzioni Smart","items":[{"title":"Segnaletica digitale","link":"/doc/real-time-data"}]},{"id":"9cc6e58b-5477-5b12-9420-4bc8d4935a04","title":"Contribuire","items":[{"title":"Codice di Condotta","link":"/doc/code-of-conduct"}]}]}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework"}}}}')},"jq+2":function(e,t,a){e.exports=a.p+"static/rmf_logo-dff938a541f4915ee2654e1809833883.svg"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrFN:function(e,t,a){"use strict";var i=a("EH9Q"),n=a("q1tI"),r=a.n(n),l=a("rid2");function c(e){var t=e.description,a=e.lang,n=e.meta,c=e.title,o=i.data.site,s=t||o.siteMetadata.description;return r.a.createElement(l.HelmetProvider,null,r.a.createElement(l.Helmet,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s — "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(n)}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-resources-js-1b64e3c56c2f61225dd4.js.map