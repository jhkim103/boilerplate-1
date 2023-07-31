export type TbuildMenuData = {
  role: string;
};

export type TMenuData = {
  label: string;
  path: string;
};

export type TRouteData = {
  menu: TMenuData[];
  enabled: string[];
};

export function buildPageRouteByRole({ role }: TbuildMenuData) {
  const baseRoute: TRouteData = {
    menu: [],
    enabled: [],
  };
  baseRoute.menu.push(ROUTE_GROUP.dashboard.menu);
  baseRoute.enabled.push(...ROUTE_GROUP.dashboard.enabled);

  baseRoute.menu.push(ROUTE_GROUP.users.menu);
  baseRoute.enabled.push(...ROUTE_GROUP.users.enabled);

  baseRoute.menu.push(ROUTE_GROUP.group.menu);
  baseRoute.enabled.push(...ROUTE_GROUP.group.enabled);

  baseRoute.menu.push(ROUTE_GROUP.setting.menu);
  baseRoute.enabled.push(...ROUTE_GROUP.setting.enabled);

  switch (role) {
    case 'superuser':
      baseRoute.menu.push(ROUTE_GROUP.admins.menu);
      baseRoute.enabled.push(...ROUTE_GROUP.admins.enabled);
      break;
    default:
      break;
  }
  return baseRoute;
}

const ROUTE_GROUP = {
  dashboard: {
    menu: { label: 'dashboard', path: '/dashboard' },
    enabled: ['/dashboard'],
  },
  users: {
    menu: { label: 'users', path: '/users' },
    enabled: ['/users', '/users/create', '/users/:id'],
  },
  group: {
    menu: { label: 'group', path: '/group' },
    enabled: ['/group', '/group/create', '/group/:id'],
  },
  setting: {
    menu: { label: 'setting', path: '/setting' },
    enabled: ['/setting'],
  },
  admins: {
    menu: { label: 'admins', path: '/admins' },
    enabled: ['/admins', '/admins/create', '/admins/:id'],
  },
};
