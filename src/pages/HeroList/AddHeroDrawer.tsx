import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Drawer, Form, Input, Select, Rate } from 'antd';
import { TableListItem, AddHeroDrawerProps } from './data.td';
import { PrimaryButton, DefaultButton } from '@/components/Common';
import { HERO_TYPE_ENUM } from './constants';

const { Option } = Select;

const HocFormItem = ({ ui, children }: any) => {
  const { name, label, rules } = ui;

  return (
    <Form.Item name={name} label={label} key={label} rules={rules}>
      {children}
    </Form.Item>
  );
};

const AddHeroDrawer = (props: AddHeroDrawerProps, ref: any) => {
  const { UpdateData } = props;
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [initialValues, setInitialValues] = useState<object | undefined>({});

  const onSubmit = (value: any) => {
    UpdateData({ ...value, id });
    setVisible(false);
  };

  const handleOpen = (record: TableListItem) => {
    setIsAdd(record ? false : true);
    setInitialValues(record);
    setVisible(true);
    if (record) setId(record?.id);
  };

  useImperativeHandle(ref, () => ({
    handleOpen,
  }));

  return (
    <Drawer
      width="675px"
      title={`${isAdd ? '新增' : '编辑'}英雄`}
      visible={visible}
      onClose={() => setVisible(false)}
      destroyOnClose
      bodyStyle={{ marginBottom: '50px' }}
    >
      <Form onFinish={onSubmit} layout="vertical" colon={false} initialValues={initialValues}>
        <HocFormItem
          ui={{
            label: '英雄名称',
            name: 'heroName',
            rules: [{ required: true, message: '请输入英雄名称' }],
          }}
        >
          <Input placeholder="请输入" />
        </HocFormItem>

        <HocFormItem
          ui={{
            label: '英雄定位',
            name: 'heroOrientation',
            rules: [{ required: true, message: '请选择英雄定位!' }],
          }}
        >
          <Select placeholder="请选择">
            {HERO_TYPE_ENUM.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </HocFormItem>

        <HocFormItem ui={{ label: '输出能力', name: 'exportAbility' }}>
          <Rate />
        </HocFormItem>

        <HocFormItem ui={{ label: '防御能力', name: 'defenseAbility' }}>
          <Rate />
        </HocFormItem>

        <div className="drawer__footer">
          <DefaultButton text="取消" onClick={() => setVisible(false)} />
          <PrimaryButton text="提交" htmlType="submit" />
        </div>
      </Form>
    </Drawer>
  );
};

export default forwardRef(AddHeroDrawer);
