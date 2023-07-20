import { Button, Button2, Button3, Col, Row, Title } from './components/antd';

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
          <Button type="primary">test1</Button>
        </Col>
        <Col>
          <Button rdsType="test" type="dashed">
            test1
          </Button>
        </Col>
        <Col>
          <Button2 rdsType="test">test2</Button2>
        </Col>
        <Col>
          <Button3 rdsType="test">test3</Button3>
        </Col>
      </Row>
      <p className="text-3xl font-bold underline">Hello, Tailwind</p>
      <p>powered by raidea.</p>
    </div>
  );
}
