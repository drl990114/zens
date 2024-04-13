"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[632],{28632:function(an,ae,r){r.d(ae,{Button:function(){return L},Dialog:function(){return we},Menu:function(){return qe},Popover:function(){return He},Space:function(){return H},ThemeProvider:function(){return fe},Tooltip:function(){return $e},useMenuStore:function(){return Ge.L}});var le=r(97857),i=r.n(le),de=r(68400),c=r.n(de),s=r(964),se=r(9541),ce={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#1c78aa",borderColor:"#363b41",bgColor:"#05010d",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#1E1F20",contextMenuBgColorHover:"#1552B3",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#05010d",dialogBackdropColor:"rgb(18, 18, 18, 0.7)"},ue={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#0369a1",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#f6f7f9",contextMenuBgColorHover:"#1552B3",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"rgba(220, 220, 220, 0.4)"},he=r(6767),pe=r.n(he),ln=function(n,o){return Color(n).lighten(o).string()},T=function(n,o){return pe()(n).darken(o).string()},C=r(67294),t=r(85893),ge=(0,C.createContext)({}),fe=function(n){var o=n.theme,a=n.children,u=(o==null?void 0:o.mode)||"light",d=u==="dark"?me.styledConstants:ve.styledConstants,l=o!=null&&o.token?i()(i()({},d),o.token):d;return(0,t.jsx)(s.f6,{theme:l,children:(0,t.jsx)(ge.Provider,{value:l,children:a})})},P={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"12px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},me={styledConstants:i()(i()({},P),ce)},ve={styledConstants:i()(i()({},P),ue)},A,S={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},E=(0,s.ZP)(se.z).attrs(function(e){return i()({},e)})(A||(A=c()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.btnType==="primary"?e.theme.accentColor:e.theme.borderColor},function(e){return e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor},function(e){return e.btnType==="primary"?e.theme.white:e.theme.primaryFontColor},function(e){return e.theme[S[e.size].paddingHorizontal]},function(e){return e.theme[S[e.size].paddingHorizontal]},function(e){return e.theme[S[e.size].paddingVertical]},function(e){return e.theme[S[e.size].paddingVertical]},function(e){return T(e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor,.1)},function(e){return T(e.btnType==="primary"?e.theme.accentColor:e.theme.buttonBgColor,.1)});E.defaultProps={size:"medium"};var L=E,xe=r(13769),b=r.n(xe),Ce=r(88104),ye=r(50695),O,B,be=s.ZP.div.attrs(function(e){return i()(i()({},e),{},{width:e.width||"420px"})})(O||(O=c()([`
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
    overflow: auto;
  }

  .mf-dialog__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`])),function(e){return e.width},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.dialogBgColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.accentColor},function(e){return e.theme.white}),Ie=s.ZP.div(B||(B=c()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(e){return e.theme.dialogBackdropColor}),je=["children","size"],Me=function(n){var o=n.children,a=n.size,u=a===void 0?6:a,d=b()(n,je);if(C.Children.count(o)<=1)return o;var l={display:"inline-block"},h={display:"inline-block",marginLeft:"".concat(u,"px")};return(0,t.jsx)("span",i()(i()({},d),{},{children:C.Children.map(o,function(p,g){return(0,t.jsx)("span",{style:g===0?l:h,children:p},g)})}))},H=Me,Te=["title","footer","children","width"],Se=function(n){var o=n.title,a=n.footer,u=n.children,d=n.width,l=b()(n,Te);return(0,t.jsxs)(Ce.Vq,i()(i()({render:function(p){return(0,t.jsx)(Ie,{hidden:!l.open,children:(0,t.jsx)(be,i()(i()({},p),{},{width:d}))})}},l),{},{backdrop:!1,children:[o?(0,t.jsxs)("div",{className:"mf-dialog__heading",children:[(0,t.jsx)("div",{className:"mf-dialog__heading__title",children:o}),(0,t.jsx)(ye.S,{className:"mf-dialog__dismiss"})]}):null,(0,t.jsx)("div",{className:"mf-dialog__main",children:u}),a?(0,t.jsx)(H,{className:"mf-dialog__footer",children:a}):null]}))},we=Se,dn=null,U,sn=s.ZP.input(U||(U=c()([`
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
`])),function(e){return e.theme.primaryFontColor},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.accentColor},function(e){return e.theme.tipsBgColor}),cn=null,un=null,Ne=r(55683),ze=r(49604),z=(0,C.forwardRef)(function(e,n){return(0,t.jsx)("div",i()({ref:n},e))}),De=r(70813),ke=r(19111),Pe=r(70136),R,Z,F,Ae=(0,s.ZP)(De.J)(R||(R=c()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor}),Ee=(0,s.ZP)(ke.Q)(Z||(Z=c()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(e){return e.theme.borderColor},function(e){return e.theme.bgColor}),Le=(0,s.ZP)(Pe.b)(F||(F=c()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(e){return e.theme.fontBase},function(e){return e.theme.spaceXs}),Oe=["arrow","title","toggleOnClick","children","customContent","placement"],Be=function(n){var o=n.arrow,a=o===void 0?!0:o,u=n.title,d=n.toggleOnClick,l=d===void 0?!0:d,h=n.children,p=n.customContent,g=n.placement,m=b()(n,Oe);return(0,t.jsxs)(Ne.H,{placement:g,children:[(0,t.jsx)(ze.x,{toggleOnClick:l,render:function(j){return(0,t.jsx)(z,i()({style:{display:"inline-block"}},j))},children:h}),(0,t.jsxs)(Ae,i()(i()({render:(0,t.jsx)(z,{})},m),{},{children:[a?(0,t.jsx)(Ee,{}):null,u?(0,t.jsx)(Le,{children:u}):null,p]}))]})},He=Be,Ue=r(32213),Re=r(96518),Ze=r(96802),V,_,hn=s.ZP.div.attrs(function(e){return e})(V||(V=c()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),Fe=s.ZP.div(_||(_=c()([`
  display: inline-block;
