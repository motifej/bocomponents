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
                query: utils.buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        updateSort = ({ order, orderBy, sortQuery }) => {
            this.setState({ sortQuery });
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
            const { domain, endPoint, page, sortQuery, query } = this.state;
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
        render() {
            const { data, page, order, sortQuery, orderBy } = this.state;
            return (
                <Wrapped
                    {...this.props}
                    data={data}
                    header={config && config.resultsHeader}
                    title={config && config.title}
                    decoder={decoder}
                    updatePage={this.updatePage}
                    page={page}
                    request={this.request}
                    order={order}
                    orderBy={orderBy}
                    sortQuery={sortQuery}
                    updateSort={this.updateSort}
                />
            );
        }
    };
export default Subscribe;
