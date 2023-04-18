import { Task } from "./Task"

export const Tasks = ({ toDos }) => {

    return (
        <section>
            <h3>Tareas</h3>

            {toDos.map(toDo => (
                <Task key={toDo.id} {...toDo} />
            ))}

        </section>
    )
}
