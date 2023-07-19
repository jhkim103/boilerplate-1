'use client';

import { Typography } from 'antd';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
import { ReactNode } from 'react';

interface ITypographyProps extends ParagraphProps {
  children?: ReactNode | string;
}

export default function Title(props: ITypographyProps) {
  return <Typography.Paragraph {...props}>{props.children}</Typography.Paragraph>;
}
