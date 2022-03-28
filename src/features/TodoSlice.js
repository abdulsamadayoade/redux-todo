import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleReminder: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, reminder: !todo.reminder }
					: todo
			);
		},
	},
});

export const { addTodo, deleteTodo, toggleReminder } = todoSlice.actions;
export default todoSlice.reducer;
