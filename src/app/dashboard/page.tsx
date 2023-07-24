import style from './dashboard.module.scss';
import { Col, Layout, Row } from '@bp1/components/antd';

export default function Dashboard() {
  let i = 12;

  const contents = [];
  while (i > 0) {
    i--;
    const value = Math.floor(Math.random() * 100);
    contents.push(
      <Col className={style.CCol} span={6}>
        data : {value}
      </Col>,
    );
  }

  return (
    <Layout rdsType={'main'}>
      <Row gutter={16}>{contents}</Row>
    </Layout>
  );
}
