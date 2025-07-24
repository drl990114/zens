(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(Q,B,e){"use strict";e.d(B,{x:function(){return v}});var A=e(97857),t=e.n(A),m=e(67294),j=e(85893),v=(0,m.memo)((0,m.forwardRef)(function(o,S){return(0,j.jsx)("div",t()({ref:S},o))}))},2057:function(Q,B,e){"use strict";var A=e(97857),t=e.n(A),m=e(68400),j=e.n(m),v=e(88095),o=e(51555),S=e(58106),P,N,z,C,K,d,W,O,E,c={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",height:"24px",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm",fontSize:"fontBase",height:"32px",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceSm",fontSize:"fontSm",height:"40px",borderRadius:"midBorderRadius"}},F={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},x=function(l){var T=l.btnType,g=l.danger,f=l.ghost,s=l.theme,U=T||"default",p=g||!1,n=f||!1;if(p)return(0,v.css)(P||(P=j()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),s.dangerColor,n?"transparent":s.dangerColor,n?s.dangerColor:s.white,n?"rgba(220, 38, 38, 0.1)":(0,S._j)(s.dangerColor,.1),(0,S._j)(s.dangerColor,.1));switch(T){case"primary":return(0,v.css)(N||(N=j()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),s.accentColor,f?"transparent":s.accentColor,f?s.accentColor:s.white,f?"rgba(0, 122, 204, 0.1)":(0,S._j)(s.accentColor,.1),(0,S._j)(s.accentColor,.1));case"dashed":return(0,v.css)(z||(z=j()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),s.borderColor,f?"transparent":s.buttonBgColor,s.primaryFontColor,s.accentColor,s.accentColor);case"text":return(0,v.css)(C||(C=j()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),s.primaryFontColor);case"link":return(0,v.css)(K||(K=j()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),s.accentColor,(0,S._j)(s.accentColor,.1));default:return(0,v.css)(d||(d=j()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),s.borderColor,f?"transparent":s.buttonBgColor,s.primaryFontColor,s.accentColor,s.accentColor)}},L=function(l){var T=l.shape,g=l.size,f=l.theme,s=g||"medium",U=f[c[s].borderRadius];switch(T){case"rect":return(0,v.css)(W||(W=j()([`
        border-radius: none;
      `])));default:return(0,v.css)(O||(O=j()([`
        border-radius: `,`;
      `])),U)}},a=(0,v.default)(o.z).attrs(function(r){return t()(t()({},F),r)}).withConfig({shouldForwardProp:function(l){return!["btnType","size","shape","danger","ghost","block"].includes(l)}})(E||(E=j()([`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: `,`;
  height: `,`;
  padding-left: `,`;
  padding-right: `,`;
  padding-top: `,`;
  padding-bottom: `,`;
  text-decoration-line: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  width: `,`;

  `,`
  `,`

  &:active {
    transform: translateY(1px);
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
    box-shadow: none;
  }

  &[aria-expanded='true'] {
    background-color: `,`;
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: 0 0 0 2px `,`;
  }
`])),function(r){var l=r.size||"medium";return r.theme[c[l].fontSize]},function(r){var l=r.size||"medium";return r.theme[c[l].height]},function(r){var l=r.size||"medium";return r.theme[c[l].paddingHorizontal]},function(r){var l=r.size||"medium";return r.theme[c[l].paddingHorizontal]},function(r){var l=r.size||"medium";return r.theme[c[l].paddingVertical]},function(r){var l=r.size||"medium";return r.theme[c[l].paddingVertical]},function(r){return r.block?"100%":"auto"},x,L,function(r){var l=r.btnType||"default";return(0,S._j)(l==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)},function(r){var l=r.btnType||"default",T=r.danger||!1;return l==="primary"?"rgba(0, 122, 204, 0.2)":T?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});B.Z=a},22098:function(Q,B,e){"use strict";e.d(B,{Z:function(){return L}});var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(67294),o=e(90512),S=e(13732),P=e(81619),N=e(68400),z=e.n(N),C=e(88095),K,d,W=C.default.div.attrs(function(a){return t()(t()({},a),{},{width:a.width||"420px",padding:a.padding||"4px 6px"})})(K||(K=z()([`
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
  padding: `,`;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  border: 1px solid `,`;

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
`])),function(a){return a.width},function(a){return a.theme.smallBorderRadius},function(a){return a.theme.dialogBgColor},function(a){return a.theme.primaryFontColor},function(a){return a.padding},function(a){return a.theme.borderColor},function(a){return a.theme.primaryFontColor},function(a){return a.theme.accentColor},function(a){return a.theme.white}),O=C.default.div(d||(d=z()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(a){return a.theme.dialogBackdropColor}),E=e(53291),c=e(85893),F=["title","footer","containerClass","children","width","hideDismiss"],x=function(r){var l=r.title,T=r.footer,g=r.containerClass,f=r.children,s=r.width,U=r.hideDismiss,p=U===void 0?!1:U,n=j()(r,F);return(0,c.jsxs)(S.Vq,t()(t()({render:function(h){return(0,c.jsx)(O,{hidden:!n.open,children:(0,c.jsx)(W,t()(t()({},h),{},{width:s}))})}},n),{},{backdrop:!1,children:[l?(0,c.jsxs)("div",{className:"mf-dialog__heading",children:[(0,c.jsx)("div",{className:"mf-dialog__heading__title",children:l}),p?null:(0,c.jsx)(P.S,{className:"mf-dialog__dismiss"})]}):p?null:(0,c.jsx)(P.S,{className:"mf-dialog__dismiss"}),(0,c.jsx)("div",{className:(0,o.Z)("mf-dialog__main",g),children:f}),T?(0,c.jsx)(E.Z,{className:"mf-dialog__footer",children:T}):null]}))},L=x},67761:function(Q,B,e){"use strict";e.d(B,{Z:function(){return U}});var A=e(97857),t=e.n(A),m=e(68400),j=e.n(m),v=e(88095),o=e(85893),S,P=v.default.div(S||(S=j()([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: `,`;

  .zens-error-icon-box {
    width: 40px;
    height: 40px;
  }

  .zens-error-icon {
    width: 100%;
    height: 100%;
  }

  .zens-error-text {
    font-size: 12px;
    line-height: 1.6667;
    text-align: center;
    padding: 8px 16px;
  }
`])),function(p){return p.theme.errorTipColor}),N=function(n){var i=n.errortip,h=n.width,y=h===void 0?100:h,D=n.height,M=D===void 0?70:D;return(0,o.jsxs)(P,{style:{width:"".concat(y,"px"),height:"".concat(M,"px")},children:[(0,o.jsx)("div",{className:"zens-error-icon-box",children:(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,o.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,o.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,o.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,o.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,o.jsx)("span",{className:"zens-error-text",children:i})]})},z=N,C=e(13769),K=e.n(C),d=e(67294),W=function(p){var n=p.decode,i=n===void 0?!0:n,h=p.crossOrigin,y=h===void 0?"":h;return function(D){return new Promise(function(M,u){var b=new Image;y&&(b.crossOrigin=y),b.onload=function(){i&&b.decode?b.decode().then(M).catch(u):M()},b.onerror=u,b.src=D})}},O=e(5574),E=e.n(O),c=function(n){return n.filter(function(i){return i})},F=function(n){return Array.isArray(n)?n:[n]},x={},L=function(n,i){var h=!1;return new Promise(function(y,D){var M=function(b){return i(b).then(function(I){h=!0,y(I||b)})};n.reduce(function(u,b){return u.catch(function(){if(!h)return M(b)})},M(n.shift())).catch(D)})};function a(p){var n=p.srcList,i=p.imgPromise,h=i===void 0?W({decode:!0}):i,y=p.useSuspense,D=y===void 0?!0:y,M=(0,d.useState)(!1),u=E()(M,2),b=u[1],I=c(F(n)),R=I.join("");if(x[R]||(x[R]={promise:L(I,h),cache:"pending",error:null}),x[R].cache==="resolved")return{src:x[R].src,isLoading:!1,error:null};if(x[R].cache==="rejected"){if(D)throw x[R].error;return{isLoading:!1,error:x[R].error,src:void 0}}if(x[R].promise.then(function(V){x[R]=t()(t()({},x[R]),{},{cache:"resolved",src:V}),D||b(R)}).catch(function(V){x[R]=t()(t()({},x[R]),{},{cache:"rejected",error:V}),D||b(R)}),D)throw x[R].promise;return{isLoading:!0,src:void 0,error:null}}var r=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],l=function(n){return n};function T(p,n){var i=p.decode,h=i===void 0?!0:i,y=p.src,D=y===void 0?[]:y,M=p.loader,u=M===void 0?null:M,b=p.unloader,I=b===void 0?null:b,R=p.container,V=R===void 0?l:R,Y=p.loaderContainer,J=Y===void 0?l:Y,q=p.unloaderContainer,Z=q===void 0?l:q,te=p.imgPromise,$=p.crossorigin,ee=p.useSuspense,oe=ee===void 0?!1:ee,ie=K()(p,r);te=te||W({decode:h,crossOrigin:$});var re=a({srcList:D,imgPromise:te,useSuspense:oe}),ae=re.src,ue=re.isLoading;return ae?V((0,o.jsx)("img",t()(t()({src:ae},ie),{},{ref:n}))):!oe&&ue?J(u):!oe&&I?Z(I):null}var g=(0,d.forwardRef)(T),f=e(31081),s=function(n){var i=n.errorTip,h=i===void 0?"load error":i;return(0,o.jsx)(g,t()({loader:(0,o.jsx)(f.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,o.jsx)(z,{errortip:h})},n))},U=s},73746:function(Q,B,e){"use strict";var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(68400),o=e.n(v),S=e(88095),P=e(85893),N=["inputRef","onPressEnter"],z,C=S.default.input(z||(z=o()([`
  line-height: 22px;
  padding: 6px 4px 6px 4px;
  border: 1px solid;
  color: `,`;
  border-color: `,`;
  background-color: `,`;
  border-radius: `,`;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid `,`;
  }

  &[data-disabled='true'] {
    background-color: `,`;
    cursor: not-allowed;
  }
`])),function(d){return d.theme.primaryFontColor},function(d){return d.theme.borderColor},function(d){return d.theme.bgColor},function(d){return d.theme.smallBorderRadius},function(d){return d.theme.accentColor},function(d){return d.theme.tipsBgColor}),K=function(W){var O=W.inputRef,E=W.onPressEnter,c=j()(W,N),F=function(L){var a;L.key==="Enter"&&(E==null||E(L.nativeEvent)),(a=c.onKeyDown)===null||a===void 0||a.call(c,L)};return(0,P.jsx)(C,t()(t()({ref:O},c),{},{onKeyDown:F}))};B.Z=K},36348:function(Q,B,e){"use strict";e.d(B,{g:function(){return S}});var A=e(97857),t=e.n(A),m=e(67294),j=e(78798),v=e(58106),o=e(85893),S=function(N){var z=(0,m.useContext)(v.Ni);return(0,o.jsx)(j.Z,t()({color:z.accentColor},N))}},88853:function(Q,B,e){"use strict";e.d(B,{sN:function(){return L},K4:function(){return a},Kb:function(){return v.K},Cl:function(){return l},XG:function(){return r},ZP:function(){return p},s3:function(){return s},Ls:function(){return P.L}});var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(93702),o=e(64106),S=e(66227),P=e(43807),N=e(68400),z=e.n(N),C=e(88095),K=e(79605),d=e(76633),W=e(26484),O=e(58106),E,c,F,x,L=(0,C.default)(K.s)(E||(E=z()([`
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: `,`;
  padding: `,`;
  outline: none !important;
  line-height: 20px;

  &[aria-disabled='true'] {
    opacity: 0.25;
  }

  &[data-active-item] {
    background-color: `,`;
  }

  &:active,
  &[data-active] {
    background-color: `,`;
  }
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.spaceXs},function(n){return n.theme.contextMenuBgColorHover},function(n){return(0,O._j)(n.theme.contextMenuBgColorHover,.2)}),a=C.default.div(c||(c=z()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),r=(0,C.default)(d.v)(F||(F=z()([`
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

  .menu-label {
    flex: 1 1 0%;
  }

  .menu-shortcut {
    margin-left: `,`;
    color: `,`;
    font-size: `,`;
  }
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.borderColor},function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.spaceXs},function(n){return n.theme.primaryFontColor},function(n){return n.theme.fontXs},function(n){return n.theme.spaceXs},function(n){return n.theme.secondaryFontColor},function(n){return n.theme.fontXs}),l=(0,C.default)(W.C)(x||(x=z()([`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 0px;
  width: 100%;
  background-color: `,`;
  border-top-width: 1px;
  border-bottom: none;
  border-right: none;
  border-left: none;
  border-color: `,`;
  color: `,`;
`])),function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.contextMenuSeparatorColor},function(n){return n.theme.contextMenuSeparatorColor}),T=e(2057),g=e(85893),f=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],s=function(i){return(i==null?void 0:i.type)==="divider"},U=function(i){var h=i.open,y=i.items,D=i.triggerBtnClass,M=i.store,u=i.style,b=i.children,I=i.menuButtonProps,R=I===void 0?{}:I,V=j()(i,f),Y=function J(q){return q.map(function(Z,te){var $;if(s(Z))return(0,g.jsx)(l,{},te);var ee=Z.value;return Z.children&&(($=Z.children)===null||$===void 0?void 0:$.length)>0?(0,g.jsxs)(v.K,{children:[(0,g.jsxs)(L,{render:(0,g.jsx)(o.j,{}),children:[(0,g.jsx)(a,{}),(0,g.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,g.jsx)("span",{className:"menu-shortcut",children:Z.shortcut}),(0,g.jsx)(S.C,{})]}),(0,g.jsx)(r,{children:J(Z.children)})]},ee):(0,g.jsxs)(L,{onClick:function(){Z.handler&&Z.handler()},children:[(0,g.jsx)(a,{children:Z.checked?(0,g.jsx)("i",{className:"ri-check-line"}):null}),(0,g.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,g.jsx)("span",{className:"menu-shortcut",children:Z.shortcut})]},ee)})};return M?(0,g.jsx)(r,t()(t()({style:u,store:M},V),{},{children:Y(y)})):(0,g.jsxs)(v.K,{children:[b?(0,g.jsx)(o.j,{render:function(q){return(0,g.jsx)(T.Z,t()(t()({},q),R))},className:D,children:b}):null,(0,g.jsx)(r,t()(t()({style:u,open:h},V),{},{children:Y(y)}))]})},p=U},85682:function(Q,B,e){"use strict";e.d(B,{Z:function(){return g},p:function(){return v.p}});var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(9271),o=e(55683),S=e(13900),P=e(68135),N=e(68400),z=e.n(N),C=e(38401),K=e(72864),d=e(31452),W=e(88095),O,E,c,F=(0,W.default)(C.J)(O||(O=z()([`
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
`])),function(f){return f.theme.smallBorderRadius},function(f){return f.theme.borderColor},function(f){return f.theme.bgColor},function(f){return f.theme.spaceXs},function(f){return f.theme.primaryFontColor}),x=(0,W.default)(K.Q)(E||(E=z()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(f){return f.theme.borderColor},function(f){return f.theme.bgColor}),L=(0,W.default)(d.b)(c||(c=z()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(f){return f.theme.fontBase},function(f){return f.theme.spaceXs}),a=e(67294),r=e(85893),l=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],T=function(s){var U=s.arrow,p=U===void 0?!0:U,n=s.title,i=s.toggleOnClick,h=i===void 0?!0:i,y=s.children,D=s.customContent,M=s.placement,u=s.onStoreChange,b=s.boxProps,I=b===void 0?{}:b,R=j()(s,l),V=(0,v.p)();return(0,a.useEffect)(function(){u&&u(V)},[V,u]),(0,r.jsxs)(o.H,{store:V,placement:M,children:[(0,r.jsx)(S.x,{toggleOnClick:h,render:function(J){return(0,r.jsx)(P.x,t()(t()({style:{display:"inline-block"}},J),I))},children:y}),!D&&!n?null:(0,r.jsxs)(F,t()(t()({render:function(J){return(0,r.jsx)(P.x,t()({},J))}},R),{},{children:[p?(0,r.jsx)(x,{}):null,n?(0,r.jsx)(L,{children:n}):null,D]}))]})},g=T},53291:function(Q,B,e){"use strict";var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(67294),o=e(85893),S=["children","size","direction","align","split","wrap","style"],P=function(C){if(typeof C=="number")return C;switch(C){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},N=function(C){var K,d=C.children,W=C.size,O=W===void 0?"small":W,E=C.direction,c=E===void 0?"horizontal":E,F=C.align,x=C.split,L=C.wrap,a=L===void 0?!1:L,r=C.style,l=j()(C,S),T=v.Children.toArray(d).filter(function(i){return i!=null});if(T.length===0)return null;if(T.length===1&&!x)return(0,o.jsx)(o.Fragment,{children:T[0]});var g=F||(c==="horizontal"?"center":void 0),f=Array.isArray(O)?O:[O,O],s=P(f[0]),U=P((K=f[1])!==null&&K!==void 0?K:f[0]),p=t()({display:"flex",flexDirection:c==="vertical"?"column":"row",flexWrap:a&&c==="horizontal"?"wrap":"nowrap",alignItems:g},r),n=function(h){var y={};return c==="vertical"?h<T.length-1&&(y.marginBottom="".concat(U,"px")):(h<T.length-1&&(y.marginRight="".concat(s,"px")),a&&(y.marginBottom="".concat(U,"px"))),y};return(0,o.jsx)("div",t()(t()({style:p},l),{},{children:T.map(function(i,h){var y=i.key||"space-item-".concat(h),D=[];return h>0&&x&&D.push((0,o.jsx)("span",{style:c==="vertical"?{marginBottom:"".concat(U,"px")}:{marginRight:"".concat(s,"px")},children:x},"split-".concat(h))),D.push((0,o.jsx)("div",{style:n(h),children:i},y)),D})}))};B.Z=N},33867:function(Q,B,e){"use strict";e.d(B,{o:function(){return p}});var A=e(5574),t=e.n(A),m=e(67294),j=e(64599),v=e.n(j),o=e(19632),S=e.n(o),P=e(12444),N=e.n(P),z=e(72004),C=e.n(z),K=e(9783),d=e.n(K),W=function(){function n(i){N()(this,n),d()(this,"title",void 0),d()(this,"children",void 0),d()(this,"parent",void 0),d()(this,"offsetCacheVersion",void 0),d()(this,"cachedOffsetTop",void 0),d()(this,"htmlNode",void 0),d()(this,"depth",void 0),d()(this,"id",void 0),d()(this,"key",void 0),d()(this,"chapter",void 0),d()(this,"h",void 0),d()(this,"onClick",void 0);var h=i.depth,y=i.key,D=i.offsetCacheVersion,M=i.chapter,u=i.h,b=u.htmlNode,I=u.value,R=u.id,V=u.onClick;this.htmlNode=b,this.title=I,this.parent=null,this.children=[],this.depth=h,this.id=R,this.key=y,this.cachedOffsetTop=null,this.offsetCacheVersion=D-1,this.chapter=M,this.h=u,this.onClick=V}return C()(n,[{key:"lazyLoad",value:function(h){h!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=h))}}]),n}(),O=function(n){return n[n.Continue=1]="Continue",n[n.NoChildren=2]="NoChildren",n[n.Stop=3]="Stop",n}({}),E=function(){function n(i){N()(this,n),d()(this,"root",void 0),d()(this,"offsetCacheVersion",void 0);var h=Math.min.apply(Math,S()(i.map(function(u){return u.depth}))),y=0,D=i.map(function(u,b){return new W({h:u,depth:u.depth-h,key:b,offsetCacheVersion:y,chapter:"0"})}),M=[new W({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:y,chapter:"0"})];D.forEach(function(u){for(;M.length&&M[M.length-1].depth>=u.depth;)M.pop();M[M.length-1].children.push(u),u.parent=M[M.length-1];var b=u.parent.children.filter(function(R){return R.depth===u.depth}),I=u.depth-Math.max(u.parent.depth,0);if(I===0)u.chapter=String(b.length);else if(I===1)u.chapter="".concat(u.parent.chapter,".").concat(b.length);else for(u.chapter=u.parent.chapter;I>=1;)u.chapter+=".",I===1?u.chapter+=b.length:u.chapter+=0,I--;M.push(u)}),this.root=M[0],this.offsetCacheVersion=y}return C()(n,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(h){var y=this,D=function(b){var I=v()(b.children),R;try{for(I.s();!(R=I.n()).done;){var V=R.value;if(M(V)===O.Stop)return O.Stop}}catch(Y){I.e(Y)}finally{I.f()}return O.Continue},M=function(b){b.lazyLoad(y.offsetCacheVersion);var I=h(b);return I!==O.Continue?I:D(b)};D(this.root)}}]),n}(),c=e(68400),F=e.n(c),x=e(88095),L=e(58106),a,r,l,T=x.default.div(a||(a=F()([`
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
`]))),g=x.default.a(r||(r=F()([`
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
`])),function(n){return n.active?n.theme.primaryFontColor:n.theme.labelFontColor},function(n){return n.active?"600":"400"},function(n){return n.theme.spaceXs},function(n){return n.active?n.theme.accentColor:(0,L._j)(n.theme.accentColor,.4)}),f=1,s=x.default.li(l||(l=F()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(n){return"".concat(n.depth*f,"em")}),U=e(85893),p=(0,m.memo)((0,m.forwardRef)(function(n,i){var h,y=n.headingsData,D=n.containerEl,M=n.scrollEl,u=n.autoExpand,b=u===void 0?!1:u,I=n.Empty,R=I===void 0?null:I,V=(0,m.useState)(y),Y=t()(V,2),J=Y[0],q=Y[1],Z=(0,m.useState)(),te=t()(Z,2),$=te[0],ee=te[1],oe=(0,m.useState)(),ie=t()(oe,2),re=ie[0],ae=ie[1],ue=(0,m.useState)(),ve=t()(ue,2),ce=ve[0],pe=ve[1],Ee=(0,m.useState)(),ge=t()(Ee,2),ne=ge[0],fe=ge[1],_e=(0,m.useState)(M),Ce=t()(_e,2),G=Ce[0],xe=Ce[1],he=(0,m.useCallback)(function(w){if(w){var H=w.querySelectorAll("h1, h2, h3, h4, h5, h6"),_=[];H.forEach(function(k,se){var de={depth:parseInt(k.tagName[1],10),value:k.innerText,htmlNode:k,id:k.id||"heading-".concat(se)};_.push(de)}),q(_);var X=new E(_);return ee(X),X}},[]),be=(0,m.useCallback)(function(w){var H=w||D;if(!(!H&&!J)){if(J){var _=new E(J);ee(_)}else if(H)he(H);else throw new Error("No headings and containerEl found");return fe(H),H}},[D,J,he]),je=(0,m.useCallback)(function(){if(!$||!G)return null;var w=10,H=G.scrollTop+w,_=null,X=null;return $.traverseInPreorder(function(k){var se=Math.max((k.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0),0);return H>se?(X=k,O.Continue):(_=X,O.Stop)}),_===null&&X!==null&&ne?X:_},[$,ne,G]),me=(0,m.useCallback)(function(w){if($){var H=w,_={},X=$.getRoot();if(X){for(_[X.key]=!0;H!==null;)_[H.key]=!0,H=H.parent;return _}}},[$]),le=(0,m.useCallback)(function(){var w=je();if(w&&w!==re){var H=me(w);ae(w),pe(H)}},[re,me,je]),ye=function(H,_){H.preventDefault();var X=(_.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0);G==null||G.scrollTo(0,X),ae(_),pe(me(_))};(0,m.useEffect)(function(){return $?le():be(),G==null||G.addEventListener("scroll",le),function(){G==null||G.removeEventListener("scroll",le)}},[$,G,be,le]),(0,m.useImperativeHandle)(i,function(){return{refresh:function(H){var _=H.newContainer,X=H.newScroll;he(_||ne),fe(_),xe(X)},refreshByHeadings:function(H){var _=H.newHeadings;q(_),ee(new E(_)),xe(void 0),fe(void 0)}}});var Pe=function(){if($){var H=[];return $.traverseInPreorder(function(_){var X,k=G?!!(re&&re.key===_.key):!0;return H.push((0,U.jsx)(s,{depth:_.depth,active:k,children:(0,U.jsxs)(g,{href:"#".concat(_.id),active:k,depth:_.depth,onClick:function(de){de.preventDefault(),_.onClick?_.onClick(_.h):ye(de,_)},children:[(0,U.jsx)("span",{className:"toc-link__chapter",children:_.chapter}),_.title]})},_.key)),!b||ce!=null&&ce[_.key]||((X=_.parent)===null||X===void 0?void 0:X.key)===-1?O.Continue:O.NoChildren}),H}};return(0,U.jsx)(T,{children:(0,U.jsx)("div",{className:"toc-list",children:($==null||(h=$.getRoot())===null||h===void 0||(h=h.children)===null||h===void 0?void 0:h.length)===0?R:(0,U.jsx)("nav",{children:(0,U.jsx)("ul",{children:Pe()})})})})}))},23961:function(Q,B,e){"use strict";e.r(B),e.d(B,{Toc:function(){return A.o}});var A=e(33867),t=e(12626),m=e.n(t),j={};for(var v in t)["default","Toc"].indexOf(v)<0&&(j[v]=function(o){return t[o]}.bind(0,v));e.d(B,j)},12626:function(){},58106:function(Q,B,e){"use strict";e.d(B,{Ni:function(){return d},f6:function(){return W},y0:function(){return E},$_:function(){return c},_j:function(){return P},Wb:function(){return F},$n:function(){return S}});var A=e(97857),t=e.n(A),m={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},j={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},v=e(6767),o=e.n(v),S=function(L,a){return o()(L).lighten(a).string()},P=function(L,a){return o()(L).darken(a).string()},N=e(21539),z=e(67294),C=e(88095),K=e(85893),d=(0,z.createContext)({}),W=function(L){var a=L.theme,r=L.children,l=(a==null?void 0:a.mode)||"light",T=l==="dark"?c.styledConstants:F.styledConstants,g=a!=null&&a.token?t()(t()({},T),a.token):T;return(0,K.jsx)(C.StyleSheetManager,{shouldForwardProp:O,children:(0,K.jsx)(C.ThemeProvider,{theme:g,children:(0,K.jsx)(d.Provider,{value:g,children:r})})})};function O(x,L){return typeof L=="string"?(0,N.Z)(x):!0}var E={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},c={styledConstants:t()(t()({},E),m)},F={styledConstants:t()(t()({},E),j)}},24909:function(Q,B,e){"use strict";e.d(B,{A:function(){return t.Am},T:function(){return v}});var A=e(67294),t=e(64712),m=e(88095),j=e(85893),v=(0,A.memo)(function(){var o=(0,A.useContext)(m.ThemeContext);return(0,j.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:o==null?void 0:o.borderColor,borderRadius:o==null?void 0:o.smallBorderRadius,color:o==null?void 0:o.primaryFontColor,background:o==null?void 0:o.bgColor},duration:5e3}})})},35307:function(Q,B,e){"use strict";e.d(B,{Z:function(){return r}});var A=e(97857),t=e.n(A),m=e(13769),j=e.n(m),v=e(68400),o=e.n(v),S=e(67294),P=e(88095),N=e(56450),z=e(96518),C=e(96802),K,d,W=P.default.div.attrs(function(l){return l})(K||(K=o()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),O=P.default.div(d||(d=o()([`
  display: inline-block;
`]))),E=e(68135),c=e(85893),F=["children","title","fixed","placement","open"],x,L=P.default.div(x||(x=o()([`
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
`])),function(l){return l.theme.borderColor},function(l){return l.theme.tooltipBgColor},function(l){return l.theme.fontXs},function(l){return l.theme.primaryFontColor}),a=function(T){var g,f=T.children,s=T.title,U=T.fixed,p=U===void 0?!1:U,n=T.placement,i=n===void 0?p?"top":"bottom":n,h=T.open,y=j()(T,F),D=f!=null&&(g=f.props)!==null&&g!==void 0&&g.disabled?S.Children.only((0,c.jsx)(O,{children:f})):f;return s?(0,c.jsxs)(N.p,{placement:i,open:h,children:[(0,c.jsx)(z.e,{render:D}),(0,c.jsx)(C.u,{render:function(u){return(0,c.jsx)(E.x,t()(t()({style:{zIndex:99}},u),y))},children:(0,c.jsx)(L,{children:s})})]}):f},r=a},31081:function(Q,B,e){"use strict";e.r(B),e.d(B,{AriaKit:function(){return m},Button:function(){return j.Z},Dialog:function(){return v.Z},Icon:function(){return t},Image:function(){return o.Z},Input:function(){return S.Z},Loading:function(){return K.g},Menu:function(){return P.ZP},MenuItem:function(){return P.sN},MenuItemCheckIcon:function(){return P.K4},MenuProvider:function(){return P.Kb},MenuSeparator:function(){return P.Cl},MenuWrapper:function(){return P.XG},Notifications:function(){return c.T},Popover:function(){return N.Z},Space:function(){return z.Z},Spinners:function(){return A},ThemeContext:function(){return E.Ni},ThemeProvider:function(){return E.f6},Tooltip:function(){return C.Z},common:function(){return E.y0},darkTheme:function(){return E.$_},darken:function(){return E._j},isDivider:function(){return P.s3},lightTheme:function(){return E.Wb},lighten:function(){return E.$n},toast:function(){return c.A},useMenuStore:function(){return P.Ls},usePopoverStore:function(){return N.p}});var A=e(48098),t=e(91703),m=e(43571),j=e(2057),v=e(22098),o=e(67761),S=e(73746),P=e(88853),N=e(85682),z=e(53291),C=e(35307),K=e(36348),d=e(23961),W={};for(var O in d)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","AriaKit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(O)<0&&(W[O]=function(F){return d[F]}.bind(0,O));e.d(B,W);var E=e(58106),c=e(24909)}}]);
