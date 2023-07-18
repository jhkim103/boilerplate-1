'use client';

import { Button as AButton, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProvider';

interface IButtonProps extends ButtonProps {
  children?: ReactNode | string | undefined;
}

export default function Button(props: IButtonProps) {
  return (
    <AntdStyleProviderLayout>
      <AButton>{props.children}</AButton>
    </AntdStyleProviderLayout>
  );
}
