"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[470],{67300:function(r,e,n){var s;n.r(e),n.d(e,{demos:function(){return i}});var o=n(15009),a=n.n(o),l=n(99289),d=n.n(l),_=n(67294),O=n(88782),m=n(31081),i={"dialog-demo-basic":{component:_.memo(_.lazy(function(){return n.e(286).then(n.bind(n,50027))})),asset:{type:"BLOCK",id:"dialog-demo-basic",refAtomIds:["Dialog"],dependencies:{"index.tsx":{type:"FILE",value:n(86542).Z},react:{type:"NPM",value:"18.3.1"},zens:{type:"NPM",value:"0.1.4"}},entry:"index.tsx"},context:{react:s||(s=n.t(_,2)),zens:m},renderOpts:{compile:function(){var E=d()(a()().mark(function p(){var u,D=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(335).then(n.bind(n,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,D));case 3:case"end":return t.stop()}},p)}));function c(){return E.apply(this,arguments)}return c}()}}}},50158:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});var s=n(88782);const o=[{value:"\u5F39\u7A97\u3002",paraId:0,tocIndex:0}]},86542:function(r,e){e.Z=`import { useState } from 'react';
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
