import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.scss';
import 'rsuite/dist/rsuite.min.css';
import Layout from "./components/Layout";
import Home from './components/Home';

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Layout Title="Home"/>}>
					<Route path="/" element={<Home/>}/>
				</Route>
			</Routes>
		);
	}
}

export default App;
