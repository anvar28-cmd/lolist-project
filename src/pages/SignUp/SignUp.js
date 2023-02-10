function SignUp() {
  return (
    <div>SignUp</div>
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
