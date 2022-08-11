import React from "react";
import {Container, Content, Footer, Header} from "rsuite";

class Home extends React.Component {
	render() {
		return (
			<Container>
				<Header>
					<h2>Page Title</h2>
				</Header>
				<Content>Content</Content>
				<Footer>
					<h4>Page Footer</h4>
				</Footer>
			</Container>
		);
	}
}

export default Home;
