'use client';
import * as styles from './Button.css';
import { Button as AButton, ButtonProps } from 'antd';

interface IButtonProp extends ButtonProps, React.RefAttributes<HTMLElement> {
  rdsType?: 'test' | 'error';
}

export function ButtonVNE(props: IButtonProp) {
  const { rdsType } = props;
  const classNames: string[] = [];
  if (rdsType === 'test') {
    classNames.push(styles[rdsType]);
  }
  return (
    <AButton className={classNames.join(' ')} {...props}>
      {props.children}
    </AButton>
  );
}
