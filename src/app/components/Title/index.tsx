'use client';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@bp1/app/provider/StyledComponentsRegistry';

interface ITitleProps extends TitleProps {
  children?: ReactNode | string;
}

export default function Title(props: ITitleProps) {
  return (
    <StyledComponentsRegistry>
      <Typography.Title {...props}>{props.children}</Typography.Title>
    </StyledComponentsRegistry>
  );
}
