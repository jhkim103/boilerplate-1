import { Button, Col, Row, Title } from './components/antd';

export default function Home() {
  return (
    <div>
      <Title level={1}>MSP CS ADMIN</Title>
      <Title level={2}>MSP CS ADMIN</Title>
      <Title level={3}>MSP CS ADMIN</Title>
      <Title level={4}>MSP CS ADMIN</Title>
      <Title level={5}>MSP CS ADMIN</Title>
      <Row gutter={[16, 16]}>
        <Col>
          <Button rdsType="test" type="dashed">
            test1
          </Button>
        </Col>
        <Col>
          <Button type="primary">test1</Button>
        </Col>
        <Col>
          <Button>test2</Button>
        </Col>
      </Row>

      <p>powered by raidea.</p>
    </div>
  );
}
