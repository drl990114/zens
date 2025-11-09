"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[2826],{36938:function(o,t,n){n.r(t),n.d(t,{demos:function(){return c}});var s=n(15009),a=n.n(s),l=n(99289),m=n.n(l),r=n(67294),d=n(31081),c={"toast-demo-basic":{component:r.memo(r.lazy(function(){return n.e(3081).then(n.bind(n,84607))})),asset:{type:"BLOCK",id:"toast-demo-basic",refAtomIds:["Toast"],dependencies:{"index.tsx":{type:"FILE",value:n(29622).Z},zens:{type:"NPM",value:"0.1.11"}},entry:"index.tsx"},context:{zens:d},renderOpts:{compile:function(){var i=m()(a()().mark(function p(){var u,T=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,T));case 3:case"end":return e.stop()}},p)}));function _(){return i.apply(this,arguments)}return _}()}}}},58254:function(o,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"\u63D0\u793A",paraId:0,tocIndex:0}]},29622:function(o,t){t.Z=`import { Button, Space, toast } from 'zens';

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
