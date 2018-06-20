import React from "react";
import PaginationUI from "../pagination";
const config = {
    domain: "http://almond:8081",
    endPoint: "/accounts",
    title: "Users - Search Results",
    resultsHeader: [
        {
            value: "id",
            name: "User ID",
            sortable: true,
            filterable: true
        },
        {
            value: "time_stamp",
            name: "Registration Date",
            sortable: true,
            filterable: true
        },
        {
            value: "first_name",
            name: "First Name",
            filterable: true
        },
        {
            value: "last_name",
            name: "Last Name",
            filterable: true
        },

        {
            value: "status",
            name: "Status",
            sortable: true,
            filterable: true
        },
        {
            value: "country_iso",
            name: "Country",
            sortable: true,
            filterable: true
        }
    ]
};
const totalPagesUrl = "http://almond:8081/accounts?p_count";
const mainUrl = "http://almond:8081/accounts?page=1";
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalPages: 0, page: 0 };
    }
    nextPage = () => {
        this.setState({ page: this.state.page++ });
    };
    previousPage = () => {
        this.setState({ page: this.state.page-- });
    };
    setTotalPages = result => {
        const count = result.data.result[0]["count(*)"];
        const totalPages = Math.ceil(count / 50);
        this.setState({ totalPages });
    };
    getTotalPages = (url, cb) => {
        this.props.requestPagesCount(url, cb);
    };
    componentDidMount() {
        this.getTotalPages(totalPagesUrl, this.setTotalPages);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.page != this.state.page) {
            this.props.request(config, mainUrl);
        }
    }
    render() {
        return (
            <PaginationUI
                onNextClick={this.nextPage}
                onPreviousClick={this.previousPage}
                totalPages={this.state.totalPages}
                page={this.state.page}
                isNextButtonDisabled={false}
                isPreviousButtonDisabled={!this.state.page}
            />
        );
    }
}

export default Pagination;
