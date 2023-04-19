import { Form } from "./Form"
import { useTodoList } from '../hooks/useTodoList';
import { Tasks } from "./Tasks";

export const Main = () => {

    const {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        toDos } = useTodoList()

    const getToDo = (toDo) => handleNewTodo(toDo);;

    return (
        <>
            <Form
                getToDo={getToDo}
            />

            <Tasks
                toDos={toDos}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleTodo={handleToggleTodo}
            />

        </>
    )
}
