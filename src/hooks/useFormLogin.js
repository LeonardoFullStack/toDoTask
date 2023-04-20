import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate  } from 'react-router-dom'


export const useFormLogin = (initialState) => {

    const [form, setForm] = useState(initialState);

    const [validate, setValidate] = useState({});

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const userTemplate = {
        id:1,
        name:'paco',
        password:123,
        email:'paco@gmail.com'
    }

    const serializeForm = (serialForm) => {

        const data = [];

        const formData = new FormData(serialForm);

        for (let [key, value] of formData) {
            data[key] = value.trim();
        }

        return data;
    };


    const validateForm = (data) => {

        let email, password, rslt = true;

        const testEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

        if (data.email == '' || !testEmail.test(data.email)) email = 'Debes escribir un email válido'

        if (data.password == '') password = 'La contraseña es obligatoria'


        setValidate({
            email,
            password
        })

        if (data.email == '' || data.password == '') rslt = false

        return rslt
    }


    const handlerSubmit = (ev) => {
        ev.preventDefault();

        const data = serializeForm(ev.target);
        

        const validateOk = validateForm(data);
        if (!validateOk) return

        if (data.email != userTemplate.email || data.password != userTemplate.password ) {
           setValidate({email: 'El usuario y la  contraseña no coincide'})
           ev.target.password.value=''
           return
        } 

        setUser(userTemplate)
        setForm(data);

        navigate('/todo');

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