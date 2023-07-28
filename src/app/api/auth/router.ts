export type TbuildMenuData = {
  role: string;
};

export type TMenuData = {
  label: string;
  path: string;
};

export function buildMenuData({ role }: TbuildMenuData) {
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

type TPath = {
  path: string;
};
type TcheckAcceableRouterByUserRoleParam = TbuildMenuData & TPath;

export function checkAcceableRouterByUserRole({ role, path }: TcheckAcceableRouterByUserRoleParam) {
  const menuData = buildMenuData({ role });
  menuData.push({ label: 'root', path: '/' });

  const isExeist = menuData.findIndex((data) => data.path === path);

  return isExeist;
}
