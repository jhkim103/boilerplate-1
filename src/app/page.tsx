'use client';

import { GlobalContext } from '@bp1/components/provider/ContextProvider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function Home(props: { children: React.ReactNode }) {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  if (!accessToken) {
    router.push('/login');
  } else {
    router.push('/dashboard');
  }
}
