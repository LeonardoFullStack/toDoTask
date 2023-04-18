import { useForm } from "../hooks/useForm";

export const Form = ({ getToDo }) => {

    const {
        handlerChange,
        handlerSubmit } = useForm('');

    return (
        <section>
            <h2>Lista de tareas</h2>

            <h3>Añadir tarea</h3>
            <form onSubmit={(ev) => handlerSubmit(ev, getToDo)} >
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Tarea"
                    onChange={handlerChange}
                />

                <textarea
                    name="description"
                    id="description"
                    placeholder="Descripción"
                    onChange={handlerChange}
                ></textarea>

                <input type="submit" value="Añadir Tarea" />

            </form>

        </section>
    )
}
