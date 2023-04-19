import { useFormLogin } from '../../../hooks/useFormLogin';

export const LoginForm = () => {
    
const {
    handlerChange,
    handlerSubmit,
    validate } = useFormLogin('');

    return (
        <>
            <h2>
                Login para Comenzar
            </h2>

            <form id="formLogin" onSubmit={handlerSubmit}>

                <label htmlFor="email">Email:</label>
                <input
                    type='text'
                    name='email'
                    autoFocus
                    placeholder='Email'
                    onChange={handlerChange}
                />
                {validate.email &&
                    <p className="errorLogin">{validate.email}</p>
                }

                <label htmlFor="password">Contraseña:</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    onChange={handlerChange}
                />
                {validate.password &&
                    <p className="errorLogin">{validate.password}</p>
                }

                <input
                    type='submit'
                    value='Entrar'
                />
            </form>
        </>
    )
}
