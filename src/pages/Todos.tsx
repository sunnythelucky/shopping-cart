import { FormEvent } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Todo } from "../App";

type TodoProps = {
	todos: Todo[];
	addTodo: (e: FormEvent<HTMLFormElement>) => void;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string, completed: boolean) => void;
	newTodoName: string;
	setNewTodoName: (name: string) => void;
};

export function Todos({ todos, addTodo, deleteTodo, toggleTodo, newTodoName, setNewTodoName }: TodoProps) {
	console.log("Todos", "render");
	return (
		<>
			<form onSubmit={(e) => addTodo(e)}>
				<h1>Todos</h1>
				<h3>New Task</h3>
				<input type="text" value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} />
				<button>Add</button>
			</form>

			<ListGroup style={{ padding: 0, listStyle: "none" }}>
				{todos.map((todo: Todo) => (
					<ListGroupItem key={todo.id}>
						<label>
							<FormCheckInput
								type="checkbox"
								checked={todo.completed}
								style={{ marginRight: "0.5rem" }}
								onChange={(e) => toggleTodo(todo.id, e.target.checked)}
							/>
							{todo.name}
							<Button
								size="sm"
								variant="outline-danger"
								style={{ marginLeft: "0.6rem" }}
								onClick={() => deleteTodo(todo.id)}
							>
								X
							</Button>
						</label>
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}
