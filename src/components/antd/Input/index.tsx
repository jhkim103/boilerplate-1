'use client';

import { Input as AInput, InputProps } from 'antd';
import { Password } from './Password';

interface IInputProps extends InputProps {}

export function Input(props: IInputProps) {
  return <AInput {...props} />;
}
// Input.Password = Password;
export { Password as InputPassword };
