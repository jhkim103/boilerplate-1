import { TRouteData } from '@bp1/app/api/auth/[...nextauth]/role';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function AuthRouterBlockLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data } = useSession();
  if (data) {
    const enabledRoute = ['/', ...(data?.user as any).route.enabled];
    const check = enabledRoute.findIndex((route: string) => route === pathname);
    if (check === -1) {
      return <>권한이 없습니다 </>;
    }
  }
  return <>{children}</>;
}
