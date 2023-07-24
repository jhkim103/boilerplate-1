'use client';
import { Row, Col, Button, TypographyTitle, Input, InputPassword } from '@bp1/components/antd';
import { GlobalContext } from '@bp1/components/provider/ContextProvider';
import { useRouter } from 'next/navigation';
import { useContext, MouseEvent } from 'react';

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();

  function handleOnclick(e: MouseEvent<HTMLElement>): void {
    if (setAccessToken) {
      setAccessToken('login' + Math.floor(Math.random() * 100));
      router.push('/');
    }
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
