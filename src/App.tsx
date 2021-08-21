import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotFoundPage from "./NotFound/NotFoundPage";
import { HashRouter, Route } from "react-router-dom";

function TopPage(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

function App(): JSX.Element {
	return (
		<div className="App">
			<HashRouter basename={process.env.PUBLIC_URL}>
				<Route path="/" exact component={TopPage} />
				{/* "URL/#/~"のようなページを踏むと自作の404ページに移動 */}
				<Route component={NotFoundPage} />
			</HashRouter>
		</div>
	);
}

export default App;
