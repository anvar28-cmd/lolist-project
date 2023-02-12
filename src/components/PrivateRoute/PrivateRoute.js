import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";

function PrivateRoute({ children, isAuthorized }) {
  return (
    isAuthorized
      ? children
      : <Navigate to={ AppRoute.LOGIN } />
  );
}

export default PrivateRoute;
