import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action) => {
            const todo = action.payload;
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos));

            toast.success("todo created");
        },

        deleteTodo: (state, action) => {
            const id = action.payload;
            const index = state.todos.findIndex((todo) => id === todo._id);

            if (index !== -1) {
                state.todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },

        todoCompletion: (state, action) => {
            const id = action.payload;
            const index = state.todos.findIndex((todo) => id === todo._id);
            const todo = state.todos[index];

            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },
    },
});

export const { createTodo, deleteTodo, todoCompletion } = todoSlice.actions;

export default todoSlice.reducer;
