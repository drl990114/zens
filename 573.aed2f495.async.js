"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(G,T,e){e.d(T,{x:function(){return b}});var O=e(97857),r=e.n(O),d=e(67294),M=e(85893),b=(0,d.memo)((0,d.forwardRef)(function(o,S){return(0,M.jsx)("div",r()({ref:S},o))}))},2057:function(G,T,e){var O=e(97857),r=e.n(O),d=e(68400),M=e.n(d),b=e(88095),o=e(37050),S=e(58106),L,D={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},g=(0,b.ZP)(o.z).attrs(function(t){return r()({},t)}).withConfig({shouldForwardProp:function(B){return B!=="btnType"&&B!=="size"}})(L||(L=M()([`
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
`])),function(t){return t.theme.smallBorderRadius},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.borderColor},function(t){return t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor},function(t){return t.btnType==="primary"?t.theme.white:t.theme.primaryFontColor},function(t){return t.theme[D[t.size].paddingHorizontal]},function(t){return t.theme[D[t.size].paddingHorizontal]},function(t){return t.theme[D[t.size].paddingVertical]},function(t){return t.theme[D[t.size].paddingVertical]},function(t){return(0,S._j)(t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor,.1)},function(t){return(0,S._j)(t.btnType==="primary"?t.theme.accentColor:t.theme.buttonBgColor,.1)});g.defaultProps={size:"medium"},T.Z=g},22098:function(G,T,e){e.d(T,{Z:function(){return U}});var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(52784),o=e(55935),S=e(67294),L=e(68400),D=e.n(L),g=e(88095),t,B,s=g.ZP.div.attrs(function(a){return r()(r()({},a),{},{width:a.width||"420px"})})(t||(t=D()([`
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
`])),function(a){return a.width},function(a){return a.theme.midBorderRadius},function(a){return a.theme.dialogBgColor},function(a){return a.theme.primaryFontColor},function(a){return a.theme.borderColor},function(a){return a.theme.primaryFontColor},function(a){return a.theme.accentColor},function(a){return a.theme.white}),W=g.ZP.div(B||(B=D()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(a){return a.theme.dialogBackdropColor}),A=e(53291),K=e(90512),v=e(85893),R=["title","footer","containerClass","children","width"],p=function(j){var I=j.title,Z=j.footer,_=j.containerClass,C=j.children,H=j.width,N=M()(j,R);return(0,v.jsxs)(b.Vq,r()(r()({render:function(n){return(0,v.jsx)(W,{hidden:!N.open,children:(0,v.jsx)(s,r()(r()({},n),{},{width:H}))})}},N),{},{backdrop:!1,children:[I?(0,v.jsxs)("div",{className:"mf-dialog__heading",children:[(0,v.jsx)("div",{className:"mf-dialog__heading__title",children:I}),(0,v.jsx)(o.S,{className:"mf-dialog__dismiss"})]}):null,(0,v.jsx)("div",{className:(0,K.Z)("mf-dialog__main",_),children:C}),Z?(0,v.jsx)(A.Z,{className:"mf-dialog__footer",children:Z}):null]}))},U=p},67761:function(G,T,e){e.d(T,{Z:function(){return N}});var O=e(97857),r=e.n(O),d=e(68400),M=e.n(d),b=e(88095),o=e(85893),S,L=b.ZP.div(S||(S=M()([`
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
`])),function(f){return f.theme.errorTipColor}),D=function(n){var l=n.errortip,h=n.width,y=h===void 0?100:h,P=n.height,m=P===void 0?70:P;return(0,o.jsxs)(L,{style:{width:"".concat(y,"px"),height:"".concat(m,"px")},children:[(0,o.jsx)("div",{className:"zens-error-icon-box",children:(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,o.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,o.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,o.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,o.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,o.jsx)("span",{className:"zens-error-text",children:l})]})},g=D,t=e(13769),B=e.n(t),s=e(67294),W=function(f){var n=f.decode,l=n===void 0?!0:n,h=f.crossOrigin,y=h===void 0?"":h;return function(P){return new Promise(function(m,i){var u=new Image;y&&(u.crossOrigin=y),u.onload=function(){l&&u.decode?u.decode().then(m).catch(i):m()},u.onerror=i,u.src=P})}},A=e(5574),K=e.n(A),v=function(n){return n.filter(function(l){return l})},R=function(n){return Array.isArray(n)?n:[n]},p={},U=function(n,l){var h=!1;return new Promise(function(y,P){var m=function(u){return l(u).then(function(x){h=!0,y(x||u)})};n.reduce(function(i,u){return i.catch(function(){if(!h)return m(u)})},m(n.shift())).catch(P)})};function a(f){var n=f.srcList,l=f.imgPromise,h=l===void 0?W({decode:!0}):l,y=f.useSuspense,P=y===void 0?!0:y,m=(0,s.useState)(!1),i=K()(m,2),u=i[1],x=v(R(n)),E=x.join("");if(p[E]||(p[E]={promise:U(x,h),cache:"pending",error:null}),p[E].cache==="resolved")return{src:p[E].src,isLoading:!1,error:null};if(p[E].cache==="rejected"){if(P)throw p[E].error;return{isLoading:!1,error:p[E].error,src:void 0}}if(p[E].promise.then(function(F){p[E]=r()(r()({},p[E]),{},{cache:"resolved",src:F}),P||u(E)}).catch(function(F){p[E]=r()(r()({},p[E]),{},{cache:"rejected",error:F}),P||u(E)}),P)throw p[E].promise;return{isLoading:!0,src:void 0,error:null}}var j=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],I=function(n){return n};function Z(f,n){var l=f.decode,h=l===void 0?!0:l,y=f.src,P=y===void 0?[]:y,m=f.loader,i=m===void 0?null:m,u=f.unloader,x=u===void 0?null:u,E=f.container,F=E===void 0?I:E,Q=f.loaderContainer,q=Q===void 0?I:Q,ee=f.unloaderContainer,w=ee===void 0?I:ee,J=f.imgPromise,$=f.crossorigin,te=f.useSuspense,oe=te===void 0?!1:te,ae=B()(f,j);J=J||W({decode:h,crossOrigin:$});var re=a({srcList:P,imgPromise:J,useSuspense:oe}),ie=re.src,ue=re.isLoading;return ie?F((0,o.jsx)("img",r()(r()({src:ie},ae),{},{ref:n}))):!oe&&ue?q(i):!oe&&x?w(x):null}var _=(0,s.forwardRef)(Z),C=e(31081),H=function(n){var l=n.errorTip,h=l===void 0?"load error":l;return(0,o.jsx)(_,r()({loader:(0,o.jsx)(C.Icon.baP,{spin:!0,size:40}),unloader:(0,o.jsx)(g,{errortip:h})},n))},N=H},73746:function(G,T,e){var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(68400),o=e.n(b),S=e(88095),L=e(85893),D=["inputRef","onPressEnter"],g,t=S.ZP.input(g||(g=o()([`
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
`])),function(s){return s.theme.primaryFontColor},function(s){return s.theme.borderColor},function(s){return s.theme.bgColor},function(s){return s.theme.smallBorderRadius},function(s){return s.theme.accentColor},function(s){return s.theme.tipsBgColor}),B=function(W,A){var K=W.inputRef,v=W.onPressEnter,R=M()(W,D),p=function(a){var j;a.key==="Enter"&&(v==null||v(a.nativeEvent)),(j=R.onKeyDown)===null||j===void 0||j.call(R,a)};return(0,L.jsx)(t,r()(r()({ref:K},R),{},{onKeyDown:p}))};T.Z=B},36348:function(G,T,e){e.d(T,{g:function(){return S}});var O=e(97857),r=e.n(O),d=e(67294),M=e(53841),b=e(58106),o=e(85893),S=function(D){var g=(0,d.useContext)(b.Ni);return(0,o.jsx)(M.Z,r()({color:g.accentColor},D))}},88853:function(G,T,e){e.d(T,{ZP:function(){return f},Ls:function(){return L.L}});var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(93702),o=e(64106),S=e(8687),L=e(84479),D=e(68400),g=e.n(D),t=e(88095),B=e(87869),s=e(47948),W=e(75833),A=e(58106),K,v,R,p,U=(0,t.ZP)(B.s)(K||(K=g()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.spaceXs},function(n){return n.theme.contextMenuBgColorHover},function(n){return(0,A._j)(n.theme.contextMenuBgColorHover,.2)}),a=t.ZP.div(v||(v=g()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),j=(0,t.ZP)(s.v)(R||(R=g()([`
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
`])),function(n){return n.theme.smallBorderRadius},function(n){return n.theme.borderColor},function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.spaceXs},function(n){return n.theme.primaryFontColor},function(n){return n.theme.fontXs}),I=(0,t.ZP)(W.C)(p||(p=g()([`
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
`])),function(n){return n.theme.contextMenuBgColor},function(n){return n.theme.contextMenuSeparatorColor},function(n){return n.theme.contextMenuSeparatorColor}),Z=e(2057),_=e(85893),C=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],H=function(l){return(l==null?void 0:l.type)==="divider"},N=function(l){var h=l.open,y=l.items,P=l.triggerBtnClass,m=l.store,i=l.style,u=l.children,x=l.menuButtonProps,E=x===void 0?{}:x,F=M()(l,C),Q=function q(ee){return ee.map(function(w){var J;if(H(w))return(0,_.jsx)(I,{});var $=w.value;return w.children&&((J=w.children)===null||J===void 0?void 0:J.length)>0?(0,_.jsxs)(b.K,{children:[(0,_.jsxs)(U,{render:(0,_.jsx)(o.j,{}),children:[(0,_.jsx)(a,{}),(0,_.jsx)("span",{className:"menu-label",children:w.label}),(0,_.jsx)(S.C,{})]}),(0,_.jsx)(j,{children:q(w.children)})]},$):(0,_.jsxs)(U,{onClick:function(){w.handler&&w.handler()},children:[(0,_.jsx)(a,{children:w.checked?(0,_.jsx)("i",{className:"ri-check-line"}):null}),(0,_.jsx)("span",{className:"menu-label",children:w.label})]},$)})};return m?(0,_.jsx)(j,r()(r()({style:i,store:m},F),{},{children:Q(y)})):(0,_.jsxs)(b.K,{children:[u?(0,_.jsx)(o.j,{render:function(ee){return(0,_.jsx)(Z.Z,r()(r()({},ee),E))},className:P,children:u}):null,(0,_.jsx)(j,r()(r()({style:i,open:h},F),{},{children:Q(y)}))]})},f=N},85682:function(G,T,e){e.d(T,{Z:function(){return _}});var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(12776),o=e(55683),S=e(98263),L=e(68135),D=e(68400),g=e.n(D),t=e(67188),B=e(71010),s=e(23410),W=e(88095),A,K,v,R=(0,W.ZP)(t.J)(A||(A=g()([`
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
`])),function(C){return C.theme.smallBorderRadius},function(C){return C.theme.borderColor},function(C){return C.theme.bgColor},function(C){return C.theme.spaceXs},function(C){return C.theme.primaryFontColor}),p=(0,W.ZP)(B.Q)(K||(K=g()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(C){return C.theme.borderColor},function(C){return C.theme.bgColor}),U=(0,W.ZP)(s.b)(v||(v=g()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(C){return C.theme.fontBase},function(C){return C.theme.spaceXs}),a=e(67294),j=e(85893),I=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange"],Z=function(H){var N=H.arrow,f=N===void 0?!0:N,n=H.title,l=H.toggleOnClick,h=l===void 0?!0:l,y=H.children,P=H.customContent,m=H.placement,i=H.onStoreChange,u=M()(H,I),x=(0,b.p)();return(0,a.useEffect)(function(){i&&i(x)},[x,i]),(0,j.jsxs)(o.H,{store:x,placement:m,children:[(0,j.jsx)(S.x,{toggleOnClick:h,render:function(F){return(0,j.jsx)(L.x,r()({style:{display:"inline-block"}},F))},children:y}),!P&&!n?null:(0,j.jsxs)(R,r()(r()({render:function(F){return(0,j.jsx)(L.x,r()({},F))}},u),{},{children:[f?(0,j.jsx)(p,{}):null,n?(0,j.jsx)(U,{children:n}):null,P]}))]})},_=Z},53291:function(G,T,e){var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(67294),o=e(85893),S=["children","size"],L=function(g){var t=g.children,B=g.size,s=B===void 0?6:B,W=M()(g,S);if(b.Children.count(t)<=1)return t;var A={display:"inline-block"},K={display:"inline-block",marginLeft:"".concat(s,"px")};return(0,o.jsx)("span",r()(r()({},W),{},{children:b.Children.map(t,function(v,R){return(0,o.jsx)("span",{style:R===0?A:K,children:v},R)})}))};T.Z=L},42776:function(G,T,e){e.d(T,{Toc:function(){return f}});var O=e(5574),r=e.n(O),d=e(67294),M=e(64599),b=e.n(M),o=e(19632),S=e.n(o),L=e(12444),D=e.n(L),g=e(72004),t=e.n(g),B=e(9783),s=e.n(B),W=function(){function n(l){D()(this,n),s()(this,"title",void 0),s()(this,"children",void 0),s()(this,"parent",void 0),s()(this,"offsetCacheVersion",void 0),s()(this,"cachedOffsetTop",void 0),s()(this,"htmlNode",void 0),s()(this,"depth",void 0),s()(this,"id",void 0),s()(this,"key",void 0),s()(this,"chapter",void 0),s()(this,"h",void 0),s()(this,"onClick",void 0);var h=l.depth,y=l.key,P=l.offsetCacheVersion,m=l.chapter,i=l.h,u=i.htmlNode,x=i.value,E=i.id,F=i.onClick;this.htmlNode=u,this.title=x,this.parent=null,this.children=[],this.depth=h,this.id=E,this.key=y,this.cachedOffsetTop=null,this.offsetCacheVersion=P-1,this.chapter=m,this.h=i,this.onClick=F}return t()(n,[{key:"lazyLoad",value:function(h){h!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=h))}}]),n}(),A=function(n){return n[n.Continue=1]="Continue",n[n.NoChildren=2]="NoChildren",n[n.Stop=3]="Stop",n}({}),K=function(){function n(l){D()(this,n),s()(this,"root",void 0),s()(this,"offsetCacheVersion",void 0);var h=Math.min.apply(Math,S()(l.map(function(i){return i.depth}))),y=0,P=l.map(function(i,u){return new W({h:i,depth:i.depth-h,key:u,offsetCacheVersion:y,chapter:"0"})}),m=[new W({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:y,chapter:"0"})];P.forEach(function(i){for(;m.length&&m[m.length-1].depth>=i.depth;)m.pop();m[m.length-1].children.push(i),i.parent=m[m.length-1];var u=i.parent.children.filter(function(E){return E.depth===i.depth}),x=i.depth-Math.max(i.parent.depth,0);if(x===0)i.chapter=String(u.length);else if(x===1)i.chapter="".concat(i.parent.chapter,".").concat(u.length);else for(i.chapter=i.parent.chapter;x>=1;)i.chapter+=".",x===1?i.chapter+=u.length:i.chapter+=0,x--;m.push(i)}),this.root=m[0],this.offsetCacheVersion=y}return t()(n,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(h){var y=this,P=function(u){var x=b()(u.children),E;try{for(x.s();!(E=x.n()).done;){var F=E.value;if(m(F)===A.Stop)return A.Stop}}catch(Q){x.e(Q)}finally{x.f()}return A.Continue},m=function(u){u.lazyLoad(y.offsetCacheVersion);var x=h(u);return x!==A.Continue?x:P(u)};P(this.root)}}]),n}(),v=e(68400),R=e.n(v),p=e(88095),U=e(58106),a,j,I,Z=p.ZP.div(a||(a=R()([`
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
`]))),_=p.ZP.a(j||(j=R()([`
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
`])),function(n){return n.active?n.theme.primaryFontColor:n.theme.labelFontColor},function(n){return n.active?"600":"400"},function(n){return n.theme.spaceXs},function(n){return n.active?n.theme.accentColor:(0,U._j)(n.theme.accentColor,.4)}),C=1,H=p.ZP.li(I||(I=R()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(n){return"".concat(n.depth*C,"em")}),N=e(85893),f=(0,d.memo)((0,d.forwardRef)(function(n,l){var h,y=n.headingsData,P=n.containerEl,m=n.scrollEl,i=n.autoExpand,u=i===void 0?!1:i,x=n.Empty,E=x===void 0?null:x,F=(0,d.useState)(y),Q=r()(F,2),q=Q[0],ee=Q[1],w=(0,d.useState)(),J=r()(w,2),$=J[0],te=J[1],oe=(0,d.useState)(),ae=r()(oe,2),re=ae[0],ie=ae[1],ue=(0,d.useState)(),ve=r()(ue,2),ce=ve[0],pe=ve[1],Ee=(0,d.useState)(),ge=r()(Ee,2),ne=ge[0],he=ge[1],Pe=(0,d.useState)(m),Ce=r()(Pe,2),Y=Ce[0],xe=Ce[1],fe=(0,d.useCallback)(function(X){if(X){var z=X.querySelectorAll("h1, h2, h3, h4, h5, h6"),c=[];z.forEach(function(k,se){var de={depth:parseInt(k.tagName[1],10),value:k.innerText,htmlNode:k,id:k.id||"heading-".concat(se)};c.push(de)}),ee(c);var V=new K(c);return te(V),V}},[]),_e=(0,d.useCallback)(function(X){var z=X||P;if(!(!z&&!q)){if(q){var c=new K(q);te(c)}else if(z)fe(z);else throw new Error("No headings and containerEl found");return he(z),z}},[P,q,fe]),je=(0,d.useCallback)(function(){if(!$||!Y)return null;var X=10,z=Y.scrollTop+X,c=null,V=null;return $.traverseInPreorder(function(k){var se=Math.max((k.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0),0);return z>se?(V=k,A.Continue):(c=V,A.Stop)}),c===null&&V!==null&&ne?V:c},[$,ne,Y]),me=(0,d.useCallback)(function(X){if($){var z=X,c={},V=$.getRoot();if(V){for(c[V.key]=!0;z!==null;)c[z.key]=!0,z=z.parent;return c}}},[$]),le=(0,d.useCallback)(function(){var X=je();if(X&&X!==re){var z=me(X);ie(X),pe(z)}},[re,me,je]),be=function(z,c){z.preventDefault();var V=(c.cachedOffsetTop||0)-((ne==null?void 0:ne.offsetTop)||0);Y==null||Y.scrollTo(0,V),ie(c),pe(me(c))};(0,d.useEffect)(function(){return $?le():_e(),Y==null||Y.addEventListener("scroll",le),function(){Y==null||Y.removeEventListener("scroll",le)}},[$,Y,_e,le]),(0,d.useImperativeHandle)(l,function(){return{refresh:function(z){var c=z.newContainer,V=z.newScroll;fe(c||ne),he(c),xe(V)},refreshByHeadings:function(z){var c=z.newHeadings;ee(c),te(new K(c)),xe(void 0),he(void 0)}}});var ye=function(){if($){var z=[];return $.traverseInPreorder(function(c){var V,k=Y?!!(re&&re.key===c.key):!0;return z.push((0,N.jsx)(H,{depth:c.depth,active:k,children:(0,N.jsxs)(_,{href:"#".concat(c.id),active:k,depth:c.depth,onClick:function(de){de.preventDefault(),c.onClick?c.onClick(c.h):be(de,c)},children:[(0,N.jsx)("span",{className:"toc-link__chapter",children:c.chapter}),c.title]})},c.key)),!u||ce!=null&&ce[c.key]||((V=c.parent)===null||V===void 0?void 0:V.key)===-1?A.Continue:A.NoChildren}),z}};return(0,N.jsx)(Z,{children:(0,N.jsx)("div",{className:"toc-list",children:($==null||(h=$.getRoot())===null||h===void 0||(h=h.children)===null||h===void 0?void 0:h.length)===0?E:(0,N.jsx)("nav",{children:(0,N.jsx)("ul",{children:ye()})})})})}))},58106:function(G,T,e){e.d(T,{Ni:function(){return s},f6:function(){return W},$_:function(){return v},_j:function(){return L},Wb:function(){return R}});var O=e(97857),r=e.n(O),d={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},M={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},b=e(6767),o=e.n(b),S=function(U,a){return Color(U).lighten(a).string()},L=function(U,a){return o()(U).darken(a).string()},D=e(21539),g=e(67294),t=e(88095),B=e(85893),s=(0,g.createContext)({}),W=function(U){var a=U.theme,j=U.children,I=(a==null?void 0:a.mode)||"light",Z=I==="dark"?v.styledConstants:R.styledConstants,_=a!=null&&a.token?r()(r()({},Z),a.token):Z;return(0,B.jsx)(t.LC,{shouldForwardProp:A,children:(0,B.jsx)(t.f6,{theme:_,children:(0,B.jsx)(s.Provider,{value:_,children:j})})})};function A(p,U){return typeof U=="string"?(0,D.Z)(p):!0}var K={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},v={styledConstants:r()(r()({},K),d)},R={styledConstants:r()(r()({},K),M)}},24909:function(G,T,e){e.d(T,{A:function(){return r.A},T:function(){return b}});var O=e(67294),r=e(64712),d=e(88095),M=e(85893),b=(0,O.memo)(function(){var o=(0,O.useContext)(d.Ni);return(0,M.jsx)(r.x,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:o==null?void 0:o.borderColor,borderRadius:o==null?void 0:o.smallBorderRadius,color:o==null?void 0:o.primaryFontColor,background:o==null?void 0:o.bgColor},duration:5e3}})})},35307:function(G,T,e){e.d(T,{Z:function(){return j}});var O=e(97857),r=e.n(O),d=e(13769),M=e.n(d),b=e(68400),o=e.n(b),S=e(67294),L=e(88095),D=e(21655),g=e(96518),t=e(96802),B,s,W=L.ZP.div.attrs(function(I){return I})(B||(B=o()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),A=L.ZP.div(s||(s=o()([`
  display: inline-block;
