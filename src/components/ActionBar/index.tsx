import React from 'react';
import styles from './index.less';

interface ActionBarProps {
  title?: any;
  remarks?: string;
  children?: any;
}

const ActionBar = (props: ActionBarProps) => {
  const { title, remarks, children } = props;

  return (
    <div className={styles.actionBar}>
      <h4>{title}</h4>
      {remarks && <span>{remarks}</span>}
      <div className={styles.actionBar_btns}>{children}</div>
    </div>
  );
};

export default ActionBar;
