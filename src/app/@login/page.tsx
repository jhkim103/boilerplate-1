'use client';

import { Row, Col, Button, Typography, Input } from '@bp1/components/antd';

export default function Login() {
  return (
    <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
      <Col span={6}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Typography.Title level={3}>Login</Typography.Title>
          </Col>
          <Col span={24}>
            <Input placeholder="id" />
          </Col>
          <Col span={24}>
            <Input.Password placeholder="password" />
          </Col>
          <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary">login</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
