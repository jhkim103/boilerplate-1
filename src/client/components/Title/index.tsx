'use client';

import AntdStyleProviderLayout from '@bp1/client/provider/AntdStyleProviderLayout';
import { Typography } from 'antd';
import { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Typography.Title>{props.children}</Typography.Title>
    </AntdStyleProviderLayout>
  );
}
