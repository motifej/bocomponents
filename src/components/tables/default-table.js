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

import { buildTableHeader, createTableBody } from "./utils";
import TableFiltering from "../search-service/filter-ui";

const defaultTitle = "Results";

const TableContent = (classes, tableHeader, Filters, tableBody) => {
    return (
        <div className={classes.tableContainer}>
            <Table className={classes.table}>
                <TableHead className={classes["blue"]}>
                    <TableRow className={classes.tableHeadRow}>
                        {tableHeader}
                    </TableRow>
                    <TableRow className={classes.tableHeadRowFilter}>
                        {Filters}
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
        updateSort,
        updateQueryObject
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
    const Filters = (
        <TableFiltering
            header={header}
            queryObject={props.queryObject}
            classes={classes}
            updateQueryObject={updateQueryObject}
        />
    );
    const tableBody =
        data && createTableBody(data, onRowClick, classes, decoder);
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
                                    data={data}
                                    page={page}
                                    updatePage={updatePage}
                                />
                                {TableContent(
                                    classes,
                                    tableHeader,
                                    Filters,
                                    tableBody
                                )}
                            </div>
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );
    } else {
        return <div>table not loaded</div>;
    }
};

export default withStyles(tableStyle)(DefaultTable);
