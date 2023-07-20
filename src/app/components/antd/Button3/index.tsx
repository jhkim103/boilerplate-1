'use client';

import { Button as AButton, ButtonProps } from 'antd';

interface IButtonProp extends ButtonProps, React.RefAttributes<HTMLElement> {
  rdsType?: 'test' | 'error';
}

export function Button3(props: IButtonProp) {
  const { rdsType } = props;
  const classNames: string[] = [];
  if (rdsType === 'test') {
    classNames.push('text-red-500');
  }
  return (
    // <input type="button" c
    <>
      <AButton className={classNames.join(' ')} {...props}>
        {props.children}
      </AButton>
      <button className={classNames.join(' ')}> {props.children}</button>
    </>
  );
}
