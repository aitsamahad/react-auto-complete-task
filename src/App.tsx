import React from "react"
import "./App.css"
import AutoComplete from "./components/AutoComplete"

function App() {
	return (
		<div className="App">
			<h1>React Location AutoComplete</h1>
			<p>Enter postcode, city or any UK based address. Example: sk56rs, blackburn, hardman etc</p>

			<AutoComplete />
		</div>
	)
}

export default App
