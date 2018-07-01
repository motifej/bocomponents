import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TextField from "../inputs/text-field";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typingTimeout: 0
        };
    }
    search = ({ target }) => {
        const { updateQueryObject } = this.props;
        let newObject = {};
        newObject[target.name] = target.value;
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            typingTimeout: setTimeout(function() {
                updateQueryObject(newObject);
            }, 1000)
        });
    };
    getValue = value => {
        const { queryObject } = this.props;
        if (queryObject.hasOwnProperty(value)) {
            return queryObject[value];
        }
        return undefined;
    };
    render() {
        const { header, classes } = this.props;
        return header.map((col, index) => (
            <TableCell key={index} className={classes.tableHeadCellFilter}>
                <TextField
                    disabled={!col.filterable}
                    onChange={this.search}
                    name={col.value}
                    autoComplete={col.autocomplete}
                    placeholder={this.getValue(col.value)}
                />
            </TableCell>
        ));
    }
}

export default Filter;
