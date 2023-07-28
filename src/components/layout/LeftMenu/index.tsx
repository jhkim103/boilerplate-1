import { Row } from '@bp1/components/antd';
import style from './leftmenu.module.scss';
import Link from 'next/link';

export default function LeftMenu() {
  return (
    <div className={style.menu}>
      <Row className={style.row}>
        <Link href="/dashboard">dashboard</Link>
      </Row>
      <Row className={style.row}>
        <Link href="/users">users</Link>
      </Row>
      <Row className={style.row}>
        <Link href="/group">group</Link>
      </Row>
      <Row className={style.row}>
        <Link href="/setting">setting</Link>
      </Row>
    </div>
  );
}
