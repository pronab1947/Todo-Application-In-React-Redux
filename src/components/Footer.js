import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from '../redux/filters/filterAction'
import filterInitialState from "../redux/filters/filterInitialState";

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No task Left'
        case 1:
            return '1 task Left'
        default:
            return `${no_of_todos} tasks Remaining`
    }

};

export default function Footer() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    // const filterInitialState = useSelector((state) => state.filterInitialState);
    const dispatch = useDispatch();
    // const { status, colors } = filters;
    const { status, colors } = filterInitialState;

    const todosRemaining = todos.filter((todo) => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status))
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)}</p>

            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`}
                    onClick={() => handleStatusChange('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handleStatusChange('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}
                    onClick={() => handleStatusChange('Complete')} >Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>

        </div>
    );
}
