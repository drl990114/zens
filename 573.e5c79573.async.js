(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(Q,S,e){"use strict";e.d(S,{x:function(){return v}});var K=e(97857),t=e.n(K),h=e(67294),C=e(85893),v=(0,h.memo)((0,h.forwardRef)(function(a,L){return(0,C.jsx)("div",t()({ref:L},a))}))},2057:function(Q,S,e){"use strict";var K=e(97857),t=e.n(K),h=e(68400),C=e.n(h),v=e(88095),a=e(51555),L=e(58106),O,H,I,x,N,d,U,M,E,f,T={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",height:"24px",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm",fontSize:"fontBase",height:"32px",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceSm",fontSize:"fontSm",height:"40px",borderRadius:"midBorderRadius"}},b={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},R=function(s){var m=s.btnType,p=s.danger,_=s.ghost,l=s.theme,g=m||"default",n=p||!1,o=_||!1;if(n)return(0,v.css)(O||(O=C()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;
      
      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),l.dangerColor,o?"transparent":l.dangerColor,o?l.dangerColor:l.white,o?"rgba(220, 38, 38, 0.1)":(0,L._j)(l.dangerColor,.1),(0,L._j)(l.dangerColor,.1));switch(m){case"primary":return(0,v.css)(H||(H=C()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;
        
        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),l.accentColor,_?"transparent":l.accentColor,_?l.accentColor:l.white,_?"rgba(0, 122, 204, 0.1)":(0,L._j)(l.accentColor,.1),(0,L._j)(l.accentColor,.1));case"dashed":return(0,v.css)(I||(I=C()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;
        
        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),l.borderColor,_?"transparent":l.buttonBgColor,l.primaryFontColor,l.accentColor,l.accentColor);case"text":return(0,v.css)(x||(x=C()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;
        
        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),l.primaryFontColor);case"link":return(0,v.css)(N||(N=C()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;
        
        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),l.accentColor,(0,L._j)(l.accentColor,.1));default:return(0,v.css)(d||(d=C()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;
        
        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),l.borderColor,_?"transparent":l.buttonBgColor,l.primaryFontColor,l.accentColor,l.accentColor)}},i=function(s){var m=s.shape,p=s.size,_=s.theme,l=p||"medium",g=_[T[l].borderRadius];switch(m){case"circle":return(0,v.css)(U||(U=C()([`
        border-radius: 50%;
        min-width: `,`;
        padding: 0;
        width: `,`;
        height: `,`;
      `])),_[T[l].height],_[T[l].height],_[T[l].height]);case"round":return(0,v.css)(M||(M=C()([`
        border-radius: `,`;
      `])),_[T[l].height]);default:return(0,v.css)(E||(E=C()([`
        border-radius: `,`;
      `])),g)}},z=(0,v.default)(a.z).attrs(function(r){return t()(t()({},b),r)}).withConfig({shouldForwardProp:function(s){return!["btnType","size","shape","danger","ghost","block"].includes(s)}})(f||(f=C()([`
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
`])),function(r){var s=r.size||"medium";return r.theme[T[s].fontSize]},function(r){var s=r.size||"medium";return r.theme[T[s].height]},function(r){var s=r.size||"medium";return r.theme[T[s].paddingHorizontal]},function(r){var s=r.size||"medium";return r.theme[T[s].paddingHorizontal]},function(r){var s=r.size||"medium";return r.theme[T[s].paddingVertical]},function(r){var s=r.size||"medium";return r.theme[T[s].paddingVertical]},function(r){return r.block?"100%":"auto"},R,i,function(r){var s=r.btnType||"default";return(0,L._j)(s==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)},function(r){var s=r.btnType||"default",m=r.danger||!1;return s==="primary"?"rgba(0, 122, 204, 0.2)":m?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});S.Z=z},22098:function(Q,S,e){"use strict";e.d(S,{Z:function(){return R}});var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(67294),a=e(90512),L=e(13732),O=e(81619),H=e(68400),I=e.n(H),x=e(88095),N,d,U=x.default.div.attrs(function(i){return t()(t()({},i),{},{width:i.width||"420px",padding:i.padding||"4px 6px"})})(N||(N=I()([`
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
`])),function(i){return i.width},function(i){return i.theme.smallBorderRadius},function(i){return i.theme.dialogBgColor},function(i){return i.theme.primaryFontColor},function(i){return i.padding},function(i){return i.theme.borderColor},function(i){return i.theme.primaryFontColor},function(i){return i.theme.accentColor},function(i){return i.theme.white}),M=x.default.div(d||(d=I()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(i){return i.theme.dialogBackdropColor}),E=e(53291),f=e(85893),T=["title","footer","containerClass","children","width","hideDismiss"],b=function(z){var r=z.title,s=z.footer,m=z.containerClass,p=z.children,_=z.width,l=z.hideDismiss,g=l===void 0?!1:l,n=C()(z,T);return(0,f.jsxs)(L.Vq,t()(t()({render:function(c){return(0,f.jsx)(M,{hidden:!n.open,children:(0,f.jsx)(U,t()(t()({},c),{},{width:_}))})}},n),{},{backdrop:!1,children:[r?(0,f.jsxs)("div",{className:"mf-dialog__heading",children:[(0,f.jsx)("div",{className:"mf-dialog__heading__title",children:r}),g?null:(0,f.jsx)(O.S,{className:"mf-dialog__dismiss"})]}):g?null:(0,f.jsx)(O.S,{className:"mf-dialog__dismiss"}),(0,f.jsx)("div",{className:(0,a.Z)("mf-dialog__main",m),children:p}),s?(0,f.jsx)(E.Z,{className:"mf-dialog__footer",children:s}):null]}))},R=b},67761:function(Q,S,e){"use strict";e.d(S,{Z:function(){return l}});var K=e(97857),t=e.n(K),h=e(68400),C=e.n(h),v=e(88095),a=e(85893),L,O=v.default.div(L||(L=C()([`
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
`])),function(g){return g.theme.errorTipColor}),H=function(n){var o=n.errortip,c=n.width,P=c===void 0?100:c,B=n.height,D=B===void 0?70:B;return(0,a.jsxs)(O,{style:{width:"".concat(P,"px"),height:"".concat(D,"px")},children:[(0,a.jsx)("div",{className:"zens-error-icon-box",children:(0,a.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,a.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,a.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,a.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,a.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,a.jsx)("span",{className:"zens-error-text",children:o})]})},I=H,x=e(13769),N=e.n(x),d=e(67294),U=function(g){var n=g.decode,o=n===void 0?!0:n,c=g.crossOrigin,P=c===void 0?"":c;return function(B){return new Promise(function(D,u){var j=new Image;P&&(j.crossOrigin=P),j.onload=function(){o&&j.decode?j.decode().then(D).catch(u):D()},j.onerror=u,j.src=B})}},M=e(5574),E=e.n(M),f=function(n){return n.filter(function(o){return o})},T=function(n){return Array.isArray(n)?n:[n]},b={},R=function(n,o){var c=!1;return new Promise(function(P,B){var D=function(j){return o(j).then(function(A){c=!0,P(A||j)})};n.reduce(function(u,j){return u.catch(function(){if(!c)return D(j)})},D(n.shift())).catch(B)})};function i(g){var n=g.srcList,o=g.imgPromise,c=o===void 0?U({decode:!0}):o,P=g.useSuspense,B=P===void 0?!0:P,D=(0,d.useState)(!1),u=E()(D,2),j=u[1],A=f(T(n)),W=A.join("");if(b[W]||(b[W]={promise:R(A,c),cache:"pending",error:null}),b[W].cache==="resolved")return{src:b[W].src,isLoading:!1,error:null};if(b[W].cache==="rejected"){if(B)throw b[W].error;return{isLoading:!1,error:b[W].error,src:void 0}}if(b[W].promise.then(function(V){b[W]=t()(t()({},b[W]),{},{cache:"resolved",src:V}),B||j(W)}).catch(function(V){b[W]=t()(t()({},b[W]),{},{cache:"rejected",error:V}),B||j(W)}),B)throw b[W].promise;return{isLoading:!0,src:void 0,error:null}}var z=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],r=function(n){return n};function s(g,n){var o=g.decode,c=o===void 0?!0:o,P=g.src,B=P===void 0?[]:P,D=g.loader,u=D===void 0?null:D,j=g.unloader,A=j===void 0?null:j,W=g.container,V=W===void 0?r:W,Y=g.loaderContainer,J=Y===void 0?r:Y,q=g.unloaderContainer,Z=q===void 0?r:q,te=g.imgPromise,$=g.crossorigin,ee=g.useSuspense,oe=ee===void 0?!1:ee,ie=N()(g,z);te=te||U({decode:c,crossOrigin:$});var re=i({srcList:B,imgPromise:te,useSuspense:oe}),ae=re.src,ue=re.isLoading;return ae?V((0,a.jsx)("img",t()(t()({src:ae},ie),{},{ref:n}))):!oe&&ue?J(u):!oe&&A?Z(A):null}var m=(0,d.forwardRef)(s),p=e(31081),_=function(n){var o=n.errorTip,c=o===void 0?"load error":o;return(0,a.jsx)(m,t()({loader:(0,a.jsx)(p.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,a.jsx)(I,{errortip:c})},n))},l=_},73746:function(Q,S,e){"use strict";var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(68400),a=e.n(v),L=e(88095),O=e(85893),H=["inputRef","onPressEnter"],I,x=L.default.input(I||(I=a()([`
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
`])),function(d){return d.theme.primaryFontColor},function(d){return d.theme.borderColor},function(d){return d.theme.bgColor},function(d){return d.theme.smallBorderRadius},function(d){return d.theme.accentColor},function(d){return d.theme.tipsBgColor}),N=function(U){var M=U.inputRef,E=U.onPressEnter,f=C()(U,H),T=function(R){var i;R.key==="Enter"&&(E==null||E(R.nativeEvent)),(i=f.onKeyDown)===null||i===void 0||i.call(f,R)};return(0,O.jsx)(x,t()(t()({ref:M},f),{},{onKeyDown:T}))};S.Z=N},36348:function(Q,S,e){"use strict";e.d(S,{g:function(){return L}});var K=e(97857),t=e.n(K),h=e(67294),C=e(78798),v=e(58106),a=e(85893),L=function(H){var I=(0,h.useContext)(v.Ni);return(0,a.jsx)(C.Z,t()({color:I.accentColor},H))}},88853:function(Q,S,e){"use strict";e.d(S,{sN:function(){return R},K4:function(){return i},Kb:function(){return v.K},Cl:function(){return r},XG:function(){return z},ZP:function(){return g},s3:function(){return _},Ls:function(){return O.L}});var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(93702),a=e(64106),L=e(66227),O=e(43807),H=e(68400),I=e.n(H),x=e(88095),N=e(79605),d=e(76633),U=e(26484),M=e(58106),E,f,T,b,R=(0,x.default)(N.s)(E||(E=I()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.spaceXs},function(n){return n.theme.contextMenuBgColorHover},function(n){return(0,M._j)(n.theme.contextMenuBgColorHover,.2)}),i=x.default.div(f||(f=I()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),z=(0,x.default)(d.v)(T||(T=I()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.borderColor},function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.spaceXs},function(n){return n.theme.primaryFontColor},function(n){return n.theme.fontXs},function(n){return n.theme.spaceXs},function(n){return n.theme.secondaryFontColor},function(n){return n.theme.fontXs}),r=(0,x.default)(U.C)(b||(b=I()([`
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
`])),function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.contextMenuSeparatorColor},function(n){return n.theme.contextMenuSeparatorColor}),s=e(2057),m=e(85893),p=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],_=function(o){return(o==null?void 0:o.type)==="divider"},l=function(o){var c=o.open,P=o.items,B=o.triggerBtnClass,D=o.store,u=o.style,j=o.children,A=o.menuButtonProps,W=A===void 0?{}:A,V=C()(o,p),Y=function J(q){return q.map(function(Z,te){var $;if(_(Z))return(0,m.jsx)(r,{},te);var ee=Z.value;return Z.children&&(($=Z.children)===null||$===void 0?void 0:$.length)>0?(0,m.jsxs)(v.K,{children:[(0,m.jsxs)(R,{render:(0,m.jsx)(a.j,{}),children:[(0,m.jsx)(i,{}),(0,m.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,m.jsx)("span",{className:"menu-shortcut",children:Z.shortcut}),(0,m.jsx)(L.C,{})]}),(0,m.jsx)(z,{children:J(Z.children)})]},ee):(0,m.jsxs)(R,{onClick:function(){Z.handler&&Z.handler()},children:[(0,m.jsx)(i,{children:Z.checked?(0,m.jsx)("i",{className:"ri-check-line"}):null}),(0,m.jsx)("span",{className:"menu-label",children:Z.label}),Z.shortcut&&(0,m.jsx)("span",{className:"menu-shortcut",children:Z.shortcut})]},ee)})};return D?(0,m.jsx)(z,t()(t()({style:u,store:D},V),{},{children:Y(P)})):(0,m.jsxs)(v.K,{children:[j?(0,m.jsx)(a.j,{render:function(q){return(0,m.jsx)(s.Z,t()(t()({},q),W))},className:B,children:j}):null,(0,m.jsx)(z,t()(t()({style:u,open:c},V),{},{children:Y(P)}))]})},g=l},85682:function(Q,S,e){"use strict";e.d(S,{Z:function(){return m},p:function(){return v.p}});var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(9271),a=e(55683),L=e(13900),O=e(68135),H=e(68400),I=e.n(H),x=e(38401),N=e(72864),d=e(31452),U=e(88095),M,E,f,T=(0,U.default)(x.J)(M||(M=I()([`
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
`])),function(p){return p.theme.smallBorderRadius},function(p){return p.theme.borderColor},function(p){return p.theme.bgColor},function(p){return p.theme.spaceXs},function(p){return p.theme.primaryFontColor}),b=(0,U.default)(N.Q)(E||(E=I()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(p){return p.theme.borderColor},function(p){return p.theme.bgColor}),R=(0,U.default)(d.b)(f||(f=I()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(p){return p.theme.fontBase},function(p){return p.theme.spaceXs}),i=e(67294),z=e(85893),r=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],s=function(_){var l=_.arrow,g=l===void 0?!0:l,n=_.title,o=_.toggleOnClick,c=o===void 0?!0:o,P=_.children,B=_.customContent,D=_.placement,u=_.onStoreChange,j=_.boxProps,A=j===void 0?{}:j,W=C()(_,r),V=(0,v.p)();return(0,i.useEffect)(function(){u&&u(V)},[V,u]),(0,z.jsxs)(a.H,{store:V,placement:D,children:[(0,z.jsx)(L.x,{toggleOnClick:c,render:function(J){return(0,z.jsx)(O.x,t()(t()({style:{display:"inline-block"}},J),A))},children:P}),!B&&!n?null:(0,z.jsxs)(T,t()(t()({render:function(J){return(0,z.jsx)(O.x,t()({},J))}},W),{},{children:[g?(0,z.jsx)(b,{}):null,n?(0,z.jsx)(R,{children:n}):null,B]}))]})},m=s},53291:function(Q,S,e){"use strict";var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(67294),a=e(85893),L=["children","size","direction","align","split","wrap","style"],O=function(x){if(typeof x=="number")return x;switch(x){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},H=function(x){var N,d=x.children,U=x.size,M=U===void 0?"small":U,E=x.direction,f=E===void 0?"horizontal":E,T=x.align,b=x.split,R=x.wrap,i=R===void 0?!1:R,z=x.style,r=C()(x,L),s=v.Children.toArray(d).filter(function(o){return o!=null});if(s.length===0)return null;if(s.length===1&&!b)return(0,a.jsx)(a.Fragment,{children:s[0]});var m=T||(f==="horizontal"?"center":void 0),p=Array.isArray(M)?M:[M,M],_=O(p[0]),l=O((N=p[1])!==null&&N!==void 0?N:p[0]),g=t()({display:"flex",flexDirection:f==="vertical"?"column":"row",flexWrap:i&&f==="horizontal"?"wrap":"nowrap",alignItems:m},z),n=function(c){var P={};return f==="vertical"?c<s.length-1&&(P.marginBottom="".concat(l,"px")):(c<s.length-1&&(P.marginRight="".concat(_,"px")),i&&(P.marginBottom="".concat(l,"px"))),P};return(0,a.jsx)("div",t()(t()({style:g},r),{},{children:s.map(function(o,c){var P=o.key||"space-item-".concat(c),B=[];return c>0&&b&&B.push((0,a.jsx)("span",{style:f==="vertical"?{marginBottom:"".concat(l,"px")}:{marginRight:"".concat(_,"px")},children:b},"split-".concat(c))),B.push((0,a.jsx)("div",{style:n(c),children:o},P)),B})}))};S.Z=H},33867:function(Q,S,e){"use strict";e.d(S,{o:function(){return g}});var K=e(5574),t=e.n(K),h=e(67294),C=e(64599),v=e.n(C),a=e(19632),L=e.n(a),O=e(12444),H=e.n(O),I=e(72004),x=e.n(I),N=e(9783),d=e.n(N),U=function(){function n(o){H()(this,n),d()(this,"title",void 0),d()(this,"children",void 0),d()(this,"parent",void 0),d()(this,"offsetCacheVersion",void 0),d()(this,"cachedOffsetTop",void 0),d()(this,"htmlNode",void 0),d()(this,"depth",void 0),d()(this,"id",void 0),d()(this,"key",void 0),d()(this,"chapter",void 0),d()(this,"h",void 0),d()(this,"onClick",void 0);var c=o.depth,P=o.key,B=o.offsetCacheVersion,D=o.chapter,u=o.h,j=u.htmlNode,A=u.value,W=u.id,V=u.onClick;this.htmlNode=j,this.title=A,this.parent=null,this.children=[],this.depth=c,this.id=W,this.key=P,this.cachedOffsetTop=null,this.offsetCacheVersion=B-1,this.chapter=D,this.h=u,this.onClick=V}return x()(n,[{key:"lazyLoad",value:function(c){c!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=c))}}]),n}(),M=function(n){return n[n.Continue=1]="Continue",n[n.NoChildren=2]="NoChildren",n[n.Stop=3]="Stop",n}({}),E=function(){function n(o){H()(this,n),d()(this,"root",void 0),d()(this,"offsetCacheVersion",void 0);var c=Math.min.apply(Math,L()(o.map(function(u){return u.depth}))),P=0,B=o.map(function(u,j){return new U({h:u,depth:u.depth-c,key:j,offsetCacheVersion:P,chapter:"0"})}),D=[new U({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:P,chapter:"0"})];B.forEach(function(u){for(;D.length&&D[D.length-1].depth>=u.depth;)D.pop();D[D.length-1].children.push(u),u.parent=D[D.length-1];var j=u.parent.children.filter(function(W){return W.depth===u.depth}),A=u.depth-Math.max(u.parent.depth,0);if(A===0)u.chapter=String(j.length);else if(A===1)u.chapter="".concat(u.parent.chapter,".").concat(j.length);else for(u.chapter=u.parent.chapter;A>=1;)u.chapter+=".",A===1?u.chapter+=j.length:u.chapter+=0,A--;D.push(u)}),this.root=D[0],this.offsetCacheVersion=P}return x()(n,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(c){var P=this,B=function(j){var A=v()(j.children),W;try{for(A.s();!(W=A.n()).done;){var V=W.value;if(D(V)===M.Stop)return M.Stop}}catch(Y){A.e(Y)}finally{A.f()}return M.Continue},D=function(j){j.lazyLoad(P.offsetCacheVersion);var A=c(j);return A!==M.Continue?A:B(j)};B(this.root)}}]),n}(),f=e(68400),T=e.n(f),b=e(88095),R=e(58106),i,z,r,s=b.default.div(i||(i=T()([`
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
`]))),m=b.default.a(z||(z=T()([`
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
`])),function(n){return n.active?n.theme.primaryFontColor:n.theme.labelFontColor},function(n){return n.active?"600":"400"},function(n){return n.theme.spaceXs},function(n){return n.active?n.theme.accentColor:(0,R._j)(n.theme.accentColor,.4)}),p=1,_=b.default.li(r||(r=T()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(n){return"".concat(n.depth*p,"em")}),l=e(85893),g=(0,h.memo)((0,h.forwardRef)(function(n,o){var c,P=n.headingsData,B=n.containerEl,D=n.scrollEl,u=n.autoExpand,j=u===void 0?!1:u,A=n.Empty,W=A===void 0?null:A,V=(0,h.useState)(P),Y=t()(V,2),J=Y[0],q=Y[1],Z=(0,h.useState)(),te=t()(Z,2),$=te[0],ee=te[1],oe=(0,h.useState)(),ie=t()(oe,2),re=ie[0],ae=ie[1],ue=(0,h.useState)(),ve=t()(ue,2),ce=ve[0],ge=ve[1],Ee=(0,h.useState)(),pe=t()(Ee,2),ne=pe[0],fe=pe[1],_e=(0,h.useState)(D),Ce=t()(_e,2),G=Ce[0],xe=Ce[1],he=(0,h.useCallback)(function(w){if(w){var F=w.querySelectorAll("h1, h2, h3, h4, h5, h6"),y=[];F.forEach(function(k,se){var de={depth:parseInt(k.tagName[1],10),value:k.innerText,htmlNode:k,id:k.id||"heading-".concat(se)};y.push(de)}),q(y);var X=new E(y);return ee(X),X}},[]),be=(0,h.useCallback)(function(w){var F=w||B;if(!(!F&&!J)){if(J){var y=new E(J);ee(y)}else if(F)he(F);else throw new Error("No headings and containerEl found");return fe(F),F}},[B,J,he]),je=(0,h.useCallback)(function(){if(!$||!G)return null;var w=10,F=G.scrollTop+w,y=null,X=null;return $.traverseInPreorder(function(k){var se=Math.max((k.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0),0);return F>se?(X=k,M.Continue):(y=X,M.Stop)}),y===null&&X!==null&&ne?X:y},[$,ne,G]),me=(0,h.useCallback)(function(w){if($){var F=w,y={},X=$.getRoot();if(X){for(y[X.key]=!0;F!==null;)y[F.key]=!0,F=F.parent;return y}}},[$]),le=(0,h.useCallback)(function(){var w=je();if(w&&w!==re){var F=me(w);ae(w),ge(F)}},[re,me,je]),ye=function(F,y){F.preventDefault();var X=(y.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0);G==null||G.scrollTo(0,X),ae(y),ge(me(y))};(0,h.useEffect)(function(){return $?le():be(),G==null||G.addEventListener("scroll",le),function(){G==null||G.removeEventListener("scroll",le)}},[$,G,be,le]),(0,h.useImperativeHandle)(o,function(){return{refresh:function(F){var y=F.newContainer,X=F.newScroll;he(y||ne),fe(y),xe(X)},refreshByHeadings:function(F){var y=F.newHeadings;q(y),ee(new E(y)),xe(void 0),fe(void 0)}}});var Pe=function(){if($){var F=[];return $.traverseInPreorder(function(y){var X,k=G?!!(re&&re.key===y.key):!0;return F.push((0,l.jsx)(_,{depth:y.depth,active:k,children:(0,l.jsxs)(m,{href:"#".concat(y.id),active:k,depth:y.depth,onClick:function(de){de.preventDefault(),y.onClick?y.onClick(y.h):ye(de,y)},children:[(0,l.jsx)("span",{className:"toc-link__chapter",children:y.chapter}),y.title]})},y.key)),!j||ce!=null&&ce[y.key]||((X=y.parent)===null||X===void 0?void 0:X.key)===-1?M.Continue:M.NoChildren}),F}};return(0,l.jsx)(s,{children:(0,l.jsx)("div",{className:"toc-list",children:($==null||(c=$.getRoot())===null||c===void 0||(c=c.children)===null||c===void 0?void 0:c.length)===0?W:(0,l.jsx)("nav",{children:(0,l.jsx)("ul",{children:Pe()})})})})}))},23961:function(Q,S,e){"use strict";e.r(S),e.d(S,{Toc:function(){return K.o}});var K=e(33867),t=e(12626),h=e.n(t),C={};for(var v in t)["default","Toc"].indexOf(v)<0&&(C[v]=function(a){return t[a]}.bind(0,v));e.d(S,C)},12626:function(){},58106:function(Q,S,e){"use strict";e.d(S,{Ni:function(){return d},f6:function(){return U},y0:function(){return E},$_:function(){return f},_j:function(){return O},Wb:function(){return T},$n:function(){return L}});var K=e(97857),t=e.n(K),h={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},C={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},v=e(6767),a=e.n(v),L=function(R,i){return a()(R).lighten(i).string()},O=function(R,i){return a()(R).darken(i).string()},H=e(21539),I=e(67294),x=e(88095),N=e(85893),d=(0,I.createContext)({}),U=function(R){var i=R.theme,z=R.children,r=(i==null?void 0:i.mode)||"light",s=r==="dark"?f.styledConstants:T.styledConstants,m=i!=null&&i.token?t()(t()({},s),i.token):s;return(0,N.jsx)(x.StyleSheetManager,{shouldForwardProp:M,children:(0,N.jsx)(x.ThemeProvider,{theme:m,children:(0,N.jsx)(d.Provider,{value:m,children:z})})})};function M(b,R){return typeof R=="string"?(0,H.Z)(b):!0}var E={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},f={styledConstants:t()(t()({},E),h)},T={styledConstants:t()(t()({},E),C)}},24909:function(Q,S,e){"use strict";e.d(S,{A:function(){return t.Am},T:function(){return v}});var K=e(67294),t=e(64712),h=e(88095),C=e(85893),v=(0,K.memo)(function(){var a=(0,K.useContext)(h.ThemeContext);return(0,C.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:a==null?void 0:a.borderColor,borderRadius:a==null?void 0:a.smallBorderRadius,color:a==null?void 0:a.primaryFontColor,background:a==null?void 0:a.bgColor},duration:5e3}})})},35307:function(Q,S,e){"use strict";e.d(S,{Z:function(){return z}});var K=e(97857),t=e.n(K),h=e(13769),C=e.n(h),v=e(68400),a=e.n(v),L=e(67294),O=e(88095),H=e(56450),I=e(96518),x=e(96802),N,d,U=O.default.div.attrs(function(r){return r})(N||(N=a()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),M=O.default.div(d||(d=a()([`
  display: inline-block;
`]))),E=e(68135),f=e(85893),T=["children","title","fixed","placement","open"],b,R=O.default.div(b||(b=a()([`
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
`])),function(r){return r.theme.borderColor},function(r){return r.theme.tooltipBgColor},function(r){return r.theme.fontXs},function(r){return r.theme.primaryFontColor}),i=function(s){var m,p=s.children,_=s.title,l=s.fixed,g=l===void 0?!1:l,n=s.placement,o=n===void 0?g?"top":"bottom":n,c=s.open,P=C()(s,T),B=p!=null&&(m=p.props)!==null&&m!==void 0&&m.disabled?L.Children.only((0,f.jsx)(M,{children:p})):p;return _?(0,f.jsxs)(H.p,{placement:o,open:c,children:[(0,f.jsx)(I.e,{render:B}),(0,f.jsx)(x.u,{render:function(u){return(0,f.jsx)(E.x,t()(t()({style:{zIndex:99}},u),P))},children:(0,f.jsx)(R,{children:_})})]}):p},z=i},31081:function(Q,S,e){"use strict";e.r(S),e.d(S,{AriaKit:function(){return h},Button:function(){return C.Z},Dialog:function(){return v.Z},Icon:function(){return t},Image:function(){return a.Z},Input:function(){return L.Z},Loading:function(){return N.g},Menu:function(){return O.ZP},MenuItem:function(){return O.sN},MenuItemCheckIcon:function(){return O.K4},MenuProvider:function(){return O.Kb},MenuSeparator:function(){return O.Cl},MenuWrapper:function(){return O.XG},Notifications:function(){return f.T},Popover:function(){return H.Z},Space:function(){return I.Z},Spinners:function(){return K},ThemeContext:function(){return E.Ni},ThemeProvider:function(){return E.f6},Tooltip:function(){return x.Z},common:function(){return E.y0},darkTheme:function(){return E.$_},darken:function(){return E._j},isDivider:function(){return O.s3},lightTheme:function(){return E.Wb},lighten:function(){return E.$n},toast:function(){return f.A},useMenuStore:function(){return O.Ls},usePopoverStore:function(){return H.p}});var K=e(48098),t=e(91703),h=e(43571),C=e(2057),v=e(22098),a=e(67761),L=e(73746),O=e(88853),H=e(85682),I=e(53291),x=e(35307),N=e(36348),d=e(23961),U={};for(var M in d)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","AriaKit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(M)<0&&(U[M]=function(T){return d[T]}.bind(0,M));e.d(S,U);var E=e(58106),f=e(24909)}}]);
