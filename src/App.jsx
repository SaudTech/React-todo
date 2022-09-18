import React from 'react'
import { Route, Routes } from "react-router-dom";


// Custom Components
import NavBar from './components/Navbar/NavBar'
import TodoList from './components/Todo/TodoList';
import Skills from "./pages/Skills"

const App = () => {
	return (
		<div>
			<NavBar />

			<main>
				<Routes>
					<Route path='/' element={<TodoList/>}></Route>
					<Route path='/skills' element={<Skills/>}></Route>
				</Routes>
			</main>
		</div>
	)
}

export default App