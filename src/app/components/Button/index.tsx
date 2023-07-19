'use client';

import { Button as AButton, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';
import StyledComponentsRegistry from '@bp1/app/provider/StyledComponentsRegistry';

interface IButtonProps extends ButtonProps {
  children?: ReactNode | string;
  rdsType?: 'warning' | 'default';
}

const StyleButton = styled(AButton)<IButtonProps>`
  height: 100px;
  ${({ rdsType }) => {
    switch (rdsType) {
      case 'warning':
        return `
          color: red;
        `;
      default:
        return ``;
    }
  }}
`;

export default function Button(props: IButtonProps) {
  return (
    <StyledComponentsRegistry>
      <StyleButton {...props}>{props.children}</StyleButton>
    </StyledComponentsRegistry>
  );
}
