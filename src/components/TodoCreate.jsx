import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../todo/todoSlice";

const TodoCreate = () => {
	const [todo, setTodo] = useState("");
	const [todoDate, setTodoDate] = useState("");
	const dispatch = useDispatch();

	const handleTodoCreation = () => {
		const TODO = {
			content: todo,
			date: todoDate,
			_id: Math.random(),
			completed: false,
		}

		dispatch(createTodo(TODO));

		setTodo("")
		setTodoDate("")
	}


  return (
	<div className='h-28 w-full flex items-center justify-center gap-2'>
		<input
		value={todoDate}
		onChange={(e) => setTodoDate(e.target.value)}
		className='w-40 py-2 px-4 rounded-lg outline-none bg-gray-100'
		type="datetime-local" required/>
		<input
		value={todo}
		onChange={(e) => setTodo(e.target.value)}
		className='py-2 px-4 w-[47vw] rounded-lg outline-none bg-gray-100 font-[Test_Founders_Grotesk]'
		type="search" placeholder='Enter your todo' required />
		<button className='py-2 px-4 bg-[#6048e8] rounded-xl text-white font-semibold'
		onClick={handleTodoCreation}
		>Create</button>
	</div>
  )
}

export default TodoCreate