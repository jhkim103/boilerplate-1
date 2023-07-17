'use client';

import 'antd/dist/reset.css';
import Title from './components/Title';
import './globals.css';

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
