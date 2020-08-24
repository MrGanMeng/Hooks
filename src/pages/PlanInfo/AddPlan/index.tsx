import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const AddPlan: React.FC<{}> = () => {
  const [padding, setPadding] = useState<boolean>(false);
  const [margin, setMargin] = useState<boolean>(false);

  useEffect(() => {
    console.log('padding', padding);
    console.log('margin', margin);
  }, [margin, padding]);

  return (
    <>
      <div className={classNames({ 'p-l-24': padding, 'm-l-16': margin })}>m-t-16</div>
      <button onClick={() => setPadding(!padding)}>{`${padding ? '取消' : '增加'}padding`}</button>
      <button onClick={() => setMargin(!margin)}>{`${margin ? '取消' : '增加'}margin`}</button>
    </>
  );
};

export default AddPlan;
