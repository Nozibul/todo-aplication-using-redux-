import { useSelector } from "react-redux";
import Todo from "./Todo";


export default function TodoList() {
    const todos = useSelector((state)=> state.todo)
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos.map((todo)=>(
                    <Todo todo = {todo} key={todo.id} />
                ))
            }
        </div>
    );
}
