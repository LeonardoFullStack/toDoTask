import { Form } from "./toDoPage/Form"
import { useTodoList } from '../../hooks/useTodoList';
import { Tasks } from "./toDoPage/Tasks";

export const ToDoLstPage = () => {

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
