import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Assignment from "@material-ui/icons/Assignment";
import { withStyles } from "@material-ui/core/styles";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";
import GridContainer from "../MUI-Components/Grid/GridContainer.jsx";
import ItemGrid from "../MUI-Components/Grid/ItemGrid.jsx";
import tableStyle from "./style";
import IconCard from "../MUI-Components/Cards/IconCard.jsx";
import ReactTablePagination from "../Pagination/";

const createSortableColumn = (column, createSortHandler) => {
    return (
        <Tooltip
            title="Sort"
            placement={column.numeric ? "bottom-end" : "bottom-start"}
            enterDelay={300}
        >
            <TableSortLabel
                active={false}
                direction={"asc"}
                onClick={id => createSortHandler(column.value)}
            >
                {column.name}
            </TableSortLabel>
        </Tooltip>
    );
};

const buildTableHeader = (header, onSortClick, classes) => {
    const createSortHandler = (property, event) => {
        onSortClick(event, property);
    };
    return header.map((column, index) => {
        return (
            <TableCell key={index} className={classes.tableHeadCell}>
                {column.sortable
                    ? createSortableColumn(column, createSortHandler)
                    : column.name}
            </TableCell>
        );
    });
};

const buildTableRow = (row, onRowClick, classes) => (
    <TableRow
        className={classes.tableDataRow}
        onClick={id => onRowClick(row.id)}
        key={row.id}
    >
        {Object.keys(row).map((key, index) => (
            <TableCell key={index} className={classes.tableDataCell}>
                {row[key]}
            </TableCell>
        ))}
    </TableRow>
);

const DefaultTable = props => {
    const {
        classes,
        data,
        header,
        page,
        onRowClick,
        onSortClick,
        totalPages,
        onNextClick,
        onPreviousClick,
        isNextButtonDisabled,
        isPreviousButtonDisabled
    } = props;
    if (header && data) {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title="Customer Search Results"
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
                                                className={classes.tableRow}
                                            >
                                                {buildTableHeader(
                                                    header,
                                                    onSortClick,
                                                    classes
                                                )}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map(row => {
                                                return buildTableRow(
                                                    row,
                                                    onRowClick,
                                                    classes
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
            <GridContainer className={classes.tableResponsive}>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title="Customer Search Results"
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
