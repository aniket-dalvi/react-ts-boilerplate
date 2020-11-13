import { initialState } from "../state/HomeState";

export function HomeReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NAME": {
            return ({ ...state, name: action.name})
        }
        default: {
            return state
        }
    }
}
