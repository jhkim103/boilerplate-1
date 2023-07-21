import { Button, ButtonMCS, ButtonSTD, ButtonTWD, Col, Row, Title } from './components/antd';

export default function Home() {
  return (
    <div>
      <Title level={1}>MSP CS ADMIN</Title>
      <Row gutter={[16, 16]} style={{ padding: '100px' }}>
        <Col span={24}>
          <Title level={5}>{`Button style : {color:red} / :hover{color:yellow}`}</Title>
        </Col>
        <Col>
          <Button type="primary">antd</Button>
        </Col>
        <Col>
          <ButtonMCS rdsType="test" type="dashed">
            antd+module.css
          </ButtonMCS>
        </Col>
        <Col>
          <ButtonSTD rdsType="test">antd+styled</ButtonSTD>
        </Col>
        <Col>
          <ButtonTWD rdsType="test">antd+tailwind</ButtonTWD>
        </Col>
      </Row>
      <p className="text-3xl font-bold underline">Tailwind loaded : "Hello, Tailwind</p>
      <p>powered by raidea.</p>
    </div>
  );
}
