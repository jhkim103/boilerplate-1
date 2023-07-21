'use client';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

interface ITitleProps extends TitleProps {}

export function Title(props: ITitleProps) {
  return <Typography.Title {...props}>{props.children}</Typography.Title>;
}
