'use client';

import { Typography } from 'antd';
import { PropsWithChildren } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProviderLayout';

export function Title(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Typography.Title>{props.children}</Typography.Title>
    </AntdStyleProviderLayout>
  );
}
