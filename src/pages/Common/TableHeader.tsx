import React, { ReactElement } from "react";
import { Column } from "../../components/Table/Column";
import { Row } from "../../components/Table/Row";

interface ITableHeader {
  header: boolean;
  tablelHeaders: string[];
  colWidth: number[];
}

const TableHeader: React.FC<ITableHeader> = ({
  header = true,
  tablelHeaders = [],
  colWidth = [],
}): ReactElement => {
  const headers = tablelHeaders.map((title: string, index: number) => (
    <Column width={colWidth[index]} key={`${index}-${title}`}>
      {title}
    </Column>
  ));

  return <Row header={header}>{headers}</Row>;
};
export default TableHeader;
