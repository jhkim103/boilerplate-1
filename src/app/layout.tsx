import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'antd/dist/reset.css';
import '../../public/antd.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  login: React.ReactNode;
  start: React.ReactNode;
}) {
  const isLogin = false;
  return (
    <html lang="en">
      <body className={inter.className}>{isLogin ? props.start : props.login}</body>
    </html>
  );
}
