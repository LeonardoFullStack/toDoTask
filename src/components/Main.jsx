import { Form } from "./Form"
import { useTodoList } from '../hooks/useTodoList';
import { Tasks } from "./Tasks";

export const Main = () => {

    const {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        toDos } = useTodoList()

    return (
        <>
            <Form
                toDos={toDos}
                handleNewTodo={handleNewTodo}
            />

            <Tasks
                toDos={toDos}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleTodo={handleToggleTodo}
            />

        </>
    )
}
