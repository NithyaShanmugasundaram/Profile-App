import { SAVE_PROFILES, UPDATE_PROFILES } from "./types"
import { setAlert } from "./alert";

export const save_profile = (profile) => async (dispatch) => {
    dispatch({ type: SAVE_PROFILES, payload: profile })
    dispatch(
        setAlert('Profile Added Successfully!', 'success')
    );
}
export const update_profile = (profile) => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILES, payload: profile })
}
