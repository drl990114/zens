"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[7311],{76738:function(t,e,n){n.r(e),n.d(e,{demos:function(){return I}});var d=n(15009),o=n.n(d),u=n(99289),c=n.n(u),s=n(67294),l=n(74139),i=n(31081),I={"shortcut-demo-basic":{component:s.memo(s.lazy(function(){return n.e(9107).then(n.bind(n,1755))})),asset:{type:"BLOCK",id:"shortcut-demo-basic",refAtomIds:["Shortcut"],dependencies:{"index.tsx":{type:"FILE",value:n(36331).Z},"@ant-design/icons":{type:"NPM",value:"6.1.0"},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{"@ant-design/icons":l,zens:i},renderOpts:{compile:function(){var m=c()(o()().mark(function v(){var r,_=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(250).then(n.bind(n,90250));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,_));case 3:case"end":return a.stop()}},v)}));function p(){return m.apply(this,arguments)}return p}()}}}},66086:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"\u7528\u4E8E\u5C55\u793A\u952E\u76D8\u5FEB\u6377\u952E\u7EC4\u5408\u7684\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5728\u754C\u9762\u4E0A\u76F4\u89C2\u5730\u5C55\u793A\u952E\u76D8\u5FEB\u6377\u952E\u64CD\u4F5C\u65F6",paraId:1,tocIndex:1},{value:"\u5728\u5E2E\u52A9\u6587\u6863\u3001\u83DC\u5355\u6216\u64CD\u4F5C\u63D0\u793A\u4E2D\u663E\u793A\u5FEB\u6377\u952E",paraId:1,tocIndex:1},{value:"\u4E3A\u7528\u6237\u63D0\u4F9B\u64CD\u4F5C\u6307\u5357\u548C\u5FEB\u6377\u65B9\u5F0F\u63D0\u793A",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"dataSource",paraId:2,tocIndex:5},{value:"\u5FEB\u6377\u952E\u6570\u636E\u6570\u7EC4",paraId:2,tocIndex:5},{value:"Shortcut[]",paraId:2,tocIndex:5},{value:"\u65E0",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"keybindings",paraId:3,tocIndex:6},{value:"\u5FEB\u6377\u952E\u6309\u952E\u6570\u7EC4",paraId:3,tocIndex:6},{value:"{ key: React.ReactNode }[]",paraId:3,tocIndex:6},{value:"\u65E0",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u53EF\u9009\u7684\u5FEB\u6377\u952E\u56FE\u6807",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:"\u65E0",paraId:3,tocIndex:6},{value:"desc",paraId:3,tocIndex:6},{value:"\u5FEB\u6377\u952E\u63CF\u8FF0\u6587\u672C",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u65E0",paraId:3,tocIndex:6},{value:"\u5EFA\u8BAE\u4FDD\u6301\u5FEB\u6377\u952E\u7684\u7B80\u6D01\u6027\uFF0C\u907F\u514D\u8FC7\u4E8E\u590D\u6742\u7684\u7EC4\u5408",paraId:4,tocIndex:7},{value:"\u5BF9\u4E8E Mac \u548C Windows \u4E0D\u540C\u5E73\u53F0\u7684\u5FEB\u6377\u952E\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u5E73\u53F0\u7279\u5B9A\u7684\u5C55\u793A",paraId:4,tocIndex:7},{value:"\u53EF\u4EE5\u7ED3\u5408\u63D0\u793A\u7EC4\u4EF6\uFF08\u5982 Tooltip\uFF09\u4F7F\u7528\uFF0C\u63D0\u4F9B\u66F4\u8BE6\u7EC6\u7684\u5FEB\u6377\u952E\u8BF4\u660E",paraId:4,tocIndex:7}]},36331:function(t,e){e.Z=`import { MacCommandFilled } from '@ant-design/icons';
import { Shortcut } from 'zens';

export default () => {
  const basicShortcuts = [
    { keybindings: [{ key: 'Ctrl' }], desc: 'Control' },
    { keybindings: [{ key: 'K' }], desc: '\u6253\u5F00\u547D\u4EE4\u9762\u677F' },
  ];

  const multipleShortcuts = [
    { keybindings: [{ key: 'Cmd' }, { key: 'K' }], desc: 'Command' },
    { keybindings: [{ key: 'Shift' }], desc: 'Shift' },
    { keybindings: [{ key: 'P' }], desc: '\u6253\u5F00\u547D\u4EE4\u9762\u677F' },
  ];

  const withIcons = [
    { keybindings: [{ key: 'Cmd' }], icon: <MacCommandFilled />, desc: 'Command' },
    { keybindings: [{ key: 'Space' }], desc: '\u7A7A\u683C' },
  ];

  const complexCombinations = [
    { keybindings: [{ key: '\u2318' }, { key: 'Shift' }, { key: 'P' }], desc: '\u663E\u793A\u6240\u6709\u547D\u4EE4' },
    { keybindings: [{ key: 'Ctrl' }, { key: 'Alt' }, { key: 'Del' }], desc: '\u4EFB\u52A1\u7BA1\u7406\u5668' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h3>\u57FA\u672C\u5FEB\u6377\u952E</h3>
        <Shortcut dataSource={basicShortcuts} />
      </div>

      <div>
        <h3>\u7EC4\u5408\u952E</h3>
        <Shortcut dataSource={multipleShortcuts} />
      </div>

      <div>
        <h3>\u5E26\u56FE\u6807\u5FEB\u6377\u952E</h3>
        <Shortcut dataSource={withIcons} />
      </div>

      <div>
        <h3>\u590D\u6742\u7EC4\u5408\u952E</h3>
        <Shortcut dataSource={complexCombinations} />
      </div>
    </div>
  );
}
`}}]);
