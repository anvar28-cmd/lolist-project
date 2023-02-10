import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";

function Home() {
  return <Navigate to={AppRoute.HEROES} />;
}

export default Home;

// import { Navigate } from "react-router";
// import { AppRoute } from "../../const";

// function Home({isUserLoggedIn}) {

//     return <Navigate to={ isUserLoggedIn ? AppRoute.HERO : AppRoute.SIGNUP} />;

//     // if not registered  navigate to login page

//     // if registered navigate to heroes page
// }

// export default Home