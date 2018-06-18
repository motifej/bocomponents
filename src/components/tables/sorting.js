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
