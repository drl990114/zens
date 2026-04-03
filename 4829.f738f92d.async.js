(self.webpackChunkzens=self.webpackChunkzens||[]).push([[4829],{68135:function(nn,L,n){"use strict";n.d(L,{x:function(){return b}});var $=n(97857),t=n.n($),j=n(67294),E=n(85893),b=function(d){return(0,E.jsx)("div",t()({},d))}},2057:function(nn,L,n){"use strict";var $=n(97857),t=n.n($),j=n(68400),E=n.n(j),b=n(35480),T=n(35289),d=n(58106),N,A,R,c,V,y,i,m,g,s={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius"},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceSm",fontSize:"fontXs",borderRadius:"smallBorderRadius"},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceBase",fontSize:"fontBase",borderRadius:"smallBorderRadius"}},I={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},K=function(o){var _=o.btnType,O=o.danger,C=o.ghost,f=o.theme,U=_||"default",G=O||!1,e=C||!1;if(G)return(0,b.css)(N||(N=E()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),f.dangerColor,e?"transparent":f.dangerColor,e?f.dangerColor:f.white,e?"rgba(220, 38, 38, 0.1)":(0,d._j)(f.dangerColor,.1),(0,d._j)(f.dangerColor,.1));switch(_){case"primary":return(0,b.css)(A||(A=E()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),f.accentColor,C?"transparent":f.accentColor,C?f.accentColor:f.white,C?"rgba(0, 122, 204, 0.1)":(0,d._j)(f.accentColor,.1),(0,d._j)(f.accentColor,.1));case"dashed":return(0,b.css)(R||(R=E()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),f.borderColor,C?"transparent":f.buttonBgColor,f.primaryFontColor,f.accentColor,f.accentColor);case"text":return(0,b.css)(c||(c=E()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),f.primaryFontColor);case"link":return(0,b.css)(V||(V=E()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),f.accentColor,(0,d._j)(f.accentColor,.1));default:return(0,b.css)(y||(y=E()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),f.borderColor,C?"transparent":f.buttonBgColor,f.primaryFontColor,f.accentColor,f.accentColor)}},F=function(o){var _=o.shape,O=o.size,C=o.theme,f=O||"medium",U=C[s[f].borderRadius];switch(_){case"rect":return(0,b.css)(i||(i=E()([`
        border-radius: none;
      `])));default:return(0,b.css)(m||(m=E()([`
        border-radius: `,`;
      `])),U)}},x=(0,b.default)(T.z).attrs(function(l){return t()(t()({},I),l)}).withConfig({shouldForwardProp:function(o){return!["btnType","size","shape","danger","ghost","block"].includes(o)}})(g||(g=E()([`
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
`])),function(l){var o=l.size||"medium";return l.theme[s[o].fontSize]},function(l){var o=l.size||"medium";return l.theme[s[o].paddingHorizontal]},function(l){var o=l.size||"medium";return l.theme[s[o].paddingHorizontal]},function(l){var o=l.size||"medium";return l.theme[s[o].paddingVertical]},function(l){var o=l.size||"medium";return l.theme[s[o].paddingVertical]},function(l){return l.block?"100%":"auto"},K,F,function(l){var o=l.btnType||"default";return(0,d._j)(o==="primary"?l.theme.accentColor:l.theme.buttonBgColor,.1)},function(l){var o=l.btnType||"default",_=l.danger||!1;return o==="primary"?"rgba(0, 122, 204, 0.2)":_?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"});L.Z=x},80541:function(nn,L,n){"use strict";n.d(L,{Z:function(){return W}});var $=n(97857),t=n.n($),j=n(5574),E=n.n(j),b=n(13769),T=n.n(b),d=n(67294),N=n(90512),A=n(79749),R=n(79997),c=n(64247),V=n(26099),y=n(41090),i=n(56084),m=n(68400),g=n.n(m),s=n(35480),I,K,F,x,l,o,_,O,C=s.default.div.attrs(function(u){return t()({},u)})(I||(I=g()([`
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
    padding: 0.5rem 0.75rem;
  }

  .mf-command-dialog__dismiss {
    display: flex;
    padding: 0.25rem 0.5rem;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    border: 1px solid `,`;
    background-color: transparent;
    font-size: 0.75rem;
    color: `,`;
    font-weight: 500;
    margin-left: 0.5rem;
    flex-shrink: 0;
    cursor: pointer;
    height: 1.75rem;

    &:hover {
      background-color: `,`;
    }
  }

  .mf-command-dialog__list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0.25rem 0;
  }
`])),function(u){return u.theme.borderColor},function(u){return u.theme.borderColor},function(u){return u.theme.secondaryFontColor},function(u){return u.theme.hoverColor}),f=s.default.div(K||(K=g()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(u){return u.theme.dialogBackdropColor||"rgba(0, 0, 0, 0.8)"}),U=s.default.input(F||(F=g()([`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: `,`;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  min-height: 2.5rem;

  &::placeholder {
    color: `,`;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`])),function(u){return u.theme.primaryFontColor},function(u){return u.theme.secondaryFontColor}),G=s.default.div(x||(x=g()([`
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
`])),function(u){return u.theme.borderColor},function(u){return u.theme.secondaryFontColor}),e=s.default.div(l||(l=g()([`
  position: relative;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  margin: 0 0.25rem;
  font-size: 0.875rem;
  outline: none;
  color: `,`;
  transition: all 0.1s ease;

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
    gap: 0.5rem;
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
    opacity: 0.5;
    line-height: 1.25;
    margin-top: 0.0625rem;
  }

  .mf-command-dialog__item-shortcut {
    font-size: 0.75rem;
    opacity: 0.5;
    background-color: transparent;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    border: 1px solid `,`;
    flex-shrink: 0;
  }

  &:hover .mf-command-dialog__item-shortcut,
  &[aria-selected='true'] .mf-command-dialog__item-shortcut,
  &[data-active-item] .mf-command-dialog__item-shortcut {
    background-color: `,`;
    border-color: `,`;
  }
`])),function(u){return u.theme.primaryFontColor},function(u){return u.theme.hoverColor},function(u){return u.theme.primaryFontColor},function(u){return u.theme.borderColor},function(u){return u.theme.borderColor},function(u){return u.theme.borderColor}),P=s.default.div(o||(o=g()([`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1rem;
  font-size: 0.875rem;
  color: `,`;
  text-align: center;
`])),function(u){return u.theme.secondaryFontColor}),r=s.default.div(_||(_=g()([`
  padding: 0.375rem 0.75rem 0.125rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: `,`;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
`])),function(u){return u.theme.secondaryFontColor}),v=s.default.div(O||(O=g()([`
  height: 1px;
  background-color: `,`;
  margin: 0.125rem 0.75rem;
`])),function(u){return u.theme.borderColor}),z=n(22098),M=n(5258),a=n(85893),D=["actions","placeholder","emptyText","filter","onSelect","onClose","containerClass","width"],p=function(S,Y){if(!Y.trim())return S;var X=Y.toLowerCase();return S.filter(function(rn){var w,en;return rn.label.toLowerCase().includes(X)||((w=rn.description)===null||w===void 0?void 0:w.toLowerCase().includes(X))||((en=rn.group)===null||en===void 0?void 0:en.toLowerCase().includes(X))})},H=function(S){var Y=S.actions,X=Y===void 0?[]:Y,rn=S.placeholder,w=rn===void 0?"Type a command or search...":rn,en=S.emptyText,un=en===void 0?"No results found.":en,xn=S.filter,cn=xn===void 0?p:xn,mn=S.onSelect,sn=S.onClose,Cn=S.containerClass,Tn=S.width,fn=T()(S,D),En=(0,d.useState)(""),yn=E()(En,2),tn=yn[0],hn=yn[1],vn=(0,A.Rj)(),dn=cn(X,tn),J={};dn.forEach(function(on){var Q=on.group||"default";J[Q]||(J[Q]=[]),J[Q].push(on)});var Sn=function(Q){var q;Q.disabled||((q=Q.onSelect)===null||q===void 0||q.call(Q),mn==null||mn(Q),sn==null||sn())},bn=function(Q){var q=Q.target.value;hn(q),vn.setValue(q)},Pn=function(Q){Q.key==="Escape"&&(sn==null||sn())};return(0,d.useEffect)(function(){fn.open&&(hn(""),vn.setValue(""))},[fn.open,vn]),(0,a.jsx)(z.Z,t()(t()({onClose:sn,hideDismiss:!0,width:"600px",style:{top:"100px",transform:"translate(-50%, 0%)",maxHeight:"70vh",borderRadius:"8px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.2)"}},fn),{},{children:(0,a.jsx)(C,{children:(0,a.jsx)(R.e,{store:vn,children:(0,a.jsxs)("div",{className:(0,N.Z)("mf-command-dialog__container",Cn),children:[(0,a.jsxs)("div",{className:"mf-command-dialog__header",children:[(0,a.jsx)(U,{as:c.h,placeholder:w,value:tn,onChange:bn,onKeyDown:Pn,autoFocus:!0}),(0,a.jsx)(V.S,{className:"mf-command-dialog__dismiss",children:"esc"})]}),(0,a.jsx)(G,{as:y.G,alwaysVisible:!0,className:"mf-command-dialog__list",children:dn.length===0?(0,a.jsx)(P,{children:un}):Object.entries(J).map(function(on,Q){var q=E()(on,2),gn=q[0],an=q[1];return(0,a.jsxs)(d.Fragment,{children:[Q>0&&(0,a.jsx)(v,{}),gn!=="default"&&(0,a.jsx)(r,{children:gn}),an.map(function(h){return(0,a.jsx)(e,{as:i.l,value:h.id,disabled:h.disabled,onClick:function(){return Sn(h)},className:(0,N.Z)("mf-command-dialog__item",h.disabled&&"mf-command-dialog__item--disabled"),children:(0,a.jsxs)("div",{className:"mf-command-dialog__item-content",children:[h.icon&&(0,a.jsx)("div",{className:"mf-command-dialog__item-icon",children:h.icon}),(0,a.jsxs)("div",{className:"mf-command-dialog__item-text",children:[(0,a.jsx)("div",{className:"mf-command-dialog__item-label",children:h.label}),h.description&&(0,a.jsx)("div",{className:"mf-command-dialog__item-description",children:h.description})]}),h.shortcut&&(0,a.jsx)(M.z,{dataSource:h.shortcut})]})},h.id)})]},gn)})})]})})})}))},W=H},22098:function(nn,L,n){"use strict";n.d(L,{Z:function(){return F}});var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(67294),T=n(90512),d=n(79823),N=n(26099),A=n(68400),R=n.n(A),c=n(35480),V,y,i=c.default.div.attrs(function(x){return t()(t()({},x),{},{width:x.width||"420px",padding:x.padding||"12px"})})(V||(V=R()([`
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
`])),function(x){return x.width},function(x){return x.theme.smallBorderRadius},function(x){return x.theme.dialogBgColor},function(x){return x.theme.primaryFontColor},function(x){return x.padding},function(x){return x.theme.borderColor},function(x){return x.theme.primaryFontColor},function(x){return x.theme.accentColor},function(x){return x.theme.white}),m=c.default.div(y||(y=R()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(x){return x.theme.dialogBackdropColor}),g=n(53291),s=n(85893),I=["title","footer","containerClass","children","width","hideDismiss"],K=function(l){var o=l.title,_=l.footer,O=l.containerClass,C=l.children,f=l.width,U=l.hideDismiss,G=U===void 0?!1:U,e=E()(l,I);return(0,s.jsxs)(d.Vq,t()(t()({render:function(r){return(0,s.jsx)(m,{hidden:!e.open,children:(0,s.jsx)(i,t()(t()({},r),{},{width:f}))})}},e),{},{backdrop:!1,children:[o?(0,s.jsxs)("div",{className:"mf-dialog__heading",children:[(0,s.jsx)("div",{className:"mf-dialog__heading__title",children:o}),G?null:(0,s.jsx)(N.S,{className:"mf-dialog__dismiss"})]}):G?null:(0,s.jsx)(N.S,{className:"mf-dialog__dismiss"}),(0,s.jsx)("div",{className:(0,T.Z)("mf-dialog__main",O),children:C}),_?(0,s.jsx)(g.Z,{className:"mf-dialog__footer",children:_}):null]}))},F=K},20207:function(nn,L,n){"use strict";n.d(L,{Z:function(){return P}});var $=n(97857),t=n.n($),j=n(31081),E=n(68400),b=n.n(E),T=n(35480),d=n(85893),N,A=T.default.div(N||(N=b()([`
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

  .zens-error-url {
    max-width: 100%;
    font-size: 11px;
    line-height: 1.5;
    color: `,`;
    padding: 0 12px;
    word-break: break-all;
    text-align: center;
  }
`])),function(r){return r.theme.errorTipColor},function(r){return r.theme.secondaryFontColor}),R=function(v){var z=v.errortip,M=v.width,a=M===void 0?100:M,D=v.height,p=D===void 0?70:D,H=v.errorUrl;return(0,d.jsxs)(A,{style:{width:"".concat(a,"px"),height:"".concat(p,"px")},children:[(0,d.jsx)("div",{className:"zens-error-icon-box",children:(0,d.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,d.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,d.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,d.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,d.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,d.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,d.jsx)("span",{className:"zens-error-text",children:z}),H?(0,d.jsx)("span",{className:"zens-error-url",children:H}):null]})},c=R,V=n(5574),y=n.n(V),i=n(13769),m=n.n(i),g=n(67294),s,I=function(v){var z=v.emptyTip,M=v.style,a=v.className,D=v.width,p=D===void 0?100:D,H=v.height,W=H===void 0?100:H,u=t()({width:p,height:W},M);return(0,d.jsx)(K,{style:u,className:a,children:z||"Empty source"})},K=T.default.div(s||(s=b()([`
  display: flex;
  align-items: center;
  justify-content: center;
  color: `,`;
  border: 1px solid `,`;
  background: `,`;
  border-radius: `,`;
  font-size: `,`;
`])),function(r){return r.theme.secondaryFontColor},function(r){return r.theme.borderColor},function(r){return r.theme.tipsBgColor},function(r){return r.theme.smallBorderRadius},function(r){return r.theme.fontSm}),F=function(r){var v=r.decode,z=v===void 0?!0:v,M=r.crossOrigin,a=M===void 0?"":M;return function(D){return new Promise(function(p,H){var W=new Image;a&&(W.crossOrigin=a),W.onload=function(){z&&W.decode?W.decode().then(p).catch(H):p()},W.onerror=H,W.src=D})}},x=function(v){return v.filter(function(z){return z})},l=function(v){return Array.isArray(v)?v:[v]},o={},_=function(v,z){var M=!1;return new Promise(function(a,D){var p=function(W){return z(W).then(function(u){M=!0,a(u||W)})};v.reduce(function(H,W){return H.catch(function(){if(!M)return p(W)})},p(v.shift())).catch(D)})};function O(r){var v=r.srcList,z=r.imgPromise,M=z===void 0?F({decode:!0}):z,a=r.useSuspense,D=a===void 0?!0:a,p=(0,g.useState)(!1),H=y()(p,2),W=H[1],u=x(l(v)),S=u.join("");if(u.length===0)return{src:void 0,isLoading:!1,error:null};if(o[S]||(o[S]={promise:_(u,M),cache:"pending",error:null}),o[S].cache==="resolved")return{src:o[S].src,isLoading:!1,error:null};if(o[S].cache==="rejected"){if(D)throw o[S].error;return{isLoading:!1,error:o[S].error,src:void 0}}if(o[S].promise.then(function(Y){o[S]=t()(t()({},o[S]),{},{cache:"resolved",src:Y}),D||W(S)}).catch(function(Y){o[S]=t()(t()({},o[S]),{},{cache:"rejected",error:Y}),D||W(S)}),D)throw o[S].promise;return{isLoading:!0,src:void 0,error:null}}var C=["decode","src","loader","unloader","loaderStyle","unloaderStyle","emptyStyle","placeholderStyle","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense","emptyImage","emptyTip","lazy","lazyRoot","lazyRootMargin","lazyThreshold","lazyPlaceholder"],f=function(v){return v};function U(r,v){var z,M=r.decode,a=M===void 0?!0:M,D=r.src,p=D===void 0?[]:D,H=r.loader,W=H===void 0?null:H,u=r.unloader,S=u===void 0?null:u,Y=r.loaderStyle,X=r.unloaderStyle,rn=r.emptyStyle,w=r.placeholderStyle,en=r.container,un=en===void 0?f:en,xn=r.loaderContainer,cn=xn===void 0?f:xn,mn=r.unloaderContainer,sn=mn===void 0?f:mn,Cn=r.imgPromise,Tn=r.crossorigin,fn=r.useSuspense,En=fn===void 0?!1:fn,yn=r.emptyImage,tn=yn===void 0?null:yn,hn=r.emptyTip,vn=r.lazy,dn=vn===void 0?!1:vn,J=r.lazyRoot,Sn=J===void 0?null:J,bn=r.lazyRootMargin,Pn=bn===void 0?"0px":bn,on=r.lazyThreshold,Q=on===void 0?0:on,q=r.lazyPlaceholder,gn=q===void 0?null:q,an=m()(r,C),h=(0,g.useContext)(T.ThemeContext);Cn=Cn||F({decode:a,crossOrigin:Tn});var Z=(0,g.useState)(!dn),B=y()(Z,2),k=B[0],ln=B[1],pn=(0,g.useRef)(null),zn=!dn||k,Wn=zn?p:[],Kn=(0,g.useMemo)(function(){return p?(Array.isArray(p),p.length===0):!0},[p]),_n=(0,g.useMemo)(function(){return{width:an.width,height:an.height}},[an.height,an.width]),jn=(0,g.useMemo)(function(){var On;return t()({display:"inline-flex",alignItems:"center",justifyContent:"center",background:h==null?void 0:h.tipsBgColor,border:"1px solid ".concat(h==null?void 0:h.borderColor),borderRadius:(On=h==null?void 0:h.smallBorderRadius)!==null&&On!==void 0?On:6,color:h==null?void 0:h.secondaryFontColor,boxSizing:"border-box"},_n)},[_n,h]),Nn=(0,g.useMemo)(function(){return t()(t()(t()({},jn),an.style||{}),w||{})},[jn,an.style,w]),Fn=(0,g.useMemo)(function(){return t()(t()({},jn),Y||{})},[jn,Y]),$n=(0,g.useMemo)(function(){return t()(t()({},jn),{},{background:h==null?void 0:h.tipsBgColor,border:"1px solid ".concat(h==null?void 0:h.dangerColor),color:h==null?void 0:h.dangerColor},X||{})},[jn,h,X]),Bn=(0,g.useMemo)(function(){return t()(t()({},jn),{},{background:h==null?void 0:h.tipsBgColor},rn||{})},[jn,h,rn]),In=(0,g.useMemo)(function(){return tn||(0,d.jsx)(I,{emptyTip:hn,style:Bn})},[tn,hn,Bn]),Un=(0,g.useMemo)(function(){if(p)return Array.isArray(p)?p[0]:p},[p]),Hn=t()(t()({},an),{},{loading:(z=an.loading)!==null&&z!==void 0?z:dn?"lazy":an.loading}),Dn=O({srcList:Wn,imgPromise:Cn,useSuspense:En}),Ln=Dn.src,An=Dn.isLoading,Jn=Dn.error;if((0,g.useEffect)(function(){if(dn&&!k&&pn.current){if(typeof IntersectionObserver=="undefined"){ln(!0);return}var On=new IntersectionObserver(function(kn){var Gn=y()(kn,1),Mn=Gn[0];(Mn!=null&&Mn.isIntersecting||(Mn==null?void 0:Mn.intersectionRatio)>0)&&(ln(!0),On.disconnect())},{root:Sn||null,rootMargin:Pn,threshold:Q});return On.observe(pn.current),function(){return On.disconnect()}}},[k,dn,pn,Sn,Pn,Q]),dn&&!k){if(Kn)return un(In);var Rn=gn!=null?gn:W,Vn=(0,d.jsx)("span",{ref:pn,style:Nn,children:Rn?cn(Rn):null});return un(Vn)}if((!p||(p==null?void 0:p.length)===0)&&!An)return un(In);if(Ln)return un((0,d.jsx)("img",t()(t()({src:Ln},Hn),{},{ref:v})));if(!En&&An){var Zn=W?(0,d.jsx)("span",{style:Fn,children:W}):null;return cn(Zn)}if(!En&&S){var wn=g.isValidElement(S)?g.cloneElement(S,{errorUrl:Un}):S,Xn=(0,d.jsx)("span",{style:$n,children:wn});return sn(Xn)}return null}var G=(0,g.forwardRef)(U),e=function(v){var z=v.errorTip,M=z===void 0?"load error":z;return(0,d.jsx)(G,t()({loader:(0,d.jsx)(j.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,d.jsx)(c,{errortip:M})},v))},P=e},73746:function(nn,L,n){"use strict";var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(68400),T=n.n(b),d=n(35480),N=n(85893),A=["inputRef","onPressEnter","size"],R,c={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},V=d.default.input(R||(R=T()([`
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
`])),function(i){return i.theme.primaryFontColor},function(i){return i.theme.borderColor},function(i){return i.theme.bgColor},function(i){var m=i.$size||"medium";return c[m].height},function(i){var m=i.$size||"medium";return c[m].paddingHorizontal},function(i){var m=i.$size||"medium";return c[m].paddingHorizontal},function(i){var m=i.$size||"medium";return c[m].paddingVertical},function(i){var m=i.$size||"medium";return c[m].paddingVertical},function(i){var m=i.$size||"medium";return c[m].fontSize},function(i){var m=i.$size||"medium";return c[m].borderRadius},function(i){return i.theme.gray},function(i){return i.theme.accentColor},function(i){return i.theme.accentColor},function(i){return"".concat(i.theme.accentColor,"20")},function(i){return i.theme.tipsBgColor},function(i){return i.theme.gray},function(i){return i.theme.dangerColor},function(i){return"".concat(i.theme.dangerColor,"20")},function(i){return i.theme.tipsBgColor}),y=function(m){var g=m.inputRef,s=m.onPressEnter,I=m.size,K=I===void 0?"medium":I,F=E()(m,A),x=function(o){var _;o.key==="Enter"&&(s==null||s(o.nativeEvent)),(_=F.onKeyDown)===null||_===void 0||_.call(F,o)};return(0,N.jsx)(V,t()(t()({$size:K},F),{},{ref:g,onKeyDown:x}))};L.Z=y},36348:function(nn,L,n){"use strict";n.d(L,{g:function(){return d}});var $=n(97857),t=n.n($),j=n(67294),E=n(78798),b=n(58106),T=n(85893),d=function(A){var R=(0,j.useContext)(b.Ni);return(0,T.jsx)(E.Z,t()({color:R.accentColor},A))}},88853:function(nn,L,n){"use strict";n.d(L,{sN:function(){return F},K4:function(){return x},Kb:function(){return b.K},Cl:function(){return o},XG:function(){return l},ZP:function(){return G},s3:function(){return f},Ls:function(){return N.L}});var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(93702),T=n(64106),d=n(66227),N=n(79920),A=n(68400),R=n.n(A),c=n(35480),V=n(68258),y=n(76633),i=n(26484),m=n(58106),g,s,I,K,F=(0,c.default)(V.s)(g||(g=R()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.spaceXs},function(e){return e.theme.contextMenuBgColorHover},function(e){return(0,m._j)(e.theme.contextMenuBgColorHover,.2)}),x=c.default.div(s||(s=R()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),l=(0,c.default)(y.v)(I||(I=R()([`
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
`])),function(e){return e.theme.smallBorderRadius},function(e){return e.theme.borderColor},function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.spaceXs},function(e){return e.theme.primaryFontColor},function(e){return e.theme.fontXs},function(e){return e.theme.spaceXs},function(e){return e.theme.secondaryFontColor},function(e){return e.theme.fontXs}),o=(0,c.default)(i.C)(K||(K=R()([`
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
`])),function(e){return e.theme.contextMenuBgColor},function(e){return e.theme.contextMenuSeparatorColor},function(e){return e.theme.contextMenuSeparatorColor}),_=n(2057),O=n(85893),C=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],f=function(P){return(P==null?void 0:P.type)==="divider"},U=function(P){var r=P.open,v=P.items,z=P.triggerBtnClass,M=P.store,a=P.style,D=P.children,p=P.menuButtonProps,H=p===void 0?{}:p,W=E()(P,C),u=function S(Y){return Y.map(function(X,rn){var w;if(f(X))return(0,O.jsx)(o,{},rn);var en=X.value;return X.children&&((w=X.children)===null||w===void 0?void 0:w.length)>0?(0,O.jsxs)(b.K,{children:[(0,O.jsxs)(F,{render:(0,O.jsx)(T.j,{}),children:[(0,O.jsx)(x,{}),(0,O.jsx)("span",{className:"menu-label",children:X.label}),X.shortcut&&(0,O.jsx)("span",{className:"menu-shortcut",children:X.shortcut}),(0,O.jsx)(d.C,{})]}),(0,O.jsx)(l,{children:S(X.children)})]},en):(0,O.jsxs)(F,{onClick:function(){X.handler&&X.handler()},children:[(0,O.jsx)(x,{children:X.checked?(0,O.jsx)("i",{className:"ri-check-line"}):null}),(0,O.jsx)("span",{className:"menu-label",children:X.label}),X.shortcut&&(0,O.jsx)("span",{className:"menu-shortcut",children:X.shortcut})]},en)})};return M?(0,O.jsx)(l,t()(t()({style:a,store:M},W),{},{children:u(v)})):(0,O.jsxs)(b.K,{children:[D?(0,O.jsx)(T.j,{render:function(Y){return(0,O.jsx)(_.Z,t()(t()({},Y),H))},className:z,children:D}):null,(0,O.jsx)(l,t()(t()({style:a,open:r},W),{},{children:u(v)}))]})},G=U},85682:function(nn,L,n){"use strict";n.d(L,{Z:function(){return O},p:function(){return b.p}});var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(51712),T=n(55683),d=n(23851),N=n(67294),A=n(68135),R=n(68400),c=n.n(R),V=n(22786),y=n(43525),i=n(17355),m=n(35480),g,s,I,K=(0,m.default)(V.J)(g||(g=c()([`
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
`])),function(C){return C.theme.smallBorderRadius},function(C){return C.theme.borderColor},function(C){return C.theme.bgColor},function(C){return C.theme.spaceXs},function(C){return C.theme.primaryFontColor}),F=(0,m.default)(y.Q)(s||(s=c()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(C){return C.theme.borderColor},function(C){return C.theme.bgColor}),x=(0,m.default)(i.b)(I||(I=c()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(C){return C.theme.fontBase},function(C){return C.theme.spaceXs}),l=n(85893),o=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],_=function(f){var U=f.arrow,G=U===void 0?!0:U,e=f.title,P=f.toggleOnClick,r=P===void 0?!0:P,v=f.children,z=f.customContent,M=f.placement,a=f.onStoreChange,D=f.boxProps,p=D===void 0?{}:D,H=E()(f,o),W=(0,b.p)();return(0,N.useEffect)(function(){a&&a(W)},[W,a]),(0,l.jsxs)(T.H,{store:W,placement:M,children:[(0,l.jsx)(d.x,{toggleOnClick:r,render:function(S){return(0,l.jsx)(A.x,t()(t()({style:{display:"inline-block"}},S),p))},children:v}),!z&&!e?null:(0,l.jsxs)(K,t()(t()({render:function(S){return(0,l.jsx)(A.x,t()({},S))}},H),{},{children:[G?(0,l.jsx)(F,{}):null,e?(0,l.jsx)(x,{children:e}):null,z]}))]})},O=_},5258:function(nn,L,n){"use strict";n.d(L,{z:function(){return V}});var $=n(67294),t=n(68400),j=n.n(t),E=n(35480),b,T,d,N=E.default.div(b||(b=j()([`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  align-items: center;
`]))),A=E.default.div(T||(T=j()([`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 12px;
`]))),R=E.default.kbd(d||(d=j()([`
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
`])),function(y){var i=y.theme;return i.bgColor},function(y){var i=y.theme;return i.borderColor},function(y){var i=y.theme;return i.hoverColor}),c=n(85893),V=function(i){var m=i.dataSource,g=m===void 0?[]:m;return(0,c.jsx)(N,{children:g.map(function(s,I){return(0,c.jsxs)(A,{children:[s.icon&&(0,c.jsx)("span",{className:"shortcut-icon",children:s.icon}),(0,c.jsx)(R,{children:s.keybindings.map(function(K,F){return(0,c.jsxs)(c.Fragment,{children:[K.key,F<s.keybindings.length-1&&(0,c.jsx)("span",{className:"shortcut-separator",children:"+"})]})})}),s.desc&&(0,c.jsx)("span",{className:"shortcut-desc",children:s.desc})]},I)})})}},53291:function(nn,L,n){"use strict";var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(67294),T=n(85893),d=["children","size","direction","align","split","wrap","style"],N=function(c){if(typeof c=="number")return c;switch(c){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},A=function(c){var V,y=c.children,i=c.size,m=i===void 0?"small":i,g=c.direction,s=g===void 0?"horizontal":g,I=c.align,K=c.split,F=c.wrap,x=F===void 0?!1:F,l=c.style,o=E()(c,d),_=b.Children.toArray(y).filter(function(P){return P!=null});if(_.length===0)return null;if(_.length===1&&!K)return(0,T.jsx)(T.Fragment,{children:_[0]});var O=I||(s==="horizontal"?"center":void 0),C=Array.isArray(m)?m:[m,m],f=N(C[0]),U=N((V=C[1])!==null&&V!==void 0?V:C[0]),G=t()({display:"flex",flexDirection:s==="vertical"?"column":"row",flexWrap:x&&s==="horizontal"?"wrap":"nowrap",alignItems:O},l),e=function(r){var v={};return s==="vertical"?r<_.length-1&&(v.marginBottom="".concat(U,"px")):(r<_.length-1&&(v.marginRight="".concat(f,"px")),x&&(v.marginBottom="".concat(U,"px"))),v};return(0,T.jsx)("div",t()(t()({style:G},o),{},{children:_.map(function(P,r){var v=P.key||"space-item-".concat(r),z=[];return r>0&&K&&z.push((0,T.jsx)("span",{style:s==="vertical"?{marginBottom:"".concat(U,"px")}:{marginRight:"".concat(f,"px")},children:K},"split-".concat(r))),z.push((0,T.jsx)("div",{style:e(r),children:P},v)),z})}))};L.Z=A},33867:function(nn,L,n){"use strict";n.d(L,{o:function(){return G}});var $=n(5574),t=n.n($),j=n(67294),E=n(64599),b=n.n(E),T=n(19632),d=n.n(T),N=n(12444),A=n.n(N),R=n(72004),c=n.n(R),V=n(9783),y=n.n(V),i=function(){function e(P){A()(this,e),y()(this,"title",void 0),y()(this,"children",void 0),y()(this,"parent",void 0),y()(this,"offsetCacheVersion",void 0),y()(this,"cachedOffsetTop",void 0),y()(this,"htmlNode",void 0),y()(this,"depth",void 0),y()(this,"id",void 0),y()(this,"key",void 0),y()(this,"chapter",void 0),y()(this,"h",void 0),y()(this,"onClick",void 0);var r=P.depth,v=P.key,z=P.offsetCacheVersion,M=P.chapter,a=P.h,D=a.htmlNode,p=a.value,H=a.id,W=a.onClick;this.htmlNode=D,this.title=p,this.parent=null,this.children=[],this.depth=r,this.id=H,this.key=v,this.cachedOffsetTop=null,this.offsetCacheVersion=z-1,this.chapter=M,this.h=a,this.onClick=W}return c()(e,[{key:"lazyLoad",value:function(r){r!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=r))}}]),e}(),m=function(e){return e[e.Continue=1]="Continue",e[e.NoChildren=2]="NoChildren",e[e.Stop=3]="Stop",e}({}),g=function(){function e(P){A()(this,e),y()(this,"root",void 0),y()(this,"offsetCacheVersion",void 0);var r=Math.min.apply(Math,d()(P.map(function(a){return a.depth}))),v=0,z=P.map(function(a,D){return new i({h:a,depth:a.depth-r,key:D,offsetCacheVersion:v,chapter:"0"})}),M=[new i({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:v,chapter:"0"})];z.forEach(function(a){for(;M.length&&M[M.length-1].depth>=a.depth;)M.pop();M[M.length-1].children.push(a),a.parent=M[M.length-1];var D=a.parent.children.filter(function(H){return H.depth===a.depth}),p=a.depth-Math.max(a.parent.depth,0);if(p===0)a.chapter=String(D.length);else if(p===1)a.chapter="".concat(a.parent.chapter,".").concat(D.length);else for(a.chapter=a.parent.chapter;p>=1;)a.chapter+=".",p===1?a.chapter+=D.length:a.chapter+=0,p--;M.push(a)}),this.root=M[0],this.offsetCacheVersion=v}return c()(e,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(r){var v=this,z=function(D){var p=b()(D.children),H;try{for(p.s();!(H=p.n()).done;){var W=H.value;if(M(W)===m.Stop)return m.Stop}}catch(u){p.e(u)}finally{p.f()}return m.Continue},M=function(D){D.lazyLoad(v.offsetCacheVersion);var p=r(D);return p!==m.Continue?p:z(D)};z(this.root)}}]),e}(),s=n(68400),I=n.n(s),K=n(35480),F=n(58106),x,l,o,_=K.default.div(x||(x=I()([`
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
`]))),O=K.default.a(l||(l=I()([`
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
`])),function(e){return e.active?e.theme.primaryFontColor:e.theme.labelFontColor},function(e){return e.active?"600":"400"},function(e){return e.theme.spaceXs},function(e){return e.active?e.theme.accentColor:(0,F._j)(e.theme.accentColor,.4)}),C=1,f=K.default.li(o||(o=I()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(e){return"".concat(e.depth*C,"em")}),U=n(85893),G=(0,j.forwardRef)(function(e,P){var r,v=e.headingsData,z=e.containerEl,M=e.scrollEl,a=e.autoExpand,D=a===void 0?!1:a,p=e.Empty,H=p===void 0?null:p,W=(0,j.useState)(v),u=t()(W,2),S=u[0],Y=u[1],X=(0,j.useState)(),rn=t()(X,2),w=rn[0],en=rn[1],un=(0,j.useState)(),xn=t()(un,2),cn=xn[0],mn=xn[1],sn=(0,j.useState)(),Cn=t()(sn,2),Tn=Cn[0],fn=Cn[1],En=(0,j.useState)(),yn=t()(En,2),tn=yn[0],hn=yn[1],vn=(0,j.useState)(M),dn=t()(vn,2),J=dn[0],Sn=dn[1],bn=(0,j.useCallback)(function(h){if(h){var Z=h.querySelectorAll("h1, h2, h3, h4, h5, h6"),B=[];Z.forEach(function(ln,pn){var zn={depth:parseInt(ln.tagName[1],10),value:ln.innerText,htmlNode:ln,id:ln.id||"heading-".concat(pn)};B.push(zn)}),Y(B);var k=new g(B);return en(k),k}},[]),Pn=(0,j.useCallback)(function(h){var Z=h||z;if(!(!Z&&!S)){if(S){var B=new g(S);en(B)}else if(Z)bn(Z);else throw new Error("No headings and containerEl found");return hn(Z),Z}},[z,S,bn]),on=(0,j.useCallback)(function(){if(!w||!J)return null;var h=10,Z=J.scrollTop+h,B=null,k=null;return w.traverseInPreorder(function(ln){var pn=Math.max((ln.cachedOffsetTop||0)-((tn==null?void 0:tn.offsetTop)||0),0);return Z>pn?(k=ln,m.Continue):(B=k,m.Stop)}),B===null&&k!==null&&tn?k:B},[w,tn,J]),Q=(0,j.useCallback)(function(h){if(w){var Z=h,B={},k=w.getRoot();if(k){for(B[k.key]=!0;Z!==null;)B[Z.key]=!0,Z=Z.parent;return B}}},[w]),q=(0,j.useCallback)(function(){var h=on();if(h&&h!==cn){var Z=Q(h);mn(h),fn(Z)}},[cn,Q,on]),gn=function(Z,B){Z.preventDefault();var k=(B.cachedOffsetTop||0)-((tn==null?void 0:tn.offsetTop)||0);J==null||J.scrollTo(0,k),mn(B),fn(Q(B))};(0,j.useEffect)(function(){return w?q():Pn(),J==null||J.addEventListener("scroll",q),function(){J==null||J.removeEventListener("scroll",q)}},[w,J,Pn,q]),(0,j.useImperativeHandle)(P,function(){return{refresh:function(Z){var B=Z.newContainer,k=Z.newScroll;bn(B||tn),hn(B),Sn(k)},refreshByHeadings:function(Z){var B=Z.newHeadings;Y(B),en(new g(B)),Sn(void 0),hn(void 0)}}});var an=function(){if(w){var Z=[];return w.traverseInPreorder(function(B){var k,ln=J?!!(cn&&cn.key===B.key):!0;return Z.push((0,U.jsx)(f,{depth:B.depth,active:ln,children:(0,U.jsxs)(O,{href:"#".concat(B.id),active:ln,depth:B.depth,onClick:function(zn){zn.preventDefault(),B.onClick?B.onClick(B.h):gn(zn,B)},children:[(0,U.jsx)("span",{className:"toc-link__chapter",children:B.chapter}),B.title]})},B.key)),!D||Tn!=null&&Tn[B.key]||((k=B.parent)===null||k===void 0?void 0:k.key)===-1?m.Continue:m.NoChildren}),Z}};return(0,U.jsx)(_,{children:(0,U.jsx)("div",{className:"toc-list",children:(w==null||(r=w.getRoot())===null||r===void 0||(r=r.children)===null||r===void 0?void 0:r.length)===0?H:(0,U.jsx)("nav",{children:(0,U.jsx)("ul",{children:an()})})})})})},23961:function(nn,L,n){"use strict";n.r(L),n.d(L,{Toc:function(){return $.o}});var $=n(33867),t=n(12626),j=n.n(t),E={};for(var b in t)["default","Toc"].indexOf(b)<0&&(E[b]=function(T){return t[T]}.bind(0,b));n.d(L,E)},12626:function(){},58106:function(nn,L,n){"use strict";n.d(L,{Ni:function(){return m},f6:function(){return g},y0:function(){return I},$_:function(){return K},_j:function(){return N},Wb:function(){return F},$n:function(){return d}});var $=n(97857),t=n.n($),j={primaryFontColor:"#c8d1d9",secondaryFontColor:"#999999",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},E={primaryFontColor:"#000000",secondaryFontColor:"#5f5f5f",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},b=n(6767),T=n.n(b),d=function(l,o){return T()(l).lighten(o).string()},N=function(l,o){return T()(l).darken(o).string()},A=n(67294),R=n(9361),c=n(35480),V=n(94512),y=n(21539),i=n(85893),m=(0,A.createContext)({}),g=function(l){var o=l.theme,_=l.children,O=l.antdThemeConfig,C=O===void 0?{}:O,f=(o==null?void 0:o.mode)||"light",U=f==="dark"?K.styledConstants:F.styledConstants,G=o!=null&&o.token?t()(t()({},U),o.token):U;return(0,i.jsx)(c.StyleSheetManager,{shouldForwardProp:s,children:(0,i.jsx)(c.ThemeProvider,{theme:G,children:(0,i.jsx)(V.ZP,{theme:t()({token:{colorPrimary:G.accentColor},algorithm:f==="dark"?R.Z.darkAlgorithm:R.Z.defaultAlgorithm,zeroRuntime:!0},C),children:(0,i.jsx)(m.Provider,{value:G,children:_})})})})};function s(x,l){return typeof l=="string"?(0,y.Z)(x):!0}var I={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},K={styledConstants:t()(t()({},I),j)},F={styledConstants:t()(t()({},I),E)}},24909:function(nn,L,n){"use strict";n.d(L,{A:function(){return t.Am},T:function(){return b}});var $=n(67294),t=n(64712),j=n(35480),E=n(85893),b=function(){var d=(0,$.useContext)(j.ThemeContext);return(0,E.jsx)(t.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:d==null?void 0:d.borderColor,borderRadius:d==null?void 0:d.smallBorderRadius,color:d==null?void 0:d.primaryFontColor,background:d==null?void 0:d.bgColor},duration:5e3}})}},35307:function(nn,L,n){"use strict";n.d(L,{Z:function(){return l}});var $=n(97857),t=n.n($),j=n(13769),E=n.n(j),b=n(68400),T=n.n(b),d=n(67294),N=n(35480),A=n(56450),R=n(96518),c=n(96802),V,y,i=N.default.div.attrs(function(o){return o})(V||(V=T()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),m=N.default.div(y||(y=T()([`
  display: inline-block;
`]))),g=n(68135),s=n(85893),I=["children","title","fixed","placement","open"],K,F=N.default.div(K||(K=T()([`
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
`])),function(o){return o.theme.borderColor},function(o){return o.theme.tooltipBgColor},function(o){return o.theme.fontXs},function(o){return o.theme.primaryFontColor}),x=function(_){var O,C=_.children,f=_.title,U=_.fixed,G=U===void 0?!1:U,e=_.placement,P=e===void 0?G?"top":"bottom":e,r=_.open,v=E()(_,I),z=C!=null&&(O=C.props)!==null&&O!==void 0&&O.disabled?d.Children.only((0,s.jsx)(m,{children:C})):C;return f?(0,s.jsxs)(A.p,{placement:P,open:r,children:[(0,s.jsx)(R.e,{render:z}),(0,s.jsx)(c.u,{render:function(a){return(0,s.jsx)(g.x,t()(t()({style:{zIndex:99}},a),v))},children:(0,s.jsx)(F,{children:f})})]}):C},l=x},31081:function(nn,L,n){"use strict";n.r(L),n.d(L,{Ariakit:function(){return j},Button:function(){return E.Z},CommandDialog:function(){return b.Z},Dialog:function(){return T.Z},Icon:function(){return t},Image:function(){return d.Z},Input:function(){return N.Z},Loading:function(){return y.g},Menu:function(){return A.ZP},MenuItem:function(){return A.sN},MenuItemCheckIcon:function(){return A.K4},MenuProvider:function(){return A.Kb},MenuSeparator:function(){return A.Cl},MenuWrapper:function(){return A.XG},Notifications:function(){return K.T},Popover:function(){return R.Z},Shortcut:function(){return i.z},Space:function(){return c.Z},Spinners:function(){return $},ThemeContext:function(){return I.Ni},ThemeProvider:function(){return I.f6},Tooltip:function(){return V.Z},common:function(){return I.y0},darkTheme:function(){return I.$_},darken:function(){return I._j},isDivider:function(){return A.s3},lightTheme:function(){return I.Wb},lighten:function(){return I.$n},toast:function(){return K.A},useMenuStore:function(){return A.Ls},usePopoverStore:function(){return R.p}});var $=n(48098),t=n(56255),j=n(68314),E=n(2057),b=n(80541),T=n(22098),d=n(20207),N=n(73746),A=n(88853),R=n(85682),c=n(53291),V=n(35307),y=n(36348),i=n(5258),m=n(23961),g={};for(var s in m)["default","Button","CommandDialog","Dialog","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore","Shortcut"].indexOf(s)<0&&(g[s]=function(F){return m[F]}.bind(0,s));n.d(L,g);var I=n(58106),K=n(24909)}}]);
