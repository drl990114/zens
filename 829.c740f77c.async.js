(self.webpackChunkzens=self.webpackChunkzens||[]).push([[829],{68135:function(Q,z,e){"use strict";e.d(z,{x:function(){return C}});var I=e(97857),r=e.n(I),g=e(67294),E=e(85893),C=(0,g.memo)((0,g.forwardRef)(function(f,p){return(0,E.jsx)("div",r()({ref:p},f))}))},2057:function(Q,z,e){"use strict";var I=e(97857),r=e.n(I),g=e(68400),E=e.n(g),C=e(88095),f=e(35289),p=e(58106),M,N,R,h,W,j,a,s,D,m={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceSm",fontSize:"fontXs",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceBase",fontSize:"fontBase",borderRadius:"smallBorderRadius"}},K={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},U=function(t){var y=t.btnType,b=t.danger,v=t.ghost,d=t.theme,F=y||"default",G=b||!1,n=v||!1;if(G)return(0,C.css)(M||(M=E()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),d.dangerColor,n?"transparent":d.dangerColor,n?d.dangerColor:d.white,n?"rgba(220, 38, 38, 0.1)":(0,p._j)(d.dangerColor,.1),(0,p._j)(d.dangerColor,.1));switch(y){case"primary":return(0,C.css)(N||(N=E()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),d.accentColor,v?"transparent":d.accentColor,v?d.accentColor:d.white,v?"rgba(0, 122, 204, 0.1)":(0,p._j)(d.accentColor,.1),(0,p._j)(d.accentColor,.1));case"dashed":return(0,C.css)(R||(R=E()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),d.borderColor,v?"transparent":d.buttonBgColor,d.primaryFontColor,d.accentColor,d.accentColor);case"text":return(0,C.css)(h||(h=E()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),d.primaryFontColor);case"link":return(0,C.css)(W||(W=E()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),d.accentColor,(0,p._j)(d.accentColor,.1));default:return(0,C.css)(j||(j=E()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),d.borderColor,v?"transparent":d.buttonBgColor,d.primaryFontColor,d.accentColor,d.accentColor)}},S=function(t){var y=t.shape,b=t.size,v=t.theme,d=b||"medium",F=v[m[d].borderRadius];switch(y){case"rect":return(0,C.css)(a||(a=E()([`
        border-radius: none;
      `])));default:return(0,C.css)(s||(s=E()([`
        border-radius: `,`;
      `])),F)}},l=(0,C.default)(f.z).attrs(function(i){return r()(r()({},K),i)}).withConfig({shouldForwardProp:function(t){return!["btnType","size","shape","danger","ghost","block"].includes(t)}})(D||(D=E()([`
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
  cursor: pointer;

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
`])),function(i){var t=i.size||"medium";return i.theme[m[t].fontSize]},function(i){var t=i.size||"medium";return i.theme[m[t].paddingHorizontal]},function(i){var t=i.size||"medium";return i.theme[m[t].paddingHorizontal]},function(i){var t=i.size||"medium";return i.theme[m[t].paddingVertical]},function(i){var t=i.size||"medium";return i.theme[m[t].paddingVertical]},function(i){return i.block?"100%":"auto"},U,S,function(i){var t=i.btnType||"default";return(0,p._j)(t==="primary"?i.theme.accentColor:i.theme.buttonBgColor,.1)},function(i){var t=i.btnType||"default",y=i.danger||!1;return t==="primary"?"rgba(0, 122, 204, 0.2)":y?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});z.Z=l},22098:function(Q,z,e){"use strict";e.d(z,{Z:function(){return S}});var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(67294),f=e(90512),p=e(9784),M=e(26099),N=e(68400),R=e.n(N),h=e(88095),W,j,a=h.default.div.attrs(function(l){return r()(r()({},l),{},{width:l.width||"420px",padding:l.padding||"12px"})})(W||(W=R()([`
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
`])),function(l){return l.width},function(l){return l.theme.smallBorderRadius},function(l){return l.theme.dialogBgColor},function(l){return l.theme.primaryFontColor},function(l){return l.padding},function(l){return l.theme.borderColor},function(l){return l.theme.primaryFontColor},function(l){return l.theme.accentColor},function(l){return l.theme.white}),s=h.default.div(j||(j=R()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(l){return l.theme.dialogBackdropColor}),D=e(53291),m=e(85893),K=["title","footer","containerClass","children","width","hideDismiss"],U=function(i){var t=i.title,y=i.footer,b=i.containerClass,v=i.children,d=i.width,F=i.hideDismiss,G=F===void 0?!1:F,n=E()(i,K);return(0,m.jsxs)(p.Vq,r()(r()({render:function(o){return(0,m.jsx)(s,{hidden:!n.open,children:(0,m.jsx)(a,r()(r()({},o),{},{width:d}))})}},n),{},{backdrop:!1,children:[t?(0,m.jsxs)("div",{className:"mf-dialog__heading",children:[(0,m.jsx)("div",{className:"mf-dialog__heading__title",children:t}),G?null:(0,m.jsx)(M.S,{className:"mf-dialog__dismiss"})]}):G?null:(0,m.jsx)(M.S,{className:"mf-dialog__dismiss"}),(0,m.jsx)("div",{className:(0,f.Z)("mf-dialog__main",b),children:v}),y?(0,m.jsx)(D.Z,{className:"mf-dialog__footer",children:y}):null]}))},S=U},20207:function(Q,z,e){"use strict";e.d(z,{Z:function(){return x}});var I=e(97857),r=e.n(I),g=e(31081),E=e(68400),C=e.n(E),f=e(88095),p=e(85893),M,N=f.default.div(M||(M=C()([`
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
`])),function(o){return o.theme.errorTipColor}),R=function(c){var _=c.errortip,P=c.width,u=P===void 0?100:P,B=c.height,T=B===void 0?70:B;return(0,p.jsxs)(N,{style:{width:"".concat(u,"px"),height:"".concat(T,"px")},children:[(0,p.jsx)("div",{className:"zens-error-icon-box",children:(0,p.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,p.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,p.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,p.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,p.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,p.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,p.jsx)("span",{className:"zens-error-text",children:_})]})},h=R,W=e(13769),j=e.n(W),a=e(67294),s,D=function(c){return(0,p.jsx)(m,{children:c.emptyTip||"Empty source"})},m=f.default.div(s||(s=C()([`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: `,`;
  border: 1px solid `,`;
  font-size: 14px;
`])),function(o){return o.theme.errorTipColor},function(o){return o.theme.borderColor}),K=function(o){var c=o.decode,_=c===void 0?!0:c,P=o.crossOrigin,u=P===void 0?"":P;return function(B){return new Promise(function(T,$){var L=new Image;u&&(L.crossOrigin=u),L.onload=function(){_&&L.decode?L.decode().then(T).catch($):T()},L.onerror=$,L.src=B})}},U=e(5574),S=e.n(U),l=function(c){return c.filter(function(_){return _})},i=function(c){return Array.isArray(c)?c:[c]},t={},y=function(c,_){var P=!1;return new Promise(function(u,B){var T=function(L){return _(L).then(function(w){P=!0,u(w||L)})};c.reduce(function($,L){return $.catch(function(){if(!P)return T(L)})},T(c.shift())).catch(B)})};function b(o){var c=o.srcList,_=o.imgPromise,P=_===void 0?K({decode:!0}):_,u=o.useSuspense,B=u===void 0?!0:u,T=(0,a.useState)(!1),$=S()(T,2),L=$[1],w=l(i(c)),A=w.join("");if(t[A]||(t[A]={promise:y(w,P),cache:"pending",error:null}),t[A].cache==="resolved")return{src:t[A].src,isLoading:!1,error:null};if(t[A].cache==="rejected"){if(B)throw t[A].error;return{isLoading:!1,error:t[A].error,src:void 0}}if(t[A].promise.then(function(Y){t[A]=r()(r()({},t[A]),{},{cache:"resolved",src:Y}),B||L(A)}).catch(function(Y){t[A]=r()(r()({},t[A]),{},{cache:"rejected",error:Y}),B||L(A)}),B)throw t[A].promise;return{isLoading:!0,src:void 0,error:null}}var v=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense","emptyImage","emptyTip"],d=function(c){return c};function F(o,c){var _=o.decode,P=_===void 0?!0:_,u=o.src,B=u===void 0?[]:u,T=o.loader,$=T===void 0?null:T,L=o.unloader,w=L===void 0?null:L,A=o.container,Y=A===void 0?d:A,Z=o.loaderContainer,re=Z===void 0?d:Z,V=o.unloaderContainer,ne=V===void 0?d:V,oe=o.imgPromise,se=o.crossorigin,te=o.useSuspense,ae=te===void 0?!1:te,de=o.emptyImage,ue=de===void 0?null:de,le=o.emptyTip,ce=j()(o,v);oe=oe||K({decode:P,crossOrigin:se});var fe=b({srcList:B,imgPromise:oe,useSuspense:ae}),ie=fe.src,q=fe.isLoading;return!ie&&!q?ue||(0,p.jsx)(D,{emptyTip:le}):ie?Y((0,p.jsx)("img",r()(r()({src:ie},ce),{},{ref:c}))):!ae&&q?re($):!ae&&w?ne(w):null}var G=(0,a.forwardRef)(F),n=function(c){var _=c.errorTip,P=_===void 0?"load error":_;return(0,p.jsx)(G,r()({loader:(0,p.jsx)(g.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,p.jsx)(h,{errortip:P})},c))},x=n},73746:function(Q,z,e){"use strict";var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(68400),f=e.n(C),p=e(88095),M=e(85893),N=["inputRef","onPressEnter","size"],R,h={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},W=p.default.input(R||(R=f()([`
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
`])),function(a){return a.theme.primaryFontColor},function(a){return a.theme.borderColor},function(a){return a.theme.bgColor},function(a){var s=a.$size||"medium";return h[s].height},function(a){var s=a.$size||"medium";return h[s].paddingHorizontal},function(a){var s=a.$size||"medium";return h[s].paddingHorizontal},function(a){var s=a.$size||"medium";return h[s].paddingVertical},function(a){var s=a.$size||"medium";return h[s].paddingVertical},function(a){var s=a.$size||"medium";return h[s].fontSize},function(a){var s=a.$size||"medium";return h[s].borderRadius},function(a){return a.theme.gray},function(a){return a.theme.accentColor},function(a){return a.theme.accentColor},function(a){return"".concat(a.theme.accentColor,"20")},function(a){return a.theme.tipsBgColor},function(a){return a.theme.gray},function(a){return a.theme.dangerColor},function(a){return"".concat(a.theme.dangerColor,"20")},function(a){return a.theme.tipsBgColor}),j=function(s){var D=s.inputRef,m=s.onPressEnter,K=s.size,U=K===void 0?"medium":K,S=E()(s,N),l=function(t){var y;t.key==="Enter"&&(m==null||m(t.nativeEvent)),(y=S.onKeyDown)===null||y===void 0||y.call(S,t)};return(0,M.jsx)(W,r()(r()({ref:D,$size:U},S),{},{onKeyDown:l}))};z.Z=j},36348:function(Q,z,e){"use strict";e.d(z,{g:function(){return p}});var I=e(97857),r=e.n(I),g=e(67294),E=e(78798),C=e(58106),f=e(85893),p=function(N){var R=(0,g.useContext)(C.Ni);return(0,f.jsx)(E.Z,r()({color:R.accentColor},N))}},88853:function(Q,z,e){"use strict";e.d(z,{sN:function(){return S},K4:function(){return l},Kb:function(){return C.K},Cl:function(){return t},XG:function(){return i},ZP:function(){return G},s3:function(){return d},Ls:function(){return M.L}});var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(93702),f=e(64106),p=e(66227),M=e(79920),N=e(68400),R=e.n(N),h=e(88095),W=e(68258),j=e(76633),a=e(26484),s=e(58106),D,m,K,U,S=(0,h.default)(W.s)(D||(D=R()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.spaceXs},function(n){return n.theme.contextMenuBgColorHover},function(n){return(0,s._j)(n.theme.contextMenuBgColorHover,.2)}),l=h.default.div(m||(m=R()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),i=(0,h.default)(j.v)(K||(K=R()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.borderColor},function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.spaceXs},function(n){return n.theme.primaryFontColor},function(n){return n.theme.fontXs},function(n){return n.theme.spaceXs},function(n){return n.theme.secondaryFontColor},function(n){return n.theme.fontXs}),t=(0,h.default)(a.C)(U||(U=R()([`
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
`])),function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.contextMenuSeparatorColor},function(n){return n.theme.contextMenuSeparatorColor}),y=e(2057),b=e(85893),v=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],d=function(x){return(x==null?void 0:x.type)==="divider"},F=function(x){var o=x.open,c=x.items,_=x.triggerBtnClass,P=x.store,u=x.style,B=x.children,T=x.menuButtonProps,$=T===void 0?{}:T,L=E()(x,v),w=function A(Y){return Y.map(function(Z,re){var V;if(d(Z))return(0,b.jsx)(t,{},re);var ne=Z.value;return Z.children&&((V=Z.children)===null||V===void 0?void 0:V.length)>0?(0,b.jsxs)(C.K,{children:[(0,b.jsxs)(S,{render:(0,b.jsx)(f.j,{}),children:[(0,b.jsx)(l,{}),(0,b.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,b.jsx)("span",{className:"menu-shortcut",children:Z.shortcut}),(0,b.jsx)(p.C,{})]}),(0,b.jsx)(i,{children:A(Z.children)})]},ne):(0,b.jsxs)(S,{onClick:function(){Z.handler&&Z.handler()},children:[(0,b.jsx)(l,{children:Z.checked?(0,b.jsx)("i",{className:"ri-check-line"}):null}),(0,b.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,b.jsx)("span",{className:"menu-shortcut",children:Z.shortcut})]},ne)})};return P?(0,b.jsx)(i,r()(r()({style:u,store:P},L),{},{children:w(c)})):(0,b.jsxs)(C.K,{children:[B?(0,b.jsx)(f.j,{render:function(Y){return(0,b.jsx)(y.Z,r()(r()({},Y),$))},className:_,children:B}):null,(0,b.jsx)(i,r()(r()({style:u,open:o},L),{},{children:w(c)}))]})},G=F},85682:function(Q,z,e){"use strict";e.d(z,{Z:function(){return b},p:function(){return C.p}});var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(51712),f=e(55683),p=e(23851),M=e(67294),N=e(68135),R=e(68400),h=e.n(R),W=e(8843),j=e(59719),a=e(17355),s=e(88095),D,m,K,U=(0,s.default)(W.J)(D||(D=h()([`
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
`])),function(v){return v.theme.smallBorderRadius},function(v){return v.theme.borderColor},function(v){return v.theme.bgColor},function(v){return v.theme.spaceXs},function(v){return v.theme.primaryFontColor}),S=(0,s.default)(j.Q)(m||(m=h()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(v){return v.theme.borderColor},function(v){return v.theme.bgColor}),l=(0,s.default)(a.b)(K||(K=h()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(v){return v.theme.fontBase},function(v){return v.theme.spaceXs}),i=e(85893),t=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],y=function(d){var F=d.arrow,G=F===void 0?!0:F,n=d.title,x=d.toggleOnClick,o=x===void 0?!0:x,c=d.children,_=d.customContent,P=d.placement,u=d.onStoreChange,B=d.boxProps,T=B===void 0?{}:B,$=E()(d,t),L=(0,C.p)();return(0,M.useEffect)(function(){u&&u(L)},[L,u]),(0,i.jsxs)(f.H,{store:L,placement:P,children:[(0,i.jsx)(p.x,{toggleOnClick:o,render:function(A){return(0,i.jsx)(N.x,r()(r()({style:{display:"inline-block"}},A),T))},children:c}),!_&&!n?null:(0,i.jsxs)(U,r()(r()({render:function(A){return(0,i.jsx)(N.x,r()({},A))}},$),{},{children:[G?(0,i.jsx)(S,{}):null,n?(0,i.jsx)(l,{children:n}):null,_]}))]})},b=y},53291:function(Q,z,e){"use strict";var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(67294),f=e(85893),p=["children","size","direction","align","split","wrap","style"],M=function(h){if(typeof h=="number")return h;switch(h){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},N=function(h){var W,j=h.children,a=h.size,s=a===void 0?"small":a,D=h.direction,m=D===void 0?"horizontal":D,K=h.align,U=h.split,S=h.wrap,l=S===void 0?!1:S,i=h.style,t=E()(h,p),y=C.Children.toArray(j).filter(function(x){return x!=null});if(y.length===0)return null;if(y.length===1&&!U)return(0,f.jsx)(f.Fragment,{children:y[0]});var b=K||(m==="horizontal"?"center":void 0),v=Array.isArray(s)?s:[s,s],d=M(v[0]),F=M((W=v[1])!==null&&W!==void 0?W:v[0]),G=r()({display:"flex",flexDirection:m==="vertical"?"column":"row",flexWrap:l&&m==="horizontal"?"wrap":"nowrap",alignItems:b},i),n=function(o){var c={};return m==="vertical"?o<y.length-1&&(c.marginBottom="".concat(F,"px")):(o<y.length-1&&(c.marginRight="".concat(d,"px")),l&&(c.marginBottom="".concat(F,"px"))),c};return(0,f.jsx)("div",r()(r()({style:G},t),{},{children:y.map(function(x,o){var c=x.key||"space-item-".concat(o),_=[];return o>0&&U&&_.push((0,f.jsx)("span",{style:m==="vertical"?{marginBottom:"".concat(F,"px")}:{marginRight:"".concat(d,"px")},children:U},"split-".concat(o))),_.push((0,f.jsx)("div",{style:n(o),children:x},c)),_})}))};z.Z=N},33867:function(Q,z,e){"use strict";e.d(z,{o:function(){return G}});var I=e(5574),r=e.n(I),g=e(67294),E=e(64599),C=e.n(E),f=e(19632),p=e.n(f),M=e(12444),N=e.n(M),R=e(72004),h=e.n(R),W=e(9783),j=e.n(W),a=function(){function n(x){N()(this,n),j()(this,"title",void 0),j()(this,"children",void 0),j()(this,"parent",void 0),j()(this,"offsetCacheVersion",void 0),j()(this,"cachedOffsetTop",void 0),j()(this,"htmlNode",void 0),j()(this,"depth",void 0),j()(this,"id",void 0),j()(this,"key",void 0),j()(this,"chapter",void 0),j()(this,"h",void 0),j()(this,"onClick",void 0);var o=x.depth,c=x.key,_=x.offsetCacheVersion,P=x.chapter,u=x.h,B=u.htmlNode,T=u.value,$=u.id,L=u.onClick;this.htmlNode=B,this.title=T,this.parent=null,this.children=[],this.depth=o,this.id=$,this.key=c,this.cachedOffsetTop=null,this.offsetCacheVersion=_-1,this.chapter=P,this.h=u,this.onClick=L}return h()(n,[{key:"lazyLoad",value:function(o){o!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=o))}}]),n}(),s=function(n){return n[n.Continue=1]="Continue",n[n.NoChildren=2]="NoChildren",n[n.Stop=3]="Stop",n}({}),D=function(){function n(x){N()(this,n),j()(this,"root",void 0),j()(this,"offsetCacheVersion",void 0);var o=Math.min.apply(Math,p()(x.map(function(u){return u.depth}))),c=0,_=x.map(function(u,B){return new a({h:u,depth:u.depth-o,key:B,offsetCacheVersion:c,chapter:"0"})}),P=[new a({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:c,chapter:"0"})];_.forEach(function(u){for(;P.length&&P[P.length-1].depth>=u.depth;)P.pop();P[P.length-1].children.push(u),u.parent=P[P.length-1];var B=u.parent.children.filter(function($){return $.depth===u.depth}),T=u.depth-Math.max(u.parent.depth,0);if(T===0)u.chapter=String(B.length);else if(T===1)u.chapter="".concat(u.parent.chapter,".").concat(B.length);else for(u.chapter=u.parent.chapter;T>=1;)u.chapter+=".",T===1?u.chapter+=B.length:u.chapter+=0,T--;P.push(u)}),this.root=P[0],this.offsetCacheVersion=c}return h()(n,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(o){var c=this,_=function(B){var T=C()(B.children),$;try{for(T.s();!($=T.n()).done;){var L=$.value;if(P(L)===s.Stop)return s.Stop}}catch(w){T.e(w)}finally{T.f()}return s.Continue},P=function(B){B.lazyLoad(c.offsetCacheVersion);var T=o(B);return T!==s.Continue?T:_(B)};_(this.root)}}]),n}(),m=e(68400),K=e.n(m),U=e(88095),S=e(58106),l,i,t,y=U.default.div(l||(l=K()([`
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
`]))),b=U.default.a(i||(i=K()([`
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
`])),function(n){return n.active?n.theme.primaryFontColor:n.theme.labelFontColor},function(n){return n.active?"600":"400"},function(n){return n.theme.spaceXs},function(n){return n.active?n.theme.accentColor:(0,S._j)(n.theme.accentColor,.4)}),v=1,d=U.default.li(t||(t=K()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(n){return"".concat(n.depth*v,"em")}),F=e(85893),G=(0,g.memo)((0,g.forwardRef)(function(n,x){var o,c=n.headingsData,_=n.containerEl,P=n.scrollEl,u=n.autoExpand,B=u===void 0?!1:u,T=n.Empty,$=T===void 0?null:T,L=(0,g.useState)(c),w=r()(L,2),A=w[0],Y=w[1],Z=(0,g.useState)(),re=r()(Z,2),V=re[0],ne=re[1],oe=(0,g.useState)(),se=r()(oe,2),te=se[0],ae=se[1],de=(0,g.useState)(),ue=r()(de,2),le=ue[0],ce=ue[1],fe=(0,g.useState)(),ie=r()(fe,2),q=ie[0],pe=ie[1],ye=(0,g.useState)(P),xe=r()(ye,2),k=xe[0],be=xe[1],ge=(0,g.useCallback)(function(J){if(J){var H=J.querySelectorAll("h1, h2, h3, h4, h5, h6"),O=[];H.forEach(function(ee,he){var ve={depth:parseInt(ee.tagName[1],10),value:ee.innerText,htmlNode:ee,id:ee.id||"heading-".concat(he)};O.push(ve)}),Y(O);var X=new D(O);return ne(X),X}},[]),je=(0,g.useCallback)(function(J){var H=J||_;if(!(!H&&!A)){if(A){var O=new D(A);ne(O)}else if(H)ge(H);else throw new Error("No headings and containerEl found");return pe(H),H}},[_,A,ge]),Ee=(0,g.useCallback)(function(){if(!V||!k)return null;var J=10,H=k.scrollTop+J,O=null,X=null;return V.traverseInPreorder(function(ee){var he=Math.max((ee.cachedOffsetTop||0)-((q==null?void 0:q.offsetTop)||0),0);return H>he?(X=ee,s.Continue):(O=X,s.Stop)}),O===null&&X!==null&&q?X:O},[V,q,k]),Ce=(0,g.useCallback)(function(J){if(V){var H=J,O={},X=V.getRoot();if(X){for(O[X.key]=!0;H!==null;)O[H.key]=!0,H=H.parent;return O}}},[V]),me=(0,g.useCallback)(function(){var J=Ee();if(J&&J!==te){var H=Ce(J);ae(J),ce(H)}},[te,Ce,Ee]),_e=function(H,O){H.preventDefault();var X=(O.cachedOffsetTop||0)-((q==null?void 0:q.offsetTop)||0);k==null||k.scrollTo(0,X),ae(O),ce(Ce(O))};(0,g.useEffect)(function(){return V?me():je(),k==null||k.addEventListener("scroll",me),function(){k==null||k.removeEventListener("scroll",me)}},[V,k,je,me]),(0,g.useImperativeHandle)(x,function(){return{refresh:function(H){var O=H.newContainer,X=H.newScroll;ge(O||q),pe(O),be(X)},refreshByHeadings:function(H){var O=H.newHeadings;Y(O),ne(new D(O)),be(void 0),pe(void 0)}}});var Pe=function(){if(V){var H=[];return V.traverseInPreorder(function(O){var X,ee=k?!!(te&&te.key===O.key):!0;return H.push((0,F.jsx)(d,{depth:O.depth,active:ee,children:(0,F.jsxs)(b,{href:"#".concat(O.id),active:ee,depth:O.depth,onClick:function(ve){ve.preventDefault(),O.onClick?O.onClick(O.h):_e(ve,O)},children:[(0,F.jsx)("span",{className:"toc-link__chapter",children:O.chapter}),O.title]})},O.key)),!B||le!=null&&le[O.key]||((X=O.parent)===null||X===void 0?void 0:X.key)===-1?s.Continue:s.NoChildren}),H}};return(0,F.jsx)(y,{children:(0,F.jsx)("div",{className:"toc-list",children:(V==null||(o=V.getRoot())===null||o===void 0||(o=o.children)===null||o===void 0?void 0:o.length)===0?$:(0,F.jsx)("nav",{children:(0,F.jsx)("ul",{children:Pe()})})})})}))},23961:function(Q,z,e){"use strict";e.r(z),e.d(z,{Toc:function(){return I.o}});var I=e(33867),r=e(12626),g=e.n(r),E={};for(var C in r)["default","Toc"].indexOf(C)<0&&(E[C]=function(f){return r[f]}.bind(0,C));e.d(z,E)},12626:function(){},58106:function(Q,z,e){"use strict";e.d(z,{Ni:function(){return j},f6:function(){return a},y0:function(){return D},$_:function(){return m},_j:function(){return M},Wb:function(){return K},$n:function(){return p}});var I=e(97857),r=e.n(I),g={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},E={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},C=e(6767),f=e.n(C),p=function(S,l){return f()(S).lighten(l).string()},M=function(S,l){return f()(S).darken(l).string()},N=e(21539),R=e(67294),h=e(88095),W=e(85893),j=(0,R.createContext)({}),a=function(S){var l=S.theme,i=S.children,t=(l==null?void 0:l.mode)||"light",y=t==="dark"?m.styledConstants:K.styledConstants,b=l!=null&&l.token?r()(r()({},y),l.token):y;return(0,W.jsx)(h.StyleSheetManager,{shouldForwardProp:s,children:(0,W.jsx)(h.ThemeProvider,{theme:b,children:(0,W.jsx)(j.Provider,{value:b,children:i})})})};function s(U,S){return typeof S=="string"?(0,N.Z)(U):!0}var D={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},m={styledConstants:r()(r()({},D),g)},K={styledConstants:r()(r()({},D),E)}},24909:function(Q,z,e){"use strict";e.d(z,{A:function(){return r.Am},T:function(){return C}});var I=e(67294),r=e(64712),g=e(88095),E=e(85893),C=(0,I.memo)(function(){var f=(0,I.useContext)(g.ThemeContext);return(0,E.jsx)(r.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:f==null?void 0:f.borderColor,borderRadius:f==null?void 0:f.smallBorderRadius,color:f==null?void 0:f.primaryFontColor,background:f==null?void 0:f.bgColor},duration:5e3}})})},35307:function(Q,z,e){"use strict";e.d(z,{Z:function(){return i}});var I=e(97857),r=e.n(I),g=e(13769),E=e.n(g),C=e(68400),f=e.n(C),p=e(67294),M=e(88095),N=e(56450),R=e(96518),h=e(96802),W,j,a=M.default.div.attrs(function(t){return t})(W||(W=f()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),s=M.default.div(j||(j=f()([`
  display: inline-block;
`]))),D=e(68135),m=e(85893),K=["children","title","fixed","placement","open"],U,S=M.default.div(U||(U=f()([`
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
`])),function(t){return t.theme.borderColor},function(t){return t.theme.tooltipBgColor},function(t){return t.theme.fontXs},function(t){return t.theme.primaryFontColor}),l=function(y){var b,v=y.children,d=y.title,F=y.fixed,G=F===void 0?!1:F,n=y.placement,x=n===void 0?G?"top":"bottom":n,o=y.open,c=E()(y,K),_=v!=null&&(b=v.props)!==null&&b!==void 0&&b.disabled?p.Children.only((0,m.jsx)(s,{children:v})):v;return d?(0,m.jsxs)(N.p,{placement:x,open:o,children:[(0,m.jsx)(R.e,{render:_}),(0,m.jsx)(h.u,{render:function(u){return(0,m.jsx)(D.x,r()(r()({style:{zIndex:99}},u),c))},children:(0,m.jsx)(S,{children:d})})]}):v},i=l},31081:function(Q,z,e){"use strict";e.r(z),e.d(z,{Ariakit:function(){return g},Button:function(){return E.Z},Dialog:function(){return C.Z},Icon:function(){return r},Image:function(){return f.Z},Input:function(){return p.Z},Loading:function(){return W.g},Menu:function(){return M.ZP},MenuItem:function(){return M.sN},MenuItemCheckIcon:function(){return M.K4},MenuProvider:function(){return M.Kb},MenuSeparator:function(){return M.Cl},MenuWrapper:function(){return M.XG},Notifications:function(){return m.T},Popover:function(){return N.Z},Space:function(){return R.Z},Spinners:function(){return I},ThemeContext:function(){return D.Ni},ThemeProvider:function(){return D.f6},Tooltip:function(){return h.Z},common:function(){return D.y0},darkTheme:function(){return D.$_},darken:function(){return D._j},isDivider:function(){return M.s3},lightTheme:function(){return D.Wb},lighten:function(){return D.$n},toast:function(){return m.A},useMenuStore:function(){return M.Ls},usePopoverStore:function(){return N.p}});var I=e(48098),r=e(91703),g=e(88875),E=e(2057),C=e(22098),f=e(20207),p=e(73746),M=e(88853),N=e(85682),R=e(53291),h=e(35307),W=e(36348),j=e(23961),a={};for(var s in j)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(s)<0&&(a[s]=function(K){return j[K]}.bind(0,s));e.d(z,a);var D=e(58106),m=e(24909)}}]);
