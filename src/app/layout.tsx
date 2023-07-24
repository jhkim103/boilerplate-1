import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'antd/dist/reset.css';
import '../../public/antd.min.css';
import ContextProvider from '@bp1/components/provider/ContextProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{props.children}</ContextProvider>
      </body>
    </html>
  );
}
