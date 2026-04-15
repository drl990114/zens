"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[370],{51405:function(u,t,n){var i;n.r(t),n.d(t,{demos:function(){return g}});var h=n(15009),o=n.n(h),y=n(99289),p=n.n(y),r=n(67294),c=n(31081),g={"image-demo-basic":{component:r.memo(r.lazy(function(){return n.e(8682).then(n.bind(n,92092))})),asset:{type:"BLOCK",id:"image-demo-basic",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:n(13217).Z},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{zens:c},renderOpts:{compile:function(){var a=p()(o()().mark(function d(){var s,l=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}},"image-demo-empty":{component:r.memo(r.lazy(function(){return n.e(8682).then(n.bind(n,60048))})),asset:{type:"BLOCK",id:"image-demo-empty",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:n(53619).Z},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{zens:c},renderOpts:{compile:function(){var a=p()(o()().mark(function d(){var s,l=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}},"image-demo-error":{component:r.memo(r.lazy(function(){return n.e(8682).then(n.bind(n,69700))})),asset:{type:"BLOCK",id:"image-demo-error",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:n(33672).Z},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{zens:c},renderOpts:{compile:function(){var a=p()(o()().mark(function d(){var s,l=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}},"image-demo-lazy":{component:r.memo(r.lazy(function(){return n.e(8682).then(n.bind(n,99491))})),asset:{type:"BLOCK",id:"image-demo-lazy",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:n(94528).Z},react:{type:"NPM",value:"19.2.0"},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{react:i||(i=n.t(r,2)),zens:c},renderOpts:{compile:function(){var a=p()(o()().mark(function d(){var s,l=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}}}},42131:function(u,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u56FE\u7247",paraId:0,tocIndex:0}]},13217:function(u,t){t.Z=`import { Image } from 'zens';

export default () => {
  return (
    <Image
      width={300}
      height={200}
      src="https://picsum.photos/300/200"
    />
  );
};
`},53619:function(u,t){t.Z=`import { Image } from 'zens';

export default () => {
  return (
    <Image
      width={300}
      height={200}
      src=""
    />
  );
};
`},33672:function(u,t){t.Z=`import { Image } from 'zens';

export default () => {
  return (
    <Image
      width={300}
      height={200}
      src="123"
    />
  );
};
`},94528:function(u,t){t.Z=`import { useRef } from 'react';

import { Image } from 'zens';

const sources = Array.from({ length: 12 }).map((_, index) => {
  const width = 240;
  const height = 160;
  const seed = index + 10;
  return \`https://picsum.photos/seed/\${seed}/\${width}/\${height}\`;
});

export default () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: 320,
        overflow: 'auto',
        border: '1px solid #eee',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {sources.map((src, index) => (
        <Image
          key={src}
          width={240}
          height={160}
          src={src}
          lazy
          lazyRoot={containerRef.current}
          lazyRootMargin="120px"
          lazyThreshold={0}
          lazyPlaceholder={
            <div
              style={{
                width: 240,
                height: 160,
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: 12,
              }}
            >
              Loading {index + 1}
            </div>
          }
        />
      ))}
    </div>
  );
};
`}}]);
