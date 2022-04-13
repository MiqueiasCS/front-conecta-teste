import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../providers";

export const Navheader = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (auth) {
      localStorage.removeItem("@user");
      setAuth(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        {auth ? (
          <li className="login-out" onClick={handleClick}>
            Logout
            <FiLogOut />
          </li>
        ) : (
          <li className="login-out" onClick={handleClick}>
            Login
            <FiLogIn />
          </li>
        )}
      </ul>
    </Container>
  );
};
