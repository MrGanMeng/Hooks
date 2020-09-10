import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import classNames from 'classnames';
import styles from './index.less';

// Flex布局实现几种经典布局

const Flex = () => {
  return (
    <PageContainer>
      <div className={styles.flex}>
        <div className={classNames({ [styles.part_one]: true, [styles.box]: true })}>
          <div className={styles.part_left}>left</div>
          <div className={styles.part_mid}>mid</div>
          <div className={styles.part_right}>right</div>
        </div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>
          <div className={styles.part_left}>left</div>
          <div className={styles.part_right}>content</div>
        </div>
        <div className={classNames({ [styles.part_three]: true, [styles.box]: true })}>
          <div className={styles.top}>top</div>
          <div className={styles.mid}>
            <div className={styles.left}></div>
            <div className={styles.middle}></div>

            <div className={styles.right}></div>
          </div>
          <div className={styles.bottom}>bottom</div>
        </div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>
        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>

        <div className={classNames({ [styles.part_two]: true, [styles.box]: true })}>part_four</div>
      </div>
    </PageContainer>
  );
};

export default Flex;
