import React from "react";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TextField from "../inputs/text-field";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

export const buildQuery = values => {
    let query = "";
    if (values) {
        Object.entries(values).forEach(([key, value]) => {
            if (value && value.length) {
                query += `${key}=${value}&`;
            }
        });
    }
    return query;
};

export const createUrl = () => {
    return this.state.sortQuery
        ? `${this.state.domain}${this.state.endPoint}?page=${this.state.page}&${
              this.state.query
          }sort=${this.state.sortQuery}`
        : `${this.state.domain}${this.state.endPoint}?page=${this.state.page}&${
              this.state.query
          }`;
};

export const handleSort = (property, stateOrderBy, stateOrder) => {
    const orderBy = property;
    let order = "desc";
    if (stateOrderBy === property && stateOrder === "desc") {
        order = "asc";
    }
    const sortQuery = order === "desc" ? `-${orderBy}` : `${orderBy}`;
    return [orderBy, order, sortQuery];
};

export const buildTableRow = (row, onRowClick, classes, decoder) => {
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

export const createTableBody = (data, onRowClick, classes, decoder) => (
    <TableBody>
        {data.map(row => {
            return buildTableRow(row, onRowClick, classes, decoder);
        })}
    </TableBody>
);

export const createSortableColumn = (
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

export const buildTableFilters = (header, classes) => {
    return header.map((column, index) => {
        return (
            <TableCell key={index} className={classes.tableHeadCellFilter}>
                <TextField disabled={!column.filterable} />
            </TableCell>
        );
    });
};

export const buildTableHeader = (
    header,
    onSortClick,
    classes,
    order,
    orderBy
) => {
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
