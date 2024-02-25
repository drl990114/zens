"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[32],{1243:function(H,v,e){e.r(v),e.d(v,{default:function(){return de}});var x=e(5574),s=e.n(x),f=e(41093),j=e(2057),h=e(97857),d=e.n(h),b=e(13769),T=e(67294),C=e(68400),a=e.n(C),t=e(964),y,S,N=t.ZP.div.attrs(function(n){return d()(d()({},n),{},{width:n.width||"420px"})})(y||(y=a()([`
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
`])),function(n){return n.width},function(n){return n.theme.smallBorderRadius},function(n){return n.theme.dialogBgColor},function(n){return n.theme.primaryFontColor},function(n){return n.theme.primaryFontColor},function(n){return n.theme.accentColor},function(n){return n.theme.white}),P=t.ZP.div(S||(S=a()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(n){return n.theme.dialogBackdropColor}),i=e(53291),m=e(85893),p=null,c=function(r){var u=r.title,M=r.footer,I=r.children,A=r.width,g=_objectWithoutProperties(r,p);return _jsxs(AkDialog,_objectSpread(_objectSpread({render:function(O){return _jsx(DialogBackdrop,{hidden:!g.open,children:_jsx(DialogWrapper,_objectSpread(_objectSpread({},O),{},{width:A}))})}},g),{},{backdrop:!1,children:[u?_jsxs("div",{className:"mf-dialog__heading",children:[_jsx("div",{className:"mf-dialog__heading__title",children:u}),_jsx(DialogDismiss,{className:"mf-dialog__dismiss"})]}):null,_jsx("div",{className:"mf-dialog__main",children:I}),M?_jsx(Space,{className:"mf-dialog__footer",children:M}):null]}))},o=null,D=null,z,l=t.ZP.input(z||(z=a()([`
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
`])),function(n){return n.theme.primaryFontColor},function(n){return n.theme.borderColor},function(n){return n.theme.bgColor},function(n){return n.theme.smallBorderRadius},function(n){return n.theme.accentColor},function(n){return n.theme.tipsBgColor}),$=null,U=null,w=e(276),L,F=(0,t.ZP)(w.J)(L||(L=a()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.borderColor},function(n){return n.theme.bgColor},function(n){return n.theme.spaceXs},function(n){return n.theme.primaryFontColor},function(n){return n.theme.borderColor}),Y=e(68135),R=null,_=function(r){var u=r.arrow,M=u===void 0?!0:u,I=r.title,A=r.children,g=r.customContent,E=r.placement,O=_objectWithoutProperties(r,R);return _jsxs(PopoverProvider,{placement:E,children:[_jsx(PopoverDisclosure,{toggleOnClick:!1,render:function(X){return _jsx(Box,_objectSpread({style:{display:"inline-block"}},X))},children:A}),_jsxs(PopoverWrapper,_objectSpread(_objectSpread({render:_jsx(Box,{})},O),{},{children:[M?_jsx(PopoverArrow,{style:{width:"18px",height:"18px"},className:"arrow"}):null,I?_jsx(PopoverHeading,{className:"heading",children:I}):null,g]}))]})},W=null,V=e(35307),ae=e(34409),ie=e(31345),Q,me=(0,t.ZP)(ie.Z)(Q||(Q=a()([`
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
`]))),pe=null,J=e(58106),ve=function(r){var u=useContext(ThemeContext);return _jsx(PuffLoader,_objectSpread({color:u.accentColor},r))},fe=e(86501),q,ee,ge=t.ZP.div(q||(q=a()([`
  padding-top: `,`;
`])),function(n){var r=n.theme;return r==null?void 0:r.spaceXs}),xe=t.ZP.div(ee||(ee=a()([`
  padding: `," ",`;
  border-radius: `,`;
  cursor: pointer;

  &:hover {
    color: `,`;
    background: `,`;
  }
