import { SAVE_PROFILES, UPDATE_PROFILES } from '../actions/types';



function profileReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_PROFILES:
            return [...state, { ...payload }]
        case UPDATE_PROFILES:
            return [...payload]

        default:
            return state;
    }
}

export default profileReducer;
