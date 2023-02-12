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

