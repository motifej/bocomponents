import React from "react";

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                page: 0,
                totalPages: getPagesCount()
            };
        }
        nextPage = () => {
            this.setState({ page: this.state.page + 1 });
        };
        previousPage = () => {
            this.setState({ page: this.state.page - 1 });
        };
        setTotalPages = result => {
            const totalPages = Math.ceil(result[0]["count(*)"] / 50);
            this.setState({ totalPages });
        };
        getPagesCount = () => {
            const url = `${this.state.domain}${this.state.endPoint}?${
                this.state.query
            }&p_count`;
            this.fetchData(url, this.setTotalPages);
        };
        render() {
            return (
                <Wrapped
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    getPagesCount={this.getPagesCount}
                    page={this.state.page}
                    totalPages={this.state.totalPages}
                />
            );
        }
    };

export default Subscribe;
