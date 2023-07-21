'use client';

import { Row as ARow, RowProps } from 'antd';

interface IRowProps extends RowProps, React.RefAttributes<HTMLDivElement> {}

export function Row(props: IRowProps) {
  return <ARow {...props}>{props.children}</ARow>;
}
