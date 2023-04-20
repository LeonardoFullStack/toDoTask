import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

export const NavBar = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <nav>

            <NavLink to='/'
                className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
            >Home
            </NavLink>

            {user.id ?
                <>
                    <NavLink to='/todo'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >ToDo
                    </NavLink>

                    <NavLink to='/products'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Productos
                    </NavLink>

                    <NavLink to='/services'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Servicios
                    </NavLink>
                    <NavLink to='/logout'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Logout
                    </NavLink>
                </>
                :
                <NavLink to='/login'
                    className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                >Login
                </NavLink>
            }

        </nav >
    )
}
