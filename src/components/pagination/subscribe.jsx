import React from "react";
import PaginationUI from "./views/default-pagination/";
import utils from "./utils";
import constants from "./constants";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPages: 0
        };
    }
    nextPage = () => this.props.updatePage(this.props.page + 1);

    previousPage = () => this.props.updatePage(this.props.page - 1);

    setTotalPages = response => {
        const totalPages = utils.extractCount(response);
        this.setState({ totalPages });
    };
    getTotalPages = () =>
        this.props.request(constants.TOTAL_PAGES, this.setTotalPages);
    componentDidMount() {
        this.getTotalPages();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.page != this.props.page) this.props.request();
    }
    render() {
        const {
            nextPage,
            previousPage,
            state: { totalPages },
            props: { data, page }
        } = this;
        return (
            <PaginationUI
                onNextClick={nextPage}
                onPreviousClick={previousPage}
                totalPages={totalPages}
                page={page}
                isNextButtonDisabled={!data || data.length < 50}
                isPreviousButtonDisabled={!page}
            />
        );
    }
}

export default Pagination;
