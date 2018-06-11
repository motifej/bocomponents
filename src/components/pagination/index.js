import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import paginationStyle from "./style.jsx";

class ReactTablePagination extends Component {
    render() {
        const {
            classes,
            page,
            totalPages,
            onNextClick,
            onPreviousClick,
            isPreviousButtonDisabled,
            isNextButtonDisabled
        } = this.props;
        return (
            <div className={classes.pagination}>
                <div className={classes.btnContainer}>
                    <button
                        onClick={onPreviousClick}
                        disabled={isPreviousButtonDisabled}
                        className={classes.btn}
                    >
                        Previous
                    </button>
                </div>
                <div className={classes.center}>
                    <span className={classes.pageInfo}>
                        Page
                        <div className={classes.pageJump}>
                            <input
                                className={classes.pageInput}
                                type={"number"}
                                onChange={e => {
                                    const nextPage = e.target.value;
                                    if (nextPage > 0)
                                        this.setState({
                                            page: nextPage,
                                            canPrevious: true
                                        });
                                    else {
                                        this.setState({
                                            page: 1,
                                            canPrevious: false
                                        });
                                    }
                                }}
                                value={page + 1}
                                onBlur={this.applyPage}
                                onKeyPress={e => {
                                    if (e.which === 13 || e.keyCode === 13) {
                                        this.applyPage();
                                    }
                                }}
                            />
                        </div>
                        of
                        <span className={classes.totalPages}>
                            {totalPages || 1}
                        </span>
                    </span>
                </div>
                <div className={classes.btnContainer}>
                    <button
                        onClick={onNextClick}
                        disabled={isNextButtonDisabled}
                        className={classes.btn}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default withStyles(paginationStyle)(ReactTablePagination);
