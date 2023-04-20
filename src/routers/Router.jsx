import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, ToDoLstPage, LoginPage, ServicesPage, ProductsPages } from '../components/ToDoPages'
import { NavBar } from "../components/NavBar"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Logout } from '../components/ToDoPages/loginPage/Logout'


export const Router = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser({});
    };

    return (
        <>
            <NavBar />

            <Routes>

                <Route path='/' element={<HomePage />} />
                {user.id && <>
                    <Route path='todo' element={<ToDoLstPage />} />
                    <Route path='services' element={<ServicesPage />} />
                    <Route path='products' element={<ProductsPages />} />
                    <Route path='logout' element={<Logout />} />
                </>}
                <Route path='login' element={<LoginPage />} />                

                {/* <Route path='/*' element={<LoginPage />} /> */}
                <Route path='/*' element={<Navigate to={'/'} />} />
            </Routes>
        </>
    )
}
