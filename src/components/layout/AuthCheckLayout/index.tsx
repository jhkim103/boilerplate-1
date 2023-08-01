'use client';
import Loading from '@bp1/app/loading';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import AuthRouterBlockLayout from '../AuthRouterBlockLayout';

const DEFAULT_LOGIN_URL = '/auth/login';

export default function AuthCheckLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { status } = useSession();

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'unauthenticated' && pathname !== DEFAULT_LOGIN_URL) {
    redirect(DEFAULT_LOGIN_URL);
  }
  if (status === 'authenticated' && pathname !== DEFAULT_LOGIN_URL) {
    return (
      <DefaultLayout>
        <AuthRouterBlockLayout>{children}</AuthRouterBlockLayout>
      </DefaultLayout>
    );
  }

  return <>{children}</>;
}
