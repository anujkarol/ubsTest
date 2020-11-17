import * as React from "react";

import { IRowProps } from "./interface";
import { RowsContainer } from "./styles";

export const Row: React.FC<IRowProps> = ({
  header = false,
  children,
  onClick,
}): React.ReactElement => (
  <RowsContainer header={header} onClick={onClick}>
    {children}
  </RowsContainer>
);
