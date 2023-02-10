export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT = `${BASE_URL}`;

export const AppRoute = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  HEROES: '/heroes',
  HEROES_SELECTED: '/heroes/:heroID',
  BUILDS: '/builds/:heroID',
  NOT_FOUND: "*",
};
