(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(G,y,n){"use strict";n.d(y,{x:function(){return M}});var B=n(97857),t=n.n(B),u=n(67294),S=n(85893),M=(0,u.memo)((0,u.forwardRef)(function(o,W){return(0,S.jsx)("div",t()({ref:W},o))}))},2057:function(G,y,n){"use strict";var B=n(97857),t=n.n(B),u=n(68400),S=n.n(u),M=n(88095),o=n(51555),W=n(58106),E,A={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},L={size:"medium"},m=(0,M.default)(o.z).attrs(function(r){return t()(t()({},L),r)}).withConfig({shouldForwardProp:function(l){return l!=="btnType"&&l!=="size"}})(E||(E=S()([`
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
`])),function(r){return r.theme.smallBorderRadius},function(r){return r.btnType==="primary"?r.theme.accentColor:r.theme.borderColor},function(r){return r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor},function(r){return r.btnType==="primary"?r.theme.white:r.theme.primaryFontColor},function(r){return r.theme[A[r.size].paddingHorizontal]},function(r){return r.theme[A[r.size].paddingHorizontal]},function(r){return r.theme[A[r.size].paddingVertical]},function(r){return r.theme[A[r.size].paddingVertical]},function(r){return(0,W._j)(r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)},function(r){return(0,W._j)(r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)});y.Z=m},22098:function(G,y,n){"use strict";n.d(y,{Z:function(){return I}});var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(67294),o=n(90512),W=n(13732),E=n(81619),A=n(68400),L=n.n(A),m=n(88095),r,l,K=m.default.div.attrs(function(a){return t()(t()({},a),{},{width:a.width||"420px",padding:a.padding||"4px 6px"})})(r||(r=L()([`
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
`])),function(a){return a.width},function(a){return a.theme.smallBorderRadius},function(a){return a.theme.dialogBgColor},function(a){return a.theme.primaryFontColor},function(a){return a.padding},function(a){return a.theme.borderColor},function(a){return a.theme.primaryFontColor},function(a){return a.theme.accentColor},function(a){return a.theme.white}),O=m.default.div(l||(l=L()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(a){return a.theme.dialogBackdropColor}),_=n(53291),c=n(85893),F=["title","footer","containerClass","children","width","hideDismiss"],v=function(b){var z=b.title,R=b.footer,C=b.containerClass,p=b.children,N=b.width,H=b.hideDismiss,f=H===void 0?!1:H,e=S()(b,F);return(0,c.jsxs)(W.Vq,t()(t()({render:function(d){return(0,c.jsx)(O,{hidden:!e.open,children:(0,c.jsx)(K,t()(t()({},d),{},{width:N}))})}},e),{},{backdrop:!1,children:[z?(0,c.jsxs)("div",{className:"mf-dialog__heading",children:[(0,c.jsx)("div",{className:"mf-dialog__heading__title",children:z}),f?null:(0,c.jsx)(E.S,{className:"mf-dialog__dismiss"})]}):f?null:(0,c.jsx)(E.S,{className:"mf-dialog__dismiss"}),(0,c.jsx)("div",{className:(0,o.Z)("mf-dialog__main",C),children:p}),R?(0,c.jsx)(_.Z,{className:"mf-dialog__footer",children:R}):null]}))},I=v},67761:function(G,y,n){"use strict";n.d(y,{Z:function(){return H}});var B=n(97857),t=n.n(B),u=n(68400),S=n.n(u),M=n(88095),o=n(85893),W,E=M.default.div(W||(W=S()([`
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
`])),function(f){return f.theme.errorTipColor}),A=function(e){var i=e.errortip,d=e.width,x=d===void 0?100:d,P=e.height,j=P===void 0?70:P;return(0,o.jsxs)(E,{style:{width:"".concat(x,"px"),height:"".concat(j,"px")},children:[(0,o.jsx)("div",{className:"zens-error-icon-box",children:(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,o.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,o.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,o.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,o.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,o.jsx)("span",{className:"zens-error-text",children:i})]})},L=A,m=n(13769),r=n.n(m),l=n(67294),K=function(f){var e=f.decode,i=e===void 0?!0:e,d=f.crossOrigin,x=d===void 0?"":d;return function(P){return new Promise(function(j,s){var h=new Image;x&&(h.crossOrigin=x),h.onload=function(){i&&h.decode?h.decode().then(j).catch(s):j()},h.onerror=s,h.src=P})}},O=n(5574),_=n.n(O),c=function(e){return e.filter(function(i){return i})},F=function(e){return Array.isArray(e)?e:[e]},v={},I=function(e,i){var d=!1;return new Promise(function(x,P){var j=function(h){return i(h).then(function(D){d=!0,x(D||h)})};e.reduce(function(s,h){return s.catch(function(){if(!d)return j(h)})},j(e.shift())).catch(P)})};function a(f){var e=f.srcList,i=f.imgPromise,d=i===void 0?K({decode:!0}):i,x=f.useSuspense,P=x===void 0?!0:x,j=(0,l.useState)(!1),s=_()(j,2),h=s[1],D=c(F(e)),T=D.join("");if(v[T]||(v[T]={promise:I(D,d),cache:"pending",error:null}),v[T].cache==="resolved")return{src:v[T].src,isLoading:!1,error:null};if(v[T].cache==="rejected"){if(P)throw v[T].error;return{isLoading:!1,error:v[T].error,src:void 0}}if(v[T].promise.then(function(Z){v[T]=t()(t()({},v[T]),{},{cache:"resolved",src:Z}),P||h(T)}).catch(function(Z){v[T]=t()(t()({},v[T]),{},{cache:"rejected",error:Z}),P||h(T)}),P)throw v[T].promise;return{isLoading:!0,src:void 0,error:null}}var b=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],z=function(e){return e};function R(f,e){var i=f.decode,d=i===void 0?!0:i,x=f.src,P=x===void 0?[]:x,j=f.loader,s=j===void 0?null:j,h=f.unloader,D=h===void 0?null:h,T=f.container,Z=T===void 0?z:T,Y=f.loaderContainer,w=Y===void 0?z:Y,q=f.unloaderContainer,V=q===void 0?z:q,tn=f.imgPromise,$=f.crossorigin,nn=f.useSuspense,on=nn===void 0?!1:nn,ln=r()(f,b);tn=tn||K({decode:d,crossOrigin:$});var rn=a({srcList:P,imgPromise:tn,useSuspense:on}),an=rn.src,cn=rn.isLoading;return an?Z((0,o.jsx)("img",t()(t()({src:an},ln),{},{ref:e}))):!on&&cn?w(s):!on&&D?V(D):null}var C=(0,l.forwardRef)(R),p=n(31081),N=function(e){var i=e.errorTip,d=i===void 0?"load error":i;return(0,o.jsx)(C,t()({loader:(0,o.jsx)(p.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,o.jsx)(L,{errortip:d})},e))},H=N},73746:function(G,y,n){"use strict";var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(68400),o=n.n(M),W=n(88095),E=n(85893),A=["inputRef","onPressEnter"],L,m=W.default.input(L||(L=o()([`
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
`])),function(l){return l.theme.primaryFontColor},function(l){return l.theme.borderColor},function(l){return l.theme.bgColor},function(l){return l.theme.smallBorderRadius},function(l){return l.theme.accentColor},function(l){return l.theme.tipsBgColor}),r=function(K){var O=K.inputRef,_=K.onPressEnter,c=S()(K,A),F=function(I){var a;I.key==="Enter"&&(_==null||_(I.nativeEvent)),(a=c.onKeyDown)===null||a===void 0||a.call(c,I)};return(0,E.jsx)(m,t()(t()({ref:O},c),{},{onKeyDown:F}))};y.Z=r},36348:function(G,y,n){"use strict";n.d(y,{g:function(){return W}});var B=n(97857),t=n.n(B),u=n(67294),S=n(78798),M=n(58106),o=n(85893),W=function(A){var L=(0,u.useContext)(M.Ni);return(0,o.jsx)(S.Z,t()({color:L.accentColor},A))}},88853:function(G,y,n){"use strict";n.d(y,{sN:function(){return I},K4:function(){return a},Kb:function(){return M.K},Cl:function(){return z},XG:function(){return b},ZP:function(){return f},s3:function(){return N},Ls:function(){return E.L}});var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(93702),o=n(64106),W=n(66227),E=n(43807),A=n(68400),L=n.n(A),m=n(88095),r=n(79605),l=n(76633),K=n(26484),O=n(58106),_,c,F,v,I=(0,m.default)(r.s)(_||(_=L()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,O._j)(e.theme.contextMenuBgColorHover,.2)}),a=m.default.div(c||(c=L()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),b=(0,m.default)(l.v)(F||(F=L()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),z=(0,m.default)(K.C)(v||(v=L()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),R=n(2057),C=n(85893),p=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],N=function(i){return(i==null?void 0:i.type)==="divider"},H=function(i){var d=i.open,x=i.items,P=i.triggerBtnClass,j=i.store,s=i.style,h=i.children,D=i.menuButtonProps,T=D===void 0?{}:D,Z=S()(i,p),Y=function w(q){return q.map(function(V,tn){var $;if(N(V))return(0,C.jsx)(z,{},tn);var nn=V.value;return V.children&&(($=V.children)===null||$===void 0?void 0:$.length)>0?(0,C.jsxs)(M.K,{children:[(0,C.jsxs)(I,{render:(0,C.jsx)(o.j,{}),children:[(0,C.jsx)(a,{}),(0,C.jsx)("span",{className:"menu-label",children:V.label}),V.shortcut&&(0,C.jsx)("span",{className:"menu-shortcut",children:V.shortcut}),(0,C.jsx)(W.C,{})]}),(0,C.jsx)(b,{children:w(V.children)})]},nn):(0,C.jsxs)(I,{onClick:function(){V.handler&&V.handler()},children:[(0,C.jsx)(a,{children:V.checked?(0,C.jsx)("i",{className:"ri-check-line"}):null}),(0,C.jsx)("span",{className:"menu-label",children:V.label}),V.shortcut&&(0,C.jsx)("span",{className:"menu-shortcut",children:V.shortcut})]},nn)})};return j?(0,C.jsx)(b,t()(t()({style:s,store:j},Z),{},{children:Y(x)})):(0,C.jsxs)(M.K,{children:[h?(0,C.jsx)(o.j,{render:function(q){return(0,C.jsx)(R.Z,t()(t()({},q),T))},className:P,children:h}):null,(0,C.jsx)(b,t()(t()({style:s,open:d},Z),{},{children:Y(x)}))]})},f=H},85682:function(G,y,n){"use strict";n.d(y,{Z:function(){return C},p:function(){return M.p}});var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(9271),o=n(55683),W=n(13900),E=n(68135),A=n(68400),L=n.n(A),m=n(38401),r=n(72864),l=n(31452),K=n(88095),O,_,c,F=(0,K.default)(m.J)(O||(O=L()([`
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
`])),function(p){return p.theme.smallBorderRadius},function(p){return p.theme.borderColor},function(p){return p.theme.bgColor},function(p){return p.theme.spaceXs},function(p){return p.theme.primaryFontColor}),v=(0,K.default)(r.Q)(_||(_=L()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(p){return p.theme.borderColor},function(p){return p.theme.bgColor}),I=(0,K.default)(l.b)(c||(c=L()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(p){return p.theme.fontBase},function(p){return p.theme.spaceXs}),a=n(67294),b=n(85893),z=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],R=function(N){var H=N.arrow,f=H===void 0?!0:H,e=N.title,i=N.toggleOnClick,d=i===void 0?!0:i,x=N.children,P=N.customContent,j=N.placement,s=N.onStoreChange,h=N.boxProps,D=h===void 0?{}:h,T=S()(N,z),Z=(0,M.p)();return(0,a.useEffect)(function(){s&&s(Z)},[Z,s]),(0,b.jsxs)(o.H,{store:Z,placement:j,children:[(0,b.jsx)(W.x,{toggleOnClick:d,render:function(w){return(0,b.jsx)(E.x,t()(t()({style:{display:"inline-block"}},w),D))},children:x}),!P&&!e?null:(0,b.jsxs)(F,t()(t()({render:function(w){return(0,b.jsx)(E.x,t()({},w))}},T),{},{children:[f?(0,b.jsx)(v,{}):null,e?(0,b.jsx)(I,{children:e}):null,P]}))]})},C=R},53291:function(G,y,n){"use strict";var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(67294),o=n(85893),W=["children","size","direction","align","split","wrap","style"],E=function(m){if(typeof m=="number")return m;switch(m){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},A=function(m){var r,l=m.children,K=m.size,O=K===void 0?"small":K,_=m.direction,c=_===void 0?"horizontal":_,F=m.align,v=m.split,I=m.wrap,a=I===void 0?!1:I,b=m.style,z=S()(m,W),R=M.Children.toArray(l).filter(function(i){return i!=null});if(R.length===0)return null;if(R.length===1&&!v)return(0,o.jsx)(o.Fragment,{children:R[0]});var C=F||(c==="horizontal"?"center":void 0),p=Array.isArray(O)?O:[O,O],N=E(p[0]),H=E((r=p[1])!==null&&r!==void 0?r:p[0]),f=t()({display:"flex",flexDirection:c==="vertical"?"column":"row",flexWrap:a&&c==="horizontal"?"wrap":"nowrap",alignItems:C},b),e=function(d){var x={};return c==="vertical"?d<R.length-1&&(x.marginBottom="".concat(H,"px")):(d<R.length-1&&(x.marginRight="".concat(N,"px")),a&&(x.marginBottom="".concat(H,"px"))),x};return(0,o.jsx)("div",t()(t()({style:f},z),{},{children:R.map(function(i,d){var x=i.key||"space-item-".concat(d),P=[];return d>0&&v&&P.push((0,o.jsx)("span",{style:c==="vertical"?{marginBottom:"".concat(H,"px")}:{marginRight:"".concat(N,"px")},children:v},"split-".concat(d))),P.push((0,o.jsx)("div",{style:e(d),children:i},x)),P})}))};y.Z=A},33867:function(G,y,n){"use strict";n.d(y,{o:function(){return f}});var B=n(5574),t=n.n(B),u=n(67294),S=n(64599),M=n.n(S),o=n(19632),W=n.n(o),E=n(12444),A=n.n(E),L=n(72004),m=n.n(L),r=n(9783),l=n.n(r),K=function(){function e(i){A()(this,e),l()(this,"title",void 0),l()(this,"children",void 0),l()(this,"parent",void 0),l()(this,"offsetCacheVersion",void 0),l()(this,"cachedOffsetTop",void 0),l()(this,"htmlNode",void 0),l()(this,"depth",void 0),l()(this,"id",void 0),l()(this,"key",void 0),l()(this,"chapter",void 0),l()(this,"h",void 0),l()(this,"onClick",void 0);var d=i.depth,x=i.key,P=i.offsetCacheVersion,j=i.chapter,s=i.h,h=s.htmlNode,D=s.value,T=s.id,Z=s.onClick;this.htmlNode=h,this.title=D,this.parent=null,this.children=[],this.depth=d,this.id=T,this.key=x,this.cachedOffsetTop=null,this.offsetCacheVersion=P-1,this.chapter=j,this.h=s,this.onClick=Z}return m()(e,[{key:"lazyLoad",value:function(d){d!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=d))}}]),e}(),O=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),_=function(){function e(i){A()(this,e),l()(this,"root",void 0),l()(this,"offsetCacheVersion",void 0);var d=Math.min.apply(Math,W()(i.map(function(s){return s.depth}))),x=0,P=i.map(function(s,h){return new K({h:s,depth:s.depth-d,key:h,offsetCacheVersion:x,chapter:"0"})}),j=[new K({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:x,chapter:"0"})];P.forEach(function(s){for(;j.length&&j[j.length-1].depth>=s.depth;)j.pop();j[j.length-1].children.push(s),s.parent=j[j.length-1];var h=s.parent.children.filter(function(T){return T.depth===s.depth}),D=s.depth-Math.max(s.parent.depth,0);if(D===0)s.chapter=String(h.length);else if(D===1)s.chapter="".concat(s.parent.chapter,".").concat(h.length);else for(s.chapter=s.parent.chapter;D>=1;)s.chapter+=".",D===1?s.chapter+=h.length:s.chapter+=0,D--;j.push(s)}),this.root=j[0],this.offsetCacheVersion=x}return m()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(d){var x=this,P=function(h){var D=M()(h.children),T;try{for(D.s();!(T=D.n()).done;){var Z=T.value;if(j(Z)===O.Stop)return O.Stop}}catch(Y){D.e(Y)}finally{D.f()}return O.Continue},j=function(h){h.lazyLoad(x.offsetCacheVersion);var D=d(h);return D!==O.Continue?D:P(h)};P(this.root)}}]),e}(),c=n(68400),F=n.n(c),v=n(88095),I=n(58106),a,b,z,R=v.default.div(a||(a=F()([`
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
`]))),C=v.default.a(b||(b=F()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,I._j)(e.theme.accentColor,.4)}),p=1,N=v.default.li(z||(z=F()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*p,"em")}),H=n(85893),f=(0,u.memo)((0,u.forwardRef)(function(e,i){var d,x=e.headingsData,P=e.containerEl,j=e.scrollEl,s=e.autoExpand,h=s===void 0?!1:s,D=e.Empty,T=D===void 0?null:D,Z=(0,u.useState)(x),Y=t()(Z,2),w=Y[0],q=Y[1],V=(0,u.useState)(),tn=t()(V,2),$=tn[0],nn=tn[1],on=(0,u.useState)(),ln=t()(on,2),rn=ln[0],an=ln[1],cn=(0,u.useState)(),pn=t()(cn,2),fn=pn[0],gn=pn[1],Pn=(0,u.useState)(),Cn=t()(Pn,2),en=Cn[0],hn=Cn[1],yn=(0,u.useState)(j),xn=t()(yn,2),J=xn[0],En=xn[1],mn=(0,u.useCallback)(function(Q){if(Q){var U=Q.querySelectorAll("h1, h2, h3, h4, h5, h6"),g=[];U.forEach(function(k,dn){var un={depth:parseInt(k.tagName[1],10),value:k.innerText,htmlNode:k,id:k.id||"heading-".concat(dn)};g.push(un)}),q(g);var X=new _(g);return nn(X),X}},[]),jn=(0,u.useCallback)(function(Q){var U=Q||P;if(!(!U&&!w)){if(w){var g=new _(w);nn(g)}else if(U)mn(U);else throw new Error("No headings and containerEl found");return hn(U),U}},[P,w,mn]),_n=(0,u.useCallback)(function(){if(!$||!J)return null;var Q=10,U=J.scrollTop+Q,g=null,X=null;return $.traverseInPreorder(function(k){var dn=Math.max((k.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0),0);return U>dn?(X=k,O.Continue):(g=X,O.Stop)}),g===null&&X!==null&&en?X:g},[$,en,J]),vn=(0,u.useCallback)(function(Q){if($){var U=Q,g={},X=$.getRoot();if(X){for(g[X.key]=!0;U!==null;)g[U.key]=!0,U=U.parent;return g}}},[$]),sn=(0,u.useCallback)(function(){var Q=_n();if(Q&&Q!==rn){var U=vn(Q);an(Q),gn(U)}},[rn,vn,_n]),Mn=function(U,g){U.preventDefault();var X=(g.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0);J==null||J.scrollTo(0,X),an(g),gn(vn(g))};(0,u.useEffect)(function(){return $?sn():jn(),J==null||J.addEventListener("scroll",sn),function(){J==null||J.removeEventListener("scroll",sn)}},[$,J,jn,sn]),(0,u.useImperativeHandle)(i,function(){return{refresh:function(U){var g=U.newContainer,X=U.newScroll;mn(g||en),hn(g),En(X)},refreshByHeadings:function(U){var g=U.newHeadings;q(g),nn(new _(g)),En(void 0),hn(void 0)}}});var On=function(){if($){var U=[];return $.traverseInPreorder(function(g){var X,k=J?!!(rn&&rn.key===g.key):!0;return U.push((0,H.jsx)(N,{depth:g.depth,active:k,children:(0,H.jsxs)(C,{href:"#".concat(g.id),active:k,depth:g.depth,onClick:function(un){un.preventDefault(),g.onClick?g.onClick(g.h):Mn(un,g)},children:[(0,H.jsx)("span",{className:"toc-link__chapter",children:g.chapter}),g.title]})},g.key)),!h||fn!=null&&fn[g.key]||((X=g.parent)===null||X===void 0?void 0:X.key)===-1?O.Continue:O.NoChildren}),U}};return(0,H.jsx)(R,{children:(0,H.jsx)("div",{className:"toc-list",children:($==null||(d=$.getRoot())===null||d===void 0||(d=d.children)===null||d===void 0?void 0:d.length)===0?T:(0,H.jsx)("nav",{children:(0,H.jsx)("ul",{children:On()})})})})}))},23961:function(G,y,n){"use strict";n.r(y),n.d(y,{Toc:function(){return B.o}});var B=n(33867),t=n(12626),u=n.n(t),S={};for(var M in t)["default","Toc"].indexOf(M)<0&&(S[M]=function(o){return t[o]}.bind(0,M));n.d(y,S)},12626:function(){},58106:function(G,y,n){"use strict";n.d(y,{Ni:function(){return l},f6:function(){return K},y0:function(){return _},$_:function(){return c},_j:function(){return E},Wb:function(){return F},$n:function(){return W}});var B=n(97857),t=n.n(B),u={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},S={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},M=n(6767),o=n.n(M),W=function(I,a){return o()(I).lighten(a).string()},E=function(I,a){return o()(I).darken(a).string()},A=n(21539),L=n(67294),m=n(88095),r=n(85893),l=(0,L.createContext)({}),K=function(I){var a=I.theme,b=I.children,z=(a==null?void 0:a.mode)||"light",R=z==="dark"?c.styledConstants:F.styledConstants,C=a!=null&&a.token?t()(t()({},R),a.token):R;return(0,r.jsx)(m.StyleSheetManager,{shouldForwardProp:O,children:(0,r.jsx)(m.ThemeProvider,{theme:C,children:(0,r.jsx)(l.Provider,{value:C,children:b})})})};function O(v,I){return typeof I=="string"?(0,A.Z)(v):!0}var _={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},c={styledConstants:t()(t()({},_),u)},F={styledConstants:t()(t()({},_),S)}},24909:function(G,y,n){"use strict";n.d(y,{A:function(){return t.Am},T:function(){return M}});var B=n(67294),t=n(64712),u=n(88095),S=n(85893),M=(0,B.memo)(function(){var o=(0,B.useContext)(u.ThemeContext);return(0,S.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:o==null?void 0:o.borderColor,borderRadius:o==null?void 0:o.smallBorderRadius,color:o==null?void 0:o.primaryFontColor,background:o==null?void 0:o.bgColor},duration:5e3}})})},35307:function(G,y,n){"use strict";n.d(y,{Z:function(){return b}});var B=n(97857),t=n.n(B),u=n(13769),S=n.n(u),M=n(68400),o=n.n(M),W=n(67294),E=n(88095),A=n(56450),L=n(96518),m=n(96802),r,l,K=E.default.div.attrs(function(z){return z})(r||(r=o()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),O=E.default.div(l||(l=o()([`
  display: inline-block;
`]))),_=n(68135),c=n(85893),F=["children","title","fixed","placement","open"],v,I=E.default.div(v||(v=o()([`
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
`])),function(z){return z.theme.borderColor},function(z){return z.theme.tooltipBgColor},function(z){return z.theme.fontXs},function(z){return z.theme.primaryFontColor}),a=function(R){var C,p=R.children,N=R.title,H=R.fixed,f=H===void 0?!1:H,e=R.placement,i=e===void 0?f?"top":"bottom":e,d=R.open,x=S()(R,F),P=p!=null&&(C=p.props)!==null&&C!==void 0&&C.disabled?W.Children.only((0,c.jsx)(O,{children:p})):p;return N?(0,c.jsxs)(A.p,{placement:i,open:d,children:[(0,c.jsx)(L.e,{render:P}),(0,c.jsx)(m.u,{render:function(s){return(0,c.jsx)(_.x,t()(t()({style:{zIndex:99}},s),x))},children:(0,c.jsx)(I,{children:N})})]}):p},b=a},31081:function(G,y,n){"use strict";n.r(y),n.d(y,{AriaKit:function(){return u},Button:function(){return S.Z},Dialog:function(){return M.Z},Icon:function(){return t},Image:function(){return o.Z},Input:function(){return W.Z},Loading:function(){return r.g},Menu:function(){return E.ZP},MenuItem:function(){return E.sN},MenuItemCheckIcon:function(){return E.K4},MenuProvider:function(){return E.Kb},MenuSeparator:function(){return E.Cl},MenuWrapper:function(){return E.XG},Notifications:function(){return c.T},Popover:function(){return A.Z},Space:function(){return L.Z},Spinners:function(){return B},ThemeContext:function(){return _.Ni},ThemeProvider:function(){return _.f6},Tooltip:function(){return m.Z},common:function(){return _.y0},darkTheme:function(){return _.$_},darken:function(){return _._j},isDivider:function(){return E.s3},lightTheme:function(){return _.Wb},lighten:function(){return _.$n},toast:function(){return c.A},useMenuStore:function(){return E.Ls},usePopoverStore:function(){return A.p}});var B=n(48098),t=n(91703),u=n(43571),S=n(2057),M=n(22098),o=n(67761),W=n(73746),E=n(88853),A=n(85682),L=n(53291),m=n(35307),r=n(36348),l=n(23961),K={};for(var O in l)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","AriaKit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(O)<0&&(K[O]=function(F){return l[F]}.bind(0,O));n.d(y,K);var _=n(58106),c=n(24909)}}]);
