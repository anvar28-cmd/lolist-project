const AUTH_TOKEN_KEY_NAME = 'lol-ist-token';

export const getToken = () =>
  localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';

export const saveToken = (token) =>
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);

export const dropToken = () =>
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);

