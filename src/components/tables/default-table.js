import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Assignment from "@material-ui/icons/Assignment";

import { withStyles } from "@material-ui/core/styles";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import GridContainer from "../MUI-Components/Grid/GridContainer.jsx";
import ItemGrid from "../MUI-Components/Grid/ItemGrid.jsx";
import tableStyle from "./style";
import IconCard from "../MUI-Components/Cards/IconCard.jsx";
import ReactTablePagination from "../pagination/";
import TextField from "../inputs/text-field";

const createSortableColumn = (
    column,
    orderBy,
    order,
    createSortHandler,
    classes
) => {
    return (
        <TableSortLabel
            active={column.value === orderBy}
            direction={order}
            onClick={id => createSortHandler(column.value)}
            className={classes.labelSpan}
        >
            {column.name}
        </TableSortLabel>
    );
};

const buildTableHeader = (header, onSortClick, classes, order, orderBy) => {
    const createSortHandler = (property, event) => {
        onSortClick(event, property);
    };
    return header.map((column, index) => {
        const cellClass = column.sortable
            ? classes.tableHeadCell + " " + classes.tableHeadCellSortable
            : classes.tableHeadCell;
        return (
            <TableCell key={index} className={cellClass}>
                {column.sortable
                    ? createSortableColumn(
                          column,
                          orderBy,
                          order,
                          createSortHandler,
                          classes
                      )
                    : column.name}
            </TableCell>
        );
    });
};

const buildTableFilters = (header, classes) => {
    return header.map((column, index) => {
        return (
            <TableCell key={index} className={classes.tableHeadCellFilter}>
                <TextField disabled={!column.filterable} />
            </TableCell>
        );
    });
};

const buildTableRow = (row, onRowClick, classes, decoder) => {
    console.log("docded", decoder);
    return (
        <TableRow
            className={classes.tableDataRow}
            onClick={id => onRowClick(row.id)}
            key={row.id}
        >
            {Object.keys(row).map((key, index) => {
                return (
                    <TableCell key={index} className={classes.tableDataCell}>
                        {decoder(key, row[key])}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

const DefaultTable = props => {
    const {
        classes,
        data,
        header,
        title,
        page,
        onRowClick,
        onSortClick,
        totalPages,
        onNextClick,
        onPreviousClick,
        isNextButtonDisabled,
        isPreviousButtonDisabled,
        order,
        orderBy,
        decoder
    } = props;
    if (header && data) {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title={title || "Results"}
                        content={
                            <div>
                                <ReactTablePagination
                                    page={page}
                                    totalPages={totalPages}
                                    onNextClick={onNextClick}
                                    onPreviousClick={onPreviousClick}
                                    isNextButtonDisabled={isNextButtonDisabled}
                                    isPreviousButtonDisabled={
                                        isPreviousButtonDisabled
                                    }
                                />
                                <div className={classes.tableContainer}>
                                    <Table className={classes.table}>
                                        <TableHead className={classes["blue"]}>
                                            <TableRow
                                                className={classes.tableHeadRow}
                                            >
                                                {buildTableHeader(
                                                    header,
                                                    onSortClick,
                                                    classes,
                                                    order,
                                                    orderBy
                                                )}
                                            </TableRow>
                                            <TableRow
                                                className={
                                                    classes.tableHeadRowFilter
                                                }
                                            >
                                                {buildTableFilters(
                                                    header,
                                                    classes
                                                )}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map(row => {
                                                return buildTableRow(
                                                    row,
                                                    onRowClick,
                                                    classes,
                                                    decoder
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );
    } else {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title={title || "Results"}
                        content={
                            <div className={classes.noResults}>No Results</div>
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );
    }
};

export default withStyles(tableStyle)(DefaultTable);
