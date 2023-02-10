import { dropToken } from "../../token";

function Header({setIsAuthorized}) {
  const handleLogoutClick = () => {
    setIsAuthorized(false);
    dropToken();
  };

  return (
    <button onClick={handleLogoutClick} type="button">Logout</button>
  )
}

export default Header