import { Row } from '@bp1/components/antd';
import style from './leftmenu.module.scss';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { TMenuData, buildMenuData } from '@bp1/app/api/auth/router';

export default function LeftMenu() {
  const { data } = useSession();
  let menuData: TMenuData[] = [];
  if (data) {
    const role = (data?.user as any).role ?? '';
    menuData = buildMenuData({ role });
  }
  return (
    <div className={style.menu}>
      {menuData.map((data: TMenuData) => {
        return (
          <Row className={style.row}>
            <Link href={data.path}>{data.label}</Link>
          </Row>
        );
      })}
    </div>
  );
}
