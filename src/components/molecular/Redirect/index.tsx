'use client';

import { redirect } from 'next/navigation';

type TRedirect = {
  url: string;
};
export default function Redirect({ url }: TRedirect) {
  redirect(url);
  return <></>;
}
