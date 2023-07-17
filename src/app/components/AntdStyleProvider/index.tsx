import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import 'antd/dist/reset.css';
import { useServerInsertedHTML } from 'next/navigation';

export default function AntdStyleProviderLayout({ children }: { children: React.ReactNode }) {
  const cache = createCache();
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
