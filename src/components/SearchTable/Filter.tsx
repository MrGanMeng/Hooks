import React from 'react';
import { Form, Input, Select, DatePicker, Card, Col, Row } from 'antd';
import { FilterBarProps } from './data';
import { PrimaryButton, DefaultButton } from '@/components/Common';

const { Option } = Select;
const { RangePicker } = DatePicker;

const HocFormItem = (props) => {
  const { name, label, children } = props;

  return (
    <Col span={8} key={label}>
      <Form.Item name={name} label={label}>
        {children}
      </Form.Item>
    </Col>
  );
};
const formatItem = ({ name, value, optionList }) => {
  let input = null;
  switch (name) {
    case 'input':
      input = <Input value={value} placeholder="请输入" />;
      break;
    case 'select':
      input = (
        <Select placeholder="请选择">
          {optionList &&
            optionList.length > 0 &&
            optionList.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
        </Select>
      );
      break;
    case 'datePicker':
      input = <DatePicker style={{ width: '100%' }} />;
  }
  return input;
};

const FilterBar = (props: FilterBarProps) => {
  const { filter } = props;

  const onFinish = () => {};

  return (
    <Card>
      <Form onFinish={onFinish}>
        <Row gutter={24}>
          {filter.map((item: any) => (
            <HocFormItem key={item.value} label={item.label} name={item.value}>
              {formatItem(item)}
            </HocFormItem>
          ))}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <PrimaryButton text="查询" htmlType="submit" />
            <DefaultButton text="重置" style={{ margin: '0 8px' }} />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default FilterBar;
