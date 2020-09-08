import React, { useState } from 'react';
import { Form, Input, Select, Button, Card } from 'antd';
import { FilterBarProps } from './data';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const HocFormItem = (props) => {
  const { name, label, children } = props;

  return (
    <Form.Item name={name} label={label} key={label}>
      {children}
    </Form.Item>
  );
};

const FilterBar = (props: FilterBarProps) => {
  const { filter } = props;
  console.log(filter);
  console.log(props);
  const formatItem = ({ name, label, value }) => {
    let input = null;
    switch (name) {
      case 'input':
        input = <Input label={label} value={value} placeholder="请输入" />;
        break;
      // case 'select':
      //   input
    }
    return input;
  };

  const onFinish = () => {};

  return (
    <Card>
      <Form {...formItemLayout} onFinish={onFinish}>
        {filter.map((item: any) => (
          <HocFormItem key={item.value} label={item.label} name={item.value}>
            {formatItem(item)}
          </HocFormItem>
        ))}
        <Button htmlType="submit" type="primary">
          查询
        </Button>
        <Button>重置</Button>
      </Form>
    </Card>
  );
};

export default FilterBar;
