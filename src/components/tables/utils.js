import React from "react";
import pick from "lodash/pick";

import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import SubscribeSort from "./sorting";

export const utils = {
    createUrl(domain, endPoint, page, sortQuery, query, action) {
        let url = `${domain}${endPoint}?${query}`;
        if (action === "SORTED_DATA" || sortQuery.length > 0)
            return `${url}&page=${page}&sort=${sortQuery}`;
        if (action === "TOTAL_PAGES") return `${url}&p_count`;
        return `${url}&page=${page}`;
    },
    buildQuery(values) {
        let query = "";
        if (values) {
            Object.entries(values).forEach(([key, value]) => {
                if (value && value.length) {
                    query += `${key}=${value}&`;
                }
            });
        }
        return query;
    },
    extractCount(response) {
        const count = response.data.result[0]["count(*)"];
        return Math.ceil(count / 50);
    },
    fixData(response, header) {
        return response.map(result =>
            pick(result, header.map(col => col.value))
        );
    }
};

export const buildTableHeader = (
    header,
    classes,
    request,
    order,
    orderBy,
    sortQuery,
    updateSort
) => {
    return header.map((column, index) => {
        const cellClass = column.sortable
            ? classes.tableHeadCell + " " + classes.tableHeadCellSortable
            : classes.tableHeadCell;
        return (
            <TableCell key={index} className={cellClass}>
                {column.sortable ? (
                    <SubscribeSort
                        col={column}
                        order={order}
                        orderBy={orderBy}
                        classes={classes}
                        sortQuery={sortQuery}
                        updateSort={updateSort}
                        request={request}
                    />
                ) : (
                    column.name
                )}
            </TableCell>
        );
    });
};

export const tableUtils = {
    createSortableColumn(col, orderBy, order, onSortClick, classes) {
        return (
            <TableSortLabel
                active={col.value === orderBy}
                direction={order}
                onClick={id => onSortClick(col.value)}
                className={classes.labelSpan}
            >
                {col.name}
            </TableSortLabel>
        );
    },
    handleSort(property, stateOrderBy, stateOrder) {
        const nOrderBy = property;
        let nOrder = "desc";
        if (stateOrderBy === property && stateOrder === "desc") {
            nOrder = "asc";
        }
        const nSortQuery = nOrder === "desc" ? `-${nOrderBy}` : `${nOrderBy}`;
        return { nOrderBy, nOrder, nSortQuery };
    }
};

export const buildTableRow = (row, onRowClick, classes, decoder) => {
    return (
        <TableRow
            className={classes.tableDataRow}
            onClick={id => onRowClick(row.id)}
            key={row.id}
        >
            {Object.keys(row).map((key, index) => (
                <TableCell key={index} className={classes.tableDataCell}>
                    {decoder(key, row[key])}
                </TableCell>
            ))}
        </TableRow>
    );
};

export const createTableBody = (data, onRowClick, classes, decoder) => (
    <TableBody>
        {data.map(row => {
            return buildTableRow(row, onRowClick, classes, decoder);
        })}
    </TableBody>
);
