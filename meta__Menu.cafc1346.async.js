"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[501],{6414:function(o,t,n){var m;n.r(t),n.d(t,{demos:function(){return M}});var a=n(15009),r=n.n(a),h=n(99289),p=n.n(h),u=n(67294),y=n(82258),_=n(31081),v=n(88095),M={"menu-demo-basic":{component:u.memo(u.lazy(function(){return n.e(664).then(n.bind(n,56166))})),asset:{type:"BLOCK",id:"menu-demo-basic",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(69480).Z},zens:{type:"NPM",value:"0.0.39"}},entry:"index.tsx"},context:{zens:_},renderOpts:{compile:function(){var l=p()(r()().mark(function i(){var s,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,c));case 3:case"end":return e.stop()}},i)}));function d(){return l.apply(this,arguments)}return d}()}},"menu-demo-contextmenu":{component:u.memo(u.lazy(function(){return n.e(664).then(n.bind(n,60503))})),asset:{type:"BLOCK",id:"menu-demo-contextmenu",refAtomIds:["Menu"],dependencies:{"index.tsx":{type:"FILE",value:n(16311).Z},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"6.1.13"},zens:{type:"NPM",value:"0.0.39"}},entry:"index.tsx"},context:{react:m||(m=n.t(u,2)),"styled-components":v,zens:_},renderOpts:{compile:function(){var l=p()(r()().mark(function i(){var s,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,c));case 3:case"end":return e.stop()}},i)}));function d(){return l.apply(this,arguments)}return d}()}}}},1551:function(o,t,n){n.r(t),n.d(t,{texts:function(){return a}});var m=n(82258);const a=[]},16311:function(o,t){t.Z=`import { useState } from 'react';
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
`},69480:function(o,t){t.Z=`import { Menu, MenuItemData } from 'zens';

export default () => {
  const menuData: MenuItemData[] = [
    {
      label: 'menu1',
      value: 'menu1',
      checked: true,
      handler: () => {
        console.log('menu1');
      },
    },
    {
      type: 'divider',
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
    }
  ];

  return (
    <Menu items={menuData}>
      actions
    </Menu>
  );
};
`}}]);
