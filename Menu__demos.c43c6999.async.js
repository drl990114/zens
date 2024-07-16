"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[664],{50871:function(c,n,e){e.r(n);var _=e(68400),u=e.n(_),l=e(5574),a=e.n(l),h=e(67294),E=e(88095),r=e(31081),s=e(85893),m;n.default=function(){var M=(0,h.useState)({x:0,y:0}),o=a()(M,2),b=o[0],D=o[1],d=(0,r.useMenuStore)(),O=[{label:"menu1",value:"menu1",checked:!0,handler:function(){console.log("menu1")}},{label:"menu2",value:"menu2",children:[{label:"menu2-1",value:"menu2-1"},{label:"menu2-2",value:"menu2-2"}]},{label:"menu3",value:"menu3"}];return(0,s.jsxs)(v,{onContextMenu:function(t){t.preventDefault(),D({x:t.clientX,y:t.clientY}),d.show()},children:["Right click here",(0,s.jsx)(r.Menu,{items:O,store:d,modal:!0,getAnchorRect:function(){return b}})]})};var v=E.ZP.div(m||(m=u()([`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: dashed;
  border-color: hsl(204 20% 88%);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
`])))},41898:function(c,n,e){e.r(n);var _=e(31081),u=e(85893);n.default=function(){var l=[{label:"menu1",value:"menu1",checked:!0,handler:function(){console.log("menu1")}},{label:"menu2",value:"menu2",children:[{label:"menu2-1",value:"menu2-1"},{label:"menu2-2",value:"menu2-2"}]},{label:"menu3",value:"menu3"}];return(0,u.jsx)(_.Menu,{items:l,children:"actions"})}}}]);
