'use client';

import { Typography } from 'antd';
import { PropsWithChildren } from 'react';
import type { TypographyProps } from 'antd';

export default function Title(props: PropsWithChildren) {
  return <Typography.Title>{props.children}</Typography.Title>;
}
