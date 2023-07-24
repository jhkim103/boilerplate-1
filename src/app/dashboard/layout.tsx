import { Col, Row } from '@bp1/components/antd';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Row style={{ backgroundColor: 'gray', padding: '16px' }}>
        <Col>header</Col>
      </Row>
      <Row>
        <Col span={4} style={{ backgroundColor: 'blue', padding: '16px' }}>
          menu
        </Col>
        <Col span={18}>{props.children}</Col>
      </Row>
    </>
  );
}
