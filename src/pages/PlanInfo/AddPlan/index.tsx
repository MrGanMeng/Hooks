import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PlanForm from './Component/PlanForm';

// classNames 的使用 Hook的基本使用
// p-l-24为动态创建的全局样式
// 要求：1.掌握useState的基本用法；2.了解useEffect 第二个参数不传,传空数组和传参数的区别 3.掌握classNamas的基本用法
const AddPlan: React.FC<{}> = () => {
  const [padding, setPadding] = useState<boolean>(false);
  const [margin, setMargin] = useState<boolean>(false);
  console.log(useState());
  useEffect(() => {
    // console.log('padding', padding);
    // console.log('margin', margin);
  }, [margin, padding]);

  return (
    <>
      <div className={classNames({ 'p-l-24': padding, 'm-l-16': margin })}>m-t-16</div>
      <button onClick={() => setPadding(!padding)}>{`${padding ? '取消' : '增加'}padding`}</button>
      <button onClick={() => setMargin(!margin)}>{`${margin ? '取消' : '增加'}margin`}</button>
      <PlanForm margin={margin} />
    </>
  );
};

export default AddPlan;
