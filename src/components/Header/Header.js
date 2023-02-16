import { useEffect, useState } from "react";
import { ENDPOINT } from "../../const";
import { dropToken, getWithToken} from "../../token";

function Header({setIsAuthorized}) {

  const [profile, setProfile] = useState();

  useEffect(() => {
    getWithToken(`${ENDPOINT}/profile`)
      .then(({ data }) => {
        setProfile(data);
      })
      .catch(() => {
        console.log("something has gone terribly wrong");
      });
  }, []);
  
  const handleLogoutClick = () => {
    setIsAuthorized(false);
    dropToken();
  };

  return (
    <header className="header container">
      {profile && <h2 className="header__title">Welcome summoner, {profile.username}!</h2>}
      <button className="button"
        onClick={handleLogoutClick}
        type="button"
      >
        Logout
      </button>
    </header>
  )
}

export default Header