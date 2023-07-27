'use client';

import { signIn } from 'next-auth/react';

export default function authLogin() {
  return <button onClick={() => signIn()}>login</button>;
}
