import { Form } from "./Form"
import { useTodoList } from '../hooks/useTodoList';

export const Main = () => {

    const { handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        toDos } = useTodoList()

    const getToDo = (toDo) => {
        console.log('form data', toDo)
        handleNewTodo(toDo);
    };

    return (
        <>
            <Form getToDo={getToDo} />

            {
                toDos.map(todo => (
                    <div key={todo.id} >
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                    </div>
                ))
            }


        </>
    )
}
