(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),i=a("q1tI"),r=a.n(i),l=(a("tUrg"),a("HtOF")),o=a("Wbzz"),c=function(e){var t=e.open,a=e.setOpen;return r.a.createElement("div",{open:t,onClick:function(){return a(!t)},role:"link",tabIndex:"0",className:t?"header__sidebarButton is-open":"header__sidebarButton"},r.a.createElement("i",{className:"header__sidebarButton_bar"}),r.a.createElement("i",{className:"header__sidebarButton_bar"}))},s=function(e){var t=e.open,a=e.links,n=e.docs;return r.a.createElement("nav",{open:t,className:t?"header__mobileNav is-open":"header__mobileNav"},a.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title),0===t?r.a.createElement("ul",{className:"header__mobileNav_item_sub"},n.map((function(e,t){return r.a.createElement("div",{className:"header__mobileNav_item_sub_group",key:e.id},r.a.createElement("span",{className:"header__mobileNav_item_sub_group_title"},e.title),r.a.createElement("ul",{className:"header__mobileNav_item_sub_group_sub"},e.items.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item_sub_group_sub_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active"},e.title))}))))}))):null)})))},m=a("jq+2"),d=a.n(m),u=function(e){var t=e.siteTitle,a=Object(i.useState)(!1),n=a[0],m=a[1],u=l.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(o.Link,{to:"/"},r.a.createElement("img",{src:d.a,alt:t}))),r.a.createElement("div",{className:"header__hamburger"},r.a.createElement(c,{open:n,setOpen:m})),r.a.createElement("nav",{className:"header__nav"},u.allHeaderNavYaml.nodes[0].items.map((function(e,t){return r.a.createElement("li",{className:"header__nav_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title))}))),r.a.createElement("div",{className:"header__contribute"},r.a.createElement(o.Link,{to:"/contribute",activeClassName:"is-active",className:"btn-small btn-secondary_purple"},"Contribuisci")))),r.a.createElement(s,{open:n,setOpen:m,links:u.allHeaderNavYaml.nodes[0].items,docs:u.allSidebarNavYaml.nodes}))};u.defaultProps={siteTitle:""};var p=u;t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("main",{className:"content"},t))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework","description":"RMF è un framework open-source che aiuta le aziende di trasporto pubblico a migliorare l\'esperienza di mobilità nelle zone emarginate.","author":"@mozzillation"}}}}')},HtOF:function(e){e.exports=JSON.parse('{"data":{"allHeaderNavYaml":{"nodes":[{"id":"af222891-9372-5e0f-ade4-bdfca8c9f59d","items":[{"link":"/doc/","title":"Documentazione"},{"link":"/about","title":"Il Progetto"},{"link":"/resources","title":"Risorse"}]}]},"allSidebarNavYaml":{"nodes":[{"id":"8248f216-94dd-55dd-b1af-efa652ce0d3a","title":"Introduzione","items":[{"title":"Una nuova ruralità in movimento","link":"/doc/"}]},{"id":"6e832fa3-4040-559e-9c47-9cccc6e56d52","title":"Soluzioni Smart","items":[{"title":"Segnaletica digitale","link":"/doc/real-time-data"}]},{"id":"9cc6e58b-5477-5b12-9420-4bc8d4935a04","title":"Contribuire","items":[{"title":"Codice di Condotta","link":"/doc/code-of-conduct"}]}]}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework"}}}}')},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),l=a("Bl7J"),o=a("gVtm"),c=a.n(o),s=a("vrFN");t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement("div",{className:"page-index"},i.a.createElement("section",{className:"page-index__intro"},i.a.createElement("div",{className:"page-index__intro_bg"},i.a.createElement("video",{preload:"true",autoPlay:!0,playsInline:!0,muted:!0,loop:!0},i.a.createElement("source",{src:c.a,type:"video/mp4"}),"Your browser does not support the video tag.")),i.a.createElement("div",{className:"module"},i.a.createElement("div",{className:"page-index__intro_text"},i.a.createElement("h1",null,"Una nuova ruralità in movimento"))),i.a.createElement("div",{className:"page-index__intro_subtext"},i.a.createElement("div",{className:"module"},i.a.createElement("div",{className:"page-index__intro_subtext_card"},i.a.createElement("p",null,"RMF è un framework open-source che aiuta le aziende di trasporto pubblico a migliorare l'esperienza di mobilità nelle zone emarginate."),i.a.createElement("div",{className:"page-index__intro_text_bottom"},i.a.createElement(r.Link,{to:"/doc",className:"btn-big btn-primary_orange"},"Documentazione"),i.a.createElement(r.Link,{to:"/about",className:"btn-big btn-secondary_orange"},"Il Progetto"))))))))}},gVtm:function(e,t,a){e.exports=a.p+"static/intro-fe4abf5b93fb01e8763f9dea90c9ba1b.mp4"},"jq+2":function(e,t,a){e.exports=a.p+"static/rmf_logo-dff938a541f4915ee2654e1809833883.svg"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrFN:function(e,t,a){"use strict";var n=a("EH9Q"),i=a("q1tI"),r=a.n(i),l=a("rid2");function o(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(l.HelmetProvider,null,r.a.createElement(l.Helmet,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s — "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)}))}o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-js-e81529409a4009313c56.js.map