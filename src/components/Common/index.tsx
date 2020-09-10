import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

interface buttonProps {
  text: string | JSX.Element;
  onClick?: () => void;
  icon?: JSX.Element;
  htmlType?: any;
  children?: JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
}

export const PrimaryButton = (props: buttonProps) => {
  const { text, ...rest } = props;
  return (
    <Button {...rest} size="large" type="primary" className={styles.primaryButton}>
      {text}
    </Button>
  );
};

export const DefaultButton = (props: buttonProps) => {
  const { text, ...rest } = props;
  return (
    <Button {...rest} size="large" type="default" className={styles.primaryButton}>
      {text}
    </Button>
  );
};

export const LinkButton = (props: buttonProps) => {
  const { text, ...rest } = props;
  return (
    <Button {...rest} type="link">
      {text}
    </Button>
  );
};
