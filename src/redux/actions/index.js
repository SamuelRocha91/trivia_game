import md5 from 'crypto-js/md5';

const URL_BASE = 'https://www.gravatar.com/avatar/';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const SAVE_SCORE = 'SAVE_SCORE';

export const ACTION_PLAYER = () => ({ type: '',
  payload,
});

export const ACTION_SCORE = (points) => ({
  type: SAVE_SCORE,
  payload: points,
});

export const ACTION_AVATAR = (email, name) => {
  const hash = md5(email).toString();
  return ({
    type: SAVE_AVATAR,
    payload: {
      email: `${URL_BASE}${hash}`,
      name,
    },
  });
};
