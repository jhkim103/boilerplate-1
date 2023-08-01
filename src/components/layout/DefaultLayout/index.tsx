import { Col, Row } from '@bp1/components/antd';
import Header from '@bp1/components/molecular/Header';
import LeftMenu from '@bp1/components/molecular/LeftMenu';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row style={{ height: '100%' }}>
        <Col>
          <LeftMenu />
        </Col>
        <Col>{children}</Col>
      </Row>
    </>
  );
}
