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

    
    const validateForm = (data, toDos) => {

        let title, description, exists, rslt = true;

        const toDoExists = toDos.find(toDo => toDo.title.toLowerCase() == data.title.toLowerCase());

        if (data.title == '') title = 'El título no puede estar vacío'

        if (data.description == '') description = 'El campo descripción no puede estar vacío'

        if (toDoExists) exists = 'Ya existe una tarea con ese nombre...'

        setValidate({
            exists,
            title,
            description
        })

        if (toDoExists || data.title == '' || data.description == '') rslt = false

        return rslt
    }


    const handlerSubmit = (ev, handleNewTodo, toDos) => {
        ev.preventDefault();

        const data = serializeForm(ev.target);

        const validateOk = validateForm(data, toDos);
        if (!validateOk) return

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

    return {
        handlerSubmit,
        handlerChange,
        validate
    };

};