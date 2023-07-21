'use client';

import { Compact } from './Compact';
import { Space as ASpace, SpaceProps } from 'antd';

interface ISpaceProps extends SpaceProps {}

export function Space(props: ISpaceProps) {
  return <ASpace {...props} />;
}
Space.Compact = Compact;
