import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import Todos from "./components/Todos/Todos";

function App() {
	const todos = [
		{
			id: 1,
			title: "Wash the dishes",
			reminder: true,
		},
	];
	return (
		<main>
			<Header title="Todo App" />
			<AddTodo />
			<Todos todos={todos} />
		</main>
	);
}

export default App;
