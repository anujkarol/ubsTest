import React, { ReactNode } from "react";
import { IItem, ITableGrid } from "./interface";
import Loader from "../../components/Loader";
import { Table } from "../../components/Table";
import TableNoRecord from "../Common/TableNoRecord";
import TableHeader from "../Common/TableHeader";
import { v4 } from "uuid";
import { Row } from "../../components/Table/Row";
import { Column } from "../../components/Table/Column";
const TableGrid: React.FC<ITableGrid> = ({
  rows = [],
  message = "",
  isDataLoading = false,
  colWidth = [],
  tablelHeaders,
  moreDetails,
}) => {
  if (isDataLoading) {
    return <Loader />;
  }
  const getMoreDetails = (item: any) => {
    moreDetails(item);
  };
  const rowData = rows.map(
    (item: IItem): ReactNode => (
      <Row key={v4()} header={false} onClick={() => getMoreDetails(item)}>
        <Column width={500}>{item.title}</Column>
        <Column width={100}>
          <img src={item.thumbnail} />
        </Column>
      </Row>
    )
  );

  return (
    <div>
      <Table>
        <TableHeader header tablelHeaders={tablelHeaders} colWidth={colWidth} />
        {!rows.length ? <TableNoRecord message={message} /> : rowData}
      </Table>
    </div>
  );
};

TableGrid.displayName = "TableGrid";

export default TableGrid;
