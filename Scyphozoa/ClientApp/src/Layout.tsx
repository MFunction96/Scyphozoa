import React from "react";
import {Outlet} from "react-router-dom";

export declare interface LayoutProps {
	Title: string
}

export default class Layout extends React.Component<LayoutProps> {
	render() {
		return (
			<>
				<h1>
					This is layout.
				</h1>
				<Outlet/>
			</>
		);
	}
}
