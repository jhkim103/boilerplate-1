import { Col, Row } from '@bp1/components/antd';
import { signOut } from 'next-auth/react';
import style from './header.module.scss';

export default function Header() {
  return (
    <Row className={style.header} justify={'space-between'}>
      <Col>header</Col>
      <Col>
        <button onClick={() => signOut()}>sign out</button>
      </Col>
    </Row>
  );
}
