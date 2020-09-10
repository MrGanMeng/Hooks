import React, { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import UseState from './Component/UseState';
import UseEffect from '@/pages/Hook/Component/UseEffect';
import UseRef from './Component/UseRef';
import { PageContainer } from '@ant-design/pro-layout';

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
    component: <UseRef />,
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
    <PageContainer>
      <Tabs activeKey={activeKey} type="card" onTabClick={saveActiveKey}>
        {HookList.map((item) => (
          <TabPane tab={item.name} key={item.id}>
            <Card title={item.name}>{item?.component || item.name}</Card>
          </TabPane>
        ))}
      </Tabs>
    </PageContainer>
  );
};

export default Hook;
