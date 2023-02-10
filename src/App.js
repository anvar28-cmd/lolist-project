import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import Builds from './pages/Builds/Builds';
import Heroes from './pages/Heroes/Heroes';
import HeroesSelected from './pages/HeroesSelected/HeroesSelected';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './styles/style.scss';

function App() {
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
        <Route path={AppRoute.SIGN_IN} element={<SignIn />}/>
        <Route path={AppRoute.SIGN_UP} element={<SignUp />}/>

        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={AppRoute.HEROES} element={<Heroes />} />
          <Route path={AppRoute.HEROES_SELECTED} element={<HeroesSelected />} />
          <Route path={AppRoute.BUILDS} element={<Builds />} />
        </Route>

        <Route path={AppRoute.NOT_FOUND} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;