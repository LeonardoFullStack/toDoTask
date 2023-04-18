import { useTodoList } from '../hooks/useTodoList';

export const Task = ({ id, title, description, done, date }) => {

    const { handleDeleteTodo,
        handleToggleTodo } = useTodoList()

    return (

        <article className={done ? 'color-gris' : ''}>
            <div>
                <p className="bold">{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <button className={done ? 'finalizada' : 'pendiente'}>{done ? 'Finalizada' : 'Pendiente'}</button>
            </div>
            <div>
                <button onClick={() => handleDeleteTodo(id)} className="eliminar">Eliminar</button>
            </div>
        </article >
    )
}