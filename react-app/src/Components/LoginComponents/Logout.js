import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function Logout() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear(); // clear local storage
    alert("logging out");
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLogout}
        style={{
          textDecoration: "underline",
          float: "right",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    );
  } else {
    return null;
  }
}

export default Logout;
