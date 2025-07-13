"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[501],{6414:function(r,t,n){var l;n.r(t),n.d(t,{demos:function(){return M}});var a=n(15009),u=n.n(a),_=n(99289),h=n.n(_),s=n(67294),y=n(82258),p=n(31081),v=n(88095),M={"menu-demo-basic":{component:s.memo(s.lazy(function(){return n.e(664).then(n.bind(n,56166))})),asset:{type:"BLOCK",id:"menu-demo-basic",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(69480).Z},zens:{type:"NPM",value:"0.0.45"}},entry:"index.tsx"},context:{zens:p},renderOpts:{compile:function(){var m=h()(u()().mark(function c(){var o,i=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,i));case 3:case"end":return e.stop()}},c)}));function d(){return m.apply(this,arguments)}return d}()}},"menu-demo-contextmenu":{component:s.memo(s.lazy(function(){return n.e(664).then(n.bind(n,60503))})),asset:{type:"BLOCK",id:"menu-demo-contextmenu",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(16311).Z},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"6.1.13"},zens:{type:"NPM",value:"0.0.45"}},entry:"index.tsx"},context:{react:l||(l=n.t(s,2)),"styled-components":v,zens:p},renderOpts:{compile:function(){var m=h()(u()().mark(function c(){var o,i=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,i));case 3:case"end":return e.stop()}},c)}));function d(){return m.apply(this,arguments)}return d}()}}}},1551:function(r,t,n){n.r(t),n.d(t,{texts:function(){return a}});var l=n(82258);const a=[]},16311:function(r,t){t.Z=`import { useState } from 'react';
import styled from 'styled-components';
import { Menu, useMenuStore } from 'zens';

export default () => {
  const [anchorRect, setAnchorRect] = useState({ x: 0, y: 0 });
  const menu = useMenuStore();

  const menuData = [
    {
      label: 'menu1',
      value: 'menu1',
      checked: true,
      handler: () => {
        console.log('menu1');
      },
    },
    {
      label: 'menu2',
      value: 'menu2',
      children: [
        {
          label: 'menu2-1',
          value: 'menu2-1',
        },
        {
          label: 'menu2-2',
          value: 'menu2-2',
        },
      ],
    },
    {
      label: 'menu3',
      value: 'menu3',
    },
  ];

  return (
    <Container
      onContextMenu={(event) => {
        event.preventDefault();
        setAnchorRect({ x: event.clientX, y: event.clientY });
        menu.show();
      }}
    >
      Right click here
      <Menu items={menuData} store={menu} modal getAnchorRect={() => anchorRect}></Menu>
    </Container>
  );
};

const Container = styled.div\`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: dashed;
  border-color: hsl(204 20% 88%);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
\`;
`},69480:function(r,t){t.Z=`import { Menu, MenuItemData } from 'zens';

export default () => {
  const menuData: MenuItemData[] = [
    {
      label: '\u590D\u5236',
      value: 'copy',
      shortcut: '\u2318C',
      handler: () => {
        console.log('\u590D\u5236');
      },
    },
    {
      label: '\u7C98\u8D34',
      value: 'paste',
      shortcut: '\u2318V',
      handler: () => {
        console.log('\u7C98\u8D34');
      },
    },
    {
      type: 'divider',
    },
    {
      label: '\u7F16\u8F91',
      value: 'edit',
      shortcut: '\u2318E',
      children: [
        {
          label: '\u64A4\u9500',
          value: 'undo',
          shortcut: '\u2318Z',
        },
        {
          label: '\u91CD\u505A',
          value: 'redo',
          shortcut: '\u21E7\u2318Z',
        },
      ],
    },
    {
      label: '\u67E5\u627E',
      value: 'find',
      shortcut: '\u2318F',
    }
  ];

  return (
    <Menu items={menuData}>
      actions
    </Menu>
  );
};
`}}]);
