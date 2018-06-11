import React from "react";
import pick from "lodash/pick";
import { buildQuery } from "./utils";

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                page: 0,
                totalPages: 5,
                order: "asc",
                orderBy: "",
                sortQuery: "",
                query: buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        setData = data => {
            this.setState({ data, loading: false });
        };
        pickData = (results, headerConfig, cb = this.setData) => {
            const pickedData = results.map((result, index) =>
                pick(result, headerConfig.map((col, index) => col.value))
            );
            cb(pickedData);
        };
        createUrl = () => {
            return this.state.sortQuery
                ? `${this.state.domain}${this.state.endPoint}?page=${
                      this.state.page
                  }&${this.state.query}sort=${this.state.sortQuery}`
                : `${this.state.domain}${this.state.endPoint}?page=${
                      this.state.page
                  }&${this.state.query}`;
        };
        fetchData = (
            URL = this.createUrl(),
            headerConfig = config.resultsHeader,
            cb = this.pickData
        ) => {
            fetch(URL)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    myJson.success && cb(myJson.result, headerConfig);
                });
        };
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
        nextPage = () => {
            this.setState({ page: this.state.page + 1 });
        };
        previousPage = () => {
            this.setState({ page: this.state.page - 1 });
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            //page navigation
            if (prevState.page != this.state.page) {
                this.fetchData();
            }
            //sort navigation
            if (prevState.sortQuery != this.state.sortQuery) {
                this.fetchData();
            }
        }
        componentDidMount() {
            this.fetchData();
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    totalPages={this.state.totalPages}
                    onNextClick={this.nextPage}
                    onPreviousClick={this.previousPage}
                    onRowClick={config.onRowClick}
                    onSortClick={this.handleRequestSort}
                    isNextButtonDisabled={
                        !this.state.data || this.state.data.length < 50
                    }
                    isPreviousButtonDisabled={!this.state.page}
                    data={this.state.data}
                    page={this.state.page}
                    header={config.resultsHeader}
                    title={config.title}
                    order={this.state.order}
                    orderBy={this.state.orderBy}
                />
            );
        }
    };

export default Subscribe;
