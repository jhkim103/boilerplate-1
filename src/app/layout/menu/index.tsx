'use client';

import { Col, Row } from 'antd';
import Link from 'next/link';
import AntdStyleProviderLayout from '@bp1/app/components/AntdStyleProviderLayout';

export default function Menu() {
  return (
    <AntdStyleProviderLayout>
      <Row>
        <Col span={4}>
          <Link href="/">홈</Link>
        </Col>
        <Col span={4}>
          <Link href="/list">리스트</Link>
        </Col>
      </Row>
    </AntdStyleProviderLayout>
  );
}
