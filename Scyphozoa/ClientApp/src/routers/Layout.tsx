import React from "react";
import {Outlet} from "react-router-dom";
import {Container, CustomProvider, Nav, Sidebar, Sidenav} from "rsuite";
import {Dashboard} from "@rsuite/icons";
import "./Layout.scss";
import _development from "../components/_development";

export type LayoutTheme = 'light' | 'dark' | 'high-contrast';

export declare interface LayoutProps {
	Title: string,
	Theme: LayoutTheme
}

export default class Layout extends React.Component<LayoutProps> {
	title: string;
	theme: LayoutTheme;

	constructor(prop: LayoutProps) {
		super(prop);
		this.theme = prop.Theme;
		this.title = prop.Title;
	}

	render() {
		return (
			<CustomProvider theme={this.theme}>
				<div className="full">
					<_development></_development>
					<Container className="full">
						<Sidebar className="full">
							<Sidenav className="full">
								<Sidenav.Header>
									<h3>Sidenav Header</h3>
								</Sidenav.Header>
								<Sidenav.Body>
									<Nav activeKey="1">
										<Nav.Item eventKey="1" icon={<Dashboard/>}>
											Dashboard
										</Nav.Item>
									</Nav>
								</Sidenav.Body>
								<div className="version">{__VERSION__}</div>
							</Sidenav>
						</Sidebar>
						<Container className="full">
							<Outlet/>
						</Container>
					</Container>
				</div>
			</CustomProvider>
		);
	}
}
