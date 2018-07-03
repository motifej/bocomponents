import React from "react";
import { render } from "react-dom";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";

class RangeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fromValue: 0, toValue: 1000 };
    }
    onFromChange = e => {
        this.setState({ fromValue: e.target.value });
    };
    onToChange = e => {
        this.setState({ toValue: e.target.value });
    };
    onRangeChange = value => {
        this.setState({ fromValue: value[0], toValue: value[1] });
    };
    render() {
        return (
            <div style={{ width: "40%" }}>
                <input
                    value={this.state.fromValue}
                    type="number"
                    onChange={this.onFromChange}
                />
                <Range
                    name="hello"
                    min={5}
                    max={1000}
                    defaultValue={[0, 1000]}
                    value={[
                        parseInt(this.state.fromValue) || 0,
                        parseInt(this.state.toValue) || 0
                    ]}
                    step={1}
                    onChange={this.onRangeChange}
                />
                <input
                    value={this.state.toValue}
                    type="number"
                    onChange={this.onToChange}
                />
            </div>
        );
    }
}

const Component = () => {
    return <RangeInput />;
};

render(<Component />, document.getElementById("root"));
