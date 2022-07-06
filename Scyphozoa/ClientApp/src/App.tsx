import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.scss';
import 'rsuite/dist/rsuite.min.css';
import Layout, {LayoutTheme} from "./components/Layout";
import Home from './components/Home';

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Layout Title="Home" Theme="dark"/>}>
					<Route path="/" element={<Home/>}/>
				</Route>
			</Routes>
		);
	}
}

export default App;
