'use client';
import { signIn, useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';

const DEFAULT_LOGIN_URL = '/login';

export default function AuthCheckLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  //   console.log(pathname);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      //   console.log('onUnauthenticated');

      if (pathname !== '/authLogin') {
        redirect('/authLogin');
      }
    },
  });
  //   console.log(status);

  return <>{children}</>;
}
