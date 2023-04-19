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
            newState = [...state];

            const ind = newState.findIndex(toDo => toDo.id == action.payload);

            const newTodo = {
                ...state[ind],
                done: !state[ind].done
            }

            newState.splice(ind, 1, newTodo);
            break;

        default:
            newState = state;
            break;
    }

    setLocal(newState);
    return newState;
}