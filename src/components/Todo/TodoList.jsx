import React, { useState, useEffect } from 'React';
import TodoItem from './TodoItem';
import tailwind from "./TailwindClasses.js"


const TodoList = () => {
	const gradientBackground = { background: 'linear-gradient(90deg, rgb(154, 66, 174) 0%, rgb(225, 153, 214) 100%)' }



	const [todo, setTodo] = useState('');
	const handleInput = (e) => {
		setTodo(e.target.value)
	}


	const [todos, setTodos] = useState([]);
	const createTodo = () => {
		let newTodo = {
			text: todo,
			style: gradientBackground,
			completed: false,
		}
		setTodos([...todos, newTodo])
	}

	useEffect(() => {
		setTodo('')
	}, [todos])
	useEffect(() => {
		console.log('isEditing')
	}, [todo])

	// Delete the todo
	const deleteTodo = (todoToDelete) => {
		let newTodos = todos.filter(todo => todo !== todoToDelete)
		setTodos(newTodos)
	}

	return (
		<React.Fragment>
			<div className={tailwind.highLevelContainer}>
				<div className='w-fit mx-auto'>
					<h1 style={{ fontFamily: 'Azonix' }} className='text-4xl'>
						Todo List
					</h1>
					<p className='opacity-80 text-sm'>
						A simple React Todo List App
					</p>
			<p className='text-xs mt-4'>Sadly there is no Edit functionality, because React useState is weird and I have no idea how it works</p>
				</div>
				<div className={tailwind.formNListContainer}>
					<input
						type='text'
						value={todo}
						placeholder='Add a todo'
						className='w-full h-10 rounded-sm p-2 flex items-center mx-auto focus:outline-none'
						onChange={handleInput}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								createTodo()
							}
						}}
					/>

					<div>
						{todos.length > 0 && todos.map((todo, index) => (
							<TodoItem
								onDelete={() => deleteTodo(todo)}
								on
								key={index}
								todo={todo}
							/>
						))}
						{todos.length === 0 &&
							<h2 className='text-white mt-4 text-xl'>No Pending Tasks 🥳</h2>
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default TodoList