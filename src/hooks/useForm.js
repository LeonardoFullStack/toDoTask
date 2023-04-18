import { useState } from 'react';


export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const serializeForm = (serialForm) => {

        const data = [];

        const formData = new FormData(serialForm);

        for (let [key, value] of formData) {
            data[key] = value.trim();
        }

        return data;
    };


    const handlerSubmit = (ev, getToDo) => {
        ev.preventDefault();

        const data = serializeForm(ev.target);

        getToDo(data);
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
        handlerChange
    };

};