`])),function(n){var r=n.theme;return r==null?void 0:r.spaceXs},function(n){var r=n.theme;return r==null?void 0:r.spaceSm},function(n){var r=n.theme;return r==null?void 0:r.smallBorderRadius},function(n){var r=n.theme;return r==null?void 0:r.white},function(n){var r=n.theme;return r==null?void 0:r.accentColor}),be=null,Ce=e(64599),ye=e(19632),je=e(12444),_e=e(72004),Me=e(9783),Ie=null,Te=function(n){return n[n.Continue=1]="Continue",n[n.NoChildren=2]="NoChildren",n[n.Stop=3]="Stop",n}({}),Se=null,ne,te,re,Ne=t.ZP.div(ne||(ne=a()([`
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
`]))),De=t.ZP.a(te||(te=a()([`
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
`])),function(n){return n.active?n.theme.primaryFontColor:n.theme.labelFontColor},function(n){return n.active?"600":"400"},function(n){return n.theme.spaceXs},function(n){return n.active?n.theme.accentColor:(0,J._j)(n.theme.accentColor,.4)}),le=1,we=t.ZP.li(re||(re=a()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(n){return"".concat(n.depth*le,"em")}),Ee=null,se=function(){var r=(0,f.OI)(),u=s()(r,1),M=u[0],I=(0,f.pC)();return(0,m.jsx)(J.f6,{theme:{mode:M},children:I})},de=se},68135:function(H,v,e){e.d(v,{x:function(){return h}});var x=e(97857),s=e.n(x),f=e(67294),j=e(85893),h=(0,f.forwardRef)(function(d,b){return(0,j.jsx)("div",s()({ref:b},d))})},2057:function(H,v,e){var x=e(97857),s=e.n(x),f=e(68400),j=e.n(f),h=e(964),d=e(50003),b=e(58106),T,C={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},a=(0,h.ZP)(d.z).attrs(function(t){return s()({},t)})(T||(T=j()([`
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
`])),function(t){return t.theme.smallBorderRadius},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.borderColor},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor},function(t){return t.btnType==="primary"?t.theme.white:t.theme.primaryFontColor},function(t){return t.theme[C[t.size].paddingHorizontal]},function(t){return t.theme[C[t.size].paddingHorizontal]},function(t){return t.theme[C[t.size].paddingVertical]},function(t){return t.theme[C[t.size].paddingVertical]},function(t){return(0,b._j)(t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor,.1)});a.defaultProps={size:"medium"},v.Z=a},34409:function(H,v,e){e.d(v,{Z:function(){return c}});var x=e(97857),s=e.n(x),f=e(13769),j=e.n(f),h=e(72682),d=e(87003),b=e(59029),T=e(79860),C=e(68400),a=e.n(C),t=e(49308),y=e(58106),S=e(964),N,P=(0,S.ZP)(t.v)(N||(N=a()([`
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
`])),function(o){return o.theme.smallBorderRadius},function(o){return o.theme.borderColor},function(o){return o.theme.contextMenuBgColor},function(o){return o.theme.spaceXs},function(o){return o.theme.primaryFontColor},function(o){return o.theme.fontXs},function(o){return o.theme.borderColor},function(o){return o.theme.smallBorderRadius},function(o){return o.theme.spaceXs},function(o){return o.theme.contextMenuBgColorHover},function(o){return(0,y._j)(o.theme.contextMenuBgColorHover,.2)}),i=e(85893),m=["open","items","triggerBtnClass","style","children"],p=function(D){var z=D.open,l=D.items,$=D.triggerBtnClass,U=D.style,w=D.children,L=j()(D,m),F=function Y(R){return R.map(function(_){var W,V=_.value;return _.children&&((W=_.children)===null||W===void 0?void 0:W.length)>0?(0,i.jsxs)(h.K,{children:[(0,i.jsxs)(d.s,{className:"menu-item",render:(0,i.jsx)(b.j,{}),children:[(0,i.jsx)("div",{className:"menu-item__checkicon"}),(0,i.jsx)("span",{className:"menu-label",children:_.label}),(0,i.jsx)(T.C,{})]}),(0,i.jsx)(P,{onClose:L.onClose,children:Y(_.children)})]},V):(0,i.jsxs)(d.s,{className:"menu-item",onClick:function(){_.handler&&_.handler()},children:[(0,i.jsx)("div",{className:"menu-item__checkicon",children:_.checked?(0,i.jsx)("i",{className:"ri-check-line"}):null}),(0,i.jsx)("span",{className:"menu-label",children:_.label})]},V)})};return(0,i.jsxs)(h.K,{children:[w?(0,i.jsx)(b.j,{className:$,children:w}):null,(0,i.jsx)(P,s()(s()({style:U,open:z},L),{},{children:F(l)}))]})},c=p},53291:function(H,v,e){var x=e(97857),s=e.n(x),f=e(13769),j=e.n(f),h=e(67294),d=e(85893),b=["children","size"],T=function(a){var t=a.children,y=a.size,S=y===void 0?6:y,N=j()(a,b);if(h.Children.count(t)<=1)return t;var P={display:"inline-block"},i={display:"inline-block",marginLeft:"".concat(S,"px")};return(0,d.jsx)("span",s()(s()({},N),{},{children:h.Children.map(t,function(m,p){return(0,d.jsx)("span",{style:p===0?P:i,children:m},p)})}))};v.Z=T},58106:function(H,v,e){e.d(v,{f6:function(){return S},$_:function(){return P},_j:function(){return T},Wb:function(){return i}});var x=e(97857),s=e.n(x),f={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#1c78aa",borderColor:"#363b41",bgColor:"#05010d",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#1E1F20",contextMenuBgColorHover:"#1552B3"},j={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#0369a1",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#f6f7f9",contextMenuBgColorHover:"#1552B3"},h=e(6767),d=e.n(h),b=function(p,c){return Color(p).lighten(c).string()},T=function(p,c){return d()(p).darken(c).string()},C=e(67294),a=e(964),t=e(85893),y=(0,C.createContext)({}),S=function(p){var c=p.theme,o=p.children,D=(c==null?void 0:c.mode)||"light",z=D==="dark"?P.styledConstants:i.styledConstants,l=c!=null&&c.token?s()(s()({},z),c.token):z;return(0,t.jsx)(a.f6,{theme:l,children:(0,t.jsx)(y.Provider,{value:l,children:o})})},N={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"12px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},P={styledConstants:s()(s()({},N),f)},i={styledConstants:s()(s()({},N),j)}},35307:function(H,v,e){e.d(v,{Z:function(){return z}});var x=e(97857),s=e.n(x),f=e(13769),j=e.n(f),h=e(68400),d=e.n(h),b=e(67294),T=e(43757),C=e(96518),a=e(96802),t=e(68135),y=e(964),S,N,P=y.ZP.div.attrs(function(l){return l})(S||(S=d()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),i=y.ZP.div(N||(N=d()([`
  display: inline-block;
`]))),m=e(85893),p=["children","title","fixed","placement"],c,o=y.ZP.div(c||(c=d()([`
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
`])),function(l){return l.theme.borderColor},function(l){return l.theme.tooltipBgColor},function(l){return l.theme.fontXs},function(l){return l.theme.primaryFontColor}),D=(0,b.forwardRef)(function(l,$){var U,w=l.children,L=l.title,F=l.fixed,Y=F===void 0?!1:F,R=l.placement,_=R===void 0?Y?"top":"bottom":R,W=j()(l,p),V=w!=null&&(U=w.props)!==null&&U!==void 0&&U.disabled?b.Children.only((0,m.jsx)(i,{children:w})):w;return L?(0,m.jsxs)(T.p,{placement:_,children:[(0,m.jsx)(C.e,{render:V}),(0,m.jsx)(a.u,{ref:$,render:(0,m.jsx)(t.x,s()({style:{zIndex:99}},W)),children:(0,m.jsx)(o,{children:L})})]}):w}),z=D}}]);
