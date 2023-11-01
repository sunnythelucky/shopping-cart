import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import { Todos } from "./pages/Todos.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import styles from "./App.module.css";
import { FormEvent, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "TODOS";

export type Todo = {
	id: string;
	name: string;
	completed: boolean;
};

function App() {
	const [newTodoName, setNewTodoName] = useState("");
	const [todos, setTodos] = useState(() => {
		try {
			const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
			if (storedTodos === null) return [];
			else return JSON.parse(storedTodos);
		} catch (error) {
			console.error("Error loading todos from localStorage:", error);
			return [];
		}
	});

	function addTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setTodos((currentTodos: Todo[]) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					name: newTodoName,
					completed: false,
				},
			];
		});
	}

	function toggleTodo(id: string, completed: boolean) {
		setTodos((currentTodos: Todo[]) => {
			return currentTodos.map((currentTodo: Todo) => {
				return currentTodo.id === id ? { ...currentTodo, completed } : currentTodo;
			});
		});
	}

	function deleteTodo(id: string) {
		setTodos((currentTodos: Todo[]) => {
			return currentTodos.filter((currentTodo: Todo) => currentTodo.id !== id);
		});
	}

	useEffect(() => {
		// the error says the "undefined" is not valid argument for JSON.stringify()
		// this is because the localStorage.getItem(LOCAL_STORAGE_KEY) is null
		// so we need to handle that case
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	return (
		<ShoppingCartProvider>
			<Navbar todos={todos} />
			<Sidebar />
			<Container className={`mb-4 ${styles.container}`}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/todos"
						element={
							<Todos
								todos={todos}
								addTodo={addTodo}
								deleteTodo={deleteTodo}
								toggleTodo={toggleTodo}
								setNewTodoName={setNewTodoName}
								newTodoName={newTodoName}
							/>
						}
					/>
				</Routes>
			</Container>
		</ShoppingCartProvider>
	);
}

export default App;
