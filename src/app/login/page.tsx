'use client';

import { Row, Col, Button, TypographyTitle, Input, InputPassword } from '@bp1/components/antd';
import { signIn } from 'next-auth/react';

export default function Login() {
  async function handleOnSubmit(e: any) {
    const response = await signIn('email-password-credential', {
      email: 'aaa@aaa.com',
      password: 'asdfasdf',
    });
    console.log(response);
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
            <Button rdsType={'test'} type="primary" onClick={(e) => handleOnSubmit(e)}>
              login
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
