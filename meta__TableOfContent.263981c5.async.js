"use strict";(self.webpackChunkzens=self.webpackChunkzens||[]).push([[3823],{24209:function(s,t,n){var a;n.r(t),n.d(t,{demos:function(){return p}});var m=n(15009),i=n.n(m),g=n(99289),c=n.n(g),d=n(67294),f=n(31081),p={"tableofcontent-demo-basic":{component:d.memo(d.lazy(function(){return n.e(2640).then(n.bind(n,59905))})),asset:{type:"BLOCK",id:"tableofcontent-demo-basic",refAtomIds:["TableOfContent"],dependencies:{"index.tsx":{type:"FILE",value:n(51342).Z},react:{type:"NPM",value:"19.2.0"},zens:{type:"NPM",value:"0.1.15"}},entry:"index.tsx"},context:{react:a||(a=n.t(d,2)),zens:f},renderOpts:{compile:function(){var l=c()(i()().mark(function h(){var o,u=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},h)}));function r(){return l.apply(this,arguments)}return r}()}},"tableofcontent-demo-refreshbyheadings":{component:d.memo(d.lazy(function(){return n.e(2640).then(n.bind(n,52730))})),asset:{type:"BLOCK",id:"tableofcontent-demo-refreshbyheadings",refAtomIds:["TableOfContent"],dependencies:{"index.tsx":{type:"FILE",value:n(86558).Z},react:{type:"NPM",value:"19.2.0"},zens:{type:"NPM",value:"0.1.15"}},entry:"index.tsx"},context:{react:a||(a=n.t(d,2)),zens:f},renderOpts:{compile:function(){var l=c()(i()().mark(function h(){var o,u=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},h)}));function r(){return l.apply(this,arguments)}return r}()}}}},86793:function(s,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[]},51342:function(s,t){t.Z=`import { useEffect, useRef, useState } from 'react';

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
`},86558:function(s,t){t.Z=`import { useEffect, useRef, useState } from 'react';
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
