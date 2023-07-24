'use client';
import { Layout as ALayout, LayoutProps } from 'antd';

interface ILayoutProps extends LayoutProps {}

export function Content(props: ILayoutProps) {
  return <ALayout.Content {...props}> {props.children}</ALayout.Content>;
}
