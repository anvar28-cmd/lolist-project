import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppRoute, ENDPOINT } from "../../const";
import { saveToken } from "../../token";

function SignUp({isAuthorized, setIsAuthorized}) {
  const navigate = useNavigate();

  if (isAuthorized) {
    return <Navigate to={ AppRoute.HOME } />;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`${ENDPOINT}/signup`, {
        name: evt.target.name.value,
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then((response) => {
        saveToken(response.data.token);
        setIsAuthorized(true);
        navigate(AppRoute.HEROES)
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  return (
    <main className="sign-in">
      <h1 className="sign-in__title">Sign Up</h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__element">
          <label className="form__label" htmlFor="name">Name:</label>
          <input className="form__field" id="name" type="text" name="name" />
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="username">Username:</label>
          <input className="form__field" id="username" type="text" name="username" />
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="password">Password:</label>
          <input className="form__field" id="password" type="password" name="password" />
        </div>

        <p>Already have account? <Link to={AppRoute.SIGN_IN}>Sign in</Link></p>

        <button className="form__submit" type="submit">Sign Up</button>
      </form>
    </main>
  );
}

export default SignUp;


// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppRoute, ENDPOINT } from "../../const";

// export default function Signup({ onLogin }) {
//   const [error, setError] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const username = event.target.username.value;
//     const password = event.target.password.value;
//     const name = event.target.name.value;
    
//     console.log(username, password);

//     axios
//       .post(`${ENDPOINT}/signup`, {
//         username,
//         password,
//         name
//       })
//       .then((resp) => {
//         console.log("token from server:",resp.data.token);
//         onLogin(resp.data.token);
//         navigate(AppRoute.HERO)
//       })
//       .catch((e) => {
//         setError(`Error: ${e}`);
//       });
//   };

//   return (
//     <main className="login-page">
     
//       <form className="login" onSubmit={handleSubmit}>

//         <label>Username:</label>
//         <input type="text" name="username" />

//         <label>Password:</label>
//         <input type="password" name="password" />

//         <label>Name:</label>
//         <input type="text" name="name" />

//         {error && <div className="login__message">{error}</div>}
// <div className='button-container'>
//         <button className="login__button">Sign Up</button>
//         <Link to={AppRoute.LOGIN}>
//         <button className="switch" >switch to login</button>
//         </Link>
        
//         {/* to login page</Link> */}
//         </div>
//       </form>
//     </main>
//   );
// }
