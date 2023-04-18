import { useForm } from "../hooks/useForm";

export const Form = ({ getToDo }) => {

    const {
        handlerChange,
        handlerSubmit } = useForm('');

    return (
        <form onSubmit={(ev) => handlerSubmit(ev, getToDo)} >
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Título"
                onChange={handlerChange}
            />

            <textarea
                name="description"
                id="description"
                placeholder="Descripción"
                onChange={handlerChange}
            ></textarea>

            <input type="submit" value="Enviar" />

        </form>
    )
}
