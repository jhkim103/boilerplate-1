'use client';
import Title from './components/Title';
import { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import './globals.css';
import 'antd/dist/reset.css';
import { DatePicker } from 'antd';

export default function Home() {
  return (
    <StyleProviderLayout>
      <div>
        <Title>MSP CS ADMIN</Title>
        <p>powered by raidea.</p>
      </div>
    </StyleProviderLayout>
  );
}

function StyleProviderLayout({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== 'undefined') {
    return render;
  }

  return <StyleProvider cache={cache}>{render}</StyleProvider>;
}
