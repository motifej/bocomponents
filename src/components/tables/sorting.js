import React from "react";
import TableSortLabel from "@material-ui/core/TableSortLabel";

class SubscribeSort extends React.Component {
    onSortClick = property => {
        const { orderBy, order } = this.props;
        const newSort = sortUtils.handleSort(property, orderBy, order);
        this.props.updateSort(newSort);
    };

    render() {
        const { col, classes, orderBy, order } = this.props;
        return (
            <TableSortLabel
                active={col.value === orderBy}
                direction={order}
                onClick={id => this.onSortClick(col.value)}
                className={classes.labelSpan}
            >
                {col.name}
            </TableSortLabel>
        );
    }
}

export default SubscribeSort;

const sortUtils = {
    handleSort(property, stateOrderBy, stateOrder) {
        const orderBy = property;
        let order = "desc";
        if (stateOrderBy === property && stateOrder === "desc") {
            order = "asc";
        }
        const sortQuery = order === "desc" ? `-${orderBy}` : `${orderBy}`;
        const result = { orderBy, order, sortQuery };
        return result;
    }
};
