import React from "react";

const Subscribe = Wrapped =>
    class extends Wrapped {
        constructor(props) {
            super(props);
            this.state = {
                page: 0
            };
        }
        nextPage = () => {
            this.setState({ page: this.state.page + 1 });
        };
        previousPage = () => {
            this.setState({ page: this.state.page - 1 });
        };

        render() {
            return (
                <Wrapped
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    page={this.state.page}
                />
            );
        }
    };

export default Subscribe;
