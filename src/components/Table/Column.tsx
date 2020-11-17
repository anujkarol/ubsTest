import * as React from 'react';

import { Container, Wrapper } from './styles';

import { IColumnProps } from './interface';

export const Column: React.FC<IColumnProps> = ({
  width,
  children,
}): React.ReactElement => (
  <Container width={width}>
    <Wrapper>{children}</Wrapper>
  </Container>
);
