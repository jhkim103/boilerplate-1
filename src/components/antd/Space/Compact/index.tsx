'use client';

import { Space as ASpace } from 'antd';
import { SpaceCompactProps } from 'antd/es/space/Compact';

interface ISpaceCompactProps extends SpaceCompactProps, React.RefAttributes<HTMLElement> {}

export function Compact(props: ISpaceCompactProps) {
  return <ASpace.Compact {...props}>{props.children}</ASpace.Compact>;
}
