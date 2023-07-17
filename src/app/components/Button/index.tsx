'use client';

import { Button } from 'antd';
import { PropsWithChildren } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProvider';

export default function CButton(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Button style={{ color: 'red' }}>{props.children}</Button>
    </AntdStyleProviderLayout>
  );
}
