import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/TodoSlice";

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});
