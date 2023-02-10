function Heroes() {
  return (
    <div>Heroes</div>
  );
}

export default Heroes;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ENDPOINT } from "../../const";

// export default function Hero({ onLogout }) {
//   const [profile, setProfile] = useState();

//   useEffect(() => {
//     getWithToken(`${ENDPOINT}/profile`)
//       .then(({ data }) => {
//         setProfile(data);
//       })
//       .catch(() => {
//         console.log("something has gone terribly wrong");
//         onLogout();
//       });
//   }, [onLogout]);

//   if (!profile) {
//     return <span>Loading user's profile...</span>;
//   }

//   return (
//     <main className="profile-page">
//       <h2>Welcome, {profile.username}!</h2>
//       <button onClick={onLogout}>Log out</button>
//     </main>
//   );
// }

// function getWithToken(path) {
//   const token = sessionStorage.bearerToken;
//   return axios.get(path, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