`]))),K=e(68135),v=e(85893),R=["children","title","fixed","placement","open"],p,U=L.ZP.div(p||(p=o()([`
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
`])),function(I){return I.theme.borderColor},function(I){return I.theme.tooltipBgColor},function(I){return I.theme.fontXs},function(I){return I.theme.primaryFontColor}),a=function(Z){var _,C=Z.children,H=Z.title,N=Z.fixed,f=N===void 0?!1:N,n=Z.placement,l=n===void 0?f?"top":"bottom":n,h=Z.open,y=M()(Z,R),P=C!=null&&(_=C.props)!==null&&_!==void 0&&_.disabled?S.Children.only((0,v.jsx)(A,{children:C})):C;return H?(0,v.jsxs)(D.p,{placement:l,open:h,children:[(0,v.jsx)(g.e,{render:P}),(0,v.jsx)(t.u,{render:function(i){return(0,v.jsx)(K.x,r()(r()({style:{zIndex:99}},i),y))},children:(0,v.jsx)(U,{children:H})})]}):C},j=a},31081:function(G,T,e){e.d(T,{Button:function(){return O.Z},Dialog:function(){return r.Z},Icon:function(){return s},Image:function(){return L.Z},Input:function(){return d.Z},Loading:function(){return g.g},Menu:function(){return S.ZP},Notifications:function(){return t.T},Popover:function(){return b.Z},Space:function(){return M.Z},ThemeProvider:function(){return D.f6},Toc:function(){return B.Toc},Tooltip:function(){return o.Z},toast:function(){return t.A},useMenuStore:function(){return S.Ls}});var O=e(2057),r=e(22098),d=e(73746),M=e(53291),b=e(85682),o=e(35307),S=e(88853),L=e(67761),D=e(58106),g=e(36348),t=e(24909),B=e(42776),s=e(38074)}}]);
