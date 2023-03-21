import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
const Login = event => { 
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }
return (
    <div>
        <h1>Авторизация</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите Логин"/>
            <MyInput type="password" placeholder="Введите Пароль"/>
            <MyButton>Войти</MyButton>
        </form>
    </div>

)

}
export default Login;