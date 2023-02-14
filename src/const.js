export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT = `${BASE_URL}`;

export const AppRoute = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  HEROES: '/heroes',
  HEROES_SELECTED: '/heroes/:heroID',
  BUILDS: '/builds/:heroID',
  NOT_FOUND: "*",
};