"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[9501],{6414:function(l,t,n){var o;n.r(t),n.d(t,{demos:function(){return y}});var h=n(15009),r=n.n(h),v=n(99289),i=n.n(v),s=n(67294),p=n(31081),f=n(35480),y={"menu-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3664).then(n.bind(n,56166))})),asset:{type:"BLOCK",id:"menu-demo-basic",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(69480).Z},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{zens:p},renderOpts:{compile:function(){var a=i()(r()().mark(function d(){var u,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,c));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}},"menu-demo-contextmenu":{component:s.memo(s.lazy(function(){return n.e(3664).then(n.bind(n,60503))})),asset:{type:"BLOCK",id:"menu-demo-contextmenu",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(16311).Z},react:{type:"NPM",value:"19.2.0"},"styled-components":{type:"NPM",value:"6.1.19"},zens:{type:"NPM",value:"0.1.18"}},entry:"index.tsx"},context:{react:o||(o=n.t(s,2)),"styled-components":f,zens:p},renderOpts:{compile:function(){var a=i()(r()().mark(function d(){var u,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,c));case 3:case"end":return e.stop()}},d)}));function m(){return a.apply(this,arguments)}return m}()}}}},1551:function(l,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[]},16311:function(l,t){t.Z=`import { useState } from 'react';
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
`},69480:function(l,t){t.Z=`import { Menu, MenuItemData } from 'zens';

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
