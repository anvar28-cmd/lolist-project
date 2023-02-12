import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AppRoute } from './const';
import Builds from './pages/Builds/Builds';
import Heroes from './pages/Heroes/Heroes';
import HeroesSelected from './pages/HeroesSelected/HeroesSelected';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './styles/style.scss';
import { getToken } from './token';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(getToken());

  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(
  //   !!sessionStorage.bearerToken
  // );

  // function onLogin(token) {
  //   sessionStorage.setItem("bearerToken", token);
  //   setIsUserLoggedIn(true);
  // }

  // function onLogout() {
  //   sessionStorage.removeItem("bearerToken");
  //   setIsUserLoggedIn(false);
  // }

  // console.log(sessionStorage.bearerToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />}/>
        <Route path={AppRoute.SIGN_UP} element={<SignUp isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />}/>
        
        <Route path={AppRoute.HOME} element={<Layout setIsAuthorized={setIsAuthorized} />}>
          <Route
            index 
            element={
              <PrivateRoute isAuthorized={isAuthorized}>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            path={AppRoute.HEROES}
            element={
              <PrivateRoute isAuthorized={isAuthorized}>
                <Heroes />
              </PrivateRoute>
            } 
          />
          <Route 
            path={AppRoute.HEROES_SELECTED}
            element={
              <PrivateRoute isAuthorized={isAuthorized}>
                <HeroesSelected />
              </PrivateRoute>
            } 
          />
          <Route 
            path={AppRoute.BUILDS}
            element={
              <PrivateRoute isAuthorized={isAuthorized}>
                <Builds />
              </PrivateRoute>
            } 
          />
        </Route>

        <Route path={AppRoute.NOT_FOUND} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;