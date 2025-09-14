(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(J,S,n){"use strict";n.d(S,{x:function(){return g}});var R=n(97857),t=n.n(R),p=n(67294),_=n(85893),g=(0,p.memo)((0,p.forwardRef)(function(a,z){return(0,_.jsx)("div",t()({ref:z},a))}))},2057:function(J,S,n){"use strict";var R=n(97857),t=n.n(R),p=n(68400),_=n.n(p),g=n(88095),a=n(35289),z=n(58106),D,U,W,h,K,x,r,d,M,f={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceSm",fontSize:"fontXs",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceBase",fontSize:"fontBase",borderRadius:"smallBorderRadius"}},N={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},b=function(i){var y=i.btnType,j=i.danger,m=i.ghost,u=i.theme,F=y||"default",C=j||!1,e=m||!1;if(C)return(0,g.css)(D||(D=_()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),u.dangerColor,e?"transparent":u.dangerColor,e?u.dangerColor:u.white,e?"rgba(220, 38, 38, 0.1)":(0,z._j)(u.dangerColor,.1),(0,z._j)(u.dangerColor,.1));switch(y){case"primary":return(0,g.css)(U||(U=_()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),u.accentColor,m?"transparent":u.accentColor,m?u.accentColor:u.white,m?"rgba(0, 122, 204, 0.1)":(0,z._j)(u.accentColor,.1),(0,z._j)(u.accentColor,.1));case"dashed":return(0,g.css)(W||(W=_()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),u.borderColor,m?"transparent":u.buttonBgColor,u.primaryFontColor,u.accentColor,u.accentColor);case"text":return(0,g.css)(h||(h=_()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),u.primaryFontColor);case"link":return(0,g.css)(K||(K=_()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),u.accentColor,(0,z._j)(u.accentColor,.1));default:return(0,g.css)(x||(x=_()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),u.borderColor,m?"transparent":u.buttonBgColor,u.primaryFontColor,u.accentColor,u.accentColor)}},L=function(i){var y=i.shape,j=i.size,m=i.theme,u=j||"medium",F=m[f[u].borderRadius];switch(y){case"rect":return(0,g.css)(r||(r=_()([`
        border-radius: none;
      `])));default:return(0,g.css)(d||(d=_()([`
        border-radius: `,`;
      `])),F)}},s=(0,g.default)(a.z).attrs(function(o){return t()(t()({},N),o)}).withConfig({shouldForwardProp:function(i){return!["btnType","size","shape","danger","ghost","block"].includes(i)}})(M||(M=_()([`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: `,`;
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
`])),function(o){var i=o.size||"medium";return o.theme[f[i].fontSize]},function(o){var i=o.size||"medium";return o.theme[f[i].paddingHorizontal]},function(o){var i=o.size||"medium";return o.theme[f[i].paddingHorizontal]},function(o){var i=o.size||"medium";return o.theme[f[i].paddingVertical]},function(o){var i=o.size||"medium";return o.theme[f[i].paddingVertical]},function(o){return o.block?"100%":"auto"},b,L,function(o){var i=o.btnType||"default";return(0,z._j)(i==="primary"?o.theme.accentColor:o.theme.buttonBgColor,.1)},function(o){var i=o.btnType||"default",y=o.danger||!1;return i==="primary"?"rgba(0, 122, 204, 0.2)":y?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});S.Z=s},22098:function(J,S,n){"use strict";n.d(S,{Z:function(){return L}});var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(67294),a=n(90512),z=n(9784),D=n(26099),U=n(68400),W=n.n(U),h=n(88095),K,x,r=h.default.div.attrs(function(s){return t()(t()({},s),{},{width:s.width||"420px",padding:s.padding||"12px"})})(K||(K=W()([`
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
`])),function(s){return s.width},function(s){return s.theme.smallBorderRadius},function(s){return s.theme.dialogBgColor},function(s){return s.theme.primaryFontColor},function(s){return s.padding},function(s){return s.theme.borderColor},function(s){return s.theme.primaryFontColor},function(s){return s.theme.accentColor},function(s){return s.theme.white}),d=h.default.div(x||(x=W()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(s){return s.theme.dialogBackdropColor}),M=n(53291),f=n(85893),N=["title","footer","containerClass","children","width","hideDismiss"],b=function(o){var i=o.title,y=o.footer,j=o.containerClass,m=o.children,u=o.width,F=o.hideDismiss,C=F===void 0?!1:F,e=_()(o,N);return(0,f.jsxs)(z.Vq,t()(t()({render:function(v){return(0,f.jsx)(d,{hidden:!e.open,children:(0,f.jsx)(r,t()(t()({},v),{},{width:u}))})}},e),{},{backdrop:!1,children:[i?(0,f.jsxs)("div",{className:"mf-dialog__heading",children:[(0,f.jsx)("div",{className:"mf-dialog__heading__title",children:i}),C?null:(0,f.jsx)(D.S,{className:"mf-dialog__dismiss"})]}):C?null:(0,f.jsx)(D.S,{className:"mf-dialog__dismiss"}),(0,f.jsx)("div",{className:(0,a.Z)("mf-dialog__main",j),children:m}),y?(0,f.jsx)(M.Z,{className:"mf-dialog__footer",children:y}):null]}))},L=b},67761:function(J,S,n){"use strict";n.d(S,{Z:function(){return F}});var R=n(97857),t=n.n(R),p=n(68400),_=n.n(p),g=n(88095),a=n(85893),z,D=g.default.div(z||(z=_()([`
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
`])),function(C){return C.theme.errorTipColor}),U=function(e){var l=e.errortip,v=e.width,O=v===void 0?100:v,B=e.height,T=B===void 0?70:B;return(0,a.jsxs)(D,{style:{width:"".concat(O,"px"),height:"".concat(T,"px")},children:[(0,a.jsx)("div",{className:"zens-error-icon-box",children:(0,a.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,a.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,a.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,a.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,a.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,a.jsx)("span",{className:"zens-error-text",children:l})]})},W=U,h=n(13769),K=n.n(h),x=n(67294),r=function(C){var e=C.decode,l=e===void 0?!0:e,v=C.crossOrigin,O=v===void 0?"":v;return function(B){return new Promise(function(T,c){var E=new Image;O&&(E.crossOrigin=O),E.onload=function(){l&&E.decode?E.decode().then(T).catch(c):T()},E.onerror=c,E.src=B})}},d=n(5574),M=n.n(d),f=function(e){return e.filter(function(l){return l})},N=function(e){return Array.isArray(e)?e:[e]},b={},L=function(e,l){var v=!1;return new Promise(function(O,B){var T=function(E){return l(E).then(function(I){v=!0,O(I||E)})};e.reduce(function(c,E){return c.catch(function(){if(!v)return T(E)})},T(e.shift())).catch(B)})};function s(C){var e=C.srcList,l=C.imgPromise,v=l===void 0?r({decode:!0}):l,O=C.useSuspense,B=O===void 0?!0:O,T=(0,x.useState)(!1),c=M()(T,2),E=c[1],I=f(N(e)),A=I.join("");if(b[A]||(b[A]={promise:L(I,v),cache:"pending",error:null}),b[A].cache==="resolved")return{src:b[A].src,isLoading:!1,error:null};if(b[A].cache==="rejected"){if(B)throw b[A].error;return{isLoading:!1,error:b[A].error,src:void 0}}if(b[A].promise.then(function(V){b[A]=t()(t()({},b[A]),{},{cache:"resolved",src:V}),B||E(A)}).catch(function(V){b[A]=t()(t()({},b[A]),{},{cache:"rejected",error:V}),B||E(A)}),B)throw b[A].promise;return{isLoading:!0,src:void 0,error:null}}var o=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],i=function(e){return e};function y(C,e){var l=C.decode,v=l===void 0?!0:l,O=C.src,B=O===void 0?[]:O,T=C.loader,c=T===void 0?null:T,E=C.unloader,I=E===void 0?null:E,A=C.container,V=A===void 0?i:A,k=C.loaderContainer,Q=k===void 0?i:k,q=C.unloaderContainer,Z=q===void 0?i:q,tn=C.imgPromise,$=C.crossorigin,nn=C.useSuspense,on=nn===void 0?!1:nn,ln=K()(C,o);tn=tn||r({decode:v,crossOrigin:$});var rn=s({srcList:B,imgPromise:tn,useSuspense:on}),an=rn.src,cn=rn.isLoading;return an?V((0,a.jsx)("img",t()(t()({src:an},ln),{},{ref:e}))):!on&&cn?Q(c):!on&&I?Z(I):null}var j=(0,x.forwardRef)(y),m=n(31081),u=function(e){var l=e.errorTip,v=l===void 0?"load error":l;return(0,a.jsx)(j,t()({loader:(0,a.jsx)(m.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,a.jsx)(W,{errortip:v})},e))},F=u},73746:function(J,S,n){"use strict";var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(68400),a=n.n(g),z=n(88095),D=n(85893),U=["inputRef","onPressEnter","size"],W,h={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},K=z.default.input(W||(W=a()([`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid;
  outline: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  /* \u57FA\u7840\u6837\u5F0F */
  color: `,`;
  border-color: `,`;
  background-color: `,`;

  /* \u5C3A\u5BF8\u6837\u5F0F */
  height: `,`;
  padding-left: `,`;
  padding-right: `,`;
  padding-top: `,`;
  padding-bottom: `,`;
  font-size: `,`;
  border-radius: `,`;

  /* \u5360\u4F4D\u7B26\u6837\u5F0F */
  &::placeholder {
    color: `,`;
    opacity: 0.8;
  }

  /* \u60AC\u505C\u72B6\u6001 */
  &:hover:not(:disabled):not([data-disabled='true']) {
    border-color: `,`;
  }

  /* \u805A\u7126\u72B6\u6001 */
  &:focus {
    border-color: `,`;
    box-shadow: 0 0 0 2px `,`;
  }

  /* \u7981\u7528\u72B6\u6001 */
  &:disabled,
  &[data-disabled='true'] {
    background-color: `,`;
    color: `,`;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* \u9519\u8BEF\u72B6\u6001 */
  &[data-error='true'] {
    border-color: `,`;

    &:focus {
      box-shadow: 0 0 0 2px `,`;
    }
  }

  /* \u53EA\u8BFB\u72B6\u6001 */
  &:read-only {
    background-color: `,`;
    cursor: default;
  }
`])),function(r){return r.theme.primaryFontColor},function(r){return r.theme.borderColor},function(r){return r.theme.bgColor},function(r){var d=r.$size||"medium";return h[d].height},function(r){var d=r.$size||"medium";return h[d].paddingHorizontal},function(r){var d=r.$size||"medium";return h[d].paddingHorizontal},function(r){var d=r.$size||"medium";return h[d].paddingVertical},function(r){var d=r.$size||"medium";return h[d].paddingVertical},function(r){var d=r.$size||"medium";return h[d].fontSize},function(r){var d=r.$size||"medium";return h[d].borderRadius},function(r){return r.theme.gray},function(r){return r.theme.accentColor},function(r){return r.theme.accentColor},function(r){return"".concat(r.theme.accentColor,"20")},function(r){return r.theme.tipsBgColor},function(r){return r.theme.gray},function(r){return r.theme.dangerColor},function(r){return"".concat(r.theme.dangerColor,"20")},function(r){return r.theme.tipsBgColor}),x=function(d){var M=d.inputRef,f=d.onPressEnter,N=d.size,b=N===void 0?"medium":N,L=_()(d,U),s=function(i){var y;i.key==="Enter"&&(f==null||f(i.nativeEvent)),(y=L.onKeyDown)===null||y===void 0||y.call(L,i)};return(0,D.jsx)(K,t()(t()({ref:M,$size:b},L),{},{onKeyDown:s}))};S.Z=x},36348:function(J,S,n){"use strict";n.d(S,{g:function(){return z}});var R=n(97857),t=n.n(R),p=n(67294),_=n(78798),g=n(58106),a=n(85893),z=function(U){var W=(0,p.useContext)(g.Ni);return(0,a.jsx)(_.Z,t()({color:W.accentColor},U))}},88853:function(J,S,n){"use strict";n.d(S,{sN:function(){return L},K4:function(){return s},Kb:function(){return g.K},Cl:function(){return i},XG:function(){return o},ZP:function(){return C},s3:function(){return u},Ls:function(){return D.L}});var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(93702),a=n(64106),z=n(66227),D=n(79920),U=n(68400),W=n.n(U),h=n(88095),K=n(68258),x=n(76633),r=n(26484),d=n(58106),M,f,N,b,L=(0,h.default)(K.s)(M||(M=W()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,d._j)(e.theme.contextMenuBgColorHover,.2)}),s=h.default.div(f||(f=W()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),o=(0,h.default)(x.v)(N||(N=W()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),i=(0,h.default)(r.C)(b||(b=W()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),y=n(2057),j=n(85893),m=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],u=function(l){return(l==null?void 0:l.type)==="divider"},F=function(l){var v=l.open,O=l.items,B=l.triggerBtnClass,T=l.store,c=l.style,E=l.children,I=l.menuButtonProps,A=I===void 0?{}:I,V=_()(l,m),k=function Q(q){return q.map(function(Z,tn){var $;if(u(Z))return(0,j.jsx)(i,{},tn);var nn=Z.value;return Z.children&&(($=Z.children)===null||$===void 0?void 0:$.length)>0?(0,j.jsxs)(g.K,{children:[(0,j.jsxs)(L,{render:(0,j.jsx)(a.j,{}),children:[(0,j.jsx)(s,{}),(0,j.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,j.jsx)("span",{className:"menu-shortcut",children:Z.shortcut}),(0,j.jsx)(z.C,{})]}),(0,j.jsx)(o,{children:Q(Z.children)})]},nn):(0,j.jsxs)(L,{onClick:function(){Z.handler&&Z.handler()},children:[(0,j.jsx)(s,{children:Z.checked?(0,j.jsx)("i",{className:"ri-check-line"}):null}),(0,j.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,j.jsx)("span",{className:"menu-shortcut",children:Z.shortcut})]},nn)})};return T?(0,j.jsx)(o,t()(t()({style:c,store:T},V),{},{children:k(O)})):(0,j.jsxs)(g.K,{children:[E?(0,j.jsx)(a.j,{render:function(q){return(0,j.jsx)(y.Z,t()(t()({},q),A))},className:B,children:E}):null,(0,j.jsx)(o,t()(t()({style:c,open:v},V),{},{children:k(O)}))]})},C=F},85682:function(J,S,n){"use strict";n.d(S,{Z:function(){return j},p:function(){return g.p}});var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(51712),a=n(55683),z=n(23851),D=n(67294),U=n(68135),W=n(68400),h=n.n(W),K=n(8843),x=n(59719),r=n(17355),d=n(88095),M,f,N,b=(0,d.default)(K.J)(M||(M=h()([`
  display: flex;
  flex-direction: column;
  border-radius: `,`;
  border-width: 1px;
  border-style: solid;
  border-color: `,`;
  background-color: `,`;
  padding: `,`;
  color: `,`;
  outline: none;
`])),function(m){return m.theme.smallBorderRadius},function(m){return m.theme.borderColor},function(m){return m.theme.bgColor},function(m){return m.theme.spaceXs},function(m){return m.theme.primaryFontColor}),L=(0,d.default)(x.Q)(f||(f=h()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(m){return m.theme.borderColor},function(m){return m.theme.bgColor}),s=(0,d.default)(r.b)(N||(N=h()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(m){return m.theme.fontBase},function(m){return m.theme.spaceXs}),o=n(85893),i=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],y=function(u){var F=u.arrow,C=F===void 0?!0:F,e=u.title,l=u.toggleOnClick,v=l===void 0?!0:l,O=u.children,B=u.customContent,T=u.placement,c=u.onStoreChange,E=u.boxProps,I=E===void 0?{}:E,A=_()(u,i),V=(0,g.p)();return(0,D.useEffect)(function(){c&&c(V)},[V,c]),(0,o.jsxs)(a.H,{store:V,placement:T,children:[(0,o.jsx)(z.x,{toggleOnClick:v,render:function(Q){return(0,o.jsx)(U.x,t()(t()({style:{display:"inline-block"}},Q),I))},children:O}),!B&&!e?null:(0,o.jsxs)(b,t()(t()({render:function(Q){return(0,o.jsx)(U.x,t()({},Q))}},A),{},{children:[C?(0,o.jsx)(L,{}):null,e?(0,o.jsx)(s,{children:e}):null,B]}))]})},j=y},53291:function(J,S,n){"use strict";var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(67294),a=n(85893),z=["children","size","direction","align","split","wrap","style"],D=function(h){if(typeof h=="number")return h;switch(h){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},U=function(h){var K,x=h.children,r=h.size,d=r===void 0?"small":r,M=h.direction,f=M===void 0?"horizontal":M,N=h.align,b=h.split,L=h.wrap,s=L===void 0?!1:L,o=h.style,i=_()(h,z),y=g.Children.toArray(x).filter(function(l){return l!=null});if(y.length===0)return null;if(y.length===1&&!b)return(0,a.jsx)(a.Fragment,{children:y[0]});var j=N||(f==="horizontal"?"center":void 0),m=Array.isArray(d)?d:[d,d],u=D(m[0]),F=D((K=m[1])!==null&&K!==void 0?K:m[0]),C=t()({display:"flex",flexDirection:f==="vertical"?"column":"row",flexWrap:s&&f==="horizontal"?"wrap":"nowrap",alignItems:j},o),e=function(v){var O={};return f==="vertical"?v<y.length-1&&(O.marginBottom="".concat(F,"px")):(v<y.length-1&&(O.marginRight="".concat(u,"px")),s&&(O.marginBottom="".concat(F,"px"))),O};return(0,a.jsx)("div",t()(t()({style:C},i),{},{children:y.map(function(l,v){var O=l.key||"space-item-".concat(v),B=[];return v>0&&b&&B.push((0,a.jsx)("span",{style:f==="vertical"?{marginBottom:"".concat(F,"px")}:{marginRight:"".concat(u,"px")},children:b},"split-".concat(v))),B.push((0,a.jsx)("div",{style:e(v),children:l},O)),B})}))};S.Z=U},33867:function(J,S,n){"use strict";n.d(S,{o:function(){return C}});var R=n(5574),t=n.n(R),p=n(67294),_=n(64599),g=n.n(_),a=n(19632),z=n.n(a),D=n(12444),U=n.n(D),W=n(72004),h=n.n(W),K=n(9783),x=n.n(K),r=function(){function e(l){U()(this,e),x()(this,"title",void 0),x()(this,"children",void 0),x()(this,"parent",void 0),x()(this,"offsetCacheVersion",void 0),x()(this,"cachedOffsetTop",void 0),x()(this,"htmlNode",void 0),x()(this,"depth",void 0),x()(this,"id",void 0),x()(this,"key",void 0),x()(this,"chapter",void 0),x()(this,"h",void 0),x()(this,"onClick",void 0);var v=l.depth,O=l.key,B=l.offsetCacheVersion,T=l.chapter,c=l.h,E=c.htmlNode,I=c.value,A=c.id,V=c.onClick;this.htmlNode=E,this.title=I,this.parent=null,this.children=[],this.depth=v,this.id=A,this.key=O,this.cachedOffsetTop=null,this.offsetCacheVersion=B-1,this.chapter=T,this.h=c,this.onClick=V}return h()(e,[{key:"lazyLoad",value:function(v){v!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=v))}}]),e}(),d=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),M=function(){function e(l){U()(this,e),x()(this,"root",void 0),x()(this,"offsetCacheVersion",void 0);var v=Math.min.apply(Math,z()(l.map(function(c){return c.depth}))),O=0,B=l.map(function(c,E){return new r({h:c,depth:c.depth-v,key:E,offsetCacheVersion:O,chapter:"0"})}),T=[new r({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:O,chapter:"0"})];B.forEach(function(c){for(;T.length&&T[T.length-1].depth>=c.depth;)T.pop();T[T.length-1].children.push(c),c.parent=T[T.length-1];var E=c.parent.children.filter(function(A){return A.depth===c.depth}),I=c.depth-Math.max(c.parent.depth,0);if(I===0)c.chapter=String(E.length);else if(I===1)c.chapter="".concat(c.parent.chapter,".").concat(E.length);else for(c.chapter=c.parent.chapter;I>=1;)c.chapter+=".",I===1?c.chapter+=E.length:c.chapter+=0,I--;T.push(c)}),this.root=T[0],this.offsetCacheVersion=O}return h()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(v){var O=this,B=function(E){var I=g()(E.children),A;try{for(I.s();!(A=I.n()).done;){var V=A.value;if(T(V)===d.Stop)return d.Stop}}catch(k){I.e(k)}finally{I.f()}return d.Continue},T=function(E){E.lazyLoad(O.offsetCacheVersion);var I=v(E);return I!==d.Continue?I:B(E)};B(this.root)}}]),e}(),f=n(68400),N=n.n(f),b=n(88095),L=n(58106),s,o,i,y=b.default.div(s||(s=N()([`
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
`]))),j=b.default.a(o||(o=N()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,L._j)(e.theme.accentColor,.4)}),m=1,u=b.default.li(i||(i=N()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*m,"em")}),F=n(85893),C=(0,p.memo)((0,p.forwardRef)(function(e,l){var v,O=e.headingsData,B=e.containerEl,T=e.scrollEl,c=e.autoExpand,E=c===void 0?!1:c,I=e.Empty,A=I===void 0?null:I,V=(0,p.useState)(O),k=t()(V,2),Q=k[0],q=k[1],Z=(0,p.useState)(),tn=t()(Z,2),$=tn[0],nn=tn[1],on=(0,p.useState)(),ln=t()(on,2),rn=ln[0],an=ln[1],cn=(0,p.useState)(),pn=t()(cn,2),fn=pn[0],gn=pn[1],_n=(0,p.useState)(),Cn=t()(_n,2),en=Cn[0],hn=Cn[1],yn=(0,p.useState)(T),xn=t()(yn,2),G=xn[0],bn=xn[1],mn=(0,p.useCallback)(function(w){if(w){var H=w.querySelectorAll("h1, h2, h3, h4, h5, h6"),P=[];H.forEach(function(Y,dn){var un={depth:parseInt(Y.tagName[1],10),value:Y.innerText,htmlNode:Y,id:Y.id||"heading-".concat(dn)};P.push(un)}),q(P);var X=new M(P);return nn(X),X}},[]),jn=(0,p.useCallback)(function(w){var H=w||B;if(!(!H&&!Q)){if(Q){var P=new M(Q);nn(P)}else if(H)mn(H);else throw new Error("No headings and containerEl found");return hn(H),H}},[B,Q,mn]),En=(0,p.useCallback)(function(){if(!$||!G)return null;var w=10,H=G.scrollTop+w,P=null,X=null;return $.traverseInPreorder(function(Y){var dn=Math.max((Y.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0),0);return H>dn?(X=Y,d.Continue):(P=X,d.Stop)}),P===null&&X!==null&&en?X:P},[$,en,G]),vn=(0,p.useCallback)(function(w){if($){var H=w,P={},X=$.getRoot();if(X){for(P[X.key]=!0;H!==null;)P[H.key]=!0,H=H.parent;return P}}},[$]),sn=(0,p.useCallback)(function(){var w=En();if(w&&w!==rn){var H=vn(w);an(w),gn(H)}},[rn,vn,En]),Pn=function(H,P){H.preventDefault();var X=(P.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0);G==null||G.scrollTo(0,X),an(P),gn(vn(P))};(0,p.useEffect)(function(){return $?sn():jn(),G==null||G.addEventListener("scroll",sn),function(){G==null||G.removeEventListener("scroll",sn)}},[$,G,jn,sn]),(0,p.useImperativeHandle)(l,function(){return{refresh:function(H){var P=H.newContainer,X=H.newScroll;mn(P||en),hn(P),bn(X)},refreshByHeadings:function(H){var P=H.newHeadings;q(P),nn(new M(P)),bn(void 0),hn(void 0)}}});var On=function(){if($){var H=[];return $.traverseInPreorder(function(P){var X,Y=G?!!(rn&&rn.key===P.key):!0;return H.push((0,F.jsx)(u,{depth:P.depth,active:Y,children:(0,F.jsxs)(j,{href:"#".concat(P.id),active:Y,depth:P.depth,onClick:function(un){un.preventDefault(),P.onClick?P.onClick(P.h):Pn(un,P)},children:[(0,F.jsx)("span",{className:"toc-link__chapter",children:P.chapter}),P.title]})},P.key)),!E||fn!=null&&fn[P.key]||((X=P.parent)===null||X===void 0?void 0:X.key)===-1?d.Continue:d.NoChildren}),H}};return(0,F.jsx)(y,{children:(0,F.jsx)("div",{className:"toc-list",children:($==null||(v=$.getRoot())===null||v===void 0||(v=v.children)===null||v===void 0?void 0:v.length)===0?A:(0,F.jsx)("nav",{children:(0,F.jsx)("ul",{children:On()})})})})}))},23961:function(J,S,n){"use strict";n.r(S),n.d(S,{Toc:function(){return R.o}});var R=n(33867),t=n(12626),p=n.n(t),_={};for(var g in t)["default","Toc"].indexOf(g)<0&&(_[g]=function(a){return t[a]}.bind(0,g));n.d(S,_)},12626:function(){},58106:function(J,S,n){"use strict";n.d(S,{Ni:function(){return x},f6:function(){return r},y0:function(){return M},$_:function(){return f},_j:function(){return D},Wb:function(){return N},$n:function(){return z}});var R=n(97857),t=n.n(R),p={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},_={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},g=n(6767),a=n.n(g),z=function(L,s){return a()(L).lighten(s).string()},D=function(L,s){return a()(L).darken(s).string()},U=n(21539),W=n(67294),h=n(88095),K=n(85893),x=(0,W.createContext)({}),r=function(L){var s=L.theme,o=L.children,i=(s==null?void 0:s.mode)||"light",y=i==="dark"?f.styledConstants:N.styledConstants,j=s!=null&&s.token?t()(t()({},y),s.token):y;return(0,K.jsx)(h.StyleSheetManager,{shouldForwardProp:d,children:(0,K.jsx)(h.ThemeProvider,{theme:j,children:(0,K.jsx)(x.Provider,{value:j,children:o})})})};function d(b,L){return typeof L=="string"?(0,U.Z)(b):!0}var M={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},f={styledConstants:t()(t()({},M),p)},N={styledConstants:t()(t()({},M),_)}},24909:function(J,S,n){"use strict";n.d(S,{A:function(){return t.Am},T:function(){return g}});var R=n(67294),t=n(64712),p=n(88095),_=n(85893),g=(0,R.memo)(function(){var a=(0,R.useContext)(p.ThemeContext);return(0,_.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:a==null?void 0:a.borderColor,borderRadius:a==null?void 0:a.smallBorderRadius,color:a==null?void 0:a.primaryFontColor,background:a==null?void 0:a.bgColor},duration:5e3}})})},35307:function(J,S,n){"use strict";n.d(S,{Z:function(){return o}});var R=n(97857),t=n.n(R),p=n(13769),_=n.n(p),g=n(68400),a=n.n(g),z=n(67294),D=n(88095),U=n(56450),W=n(96518),h=n(96802),K,x,r=D.default.div.attrs(function(i){return i})(K||(K=a()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),d=D.default.div(x||(x=a()([`
  display: inline-block;
`]))),M=n(68135),f=n(85893),N=["children","title","fixed","placement","open"],b,L=D.default.div(b||(b=a()([`
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
`])),function(i){return i.theme.borderColor},function(i){return i.theme.tooltipBgColor},function(i){return i.theme.fontXs},function(i){return i.theme.primaryFontColor}),s=function(y){var j,m=y.children,u=y.title,F=y.fixed,C=F===void 0?!1:F,e=y.placement,l=e===void 0?C?"top":"bottom":e,v=y.open,O=_()(y,N),B=m!=null&&(j=m.props)!==null&&j!==void 0&&j.disabled?z.Children.only((0,f.jsx)(d,{children:m})):m;return u?(0,f.jsxs)(U.p,{placement:l,open:v,children:[(0,f.jsx)(W.e,{render:B}),(0,f.jsx)(h.u,{render:function(c){return(0,f.jsx)(M.x,t()(t()({style:{zIndex:99}},c),O))},children:(0,f.jsx)(L,{children:u})})]}):m},o=s},31081:function(J,S,n){"use strict";n.r(S),n.d(S,{Ariakit:function(){return p},Button:function(){return _.Z},Dialog:function(){return g.Z},Icon:function(){return t},Image:function(){return a.Z},Input:function(){return z.Z},Loading:function(){return K.g},Menu:function(){return D.ZP},MenuItem:function(){return D.sN},MenuItemCheckIcon:function(){return D.K4},MenuProvider:function(){return D.Kb},MenuSeparator:function(){return D.Cl},MenuWrapper:function(){return D.XG},Notifications:function(){return f.T},Popover:function(){return U.Z},Space:function(){return W.Z},Spinners:function(){return R},ThemeContext:function(){return M.Ni},ThemeProvider:function(){return M.f6},Tooltip:function(){return h.Z},common:function(){return M.y0},darkTheme:function(){return M.$_},darken:function(){return M._j},isDivider:function(){return D.s3},lightTheme:function(){return M.Wb},lighten:function(){return M.$n},toast:function(){return f.A},useMenuStore:function(){return D.Ls},usePopoverStore:function(){return U.p}});var R=n(48098),t=n(91703),p=n(88875),_=n(2057),g=n(22098),a=n(67761),z=n(73746),D=n(88853),U=n(85682),W=n(53291),h=n(35307),K=n(36348),x=n(23961),r={};for(var d in x)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(d)<0&&(r[d]=function(N){return x[N]}.bind(0,d));n.d(S,r);var M=n(58106),f=n(24909)}}]);
