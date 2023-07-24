'use client';

import styles from './Layout.module.scss';
import { Layout as ALayout, LayoutProps } from 'antd';
import { Content } from './Content';
interface ILayoutProps extends LayoutProps {
  rdsType?: 'main';
}

export function Layout(props: ILayoutProps) {
  const classNames: string[] = [];
  if (props.rdsType) {
    classNames.push(styles[props.rdsType]);
  }
  return (
    <ALayout className={classNames.join(' ')} {...props}>
      {props.children}
    </ALayout>
  );
}

export { Content as LayoutContent };
