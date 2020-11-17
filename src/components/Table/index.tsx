import * as React from 'react';

import { ITableProps } from './interface';
import { TableContainer } from './styles';

export const Table: React.FC<ITableProps> = ({
  isShift = false,
  children,
}): React.ReactElement => (
  <TableContainer isShift={isShift}>{children}</TableContainer>
);

Table.defaultProps = {
  isShift: false,
  children: '',
}; 
