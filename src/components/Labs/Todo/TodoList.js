
import TodoItem from "./TodoItem";
import todos from "./todo.json"
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((todo,index) => {
                    return(
                        <TodoItem todo = {todo} key = {index}/>
                    );
                })
            }
        </ul>
    );
}
export default TodoList;
