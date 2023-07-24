'use client';

import Login from '@bp1/components/molecular/Login';
import { store } from '@bp1/store';
import { redirect } from 'next/navigation';

export default function Home() {
  const isLogin = store.getState().login.result;
  console.log(isLogin);
  if (isLogin) {
    redirect('/dashboard');
  } else {
    return <Login />;
  }
}
