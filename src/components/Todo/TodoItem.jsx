import { MdDeleteOutline } from 'react-icons/md'

const TodoItem = ({todo, onDelete}) => {
	return (
		<div className={`h-10 flex items-center justify-between px-2 mb-2`} style={todo.style}>
			<h3>{todo.text}</h3>
			<div className='flex items-center gap-4'>

				<button type='button' onClick={onDelete} title='Delete this item'>
					<MdDeleteOutline size={30} className="hover:text-red-400 transition-all duration-300" />
				</button>
			</div>
		</div>
	)
}

export default TodoItem