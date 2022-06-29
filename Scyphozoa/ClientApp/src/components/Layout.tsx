import React from "react";
import {Outlet} from "react-router-dom";
import {Container, Nav, Sidebar, Sidenav} from "rsuite";
import {Dashboard} from "@rsuite/icons";
import "./Layout.scss";

export declare interface LayoutProps {
	Title: string
}

export default class Layout extends React.Component<LayoutProps> {
	render() {
		return (
			<div>
				<Container>
					<Sidebar>
						<Sidenav>
							<Sidenav.Header>
								<h1>Sidenav Header</h1>
							</Sidenav.Header>
							<Sidenav.Body>
								<Nav activeKey="1">
									<Nav.Item eventKey="1" icon={<Dashboard />}>
										Dashboard
									</Nav.Item>
								</Nav>
							</Sidenav.Body>
						</Sidenav>
					</Sidebar>
					<h1>
						This is layout.
					</h1>
					<Outlet/>
				</Container>
			</div>
		);
	}
}
