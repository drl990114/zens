"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[664],{41898:function(S,d,n){n.r(d);var i=n(34409),t=n(85893);d.default=function(){var c=[{label:"menu1",value:"menu1",checked:!0,handler:function(){console.log("menu1")}},{label:"menu2",value:"menu2",children:[{label:"menu2-1",value:"menu2-1"},{label:"menu2-2",value:"menu2-2"}]}];return(0,t.jsx)(i.Z,{items:c,children:"actions"})}},34409:function(S,d,n){n.d(d,{Z:function(){return r}});var i=n(97857),t=n.n(i),c=n(13769),h=n.n(c),v=n(72682),f=n(87003),b=n(59029),j=n(79860),B=n(68400),y=n.n(B),x=n(49308),M=n(58106),T=n(964),u,m=(0,T.ZP)(x.v)(u||(u=y()([`
  position: relative;
  display: flex;
  min-width: 130px;
  flex-direction: column;
  overscroll-behavior: contain;
  border-radius: `,`;
  border-width: 1px;
  border-style: solid;
  border-color: `,`;
  background-color: `,`;
  padding: `,`;
  color: `,`;
  font-size: `,`;
  outline: none;
  overflow: visible;

  .separator {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 0px;
    width: 100%;
    border-top-width: 1px;
    border-color: `,`;
  }

  .menu-item {
    display: flex;
    cursor: default;
    align-items: center;
    border-radius: `,`;
    padding: `,`;
    outline: none !important;

    &__checkicon {
      width: 14px;
      line-height: 14px;
      font-weight: bold;
    }
  }

  .menu-item[aria-disabled='true'] {
    opacity: 0.25;
  }

  .menu-item[data-active-item] {
    background-color: `,`;
    color: hsl(204 20% 100%);
  }

  .menu-item:active,
  .menu-item[data-active] {
    background-color: `,`;
  }

  .menu-label {
    flex: 1 1 0%;
  }
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.borderColor},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,M._j)(e.theme.contextMenuBgColorHover,.2)}),o=n(85893),C=["open","items","triggerBtnClass","style","children"],a=function(s){var g=s.open,p=s.items,F=s.triggerBtnClass,N=s.style,P=s.children,D=h()(s,C),W=function R(X){return X.map(function(l){var H,E=l.value;return l.children&&((H=l.children)===null||H===void 0?void 0:H.length)>0?(0,o.jsxs)(v.K,{children:[(0,o.jsxs)(f.s,{className:"menu-item",render:(0,o.jsx)(b.j,{}),children:[(0,o.jsx)("div",{className:"menu-item__checkicon"}),(0,o.jsx)("span",{className:"menu-label",children:l.label}),(0,o.jsx)(j.C,{})]}),(0,o.jsx)(m,{onClose:D.onClose,children:R(l.children)})]},E):(0,o.jsxs)(f.s,{className:"menu-item",onClick:function(){l.handler&&l.handler()},children:[(0,o.jsx)("div",{className:"menu-item__checkicon",children:l.checked?(0,o.jsx)("i",{className:"ri-check-line"}):null}),(0,o.jsx)("span",{className:"menu-label",children:l.label})]},E)})};return(0,o.jsxs)(v.K,{children:[P?(0,o.jsx)(b.j,{className:F,children:P}):null,(0,o.jsx)(m,t()(t()({style:N,open:g},D),{},{children:W(p)}))]})},r=a},58106:function(S,d,n){n.d(d,{f6:function(){return T},$_:function(){return m},_j:function(){return j},Wb:function(){return o}});var i=n(97857),t=n.n(i),c={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#1c78aa",borderColor:"#363b41",bgColor:"#05010d",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#1E1F20",contextMenuBgColorHover:"#1552B3"},h={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#0369a1",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#f6f7f9",contextMenuBgColorHover:"#1552B3"},v=n(6767),f=n.n(v),b=function(a,r){return Color(a).lighten(r).string()},j=function(a,r){return f()(a).darken(r).string()},B=n(67294),y=n(964),x=n(85893),M=(0,B.createContext)({}),T=function(a){var r=a.theme,e=a.children,s=(r==null?void 0:r.mode)||"light",g=s==="dark"?m.styledConstants:o.styledConstants,p=r!=null&&r.token?t()(t()({},g),r.token):g;return(0,x.jsx)(y.f6,{theme:p,children:(0,x.jsx)(M.Provider,{value:p,children:e})})},u={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"12px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},m={styledConstants:t()(t()({},u),c)},o={styledConstants:t()(t()({},u),h)}}}]);
