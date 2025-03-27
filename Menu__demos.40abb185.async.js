"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[664],{60503:function(c,n,e){e.r(n);var _=e(68400),t=e.n(_),l=e(5574),u=e.n(l),h=e(67294),E=e(88095),a=e(31081),o=e(85893),s;n.default=function(){var b=(0,h.useState)({x:0,y:0}),d=u()(b,2),M=d[0],D=d[1],m=(0,a.useMenuStore)(),f=[{label:"menu1",value:"menu1",checked:!0,handler:function(){console.log("menu1")}},{label:"menu2",value:"menu2",children:[{label:"menu2-1",value:"menu2-1"},{label:"menu2-2",value:"menu2-2"}]},{label:"menu3",value:"menu3"}];return(0,o.jsxs)(v,{onContextMenu:function(r){r.preventDefault(),D({x:r.clientX,y:r.clientY}),m.show()},children:["Right click here",(0,o.jsx)(a.Menu,{items:f,store:m,modal:!0,getAnchorRect:function(){return M}})]})};var v=E.default.div(s||(s=t()([`
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
`])))},56166:function(c,n,e){e.r(n);var _=e(31081),t=e(85893);n.default=function(){var l=[{label:"\u590D\u5236",value:"copy",shortcut:"\u2318C",handler:function(){console.log("\u590D\u5236")}},{label:"\u7C98\u8D34",value:"paste",shortcut:"\u2318V",handler:function(){console.log("\u7C98\u8D34")}},{type:"divider"},{label:"\u7F16\u8F91",value:"edit",shortcut:"\u2318E",children:[{label:"\u64A4\u9500",value:"undo",shortcut:"\u2318Z"},{label:"\u91CD\u505A",value:"redo",shortcut:"\u21E7\u2318Z"}]},{label:"\u67E5\u627E",value:"find",shortcut:"\u2318F"}];return(0,t.jsx)(_.Menu,{items:l,children:"actions"})}}}]);
