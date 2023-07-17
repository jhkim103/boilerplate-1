'use client';

import { Typography } from 'antd';
import { PropsWithChildren } from 'react';

export default function Title(props: PropsWithChildren) {
  return <Typography.Title>{props.children}</Typography.Title>;
}
