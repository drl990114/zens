"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[823],{24209:function(i,t,n){var o;n.r(t),n.d(t,{demos:function(){return p}});var l=n(15009),s=n.n(l),g=n(99289),m=n.n(g),a=n(67294),y=n(79996),f=n(31081),p={"tableofcontent-demo-basic":{component:a.memo(a.lazy(function(){return n.e(640).then(n.bind(n,59905))})),asset:{type:"BLOCK",id:"tableofcontent-demo-basic",refAtomIds:["TableOfContent"],dependencies:{"index.tsx":{type:"FILE",value:n(51342).Z},react:{type:"NPM",value:"18.3.1"},zens:{type:"NPM",value:"0.1.8"}},entry:"index.tsx"},context:{react:o||(o=n.t(a,2)),zens:f},renderOpts:{compile:function(){var r=m()(s()().mark(function u(){var d,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,c));case 3:case"end":return e.stop()}},u)}));function h(){return r.apply(this,arguments)}return h}()}},"tableofcontent-demo-refreshbyheadings":{component:a.memo(a.lazy(function(){return n.e(640).then(n.bind(n,52730))})),asset:{type:"BLOCK",id:"tableofcontent-demo-refreshbyheadings",refAtomIds:["TableOfContent"],dependencies:{"index.tsx":{type:"FILE",value:n(86558).Z},react:{type:"NPM",value:"18.3.1"},zens:{type:"NPM",value:"0.1.8"}},entry:"index.tsx"},context:{react:o||(o=n.t(a,2)),zens:f},renderOpts:{compile:function(){var r=m()(s()().mark(function u(){var d,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,c));case 3:case"end":return e.stop()}},u)}));function h(){return r.apply(this,arguments)}return h}()}}}},86793:function(i,t,n){n.r(t),n.d(t,{texts:function(){return l}});var o=n(79996);const l=[]},51342:function(i,t){t.Z=`import { useEffect, useRef, useState } from 'react';

import { Toc, TocRef } from 'zens';

import { IHeadingData } from '../HeadingTree';

export default () => {
  const tocRef = useRef<TocRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      tocRef.current?.refresh({
        newContainer: containerRef.current,
        newScroll: containerRef.current,
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div ref={containerRef} style={{ height: '200px', width: '200px', overflow: 'scroll' }}>
        <h1 id="heading-1">Heading</h1>
        <div style={{ height: '50px' }}></div>
        <h2 id="heading-2">Heading 1</h2>
        <div style={{ height: '50px' }}></div>

        <h2 id="heading-3">Heading 2</h2>
        <div style={{ height: '50px' }}></div>

        <h2 id="heading-4">Heading 3</h2>
        <div style={{ height: '50px' }}></div>

        <h3 id="heading-5">Heading 4</h3>
        <div style={{ height: '50px' }}></div>
        <div style={{ height: '50px' }}></div>
        <h2 id="heading-6">Heading 5</h2>
        <div style={{ height: '50px' }}></div>
      </div>
      <Toc ref={tocRef} />
    </div>
  );
};
`},86558:function(i,t){t.Z=`import { useEffect, useRef, useState } from 'react';
import { Toc, TocRef } from 'zens';
import { IHeadingData } from '../HeadingTree';

export default () => {
  const tocRef = useRef<TocRef>(null);
  const [headingData, setHeadingsData] = useState<IHeadingData[]>([]);

  useEffect(() => {
    tocRef.current?.refreshByHeadings({
      newHeadings: [
        {
          depth: 1,
          value: 'Heading',
          id: 'heading-1',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
        {
          depth: 1,
          value: 'Heading 1',
          id: 'heading-2',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
        {
          depth: 1,
          value: 'Heading 2',
          id: 'heading-3',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
        {
          depth: 1,
          value: 'Heading 3',
          id: 'heading-4',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
        {
          depth: 2,
          value: 'Heading 4',
          id: 'heading-5',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
        {
          depth: 1,
          value: 'Heading 5',
          id: 'heading-6',
          htmlNode: null,
          onClick: (h: IHeadingData) => {
            console.log('hh', h);
          },
        },
      ],
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Toc ref={tocRef} headingsData={headingData} />
    </div>
  );
};
`}}]);
