'use client';

import AntdStyleProviderLayout from '@bp1/client/provider/AntdStyleProviderLayout';
import { Typography } from 'antd';
import { PropsWithChildren } from 'react';

export function Text(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Typography>{props.children}</Typography>
    </AntdStyleProviderLayout>
  );
}
