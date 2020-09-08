import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { TableListItem } from './data';
import SearchTable from '@/components/SearchTable';

const columns: ProColumns<TableListItem>[] = [
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
  },
];

const data = [
  {
    taskName: '第一次计划',
    createTime: '2020-08-28',
    status: '进行中',
  },
  {
    taskName: '第一次计划',
    createTime: '2020-08-28',
    status: '进行中',
  },
  {
    taskName: '第一次计划',
    createTime: '2020-08-28',
    status: '进行中',
  },
];
const filter = [
  {
    name: 'input',
    label: '计划名称',
    value: 'taskName',
  },
  {
    name: 'input',
    label: '状态',
    value: 'status',
  },
];
const PlanList = () => {
  const [dataSource, setDataSource] = useState<TableListItem[]>([]);
  const myRef = useRef<ActionType>();

  return (
    <PageContainer>
      <SearchTable columns={columns} dataSource={data} filter={filter} />
    </PageContainer>
  );
};

export default PlanList;
