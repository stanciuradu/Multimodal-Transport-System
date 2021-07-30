// componenta de Header este un a simpa de tip Function
import React from "react";
import "../components/Header.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { auth } from "../apis/firebase";

function Header(props) {
  const { availableUser } = props;
  console.log(props);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="random" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          <h4>SHOP PAGE</h4>
        </Link>
        <Link to="/shop" className="option">
          <h4>CONTACT</h4>
        </Link>
        <Link to="/sign_in" className="option">
          <h4>SIGN IN</h4>
        </Link>
        {/* daca user0ul este autentificat se afiseaza SignOut, altfel se redirectioneaza user-ul catre pagina de SignIn */}
        {availableUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <h4>SIGN OUT</h4>
            <p>{availableUser.displayName}</p>
          </div>
        ) : (
          <Link className="option" to="/sign_in"></Link>
        )}
      </div>
    </div>
  );
}

export default Header;
