import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
          <div className="logOut">
            <MyButton onClick={logout} >Выйти</MyButton>
            </div>
      <div className="navbar__links">
        <Link to="/about" className="link2">О сайте</Link>
        <Link to="/posts" className="link1">Посты</Link>
      </div>
    </div>
    )


}
export default Navbar;