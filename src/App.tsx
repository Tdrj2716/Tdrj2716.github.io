import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
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

/**
 * 404 pageを出力するための記述
 * 1. ./package.jsonのscriptに
 * 		"postbuild": "cp build/index.html build/404.html",
 * 		を記述、上のApp部分をコメントアウトしてyarn buildを実行して404.htmlを生成
 * 2. 404.htmlを生成後、"postbuild"の部分を消去、下のApp部分をコメントアウトした後に再度yarn buildし、index.htmlを生成
 * 3. 404.html, index.htmlを生成した後に
 * 		gh-pages -b gh-page -d build
 * 		を実行
 */
// import NotFoundPage from "./NotFound/NotFoundPage";

// function App(): JSX.Element {
// 	return (
// 		<div className="App">
// 			<NotFoundPage />
// 		</div>
// 	);
// }

export default App;
