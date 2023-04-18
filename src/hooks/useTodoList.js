import { useReducer } from 'react'
import { toDoReducer } from '../reducers/toDoReducer'
import { getLocal } from '../helpers/localStorage'

const init = () => {
    return getLocal();
}

export const useTodoList = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    const handleNewTodo = ({ title, description }) => {

        const newToDo = {
            id: Date.now(),
            title,
            description,
            done: false,
            date: new Date()
        }

        const action = {
            type: '[TODO] add todo',
            payload: newToDo
        }
        
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

    }

    const handleToggleTodo = (id) => {

    }

    return {
        toDos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}