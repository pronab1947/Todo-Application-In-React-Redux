import { useSelector } from "react-redux";
import todoInitialState from "../redux/todos/todoInitialState";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((State) => State.todos)
    // const todos = useSelector((todoInitialState) => todoInitialState.todos)
    return (

        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">

            {todos.map((todo) => < Todo todo={todo} key={todo.id} />)}
            {/* {todos.map((todoInitialState) => < Todo todo={todoInitialState} key={todoInitialState.id} />)} */}
        </div>
    );
}
