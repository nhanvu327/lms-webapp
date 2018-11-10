import { GET_PROFILE, REMOVE_PROFILE } from "../constants/actionTypes";

const initialState = {
  profile: null
};

const userReducer: any = (
  state = initialState,
  action: { type: string; payload: Object }
) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: {
          ...action.payload
        }
      };
    case REMOVE_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
};

export default userReducer;
