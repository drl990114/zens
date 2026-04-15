(self.webpackChunkzens=self.webpackChunkzens||[]).push([[4829],{68135:function(q,S,e){"use strict";e.d(S,{x:function(){return R}});var Z=e(97857),r=e.n(Z),x=e(67294),B=e(85893),R=function(u){return(0,B.jsx)("div",r()({},u))}},7935:function(q,S,e){"use strict";var Z=e(52677),r=e.n(Z),x=e(5574),B=e.n(x),R=e(13769),j=e.n(R),u=e(97857),T=e.n(u),E=e(68400),C=e.n(E),i=e(67294),L=e(35480),_=e(79090),d=e(35289),m=e(58106),t=e(85893),h=["loading","children"],$,W,V,p,O,c,I,X,P,F,M={small:{paddingHorizontal:"spaceXs",paddingVertical:"spaceXXs",fontSize:"fontXs",borderRadius:"smallBorderRadius",iconSize:12},medium:{paddingHorizontal:"spaceBase",paddingVertical:"spaceXs",fontSize:"fontXs",borderRadius:"smallBorderRadius",iconSize:14},large:{paddingHorizontal:"spaceL",paddingVertical:"spaceXs",fontSize:"fontBase",borderRadius:"smallBorderRadius",iconSize:16}},w={size:"medium",btnType:"default",shape:"default",danger:!1,ghost:!1,block:!1},a=function(n){var v=n.btnType,b=n.danger,y=n.ghost,f=n.theme,s=v||"default",H=b||!1,U=y||!1;if(H)return(0,L.css)($||($=C()([`
      border-color: `,`;
      background-color: `,`;
      color: `,`;

      &:hover, &:focus {
        background-color: `,`;
        border-color: `,`;
      }
    `])),f.dangerColor,U?"transparent":f.dangerColor,U?f.dangerColor:f.white,U?"rgba(220, 38, 38, 0.1)":(0,m._j)(f.dangerColor,.1),(0,m._j)(f.dangerColor,.1));switch(v){case"primary":return(0,L.css)(W||(W=C()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          background-color: `,`;
          border-color: `,`;
        }
      `])),f.accentColor,y?"transparent":f.accentColor,y?f.accentColor:f.white,y?"rgba(0, 122, 204, 0.1)":(0,m._j)(f.accentColor,.1),(0,m._j)(f.accentColor,.1));case"dashed":return(0,L.css)(V||(V=C()([`
        border-style: dashed;
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),f.borderColor,y?"transparent":f.buttonBgColor,f.primaryFontColor,f.accentColor,f.accentColor);case"text":return(0,L.css)(p||(p=C()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `])),f.primaryFontColor);case"link":return(0,L.css)(O||(O=C()([`
        border-color: transparent;
        background-color: transparent;
        color: `,`;

        &:hover, &:focus {
          color: `,`;
          text-decoration: underline;
        }
      `])),f.accentColor,(0,m._j)(f.accentColor,.1));default:return(0,L.css)(c||(c=C()([`
        border-color: `,`;
        background-color: `,`;
        color: `,`;

        &:hover, &:focus {
          border-color: `,`;
          color: `,`;
        }
      `])),f.borderColor,y?"transparent":f.buttonBgColor,f.primaryFontColor,f.accentColor,f.accentColor)}},K=function(n){var v=n.shape,b=n.size,y=n.theme,f=b||"medium",s=y[M[f].borderRadius];switch(v){case"rect":return(0,L.css)(I||(I=C()([`
        border-radius: none;
      `])));default:return(0,L.css)(X||(X=C()([`
        border-radius: `,`;
      `])),s)}},N=(0,L.default)(d.z).attrs(function(o){return T()(T()({},w),o)}).withConfig({shouldForwardProp:function(n){return!["btnType","size","shape","danger","ghost","block","loading"].includes(n)}})(P||(P=C()([`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: 6px;
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

  /* Loading state */
  &[data-loading='true'] {
    cursor: default;
    opacity: 0.8;
    pointer-events: none;
  }
`])),function(o){var n=o.size||"medium";return o.theme[M[n].fontSize]},function(o){var n=o.size||"medium";return o.theme[M[n].paddingHorizontal]},function(o){var n=o.size||"medium";return o.theme[M[n].paddingHorizontal]},function(o){var n=o.size||"medium";return o.theme[M[n].paddingVertical]},function(o){var n=o.size||"medium";return o.theme[M[n].paddingVertical]},function(o){return o.block?"100%":"auto"},a,K,function(o){var n=o.btnType||"default";return(0,m._j)(n==="primary"?o.theme.accentColor:o.theme.buttonBgColor,.1)},function(o){var n=o.btnType||"default",v=o.danger||!1;return n==="primary"?"rgba(0, 122, 204, 0.2)":v?"rgba(220, 38, 38, 0.2)":"rgba(0, 0, 0, 0.1)"}),l=L.default.span(F||(F=C()([`
  display: inline-flex;
  align-items: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .loading-icon {
    animation: spin 1s linear infinite;
  }
`]))),g=function(n){var v=n.loading,b=n.children,y=j()(n,h),f=(0,i.useState)(!1),s=B()(f,2),H=s[0],U=s[1];(0,i.useEffect)(function(){if(typeof v=="boolean")U(v);else if(v&&r()(v)==="object"){var ee=v.delay||0;if(ee>0){var J=setTimeout(function(){U(!0)},ee);return function(){return clearTimeout(J)}}else U(!0)}else U(!1)},[v]);var ne=function(){if(r()(v)==="object"&&v!==null&&v!==void 0&&v.icon)return v.icon;var J=n.size||"medium",te=M[J].iconSize;return(0,t.jsx)(l,{children:(0,t.jsx)(_.Z,{className:"loading-icon",style:{fontSize:te}})})};return(0,t.jsxs)(N,T()(T()({"data-loading":H},y),{},{children:[H&&ne(),b]}))};S.Z=g},80541:function(q,S,e){"use strict";e.d(S,{Z:function(){return f}});var Z=e(97857),r=e.n(Z),x=e(5574),B=e.n(x),R=e(13769),j=e.n(R),u=e(67294),T=e(90512),E=e(79749),C=e(79997),i=e(64247),L=e(26099),_=e(41090),d=e(56084),m=e(68400),t=e.n(m),h=e(35480),$,W,V,p,O,c,I,X,P=h.default.div.attrs(function(s){return r()({},s)})($||($=t()([`
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
`])),function(s){return s.theme.borderColor},function(s){return s.theme.borderColor},function(s){return s.theme.secondaryFontColor},function(s){return s.theme.hoverColor}),F=h.default.div(W||(W=t()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(s){return s.theme.dialogBackdropColor||"rgba(0, 0, 0, 0.8)"}),M=h.default.input(V||(V=t()([`
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
`])),function(s){return s.theme.primaryFontColor},function(s){return s.theme.secondaryFontColor}),w=h.default.div(p||(p=t()([`
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
`])),function(s){return s.theme.borderColor},function(s){return s.theme.secondaryFontColor}),a=h.default.div(O||(O=t()([`
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
`])),function(s){return s.theme.primaryFontColor},function(s){return s.theme.hoverColor},function(s){return s.theme.primaryFontColor},function(s){return s.theme.borderColor},function(s){return s.theme.borderColor},function(s){return s.theme.borderColor}),K=h.default.div(c||(c=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1rem;
  font-size: 0.875rem;
  color: `,`;
  text-align: center;
`])),function(s){return s.theme.secondaryFontColor}),N=h.default.div(I||(I=t()([`
  padding: 0.375rem 0.75rem 0.125rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: `,`;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
`])),function(s){return s.theme.secondaryFontColor}),l=h.default.div(X||(X=t()([`
  height: 1px;
  background-color: `,`;
  margin: 0.125rem 0.75rem;
`])),function(s){return s.theme.borderColor}),g=e(22098),o=e(5258),n=e(85893),v=["actions","placeholder","emptyText","filter","onSelect","onClose","containerClass","width"],b=function(H,U){if(!U.trim())return H;var ne=U.toLowerCase();return H.filter(function(ee){var J,te;return ee.label.toLowerCase().includes(ne)||((J=ee.description)===null||J===void 0?void 0:J.toLowerCase().includes(ne))||((te=ee.group)===null||te===void 0?void 0:te.toLowerCase().includes(ne))})},y=function(H){var U=H.actions,ne=U===void 0?[]:U,ee=H.placeholder,J=ee===void 0?"Type a command or search...":ee,te=H.emptyText,se=te===void 0?"No results found.":te,re=H.filter,ue=re===void 0?b:re,me=H.onSelect,de=H.onClose,Me=H.containerClass,_e=H.width,Ce=j()(H,v),ye=(0,u.useState)(""),fe=B()(ye,2),oe=fe[0],he=fe[1],ve=(0,E.Rj)(),ge=ue(ne,oe),k={};ge.forEach(function(le){var G=le.group||"default";k[G]||(k[G]=[]),k[G].push(le)});var be=function(G){var Y;G.disabled||((Y=G.onSelect)===null||Y===void 0||Y.call(G),me==null||me(G),de==null||de())},ae=function(G){var Y=G.target.value;he(Y),ve.setValue(Y)},je=function(G){G.key==="Escape"&&(de==null||de())};return(0,u.useEffect)(function(){Ce.open&&(he(""),ve.setValue(""))},[Ce.open,ve]),(0,n.jsx)(g.Z,r()(r()({onClose:de,hideDismiss:!0,width:"600px",style:{top:"100px",transform:"translate(-50%, 0%)",maxHeight:"70vh",borderRadius:"8px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.2)"}},Ce),{},{children:(0,n.jsx)(P,{children:(0,n.jsx)(C.e,{store:ve,children:(0,n.jsxs)("div",{className:(0,T.Z)("mf-command-dialog__container",Me),children:[(0,n.jsxs)("div",{className:"mf-command-dialog__header",children:[(0,n.jsx)(M,{as:i.h,placeholder:J,value:oe,onChange:ae,onKeyDown:je,autoFocus:!0}),(0,n.jsx)(L.S,{className:"mf-command-dialog__dismiss",children:"esc"})]}),(0,n.jsx)(w,{as:_.G,alwaysVisible:!0,className:"mf-command-dialog__list",children:ge.length===0?(0,n.jsx)(K,{children:se}):Object.entries(k).map(function(le,G){var Y=B()(le,2),pe=Y[0],ce=Y[1];return(0,n.jsxs)(u.Fragment,{children:[G>0&&(0,n.jsx)(l,{}),pe!=="default"&&(0,n.jsx)(N,{children:pe}),ce.map(function(A){return(0,n.jsx)(a,{as:d.l,value:A.id,disabled:A.disabled,onClick:function(){return be(A)},className:(0,T.Z)("mf-command-dialog__item",A.disabled&&"mf-command-dialog__item--disabled"),children:(0,n.jsxs)("div",{className:"mf-command-dialog__item-content",children:[A.icon&&(0,n.jsx)("div",{className:"mf-command-dialog__item-icon",children:A.icon}),(0,n.jsxs)("div",{className:"mf-command-dialog__item-text",children:[(0,n.jsx)("div",{className:"mf-command-dialog__item-label",children:A.label}),A.description&&(0,n.jsx)("div",{className:"mf-command-dialog__item-description",children:A.description})]}),A.shortcut&&(0,n.jsx)(o.z,{dataSource:A.shortcut})]})},A.id)})]},pe)})})]})})})}))},f=y},22098:function(q,S,e){"use strict";e.d(S,{Z:function(){return V}});var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(67294),j=e(90512),u=e(79823),T=e(26099),E=e(68400),C=e.n(E),i=e(35480),L,_,d=i.default.div.attrs(function(p){return r()(r()({},p),{},{width:p.width||"420px",padding:p.padding||"12px"})})(L||(L=C()([`
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
`])),function(p){return p.width},function(p){return p.theme.smallBorderRadius},function(p){return p.theme.dialogBgColor},function(p){return p.theme.primaryFontColor},function(p){return p.padding},function(p){return p.theme.borderColor},function(p){return p.theme.primaryFontColor},function(p){return p.theme.accentColor},function(p){return p.theme.white}),m=i.default.div(_||(_=C()([`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: `,`;
`])),function(p){return p.theme.dialogBackdropColor}),t=e(53291),h=e(85893),$=["title","footer","containerClass","children","width","hideDismiss"],W=function(O){var c=O.title,I=O.footer,X=O.containerClass,P=O.children,F=O.width,M=O.hideDismiss,w=M===void 0?!1:M,a=B()(O,$);return(0,h.jsxs)(u.Vq,r()(r()({render:function(N){return(0,h.jsx)(m,{hidden:!a.open,children:(0,h.jsx)(d,r()(r()({},N),{},{width:F}))})}},a),{},{backdrop:!1,children:[c?(0,h.jsxs)("div",{className:"mf-dialog__heading",children:[(0,h.jsx)("div",{className:"mf-dialog__heading__title",children:c}),w?null:(0,h.jsx)(T.S,{className:"mf-dialog__dismiss"})]}):w?null:(0,h.jsx)(T.S,{className:"mf-dialog__dismiss"}),(0,h.jsx)("div",{className:(0,j.Z)("mf-dialog__main",X),children:P}),I?(0,h.jsx)(t.Z,{className:"mf-dialog__footer",children:I}):null]}))},V=W},93829:function(q,S,e){"use strict";e.d(S,{Z:function(){return M}});var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(79920),j=e(64106),u=e(93702),T=e(67294),E=e(68135),C=e(7935),i=e(41498),L=e(68400),_=e.n(L),d=e(35480),m,t,h,$,W=d.default.div(m||(m=_()([`
  display: inline-block;
  position: relative;
`]))),V=d.default.div(t||(t=_()([`
  display: inline-flex;
  align-items: center;

  .dropdown-icon {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
  }

  .dropdown-text {
    display: inline-flex;
    align-items: center;
  }
`]))),p=d.default.span(h||(h=_()([`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 12px;
  transition: transform 0.3s;

  [aria-expanded='true'] & {
    transform: rotate(180deg);
  }
`]))),O=d.default.div($||($=_()([`
  position: relative;
  z-index: 1050;
`]))),c=e(85893),I=["arrow","autoAdjustOverflow","autoFocus","disabled","destroyPopupOnHide","dropdownRender","getPopupContainer","overlayClassName","overlayStyle","placement","trigger","open","onOpenChange","buttonsRender","loading","danger","icon","size","type","onClick","children","customTrigger","menu"],X=function(a){return(a==null?void 0:a.type)==="divider"},P={bottomLeft:"bottom-start",bottomCenter:"bottom",bottomRight:"bottom-end",topLeft:"top-start",topCenter:"top",topRight:"top-end",leftTop:"left-start",leftCenter:"left",leftBottom:"left-end",rightTop:"right-start",rightCenter:"right",rightBottom:"right-end"},F=function(a){var K=a.arrow,N=K===void 0?!1:K,l=a.autoAdjustOverflow,g=l===void 0?!0:l,o=a.autoFocus,n=o===void 0?!1:o,v=a.disabled,b=v===void 0?!1:v,y=a.destroyPopupOnHide,f=y===void 0?!1:y,s=a.dropdownRender,H=a.getPopupContainer,U=a.overlayClassName,ne=a.overlayStyle,ee=a.placement,J=ee===void 0?"bottomLeft":ee,te=a.trigger,se=te===void 0?["hover"]:te,re=a.open,ue=a.onOpenChange,me=a.buttonsRender,de=a.loading,Me=de===void 0?!1:de,_e=a.danger,Ce=_e===void 0?!1:_e,ye=a.icon,fe=a.size,oe=fe===void 0?"medium":fe,he=a.type,ve=he===void 0?"default":he,ge=a.onClick,k=a.children,be=a.customTrigger,ae=a.menu,je=B()(a,I),le=(0,T.useRef)(null),G=(0,T.useRef)(null),Y=(0,R.L)({placement:P[J],focusLoop:!1,focusWrap:!1}),pe=re!==void 0?re:Y.useState("open");(0,T.useEffect)(function(){re!==void 0&&Y.setOpen(re)},[re,Y]);var ce=function(Pe){re===void 0&&Y.setOpen(Pe),ue==null||ue(Pe,{source:"trigger"})},A=function(){se.includes("click")&&ce(!pe),ge==null||ge(void 0)},D=function(Pe){se.includes("contextMenu")&&(Pe.preventDefault(),ce(!pe))},z=function(){se.includes("hover")&&(G.current&&(clearTimeout(G.current),G.current=null),ce(!0))},Q=function(){se.includes("hover")&&(G.current=setTimeout(function(){ce(!1)},100))};(0,T.useEffect)(function(){return function(){G.current&&clearTimeout(G.current)}},[]);var ie=typeof N=="boolean"?N:!0,Ee=se.includes("click"),Oe=se.includes("hover"),He=se.includes("contextMenu"),We=be?(0,c.jsx)(E.x,{ref:le,onClick:A,onContextMenu:D,onMouseEnter:z,onMouseLeave:Q,style:{display:"inline-block"},children:be}):(0,c.jsx)(V,{ref:le,onMouseEnter:z,onMouseLeave:Q,children:(0,c.jsxs)(j.j,{render:(0,c.jsx)(C.Z,{size:oe,btnType:ve==="default"?"default":ve,danger:Ce,loading:Me,disabled:b,onClick:A,onContextMenu:D}),toggleOnClick:Ee?!1:void 0,children:[ye&&(0,c.jsx)("span",{className:"dropdown-icon",children:ye}),k&&(0,c.jsx)("span",{className:"dropdown-text",children:k}),ie&&(0,c.jsx)(p,{className:"dropdown-arrow",children:(0,c.jsx)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:(0,c.jsx)("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.7 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.3c3.2 4.4 9.7 4.4 12.9 0l352.6-486.3c3.9-5.3.1-12.7-6.4-12.7z"})})})]})}),Be=me?me([We]):[We],Te=function(Pe){return Pe.map(function(xe,Ue){if(X(xe))return(0,c.jsx)(i.Cl,{},"divider-".concat(Ue));var $e=xe.key,Le=xe.label,Ie=xe.icon,Ae=xe.disabled,Ve=xe.danger,ze=xe.onClick,Fe=function(){if(!Ae){var Re;ze==null||ze(),ae==null||(Re=ae.onClick)===null||Re===void 0||Re.call(ae,xe),ce(!1)}};return(0,c.jsxs)(i.sN,{disabled:Ae,onClick:Fe,"data-danger":Ve,children:[Ie&&(0,c.jsx)("span",{className:"dropdown-menu-item-icon",children:Ie}),(0,c.jsx)("span",{className:"dropdown-menu-item-label",children:Le})]},$e)})},Ke=ae!=null&&ae.items?(0,c.jsx)(i.XG,r()(r()({store:Y,className:U,style:ne,onMouseEnter:z,onMouseLeave:Q},je),{},{children:Te(ae.items)})):null,Ne=s?s(Ke):Ke;return f&&!pe?(0,c.jsx)(W,{children:Be[0]}):(0,c.jsx)(W,{children:(0,c.jsxs)(u.K,{store:Y,children:[Be[0],Ne]})})},M=F},20207:function(q,S,e){"use strict";e.d(S,{Z:function(){return N}});var Z=e(97857),r=e.n(Z),x=e(31081),B=e(68400),R=e.n(B),j=e(35480),u=e(85893),T,E=j.default.div(T||(T=R()([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: `,`;
  overflow: hidden;
  max-width: 100%;

  .zens-error-icon-box {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
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
    max-width: 100%;
    box-sizing: border-box;
  }

  .zens-error-url {
    max-width: 100%;
    font-size: 11px;
    line-height: 1.5;
    color: `,`;
    padding: 0 12px;
    word-break: break-all;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
  }
`])),function(l){return l.theme.errorTipColor},function(l){return l.theme.secondaryFontColor}),C=function(g){var o=g.errortip,n=g.width,v=n===void 0?100:n,b=g.height,y=b===void 0?70:b,f=g.errorUrl;return(0,u.jsxs)(E,{style:{width:"".concat(v,"px"),height:"".concat(y,"px")},children:[(0,u.jsx)("div",{className:"zens-error-icon-box",children:(0,u.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"zens-error-icon",children:[(0,u.jsx)("path",{d:"M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"}),(0,u.jsx)("path",{d:"m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"}),(0,u.jsx)("path",{fill:"currentColor",stroke:"none",d:"M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z"}),(0,u.jsx)("path",{fill:"currentColor",fillRule:"evenodd",stroke:"none",d:"M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z",clipRule:"evenodd"}),(0,u.jsx)("path",{d:"M17 15h-2v2h2v-2Z"})]})}),(0,u.jsx)("span",{className:"zens-error-text",children:o}),f?(0,u.jsx)("span",{className:"zens-error-url",title:f,children:f}):null]})},i=C,L=e(5574),_=e.n(L),d=e(13769),m=e.n(d),t=e(67294),h,$=function(g){var o=g.emptyTip,n=g.style,v=g.className,b=g.width,y=b===void 0?100:b,f=g.height,s=f===void 0?100:f,H=r()({width:y,height:s},n);return(0,u.jsx)(W,{style:H,className:v,children:o||"Empty source"})},W=j.default.div(h||(h=R()([`
  display: flex;
  align-items: center;
  justify-content: center;
  color: `,`;
  border: 1px solid `,`;
  background: `,`;
  border-radius: `,`;
  font-size: `,`;
`])),function(l){return l.theme.secondaryFontColor},function(l){return l.theme.borderColor},function(l){return l.theme.tipsBgColor},function(l){return l.theme.smallBorderRadius},function(l){return l.theme.fontSm}),V=function(l){var g=l.decode,o=g===void 0?!0:g,n=l.crossOrigin,v=n===void 0?"":n;return function(b){return new Promise(function(y,f){var s=new Image;v&&(s.crossOrigin=v),s.onload=function(){o&&s.decode?s.decode().then(y).catch(f):y()},s.onerror=f,s.src=b})}},p=function(g){return g.filter(function(o){return o})},O=function(g){return Array.isArray(g)?g:[g]},c={},I=function(g,o){var n=!1;return new Promise(function(v,b){var y=function(s){return o(s).then(function(H){n=!0,v(H||s)})};g.reduce(function(f,s){return f.catch(function(){if(!n)return y(s)})},y(g.shift())).catch(b)})};function X(l){var g=l.srcList,o=l.imgPromise,n=o===void 0?V({decode:!0}):o,v=l.useSuspense,b=v===void 0?!0:v,y=(0,t.useState)(!1),f=_()(y,2),s=f[1],H=p(O(g)),U=H.join("");if(H.length===0)return{src:void 0,isLoading:!1,error:null};if(c[U]||(c[U]={promise:I(H,n),cache:"pending",error:null}),c[U].cache==="resolved")return{src:c[U].src,isLoading:!1,error:null};if(c[U].cache==="rejected"){if(b)throw c[U].error;return{isLoading:!1,error:c[U].error,src:void 0}}if(c[U].promise.then(function(ne){c[U]=r()(r()({},c[U]),{},{cache:"resolved",src:ne}),b||s(U)}).catch(function(ne){c[U]=r()(r()({},c[U]),{},{cache:"rejected",error:ne}),b||s(U)}),b)throw c[U].promise;return{isLoading:!0,src:void 0,error:null}}var P=["decode","src","loader","unloader","loaderStyle","unloaderStyle","emptyStyle","placeholderStyle","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense","emptyImage","emptyTip","lazy","lazyRoot","lazyRootMargin","lazyThreshold","lazyPlaceholder"],F=function(g){return g},M=function(g,o,n){return(0,t.useMemo)(function(){var v;return r()(r()({display:"inline-flex",alignItems:"center",justifyContent:"center",background:o==null?void 0:o.tipsBgColor,border:"1px solid ".concat(o==null?void 0:o.borderColor),borderRadius:(v=o==null?void 0:o.smallBorderRadius)!==null&&v!==void 0?v:6,color:o==null?void 0:o.secondaryFontColor,boxSizing:"border-box"},g),n)},[g,o,n])};function w(l,g){var o,n=l.decode,v=n===void 0?!0:n,b=l.src,y=b===void 0?[]:b,f=l.loader,s=f===void 0?null:f,H=l.unloader,U=H===void 0?null:H,ne=l.loaderStyle,ee=l.unloaderStyle,J=l.emptyStyle,te=l.placeholderStyle,se=l.container,re=se===void 0?F:se,ue=l.loaderContainer,me=ue===void 0?F:ue,de=l.unloaderContainer,Me=de===void 0?F:de,_e=l.imgPromise,Ce=l.crossorigin,ye=l.useSuspense,fe=ye===void 0?!1:ye,oe=l.emptyImage,he=oe===void 0?null:oe,ve=l.emptyTip,ge=l.lazy,k=ge===void 0?!1:ge,be=l.lazyRoot,ae=be===void 0?null:be,je=l.lazyRootMargin,le=je===void 0?"0px":je,G=l.lazyThreshold,Y=G===void 0?0:G,pe=l.lazyPlaceholder,ce=pe===void 0?null:pe,A=m()(l,P),D=(0,t.useContext)(j.ThemeContext);_e=_e||V({decode:v,crossOrigin:Ce});var z=(0,t.useState)(!k),Q=_()(z,2),ie=Q[0],Ee=Q[1],Oe=(0,t.useRef)(null),He=!k||ie,We=He?y:[],Be=(0,t.useMemo)(function(){return y?(Array.isArray(y),y.length===0):!0},[y]),Te=(0,t.useMemo)(function(){return{width:A.width,height:A.height}},[A.height,A.width]),Ke=M(Te,D,r()(r()({},A.style),te)),Ne=M(Te,D,ne),De=M(Te,D,r()({background:D==null?void 0:D.tipsBgColor,border:"1px solid ".concat(D==null?void 0:D.dangerColor),color:D==null?void 0:D.dangerColor},ee)),Pe=M(Te,D,J),xe=(0,t.useMemo)(function(){return he||(0,u.jsx)($,{emptyTip:ve,style:Pe})},[he,ve,Pe]),Ue=(0,t.useMemo)(function(){if(y)return Array.isArray(y)?y[0]:y},[y]),$e=r()(r()({},A),{},{loading:(o=A.loading)!==null&&o!==void 0?o:k?"lazy":A.loading}),Le=X({srcList:We,imgPromise:_e,useSuspense:fe}),Ie=Le.src,Ae=Le.isLoading,Ve=Le.error;if((0,t.useEffect)(function(){if(!(!k||ie||!Oe.current)){if(typeof IntersectionObserver=="undefined"){Ee(!0);return}var we=new IntersectionObserver(function(ke){var Ge=_()(ke,1),Se=Ge[0];(Se!=null&&Se.isIntersecting||(Se==null?void 0:Se.intersectionRatio)>0)&&(Ee(!0),we.disconnect())},{root:ae||null,rootMargin:le,threshold:Y});return we.observe(Oe.current),function(){return we.disconnect()}}},[ie,k,ae,le,Y]),k&&!ie){if(Be)return re(xe);var ze=ce!=null?ce:s,Fe=(0,u.jsx)("span",{ref:Oe,style:Ke,children:ze?me(ze):null});return re(Fe)}if(Be&&!Ae)return re(xe);if(Ie)return re((0,u.jsx)("img",r()(r()({src:Ie},$e),{},{ref:g})));if(!fe&&Ae){var Ze=s?(0,u.jsx)("span",{style:Ne,children:s}):null;return me(Ze)}if(!fe&&U){var Re=t.isValidElement(U)?t.cloneElement(U,{errorUrl:Ue}):U,Xe=(0,u.jsx)("span",{style:De,children:Re});return Me(Xe)}return null}var a=(0,t.forwardRef)(w),K=function(g){var o=g.errorTip,n=o===void 0?"load error":o;return(0,u.jsx)(a,r()({loader:(0,u.jsx)(x.Icon.Loading3QuartersOutlined,{spin:!0,size:40}),unloader:(0,u.jsx)(i,{errortip:n})},g))},N=K},73746:function(q,S,e){"use strict";var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(68400),j=e.n(R),u=e(35480),T=e(85893),E=["inputRef","onPressEnter","size"],C,i={small:{height:"28px",paddingHorizontal:"8px",paddingVertical:"4px",fontSize:"13px",borderRadius:"4px"},medium:{height:"32px",paddingHorizontal:"12px",paddingVertical:"6px",fontSize:"14px",borderRadius:"6px"},large:{height:"40px",paddingHorizontal:"16px",paddingVertical:"8px",fontSize:"16px",borderRadius:"8px"}},L=u.default.input(C||(C=j()([`
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
`])),function(d){return d.theme.primaryFontColor},function(d){return d.theme.borderColor},function(d){return d.theme.bgColor},function(d){var m=d.$size||"medium";return i[m].height},function(d){var m=d.$size||"medium";return i[m].paddingHorizontal},function(d){var m=d.$size||"medium";return i[m].paddingHorizontal},function(d){var m=d.$size||"medium";return i[m].paddingVertical},function(d){var m=d.$size||"medium";return i[m].paddingVertical},function(d){var m=d.$size||"medium";return i[m].fontSize},function(d){var m=d.$size||"medium";return i[m].borderRadius},function(d){return d.theme.gray},function(d){return d.theme.accentColor},function(d){return d.theme.accentColor},function(d){return"".concat(d.theme.accentColor,"20")},function(d){return d.theme.tipsBgColor},function(d){return d.theme.gray},function(d){return d.theme.dangerColor},function(d){return"".concat(d.theme.dangerColor,"20")},function(d){return d.theme.tipsBgColor}),_=function(m){var t=m.inputRef,h=m.onPressEnter,$=m.size,W=$===void 0?"medium":$,V=B()(m,E),p=function(c){var I;c.key==="Enter"&&(h==null||h(c.nativeEvent)),(I=V.onKeyDown)===null||I===void 0||I.call(V,c)};return(0,T.jsx)(L,r()(r()({$size:W},V),{},{ref:t,onKeyDown:p}))};S.Z=_},36348:function(q,S,e){"use strict";e.d(S,{g:function(){return u}});var Z=e(97857),r=e.n(Z),x=e(67294),B=e(78798),R=e(58106),j=e(85893),u=function(E){var C=(0,x.useContext)(R.Ni);return(0,j.jsx)(B.Z,r()({color:C.accentColor},E))}},8447:function(q,S,e){"use strict";e.d(S,{Cl:function(){return E.Cl},K4:function(){return E.K4},Kb:function(){return j.K},Ls:function(){return R.L},XG:function(){return E.XG},s3:function(){return _},sN:function(){return E.sN}});var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(79920),j=e(93702),u=e(64106),T=e(66227),E=e(41498),C=e(7935),i=e(85893),L=["open","items","triggerBtnClass","store","style","children","menuButtonProps"],_=function(t){return(t==null?void 0:t.type)==="divider"},d=function(t){var h=t.open,$=t.items,W=t.triggerBtnClass,V=t.store,p=t.style,O=t.children,c=t.menuButtonProps,I=c===void 0?{}:c,X=B()(t,L),P=function F(M){return M.map(function(w,a){var K;if(_(w))return(0,i.jsx)(E.Cl,{},a);var N=w.value;return w.children&&((K=w.children)===null||K===void 0?void 0:K.length)>0?(0,i.jsxs)(j.K,{children:[(0,i.jsxs)(E.sN,{render:(0,i.jsx)(u.j,{}),children:[(0,i.jsx)(E.K4,{}),(0,i.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,i.jsx)("span",{className:"menu-shortcut",children:w.shortcut}),(0,i.jsx)(T.C,{})]}),(0,i.jsx)(E.XG,{children:F(w.children)})]},N):(0,i.jsxs)(E.sN,{onClick:function(){w.handler&&w.handler()},children:[(0,i.jsx)(E.K4,{children:w.checked?(0,i.jsx)("i",{className:"ri-check-line"}):null}),(0,i.jsx)("span",{className:"menu-label",children:w.label}),w.shortcut&&(0,i.jsx)("span",{className:"menu-shortcut",children:w.shortcut})]},N)})};return V?(0,i.jsx)(E.XG,r()(r()({style:p,store:V},X),{},{children:P($)})):(0,i.jsxs)(j.K,{children:[O?(0,i.jsx)(u.j,{render:function(M){return(0,i.jsx)(C.Z,r()(r()({},M),I))},className:W,children:O}):null,(0,i.jsx)(E.XG,r()(r()({style:p,open:h},X),{},{children:P($)}))]})};S.ZP=d},41498:function(q,S,e){"use strict";e.d(S,{Cl:function(){return m},K4:function(){return _},XG:function(){return d},sN:function(){return L}});var Z=e(68400),r=e.n(Z),x=e(35480),B=e(68258),R=e(76633),j=e(26484),u=e(58106),T,E,C,i,L=(0,x.default)(B.s)(T||(T=r()([`
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
`])),function(t){return t.theme.smallBorderRadius},function(t){return t.theme.spaceXs},function(t){return t.theme.contextMenuBgColorHover},function(t){return(0,u._j)(t.theme.contextMenuBgColorHover,.2)}),_=x.default.div(E||(E=r()([`
  width: 14px;
  font-weight: bold;
  line-height: 14px;
`]))),d=(0,x.default)(R.v)(C||(C=r()([`
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
`])),function(t){return t.theme.smallBorderRadius},function(t){return t.theme.borderColor},function(t){return t.theme.contextMenuBgColor},function(t){return t.theme.spaceXs},function(t){return t.theme.primaryFontColor},function(t){return t.theme.fontXs},function(t){return t.theme.spaceXs},function(t){return t.theme.secondaryFontColor},function(t){return t.theme.fontXs}),m=(0,x.default)(j.C)(i||(i=r()([`
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
`])),function(t){return t.theme.contextMenuBgColor},function(t){return t.theme.contextMenuSeparatorColor},function(t){return t.theme.contextMenuSeparatorColor})},85682:function(q,S,e){"use strict";e.d(S,{Z:function(){return X},p:function(){return R.p}});var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(51712),j=e(55683),u=e(23851),T=e(67294),E=e(68135),C=e(68400),i=e.n(C),L=e(22786),_=e(43525),d=e(17355),m=e(35480),t,h,$,W=(0,m.default)(L.J)(t||(t=i()([`
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
`])),function(P){return P.theme.smallBorderRadius},function(P){return P.theme.borderColor},function(P){return P.theme.bgColor},function(P){return P.theme.spaceXs},function(P){return P.theme.primaryFontColor}),V=(0,m.default)(_.Q)(h||(h=i()([`
  font-size: 18px !important;
  stroke: `,` !important;
  fill: `,` !important;
  stroke-width: 4 !important;
`])),function(P){return P.theme.borderColor},function(P){return P.theme.bgColor}),p=(0,m.default)(d.b)($||($=i()([`
  font-size: `,`;
  font-weight: 'bold';
  margin: `,` 0;
`])),function(P){return P.theme.fontBase},function(P){return P.theme.spaceXs}),O=e(85893),c=["arrow","title","toggleOnClick","children","customContent","placement","onStoreChange","boxProps"],I=function(F){var M=F.arrow,w=M===void 0?!0:M,a=F.title,K=F.toggleOnClick,N=K===void 0?!0:K,l=F.children,g=F.customContent,o=F.placement,n=F.onStoreChange,v=F.boxProps,b=v===void 0?{}:v,y=B()(F,c),f=(0,R.p)();return(0,T.useEffect)(function(){n&&n(f)},[f,n]),(0,O.jsxs)(j.H,{store:f,placement:o,children:[(0,O.jsx)(u.x,{toggleOnClick:N,render:function(H){return(0,O.jsx)(E.x,r()(r()({style:{display:"inline-block"}},H),b))},children:l}),!g&&!a?null:(0,O.jsxs)(W,r()(r()({render:function(H){return(0,O.jsx)(E.x,r()({},H))}},y),{},{children:[w?(0,O.jsx)(V,{}):null,a?(0,O.jsx)(p,{children:a}):null,g]}))]})},X=I},5258:function(q,S,e){"use strict";e.d(S,{z:function(){return L}});var Z=e(67294),r=e(68400),x=e.n(r),B=e(35480),R,j,u,T=B.default.div(R||(R=x()([`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  align-items: center;
`]))),E=B.default.div(j||(j=x()([`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 12px;
`]))),C=B.default.kbd(u||(u=x()([`
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
`])),function(_){var d=_.theme;return d.bgColor},function(_){var d=_.theme;return d.borderColor},function(_){var d=_.theme;return d.hoverColor}),i=e(85893),L=function(d){var m=d.dataSource,t=m===void 0?[]:m;return(0,i.jsx)(T,{children:t.map(function(h,$){return(0,i.jsxs)(E,{children:[h.icon&&(0,i.jsx)("span",{className:"shortcut-icon",children:h.icon}),(0,i.jsx)(C,{children:h.keybindings.map(function(W,V){return(0,i.jsxs)(i.Fragment,{children:[W.key,V<h.keybindings.length-1&&(0,i.jsx)("span",{className:"shortcut-separator",children:"+"})]})})}),h.desc&&(0,i.jsx)("span",{className:"shortcut-desc",children:h.desc})]},$)})})}},53291:function(q,S,e){"use strict";var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(67294),j=e(85893),u=["children","size","direction","align","split","wrap","style"],T=function(i){if(typeof i=="number")return i;switch(i){case"small":return 8;case"middle":return 16;case"large":return 24;default:return 8}},E=function(i){var L,_=i.children,d=i.size,m=d===void 0?"small":d,t=i.direction,h=t===void 0?"horizontal":t,$=i.align,W=i.split,V=i.wrap,p=V===void 0?!1:V,O=i.style,c=B()(i,u),I=R.Children.toArray(_).filter(function(K){return K!=null});if(I.length===0)return null;if(I.length===1&&!W)return(0,j.jsx)(j.Fragment,{children:I[0]});var X=$||(h==="horizontal"?"center":void 0),P=Array.isArray(m)?m:[m,m],F=T(P[0]),M=T((L=P[1])!==null&&L!==void 0?L:P[0]),w=r()({display:"flex",flexDirection:h==="vertical"?"column":"row",flexWrap:p&&h==="horizontal"?"wrap":"nowrap",alignItems:X},O),a=function(N){var l={};return h==="vertical"?N<I.length-1&&(l.marginBottom="".concat(M,"px")):(N<I.length-1&&(l.marginRight="".concat(F,"px")),p&&(l.marginBottom="".concat(M,"px"))),l};return(0,j.jsx)("div",r()(r()({style:w},c),{},{children:I.map(function(K,N){var l=K.key||"space-item-".concat(N),g=[];return N>0&&W&&g.push((0,j.jsx)("span",{style:h==="vertical"?{marginBottom:"".concat(M,"px")}:{marginRight:"".concat(F,"px")},children:W},"split-".concat(N))),g.push((0,j.jsx)("div",{style:a(N),children:K},l)),g})}))};S.Z=E},33867:function(q,S,e){"use strict";e.d(S,{o:function(){return w}});var Z=e(5574),r=e.n(Z),x=e(67294),B=e(64599),R=e.n(B),j=e(19632),u=e.n(j),T=e(12444),E=e.n(T),C=e(72004),i=e.n(C),L=e(9783),_=e.n(L),d=function(){function a(K){E()(this,a),_()(this,"title",void 0),_()(this,"children",void 0),_()(this,"parent",void 0),_()(this,"offsetCacheVersion",void 0),_()(this,"cachedOffsetTop",void 0),_()(this,"htmlNode",void 0),_()(this,"depth",void 0),_()(this,"id",void 0),_()(this,"key",void 0),_()(this,"chapter",void 0),_()(this,"h",void 0),_()(this,"onClick",void 0);var N=K.depth,l=K.key,g=K.offsetCacheVersion,o=K.chapter,n=K.h,v=n.htmlNode,b=n.value,y=n.id,f=n.onClick;this.htmlNode=v,this.title=b,this.parent=null,this.children=[],this.depth=N,this.id=y,this.key=l,this.cachedOffsetTop=null,this.offsetCacheVersion=g-1,this.chapter=o,this.h=n,this.onClick=f}return i()(a,[{key:"lazyLoad",value:function(N){N!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=N))}}]),a}(),m=function(a){return a[a.Continue=1]="Continue",a[a.NoChildren=2]="NoChildren",a[a.Stop=3]="Stop",a}({}),t=function(){function a(K){E()(this,a),_()(this,"root",void 0),_()(this,"offsetCacheVersion",void 0);var N=Math.min.apply(Math,u()(K.map(function(n){return n.depth}))),l=0,g=K.map(function(n,v){return new d({h:n,depth:n.depth-N,key:v,offsetCacheVersion:l,chapter:"0"})}),o=[new d({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:l,chapter:"0"})];g.forEach(function(n){for(;o.length&&o[o.length-1].depth>=n.depth;)o.pop();o[o.length-1].children.push(n),n.parent=o[o.length-1];var v=n.parent.children.filter(function(y){return y.depth===n.depth}),b=n.depth-Math.max(n.parent.depth,0);if(b===0)n.chapter=String(v.length);else if(b===1)n.chapter="".concat(n.parent.chapter,".").concat(v.length);else for(n.chapter=n.parent.chapter;b>=1;)n.chapter+=".",b===1?n.chapter+=v.length:n.chapter+=0,b--;o.push(n)}),this.root=o[0],this.offsetCacheVersion=l}return i()(a,[{key:"getRoot",value:function(){return this.root}},{key:"markOffsetCacheStale",value:function(){this.offsetCacheVersion++}},{key:"traverseInPreorder",value:function(N){var l=this,g=function(v){var b=R()(v.children),y;try{for(b.s();!(y=b.n()).done;){var f=y.value;if(o(f)===m.Stop)return m.Stop}}catch(s){b.e(s)}finally{b.f()}return m.Continue},o=function(v){v.lazyLoad(l.offsetCacheVersion);var b=N(v);return b!==m.Continue?b:g(v)};g(this.root)}}]),a}(),h=e(68400),$=e.n(h),W=e(35480),V=e(58106),p,O,c,I=W.default.div(p||(p=$()([`
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
`]))),X=W.default.a(O||(O=$()([`
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
`])),function(a){return a.active?a.theme.primaryFontColor:a.theme.labelFontColor},function(a){return a.active?"600":"400"},function(a){return a.theme.spaceXs},function(a){return a.active?a.theme.accentColor:(0,V._j)(a.theme.accentColor,.4)}),P=1,F=W.default.li(c||(c=$()([`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: `,`;
  &:hover {
    color: #fff;
  }
`])),function(a){return"".concat(a.depth*P,"em")}),M=e(85893),w=(0,x.forwardRef)(function(a,K){var N,l=a.headingsData,g=a.containerEl,o=a.scrollEl,n=a.autoExpand,v=n===void 0?!1:n,b=a.Empty,y=b===void 0?null:b,f=(0,x.useState)(l),s=r()(f,2),H=s[0],U=s[1],ne=(0,x.useState)(),ee=r()(ne,2),J=ee[0],te=ee[1],se=(0,x.useState)(),re=r()(se,2),ue=re[0],me=re[1],de=(0,x.useState)(),Me=r()(de,2),_e=Me[0],Ce=Me[1],ye=(0,x.useState)(),fe=r()(ye,2),oe=fe[0],he=fe[1],ve=(0,x.useState)(o),ge=r()(ve,2),k=ge[0],be=ge[1],ae=(0,x.useCallback)(function(A){if(A){var D=A.querySelectorAll("h1, h2, h3, h4, h5, h6"),z=[];D.forEach(function(ie,Ee){var Oe={depth:parseInt(ie.tagName[1],10),value:ie.innerText,htmlNode:ie,id:ie.id||"heading-".concat(Ee)};z.push(Oe)}),U(z);var Q=new t(z);return te(Q),Q}},[]),je=(0,x.useCallback)(function(A){var D=A||g;if(!(!D&&!H)){if(H){var z=new t(H);te(z)}else if(D)ae(D);else throw new Error("No headings and containerEl found");return he(D),D}},[g,H,ae]),le=(0,x.useCallback)(function(){if(!J||!k)return null;var A=10,D=k.scrollTop+A,z=null,Q=null;return J.traverseInPreorder(function(ie){var Ee=Math.max((ie.cachedOffsetTop||0)-((oe==null?void 0:oe.offsetTop)||0),0);return D>Ee?(Q=ie,m.Continue):(z=Q,m.Stop)}),z===null&&Q!==null&&oe?Q:z},[J,oe,k]),G=(0,x.useCallback)(function(A){if(J){var D=A,z={},Q=J.getRoot();if(Q){for(z[Q.key]=!0;D!==null;)z[D.key]=!0,D=D.parent;return z}}},[J]),Y=(0,x.useCallback)(function(){var A=le();if(A&&A!==ue){var D=G(A);me(A),Ce(D)}},[ue,G,le]),pe=function(D,z){D.preventDefault();var Q=(z.cachedOffsetTop||0)-((oe==null?void 0:oe.offsetTop)||0);k==null||k.scrollTo(0,Q),me(z),Ce(G(z))};(0,x.useEffect)(function(){return J?Y():je(),k==null||k.addEventListener("scroll",Y),function(){k==null||k.removeEventListener("scroll",Y)}},[J,k,je,Y]),(0,x.useImperativeHandle)(K,function(){return{refresh:function(D){var z=D.newContainer,Q=D.newScroll;ae(z||oe),he(z),be(Q)},refreshByHeadings:function(D){var z=D.newHeadings;U(z),te(new t(z)),be(void 0),he(void 0)}}});var ce=function(){if(J){var D=[];return J.traverseInPreorder(function(z){var Q,ie=k?!!(ue&&ue.key===z.key):!0;return D.push((0,M.jsx)(F,{depth:z.depth,active:ie,children:(0,M.jsxs)(X,{href:"#".concat(z.id),active:ie,depth:z.depth,onClick:function(Oe){Oe.preventDefault(),z.onClick?z.onClick(z.h):pe(Oe,z)},children:[(0,M.jsx)("span",{className:"toc-link__chapter",children:z.chapter}),z.title]})},z.key)),!v||_e!=null&&_e[z.key]||((Q=z.parent)===null||Q===void 0?void 0:Q.key)===-1?m.Continue:m.NoChildren}),D}};return(0,M.jsx)(I,{children:(0,M.jsx)("div",{className:"toc-list",children:(J==null||(N=J.getRoot())===null||N===void 0||(N=N.children)===null||N===void 0?void 0:N.length)===0?y:(0,M.jsx)("nav",{children:(0,M.jsx)("ul",{children:ce()})})})})})},23961:function(q,S,e){"use strict";e.r(S),e.d(S,{Toc:function(){return Z.o}});var Z=e(33867),r=e(12626),x=e.n(r),B={};for(var R in r)["default","Toc"].indexOf(R)<0&&(B[R]=function(j){return r[j]}.bind(0,R));e.d(S,B)},12626:function(){},58106:function(q,S,e){"use strict";e.d(S,{Ni:function(){return m},f6:function(){return t},y0:function(){return $},$_:function(){return W},_j:function(){return T},Wb:function(){return V},$n:function(){return u}});var Z=e(97857),r=e.n(Z),x={primaryFontColor:"#c8d1d9",secondaryFontColor:"#999999",labelFontColor:"rgba(255, 255, 255, 0.5)",accentColor:"#016ab3",borderColor:"#363b41",bgColor:"#151515",hoverColor:"#1f2225",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#0e1419",successColor:"#00c853",boxShadowColor:"rgba(255, 255, 255, 0.04)",contextMenuBgColor:"#18191B",contextMenuBgColorHover:"#2D3134",contextMenuSeparatorColor:"#919191",buttonBgColor:"#21262c",tooltipBgColor:"#43414A",dialogBgColor:"#151515",dialogBackdropColor:"#00000099",errorTipColor:"#5f5f5f"},B={primaryFontColor:"#000000",secondaryFontColor:"#5f5f5f",labelFontColor:"#9ca3af",accentColor:"#007acc",borderColor:"#d7d7dc",bgColor:"#fdfdfd",hoverColor:"#d7d7dc",warnColor:"#e2b340",dangerColor:"#dc2626",tipsBgColor:"#f6f7f9",successColor:"#00c853",boxShadowColor:"rgba(0, 0, 0, 0.08)",contextMenuBgColor:"#FFFFFF",contextMenuBgColorHover:"#E8E8EC",contextMenuSeparatorColor:"#ffffff66",buttonBgColor:"#f6f7f9",tooltipBgColor:"#d7d7dc",dialogBgColor:"#f6f7f9",dialogBackdropColor:"#00000066",errorTipColor:"#5f5f5f"},R=e(6767),j=e.n(R),u=function(O,c){return j()(O).lighten(c).string()},T=function(O,c){return j()(O).darken(c).string()},E=e(67294),C=e(9361),i=e(35480),L=e(94512),_=e(21539),d=e(85893),m=(0,E.createContext)({}),t=function(O){var c=O.theme,I=O.children,X=O.antdThemeConfig,P=X===void 0?{}:X,F=(c==null?void 0:c.mode)||"light",M=F==="dark"?W.styledConstants:V.styledConstants,w=c!=null&&c.token?r()(r()({},M),c.token):M;return(0,d.jsx)(i.StyleSheetManager,{shouldForwardProp:h,children:(0,d.jsx)(i.ThemeProvider,{theme:w,children:(0,d.jsx)(L.ZP,{theme:r()({token:{colorPrimary:w.accentColor},algorithm:F==="dark"?C.Z.darkAlgorithm:C.Z.defaultAlgorithm,zeroRuntime:!0},P),children:(0,d.jsx)(m.Provider,{value:w,children:I})})})})};function h(p,O){return typeof O=="string"?(0,_.Z)(p):!0}var $={lineHeightBase:"1.6",titleBarHeight:"30px",titleBarControlBtnWidth:"50px",fontH1:"28px",fontH2:"26px",fontH3:"24px",fontH4:"22px",fontH5:"20px",fontH6:"18px",fontBase:"15px",fontSm:"14px",fontXs:"13px",spaceXXs:"2px",spaceXs:"4px",spaceSm:"8px",spaceBase:"10px",spaceL:"12px",spaceXl:"16px",smallBorderRadius:"4px",midBorderRadius:"8px",bigBorderRadius:"12px",black:"#74757D",white:"#E0E0E0",gray:"#C0C0C0",blue:"#0359D0",fontFamily:"'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",codemirrorFontFamily:"'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace"},W={styledConstants:r()(r()({},$),x)},V={styledConstants:r()(r()({},$),B)}},24909:function(q,S,e){"use strict";e.d(S,{A:function(){return r.Am},T:function(){return R}});var Z=e(67294),r=e(64712),x=e(35480),B=e(85893),R=function(){var u=(0,Z.useContext)(x.ThemeContext);return(0,B.jsx)(r.x7,{expand:!1,closeButton:!0,toastOptions:{style:{borderColor:u==null?void 0:u.borderColor,borderRadius:u==null?void 0:u.smallBorderRadius,color:u==null?void 0:u.primaryFontColor,background:u==null?void 0:u.bgColor},duration:5e3}})}},35307:function(q,S,e){"use strict";e.d(S,{Z:function(){return c}});var Z=e(97857),r=e.n(Z),x=e(13769),B=e.n(x),R=e(68400),j=e.n(R),u=e(67294),T=e(35480),E=e(56450),C=e(96518),i=e(96802),L,_,d=T.default.div.attrs(function(I){return I})(L||(L=j()([`
  visibility: visible;
  opacity: 1;

  &[data-enter] {
    visibility: visible;
    opacity: 1;
  }
`]))),m=T.default.div(_||(_=j()([`
  display: inline-block;
`]))),t=e(68135),h=e(85893),$=["children","title","fixed","placement","open","popover"],W=["popover"],V,p=T.default.div(V||(V=j()([`
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
`])),function(I){return I.theme.borderColor},function(I){return I.theme.tooltipBgColor},function(I){return I.theme.fontXs},function(I){return I.theme.primaryFontColor}),O=function(X){var P,F=X.children,M=X.title,w=X.fixed,a=w===void 0?!1:w,K=X.placement,N=K===void 0?a?"top":"bottom":K,l=X.open,g=X.popover,o=B()(X,$),n=F!=null&&(P=F.props)!==null&&P!==void 0&&P.disabled?u.Children.only((0,h.jsx)(m,{children:F})):F;return M?(0,h.jsxs)(E.p,{placement:N,open:l,children:[(0,h.jsx)(C.e,{render:n}),(0,h.jsx)(i.u,{render:function(b){var y=b.popover,f=B()(b,W);return(0,h.jsx)(t.x,r()(r()({style:{zIndex:99}},f),o))},children:(0,h.jsx)(p,{children:M})})]}):F},c=O},31081:function(q,S,e){"use strict";e.r(S),e.d(S,{Ariakit:function(){return x},Button:function(){return B.Z},CommandDialog:function(){return R.Z},Dialog:function(){return j.Z},Dropdown:function(){return u.Z},Icon:function(){return r},Image:function(){return T.Z},Input:function(){return E.Z},Loading:function(){return d.g},Menu:function(){return C.ZP},MenuItem:function(){return C.sN},MenuItemCheckIcon:function(){return C.K4},MenuProvider:function(){return C.Kb},MenuSeparator:function(){return C.Cl},MenuWrapper:function(){return C.XG},Notifications:function(){return V.T},Popover:function(){return i.Z},Shortcut:function(){return m.z},Space:function(){return L.Z},Spinners:function(){return Z},ThemeContext:function(){return W.Ni},ThemeProvider:function(){return W.f6},Tooltip:function(){return _.Z},common:function(){return W.y0},darkTheme:function(){return W.$_},darken:function(){return W._j},isDivider:function(){return C.s3},lightTheme:function(){return W.Wb},lighten:function(){return W.$n},toast:function(){return V.A},useMenuStore:function(){return C.Ls},usePopoverStore:function(){return i.p}});var Z=e(48098),r=e(74139),x=e(68314),B=e(7935),R=e(80541),j=e(22098),u=e(93829),T=e(20207),E=e(73746),C=e(8447),i=e(85682),L=e(53291),_=e(35307),d=e(36348),m=e(5258),t=e(23961),h={};for(var $ in t)["default","Button","CommandDialog","Dialog","Dropdown","Image","Input","Menu","Popover","Space","Tooltip","Ariakit","Icon","Spinners","Loading","MenuItem","MenuItemCheckIcon","MenuProvider","MenuSeparator","MenuWrapper","isDivider","useMenuStore","usePopoverStore","Shortcut"].indexOf($)<0&&(h[$]=function(p){return t[p]}.bind(0,$));e.d(S,h);var W=e(58106),V=e(24909)}}]);
