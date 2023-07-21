'use client';

import { Button as AButton, ButtonProps } from 'antd';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import styled, { css } from 'styled-components';

interface IButtonProp extends ButtonProps, React.RefAttributes<HTMLElement> {
  rdsType?: 'test' | 'error';
}

const StyleButton = styled(AButton)<IButtonProp>`
  ${({ rdsType }) => {
    if (rdsType === 'test') {
      return css`
        color: red;
        padding: 10px 50px 20px 30px;
        &:hover {
          color: yellow;
        }
      `;
    }
  }}
`;

export function ButtonSTD(props: IButtonProp) {
  return (
    <StyledComponentsRegistry>
      <StyleButton {...props}>{props.children}</StyleButton>
    </StyledComponentsRegistry>
  );
}
