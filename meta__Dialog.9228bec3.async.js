"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[4470],{67300:function(u,n,e){var s;e.r(n),e.d(n,{demos:function(){return i}});var l=e(15009),r=e.n(l),d=e(99289),m=e.n(d),o=e(67294),_=e(31081),i={"dialog-demo-basic":{component:o.memo(o.lazy(function(){return e.e(286).then(e.bind(e,50027))})),asset:{type:"BLOCK",id:"dialog-demo-basic",refAtomIds:["Dialog"],dependencies:{"index.tsx":{type:"FILE",value:e(86542).Z},react:{type:"NPM",value:"19.2.0"},zens:{type:"NPM",value:"0.1.15"}},entry:"index.tsx"},context:{react:s||(s=e.t(o,2)),zens:_},renderOpts:{compile:function(){var p=m()(r()().mark(function E(){var a,f=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,f));case 3:case"end":return t.stop()}},E)}));function c(){return p.apply(this,arguments)}return c}()}}}},50158:function(u,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u5F39\u7A97\u3002",paraId:0,tocIndex:0}]},86542:function(u,n){n.Z=`import { useState } from 'react';
import { Button, Dialog } from 'zens';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog
        title="\u6807\u9898"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>\u5185\u5BB9</div>
      </Dialog>
      <Button onClick={() => setOpen(true)}>\u6253\u5F00</Button>
    </div>
  );
};
`}}]);
