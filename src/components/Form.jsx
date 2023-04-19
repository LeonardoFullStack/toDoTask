import { useForm } from "../hooks/useForm"

export const Form = ({addToDo}) => {

    const {handlerChange,handlerSubmit, input} = useForm('')

  return (
    <form onSubmit={(ev)=>handlerSubmit(ev)}>
        <input
         type="text" name="title" id="title" placeholder="Título" onChange={handlerChange} 
         />
        <textarea
         name="description" id="description" onChange={handlerChange} 
         ></textarea>
        <input
         type="submit" value="Enviar"
          />
    </form>
  )
}
