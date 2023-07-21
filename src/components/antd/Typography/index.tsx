'use client';

import { Title } from './Title';
import { Typography as ATypography, TypographyProps } from 'antd';

interface ITypographyProps extends TypographyProps, React.RefAttributes<HTMLElement> {}

export function Typography(props: ITypographyProps) {
  return <ATypography {...props} />;
}
Typography.Title = Title;
