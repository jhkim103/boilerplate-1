'use client';

import { Typography } from 'antd';
import { PropsWithChildren } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProvider';

export default function Title(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Typography.Title>{props.children}</Typography.Title>
    </AntdStyleProviderLayout>
  );
}
