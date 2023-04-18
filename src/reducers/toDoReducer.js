import { setLocal } from "../helpers/localStorage";

export const toDoReducer = (state = [], action) => {

    let newState;
    switch (action.type) {
        case '[TODO] add todo':
            newState = [...state, action.payload];
            setLocal(newState);
            return newState;

        case '[TODO] delete todo':
            newState = state.filter(toDo => toDo.id != action.payload)
            setLocal(newState);
            return newState;

        case '[TODO] toggle todo':
            //cambiará la propiedad done de true a false o de false a true
            return

        default:
            return state
    }

}