// import  from '../actions/';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const players = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'player':
    return action.payload;
  default:
    return state;
  }
};
export default players;
