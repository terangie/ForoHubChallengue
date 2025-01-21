import React, { useContext } from "react";
import AuthContext from "./AuthContext";


export default function Login () {

    const { loginUser } = useContext(AuthContext)

    return (
        <div className="login"> 
            <p>Iniciar sesión</p>
            <form onSubmit={loginUser}>
                <div className="login-data"><input type="text"  name="nombre" placeholder="Usuario"  /></div>
                <div className="login-data"><input type="password" name="contrasena" placeholder="Contraseña" /></div>
                <input type="submit" className="login-submit"/>
            </form>
        </div>
    )
}