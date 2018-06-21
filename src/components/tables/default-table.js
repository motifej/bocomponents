import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Assignment from "@material-ui/icons/Assignment";
import { withStyles } from "@material-ui/core/styles";

import GridContainer from "../MUI-Components/Grid/GridContainer.jsx";
import ItemGrid from "../MUI-Components/Grid/ItemGrid.jsx";
import tableStyle from "./style";
import IconCard from "../MUI-Components/Cards/IconCard.jsx";

import Pagination from "./pagination";

import { buildTableHeader, buildTableFilters, createTableBody } from "./utils";
const defaultTitle = "Results";

const TableContent = (classes, tableHeader, tableFilters, tableBody) => {
    return (
        <div className={classes.tableContainer}>
            <Table className={classes.table}>
                <TableHead className={classes["blue"]}>
                    <TableRow className={classes.tableHeadRow}>
                        {tableHeader}
                    </TableRow>
                    <TableRow className={classes.tableHeadRowFilter}>
                        {tableFilters}
                    </TableRow>
                </TableHead>
                {tableBody}
            </Table>
        </div>
    );
};
const DefaultTable = props => {
    const {
        classes,
        data,
        header,
        title,
        onRowClick,
        onSortClick,
        order,
        orderBy,
        decoder,
        request,
        requestPagesCount
    } = props;
    const tableHeader = buildTableHeader(
        header,
        onSortClick,
        classes,
        order,
        orderBy
    );
    const tableFilters = buildTableFilters(header, classes);
    const tableBody =
        data && createTableBody(data, onRowClick, classes, decoder);
    console.log("data", data);
    if (data && header) {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title={title || defaultTitle}
                        content={
                            <div>
                                <Pagination
                                    request={request}
                                    requestPagesCount={requestPagesCount}
                                />
                                {TableContent(
                                    classes,
                                    tableHeader,
                                    tableFilters,
                                    tableBody
                                )}
                            </div>
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );
    } else {
        return <div>hello</div>;
    }
};

export default withStyles(tableStyle)(DefaultTable);
