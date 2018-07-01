import React from "react";
import pick from "lodash/pick";

import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";

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
    fixData(response, header) {
        return response.map(result =>
            pick(result, header.map(col => col.value))
        );
    }
};

export const tableUtils = {
    createSortableColumn(col, orderBy, order, onSortClick, classes) {
        return (
            <TableSortLabel
                active={col.value === orderBy}
                direction={order}
                onClick={() => onSortClick(col.value)}
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

export const buildTableFilters = (header, classes) => {
    return header.map((column, index) => {
        return (
            <TableCell key={index} className={classes.tableHeadCellFilter}>
                <TextField disabled={!column.filterable} />
            </TableCell>
        );
    });
};
