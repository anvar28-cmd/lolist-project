import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";

function Layout({ isAuthorized, setIsAuthorized }) {
  return (
    isAuthorized
      ? 
        <>
          <Header setIsAuthorized={setIsAuthorized} />
          <Outlet/>
        </>
      : 
      <Navigate to={ AppRoute.LOGIN } />
  );
}

export default Layout