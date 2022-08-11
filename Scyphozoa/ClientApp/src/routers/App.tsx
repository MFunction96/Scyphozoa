import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.scss';
import 'rsuite/dist/rsuite.min.css';
import Layout from "./Layout";
import Home from './Home';
import Login from './Login';

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route element={<Layout Title="Home" Theme="dark"/>}>
					<Route index element={<Home/>}/>
					<Route path="/Login" element={<Login/>}/>
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		);
	}
}

export default App;
