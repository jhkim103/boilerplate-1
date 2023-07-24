'use client';

import { Button, Col, Row } from '@bp1/components/antd';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { store } from '@bp1/store';
import { setLoginResult } from '@bp1/store/loginSlice';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const router = useRouter();

  function handleOnclick(e: MouseEvent<HTMLElement>): void {
    store.dispatch(setLoginResult(false));
    router.push('/');
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
