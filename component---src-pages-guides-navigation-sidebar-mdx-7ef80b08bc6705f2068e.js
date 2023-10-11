"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4345],{5842:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n=a(5987),l=(a(7294),a(4983)),i=a(4295);const r=["components"],o={},s=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var m;const p={_frontmatter:o},d=i.Z;function c(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,l.kt)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"PageDescription"},(0,l.kt)("p",null,"One of the most important pieces of making a working site is to define your\nnavigation items. This allows the theme to inform the SideNav component as well\nas the next/previous components at the bottom of each page.")),(0,l.kt)("h2",null,"Yaml data"),(0,l.kt)("p",null,"Unfortunately, genenerating left nav contents purely from the pages directory\nhas some fatal flaws. It makes it very difficult to establish the order of items\nor to hide items all together. In ",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),", you’ll list your\nnav items in order."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n- title: Single Page\n  pages:\n    - path: /single-page\n")),(0,l.kt)("p",null,"Some important things to note here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You only need to link to the first tab if using page tabs"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"title")," refers to the menu and item text, it’s allowed to have spaces"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," refer to the relative path to the mdx file in your pages"),(0,l.kt)("li",{parentName:"ul"},"You can make a ",(0,l.kt)("inlineCode",{parentName:"li"},"Page/index.mdx")," file if you’d prefer to have assets in a\nfolder. The path would still just look like ",(0,l.kt)("inlineCode",{parentName:"li"},"/Page"))),(0,l.kt)("h2",null,"Adding a divider"),(0,l.kt)("p",null,"You can insert a divider below any top-level nav item by adding the\n",(0,l.kt)("inlineCode",{parentName:"p"},"hasDivider: true")," property to it’s configuration under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),". ",(0,l.kt)("strong",{parentName:"p"},"Note:")," dividers can only be use with top-level nav\nitems and are incompatible with the\n",(0,l.kt)("a",{parentName:"p",href:"/gatsby1-new/guides/configuration#navigation-style"},"header navigation style"),"."),(0,l.kt)("p",null,"When shadowed, the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceLinks")," component can optionally receive an\n",(0,l.kt)("inlineCode",{parentName:"p"},"includeDividerSpace")," prop. Set this to false if you want to remove the margin\nabove and below the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceLinks")," divider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n  hasDivider: true\n- title: Single Page\n  pages:\n    - path: /single-page\n")),(0,l.kt)("p",null,"In the example above, a divider will appear between ",(0,l.kt)("strong",{parentName:"p"},"Menu")," and ",(0,l.kt)("strong",{parentName:"p"},"Single\nPage"),"."),(0,l.kt)("h2",null,"Customizing"),(0,l.kt)("p",null,"The nav item list can be customized using Gatsby theme\n",(0,l.kt)("a",{parentName:"p",href:"/gatsby1-new/guides/shadowing"},"shadowing"),". Simply provide your own implementation of\n",(0,l.kt)("inlineCode",{parentName:"p"},"/src/util/NavItems.js")," which can augment or replace the nav items read from\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// /src/util/NavItems.js\nimport { useNavItems as themeUseNavItems } from 'gatsby-theme-carbon/src/util/NavItems';\n\n// add nav items\nexport function useNavItems() {\n  const navItems = themeUseNavItems();\n  return navItems.concat({\n    title: 'Additional Nav Item',\n    pages: [\n      { path: '/page1', title: 'New Page 1' },\n      { path: '/page2', title: 'New Page 2' },\n    ],\n  });\n}\n")))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(8650),i=a.n(l),r=a(5444),o=a(9403),s=a(3321),m=a(5900),p=a.n(m);var d=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:o,branch:s}=a||l,m=i+"/edit/"+s+o+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),o=t===l,s=new RegExp(l+"/?(#.*)?$"),m=a.replace(s,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var v=h,k=a(2881),N=a(6958),b=a(36);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:l,Title:m}=e;const{frontmatter:p={},relativePagePath:g,titleType:h}=t,{tabs:b,title:y,theme:w,description:P,keywords:E,date:x}=p,{interiorTheme:C}=(0,N.Z)(),{site:{pathPrefix:T}}=(0,r.useStaticQuery)("2456312558"),I=T?l.pathname.replace(T,""):l.pathname,D=b?I.split("/").filter(Boolean).slice(-1)[0]||i()(b[0],{lower:!0}):"",S=w||C;return n.createElement(s.Z,{tabs:b,homepage:!1,theme:S,pageTitle:y,pageDescription:P,pageKeywords:E,titleType:h},n.createElement(d,{title:m?n.createElement(m,null):y,label:"label",tabs:b,theme:S}),b&&n.createElement(v,{title:y,slug:I,tabs:b,currentTab:D}),n.createElement(k.Z,{padded:!0},a,n.createElement(c,{relativePagePath:g}),n.createElement(f,{date:x})),n.createElement(u.Z,{pageContext:t,location:l,slug:I,tabs:b,currentTab:D}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-navigation-sidebar-mdx-7ef80b08bc6705f2068e.js.map