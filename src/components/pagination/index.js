import React from "react";
import PaginationUI from "./view";
import utils from "./utils";
import constants as c from "./constants"

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalPages: 0 };
    }
    nextPage = () => this.props.updatePage(this.props.page + 1);

    previousPage = () => this.props.updatePage(this.props.page - 1);

    setTotalPages = response => {
        const totalPages = utils.extractCount(response);
        this.setState({ totalPages });
    };
    getTotalPages = () => this.props.request(c.TOTAL_PAGES, this.setTotalPages);
    componentDidMount() {
        this.getTotalPages();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.page != this.props.page) this.props.request();
    }
    render() {
        const { totalPages } = this.state;
        const { data, page } = this.props;
        return (
            <PaginationUI
                onNextClick={this.nextPage}
                onPreviousClick={this.previousPage}
                totalPages={totalPages}
                page={page}
                isNextButtonDisabled={!data || data.length < 50}
                isPreviousButtonDisabled={!this.props.page}
            />
        );
    }
}

export default Pagination;
