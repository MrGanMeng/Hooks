import React, { useState, useRef, FC, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, TableListItem } from './data.td';
import { Table, Rate, message } from 'antd';
import { getOptionLabel, setLocalStorage, getLocalStorage } from '@/utils/utils';
import { PrimaryButton, LinkButton, DefaultButton } from '@/components/Common';
import ActionBar from '@/components/ActionBar';
import AddHeroDrawer from './AddHeroDrawer';
import { HERO_TYPE_ENUM } from './constants';

const HeroList: FC<{}> = () => {
  const actionRef = useRef<ActionType>(null);
  const [dataSource, setDataSource] = useState<TableListItem[]>([]);
  const [status, setStatus] = useState<string>('add'); // add新增 edit编辑 readonly只读
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setDataSource(getLocalStorage('HERO_DATA'));
  }, []);

  const UpdateData = (value: TableListItem) => {
    if (status === 'add') setDataSource([...dataSource, { ...value, id: Date.now().toString(36) }]);
    if (status === 'edit')
      setDataSource(dataSource.map((item) => (item.id === value.id ? value : item)));
  };

  const handleDelete = (id: string) => {
    const newData = dataSource.filter((f) => f.id !== id);
    setDataSource(newData);
  };

  const handleOpen = (val: string, record?: TableListItem) => {
    setStatus(val);
    actionRef?.current?.handleOpen(record);
  };

  const handleSubmit = () => {
    // 这里可以加一个去重校验
    setLoading(true);
    setLocalStorage('HERO_DATA', dataSource);
    setTimeout(() => {
      setLoading(false);
      message.success('保存成功');
    }, 1000);
  };

  const columns: any = [
    {
      title: '英雄名称',
      key: 'heroName',
      render: (text: string, record: any) => <span>{record.heroName}</span>,
    },
    {
      title: '英雄定位',
      key: 'heroOrientation',
      render: (text: number, record: any) => getOptionLabel(record.heroOrientation, HERO_TYPE_ENUM),
    },
    {
      title: '输出能力',
      key: 'exportAbility',
      render: (text: string, record: any) => <Rate value={record.exportAbility} disabled></Rate>,
    },
    {
      title: '防御能力',
      key: 'defenseAbility',
      render: (text: string, record: any) => <Rate value={record.defenseAbility} disabled></Rate>,
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text: string, record: any) => (
        <>
          <LinkButton text="编辑" onClick={() => handleOpen('edit', record)} />
          <LinkButton text="删除" onClick={() => handleDelete(record.id)} />
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ActionBar title="英雄列表">
        <PrimaryButton text="新增英雄" onClick={() => handleOpen('add')} />
      </ActionBar>

      <Table<TableListItem> columns={columns} dataSource={dataSource} key="id" />
      <div className="form__footer">
        <DefaultButton text="取消" disabled />
        <PrimaryButton text="确定" onClick={() => handleSubmit()} loading={loading} />
      </div>
      <AddHeroDrawer ref={actionRef} UpdateData={UpdateData} />
    </PageContainer>
  );
};

export default HeroList;
