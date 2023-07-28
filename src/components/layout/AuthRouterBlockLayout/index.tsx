'use client';
import Loading from '@bp1/app/loading';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import { TMenuData, checkAcceableRouterByUserRole } from '@bp1/app/api/auth/router';

const DEFAULT_LOGIN_URL = '/auth/login';

export default function AuthRouterBlockLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data } = useSession();
  if (data) {
    const role = (data?.user as any).role ?? '';
    const check = checkAcceableRouterByUserRole({ role, path: pathname });
    console.log(check);
    if (check === -1) {
      return <>권한이 없습니다 </>;
    }
  }
  return <>{children}</>;
}
