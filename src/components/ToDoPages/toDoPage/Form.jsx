import { useForm } from "../../../hooks/useForm";

export const Form = ({ handleNewTodo, toDos }) => {

    const {
        handlerChange,
        handlerSubmit,
        validate } = useForm('');

    return (
        <section>
            <h2>Lista de tareas</h2>

            <h3>Añadir tarea</h3>

            <form id="formToDo" onSubmit={(ev) => handlerSubmit(ev, handleNewTodo, toDos)} >
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Tarea"
                    autoFocus
                    onChange={handlerChange}
                />
                {validate.title &&
                    <p className="error">{validate.title}</p>
                }
                {validate.exists &&
                    <p className="error">{validate.exists}</p>
                }

                <textarea
                    name="description"
                    id="description"
                    placeholder="Descripción"
                    onChange={handlerChange}
                ></textarea>
                <p className="error">{validate.description != '' && validate.description}</p>

                <input
                    type="submit"
                    value="Añadir Tarea"
                />

            </form>

        </section>
    )
}
