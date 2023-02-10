const API_URL = 'https://opentdb.com/api_token.php?command=request';

export async function getTokenApi() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.token);
}
