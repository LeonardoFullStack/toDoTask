import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>

            <NavLink to='/'
                className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
            >Home
            </NavLink>

            <NavLink to='/products'
                className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
            >Productos
            </NavLink>

            <NavLink to='/services'
                className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
            >Servicios
            </NavLink>

            <NavLink to='/login'
                className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
            >Login
            </NavLink>

        </nav >
    )
}
