'use client';

import { Row, Col, Button, TypographyTitle, Input, InputPassword } from '@bp1/components/antd';
import { Form } from 'antd';
import { signIn } from 'next-auth/react';

export default function Login() {
  async function handleOnSubmit(e: any) {
    const response = await signIn('email-password-credential', {
      username: e.username,
      password: e.password,
    });
  }
  const [form] = Form.useForm();
  return (
    <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
      <Col span={6}>
        <Form form={form} onFinish={handleOnSubmit}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <TypographyTitle level={3}>Login</TypographyTitle>
            </Col>
            <Col span={24}>
              <Form.Item name="username">
                <Input placeholder="id" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="password">
                <InputPassword placeholder="password" />
              </Form.Item>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Form.Item>
                <Button rdsType={'test'} type="primary" htmlType="submit">
                  login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
