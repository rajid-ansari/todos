import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'

const Hero = () => {
	


  return (
	<div className='min-h-screen w-full bg-gray-950 px-72 pb-9 mx-auto'>
		<TodoCreate />
		<TodoList />
	</div>
  )
}

export default Hero