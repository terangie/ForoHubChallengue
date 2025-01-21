import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Account from './account';


export default function Navbar() {

    const [usuario, setUsuario] = useState();

    useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    setUsuario(usuario); 
    },[usuario]);


    const [showAcc, setShowAcc] = useState(false)

    function closeAcc() {
      setShowAcc(false)
    }

    const Ref = useRef(null);
  
    const handleOutsideClick = (e) => {
      if (
        Ref.current &&
        !Ref.current.contains(e.target) 
      ) {
        closeAcc()
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);


    return (
        <div className="navbar" id="navbar">
            <div><Link to="/" className="navbar-link">Inicio</Link></div>
            <div className="navbar-usuario">hola {usuario}!</div>  
            <div className="navbar-link" onClick={() => setShowAcc(true)}>Iniciar sesión</div>

            <div className= {showAcc ? "f-account activex" : "f-account"} ref={Ref}>
                <Account/>
            </div>
        </div>
    )
}