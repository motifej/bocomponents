import React from "react";

const Subscribe = (Wrapped, config) =>
	class extends React.Component {
		render() {
			return (
				<Wrapped
					{...this.props}
					className={config && config.style}
					onClick={config && config.onClick}
					component={config && config.component}
					disabled={config && config.disabled}
					href={config && config.href}
				/>
			);
		}
	};

export default Subscribe;
