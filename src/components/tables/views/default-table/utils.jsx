import React from "react";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import SubscribeSort from "subscribe/sort";

export const createTableContent = (
    classes,
    tableHeader,
    Filters,
    tableBody
) => {
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

export const createTableHeader = (
    header,
    classes,
    request,
    order,
    orderBy,
    sortQuery,
    updateSort
) => {
    return header.map((col, index) => {
        const cellClass = col.sortable
            ? classes.tableHeadCell + " " + classes.tableHeadCellSortable
            : classes.tableHeadCell;
        return (
            <TableCell key={index} className={cellClass}>
                {col.sortable ? (
                    <SubscribeSort
                        col={col}
                        order={order}
                        orderBy={orderBy}
                        classes={classes}
                        sortQuery={sortQuery}
                        updateSort={updateSort}
                        request={request}
                    />
                ) : (
                    col.name
                )}
            </TableCell>
        );
    });
};

const createTableRow = (row, onRowClick, classes, decoder) => {
    return (
        <TableRow
            className={classes.tableDataRow}
            onClick={() => onRowClick(row.id)}
            key={row.id}
        >
            {Object.keys(row).map((key, index) => (
                <TableCell key={index} className={classes.tableDataCell}>
                    {decoder.run(key, row[key])}
                </TableCell>
            ))}
        </TableRow>
    );
};

export const createTableBody = (data, onRowClick, classes, decoder) => (
    <TableBody>
        {data.map(row => {
            return createTableRow(row, onRowClick, classes, decoder);
        })}
    </TableBody>
);
