import React from "react";
import pick from "lodash/pick";
import { buildQuery } from "./utils";

const fetchData = URL => {
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            return myJson.result;
        });
};

const pickData = (results, headerConfig) => {
    return results.map(result =>
        pick(result, headerConfig.map(col => col.value))
    );
};

const subscribeFetchData = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: fetchData(),
                loading: true,
                query: buildQuery(config.query),
                domain: config.domain,
                endPoint: config.endPoint
            };
        }

        setData = data => {
            this.setState({ data, loading: false });
        };

        createUrl = () =>
            `${this.state.domain}${this.state.endPoint}?page=${
                this.state.page
            }&${this.state.query}`;

        componentDidMount() {}
        render() {
            return (
                <Wrapped
                    {...this.props}
                    data={this.state.data}
                    header={config.resultsHeader}
                    title={config.title}
                    totalPages={this.state.totalPages}
                    decoder={this.decoder}
                />
            );
        }
    };

export default subscribeFetchData;
