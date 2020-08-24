import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProCloumns, ActionType, ProColumns } from '@ant-design/pro-table';

const columns: ProColumns = [
  {
    title: '计划名称',
    dataIndex: 'taskName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    hideInForm: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '操作',
    dataIndex: 'action',
    hideInForm: true,
    render: (_, record) => '操作栏',
  },
];

const PlanList = () => {
  const [dataSource, setDataSource] = useState([]);
  const myRef = useRef<ActionType>();

  return (
    <PageContainer>
      <ProTable headerTitle="计划列表" actionRef={myRef} columns={columns} />
    </PageContainer>
  );
};

export default PlanList;
