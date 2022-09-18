import React from 'react'


const Child = (props) => {
	return (
		<div className='bg-cyan-200 text-black p-9'>
			<button onClick={props.onClick}>Delete Todo</button>
		</div>
	)
}


const Skills = () => {
	return (
		<div className='h-screen w-full grid place-items-center bg-red-900'>
			<h1>Skills</h1>
			<Child onClick={() => console.log('Clicked')} />

		</div>
	)
}

export default Skills