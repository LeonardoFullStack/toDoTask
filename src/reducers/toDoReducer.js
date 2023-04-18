import { setLocal } from "../helpers/localStorage";

export const toDoReducer = (state = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            const newState = [...state, action.payload];            
            setLocal(newState);
            return newState;

        case '[TODO] delete todo':

            return

        case '[TODO] toggle todo':
            //cambiará la propiedad done de true a false o de false a true
            return

        default:
            return state
    }

}