"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[826],{36938:function(o,t,n){n.r(t),n.d(t,{demos:function(){return d}});var a=n(15009),e=n.n(a),_=n(99289),l=n.n(_),r=n(67294),p=n(2279),m=n(31081),d={"toast-demo-basic":{component:r.memo(r.lazy(function(){return n.e(81).then(n.bind(n,84607))})),asset:{type:"BLOCK",id:"toast-demo-basic",refAtomIds:["Toast"],dependencies:{"index.tsx":{type:"FILE",value:n(29622).Z},zens:{type:"NPM",value:"0.0.41"}},entry:"index.tsx"},context:{zens:m},renderOpts:{compile:function(){var c=l()(e()().mark(function E(){var u,T=arguments;return e()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(335).then(n.bind(n,37335));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,T));case 3:case"end":return s.stop()}},E)}));function i(){return c.apply(this,arguments)}return i}()}}}},58254:function(o,t,n){n.r(t),n.d(t,{texts:function(){return e}});var a=n(2279);const e=[{value:"\u63D0\u793A",paraId:0,tocIndex:0}]},29622:function(o,t){t.Z=`import { Button, Space, toast } from 'zens';

export default () => {
  const normalToast = () => {
    toast('normal toast');
  };

  const errorToast = () => {
    toast.error('error toast');
  };

  const longtextToast = () => {
    toast('longtext toast'.repeat(20), {
      duration: 10000,
    });
  };

  const successToast = () => {
    toast.success('success toast');
  };

  const promiseToast = () => {
    let a = 'qweq';
    const n = toast.loading('loading');

    setTimeout(() => {
      toast.dismiss(n);
      toast.success('success', {
        action: {
          label: 'action',
          onClick: () => {
            toast('action');
          },
        },
      });
    }, 2000);
  };

  return (
    <Space>
      <Button onClick={normalToast}>toast</Button>
      <Button onClick={errorToast}>error toast</Button>
      <Button onClick={longtextToast}>longtext</Button>
      <Button onClick={successToast}>success toast</Button>
      <Button onClick={promiseToast}>promise toast</Button>
    </Space>
  );
};
`}}]);
