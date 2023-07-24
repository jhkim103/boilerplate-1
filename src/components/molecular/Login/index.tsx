'use client';

import { Row, Col, Button, TypographyTitle, Input, InputPassword } from '@bp1/components/antd';

import { store } from '@bp1/store';
import { setLoginResult } from '@bp1/store/loginSlice';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export default function Login() {
  const route = useRouter();
  function handleOnclick(e: MouseEvent<HTMLElement>) {
    store.dispatch(setLoginResult(true));
    route.refresh();
  }

  return (
    <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
      <Col span={6}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <TypographyTitle level={3}>Login</TypographyTitle>
          </Col>
          <Col span={24}>
            <Input placeholder="id" />
          </Col>
          <Col span={24}>
            <InputPassword placeholder="password" />
          </Col>
          <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={(e) => handleOnclick(e)}>
              login
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
