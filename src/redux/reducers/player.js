import { SAVE_AVATAR, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_AVATAR:
    return {
      assertions: 0,
      score: 0,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    };
  case SAVE_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
      assertions: action.payload !== 0 ? state.assertions + 1 : state.assertions,
    };
  default:
    return state;
  }
};
export default player;
