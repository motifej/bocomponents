import React from "react";

const subscribeSort = Wrapped =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                order: "asc",
                orderBy: "",
                sortQuery: ""
            };
        }
        handleRequestSort = (event, property) => {
            const orderBy = property;
            let order = "desc";
            if (
                this.state.orderBy === property &&
                this.state.order === "desc"
            ) {
                order = "asc";
            }
            const sortQuery = order === "desc" ? `-${orderBy}` : `${orderBy}`;
            this.setState({
                orderBy,
                order,
                sortQuery,
                page: 0
            });
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.sortQuery != this.state.sortQuery) {
                this.getTotalPages();
                this.request();
            }
        }

        render() {
            return (
                <Wrapped
                    {...this.props}
                    onSortClick={this.handleRequestSort}
                    order={this.state.order}
                    orderBy={this.state.orderBy}
                />
            );
        }
    };

export default subscribeSort;

// updateSortState = (orderBy, order, sortQuery) => {
//     this.setState({
//         orderBy,
//         order,
//         sortQuery,
//         page: 0
//     });
// };
// handleRequestSort = (event, property, cb = this.updateSortState) => {
//     const [orderBy, order, sortQuery] = handleSort(
//         property,
//         this.state.orderBy,
//         this.state.order
//     );
//     cb(orderBy, order, sortQuery);
// };
