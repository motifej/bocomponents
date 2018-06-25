import React from "react";
import service from "./service";
import decoder from "./decoder";
import { utils } from "./utils.js";

export const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                page: 0,
                order: "asc",
                orderBy: "",
                sortQuery: "",
                queryObject: config.query,
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        updateQueryObject = newQueryObject => {
            this.setState({
                queryObject: { ...this.state.queryObject, ...newQueryObject }
            });
        };
        updateSort = response => {
            const { order, orderBy, sortQuery } = response;
            this.setState({ order, orderBy, sortQuery });
        };
        updatePage = newPage =>
            this.setState({
                page: newPage
            });

        updateDataState = async response => {
            const data = await utils.fixData(
                response.data.result,
                config.resultsHeader
            );
            this.setState({
                data
            });
        };

        request = (action, cb = this.updateDataState) => {
            const url = this.createUrl(action);
            service.request(url, cb);
        };

        createUrl = action => {
            const {
                domain,
                endPoint,
                page,
                sortQuery,
                queryObject
            } = this.state;
            const query = utils.buildQuery(queryObject);
            return utils.createUrl(
                domain,
                endPoint,
                page,
                sortQuery,
                query,
                action
            );
        };
        onRowClick = id => console.log("id", id);

        componentDidMount() {
            if (config) this.request();
        }
        componentDidUpdate(prevProps, prevState) {
            if (prevState.sortQuery != this.state.sortQuery) {
                this.request("SORTED_DATA");
            }
            if (prevState.queryObject != this.state.queryObject) {
                this.request();
            }
        }
        render() {
            const { data, page, order, sortQuery, orderBy } = this.state;
            return (
                <Wrapped
                    {...this.props}
                    data={data}
                    header={config.resultsHeader}
                    title={config.title}
                    decoder={decoder}
                    updatePage={this.updatePage}
                    page={page}
                    request={this.request}
                    order={order}
                    queryObject={this.state.queryObject}
                    orderBy={orderBy}
                    sortQuery={sortQuery}
                    updateQueryObject={this.updateQueryObject}
                    updateSort={this.updateSort}
                />
            );
        }
    };

export default Subscribe;
