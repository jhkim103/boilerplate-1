'use client';
import styles from './Button.module.scss';
import { Button as AButton, ButtonProps } from 'antd';

interface IButtonProp extends ButtonProps, React.RefAttributes<HTMLElement> {
  rdsType?: 'test' | 'error';
}

export function Button(props: IButtonProp) {
  const classNames: string[] = [];
  if (props.rdsType) {
    classNames.push(styles[props.rdsType]);
  }
  return (
    <AButton className={classNames.join(' ')} {...props}>
      {props.children}
    </AButton>
  );
}
