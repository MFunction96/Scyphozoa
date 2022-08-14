import React from "react";
import {Container} from "rsuite";
import "./_development.scss"

class _development extends React.Component {
	render() {
		if (__DEBUG__) {
			return (
				<Container>
					<div className="debug">DEBUG mode</div>
				</Container>
			);
		} else {
			return (
				<div></div>
			);
		}
	}
}

export default _development;
