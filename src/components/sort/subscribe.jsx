import React from "react";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import sortUtils from "./utils";

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
                onClick={() => this.onSortClick(col.value)}
                className={classes.labelSpan}
            >
                {col.name}
            </TableSortLabel>
        );
    }
}

export default SubscribeSort;
