'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function AuthSessionProvider(props: PropsWithChildren) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
