function SignIn() {
  return (
    <div>SignIn</div>
  );
}

export default SignIn;

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
