"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[32],{42073:function(Y,b,r){r.r(b),r.d(b,{default:function(){return ie}});var M=r(5574),T=r.n(M),y=r(41093),D=r(2057),w=r(97857),g=r.n(w),z=r(13769),j=r(67294),v=r(68400),d=r.n(v),t=r(964),P,k,se=t.ZP.div.attrs(function(e){return g()(g()({},e),{},{width:e.width||"420px"})})(P||(P=d()([`
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
`])),function(e){return e.width},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.dialogBgColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.primaryFontColor},function(e){return e.theme.accentColor},function(e){return e.theme.white}),ce=t.ZP.div(k||(k=d()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(e){return e.theme.dialogBackdropColor}),N=r(85893),G=null,ue=function(n){var o=n.children,a=n.size,l=a===void 0?6:a,s=_objectWithoutProperties(n,G);if(React.Children.count(o)<=1)return o;var i={display:"inline-block"},u={display:"inline-block",marginLeft:"".concat(l,"px")};return _jsx("span",_objectSpread(_objectSpread({},s),{},{children:React.Children.map(o,function(h,c){return _jsx("span",{style:c===0?i:u,children:h},c)})}))},he=null,Q=null,pe=function(n){var o=n.title,a=n.footer,l=n.children,s=n.width,i=_objectWithoutProperties(n,Q);return _jsxs(AkDialog,_objectSpread(_objectSpread({render:function(h){return _jsx(DialogBackdrop,{hidden:!i.open,children:_jsx(DialogWrapper,_objectSpread(_objectSpread({},h),{},{width:s}))})}},i),{},{backdrop:!1,children:[o?_jsxs("div",{className:"mf-dialog__heading",children:[_jsx("div",{className:"mf-dialog__heading__title",children:o}),_jsx(DialogDismiss,{className:"mf-dialog__dismiss"})]}):null,_jsx("div",{className:"mf-dialog__main",children:l}),a?_jsx(Space,{className:"mf-dialog__footer",children:a}):null]}))},me=null,fe=null,A,ge=t.ZP.input(A||(A=d()([`
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
`])),function(e){return e.theme.primaryFontColor},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.accentColor},function(e){return e.theme.tipsBgColor}),ve=null,_e=null,X=r(276),E,xe=(0,t.ZP)(X.J)(E||(E=d()([`
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

  .arrow {
    stroke: `,` !important;
    stroke-width: 4 !important;
  }
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.bgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.borderColor}),be=null,K=null,ye=function(n){var o=n.arrow,a=o===void 0?!0:o,l=n.title,s=n.children,i=n.customContent,u=n.placement,h=_objectWithoutProperties(n,K);return _jsxs(PopoverProvider,{placement:u,children:[_jsx(PopoverDisclosure,{toggleOnClick:!1,render:function(p){return _jsx(Box,_objectSpread({style:{display:"inline-block"}},p))},children:s}),_jsxs(PopoverWrapper,_objectSpread(_objectSpread({render:_jsx(Box,{})},h),{},{children:[a?_jsx(PopoverArrow,{style:{width:"18px",height:"18px"},className:"arrow"}):null,l?_jsx(PopoverHeading,{className:"heading",children:l}):null,i]}))]})},je=null,L,O,Ie=t.ZP.div.attrs(function(e){return e})(L||(L=d()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),Ce=t.ZP.div(O||(O=d()([`
  display: inline-block;
`]))),Me=null,U,Te=t.ZP.div(U||(U=d()([`
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
`])),function(e){return e.theme.borderColor},function(e){return e.theme.tooltipBgColor},function(e){return e.theme.fontXs},function(e){return e.theme.primaryFontColor}),Se=null,we=null,J=r(56843),I=r(68038),H,Ne=(0,t.ZP)(J.v)(H||(H=d()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.borderColor},function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.blue},function(e){return(0,I._j)(e.theme.blue,.2)}),q=null,De=function(n){var o=n.open,a=n.items,l=n.style,s=_objectWithoutProperties(n,q),i=function u(h){return h.map(function(c){var p,C=c.value;return c.children&&((p=c.children)===null||p===void 0?void 0:p.length)>0?_jsxs(MenuProvider,{children:[_jsxs(MenuItem,{className:"menu-item",render:_jsx(MenuButton,{}),children:[_jsx("div",{className:"menu-item__checkicon"}),_jsx("span",{className:"menu-label",children:c.label}),_jsx(MenuButtonArrow,{})]}),_jsx(MenuWrapper,{children:u(c.children)})]},C):_jsxs(MenuItem,{className:"menu-item",onClick:function(){c.handler&&c.handler()},children:[_jsx("div",{className:"menu-item__checkicon",children:c.checked?_jsx("i",{className:"ri-check-line"}):null}),_jsx("span",{className:"menu-label",children:c.label})]},C)})};return _jsx(MenuProvider,{children:_jsx(MenuWrapper,_objectSpread(_objectSpread({style:l,open:o},s),{},{children:i(a)}))})},ze=null,ee=r(31345),R,Pe=(0,t.ZP)(ee.Z)(R||(R=d()([`
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
`]))),ke=null,ne=(0,j.createContext)({}),te=function(n){var o=n.theme,a=n.children,l=(o==null?void 0:o.mode)||"light",s=l==="dark"?I.$_.styledConstants:I.Wb.styledConstants,i=o!=null&&o.token?g()(g()({},s),o.token):s;return(0,N.jsx)(t.f6,{theme:i,children:(0,N.jsx)(ne.Provider,{value:i,children:a})})},Ae=function(n){var o=useContext(ThemeContext);return _jsx(PuffLoader,_objectSpread({color:o.accentColor},n))},Ee=r(86501),B,W,Le=t.ZP.div(B||(B=d()([`
  padding-top: `,`;
`])),function(e){var n=e.theme;return n==null?void 0:n.spaceXs}),Oe=t.ZP.div(W||(W=d()([`
  padding: `," ",`;
  border-radius: `,`;
  cursor: pointer;

  &:hover {
    color: `,`;
    background: `,`;
  }
`])),function(e){var n=e.theme;return n==null?void 0:n.spaceXs},function(e){var n=e.theme;return n==null?void 0:n.spaceSm},function(e){var n=e.theme;return n==null?void 0:n.smallBorderRadius},function(e){var n=e.theme;return n==null?void 0:n.white},function(e){var n=e.theme;return n==null?void 0:n.accentColor}),Ue=null,He=r(64599),Re=r(19632),Be=r(12444),We=r(72004),Ze=r(9783),$e=null,Ve=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),Fe=null,Z,$,V,Ye=t.ZP.div(Z||(Z=d()([`
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
`]))),Ge=t.ZP.a($||($=d()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,I._j)(e.theme.accentColor,.4)}),re=1,Qe=t.ZP.li(V||(V=d()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*re,"em")}),Xe=null,oe=function(){var n=(0,y.OI)(),o=T()(n,1),a=o[0],l=(0,y.pC)();return(0,N.jsx)(te,{theme:{mode:a},children:l})},ie=oe},2057:function(Y,b,r){var M=r(97857),T=r.n(M),y=r(68400),D=r.n(y),w=r(964),g=r(5941),z=r(68038),j,v={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},d=(0,w.ZP)(g.z).attrs(function(t){return T()({},t)})(j||(j=D()([`
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
    background-color: hsl(204 20% 96%);
  }

  &[data-focus-visible] {
    outline-style: solid;
  }
`])),function(t){return t.theme.smallBorderRadius},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.borderColor},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor},function(t){return t.btnType==="primary"?t.theme.white:t.theme.primaryFontColor},function(t){return t.theme[v[t.size].paddingHorizontal]},function(t){return t.theme[v[t.size].paddingHorizontal]},function(t){return t.theme[v[t.size].paddingVertical]},function(t){return t.theme[v[t.size].paddingVertical]},function(t){return(0,z._j)(t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor,.1)});d.defaultProps={size:"medium"},b.Z=d}}]);
