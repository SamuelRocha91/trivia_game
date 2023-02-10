import { SAVE_AVATAR } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const players = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_AVATAR:
    return {
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    };
  default:
    return state;
  }
};
export default players;
