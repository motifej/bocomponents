import React from "react";
import {
    requestPagesCount,
    request
} from "./request";
import decoder from "./decoder";
import {
    handleSort
} from "./utils.js"

const mainUrl = "http://almond:8081/accounts?page=1";

export const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                order: "asc",
                orderBy: "",
                sortQuery: "",
                domain: config.domain,
                endPoint: config.endPoint
            };
        }
        updatePage = newPage => {
            this.setState({
                page: newPage
            })
        };
        updateState = data => {
            this.setState({
                data,
                loading: false
            });
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
        onSortClick = (event, property) => {
            const {
                orderBy,
                order
            } = this.state
            const {
                orderBy,
                order,
                sortQuery
            } = handleSort(property, orderBy, order)
            console.log('something', something)
            this.setState({
                orderBy,
                order,
                sortQuery,
            })

        };
        componentDidMount() {
            if (config)
                this.requestData(config, "http://almond:8081/accounts?");
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.sortQuery != this.state.sortQuery) {
                // this.getTotalPages();
                this.requestData(config, "http://almond:8081/accounts?page=3");
            }
        }
        render() {
            return ( <
                Wrapped { ...this.props
                }
                data = {
                    this.state.data
                }
                header = {
                    config && config.resultsHeader
                }
                title = {
                    config && config.title
                }
                onSortClick = {
                    this.onSortClick
                }
                order = {
                    this.state.order
                }
                updatePage = {
                    this.updatePage
                }
                orderBy = {
                    this.state.orderBy
                }
                decoder = {
                    decoder
                }
                request = {
                    this.requestData
                }
                requestPagesCount = {
                    this.requestPagesCount
                }
                />
            );
        }
    };
export default Subscribe;