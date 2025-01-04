import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoCompletion } from "../todo/todoSlice";

const TodoList = () => {
    const [completedId, setCompletedId] = useState(null);
    // let todoId="";
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    function handleComleted(todoId) {
        dispatch(todoCompletion(todoId));
        // setCompletedId(completedId === todoId ? null : todoId);
    }

    function handleDeletion(id) {
        dispatch(deleteTodo(id));
    }

    return (
        <div className='w-[50vw] mx-auto text-white/80 font-["Test_Founders_Grotesk"] rounded-xl'>
            {/* here list your todos in the form of ul>li */}
            {todos && todos.length > 0
                ? todos.map((todo, index) => (
                      <div
                          key={index}
                          className="w-full px-4 py-2 my-3 bg-gray-800 rounded-xl flex justify-between items-center"
                      >
                          <ul>
                              <li
                                  className="text-lg"
                                  style={{textDecoration:todo.completed && "line-through"}}
                              >
                                  {" "}
                                  {todo.content}{" "}
                              </li>
                              <p className="text-[10px]">{todo.date}</p>
                          </ul>
                          {/* todo actions */}
                          <div>
                              {/* todo completion function */}
                              <button
                                  className="bg-green-600 mr-3 font-semibold active:bg-green-400 px-4 py-[1vh] rounded-xl text-white/80"
                                  onClick={() => handleComleted(todo._id)}
                              >
                                  Complete
                              </button>

                              {/* todo deletion function */}
                              <button
                                  className="bg-red-600 px-4 font-semibold active:bg-red-400 py-[1vh] rounded-xl text-white/80"
                                  onClick={() => handleDeletion(todo._id)}
                              >
                                  Delete
                              </button>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default TodoList;
