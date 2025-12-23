(self.webpackChunkzens=self.webpackChunkzens||[]).push([[4829],{68135:function(q,z,n){"use strict";n.d(z,{x:function(){return p}});var K=n(97857),a=n.n(K),x=n(67294),b=n(85893),p=function(s){return(0,b.jsx)("div",a()({},s))}},2057:function(q,z,n){"use strict";var K=n(97857),a=n.n(K),x=n(68400),b=n.n(x),p=n(54335),P=n(35289),s=n(58106),W,L,A,c,U,C,r,u,D,d={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceSm",fontSize:"fontXs",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceBase",fontSize:"fontBase",borderRadius:"smallBorderRadius"}},T={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},R=function(t){var S=t.btnType,y=t.danger,v=t.ghost,m=t.theme,H=S||"default",G=y||!1,e=v||!1;if(G)return(0,p.css)(W||(W=b()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),m.dangerColor,e?"transparent":m.dangerColor,e?m.dangerColor:m.white,e?"rgba(220, 38, 38, 0.1)":(0,s._j)(m.dangerColor,.1),(0,s._j)(m.dangerColor,.1));switch(S){case"primary":return(0,p.css)(L||(L=b()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),m.accentColor,v?"transparent":m.accentColor,v?m.accentColor:m.white,v?"rgba(0, 122, 204, 0.1)":(0,s._j)(m.accentColor,.1),(0,s._j)(m.accentColor,.1));case"dashed":return(0,p.css)(A||(A=b()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),m.borderColor,v?"transparent":m.buttonBgColor,m.primaryFontColor,m.accentColor,m.accentColor);case"text":return(0,p.css)(c||(c=b()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),m.primaryFontColor);case"link":return(0,p.css)(U||(U=b()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),m.accentColor,(0,s._j)(m.accentColor,.1));default:return(0,p.css)(C||(C=b()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),m.borderColor,v?"transparent":m.buttonBgColor,m.primaryFontColor,m.accentColor,m.accentColor)}},N=function(t){var S=t.shape,y=t.size,v=t.theme,m=y||"medium",H=v[d[m].borderRadius];switch(S){case"rect":return(0,p.css)(r||(r=b()([`
        border-radius: none;
      `])));default:return(0,p.css)(u||(u=b()([`
        border-radius: `,`;
      `])),H)}},h=(0,p.default)(P.z).attrs(function(i){return a()(a()({},T),i)}).withConfig({shouldForwardProp:function(t){return!["btnType","size","shape","danger","ghost","block"].includes(t)}})(D||(D=b()([`
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
`])),function(i){var t=i.size||"medium";return i.theme[d[t].fontSize]},function(i){var t=i.size||"medium";return i.theme[d[t].paddingHorizontal]},function(i){var t=i.size||"medium";return i.theme[d[t].paddingHorizontal]},function(i){var t=i.size||"medium";return i.theme[d[t].paddingVertical]},function(i){var t=i.size||"medium";return i.theme[d[t].paddingVertical]},function(i){return i.block?"100%":"auto"},R,N,function(i){var t=i.btnType||"default";return(0,s._j)(t==="primary"?i.theme.accentColor:i.theme.buttonBgColor,.1)},function(i){var t=i.btnType||"default",S=i.danger||!1;return t==="primary"?"rgba(0, 122, 204, 0.2)":S?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});z.Z=h},80541:function(q,z,n){"use strict";n.d(z,{Z:function(){return F}});var K=n(97857),a=n.n(K),x=n(5574),b=n.n(x),p=n(13769),P=n.n(p),s=n(67294),W=n(90512),L=n(79749),A=n(79997),c=n(64247),U=n(26099),C=n(41090),r=n(56084),u=n(68400),D=n.n(u),d=n(54335),T,R,N,h,i,t,S,y,v=d.default.div.attrs(function(f){return a()({},f)})(T||(T=D()([`
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
`])),function(f){return f.theme.borderColor},function(f){return f.theme.secondaryFontColor},function(f){return f.theme.hoverColor},function(f){return f.theme.accentColor},function(f){return f.theme.white}),m=d.default.div(R||(R=D()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(f){return f.theme.dialogBackdropColor||"rgba(0, 0, 0, 0.8)"}),H=d.default.input(N||(N=D()([`
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
`])),function(f){return f.theme.primaryFontColor},function(f){return f.theme.secondaryFontColor}),G=d.default.div(h||(h=D()([`
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
`])),function(f){return f.theme.borderColor},function(f){return f.theme.secondaryFontColor}),e=d.default.div(i||(i=D()([`
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
`])),function(f){return f.theme.primaryFontColor},function(f){return f.theme.accentColor},function(f){return f.theme.white},function(f){return f.theme.tipsBgColor||"rgba(255, 255, 255, 0.1)"},function(f){return f.theme.borderColor}),j=d.default.div(t||(t=D()([`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  font-size: 0.875rem;
  color: `,`;
  text-align: center;
`])),function(f){return f.theme.secondaryFontColor}),l=d.default.div(S||(S=D()([`
  padding: 0.5rem 1rem 0.25rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: `,`;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
`])),function(f){return f.theme.secondaryFontColor}),g=d.default.div(y||(y=D()([`
  height: 1px;
  background-color: `,`;
  margin: 0.5rem 0.75rem;
`])),function(f){return f.theme.borderColor}),M=n(22098),_=n(5258),o=n(85893),O=["actions","placeholder","emptyText","filter","onSelect","onClose","containerClass","width"],B=function(E,J){if(!J.trim())return E;var w=J.toLowerCase();return E.filter(function(rn){var Z,nn;return rn.label.toLowerCase().includes(w)||((Z=rn.description)===null||Z===void 0?void 0:Z.toLowerCase().includes(w))||((nn=rn.group)===null||nn===void 0?void 0:nn.toLowerCase().includes(w))})},X=function(E){var J=E.actions,w=J===void 0?[]:J,rn=E.placeholder,Z=rn===void 0?"Type a command or search...":rn,nn=E.emptyText,un=nn===void 0?"No results found.":nn,fn=E.filter,sn=fn===void 0?B:fn,an=E.onSelect,on=E.onClose,gn=E.containerClass,pn=E.width,cn=P()(E,O),hn=(0,s.useState)(""),mn=b()(hn,2),en=mn[0],vn=mn[1],xn=(0,L.Rj)(),Cn=sn(w,en),k={};Cn.forEach(function(ln){var Q=ln.group||"default";k[Q]||(k[Q]=[]),k[Q].push(ln)});var yn=function(Q){var tn;Q.disabled||((tn=Q.onSelect)===null||tn===void 0||tn.call(Q),an==null||an(Q),on==null||on())},bn=function(Q){var tn=Q.target.value;vn(tn),xn.setValue(tn)},En=function(Q){Q.key==="Escape"&&(on==null||on())};return(0,s.useEffect)(function(){cn.open&&(vn(""),xn.setValue(""))},[cn.open,xn]),(0,o.jsx)(M.Z,a()(a()({onClose:on,hideDismiss:!0,width:"70vw",style:{padding:"10px",top:"100px",transform:"translate(-50%, 0%)"}},cn),{},{children:(0,o.jsx)(v,{children:(0,o.jsx)(A.e,{store:xn,children:(0,o.jsxs)("div",{className:(0,W.Z)("mf-command-dialog__container",gn),children:[(0,o.jsxs)("div",{className:"mf-command-dialog__header",children:[(0,o.jsx)(H,{as:c.h,placeholder:Z,value:en,onChange:bn,onKeyDown:En,autoFocus:!0}),(0,o.jsx)(U.S,{className:"mf-command-dialog__dismiss",children:"esc"})]}),(0,o.jsx)(G,{as:C.G,alwaysVisible:!0,className:"mf-command-dialog__list",children:Cn.length===0?(0,o.jsx)(j,{children:un}):Object.entries(k).map(function(ln,Q){var tn=b()(ln,2),jn=tn[0],Tn=tn[1];return(0,o.jsxs)(s.Fragment,{children:[Q>0&&(0,o.jsx)(g,{}),jn!=="default"&&(0,o.jsx)(l,{children:jn}),Tn.map(function($){return(0,o.jsx)(e,{as:r.l,value:$.id,disabled:$.disabled,onClick:function(){return yn($)},className:(0,W.Z)("mf-command-dialog__item",$.disabled&&"mf-command-dialog__item--disabled"),children:(0,o.jsxs)("div",{className:"mf-command-dialog__item-content",children:[$.icon&&(0,o.jsx)("div",{className:"mf-command-dialog__item-icon",children:$.icon}),(0,o.jsxs)("div",{className:"mf-command-dialog__item-text",children:[(0,o.jsx)("div",{className:"mf-command-dialog__item-label",children:$.label}),$.description&&(0,o.jsx)("div",{className:"mf-command-dialog__item-description",children:$.description})]}),$.shortcut&&(0,o.jsx)(_.z,{dataSource:$.shortcut})]})},$.id)})]},jn)})})]})})})}))},F=X},22098:function(q,z,n){"use strict";n.d(z,{Z:function(){return N}});var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(67294),P=n(90512),s=n(79823),W=n(26099),L=n(68400),A=n.n(L),c=n(54335),U,C,r=c.default.div.attrs(function(h){return a()(a()({},h),{},{width:h.width||"420px",padding:h.padding||"12px"})})(U||(U=A()([`
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
`])),function(h){return h.width},function(h){return h.theme.smallBorderRadius},function(h){return h.theme.dialogBgColor},function(h){return h.theme.primaryFontColor},function(h){return h.padding},function(h){return h.theme.borderColor},function(h){return h.theme.primaryFontColor},function(h){return h.theme.accentColor},function(h){return h.theme.white}),u=c.default.div(C||(C=A()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(h){return h.theme.dialogBackdropColor}),D=n(53291),d=n(85893),T=["title","footer","containerClass","children","width","hideDismiss"],R=function(i){var t=i.title,S=i.footer,y=i.containerClass,v=i.children,m=i.width,H=i.hideDismiss,G=H===void 0?!1:H,e=b()(i,T);return(0,d.jsxs)(s.Vq,a()(a()({render:function(l){return(0,d.jsx)(u,{hidden:!e.open,children:(0,d.jsx)(r,a()(a()({},l),{},{width:m}))})}},e),{},{backdrop:!1,children:[t?(0,d.jsxs)("div",{className:"mf-dialog__heading",children:[(0,d.jsx)("div",{className:"mf-dialog__heading__title",children:t}),G?null:(0,d.jsx)(W.S,{className:"mf-dialog__dismiss"})]}):G?null:(0,d.jsx)(W.S,{className:"mf-dialog__dismiss"}),(0,d.jsx)("div",{className:(0,P.Z)("mf-dialog__main",y),children:v}),S?(0,d.jsx)(D.Z,{className:"mf-dialog__footer",children:S}):null]}))},N=R},20207:function(q,z,n){"use strict";n.d(z,{Z:function(){return j}});var K=n(97857),a=n.n(K),x=n(31081),b=n(68400),p=n.n(b),P=n(54335),s=n(85893),W,L=P.default.div(W||(W=p()([`
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
`])),function(l){return l.theme.errorTipColor}),A=function(g){var M=g.errortip,_=g.width,o=_===void 0?100:_,O=g.height,B=O===void 0?70:O;return(0,s.jsxs)(L,{style:{width:"".concat(o,"px"),height:"".concat(B,"px")},children:[(0,s.jsx)("div",{className:"zens-error-icon-box",children:(0,s.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,s.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,s.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,s.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,s.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,s.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,s.jsx)("span",{className:"zens-error-text",children:M})]})},c=A,U=n(13769),C=n.n(U),r=n(67294),u,D=function(g){return(0,s.jsx)(d,{children:g.emptyTip||"Empty source"})},d=P.default.div(u||(u=p()([`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: `,`;
  border: 1px solid `,`;
  font-size: 14px;
`])),function(l){return l.theme.errorTipColor},function(l){return l.theme.borderColor}),T=function(l){var g=l.decode,M=g===void 0?!0:g,_=l.crossOrigin,o=_===void 0?"":_;return function(O){return new Promise(function(B,X){var F=new Image;o&&(F.crossOrigin=o),F.onload=function(){M&&F.decode?F.decode().then(B).catch(X):B()},F.onerror=X,F.src=O})}},R=n(5574),N=n.n(R),h=function(g){return g.filter(function(M){return M})},i=function(g){return Array.isArray(g)?g:[g]},t={},S=function(g,M){var _=!1;return new Promise(function(o,O){var B=function(F){return M(F).then(function(f){_=!0,o(f||F)})};g.reduce(function(X,F){return X.catch(function(){if(!_)return B(F)})},B(g.shift())).catch(O)})};function y(l){var g=l.srcList,M=l.imgPromise,_=M===void 0?T({decode:!0}):M,o=l.useSuspense,O=o===void 0?!0:o,B=(0,r.useState)(!1),X=N()(B,2),F=X[1],f=h(i(g)),E=f.join("");if(t[E]||(t[E]={promise:S(f,_),cache:"pending",error:null}),t[E].cache==="resolved")return{src:t[E].src,isLoading:!1,error:null};if(t[E].cache==="rejected"){if(O)throw t[E].error;return{isLoading:!1,error:t[E].error,src:void 0}}if(t[E].promise.then(function(J){t[E]=a()(a()({},t[E]),{},{cache:"resolved",src:J}),O||F(E)}).catch(function(J){t[E]=a()(a()({},t[E]),{},{cache:"rejected",error:J}),O||F(E)}),O)throw t[E].promise;return{isLoading:!0,src:void 0,error:null}}var v=["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense","emptyImage","emptyTip"],m=function(g){return g};function H(l,g){var M=l.decode,_=M===void 0?!0:M,o=l.src,O=o===void 0?[]:o,B=l.loader,X=B===void 0?null:B,F=l.unloader,f=F===void 0?null:F,E=l.container,J=E===void 0?m:E,w=l.loaderContainer,rn=w===void 0?m:w,Z=l.unloaderContainer,nn=Z===void 0?m:Z,un=l.imgPromise,fn=l.crossorigin,sn=l.useSuspense,an=sn===void 0?!1:sn,on=l.emptyImage,gn=on===void 0?null:on,pn=l.emptyTip,cn=C()(l,v);un=un||T({decode:_,crossOrigin:fn});var hn=y({srcList:O,imgPromise:un,useSuspense:an}),mn=hn.src,en=hn.isLoading,vn=hn.error;return(!O||(O==null?void 0:O.length)===0)&&!en?gn||(0,s.jsx)(D,{emptyTip:pn}):mn?J((0,s.jsx)("img",a()(a()({src:mn},cn),{},{ref:g}))):!an&&en?rn(X):!an&&f?nn(f):null}var G=(0,r.forwardRef)(H),e=function(g){var M=g.errorTip,_=M===void 0?"load error":M;return(0,s.jsx)(G,a()({loader:(0,s.jsx)(x.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,s.jsx)(c,{errortip:_})},g))},j=e},73746:function(q,z,n){"use strict";var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(68400),P=n.n(p),s=n(54335),W=n(85893),L=["inputRef","onPressEnter","size"],A,c={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},U=s.default.input(A||(A=P()([`
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
`])),function(r){return r.theme.primaryFontColor},function(r){return r.theme.borderColor},function(r){return r.theme.bgColor},function(r){var u=r.$size||"medium";return c[u].height},function(r){var u=r.$size||"medium";return c[u].paddingHorizontal},function(r){var u=r.$size||"medium";return c[u].paddingHorizontal},function(r){var u=r.$size||"medium";return c[u].paddingVertical},function(r){var u=r.$size||"medium";return c[u].paddingVertical},function(r){var u=r.$size||"medium";return c[u].fontSize},function(r){var u=r.$size||"medium";return c[u].borderRadius},function(r){return r.theme.gray},function(r){return r.theme.accentColor},function(r){return r.theme.accentColor},function(r){return"".concat(r.theme.accentColor,"20")},function(r){return r.theme.tipsBgColor},function(r){return r.theme.gray},function(r){return r.theme.dangerColor},function(r){return"".concat(r.theme.dangerColor,"20")},function(r){return r.theme.tipsBgColor}),C=function(u){var D=u.inputRef,d=u.onPressEnter,T=u.size,R=T===void 0?"medium":T,N=b()(u,L),h=function(t){var S;t.key==="Enter"&&(d==null||d(t.nativeEvent)),(S=N.onKeyDown)===null||S===void 0||S.call(N,t)};return(0,W.jsx)(U,a()(a()({$size:R},N),{},{ref:D,onKeyDown:h}))};z.Z=C},36348:function(q,z,n){"use strict";n.d(z,{g:function(){return s}});var K=n(97857),a=n.n(K),x=n(67294),b=n(78798),p=n(58106),P=n(85893),s=function(L){var A=(0,x.useContext)(p.Ni);return(0,P.jsx)(b.Z,a()({color:A.accentColor},L))}},88853:function(q,z,n){"use strict";n.d(z,{sN:function(){return N},K4:function(){return h},Kb:function(){return p.K},Cl:function(){return t},XG:function(){return i},ZP:function(){return G},s3:function(){return m},Ls:function(){return W.L}});var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(93702),P=n(64106),s=n(66227),W=n(79920),L=n(68400),A=n.n(L),c=n(54335),U=n(68258),C=n(76633),r=n(26484),u=n(58106),D,d,T,R,N=(0,c.default)(U.s)(D||(D=A()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,u._j)(e.theme.contextMenuBgColorHover,.2)}),h=c.default.div(d||(d=A()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),i=(0,c.default)(C.v)(T||(T=A()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),t=(0,c.default)(r.C)(R||(R=A()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),S=n(2057),y=n(85893),v=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],m=function(j){return(j==null?void 0:j.type)==="divider"},H=function(j){var l=j.open,g=j.items,M=j.triggerBtnClass,_=j.store,o=j.style,O=j.children,B=j.menuButtonProps,X=B===void 0?{}:B,F=b()(j,v),f=function E(J){return J.map(function(w,rn){var Z;if(m(w))return(0,y.jsx)(t,{},rn);var nn=w.value;return w.children&&((Z=w.children)===null||Z===void 0?void 0:Z.length)>0?(0,y.jsxs)(p.K,{children:[(0,y.jsxs)(N,{render:(0,y.jsx)(P.j,{}),children:[(0,y.jsx)(h,{}),(0,y.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,y.jsx)("span",{className:"menu-shortcut",children:w.shortcut}),(0,y.jsx)(s.C,{})]}),(0,y.jsx)(i,{children:E(w.children)})]},nn):(0,y.jsxs)(N,{onClick:function(){w.handler&&w.handler()},children:[(0,y.jsx)(h,{children:w.checked?(0,y.jsx)("i",{className:"ri-check-line"}):null}),(0,y.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,y.jsx)("span",{className:"menu-shortcut",children:w.shortcut})]},nn)})};return _?(0,y.jsx)(i,a()(a()({style:o,store:_},F),{},{children:f(g)})):(0,y.jsxs)(p.K,{children:[O?(0,y.jsx)(P.j,{render:function(J){return(0,y.jsx)(S.Z,a()(a()({},J),X))},className:M,children:O}):null,(0,y.jsx)(i,a()(a()({style:o,open:l},F),{},{children:f(g)}))]})},G=H},85682:function(q,z,n){"use strict";n.d(z,{Z:function(){return y},p:function(){return p.p}});var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(51712),P=n(55683),s=n(23851),W=n(67294),L=n(68135),A=n(68400),c=n.n(A),U=n(22786),C=n(43525),r=n(17355),u=n(54335),D,d,T,R=(0,u.default)(U.J)(D||(D=c()([`
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
`])),function(v){return v.theme.smallBorderRadius},function(v){return v.theme.borderColor},function(v){return v.theme.bgColor},function(v){return v.theme.spaceXs},function(v){return v.theme.primaryFontColor}),N=(0,u.default)(C.Q)(d||(d=c()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(v){return v.theme.borderColor},function(v){return v.theme.bgColor}),h=(0,u.default)(r.b)(T||(T=c()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(v){return v.theme.fontBase},function(v){return v.theme.spaceXs}),i=n(85893),t=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],S=function(m){var H=m.arrow,G=H===void 0?!0:H,e=m.title,j=m.toggleOnClick,l=j===void 0?!0:j,g=m.children,M=m.customContent,_=m.placement,o=m.onStoreChange,O=m.boxProps,B=O===void 0?{}:O,X=b()(m,t),F=(0,p.p)();return(0,W.useEffect)(function(){o&&o(F)},[F,o]),(0,i.jsxs)(P.H,{store:F,placement:_,children:[(0,i.jsx)(s.x,{toggleOnClick:l,render:function(E){return(0,i.jsx)(L.x,a()(a()({style:{display:"inline-block"}},E),B))},children:g}),!M&&!e?null:(0,i.jsxs)(R,a()(a()({render:function(E){return(0,i.jsx)(L.x,a()({},E))}},X),{},{children:[G?(0,i.jsx)(N,{}):null,e?(0,i.jsx)(h,{children:e}):null,M]}))]})},y=S},5258:function(q,z,n){"use strict";n.d(z,{z:function(){return U}});var K=n(67294),a=n(68400),x=n.n(a),b=n(54335),p,P,s,W=b.default.div(p||(p=x()([`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  align-items: center;
`]))),L=b.default.div(P||(P=x()([`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 12px;
`]))),A=b.default.kbd(s||(s=x()([`
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
`])),function(C){var r=C.theme;return r.bgColor},function(C){var r=C.theme;return r.borderColor},function(C){var r=C.theme;return r.hoverColor}),c=n(85893),U=function(r){var u=r.dataSource,D=u===void 0?[]:u;return(0,c.jsx)(W,{children:D.map(function(d,T){return(0,c.jsxs)(L,{children:[d.icon&&(0,c.jsx)("span",{className:"shortcut-icon",children:d.icon}),(0,c.jsx)(A,{children:d.keybindings.map(function(R,N){return(0,c.jsxs)(c.Fragment,{children:[R.key,N<d.keybindings.length-1&&(0,c.jsx)("span",{className:"shortcut-separator",children:"+"})]})})}),d.desc&&(0,c.jsx)("span",{className:"shortcut-desc",children:d.desc})]},T)})})}},53291:function(q,z,n){"use strict";var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(67294),P=n(85893),s=["children","size","direction","align","split","wrap","style"],W=function(c){if(typeof c=="number")return c;switch(c){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},L=function(c){var U,C=c.children,r=c.size,u=r===void 0?"small":r,D=c.direction,d=D===void 0?"horizontal":D,T=c.align,R=c.split,N=c.wrap,h=N===void 0?!1:N,i=c.style,t=b()(c,s),S=p.Children.toArray(C).filter(function(j){return j!=null});if(S.length===0)return null;if(S.length===1&&!R)return(0,P.jsx)(P.Fragment,{children:S[0]});var y=T||(d==="horizontal"?"center":void 0),v=Array.isArray(u)?u:[u,u],m=W(v[0]),H=W((U=v[1])!==null&&U!==void 0?U:v[0]),G=a()({display:"flex",flexDirection:d==="vertical"?"column":"row",flexWrap:h&&d==="horizontal"?"wrap":"nowrap",alignItems:y},i),e=function(l){var g={};return d==="vertical"?l<S.length-1&&(g.marginBottom="".concat(H,"px")):(l<S.length-1&&(g.marginRight="".concat(m,"px")),h&&(g.marginBottom="".concat(H,"px"))),g};return(0,P.jsx)("div",a()(a()({style:G},t),{},{children:S.map(function(j,l){var g=j.key||"space-item-".concat(l),M=[];return l>0&&R&&M.push((0,P.jsx)("span",{style:d==="vertical"?{marginBottom:"".concat(H,"px")}:{marginRight:"".concat(m,"px")},children:R},"split-".concat(l))),M.push((0,P.jsx)("div",{style:e(l),children:j},g)),M})}))};z.Z=L},33867:function(q,z,n){"use strict";n.d(z,{o:function(){return G}});var K=n(5574),a=n.n(K),x=n(67294),b=n(64599),p=n.n(b),P=n(19632),s=n.n(P),W=n(12444),L=n.n(W),A=n(72004),c=n.n(A),U=n(9783),C=n.n(U),r=function(){function e(j){L()(this,e),C()(this,"title",void 0),C()(this,"children",void 0),C()(this,"parent",void 0),C()(this,"offsetCacheVersion",void 0),C()(this,"cachedOffsetTop",void 0),C()(this,"htmlNode",void 0),C()(this,"depth",void 0),C()(this,"id",void 0),C()(this,"key",void 0),C()(this,"chapter",void 0),C()(this,"h",void 0),C()(this,"onClick",void 0);var l=j.depth,g=j.key,M=j.offsetCacheVersion,_=j.chapter,o=j.h,O=o.htmlNode,B=o.value,X=o.id,F=o.onClick;this.htmlNode=O,this.title=B,this.parent=null,this.children=[],this.depth=l,this.id=X,this.key=g,this.cachedOffsetTop=null,this.offsetCacheVersion=M-1,this.chapter=_,this.h=o,this.onClick=F}return c()(e,[{key:"lazyLoad",value:function(l){l!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=l))}}]),e}(),u=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),D=function(){function e(j){L()(this,e),C()(this,"root",void 0),C()(this,"offsetCacheVersion",void 0);var l=Math.min.apply(Math,s()(j.map(function(o){return o.depth}))),g=0,M=j.map(function(o,O){return new r({h:o,depth:o.depth-l,key:O,offsetCacheVersion:g,chapter:"0"})}),_=[new r({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:g,chapter:"0"})];M.forEach(function(o){for(;_.length&&_[_.length-1].depth>=o.depth;)_.pop();_[_.length-1].children.push(o),o.parent=_[_.length-1];var O=o.parent.children.filter(function(X){return X.depth===o.depth}),B=o.depth-Math.max(o.parent.depth,0);if(B===0)o.chapter=String(O.length);else if(B===1)o.chapter="".concat(o.parent.chapter,".").concat(O.length);else for(o.chapter=o.parent.chapter;B>=1;)o.chapter+=".",B===1?o.chapter+=O.length:o.chapter+=0,B--;_.push(o)}),this.root=_[0],this.offsetCacheVersion=g}return c()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(l){var g=this,M=function(O){var B=p()(O.children),X;try{for(B.s();!(X=B.n()).done;){var F=X.value;if(_(F)===u.Stop)return u.Stop}}catch(f){B.e(f)}finally{B.f()}return u.Continue},_=function(O){O.lazyLoad(g.offsetCacheVersion);var B=l(O);return B!==u.Continue?B:M(O)};M(this.root)}}]),e}(),d=n(68400),T=n.n(d),R=n(54335),N=n(58106),h,i,t,S=R.default.div(h||(h=T()([`
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
`]))),y=R.default.a(i||(i=T()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,N._j)(e.theme.accentColor,.4)}),v=1,m=R.default.li(t||(t=T()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*v,"em")}),H=n(85893),G=(0,x.forwardRef)(function(e,j){var l,g=e.headingsData,M=e.containerEl,_=e.scrollEl,o=e.autoExpand,O=o===void 0?!1:o,B=e.Empty,X=B===void 0?null:B,F=(0,x.useState)(g),f=a()(F,2),E=f[0],J=f[1],w=(0,x.useState)(),rn=a()(w,2),Z=rn[0],nn=rn[1],un=(0,x.useState)(),fn=a()(un,2),sn=fn[0],an=fn[1],on=(0,x.useState)(),gn=a()(on,2),pn=gn[0],cn=gn[1],hn=(0,x.useState)(),mn=a()(hn,2),en=mn[0],vn=mn[1],xn=(0,x.useState)(_),Cn=a()(xn,2),k=Cn[0],yn=Cn[1],bn=(0,x.useCallback)(function($){if($){var V=$.querySelectorAll("h1, h2, h3, h4, h5, h6"),I=[];V.forEach(function(dn,Pn){var On={depth:parseInt(dn.tagName[1],10),value:dn.innerText,htmlNode:dn,id:dn.id||"heading-".concat(Pn)};I.push(On)}),J(I);var Y=new D(I);return nn(Y),Y}},[]),En=(0,x.useCallback)(function($){var V=$||M;if(!(!V&&!E)){if(E){var I=new D(E);nn(I)}else if(V)bn(V);else throw new Error("No headings and containerEl found");return vn(V),V}},[M,E,bn]),ln=(0,x.useCallback)(function(){if(!Z||!k)return null;var $=10,V=k.scrollTop+$,I=null,Y=null;return Z.traverseInPreorder(function(dn){var Pn=Math.max((dn.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0),0);return V>Pn?(Y=dn,u.Continue):(I=Y,u.Stop)}),I===null&&Y!==null&&en?Y:I},[Z,en,k]),Q=(0,x.useCallback)(function($){if(Z){var V=$,I={},Y=Z.getRoot();if(Y){for(I[Y.key]=!0;V!==null;)I[V.key]=!0,V=V.parent;return I}}},[Z]),tn=(0,x.useCallback)(function(){var $=ln();if($&&$!==sn){var V=Q($);an($),cn(V)}},[sn,Q,ln]),jn=function(V,I){V.preventDefault();var Y=(I.cachedOffsetTop||0)-((en==null?void 0:en.offsetTop)||0);k==null||k.scrollTo(0,Y),an(I),cn(Q(I))};(0,x.useEffect)(function(){return Z?tn():En(),k==null||k.addEventListener("scroll",tn),function(){k==null||k.removeEventListener("scroll",tn)}},[Z,k,En,tn]),(0,x.useImperativeHandle)(j,function(){return{refresh:function(V){var I=V.newContainer,Y=V.newScroll;bn(I||en),vn(I),yn(Y)},refreshByHeadings:function(V){var I=V.newHeadings;J(I),nn(new D(I)),yn(void 0),vn(void 0)}}});var Tn=function(){if(Z){var V=[];return Z.traverseInPreorder(function(I){var Y,dn=k?!!(sn&&sn.key===I.key):!0;return V.push((0,H.jsx)(m,{depth:I.depth,active:dn,children:(0,H.jsxs)(y,{href:"#".concat(I.id),active:dn,depth:I.depth,onClick:function(On){On.preventDefault(),I.onClick?I.onClick(I.h):jn(On,I)},children:[(0,H.jsx)("span",{className:"toc-link__chapter",children:I.chapter}),I.title]})},I.key)),!O||pn!=null&&pn[I.key]||((Y=I.parent)===null||Y===void 0?void 0:Y.key)===-1?u.Continue:u.NoChildren}),V}};return(0,H.jsx)(S,{children:(0,H.jsx)("div",{className:"toc-list",children:(Z==null||(l=Z.getRoot())===null||l===void 0||(l=l.children)===null||l===void 0?void 0:l.length)===0?X:(0,H.jsx)("nav",{children:(0,H.jsx)("ul",{children:Tn()})})})})})},23961:function(q,z,n){"use strict";n.r(z),n.d(z,{Toc:function(){return K.o}});var K=n(33867),a=n(12626),x=n.n(a),b={};for(var p in a)["default","Toc"].indexOf(p)<0&&(b[p]=function(P){return a[P]}.bind(0,p));n.d(z,b)},12626:function(){},58106:function(q,z,n){"use strict";n.d(z,{Ni:function(){return u},f6:function(){return D},y0:function(){return T},$_:function(){return R},_j:function(){return W},Wb:function(){return N},$n:function(){return s}});var K=n(97857),a=n.n(K),x={primaryFontColor:"#c8d1d9",secondaryFontColor:"#999999",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},b={primaryFontColor:"#000000",secondaryFontColor:"#5f5f5f",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},p=n(6767),P=n.n(p),s=function(i,t){return P()(i).lighten(t).string()},W=function(i,t){return P()(i).darken(t).string()},L=n(67294),A=n(9361),c=n(54335),U=n(47912),C=n(21539),r=n(85893),u=(0,L.createContext)({}),D=function(i){var t=i.theme,S=i.children,y=(t==null?void 0:t.mode)||"light",v=y==="dark"?R.styledConstants:N.styledConstants,m=t!=null&&t.token?a()(a()({},v),t.token):v;return(0,r.jsx)(c.StyleSheetManager,{shouldForwardProp:d,children:(0,r.jsx)(c.ThemeProvider,{theme:m,children:(0,r.jsx)(U.ZP,{theme:{token:{colorPrimary:v.accentColor},algorithm:y==="dark"?A.Z.darkAlgorithm:A.Z.defaultAlgorithm,zeroRuntime:!0},children:(0,r.jsx)(u.Provider,{value:m,children:S})})})})};function d(h,i){return typeof i=="string"?(0,C.Z)(h):!0}var T={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},R={styledConstants:a()(a()({},T),x)},N={styledConstants:a()(a()({},T),b)}},24909:function(q,z,n){"use strict";n.d(z,{A:function(){return a.Am},T:function(){return p}});var K=n(67294),a=n(64712),x=n(54335),b=n(85893),p=function(){var s=(0,K.useContext)(x.ThemeContext);return(0,b.jsx)(a.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:s==null?void 0:s.borderColor,borderRadius:s==null?void 0:s.smallBorderRadius,color:s==null?void 0:s.primaryFontColor,background:s==null?void 0:s.bgColor},duration:5e3}})}},35307:function(q,z,n){"use strict";n.d(z,{Z:function(){return i}});var K=n(97857),a=n.n(K),x=n(13769),b=n.n(x),p=n(68400),P=n.n(p),s=n(67294),W=n(54335),L=n(56450),A=n(96518),c=n(96802),U,C,r=W.default.div.attrs(function(t){return t})(U||(U=P()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),u=W.default.div(C||(C=P()([`
  display: inline-block;
`]))),D=n(68135),d=n(85893),T=["children","title","fixed","placement","open"],R,N=W.default.div(R||(R=P()([`
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
`])),function(t){return t.theme.borderColor},function(t){return t.theme.tooltipBgColor},function(t){return t.theme.fontXs},function(t){return t.theme.primaryFontColor}),h=function(S){var y,v=S.children,m=S.title,H=S.fixed,G=H===void 0?!1:H,e=S.placement,j=e===void 0?G?"top":"bottom":e,l=S.open,g=b()(S,T),M=v!=null&&(y=v.props)!==null&&y!==void 0&&y.disabled?s.Children.only((0,d.jsx)(u,{children:v})):v;return m?(0,d.jsxs)(L.p,{placement:j,open:l,children:[(0,d.jsx)(A.e,{render:M}),(0,d.jsx)(c.u,{render:function(o){return(0,d.jsx)(D.x,a()(a()({style:{zIndex:99}},o),g))},children:(0,d.jsx)(N,{children:m})})]}):v},i=h},31081:function(q,z,n){"use strict";n.r(z),n.d(z,{Ariakit:function(){return x},Button:function(){return b.Z},CommandDialog:function(){return p.Z},Dialog:function(){return P.Z},Icon:function(){return a},Image:function(){return s.Z},Input:function(){return W.Z},Loading:function(){return C.g},Menu:function(){return L.ZP},MenuItem:function(){return L.sN},MenuItemCheckIcon:function(){return L.K4},MenuProvider:function(){return L.Kb},MenuSeparator:function(){return L.Cl},MenuWrapper:function(){return L.XG},Notifications:function(){return R.T},Popover:function(){return A.Z},Shortcut:function(){return r.z},Space:function(){return c.Z},Spinners:function(){return K},ThemeContext:function(){return T.Ni},ThemeProvider:function(){return T.f6},Tooltip:function(){return U.Z},common:function(){return T.y0},darkTheme:function(){return T.$_},darken:function(){return T._j},isDivider:function(){return L.s3},lightTheme:function(){return T.Wb},lighten:function(){return T.$n},toast:function(){return R.A},useMenuStore:function(){return L.Ls},usePopoverStore:function(){return A.p}});var K=n(48098),a=n(97917),x=n(68314),b=n(2057),p=n(80541),P=n(22098),s=n(20207),W=n(73746),L=n(88853),A=n(85682),c=n(53291),U=n(35307),C=n(36348),r=n(5258),u=n(23961),D={};for(var d in u)["default","Button","CommandDialog","Dialog","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore","Shortcut"].indexOf(d)<0&&(D[d]=function(N){return u[N]}.bind(0,d));n.d(z,D);var T=n(58106),R=n(24909)}}]);
