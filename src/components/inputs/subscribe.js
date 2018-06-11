import { Component, createElement } from "react";
import { isStateLess } from "./utils";

export default (MUIComponent, mapProps) => {
    return class InputComponent extends Component {
        getRenderedComponent() {
            return this.refs.component;
        }
        render() {
            return createElement(MUIComponent, {
                ...mapProps(this.props),
                ref: !isStateLess(MUIComponent)
                    ? el => (this.component = el)
                    : null
            });
        }
    };
    InputComponent.displayName = `MUIRF${MUIComponent.name}`;
};
