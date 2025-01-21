import React, { useState, createContext } from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
   
        return JSON.parse(jsonPayload);
        }

    
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    let loginUser = async (e)=> {
        e.preventDefault()
        let response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({'nombre':e.target.nombre.value, 'contrasena':e.target.contrasena.value}),
            redirect: "follow"
        })
        let data = await response.json()
        if (response.status === 200){
            let token = await data.jwTtoken
            localStorage.setItem('token', token);
            let user = await parseJwt(token)
            localStorage.setItem('usuario', user.sub);
            localStorage.setItem('id', user.id);
            alert('Sesion iniciada!')
            
        } else {
            alert('Algo salió mal, intenta de nuevo!')
        }
    }
        

    let logoutUser = () => {
        setCurrentUser(null)
    }

    let contextData = {
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    
    return (

        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
        
    )
}