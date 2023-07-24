'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const isLogin = false;
  const route = useRouter();
  if (isLogin) {
    route.push('/dashboard');
  } else {
    route.push('/login');
  }
}
