import ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
  userIn: false,
  data: '',
  profileList: [],
  isProfileFilled: false,
  profileDetail: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        data: action.payload,
        userIn: true,
      };
    case ACTION_TYPES.SIGN_UP:
      return {
        ...state,
        data: action.payload,
        userIn: true,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        data: '',
        userIn: false,
        profileDetail: '',
      };
    case ACTION_TYPES.VERIFY_AUTH:
      return {
        ...state,
        userIn: true,
        data: action.payload,
      };
    case ACTION_TYPES.VERIFY_PROFILE:
      return {
        ...state,
        profileList: action.payload,
      };
    case ACTION_TYPES.FILL_PROFILE:
      return {
        ...state,
        isProfileFilled: true,
        profileDetail: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
