
export const Task = ({ id, title, description, done, handleDeleteTodo, handleToggleTodo }) => {

    return (

        <article className={done ? 'color-gris' : ''}>

            <div>
                <p className="bold">{title}</p>
            </div>

            <div>
                <p>{description}</p>
            </div>

            <div>
                <button
                    className={done ? 'finalizada' : 'pendiente'}
                    onClick={() => handleToggleTodo(id)}
                >{done ? 'Finalizada' : 'Pendiente'}
                </button>
            </div>

            <div>
                <button
                    onClick={() => handleDeleteTodo(id)}
                    className="eliminar"
                >Eliminar
                </button>
            </div>

        </article >
    )
}