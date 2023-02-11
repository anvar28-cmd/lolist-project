import { useEffect, useState } from "react";
import { ENDPOINT } from "../../const";
import { dropToken, getWithToken} from "../../token";

function Header({setIsAuthorized}) {

  const [profile, setProfile] = useState();

  useEffect(() => {
    getWithToken(`${ENDPOINT}/profile`)
      .then(({ data }) => {
        setProfile(data);
        console.log(data);
      })
      .catch(() => {
        console.log("something has gone terribly wrong");
      });
  }, []);
console.log(profile);
  const handleLogoutClick = () => {
    setIsAuthorized(false);
    dropToken();
  };

  return (
    <>
      {profile && <h2>Welcome, {profile.username}!</h2>}
      <button className="button-header" onClick={handleLogoutClick} type="button">Logout</button>
    </>
  )
}

export default Header