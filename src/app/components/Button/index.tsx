'use client';

import { Button } from 'antd';
import React, { PropsWithChildren } from 'react';

export default function CButton(props: PropsWithChildren) {
  return <Button>{props.children}</Button>;
}
