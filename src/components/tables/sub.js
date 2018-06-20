import React from "react";
import { requestPagesCount, request } from "./request";
import decoder from "./decoder";
const mainUrl = "http://almond:8081/accounts?page=1";

export const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                order: "",
                orderBy: ""
            };
        }
        updatePage = action => {
            if (action === "INCREMENT")
                this.setState({ page: this.state.page++ });
            if (action === "DECREMENT")
                this.setState({ page: this.state.page-- });
        };
        updateState = data => {
            this.setState({ data, loading: false });
        };
        requestData = (config, url, cb = this.updateState) => {
            request(config, url, cb);
        };
        requestPagesCount = (url, cb) => {
            requestPagesCount(url, cb);
        };
        onRowClick = id => {
            console.log("id", id);
        };
        onSortClick = id => {
            console.log("id", id);
        };
        componentDidMount() {
            if (config)
                this.requestData(config, "http://almond:8081/accounts?");
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.page != this.state.page) {
                this.requestData(config, mainUrl);
            }
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    data={this.state.data}
                    header={config && config.resultsHeader}
                    title={config && config.title}
                    onSortClick={this.onSortClick}
                    order={this.state.order}
                    updatePage={this.updatePage}
                    orderBy={this.state.orderBy}
                    decoder={decoder}
                    request={this.requestData}
                    requestPagesCount={this.requestPagesCount}
                />
            );
        }
    };
export default Subscribe;
