'use client';
import Loading from '@bp1/app/loading';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';

const DEFAULT_LOGIN_URL = '/login';

export default function AuthCheckLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'unauthenticated' && pathname !== '/login') {
    redirect('/login');
  }

  return <>{children}</>;
}
