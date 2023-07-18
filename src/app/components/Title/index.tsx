'use client';

import { Typography as ATypography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { ReactNode } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProvider';

interface ITitleProps extends TitleProps {
  children?: ReactNode | string | undefined;
}

export default function Title(props: ITitleProps) {
  return (
    <AntdStyleProviderLayout>
      <ATypography.Title {...props}>{props.children}</ATypography.Title>
    </AntdStyleProviderLayout>
  );
}
