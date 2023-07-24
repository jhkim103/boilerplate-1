'use client';

import { Button, Col, Row } from '@bp1/components/antd';
import { GlobalContext } from '@bp1/components/provider/ContextProvider';
import { useRouter } from 'next/navigation';
import { useContext, MouseEvent } from 'react';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  function handleOnclick(e: MouseEvent<HTMLElement>): void {
    if (setAccessToken) {
      setAccessToken('');
      router.push('/');
    }
  }
  return (
    <>
      <Row style={{ backgroundColor: 'gray', padding: '16px' }} justify={'space-between'}>
        <Col>header</Col>
        <Col>
          <Button onClick={(e) => handleOnclick(e)}>logout</Button>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ backgroundColor: 'blue', padding: '16px' }}>
          menu
        </Col>
        <Col span={18}>{props.children}</Col>
      </Row>
      <p>powered by raidea.</p>
    </>
  );
}
