(self.webpackChunkzens=self.webpackChunkzens||[]).push([[573],{68135:function(G,x,n){"use strict";n.d(x,{x:function(){return p}});var M=n(97857),t=n.n(M),d=n(67294),y=n(85893),p=(0,d.memo)((0,d.forwardRef)(function(o,I){return(0,y.jsx)("div",t()({ref:I},o))}))},2057:function(G,x,n){"use strict";var M=n(97857),t=n.n(M),d=n(68400),y=n.n(d),p=n(88095),o=n(51555),I=n(58106),g,z={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs"},medium:{paddingHorizontal:"spaceL",paddingVertical:"spaceSm"},large:{paddingHorizontal:"spaceXl",paddingVertical:"spaceXl"}},P={size:"medium"},D=(0,p.default)(o.z).attrs(function(r){return t()(t()({},P),r)}).withConfig({shouldForwardProp:function(a){return a!=="btnType"&&a!=="size"}})(g||(g=y()([`
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
`])),function(r){return r.theme.smallBorderRadius},function(r){return r.btnType==="primary"?r.theme.accentColor:r.theme.borderColor},function(r){return r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor},function(r){return r.btnType==="primary"?r.theme.white:r.theme.primaryFontColor},function(r){return r.theme[z[r.size].paddingHorizontal]},function(r){return r.theme[z[r.size].paddingHorizontal]},function(r){return r.theme[z[r.size].paddingVertical]},function(r){return r.theme[z[r.size].paddingVertical]},function(r){return(0,I._j)(r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)},function(r){return(0,I._j)(r.btnType==="primary"?r.theme.accentColor:r.theme.buttonBgColor,.1)});x.Z=D},22098:function(G,x,n){"use strict";n.d(x,{Z:function(){return W}});var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(67294),o=n(90512),I=n(13732),g=n(81619),z=n(68400),P=n.n(z),D=n(88095),r,a,K=D.default.div.attrs(function(i){return t()(t()({},i),{},{width:i.width||"420px",padding:i.padding||"4px 6px"})})(r||(r=P()([`
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
`])),function(i){return i.width},function(i){return i.theme.smallBorderRadius},function(i){return i.theme.dialogBgColor},function(i){return i.theme.primaryFontColor},function(i){return i.padding},function(i){return i.theme.borderColor},function(i){return i.theme.primaryFontColor},function(i){return i.theme.accentColor},function(i){return i.theme.white}),B=D.default.div(a||(a=P()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(i){return i.theme.dialogBackdropColor}),E=n(53291),c=n(85893),U=["title","footer","containerClass","children","width","hideDismiss"],j=function(S){var A=S.title,H=S.footer,C=S.containerClass,_=S.children,N=S.width,F=S.hideDismiss,h=F===void 0?!1:F,e=y()(S,U);return(0,c.jsxs)(I.Vq,t()(t()({render:function(f){return(0,c.jsx)(B,{hidden:!e.open,children:(0,c.jsx)(K,t()(t()({},f),{},{width:N}))})}},e),{},{backdrop:!1,children:[A?(0,c.jsxs)("div",{className:"mf-dialog__heading",children:[(0,c.jsx)("div",{className:"mf-dialog__heading__title",children:A}),h?null:(0,c.jsx)(g.S,{className:"mf-dialog__dismiss"})]}):h?null:(0,c.jsx)(g.S,{className:"mf-dialog__dismiss"}),(0,c.jsx)("div",{className:(0,o.Z)("mf-dialog__main",C),children:_}),H?(0,c.jsx)(E.Z,{className:"mf-dialog__footer",children:H}):null]}))},W=j},67761:function(G,x,n){"use strict";n.d(x,{Z:function(){return F}});var M=n(97857),t=n.n(M),d=n(68400),y=n.n(d),p=n(88095),o=n(85893),I,g=p.default.div(I||(I=y()([`
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
`])),function(h){return h.theme.errorTipColor}),z=function(e){var s=e.errortip,f=e.width,L=f===void 0?100:f,T=e.height,v=T===void 0?70:T;return(0,o.jsxs)(g,{style:{width:"".concat(L,"px"),height:"".concat(v,"px")},children:[(0,o.jsx)("div",{className:"zens-error-icon-box",children:(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,o.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,o.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,o.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,o.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,o.jsx)("span",{className:"zens-error-text",children:s})]})},P=z,D=n(13769),r=n.n(D),a=n(67294),K=function(h){var e=h.decode,s=e===void 0?!0:e,f=h.crossOrigin,L=f===void 0?"":f;return function(T){return new Promise(function(v,l){var u=new Image;L&&(u.crossOrigin=L),u.onload=function(){s&&u.decode?u.decode().then(v).catch(l):v()},u.onerror=l,u.src=T})}},B=n(5574),E=n.n(B),c=function(e){return e.filter(function(s){return s})},U=function(e){return Array.isArray(e)?e:[e]},j={},W=function(e,s){var f=!1;return new Promise(function(L,T){var v=function(u){return s(u).then(function(b){f=!0,L(b||u)})};e.reduce(function(l,u){return l.catch(function(){if(!f)return v(u)})},v(e.shift())).catch(T)})};function i(h){var e=h.srcList,s=h.imgPromise,f=s===void 0?K({decode:!0}):s,L=h.useSuspense,T=L===void 0?!0:L,v=(0,a.useState)(!1),l=E()(v,2),u=l[1],b=c(U(e)),O=b.join("");if(j[O]||(j[O]={promise:W(b,f),cache:"pending",error:null}),j[O].cache==="resolved")return{src:j[O].src,isLoading:!1,error:null};if(j[O].cache==="rejected"){if(T)throw j[O].error;return{isLoading:!1,error:j[O].error,src:void 0}}if(j[O].promise.then(function(Z){j[O]=t()(t()({},j[O]),{},{cache:"resolved",src:Z}),T||u(O)}).catch(function(Z){j[O]=t()(t()({},j[O]),{},{cache:"rejected",error:Z}),T||u(O)}),T)throw j[O].promise;return{isLoading:!0,src:void 0,error:null}}var S=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"],A=function(e){return e};function H(h,e){var s=h.decode,f=s===void 0?!0:s,L=h.src,T=L===void 0?[]:L,v=h.loader,l=v===void 0?null:v,u=h.unloader,b=u===void 0?null:u,O=h.container,Z=O===void 0?A:O,w=h.loaderContainer,Y=w===void 0?A:w,q=h.unloaderContainer,V=q===void 0?A:q,tn=h.imgPromise,$=h.crossorigin,nn=h.useSuspense,on=nn===void 0?!1:nn,ln=r()(h,S);tn=tn||K({decode:f,crossOrigin:$});var rn=i({srcList:T,imgPromise:tn,useSuspense:on}),an=rn.src,cn=rn.isLoading;return an?Z((0,o.jsx)("img",t()(t()({src:an},ln),{},{ref:e}))):!on&&cn?Y(l):!on&&b?V(b):null}var C=(0,a.forwardRef)(H),_=n(31081),N=function(e){var s=e.errorTip,f=s===void 0?"load error":s;return(0,o.jsx)(C,t()({loader:(0,o.jsx)(_.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,o.jsx)(P,{errortip:f})},e))},F=N},73746:function(G,x,n){"use strict";var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(68400),o=n.n(p),I=n(88095),g=n(85893),z=["inputRef","onPressEnter"],P,D=I.default.input(P||(P=o()([`
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
`])),function(a){return a.theme.primaryFontColor},function(a){return a.theme.borderColor},function(a){return a.theme.bgColor},function(a){return a.theme.smallBorderRadius},function(a){return a.theme.accentColor},function(a){return a.theme.tipsBgColor}),r=function(K){var B=K.inputRef,E=K.onPressEnter,c=y()(K,z),U=function(W){var i;W.key==="Enter"&&(E==null||E(W.nativeEvent)),(i=c.onKeyDown)===null||i===void 0||i.call(c,W)};return(0,g.jsx)(D,t()(t()({ref:B},c),{},{onKeyDown:U}))};x.Z=r},36348:function(G,x,n){"use strict";n.d(x,{g:function(){return I}});var M=n(97857),t=n.n(M),d=n(67294),y=n(78798),p=n(58106),o=n(85893),I=function(z){var P=(0,d.useContext)(p.Ni);return(0,o.jsx)(y.Z,t()({color:P.accentColor},z))}},88853:function(G,x,n){"use strict";n.d(x,{sN:function(){return W},K4:function(){return i},Kb:function(){return p.K},Cl:function(){return A},XG:function(){return S},ZP:function(){return h},s3:function(){return N},Ls:function(){return g.L}});var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(93702),o=n(64106),I=n(66227),g=n(43807),z=n(68400),P=n.n(z),D=n(88095),r=n(79605),a=n(76633),K=n(26484),B=n(58106),E,c,U,j,W=(0,D.default)(r.s)(E||(E=P()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,B._j)(e.theme.contextMenuBgColorHover,.2)}),i=D.default.div(c||(c=P()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),S=(0,D.default)(a.v)(U||(U=P()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),A=(0,D.default)(K.C)(j||(j=P()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),H=n(2057),C=n(85893),_=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],N=function(s){return(s==null?void 0:s.type)==="divider"},F=function(s){var f=s.open,L=s.items,T=s.triggerBtnClass,v=s.store,l=s.style,u=s.children,b=s.menuButtonProps,O=b===void 0?{}:b,Z=y()(s,_),w=function Y(q){return q.map(function(V,tn){var $;if(N(V))return(0,C.jsx)(A,{},tn);var nn=V.value;return V.children&&(($=V.children)===null||$===void 0?void 0:$.length)>0?(0,C.jsxs)(p.K,{children:[(0,C.jsxs)(W,{render:(0,C.jsx)(o.j,{}),children:[(0,C.jsx)(i,{}),(0,C.jsx)("span",{className:"menu-label",children:V.label}),V.shortcut&&(0,C.jsx)("span",{className:"menu-shortcut",children:V.shortcut}),(0,C.jsx)(I.C,{})]}),(0,C.jsx)(S,{children:Y(V.children)})]},nn):(0,C.jsxs)(W,{onClick:function(){V.handler&&V.handler()},children:[(0,C.jsx)(i,{children:V.checked?(0,C.jsx)("i",{className:"ri-check-line"}):null}),(0,C.jsx)("span",{className:"menu-label",children:V.label}),V.shortcut&&(0,C.jsx)("span",{className:"menu-shortcut",children:V.shortcut})]},nn)})};return v?(0,C.jsx)(S,t()(t()({style:l,store:v},Z),{},{children:w(L)})):(0,C.jsxs)(p.K,{children:[u?(0,C.jsx)(o.j,{render:function(q){return(0,C.jsx)(H.Z,t()(t()({},q),O))},className:T,children:u}):null,(0,C.jsx)(S,t()(t()({style:l,open:f},Z),{},{children:w(L)}))]})},h=F},85682:function(G,x,n){"use strict";n.d(x,{Z:function(){return C},p:function(){return p.p}});var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(9271),o=n(55683),I=n(13900),g=n(68135),z=n(68400),P=n.n(z),D=n(38401),r=n(72864),a=n(31452),K=n(88095),B,E,c,U=(0,K.default)(D.J)(B||(B=P()([`
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
`])),function(_){return _.theme.smallBorderRadius},function(_){return _.theme.borderColor},function(_){return _.theme.bgColor},function(_){return _.theme.spaceXs},function(_){return _.theme.primaryFontColor}),j=(0,K.default)(r.Q)(E||(E=P()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(_){return _.theme.borderColor},function(_){return _.theme.bgColor}),W=(0,K.default)(a.b)(c||(c=P()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(_){return _.theme.fontBase},function(_){return _.theme.spaceXs}),i=n(67294),S=n(85893),A=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],H=function(N){var F=N.arrow,h=F===void 0?!0:F,e=N.title,s=N.toggleOnClick,f=s===void 0?!0:s,L=N.children,T=N.customContent,v=N.placement,l=N.onStoreChange,u=N.boxProps,b=u===void 0?{}:u,O=y()(N,A),Z=(0,p.p)();return(0,i.useEffect)(function(){l&&l(Z)},[Z,l]),(0,S.jsxs)(o.H,{store:Z,placement:v,children:[(0,S.jsx)(I.x,{toggleOnClick:f,render:function(Y){return(0,S.jsx)(g.x,t()(t()({style:{display:"inline-block"}},Y),b))},children:L}),!T&&!e?null:(0,S.jsxs)(U,t()(t()({render:function(Y){return(0,S.jsx)(g.x,t()({},Y))}},O),{},{children:[h?(0,S.jsx)(j,{}):null,e?(0,S.jsx)(W,{children:e}):null,T]}))]})},C=H},53291:function(G,x,n){"use strict";var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(67294),o=n(85893),I=["children","size"],g=function(P){var D=P.children,r=P.size,a=r===void 0?6:r,K=y()(P,I);if(p.Children.count(D)<=1)return D;var B={display:"inline-block"},E={display:"inline-block",marginLeft:"".concat(a,"px")};return(0,o.jsx)("span",t()(t()({},K),{},{children:p.Children.map(D,function(c,U){return(0,o.jsx)("span",{style:U===0?B:E,children:c},U)})}))};x.Z=g},33867:function(G,x,n){"use strict";n.d(x,{o:function(){return h}});var M=n(5574),t=n.n(M),d=n(67294),y=n(64599),p=n.n(y),o=n(19632),I=n.n(o),g=n(12444),z=n.n(g),P=n(72004),D=n.n(P),r=n(9783),a=n.n(r),K=function(){function e(s){z()(this,e),a()(this,"title",void 0),a()(this,"children",void 0),a()(this,"parent",void 0),a()(this,"offsetCacheVersion",void 0),a()(this,"cachedOffsetTop",void 0),a()(this,"htmlNode",void 0),a()(this,"depth",void 0),a()(this,"id",void 0),a()(this,"key",void 0),a()(this,"chapter",void 0),a()(this,"h",void 0),a()(this,"onClick",void 0);var f=s.depth,L=s.key,T=s.offsetCacheVersion,v=s.chapter,l=s.h,u=l.htmlNode,b=l.value,O=l.id,Z=l.onClick;this.htmlNode=u,this.title=b,this.parent=null,this.children=[],this.depth=f,this.id=O,this.key=L,this.cachedOffsetTop=null,this.offsetCacheVersion=T-1,this.chapter=v,this.h=l,this.onClick=Z}return D()(e,[{key:"lazyLoad",value:function(f){f!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=f))}}]),e}(),B=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),E=function(){function e(s){z()(this,e),a()(this,"root",void 0),a()(this,"offsetCacheVersion",void 0);var f=Math.min.apply(Math,I()(s.map(function(l){return l.depth}))),L=0,T=s.map(function(l,u){return new K({h:l,depth:l.depth-f,key:u,offsetCacheVersion:L,chapter:"0"})}),v=[new K({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:L,chapter:"0"})];T.forEach(function(l){for(;v.length&&v[v.length-1].depth>=l.depth;)v.pop();v[v.length-1].children.push(l),l.parent=v[v.length-1];var u=l.parent.children.filter(function(O){return O.depth===l.depth}),b=l.depth-Math.max(l.parent.depth,0);if(b===0)l.chapter=String(u.length);else if(b===1)l.chapter="".concat(l.parent.chapter,".").concat(u.length);else for(l.chapter=l.parent.chapter;b>=1;)l.chapter+=".",b===1?l.chapter+=u.length:l.chapter+=0,b--;v.push(l)}),this.root=v[0],this.offsetCacheVersion=L}return D()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(f){var L=this,T=function(u){var b=p()(u.children),O;try{for(b.s();!(O=b.n()).done;){var Z=O.value;if(v(Z)===B.Stop)return B.Stop}}catch(w){b.e(w)}finally{b.f()}return B.Continue},v=function(u){u.lazyLoad(L.offsetCacheVersion);var b=f(u);return b!==B.Continue?b:T(u)};T(this.root)}}]),e}(),c=n(68400),U=n.n(c),j=n(88095),W=n(58106),i,S,A,H=j.default.div(i||(i=U()([`
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
`]))),C=j.default.a(S||(S=U()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,W._j)(e.theme.accentColor,.4)}),_=1,N=j.default.li(A||(A=U()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*_,"em")}),F=n(85893),h=(0,d.memo)((0,d.forwardRef)(function(e,s){var f,L=e.headingsData,T=e.containerEl,v=e.scrollEl,l=e.autoExpand,u=l===void 0?!1:l,b=e.Empty,O=b===void 0?null:b,Z=(0,d.useState)(L),w=t()(Z,2),Y=w[0],q=w[1],V=(0,d.useState)(),tn=t()(V,2),$=tn[0],nn=tn[1],on=(0,d.useState)(),ln=t()(on,2),rn=ln[0],an=ln[1],cn=(0,d.useState)(),pn=t()(cn,2),fn=pn[0],gn=pn[1],Pn=(0,d.useState)(),Cn=t()(Pn,2),en=Cn[0],hn=Cn[1],bn=(0,d.useState)(v),xn=t()(bn,2),J=xn[0],En=xn[1],mn=(0,d.useCallback)(function(Q){if(Q){var R=Q.querySelectorAll("h1, h2, h3, h4, h5, h6"),m=[];R.forEach(function(k,dn){var un={depth:parseInt(k.tagName[1],10),value:k.innerText,htmlNode:k,id:k.id||"heading-".concat(dn)};m.push(un)}),q(m);var X=new E(m);return nn(X),X}},[]),jn=(0,d.useCallback)(function(Q){var R=Q||T;if(!(!R&&!Y)){if(Y){var m=new E(Y);nn(m)}else if(R)mn(R);else throw new Error("No headings and containerEl found");return hn(R),R}},[T,Y,mn]),_n=(0,d.useCallback)(function(){if(!$||!J)return null;var Q=10,R=J.scrollTop+Q,m=null,X=null;return $.traverseInPreorder(function(k){var dn=Math.max((k.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0),0);return R>dn?(X=k,B.Continue):(m=X,B.Stop)}),m===null&&X!==null&&en?X:m},[$,en,J]),vn=(0,d.useCallback)(function(Q){if($){var R=Q,m={},X=$.getRoot();if(X){for(m[X.key]=!0;R!==null;)m[R.key]=!0,R=R.parent;return m}}},[$]),sn=(0,d.useCallback)(function(){var Q=_n();if(Q&&Q!==rn){var R=vn(Q);an(Q),gn(R)}},[rn,vn,_n]),On=function(R,m){R.preventDefault();var X=(m.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0);J==null||J.scrollTo(0,X),an(m),gn(vn(m))};(0,d.useEffect)(function(){return $?sn():jn(),J==null||J.addEventListener("scroll",sn),function(){J==null||J.removeEventListener("scroll",sn)}},[$,J,jn,sn]),(0,d.useImperativeHandle)(s,function(){return{refresh:function(R){var m=R.newContainer,X=R.newScroll;mn(m||en),hn(m),En(X)},refreshByHeadings:function(R){var m=R.newHeadings;q(m),nn(new E(m)),En(void 0),hn(void 0)}}});var Mn=function(){if($){var R=[];return $.traverseInPreorder(function(m){var X,k=J?!!(rn&&rn.key===m.key):!0;return R.push((0,F.jsx)(N,{depth:m.depth,active:k,children:(0,F.jsxs)(C,{href:"#".concat(m.id),active:k,depth:m.depth,onClick:function(un){un.preventDefault(),m.onClick?m.onClick(m.h):On(un,m)},children:[(0,F.jsx)("span",{className:"toc-link__chapter",children:m.chapter}),m.title]})},m.key)),!u||fn!=null&&fn[m.key]||((X=m.parent)===null||X===void 0?void 0:X.key)===-1?B.Continue:B.NoChildren}),R}};return(0,F.jsx)(H,{children:(0,F.jsx)("div",{className:"toc-list",children:($==null||(f=$.getRoot())===null||f===void 0||(f=f.children)===null||f===void 0?void 0:f.length)===0?O:(0,F.jsx)("nav",{children:(0,F.jsx)("ul",{children:Mn()})})})})}))},23961:function(G,x,n){"use strict";n.r(x),n.d(x,{Toc:function(){return M.o}});var M=n(33867),t=n(12626),d=n.n(t),y={};for(var p in t)["default","Toc"].indexOf(p)<0&&(y[p]=function(o){return t[o]}.bind(0,p));n.d(x,y)},12626:function(){},58106:function(G,x,n){"use strict";n.d(x,{Ni:function(){return a},f6:function(){return K},y0:function(){return E},$_:function(){return c},_j:function(){return g},Wb:function(){return U},$n:function(){return I}});var M=n(97857),t=n.n(M),d={primaryFontColor:"#c8d1d9",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},y={primaryFontColor:"#000000",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},p=n(6767),o=n.n(p),I=function(W,i){return o()(W).lighten(i).string()},g=function(W,i){return o()(W).darken(i).string()},z=n(21539),P=n(67294),D=n(88095),r=n(85893),a=(0,P.createContext)({}),K=function(W){var i=W.theme,S=W.children,A=(i==null?void 0:i.mode)||"light",H=A==="dark"?c.styledConstants:U.styledConstants,C=i!=null&&i.token?t()(t()({},H),i.token):H;return(0,r.jsx)(D.StyleSheetManager,{shouldForwardProp:B,children:(0,r.jsx)(D.ThemeProvider,{theme:C,children:(0,r.jsx)(a.Provider,{value:C,children:S})})})};function B(j,W){return typeof W=="string"?(0,z.Z)(j):!0}var E={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},c={styledConstants:t()(t()({},E),d)},U={styledConstants:t()(t()({},E),y)}},24909:function(G,x,n){"use strict";n.d(x,{A:function(){return t.Am},T:function(){return p}});var M=n(67294),t=n(64712),d=n(88095),y=n(85893),p=(0,M.memo)(function(){var o=(0,M.useContext)(d.ThemeContext);return(0,y.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:o==null?void 0:o.borderColor,borderRadius:o==null?void 0:o.smallBorderRadius,color:o==null?void 0:o.primaryFontColor,background:o==null?void 0:o.bgColor},duration:5e3}})})},35307:function(G,x,n){"use strict";n.d(x,{Z:function(){return S}});var M=n(97857),t=n.n(M),d=n(13769),y=n.n(d),p=n(68400),o=n.n(p),I=n(67294),g=n(88095),z=n(56450),P=n(96518),D=n(96802),r,a,K=g.default.div.attrs(function(A){return A})(r||(r=o()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),B=g.default.div(a||(a=o()([`
  display: inline-block;
`]))),E=n(68135),c=n(85893),U=["children","title","fixed","placement","open"],j,W=g.default.div(j||(j=o()([`
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
`])),function(A){return A.theme.borderColor},function(A){return A.theme.tooltipBgColor},function(A){return A.theme.fontXs},function(A){return A.theme.primaryFontColor}),i=function(H){var C,_=H.children,N=H.title,F=H.fixed,h=F===void 0?!1:F,e=H.placement,s=e===void 0?h?"top":"bottom":e,f=H.open,L=y()(H,U),T=_!=null&&(C=_.props)!==null&&C!==void 0&&C.disabled?I.Children.only((0,c.jsx)(B,{children:_})):_;return N?(0,c.jsxs)(z.p,{placement:s,open:f,children:[(0,c.jsx)(P.e,{render:T}),(0,c.jsx)(D.u,{render:function(l){return(0,c.jsx)(E.x,t()(t()({style:{zIndex:99}},l),L))},children:(0,c.jsx)(W,{children:N})})]}):_},S=i},31081:function(G,x,n){"use strict";n.r(x),n.d(x,{AriaKit:function(){return d},Button:function(){return y.Z},Dialog:function(){return p.Z},Icon:function(){return t},Image:function(){return o.Z},Input:function(){return I.Z},Loading:function(){return r.g},Menu:function(){return g.ZP},MenuItem:function(){return g.sN},MenuItemCheckIcon:function(){return g.K4},MenuProvider:function(){return g.Kb},MenuSeparator:function(){return g.Cl},MenuWrapper:function(){return g.XG},Notifications:function(){return c.T},Popover:function(){return z.Z},Space:function(){return P.Z},Spinners:function(){return M},ThemeContext:function(){return E.Ni},ThemeProvider:function(){return E.f6},Tooltip:function(){return D.Z},common:function(){return E.y0},darkTheme:function(){return E.$_},darken:function(){return E._j},isDivider:function(){return g.s3},lightTheme:function(){return E.Wb},lighten:function(){return E.$n},toast:function(){return c.A},useMenuStore:function(){return g.Ls},usePopoverStore:function(){return z.p}});var M=n(48098),t=n(91703),d=n(43571),y=n(2057),p=n(22098),o=n(67761),I=n(73746),g=n(88853),z=n(85682),P=n(53291),D=n(35307),r=n(36348),a=n(23961),K={};for(var B in a)["default","Button","Dialog","Image","Input","Menu","Popover","Space","Tooltip","AriaKit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore"].indexOf(B)<0&&(K[B]=function(U){return a[U]}.bind(0,B));n.d(x,K);var E=n(58106),c=n(24909)}}]);