`]))),Ve=["children","title","fixed","placement"],W,_e=s.ZP.div(W||(W=c()([`
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
`])),function(e){return e.theme.borderColor},function(e){return e.theme.tooltipBgColor},function(e){return e.theme.fontXs},function(e){return e.theme.primaryFontColor}),We=(0,C.forwardRef)(function(e,n){var o,a=e.children,u=e.title,d=e.fixed,l=d===void 0?!1:d,h=e.placement,p=h===void 0?l?"top":"bottom":h,g=b()(e,Ve),m=a!=null&&(o=a.props)!==null&&o!==void 0&&o.disabled?C.Children.only((0,t.jsx)(Fe,{children:a})):a;return u?(0,t.jsxs)(Ue.p,{placement:p,children:[(0,t.jsx)(Re.e,{render:m}),(0,t.jsx)(Ze.u,{ref:n,render:(0,t.jsx)(z,i()({style:{zIndex:99}},g)),children:(0,t.jsx)(_e,{children:u})})]}):a}),$e=We,$=r(93702),Y=r(64106),Ye=r(18707),Ge=r(18292),Xe=r(44),Qe=r(51235),G,X,Q,K=(0,s.ZP)(Xe.s)(G||(G=c()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return T(e.theme.contextMenuBgColorHover,.2)}),J=s.ZP.div(X||(X=c()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),D=(0,s.ZP)(Qe.v)(Q||(Q=c()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.borderColor}),Ke=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],Je=function(n){var o=n.open,a=n.items,u=n.triggerBtnClass,d=n.store,l=n.style,h=n.children,p=n.menuButtonProps,g=p===void 0?{}:p,m=b()(n,Ke),I=function j(w){return w.map(function(f){var N,k=f.value;return f.children&&((N=f.children)===null||N===void 0?void 0:N.length)>0?(0,t.jsxs)($.K,{children:[(0,t.jsxs)(K,{render:(0,t.jsx)(Y.j,{}),children:[(0,t.jsx)(J,{}),(0,t.jsx)("span",{className:"menu-label",children:f.label}),(0,t.jsx)(Ye.C,{})]}),(0,t.jsx)(D,{children:j(f.children)})]},k):(0,t.jsxs)(K,{onClick:function(){f.handler&&f.handler()},children:[(0,t.jsx)(J,{children:f.checked?(0,t.jsx)("i",{className:"ri-check-line"}):null}),(0,t.jsx)("span",{className:"menu-label",children:f.label})]},k)})};return d?(0,t.jsx)(D,i()(i()({style:l,store:d},m),{},{children:I(a)})):(0,t.jsxs)($.K,{children:[h?(0,t.jsx)(Y.j,{render:function(w){return(0,t.jsx)(L,i()(i()({},w),g))},className:u,children:h}):null,(0,t.jsx)(D,i()(i()({style:l,open:o},m),{},{children:I(a)}))]})},qe=Je,en=r(31345),q,pn=(0,s.ZP)(en.Z)(q||(q=c()([`
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
`]))),gn=null,fn=function(n){var o=useContext(ThemeContext);return _jsx(PuffLoader,_objectSpread({color:o.accentColor},n))},mn=r(86501),ee,ne,vn=s.ZP.div(ee||(ee=c()([`
  padding-top: `,`;
`])),function(e){var n=e.theme;return n==null?void 0:n.spaceXs}),xn=s.ZP.div(ne||(ne=c()([`
  padding: `," ",`;
  border-radius: `,`;
  cursor: pointer;

  &:hover {
    color: `,`;
    background: `,`;
  }
`])),function(e){var n=e.theme;return n==null?void 0:n.spaceXs},function(e){var n=e.theme;return n==null?void 0:n.spaceSm},function(e){var n=e.theme;return n==null?void 0:n.smallBorderRadius},function(e){var n=e.theme;return n==null?void 0:n.white},function(e){var n=e.theme;return n==null?void 0:n.accentColor}),Cn=null,yn=r(5574),bn=r(64599),In=r(19632),jn=r(12444),Mn=r(72004),Tn=r(9783),Sn=null,wn=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),Nn=null,te,re,oe,zn=s.ZP.div(te||(te=c()([`
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
`]))),Dn=s.ZP.a(re||(re=c()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:T(e.theme.accentColor,.4)}),nn=1,kn=s.ZP.li(oe||(oe=c()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*nn,"em")}),Pn=null}}]);
