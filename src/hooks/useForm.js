import { useState } from 'react';


export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const [validate, setValidate] = useState({});

    const serializeForm = (serialForm) => {

        const data = [];

        const formData = new FormData(serialForm);

        for (let [key, value] of formData) {
            data[key] = value.trim();
        }

        return data;
    };


    const handlerSubmit = (ev, handleNewTodo, toDos) => {
        ev.preventDefault();

        const data = serializeForm(ev.target);

        setValidate({
            title: data.title === '' ? 'El título no puede estar vacío' : null,
            description: data.description === '' ? 'El campo descripción no puede estar vacío' : null
        })

        if (data.title == '' || data.description == '') return

        const exists = toDos.find(toDo => toDo.title == data.title);

        if (exists) {
            setValidate({ title: 'El título ya existe' })
            return
        }

        handleNewTodo(data);
        setForm(data);

        ev.target.reset();

    };


    const handlerChange = ({ target }) => {



        setForm({
            ...form,
            [target.name]: target.value
        });

    };

    // useEffect(() => {
    //     handlerSubmit();
    // }, [])

    return {
        handlerSubmit,
        handlerChange,
        validate
    };

};