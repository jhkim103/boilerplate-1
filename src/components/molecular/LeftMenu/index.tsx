import { Row } from '@bp1/components/antd';
import style from './leftmenu.module.scss';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { TMenuData } from '@bp1/app/api/auth/[...nextauth]/role';

export default function LeftMenu() {
  const { data } = useSession();
  const menuData = (data?.user as any).route.menu ?? [];
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
