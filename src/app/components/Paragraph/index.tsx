'use client';

import { Typography } from 'antd';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@bp1/app/provider/StyledComponentsRegistry';

interface ITypographyProps extends ParagraphProps {
  children?: ReactNode | string;
}

export default function Title(props: ITypographyProps) {
  return (
    <StyledComponentsRegistry>
      <Typography.Paragraph {...props}>{props.children}</Typography.Paragraph>
    </StyledComponentsRegistry>
  );
}
