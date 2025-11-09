(self.webpackChunkzens=self.webpackChunkzens||[]).push([[4829],{68135:function(q,L,n){"use strict";n.d(L,{x:function(){return g}});var N=n(97857),r=n.n(N),C=n(67294),b=n(85893),g=function(d){return(0,b.jsx)("div",r()({},d))}},2057:function(q,L,n){"use strict";var N=n(97857),r=n.n(N),C=n(68400),b=n.n(C),g=n(54335),P=n(35289),d=n(58106),K,I,W,c,F,x,o,m,O,l={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceSm",fontSize:"fontXs",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceBase",fontSize:"fontBase",borderRadius:"smallBorderRadius"}},_={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},R=function(a){var T=a.btnType,y=a.danger,p=a.ghost,h=a.theme,H=T||"default",J=y||!1,e=p||!1;if(J)return(0,g.css)(K||(K=b()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),h.dangerColor,e?"transparent":h.dangerColor,e?h.dangerColor:h.white,e?"rgba(220, 38, 38, 0.1)":(0,d._j)(h.dangerColor,.1),(0,d._j)(h.dangerColor,.1));switch(T){case"primary":return(0,g.css)(I||(I=b()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),h.accentColor,p?"transparent":h.accentColor,p?h.accentColor:h.white,p?"rgba(0, 122, 204, 0.1)":(0,d._j)(h.accentColor,.1),(0,d._j)(h.accentColor,.1));case"dashed":return(0,g.css)(W||(W=b()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),h.borderColor,p?"transparent":h.buttonBgColor,h.primaryFontColor,h.accentColor,h.accentColor);case"text":return(0,g.css)(c||(c=b()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),h.primaryFontColor);case"link":return(0,g.css)(F||(F=b()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),h.accentColor,(0,d._j)(h.accentColor,.1));default:return(0,g.css)(x||(x=b()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),h.borderColor,p?"transparent":h.buttonBgColor,h.primaryFontColor,h.accentColor,h.accentColor)}},B=function(a){var T=a.shape,y=a.size,p=a.theme,h=y||"medium",H=p[l[h].borderRadius];switch(T){case"rect":return(0,g.css)(o||(o=b()([`
        border-radius: none;
      `])));default:return(0,g.css)(m||(m=b()([`
        border-radius: `,`;
      `])),H)}},u=(0,g.default)(P.z).attrs(function(s){return r()(r()({},_),s)}).withConfig({shouldForwardProp:function(a){return!["btnType","size","shape","danger","ghost","block"].includes(a)}})(O||(O=b()([`
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
`])),function(s){var a=s.size||"medium";return s.theme[l[a].fontSize]},function(s){var a=s.size||"medium";return s.theme[l[a].paddingHorizontal]},function(s){var a=s.size||"medium";return s.theme[l[a].paddingHorizontal]},function(s){var a=s.size||"medium";return s.theme[l[a].paddingVertical]},function(s){var a=s.size||"medium";return s.theme[l[a].paddingVertical]},function(s){return s.block?"100%":"auto"},R,B,function(s){var a=s.btnType||"default";return(0,d._j)(a==="primary"?s.theme.accentColor:s.theme.buttonBgColor,.1)},function(s){var a=s.btnType||"default",T=s.danger||!1;return a==="primary"?"rgba(0, 122, 204, 0.2)":T?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});L.Z=u},80541:function(q,L,n){"use strict";n.d(L,{Z:function(){return U}});var N=n(97857),r=n.n(N),C=n(5574),b=n.n(C),g=n(13769),P=n.n(g),d=n(67294),K=n(90512),I=n(79749),W=n(79997),c=n(64247),F=n(26099),x=n(41090),o=n(56084),m=n(68400),O=n.n(m),l=n(54335),_,R,B,u,s,a,T,y,p=l.default.div.attrs(function(f){return r()({},f)})(_||(_=O()([`
  .mf-command-dialog__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .mf-command-dialog__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid `,`;
    padding: 0;
  }

  .mf-command-dialog__dismiss {
    display: flex;
    padding: 6px;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-style: none;
    background-color: transparent;
    font-size: 1rem;
    color: `,`;
    background-color: `,`;
    font-weight: 500;
    margin-right: 0.75rem;
    flex-shrink: 0;
    cursor: pointer;

    &:hover {
      background-color: `,`;
      color: `,`;
    }
  }

  .mf-command-dialog__list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0.5rem 0;
  }
`])),function(f){return f.theme.borderColor},function(f){return f.theme.secondaryFontColor},function(f){return f.theme.hoverColor},function(f){return f.theme.accentColor},function(f){return f.theme.white}),h=l.default.div(R||(R=O()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(f){return f.theme.dialogBackdropColor||"rgba(0, 0, 0, 0.8)"}),H=l.default.input(B||(B=O()([`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: `,`;
  font-size: 1rem;
  padding: 6px 12px;
  min-height: 40px;

  &::placeholder {
    color: `,`;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`])),function(f){return f.theme.primaryFontColor},function(f){return f.theme.secondaryFontColor}),J=l.default.div(u||(u=O()([`
  overflow-y: auto;
  overflow-x: hidden;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: `,`;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: `,`;
  }
`])),function(f){return f.theme.borderColor},function(f){return f.theme.secondaryFontColor}),e=l.default.div(s||(s=O()([`
  position: relative;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem;
  font-size: 0.875rem;
  outline: none;
  color: `,`;
  transition: all 0.15s ease;

  &:hover,
  &[aria-selected='true'],
  &[data-active-item] {
    background-color: `,`;
    color: `,`;
  }

  &.mf-command-dialog__item--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .mf-command-dialog__item-content {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
  }

  .mf-command-dialog__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    font-size: 1rem;
  }

  .mf-command-dialog__item-text {
    flex: 1;
    min-width: 0;
  }

  .mf-command-dialog__item-label {
    font-weight: 500;
    line-height: 1.25;
  }

  .mf-command-dialog__item-description {
    font-size: 0.75rem;
    opacity: 0.8;
    line-height: 1.25;
    margin-top: 0.125rem;
  }

  .mf-command-dialog__item-shortcut {
    font-size: 0.75rem;
    opacity: 0.8;
    background-color: `,`;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    border: 1px solid `,`;
    flex-shrink: 0;
  }

  &:hover .mf-command-dialog__item-shortcut,
  &[aria-selected='true'] .mf-command-dialog__item-shortcut,
  &[data-active-item] .mf-command-dialog__item-shortcut {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`])),function(f){return f.theme.primaryFontColor},function(f){return f.theme.accentColor},function(f){return f.theme.white},function(f){return f.theme.tipsBgColor||"rgba(255, 255, 255, 0.1)"},function(f){return f.theme.borderColor}),j=l.default.div(a||(a=O()([`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  font-size: 0.875rem;
  color: `,`;
  text-align: center;
`])),function(f){return f.theme.secondaryFontColor}),i=l.default.div(T||(T=O()([`
  padding: 0.5rem 1rem 0.25rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: `,`;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
`])),function(f){return f.theme.secondaryFontColor}),v=l.default.div(y||(y=O()([`
  height: 1px;
  background-color: `,`;
  margin: 0.5rem 0.75rem;
`])),function(f){return f.theme.borderColor}),D=n(22098),M=n(5258),t=n(85893),S=["actions","placeholder","emptyText","filter","onSelect","onClose","containerClass","width"],z=function(E,k){if(!k.trim())return E;var w=k.toLowerCase();return E.filter(function(rn){var Z,nn;return rn.label.toLowerCase().includes(w)||((Z=rn.description)===null||Z===void 0?void 0:Z.toLowerCase().includes(w))||((nn=rn.group)===null||nn===void 0?void 0:nn.toLowerCase().includes(w))})},X=function(E){var k=E.actions,w=k===void 0?[]:k,rn=E.placeholder,Z=rn===void 0?"Type a command or search...":rn,nn=E.emptyText,un=nn===void 0?"No results found.":nn,fn=E.filter,sn=fn===void 0?z:fn,an=E.onSelect,on=E.onClose,pn=E.containerClass,gn=E.width,cn=P()(E,S),hn=(0,d.useState)(""),mn=b()(hn,2),en=mn[0],vn=mn[1],xn=(0,I.Rj)(),Cn=sn(w,en),G={};Cn.forEach(function(ln){var Q=ln.group||"default";G[Q]||(G[Q]=[]),G[Q].push(ln)});var yn=function(Q){var tn;Q.disabled||((tn=Q.onSelect)===null||tn===void 0||tn.call(Q),an==null||an(Q),on==null||on())},bn=function(Q){var tn=Q.target.value;vn(tn),xn.setValue(tn)},En=function(Q){Q.key==="Escape"&&(on==null||on())};return(0,d.useEffect)(function(){cn.open&&(vn(""),xn.setValue(""))},[cn.open,xn]),(0,t.jsx)(D.Z,r()(r()({onClose:on,hideDismiss:!0,width:"70vw",style:{padding:"10px",top:"100px",transform:"translate(-50%, 0%)"}},cn),{},{children:(0,t.jsx)(p,{children:(0,t.jsx)(W.e,{store:xn,children:(0,t.jsxs)("div",{className:(0,K.Z)("mf-command-dialog__container",pn),children:[(0,t.jsxs)("div",{className:"mf-command-dialog__header",children:[(0,t.jsx)(H,{as:c.h,placeholder:Z,value:en,onChange:bn,onKeyDown:En,autoFocus:!0}),(0,t.jsx)(F.S,{className:"mf-command-dialog__dismiss",children:"esc"})]}),(0,t.jsx)(J,{as:x.G,alwaysVisible:!0,className:"mf-command-dialog__list",children:Cn.length===0?(0,t.jsx)(j,{children:un}):Object.entries(G).map(function(ln,Q){var tn=b()(ln,2),jn=tn[0],Tn=tn[1];return(0,t.jsxs)(d.Fragment,{children:[Q>0&&(0,t.jsx)(v,{}),jn!=="default"&&(0,t.jsx)(i,{children:jn}),Tn.map(function($){return(0,t.jsx)(e,{as:o.l,value:$.id,disabled:$.disabled,onClick:function(){return yn($)},className:(0,K.Z)("mf-command-dialog__item",$.disabled&&"mf-command-dialog__item--disabled"),children:(0,t.jsxs)("div",{className:"mf-command-dialog__item-content",children:[$.icon&&(0,t.jsx)("div",{className:"mf-command-dialog__item-icon",children:$.icon}),(0,t.jsxs)("div",{className:"mf-command-dialog__item-text",children:[(0,t.jsx)("div",{className:"mf-command-dialog__item-label",children:$.label}),$.description&&(0,t.jsx)("div",{className:"mf-command-dialog__item-description",children:$.description})]}),$.shortcut&&(0,t.jsx)(M.z,{dataSource:$.shortcut})]})},$.id)})]},jn)})})]})})})}))},U=X},22098:function(q,L,n){"use strict";n.d(L,{Z:function(){return B}});var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(67294),P=n(90512),d=n(79823),K=n(26099),I=n(68400),W=n.n(I),c=n(54335),F,x,o=c.default.div.attrs(function(u){return r()(r()({},u),{},{width:u.width||"420px",padding:u.padding||"12px"})})(F||(F=W()([`
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
`])),function(u){return u.width},function(u){return u.theme.smallBorderRadius},function(u){return u.theme.dialogBgColor},function(u){return u.theme.primaryFontColor},function(u){return u.padding},function(u){return u.theme.borderColor},function(u){return u.theme.primaryFontColor},function(u){return u.theme.accentColor},function(u){return u.theme.white}),m=c.default.div(x||(x=W()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(u){return u.theme.dialogBackdropColor}),O=n(53291),l=n(85893),_=["title","footer","containerClass","children","width","hideDismiss"],R=function(s){var a=s.title,T=s.footer,y=s.containerClass,p=s.children,h=s.width,H=s.hideDismiss,J=H===void 0?!1:H,e=b()(s,_);return(0,l.jsxs)(d.Vq,r()(r()({render:function(i){return(0,l.jsx)(m,{hidden:!e.open,children:(0,l.jsx)(o,r()(r()({},i),{},{width:h}))})}},e),{},{backdrop:!1,children:[a?(0,l.jsxs)("div",{className:"mf-dialog__heading",children:[(0,l.jsx)("div",{className:"mf-dialog__heading__title",children:a}),J?null:(0,l.jsx)(K.S,{className:"mf-dialog__dismiss"})]}):J?null:(0,l.jsx)(K.S,{className:"mf-dialog__dismiss"}),(0,l.jsx)("div",{className:(0,P.Z)("mf-dialog__main",y),children:p}),T?(0,l.jsx)(O.Z,{className:"mf-dialog__footer",children:T}):null]}))},B=R},20207:function(q,L,n){"use strict";n.d(L,{Z:function(){return j}});var N=n(97857),r=n.n(N),C=n(31081),b=n(68400),g=n.n(b),P=n(54335),d=n(85893),K,I=P.default.div(K||(K=g()([`
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
`])),function(i){return i.theme.errorTipColor}),W=function(v){var D=v.errortip,M=v.width,t=M===void 0?100:M,S=v.height,z=S===void 0?70:S;return(0,d.jsxs)(I,{style:{width:"".concat(t,"px"),height:"".concat(z,"px")},children:[(0,d.jsx)("div",{className:"zens-error-icon-box",children:(0,d.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,d.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,d.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,d.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,d.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,d.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,d.jsx)("span",{className:"zens-error-text",children:D})]})},c=W,F=n(13769),x=n.n(F),o=n(67294),m,O=function(v){return(0,d.jsx)(l,{children:v.emptyTip||"Empty source"})},l=P.default.div(m||(m=g()([`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: `,`;
  border: 1px solid `,`;
  font-size: 14px;
`])),function(i){return i.theme.errorTipColor},function(i){return i.theme.borderColor}),_=function(i){var v=i.decode,D=v===void 0?!0:v,M=i.crossOrigin,t=M===void 0?"":M;return function(S){return new Promise(function(z,X){var U=new Image;t&&(U.crossOrigin=t),U.onload=function(){D&&U.decode?U.decode().then(z).catch(X):z()},U.onerror=X,U.src=S})}},R=n(5574),B=n.n(R),u=function(v){return v.filter(function(D){return D})},s=function(v){return Array.isArray(v)?v:[v]},a={},T=function(v,D){var M=!1;return new Promise(function(t,S){var z=function(U){return D(U).then(function(f){M=!0,t(f||U)})};v.reduce(function(X,U){return X.catch(function(){if(!M)return z(U)})},z(v.shift())).catch(S)})};function y(i){var v=i.srcList,D=i.imgPromise,M=D===void 0?_({decode:!0}):D,t=i.useSuspense,S=t===void 0?!0:t,z=(0,o.useState)(!1),X=B()(z,2),U=X[1],f=u(s(v)),E=f.join("");if(a[E]||(a[E]={promise:T(f,M),cache:"pending",error:null}),a[E].cache==="resolved")return{src:a[E].src,isLoading:!1,error:null};if(a[E].cache==="rejected"){if(S)throw a[E].error;return{isLoading:!1,error:a[E].error,src:void 0}}if(a[E].promise.then(function(k){a[E]=r()(r()({},a[E]),{},{cache:"resolved",src:k}),S||U(E)}).catch(function(k){a[E]=r()(r()({},a[E]),{},{cache:"rejected",error:k}),S||U(E)}),S)throw a[E].promise;return{isLoading:!0,src:void 0,error:null}}var p=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense","emptyImage","emptyTip"],h=function(v){return v};function H(i,v){var D=i.decode,M=D===void 0?!0:D,t=i.src,S=t===void 0?[]:t,z=i.loader,X=z===void 0?null:z,U=i.unloader,f=U===void 0?null:U,E=i.container,k=E===void 0?h:E,w=i.loaderContainer,rn=w===void 0?h:w,Z=i.unloaderContainer,nn=Z===void 0?h:Z,un=i.imgPromise,fn=i.crossorigin,sn=i.useSuspense,an=sn===void 0?!1:sn,on=i.emptyImage,pn=on===void 0?null:on,gn=i.emptyTip,cn=x()(i,p);un=un||_({decode:M,crossOrigin:fn});var hn=y({srcList:S,imgPromise:un,useSuspense:an}),mn=hn.src,en=hn.isLoading,vn=hn.error;return(!S||(S==null?void 0:S.length)===0)&&!en?pn||(0,d.jsx)(O,{emptyTip:gn}):mn?k((0,d.jsx)("img",r()(r()({src:mn},cn),{},{ref:v}))):!an&&en?rn(X):!an&&f?nn(f):null}var J=(0,o.forwardRef)(H),e=function(v){var D=v.errorTip,M=D===void 0?"load error":D;return(0,d.jsx)(J,r()({loader:(0,d.jsx)(C.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,d.jsx)(c,{errortip:M})},v))},j=e},73746:function(q,L,n){"use strict";var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(68400),P=n.n(g),d=n(54335),K=n(85893),I=["inputRef","onPressEnter","size"],W,c={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},F=d.default.input(W||(W=P()([`
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
`])),function(o){return o.theme.primaryFontColor},function(o){return o.theme.borderColor},function(o){return o.theme.bgColor},function(o){var m=o.$size||"medium";return c[m].height},function(o){var m=o.$size||"medium";return c[m].paddingHorizontal},function(o){var m=o.$size||"medium";return c[m].paddingHorizontal},function(o){var m=o.$size||"medium";return c[m].paddingVertical},function(o){var m=o.$size||"medium";return c[m].paddingVertical},function(o){var m=o.$size||"medium";return c[m].fontSize},function(o){var m=o.$size||"medium";return c[m].borderRadius},function(o){return o.theme.gray},function(o){return o.theme.accentColor},function(o){return o.theme.accentColor},function(o){return"".concat(o.theme.accentColor,"20")},function(o){return o.theme.tipsBgColor},function(o){return o.theme.gray},function(o){return o.theme.dangerColor},function(o){return"".concat(o.theme.dangerColor,"20")},function(o){return o.theme.tipsBgColor}),x=function(m){var O=m.inputRef,l=m.onPressEnter,_=m.size,R=_===void 0?"medium":_,B=b()(m,I),u=function(a){var T;a.key==="Enter"&&(l==null||l(a.nativeEvent)),(T=B.onKeyDown)===null||T===void 0||T.call(B,a)};return(0,K.jsx)(F,r()(r()({$size:R},B),{},{ref:O,onKeyDown:u}))};L.Z=x},36348:function(q,L,n){"use strict";n.d(L,{g:function(){return d}});var N=n(97857),r=n.n(N),C=n(67294),b=n(78798),g=n(58106),P=n(85893),d=function(I){var W=(0,C.useContext)(g.Ni);return(0,P.jsx)(b.Z,r()({color:W.accentColor},I))}},88853:function(q,L,n){"use strict";n.d(L,{sN:function(){return B},K4:function(){return u},Kb:function(){return g.K},Cl:function(){return a},XG:function(){return s},ZP:function(){return J},s3:function(){return h},Ls:function(){return K.L}});var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(93702),P=n(64106),d=n(66227),K=n(79920),I=n(68400),W=n.n(I),c=n(54335),F=n(68258),x=n(76633),o=n(26484),m=n(58106),O,l,_,R,B=(0,c.default)(F.s)(O||(O=W()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,m._j)(e.theme.contextMenuBgColorHover,.2)}),u=c.default.div(l||(l=W()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),s=(0,c.default)(x.v)(_||(_=W()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),a=(0,c.default)(o.C)(R||(R=W()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),T=n(2057),y=n(85893),p=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],h=function(j){return(j==null?void 0:j.type)==="divider"},H=function(j){var i=j.open,v=j.items,D=j.triggerBtnClass,M=j.store,t=j.style,S=j.children,z=j.menuButtonProps,X=z===void 0?{}:z,U=b()(j,p),f=function E(k){return k.map(function(w,rn){var Z;if(h(w))return(0,y.jsx)(a,{},rn);var nn=w.value;return w.children&&((Z=w.children)===null||Z===void 0?void 0:Z.length)>0?(0,y.jsxs)(g.K,{children:[(0,y.jsxs)(B,{render:(0,y.jsx)(P.j,{}),children:[(0,y.jsx)(u,{}),(0,y.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,y.jsx)("span",{className:"menu-shortcut",children:w.shortcut}),(0,y.jsx)(d.C,{})]}),(0,y.jsx)(s,{children:E(w.children)})]},nn):(0,y.jsxs)(B,{onClick:function(){w.handler&&w.handler()},children:[(0,y.jsx)(u,{children:w.checked?(0,y.jsx)("i",{className:"ri-check-line"}):null}),(0,y.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,y.jsx)("span",{className:"menu-shortcut",children:w.shortcut})]},nn)})};return M?(0,y.jsx)(s,r()(r()({style:t,store:M},U),{},{children:f(v)})):(0,y.jsxs)(g.K,{children:[S?(0,y.jsx)(P.j,{render:function(k){return(0,y.jsx)(T.Z,r()(r()({},k),X))},className:D,children:S}):null,(0,y.jsx)(s,r()(r()({style:t,open:i},U),{},{children:f(v)}))]})},J=H},85682:function(q,L,n){"use strict";n.d(L,{Z:function(){return y},p:function(){return g.p}});var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(51712),P=n(55683),d=n(23851),K=n(67294),I=n(68135),W=n(68400),c=n.n(W),F=n(22786),x=n(43525),o=n(17355),m=n(54335),O,l,_,R=(0,m.default)(F.J)(O||(O=c()([`
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
`])),function(p){return p.theme.smallBorderRadius},function(p){return p.theme.borderColor},function(p){return p.theme.bgColor},function(p){return p.theme.spaceXs},function(p){return p.theme.primaryFontColor}),B=(0,m.default)(x.Q)(l||(l=c()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(p){return p.theme.borderColor},function(p){return p.theme.bgColor}),u=(0,m.default)(o.b)(_||(_=c()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(p){return p.theme.fontBase},function(p){return p.theme.spaceXs}),s=n(85893),a=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],T=function(h){var H=h.arrow,J=H===void 0?!0:H,e=h.title,j=h.toggleOnClick,i=j===void 0?!0:j,v=h.children,D=h.customContent,M=h.placement,t=h.onStoreChange,S=h.boxProps,z=S===void 0?{}:S,X=b()(h,a),U=(0,g.p)();return(0,K.useEffect)(function(){t&&t(U)},[U,t]),(0,s.jsxs)(P.H,{store:U,placement:M,children:[(0,s.jsx)(d.x,{toggleOnClick:i,render:function(E){return(0,s.jsx)(I.x,r()(r()({style:{display:"inline-block"}},E),z))},children:v}),!D&&!e?null:(0,s.jsxs)(R,r()(r()({render:function(E){return(0,s.jsx)(I.x,r()({},E))}},X),{},{children:[J?(0,s.jsx)(B,{}):null,e?(0,s.jsx)(u,{children:e}):null,D]}))]})},y=T},5258:function(q,L,n){"use strict";n.d(L,{z:function(){return F}});var N=n(67294),r=n(68400),C=n.n(r),b=n(54335),g,P,d,K=b.default.div(g||(g=C()([`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  align-items: center;
`]))),I=b.default.div(P||(P=C()([`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 12px;
`]))),W=b.default.kbd(d||(d=C()([`
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: `,`;
  border: 1px solid `,`;
  border-radius: 4px;
  min-width: 24px;
  height: 24px;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    background-color: `,`;
  }

  .shortcut-icon {
    margin-right: 2px;
    font-size: 10px;
  }

  .shortcut-label {
    font-weight: 500;
  }
`])),function(x){var o=x.theme;return o.bgColor},function(x){var o=x.theme;return o.borderColor},function(x){var o=x.theme;return o.hoverColor}),c=n(85893),F=function(o){var m=o.dataSource,O=m===void 0?[]:m;return(0,c.jsx)(K,{children:O.map(function(l,_){return(0,c.jsxs)(I,{children:[l.icon&&(0,c.jsx)("span",{className:"shortcut-icon",children:l.icon}),(0,c.jsx)(W,{children:l.keybindings.map(function(R,B){return(0,c.jsxs)(c.Fragment,{children:[R.key,B<l.keybindings.length-1&&(0,c.jsx)("span",{className:"shortcut-separator",children:"+"})]})})}),l.desc&&(0,c.jsx)("span",{className:"shortcut-desc",children:l.desc})]},_)})})}},53291:function(q,L,n){"use strict";var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(67294),P=n(85893),d=["children","size","direction","align","split","wrap","style"],K=function(c){if(typeof c=="number")return c;switch(c){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},I=function(c){var F,x=c.children,o=c.size,m=o===void 0?"small":o,O=c.direction,l=O===void 0?"horizontal":O,_=c.align,R=c.split,B=c.wrap,u=B===void 0?!1:B,s=c.style,a=b()(c,d),T=g.Children.toArray(x).filter(function(j){return j!=null});if(T.length===0)return null;if(T.length===1&&!R)return(0,P.jsx)(P.Fragment,{children:T[0]});var y=_||(l==="horizontal"?"center":void 0),p=Array.isArray(m)?m:[m,m],h=K(p[0]),H=K((F=p[1])!==null&&F!==void 0?F:p[0]),J=r()({display:"flex",flexDirection:l==="vertical"?"column":"row",flexWrap:u&&l==="horizontal"?"wrap":"nowrap",alignItems:y},s),e=function(i){var v={};return l==="vertical"?i<T.length-1&&(v.marginBottom="".concat(H,"px")):(i<T.length-1&&(v.marginRight="".concat(h,"px")),u&&(v.marginBottom="".concat(H,"px"))),v};return(0,P.jsx)("div",r()(r()({style:J},a),{},{children:T.map(function(j,i){var v=j.key||"space-item-".concat(i),D=[];return i>0&&R&&D.push((0,P.jsx)("span",{style:l==="vertical"?{marginBottom:"".concat(H,"px")}:{marginRight:"".concat(h,"px")},children:R},"split-".concat(i))),D.push((0,P.jsx)("div",{style:e(i),children:j},v)),D})}))};L.Z=I},33867:function(q,L,n){"use strict";n.d(L,{o:function(){return J}});var N=n(5574),r=n.n(N),C=n(67294),b=n(64599),g=n.n(b),P=n(19632),d=n.n(P),K=n(12444),I=n.n(K),W=n(72004),c=n.n(W),F=n(9783),x=n.n(F),o=function(){function e(j){I()(this,e),x()(this,"title",void 0),x()(this,"children",void 0),x()(this,"parent",void 0),x()(this,"offsetCacheVersion",void 0),x()(this,"cachedOffsetTop",void 0),x()(this,"htmlNode",void 0),x()(this,"depth",void 0),x()(this,"id",void 0),x()(this,"key",void 0),x()(this,"chapter",void 0),x()(this,"h",void 0),x()(this,"onClick",void 0);var i=j.depth,v=j.key,D=j.offsetCacheVersion,M=j.chapter,t=j.h,S=t.htmlNode,z=t.value,X=t.id,U=t.onClick;this.htmlNode=S,this.title=z,this.parent=null,this.children=[],this.depth=i,this.id=X,this.key=v,this.cachedOffsetTop=null,this.offsetCacheVersion=D-1,this.chapter=M,this.h=t,this.onClick=U}return c()(e,[{key:"lazyLoad",value:function(i){i!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=i))}}]),e}(),m=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),O=function(){function e(j){I()(this,e),x()(this,"root",void 0),x()(this,"offsetCacheVersion",void 0);var i=Math.min.apply(Math,d()(j.map(function(t){return t.depth}))),v=0,D=j.map(function(t,S){return new o({h:t,depth:t.depth-i,key:S,offsetCacheVersion:v,chapter:"0"})}),M=[new o({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:v,chapter:"0"})];D.forEach(function(t){for(;M.length&&M[M.length-1].depth>=t.depth;)M.pop();M[M.length-1].children.push(t),t.parent=M[M.length-1];var S=t.parent.children.filter(function(X){return X.depth===t.depth}),z=t.depth-Math.max(t.parent.depth,0);if(z===0)t.chapter=String(S.length);else if(z===1)t.chapter="".concat(t.parent.chapter,".").concat(S.length);else for(t.chapter=t.parent.chapter;z>=1;)t.chapter+=".",z===1?t.chapter+=S.length:t.chapter+=0,z--;M.push(t)}),this.root=M[0],this.offsetCacheVersion=v}return c()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(i){var v=this,D=function(S){var z=g()(S.children),X;try{for(z.s();!(X=z.n()).done;){var U=X.value;if(M(U)===m.Stop)return m.Stop}}catch(f){z.e(f)}finally{z.f()}return m.Continue},M=function(S){S.lazyLoad(v.offsetCacheVersion);var z=i(S);return z!==m.Continue?z:D(S)};D(this.root)}}]),e}(),l=n(68400),_=n.n(l),R=n(54335),B=n(58106),u,s,a,T=R.default.div(u||(u=_()([`
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
`]))),y=R.default.a(s||(s=_()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,B._j)(e.theme.accentColor,.4)}),p=1,h=R.default.li(a||(a=_()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*p,"em")}),H=n(85893),J=(0,C.forwardRef)(function(e,j){var i,v=e.headingsData,D=e.containerEl,M=e.scrollEl,t=e.autoExpand,S=t===void 0?!1:t,z=e.Empty,X=z===void 0?null:z,U=(0,C.useState)(v),f=r()(U,2),E=f[0],k=f[1],w=(0,C.useState)(),rn=r()(w,2),Z=rn[0],nn=rn[1],un=(0,C.useState)(),fn=r()(un,2),sn=fn[0],an=fn[1],on=(0,C.useState)(),pn=r()(on,2),gn=pn[0],cn=pn[1],hn=(0,C.useState)(),mn=r()(hn,2),en=mn[0],vn=mn[1],xn=(0,C.useState)(M),Cn=r()(xn,2),G=Cn[0],yn=Cn[1],bn=(0,C.useCallback)(function($){if($){var V=$.querySelectorAll("h1, h2, h3, h4, h5, h6"),A=[];V.forEach(function(dn,Pn){var On={depth:parseInt(dn.tagName[1],10),value:dn.innerText,htmlNode:dn,id:dn.id||"heading-".concat(Pn)};A.push(On)}),k(A);var Y=new O(A);return nn(Y),Y}},[]),En=(0,C.useCallback)(function($){var V=$||D;if(!(!V&&!E)){if(E){var A=new O(E);nn(A)}else if(V)bn(V);else throw new Error("No headings and containerEl found");return vn(V),V}},[D,E,bn]),ln=(0,C.useCallback)(function(){if(!Z||!G)return null;var $=10,V=G.scrollTop+$,A=null,Y=null;return Z.traverseInPreorder(function(dn){var Pn=Math.max((dn.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0),0);return V>Pn?(Y=dn,m.Continue):(A=Y,m.Stop)}),A===null&&Y!==null&&en?Y:A},[Z,en,G]),Q=(0,C.useCallback)(function($){if(Z){var V=$,A={},Y=Z.getRoot();if(Y){for(A[Y.key]=!0;V!==null;)A[V.key]=!0,V=V.parent;return A}}},[Z]),tn=(0,C.useCallback)(function(){var $=ln();if($&&$!==sn){var V=Q($);an($),cn(V)}},[sn,Q,ln]),jn=function(V,A){V.preventDefault();var Y=(A.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0);G==null||G.scrollTo(0,Y),an(A),cn(Q(A))};(0,C.useEffect)(function(){return Z?tn():En(),G==null||G.addEventListener("scroll",tn),function(){G==null||G.removeEventListener("scroll",tn)}},[Z,G,En,tn]),(0,C.useImperativeHandle)(j,function(){return{refresh:function(V){var A=V.newContainer,Y=V.newScroll;bn(A||en),vn(A),yn(Y)},refreshByHeadings:function(V){var A=V.newHeadings;k(A),nn(new O(A)),yn(void 0),vn(void 0)}}});var Tn=function(){if(Z){var V=[];return Z.traverseInPreorder(function(A){var Y,dn=G?!!(sn&&sn.key===A.key):!0;return V.push((0,H.jsx)(h,{depth:A.depth,active:dn,children:(0,H.jsxs)(y,{href:"#".concat(A.id),active:dn,depth:A.depth,onClick:function(On){On.preventDefault(),A.onClick?A.onClick(A.h):jn(On,A)},children:[(0,H.jsx)("span",{className:"toc-link__chapter",children:A.chapter}),A.title]})},A.key)),!S||gn!=null&&gn[A.key]||((Y=A.parent)===null||Y===void 0?void 0:Y.key)===-1?m.Continue:m.NoChildren}),V}};return(0,H.jsx)(T,{children:(0,H.jsx)("div",{className:"toc-list",children:(Z==null||(i=Z.getRoot())===null||i===void 0||(i=i.children)===null||i===void 0?void 0:i.length)===0?X:(0,H.jsx)("nav",{children:(0,H.jsx)("ul",{children:Tn()})})})})})},23961:function(q,L,n){"use strict";n.r(L),n.d(L,{Toc:function(){return N.o}});var N=n(33867),r=n(12626),C=n.n(r),b={};for(var g in r)["default","Toc"].indexOf(g)<0&&(b[g]=function(P){return r[P]}.bind(0,g));n.d(L,b)},12626:function(){},58106:function(q,L,n){"use strict";n.d(L,{Ni:function(){return x},f6:function(){return o},y0:function(){return O},$_:function(){return l},_j:function(){return K},Wb:function(){return _},$n:function(){return d}});var N=n(97857),r=n.n(N),C={primaryFontColor:"#c8d1d9",secondaryFontColor:"#999999",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},b={primaryFontColor:"#000000",secondaryFontColor:"#5f5f5f",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},g=n(6767),P=n.n(g),d=function(B,u){return P()(B).lighten(u).string()},K=function(B,u){return P()(B).darken(u).string()},I=n(21539),W=n(67294),c=n(54335),F=n(85893),x=(0,W.createContext)({}),o=function(B){var u=B.theme,s=B.children,a=(u==null?void 0:u.mode)||"light",T=a==="dark"?l.styledConstants:_.styledConstants,y=u!=null&&u.token?r()(r()({},T),u.token):T;return(0,F.jsx)(c.StyleSheetManager,{shouldForwardProp:m,children:(0,F.jsx)(c.ThemeProvider,{theme:y,children:(0,F.jsx)(x.Provider,{value:y,children:s})})})};function m(R,B){return typeof B=="string"?(0,I.Z)(R):!0}var O={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},l={styledConstants:r()(r()({},O),C)},_={styledConstants:r()(r()({},O),b)}},24909:function(q,L,n){"use strict";n.d(L,{A:function(){return r.Am},T:function(){return g}});var N=n(67294),r=n(64712),C=n(54335),b=n(85893),g=function(){var d=(0,N.useContext)(C.ThemeContext);return(0,b.jsx)(r.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:d==null?void 0:d.borderColor,borderRadius:d==null?void 0:d.smallBorderRadius,color:d==null?void 0:d.primaryFontColor,background:d==null?void 0:d.bgColor},duration:5e3}})}},35307:function(q,L,n){"use strict";n.d(L,{Z:function(){return s}});var N=n(97857),r=n.n(N),C=n(13769),b=n.n(C),g=n(68400),P=n.n(g),d=n(67294),K=n(54335),I=n(56450),W=n(96518),c=n(96802),F,x,o=K.default.div.attrs(function(a){return a})(F||(F=P()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),m=K.default.div(x||(x=P()([`
  display: inline-block;
`]))),O=n(68135),l=n(85893),_=["children","title","fixed","placement","open"],R,B=K.default.div(R||(R=P()([`
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
`])),function(a){return a.theme.borderColor},function(a){return a.theme.tooltipBgColor},function(a){return a.theme.fontXs},function(a){return a.theme.primaryFontColor}),u=function(T){var y,p=T.children,h=T.title,H=T.fixed,J=H===void 0?!1:H,e=T.placement,j=e===void 0?J?"top":"bottom":e,i=T.open,v=b()(T,_),D=p!=null&&(y=p.props)!==null&&y!==void 0&&y.disabled?d.Children.only((0,l.jsx)(m,{children:p})):p;return h?(0,l.jsxs)(I.p,{placement:j,open:i,children:[(0,l.jsx)(W.e,{render:D}),(0,l.jsx)(c.u,{render:function(t){return(0,l.jsx)(O.x,r()(r()({style:{zIndex:99}},t),v))},children:(0,l.jsx)(B,{children:h})})]}):p},s=u},31081:function(q,L,n){"use strict";n.r(L),n.d(L,{Ariakit:function(){return C},Button:function(){return b.Z},CommandDialog:function(){return g.Z},Dialog:function(){return P.Z},Icon:function(){return r},Image:function(){return d.Z},Input:function(){return K.Z},Loading:function(){return x.g},Menu:function(){return I.ZP},MenuItem:function(){return I.sN},MenuItemCheckIcon:function(){return I.K4},MenuProvider:function(){return I.Kb},MenuSeparator:function(){return I.Cl},MenuWrapper:function(){return I.XG},Notifications:function(){return R.T},Popover:function(){return W.Z},Shortcut:function(){return o.z},Space:function(){return c.Z},Spinners:function(){return N},ThemeContext:function(){return _.Ni},ThemeProvider:function(){return _.f6},Tooltip:function(){return F.Z},common:function(){return _.y0},darkTheme:function(){return _.$_},darken:function(){return _._j},isDivider:function(){return I.s3},lightTheme:function(){return _.Wb},lighten:function(){return _.$n},toast:function(){return R.A},useMenuStore:function(){return I.Ls},usePopoverStore:function(){return W.p}});var N=n(48098),r=n(10973),C=n(68314),b=n(2057),g=n(80541),P=n(22098),d=n(20207),K=n(73746),I=n(88853),W=n(85682),c=n(53291),F=n(35307),x=n(36348),o=n(5258),m=n(23961),O={};for(var l in m)["default","Button","CommandDialog","Dialog","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore","Shortcut"].indexOf(l)<0&&(O[l]=function(B){return m[B]}.bind(0,l));n.d(L,O);var _=n(58106),R=n(24909)}}]);
