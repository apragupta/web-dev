const TodoItem = ({
                      todo = {
                          done: true,
                          title: 'Buy milk',
                          status: 'COMPLETED'
                      },
                      key = 0

                  }) => {
    return(
        <li  key = {key}>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
