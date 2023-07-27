'use client';
import { signOut } from 'next-auth/react';

export default function dashboard() {
  return (
    <div>
      dashboard
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
}
