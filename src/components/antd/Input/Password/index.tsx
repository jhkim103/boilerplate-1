'use client';

import { Input as AInput } from 'antd';
import { PasswordProps } from 'antd/es/input';

interface IPasswordProps extends PasswordProps {}

export function Password(props: IPasswordProps) {
  return <AInput.Password {...props} />;
}
