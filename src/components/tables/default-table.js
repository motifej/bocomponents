import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Assignment from "@material-ui/icons/Assignment";
import { withStyles } from "@material-ui/core/styles";

import GridContainer from "../MUI-Components/Grid/GridContainer";
import ItemGrid from "../MUI-Components/Grid/ItemGrid";
import tableStyle from "./style";
import IconCard from "../MUI-Components/Cards/IconCard";
import constants from "./constants"
import Pagination from "../pagination";

import { buildTableHeader, buildTableFilters, createTableBody } from "./utils";

const TableContent = (props) => {
    const {classes, tableHeader, tableFilters, tableBody} = props
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
        page,
        orderBy,
        order,
        onRowClick,
        updatePage,
        decoder,
        request,
        sortQuery,
        updateSort
    } = props;
    const tableHeader = buildTableHeader(
        header,
        classes,
        request,
        order,
        orderBy,
        sortQuery,
        updateSort
    );
    const tableFilters = buildTableFilters(header, classes);
    const tableBody =
        data && createTableBody(data, onRowClick, classes, decoder);
    if (data && header) {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title={title || constants.defaultTitle}
                        content={
                            <div>
                                <Pagination
                                    request={request}
                                    data={data}
                                    page={page}
                                    updatePage={updatePage}
                                />
                                <TableContent
                                    classes={classes}
                                    tableHeader={tableHeader}
                                    tableFilters={tableFilters}
                                    tableBody={tableBody}
                                />
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
