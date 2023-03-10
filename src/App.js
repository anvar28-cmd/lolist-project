import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./const";
import Builds from "./pages/Builds/Builds";
import Heroes from "./pages/Heroes/Heroes";
import HeroesSelected from "./pages/HeroesSelected/HeroesSelected";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./styles/style.scss";
import { getToken } from "./token";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(getToken());

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route
          path={AppRoute.LOGIN}
          element={
            <Login
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />

        <Route
          path={AppRoute.SIGN_UP}
          element={
            <SignUp
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />

        <Route
          path={AppRoute.HOME}
          element={
            <Layout
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        >
          <Route index element={<Home />} />

          <Route path={AppRoute.HEROES} element={<Heroes />} />

          <Route
            path={AppRoute.HEROES_SELECTED}
            element={
              <HeroesSelected
                isAuthorized={isAuthorized}
                setIsAuthorized={setIsAuthorized}
              />
            }
          />

          <Route
            path={AppRoute.BUILDS}
            element={
              <Builds
                isAuthorized={isAuthorized}
                setIsAuthorized={setIsAuthorized}
              />
            }
          />
        </Route>

        <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
