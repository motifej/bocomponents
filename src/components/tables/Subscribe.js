import React from "react";
import axios from "axios";
import pick from "lodash/pick";
import { buildQuery } from "./utils";
import decoder from "./decoder";
import { requestData, fixData } from "./fetch-data";

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                page: 0,
                totalPages: 0,
                order: "asc",
                orderBy: "",
                sortQuery: "",
                pagination: true,
                query: buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        updateState = data => {
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
            cb = this.pickData,
            headerConfig = config.resultsHeader
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
        setTotalPages = result => {
            const totalPages = Math.ceil(result[0]["count(*)"] / 50);
            this.setState({ totalPages });
        };
        getTotalPages = () => {
            const url = `${this.state.domain}${this.state.endPoint}?${
                this.state.query
            }&p_count`;
            this.fetchData(url, this.setTotalPages);
        };
        request = async (url = this.createUrl()) => {
            const axiosRequest = await requestData(url);
            const fixed = await fixData(
                axiosRequest.data.result,
                config.resultsHeader
            );
            return this.updateState(fixed);
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            //page navigation
            if (prevState.page != this.state.page) {
                this.request();
            }
            //sort navigation
            if (prevState.sortQuery != this.state.sortQuery) {
                this.getTotalPages();
                this.request();
            }
        }

        componentDidMount() {
            this.request();
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    totalPages={this.state.totalPages}
                    pagination={this.state.pagination}
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
                    decoder={decoder}
                />
            );
        }
    };

export default Subscribe;
