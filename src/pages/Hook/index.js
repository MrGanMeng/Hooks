import React, { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import UseState from './Component/UseState';
import UseEffect from '@/pages/Hook/Component/UseEffect';

const { TabPane } = Tabs;

const HookList = [
  {
    name: 'useState',
    id: 1,
    component: <UseState />,
  },
  {
    name: 'useEffect',
    id: 2,
    component: <UseEffect />,
  },
  {
    name: 'useRef',
    id: 3,
  },
  {
    name: 'useImperativeHandle',
    id: 4,
  },
];

const Hook = () => {
  const currentKey = window.localStorage.getItem('activeKey') || 0;
  const [activeKey, setActiveKey] = useState(currentKey);

  const saveActiveKey = (key) => {
    window.localStorage.setItem('activeKey', key);
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} type="card" onTabClick={saveActiveKey}>
      {HookList.map((item) => (
        <TabPane tab={item.name} key={item.id}>
          <Card title={item.name}>{item?.component || item.name}</Card>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Hook;
