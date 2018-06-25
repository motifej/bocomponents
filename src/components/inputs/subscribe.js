import { Component, createElement } from "react";
import { isStateLess } from "./utils";

export default (MUIComponent, mapProps) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> e7090be0b8326786c865e6cda29fb80932c64b15
};
