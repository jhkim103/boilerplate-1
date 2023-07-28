import { Row } from '@bp1/components/antd';
import style from './leftmenu.module.scss';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

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

type TbuildMenuData = {
  role: string;
};

type TMenuData = {
  label: string;
  path: string;
};

function buildMenuData({ role }: TbuildMenuData) {
  const menuData: TMenuData[] = [];
  menuData.push({ label: 'dashboard', path: '/dashboard' });
  menuData.push({ label: 'users', path: '/users' });
  menuData.push({ label: 'group', path: '/group' });
  menuData.push({ label: 'setting', path: '/setting' });
  switch (role) {
    case 'superuser':
      menuData.push({ label: 'admins', path: '/admins' });
      break;
    default:
      break;
  }
  return menuData;
}
