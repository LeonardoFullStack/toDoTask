import { useContext, useEffect } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { Navigate } from 'react-router-dom'

export const Logout = () => {

    const { user, setUser } = useContext(UserContext);

    const logout = () => {
        setUser({});
    }

    useEffect(() => {
        logout();
    }, [])

    return (
        <Navigate to={'/'} />
    )
}
