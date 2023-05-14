import Layout from "./Layout/Layout";
import {  Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";

function App() {
	return (
		<>
		
				<Routes>
					<Route exact path="/" element={<Layout />} />
					<Route exact path="/projects" element={<Projects />} />
				</Routes>
			
		</>
	);
}

export default App;
