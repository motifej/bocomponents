import React from "react";
import { buildQuery, handleSort } from "./utils";
import decoder from "./decoder";
import { requestData, fixData, requestTest } from "./fetch-data";

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                page: 0,
                pagination: true,
                query: buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        updateState = data => {
            this.setState({ data, loading: false });
        };
        createUrl = () => {
            const { domain, endPoint, page, query, sortQuery } = this.state;
            return this.state.sortQuery
                ? `${domain}${endPoint}?page=${page}&${query}sort=${sortQuery}`
                : `${domain}${endPoint}?page=${page}&${query}`;
        };

        request = () => {
            const { domain, endPoint, page, query } = this.state;
            requestTest(
                `${domain}${endPoint}?page=${page}&${query}`,
                this.updateState,
                config
            );
        };
        componentDidMount() {
            this.request();
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    pagination={this.state.pagination}
                    data={this.state.data}
                    header={config.resultsHeader}
                    title={config.title}
                    request={this.request}
                    order={this.state.order}
                    orderBy={this.state.orderBy}
                    decoder={decoder}
                />
            );
        }
    };

export default Subscribe;
