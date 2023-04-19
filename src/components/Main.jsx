import { useEffect, useReducer, useState } from "react"
import { Form } from "./Form"
import { localStorageReducer } from "../reducers/toDo"


export const Main = () => {

  const [state, dispatch] = useReducer(localStorageReducer, [])
  const [tasks, setTasks] = useState(state);
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    console.log('se ejecuta el useEffect')

     dispatch({
      type: 'getLocalData',
      key: 'tasks',

    })
 
  }, [])


  useEffect(() => {
    setTasks(state)

  }, [state])



  return (
    <>
    <Form />

    {state.map((item) => (
        <div key={item.id}>
        {item.title}
        </div>
      ))}
    </>
  )
}
