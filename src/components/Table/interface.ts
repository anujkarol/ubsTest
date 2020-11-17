import { ReactElement, ReactNode } from "react";

export interface IRowProps {
  children: any;
  header?: boolean;
  onClick?: () => void;
}
export interface IColumnProps {
  width: number;
  children: any;
}

export interface ITableProps {
  isShift?: boolean;
  children: string | ReactNode | ReactElement;
}
