import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LockIcon from "../../components/Icons/LockIcon";
import UserIcon from "../../components/Icons/UserIcon";
import { AppRoute, ENDPOINT } from "../../const";
import { saveToken } from "../../token";

function Login({ isAuthorized, setIsAuthorized }) {
  const navigate = useNavigate();

  if (isAuthorized) {
    return <Navigate to={AppRoute.HOME} />;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`${ENDPOINT}/login`, {
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then((response) => {
        saveToken(response.data.token);
        setIsAuthorized(true);
        navigate(AppRoute.HEROES);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  return (
    <main className="sign-in">
      <div className="wrapper">
        <div className="form-box">
          <h1 className="form-box__title">LoLiST</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form__element">
              <span className="form__icon">
                <UserIcon />
              </span>
              <input
                className="form__field"
                id="username"
                type="text"
                name="username"
                required
              />
              <label className="form__label" htmlFor="username">
                Username
              </label>
            </div>

            <div className="form__element">
              <span className="form__icon">
                <LockIcon />
              </span>
              <input
                className="form__field"
                id="password"
                type="password"
                name="password"
                required
              />
              <label className="form__label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="form__switch">
              <p className="form__text">
                Not registered yet?{" "}
                <Link className="form__link" to={AppRoute.SIGN_UP}>
                  Sign up
                </Link>
              </p>
            </div>

            <button className="form__submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;

// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppRoute, ENDPOINT } from "../../const";

// export default function Login({ onLogin }) {

//   const [error, setError] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const username = event.target.username.value;
//     const password = event.target.password.value;

//     console.log(username, password);

//     axios
//       .post(`${ENDPOINT}/login`, {
//         username,
//         password
//       })
//       .then((resp) => {
//         console.log("token from server:",resp.data.token);
//         onLogin(resp.data.token);
//         navigate(AppRoute.HERO)
//       })
//       .catch((e) => {
//         setError(`Error: ${e}`);
//       });

//       // navigate(AppRoute.HERO);
//   };

//   // const handleLogin = () => {
//   //   onLogin ? navigate(AppRoute.HERO) : navigate(AppRoute.LOGIN)
//   // }

//   return (
//     <main className="login-page">
//       <form className="login" onSubmit={handleSubmit}>

//         <label>Username:</label>
//         <input type="text" name="username" />

//         <label>Password:</label>
//         <input type="password" name="password" />

//         {error && <div className="login__message">{error}</div>}
//         <div className='button-container'>
//         <button className="login__button" >Log in</button>
//         <Link to={AppRoute.SIGNUP}>
//         <button className="switch">switch to sign up</button>
//         </Link>

//         {/* <Link to="/register">No acc go to register page</Link> */}

// </div>
//       </form>
//     </main>
//   );
// }
