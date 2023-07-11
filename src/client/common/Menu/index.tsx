'use client';

import AntdStyleProviderLayout from '@bp1/client/provider/AntdStyleProviderLayout';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';

export default function Menu() {
  return (
    <AntdStyleProviderLayout>
      <Row>
        <Col span={4}>
          <Link href="/">
            <Button>홈</Button>
          </Link>
        </Col>
        <Col span={4}>
          <Link href="/list">
            <Button>리스트</Button>
          </Link>
        </Col>
      </Row>
    </AntdStyleProviderLayout>
  );
}
