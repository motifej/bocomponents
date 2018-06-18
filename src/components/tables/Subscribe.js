import React from "react";
import pick from "lodash/pick";
import { buildQuery } from "./utils";
import enJson from "../../en.json";
const coded = ["country_iso"];
const time = ["timestamp", "time_stamp"];
const isCoded = key => coded.includes(key);
const isTime = key => time.includes(key);
const getTime = timestamp => {
    return `${new Date(timestamp).toDateString()} ${new Date(
        timestamp
    ).toLocaleTimeString()}`;
};
const T = token => {
    return enJson[token];
};

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
                query: buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        decoder = (key, value) => {
            if (isCoded(key)) return T(`${key}.${value}`);
            if (isTime(key)) return getTime(value);
            return value;
        };
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
        getTotalPages = () => {
            const url = `${this.state.domain}${this.state.endPoint}?${
                this.state.query
            }&p_count`;
            this.fetchData(url, this.setTotalPages);
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            //page navigation
            if (prevState.page != this.state.page) {
                this.fetchData();
            }
            //sort navigation
            if (prevState.sortQuery != this.state.sortQuery) {
                this.getTotalPages();
                this.fetchData();
            }
        }

        componentDidMount() {
            this.getTotalPages();
            this.fetchData();
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    totalPages={this.state.totalPages}
                    decoder={this.decoder}
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
