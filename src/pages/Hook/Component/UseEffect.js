import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import styles from '../index.less';

const UseEffect = (props) => {
  const [id, setId] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('id', id);
  }, [id]);

  useEffect(() => {
    console.log('useEffect []');
  }, []);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('unmount');
    };
  });

  const onMousemove = (e) => console.log(e);

  // useEffect(() => {
  //   addEventListener('mousemove', onMousemove);

  //   return () => removeEventListener('mousemove', onMousemove);
  // });

  return (
    <>
      <div className={styles.box}>id:{id}</div>
      <div className={styles.box}>num:{num}</div>
      <div>
        <Button
          type="primary"
          onClick={() => setId(id + 1)}
          className={classnames({ 'm-r-16': true })}
        >
          点击增加id
        </Button>
        <Button type="primary" onClick={() => setNum(num + 1)}>
          点击增加num
        </Button>
      </div>
    </>
  );
};

export default UseEffect;
