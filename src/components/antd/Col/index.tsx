'use client';

import { Col as ACol, ColProps } from 'antd';

interface IColProps extends ColProps, React.RefAttributes<HTMLDivElement> {}

export function Col(props: IColProps) {
  return <ACol {...props}>{props.children}</ACol>;
}
