import React, { useRef, useState } from "react";
import bcrypt from 'bcryptjs';

export default function Register () {

    const [nombre, setNombre] = useState()
    const [correo, setCorreo] = useState()
    const [contrasena, setContrasena] = useState()

    const passwordRef = useRef()

    const passwordEncript = () => {
        const password = passwordRef.current.value
        const hashedPassword = bcrypt.hashSync(password, 10)
        console.log(hashedPassword)
        setContrasena(hashedPassword)
    }

    
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const customUser = {
        'nombre': nombre,
        'correo_electronico': correo,
        'contrasena':  contrasena
    }
 
    const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(customUser),
        redirect: "follow"
    };

    let postData = async ()=> {
        (fetch('http://localhost:8080/usuarios', options))
    }
    
    return (
        <div className="register">
            <p>No tienes cuenta? regístrate</p>
            <form onSubmit={postData}>
                <div className="login-data"><input type="text" placeholder="Nombre de usuario" onChange={(e) => {setNombre(e.target.value)}} /></div>
                <div className="login-data"><input type="text" placeholder="Correo electronico" onChange={(e) => {setCorreo(e.target.value)}} /></div>
                <div className="login-data"><input type="password" placeholder="Contraseña" ref={passwordRef} onChange={passwordEncript}/></div>
                <input type="submit" className="login-submit"/>
            </form>
        </div>
        
    )
}