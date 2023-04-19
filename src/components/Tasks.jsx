import { Task } from "./Task"

export const Tasks = ({ toDos, handleDeleteTodo, handleToggleTodo }) => {

    return (
        <section>
            <h3>Tareas: {toDos.length}</h3>

            {toDos.map(toDo => (
                <Task
                    key={toDo.id}
                    {...toDo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleTodo={handleToggleTodo}
                />
            ))}

        </section>
    )
}
