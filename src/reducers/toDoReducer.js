import { setLocal } from "../helpers/localStorage";

export const toDoReducer = (state = [], action) => {

    let newState;
    switch (action.type) {
        case '[TODO] add todo':
            newState = [...state, action.payload];
            break;

        case '[TODO] delete todo':
            newState = state.filter(toDo => toDo.id != action.payload);
            break;

        case '[TODO] toggle todo':
            newState = state.map(toDo =>
                toDo.id == action.payload.id ? toDo.done = !toDo.done : toDo.done
            )
            console.log('toggle desp', newState)
            break;

        default:
            newState = state;
            break;
    }

    setLocal(newState);
    return newState;
}