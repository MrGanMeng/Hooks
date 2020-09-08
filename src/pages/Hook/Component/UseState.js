import React, { useState } from 'react';
import styles from '../index.less';

const UseState = (props) => {
  // 首先useState是一个函数，我们调用一下useState(),看下它的返回值
  // console.log(useState()); // [undefined,f()]
  const [count, setCount] = useState(0);

  return <div className={styles.box}>{count}</div>;
};

export default UseState;
