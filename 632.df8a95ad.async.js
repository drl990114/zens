"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[632],{28632:function(hn,ie,r){r.d(ie,{Button:function(){return L},Dialog:function(){return Ne},Input:function(){return Pe},Menu:function(){return on},Notifications:function(){return ln},Popover:function(){return Ve},Space:function(){return H},ThemeProvider:function(){return pe},Tooltip:function(){return Je},toast:function(){return ee.A},useMenuStore:function(){return qe.L}});var ae=r(97857),i=r.n(ae),le=r(68400),u=r.n(le),c=r(964),de=r(9541),se={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#05010d",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#1E1F20",contextMenuBgColorHover:"#1552B3",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#05010d",dialogBackdropColor:"rgb(18, 18, 18, 0.7)"},ce={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#f6f7f9",contextMenuBgColorHover:"#1552B3",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"rgba(220, 220, 220, 0.4)"},ue=r(6767),he=r.n(ue),gn=function(n,o){return Color(n).lighten(o).string()},T=function(n,o){return he()(n).darken(o).string()},ge=r(21539),m=r(67294),t=r(85893),fe=(0,m.createContext)({}),pe=function(n){var o=n.theme,a=n.children,d=(o==null?void 0:o.mode)||"light",s=d==="dark"?ve.styledConstants:xe.styledConstants,l=o!=null&&o.token?i()(i()({},s),o.token):s;return(0,t.jsx)(c.LC,{shouldForwardProp:me,children:(0,t.jsx)(c.f6,{theme:l,children:(0,t.jsx)(fe.Provider,{value:l,children:a})})})};function me(e,n){return typeof n=="string"?(0,ge.Z)(e):!0}var P={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"12px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},ve={styledConstants:i()(i()({},P),se)},xe={styledConstants:i()(i()({},P),ce)},k,S={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},E=(0,c.ZP)(de.z).attrs(function(e){return i()({},e)}).withConfig({shouldForwardProp:function(n){return n!=="btnType"&&n!=="size"}})(k||(k=u()([`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  white-space: nowrap;
  border-radius: `,`;
  border: 1px solid
    `,`;
  background-color: `,`;
  color: `,`;
  padding-left: `,`;
  padding-right: `,`;
  padding-top: `,`;
  padding-bottom: `,`;
  text-decoration-line: none;

  &:hover {
    background-color: `,`;
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
  }

  &[aria-expanded='true'] {
    background-color: `,`;
  }

  &[data-focus-visible] {
    outline-style: solid;
  }
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.btnType==="primary"?e.theme.accentColor:e.theme.borderColor},function(e){return e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor},function(e){return e.btnType==="primary"?e.theme.white:e.theme.primaryFontColor},function(e){return e.theme[S[e.size].paddingHorizontal]},function(e){return e.theme[S[e.size].paddingHorizontal]},function(e){return e.theme[S[e.size].paddingVertical]},function(e){return e.theme[S[e.size].paddingVertical]},function(e){return T(e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor,.1)},function(e){return T(e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor,.1)});E.defaultProps={size:"medium"};var L=E,Ce=r(13769),y=r.n(Ce),ye=r(88104),be=r(50695),O,B,Ie=c.ZP.div.attrs(function(e){return i()(i()({},e),{},{width:e.width||"420px"})})(O||(O=u()([`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: `,`;
  z-index: 99;
  margin: auto;
  display: flex;
  max-height: calc(100vh - 2 * 0.75rem);
  flex-direction: column;
  overflow: auto;
  border-radius: `,`;
  font-size: 14px;
  background-color: `,`;
  color: `,`;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  .mf-dialog__heading {
    display: flex;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;

    &__title {
      flex: 1;
    }
  }

  .mf-dialog__dismiss {
    display: flex;
    height: 1.5rem;
    width: 1.5rem;
    outline: none;
    user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    border-style: none;
    background-color: transparent;
    font-size: 1rem;
    color: `,`;
    font-weight: 500;

    &:hover {
      background-color: `,`;
      color: `,`;
    }
  }

  .mf-dialog__main {
    flex: 1;
    display: flex;
    overflow: auto;
  }

  .mf-dialog__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`])),function(e){return e.width},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.dialogBgColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.accentColor},function(e){return e.theme.white}),je=c.ZP.div(B||(B=u()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(e){return e.theme.dialogBackdropColor}),Me=["children","size"],Te=function(n){var o=n.children,a=n.size,d=a===void 0?6:a,s=y()(n,Me);if(m.Children.count(o)<=1)return o;var l={display:"inline-block"},h={display:"inline-block",marginLeft:"".concat(d,"px")};return(0,t.jsx)("span",i()(i()({},s),{},{children:m.Children.map(o,function(g,f){return(0,t.jsx)("span",{style:f===0?l:h,children:g},f)})}))},H=Te,Se=["title","footer","children","width"],we=function(n){var o=n.title,a=n.footer,d=n.children,s=n.width,l=y()(n,Se);return(0,t.jsxs)(ye.Vq,i()(i()({render:function(g){return(0,t.jsx)(je,{hidden:!l.open,children:(0,t.jsx)(Ie,i()(i()({},g),{},{width:s}))})}},l),{},{backdrop:!1,children:[o?(0,t.jsxs)("div",{className:"mf-dialog__heading",children:[(0,t.jsx)("div",{className:"mf-dialog__heading__title",children:o}),(0,t.jsx)(be.S,{className:"mf-dialog__dismiss"})]}):null,(0,t.jsx)("div",{className:"mf-dialog__main",children:d}),a?(0,t.jsx)(H,{className:"mf-dialog__footer",children:a}):null]}))},Ne=we,ze=["inputRef","onPressEnter"],U,De=c.ZP.input(U||(U=u()([`
  line-height: 22px;
  padding: 6px 4px 6px 5px;
  border: 1px solid;
  color: `,`;
  border-color: `,`;
  background-color: `,`;
  border-radius: `,`;

  &:focus {
    outline: 2px solid `,`;
  }

  &[data-disabled='true'] {
    background-color: `,`;
    cursor: not-allowed;
  }
`])),function(e){return e.theme.primaryFontColor},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.accentColor},function(e){return e.theme.tipsBgColor}),Ae=function(n,o){var a=n.inputRef,d=n.onPressEnter,s=y()(n,ze),l=function(g){g.key==="Enter"&&(d==null||d(g.nativeEvent))};return(0,t.jsx)(De,i()(i()({ref:a},s),{},{onKeyDown:l}))},Pe=Ae,ke=r(55683),Ee=r(49604),z=(0,m.forwardRef)(function(e,n){return(0,t.jsx)("div",i()({ref:n},e))}),Le=r(70813),Oe=r(19111),Be=r(70136),Z,R,F,He=(0,c.ZP)(Le.J)(Z||(Z=u()([`
  display: flex;
  max-width: min(calc(100vw - 16px), 320px);
  flex-direction: column;
  border-radius: `,`;
  border-width: 1px;
  border-style: solid;
  border-color: `,`;
  background-color: `,`;
  padding: `,`;
  color: `,`;
  outline: none;
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor}),Ue=(0,c.ZP)(Oe.Q)(R||(R=u()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(e){return e.theme.borderColor},function(e){return e.theme.bgColor}),Ze=(0,c.ZP)(Be.b)(F||(F=u()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(e){return e.theme.fontBase},function(e){return e.theme.spaceXs}),Re=["arrow","title","toggleOnClick","children","customContent","placement"],Fe=function(n){var o=n.arrow,a=o===void 0?!0:o,d=n.title,s=n.toggleOnClick,l=s===void 0?!0:s,h=n.children,g=n.customContent,f=n.placement,v=y()(n,Re);return(0,t.jsxs)(ke.H,{placement:f,children:[(0,t.jsx)(Ee.x,{toggleOnClick:l,render:function(j){return(0,t.jsx)(z,i()({style:{display:"inline-block"}},j))},children:h}),(0,t.jsxs)(He,i()(i()({render:(0,t.jsx)(z,{})},v),{},{children:[a?(0,t.jsx)(Ue,{}):null,d?(0,t.jsx)(Ze,{children:d}):null,g]}))]})},Ve=Fe,We=r(32213),Ye=r(96518),Ge=r(96802),V,W,fn=c.ZP.div.attrs(function(e){return e})(V||(V=u()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),Qe=c.ZP.div(W||(W=u()([`
  display: inline-block;
`]))),Xe=["children","title","fixed","placement"],Y,$e=c.ZP.div(Y||(Y=u()([`
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: `,`;
  background-color: `,`;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: `,`;
  line-height: 1.25rem;
  color: `,`;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`])),function(e){return e.theme.borderColor},function(e){return e.theme.tooltipBgColor},function(e){return e.theme.fontXs},function(e){return e.theme.primaryFontColor}),Ke=(0,m.forwardRef)(function(e,n){var o,a=e.children,d=e.title,s=e.fixed,l=s===void 0?!1:s,h=e.placement,g=h===void 0?l?"top":"bottom":h,f=y()(e,Xe),v=a!=null&&(o=a.props)!==null&&o!==void 0&&o.disabled?m.Children.only((0,t.jsx)(Qe,{children:a})):a;return d?(0,t.jsxs)(We.p,{placement:g,children:[(0,t.jsx)(Ye.e,{render:v}),(0,t.jsx)(Ge.u,{ref:n,render:(0,t.jsx)(z,i()({style:{zIndex:99}},f)),children:(0,t.jsx)($e,{children:d})})]}):a}),Je=Ke,G=r(93702),Q=r(64106),_e=r(18707),qe=r(18292),en=r(44),nn=r(51235),X,$,K,J=(0,c.ZP)(en.s)(X||(X=u()([`
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: `,`;
  padding: `,`;
  outline: none !important;

  &[aria-disabled='true'] {
    opacity: 0.25;
  }

  &[data-active-item] {
    color: hsl(204 20% 100%);
    background-color: `,`;
  }

  &:active,
  &[data-active] {
    background-color: `,`;
  }
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return T(e.theme.contextMenuBgColorHover,.2)}),_=c.ZP.div($||($=u()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),D=(0,c.ZP)(nn.v)(K||(K=u()([`
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
    width: 100%;
    height: 0px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-color: `,`;
    border-top-width: 1px;
  }

  .menu-label {
    flex: 1 1 0%;
  }
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.borderColor}),tn=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],rn=function(n){var o=n.open,a=n.items,d=n.triggerBtnClass,s=n.store,l=n.style,h=n.children,g=n.menuButtonProps,f=g===void 0?{}:g,v=y()(n,tn),I=function j(w){return w.map(function(p){var N,A=p.value;return p.children&&((N=p.children)===null||N===void 0?void 0:N.length)>0?(0,t.jsxs)(G.K,{children:[(0,t.jsxs)(J,{render:(0,t.jsx)(Q.j,{}),children:[(0,t.jsx)(_,{}),(0,t.jsx)("span",{className:"menu-label",children:p.label}),(0,t.jsx)(_e.C,{})]}),(0,t.jsx)(D,{children:j(p.children)})]},A):(0,t.jsxs)(J,{onClick:function(){p.handler&&p.handler()},children:[(0,t.jsx)(_,{children:p.checked?(0,t.jsx)("i",{className:"ri-check-line"}):null}),(0,t.jsx)("span",{className:"menu-label",children:p.label})]},A)})};return s?(0,t.jsx)(D,i()(i()({style:l,store:s},v),{},{children:I(a)})):(0,t.jsxs)(G.K,{children:[h?(0,t.jsx)(Q.j,{render:function(w){return(0,t.jsx)(L,i()(i()({},w),f))},className:d,children:h}):null,(0,t.jsx)(D,i()(i()({style:l,open:o},v),{},{children:I(a)}))]})},on=rn,an=r(31345),q,pn=(0,c.ZP)(an.Z)(q||(q=u()([`
  .rc-image {
    display: inline-flex;
    position: relative;
  }
  .rc-image-img {
    width: 100%;
    height: auto;
  }
  .rc-image-img-placeholder {
    background-color: #f3f3f3;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjggMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5pbWFnZS1maWxs5aSH5Lu9PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iuafpeeci+WbvueJh+S8mOWMljQuMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWKoOi9veWbvueJhyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3Mi4wMDAwMDAsIC01MDYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpbWFnZS1maWxs5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzAuMDAwMDAwLCA1MDEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOSw1IEwzLDUgQzIuNDQ2ODc1LDUgMiw1LjQ0Njg3NSAyLDYgTDIsMjYgQzIsMjYuNTUzMTI1IDIuNDQ2ODc1LDI3IDMsMjcgTDI5LDI3IEMyOS41NTMxMjUsMjcgMzAsMjYuNTUzMTI1IDMwLDI2IEwzMCw2IEMzMCw1LjQ0Njg3NSAyOS41NTMxMjUsNSAyOSw1IFogTTEwLjU2MjUsOS41IEMxMS42NjU2MjUsOS41IDEyLjU2MjUsMTAuMzk2ODc1IDEyLjU2MjUsMTEuNSBDMTIuNTYyNSwxMi42MDMxMjUgMTEuNjY1NjI1LDEzLjUgMTAuNTYyNSwxMy41IEM5LjQ1OTM3NSwxMy41IDguNTYyNSwxMi42MDMxMjUgOC41NjI1LDExLjUgQzguNTYyNSwxMC4zOTY4NzUgOS40NTkzNzUsOS41IDEwLjU2MjUsOS41IFogTTI2LjYyMTg3NSwyMy4xNTkzNzUgQzI2LjU3ODEyNSwyMy4xOTY4NzUgMjYuNTE4NzUsMjMuMjE4NzUgMjYuNDU5Mzc1LDIzLjIxODc1IEw1LjUzNzUsMjMuMjE4NzUgQzUuNCwyMy4yMTg3NSA1LjI4NzUsMjMuMTA2MjUgNS4yODc1LDIyLjk2ODc1IEM1LjI4NzUsMjIuOTA5Mzc1IDUuMzA5Mzc1LDIyLjg1MzEyNSA1LjM0Njg3NSwyMi44MDYyNSBMMTAuNjY4NzUsMTYuNDkzNzUgQzEwLjc1NjI1LDE2LjM4NzUgMTAuOTE1NjI1LDE2LjM3NSAxMS4wMjE4NzUsMTYuNDYyNSBDMTEuMDMxMjUsMTYuNDcxODc1IDExLjA0Mzc1LDE2LjQ4MTI1IDExLjA1MzEyNSwxNi40OTM3NSBMMTQuMTU5Mzc1LDIwLjE4MTI1IEwxOS4xLDE0LjMyMTg3NSBDMTkuMTg3NSwxNC4yMTU2MjUgMTkuMzQ2ODc1LDE0LjIwMzEyNSAxOS40NTMxMjUsMTQuMjkwNjI1IEMxOS40NjI1LDE0LjMgMTkuNDc1LDE0LjMwOTM3NSAxOS40ODQzNzUsMTQuMzIxODc1IEwyNi42NTkzNzUsMjIuODA5Mzc1IEMyNi43NDA2MjUsMjIuOTEyNSAyNi43MjgxMjUsMjMuMDcxODc1IDI2LjYyMTg3NSwyMy4xNTkzNzUgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRThFOEU4Ij48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
  }
  .rc-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .rc-image-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: opacity 0.3s;
  }
  .rc-image:hover .rc-image-mask {
    opacity: 1;
  }
  .rc-image-preview {
    text-align: center;
    height: 100%;
    pointer-events: none;
  }
  .rc-image-preview-body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .rc-image-preview.zoom-enter,
  .rc-image-preview.zoom-appear {
    transform: none;
    opacity: 0;
    animation-duration: 0.3s;
  }
  .rc-image-preview-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .rc-image-preview-mask-hidden {
    display: none;
  }
  .rc-image-preview-img {
    cursor: grab;
    transform: scale3d(1, 1, 1);
    transition: transform 0.3s cubic-bezier(0, 0, 0.25, 1) 0s;
    user-select: none;
    vertical-align: middle;
    max-width: 100%;
    max-height: 70%;
  }
  .rc-image-preview-img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rc-image-preview-img-wrapper > * {
    pointer-events: auto;
  }
  .rc-image-preview-moving .rc-image-preview-img {
    cursor: grabbing;
  }
  .rc-image-preview-moving .rc-image-preview-img-wrapper {
    transition-duration: 0s;
  }
  .rc-image-preview-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    -webkit-overflow-scrolling: touch;
  }
  .rc-image-preview-close {
    position: fixed;
    top: 32px;
    right: 32px;
    display: flex;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 15px;
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  .rc-image-preview-close:hover {
    opacity: 0.3;
  }
  .rc-image-preview-operations-wrapper {
    position: fixed;
    z-index: 1001;
  }
  .rc-image-preview-footer {
    position: fixed;
    z-index: 1001;
    bottom: 32px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rc-image-preview-progress {
    margin-bottom: 20px;
  }
  .rc-image-preview-operations {
    display: flex;
    color: #bbb;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 100px;
    padding: 0 20px;
  }
  .rc-image-preview-operations-operation {
    padding: 10px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
  }
  .rc-image-preview-operations-operation-disabled {
    pointer-events: none;
    color: #6f6f6f;
  }
  .rc-image-preview-operations-operation:first-of-type {
    margin-left: 0;
  }
  .rc-image-preview-switch-left {
    position: fixed;
    left: 10px;
    top: 50%;
    width: 44px;
    height: 44px;
    margin-top: -22px;
    background: rgba(187, 187, 187, 0.45);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    cursor: pointer;
    color: #bbb;
  }
  .rc-image-preview-switch-left-disabled {
    background: rgba(187, 187, 187, 0.3);
    color: #6f6f6f;
    cursor: not-allowed;
  }
  .rc-image-preview-switch-left-disabled > .anticon {
    cursor: not-allowed;
  }
  .rc-image-preview-switch-left > .anticon {
    font-size: 24px;
  }
  .rc-image-preview-switch-right {
    position: fixed;
    right: 10px;
    top: 50%;
    width: 44px;
    height: 44px;
    margin-top: -22px;
    background: rgba(187, 187, 187, 0.45);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    cursor: pointer;
    color: #bbb;
  }
  .rc-image-preview-switch-right-disabled {
    background: rgba(187, 187, 187, 0.2);
    color: #6f6f6f;
    cursor: not-allowed;
  }
  .rc-image-preview-switch-right-disabled > .anticon {
    cursor: not-allowed;
  }
  .rc-image-preview-switch-right > .anticon {
    font-size: 24px;
  }
  .fade-enter,
  .fade-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .fade-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .fade-enter.fade-enter-active,
  .fade-appear.fade-appear-active {
    animation-name: rcImageFadeIn;
    animation-play-state: running;
  }
  .fade-leave.fade-leave-active {
    animation-name: rcImageFadeOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .fade-enter,
  .fade-appear {
    opacity: 0;
    animation-timing-function: linear;
  }
  .fade-leave {
    animation-timing-function: linear;
  }
  @keyframes rcImageFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes rcImageFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .zoom-enter,
  .zoom-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .zoom-enter.zoom-enter-active,
  .zoom-appear.zoom-appear-active {
    animation-name: rcImageZoomIn;
    animation-play-state: running;
  }
  .zoom-leave.zoom-leave-active {
    animation-name: rcImageZoomOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .zoom-enter,
  .zoom-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .zoom-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  @keyframes rcImageZoomIn {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes rcImageZoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.2);
      opacity: 0;
    }
  }
`]))),mn=null,vn=function(n){var o=useContext(ThemeContext);return _jsx(PuffLoader,_objectSpread({color:o.accentColor},n))},ee=r(64712),ln=(0,m.memo)(function(){var e=(0,m.useContext)(c.Ni);return(0,t.jsx)(ee.x,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:e==null?void 0:e.borderColor,borderRadius:e==null?void 0:e.smallBorderRadius,color:e==null?void 0:e.primaryFontColor,background:e==null?void 0:e.bgColor},duration:5e3}})}),xn=r(5574),Cn=r(64599),yn=r(19632),bn=r(12444),In=r(72004),jn=r(9783),Mn=null,Tn=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),Sn=null,ne,te,re,wn=c.ZP.div(ne||(ne=u()([`
  position: relative;
  height: 100%;
  width: 100%;
  line-height: 2em;
  padding-bottom: 0.5rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  box-sizing: border-box;

  .toc-list {
    height: 100%;
    padding: 0.2rem 1rem;
    overflow: auto;
    box-sizing: border-box;
  }

  nav {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`]))),Nn=c.ZP.a(te||(te=u()([`
  color: `,`;
  font-weight: `,`;
  display: block;
  box-shadow: none;
  text-decoration: none;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .toc-link__chapter {
    margin-right: `,`;
    text-align: right;
    color: `,`;
    font-weight: bold;
  }
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:T(e.theme.accentColor,.4)}),dn=1,zn=c.ZP.li(re||(re=u()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*dn,"em")}),Dn=null}}]);
