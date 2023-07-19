'use client';

import { Button as AButton, ButtonProps } from 'antd';

interface IButtonProp extends ButtonProps, React.RefAttributes<HTMLElement> {}

export function Button(props: IButtonProp) {
  return <AButton {...props}>{props.children}</AButton>;
}
