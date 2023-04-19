import { useForm } from "../hooks/useForm";

export const Form = ({ handleNewTodo }) => {

    const {
        handlerChange,
        handlerSubmit } = useForm('');

    return (
        <section>
            <h2>Lista de tareas</h2>

            <h3>Añadir tarea</h3>

            <form onSubmit={(ev) => handlerSubmit(ev, handleNewTodo)} >
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Tarea"
                    autoFocus
                    onChange={handlerChange}
                />

                <textarea
                    name="description"
                    id="description"
                    placeholder="Descripción"
                    onChange={handlerChange}                                                            
                ></textarea>

                <input
                    type="submit"
                    value="Añadir Tarea"                    
                />

            </form>

        </section>
    )
}
