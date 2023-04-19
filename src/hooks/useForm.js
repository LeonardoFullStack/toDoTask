import { useReducer, useState } from "react"
import { localStorageReducer } from "../reducers/toDo"


export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const [input, setInput] = useState('')

    const [state, dispatch] = useReducer(localStorageReducer, initialState)
    
    const handlerSubmit = (ev, addToDo) => {
        ev.preventDefault()
        const data = serializeForm(ev.target)
        const setData = setToDo(data)
        console.log(setData)

        dispatch({
            type: 'setLocalData',
            key:'tasks',
            payload:setData
        })
        
        ev.target.reset()

    }
  
    const handlerChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });

        
    }

    const serializeForm = (serialForm) => {

        const data = {};

        const formData = new FormData(serialForm);

        for (let [key, value] of formData) {
            data[key]= value.trim() ;
        }

        return data;
    }

    const setToDo = ({title, description}) => {
        
        const newToDo = {
              id: Date.now(),
              title,
              description,
              done: false,
              date: new Date()
          }
          return newToDo
      }

    
  
    return {
        handlerSubmit,
        handlerChange,
        input

    }
}
