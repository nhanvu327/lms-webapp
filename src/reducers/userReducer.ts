import { GET_PROFILE } from "../constants/actionTypes";

const initialState = {
  profile: null
};

export default (
  state = initialState,
  action: { type: string; payload: Object }
) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
