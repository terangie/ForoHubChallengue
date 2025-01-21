import React, { useState, useEffect } from "react";

export default function PostTopic() {

    const [token, setToken] = useState();
    const [usuarioId, setUsuarioId] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token);
    },[token]);

    useEffect(() => {
        const usuarioId = localStorage.getItem('id');
        setUsuarioId(usuarioId)
    },[usuarioId]);

    
    const [titulo, setTitulo] = useState()
    const [mensaje, setMensaje] = useState()
   
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
  
      let h = addZero(today.getHours());
      let m = addZero(today.getMinutes());
      let s = addZero(today.getSeconds());
      let time = h + ":" + m + ":" + s;
  
      const formattedToday = time + " " + dd + '/' + mm + '/' + yyyy; 

    const myHeaders = new Headers();

    const [curso, setCurso] = useState(1)

    const fijarCurso = () => {
        const valor1 = document.getElementById("select-curso")
        const valor2 = valor1.value
        const valor3 = Number(valor2)
        setCurso(valor3)
    }

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const topico = {
        "titulo": titulo,
        "mensaje": mensaje,
        "fecha_creacion": formattedToday,
        "status": true,
        "usuario_id": {
            "id_usuario": usuarioId
        },
        "curso_id": {
            "id_curso": curso
        }
    };
 
const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(topico),
    redirect: "follow"
  };

  let postData = async ()=> {
    fetch('http://localhost:8080/topicos', options)
    console.log(topico)
  }


    return (
        <div className="f-topico-m">
            <div className="f-topico-i">
                <form onSubmit={postData}>
                <input className="f-topico-titulo" type="text" placeholder="Titulo" onChange={(e) => {setTitulo(e.target.value)}}/>
                <div className="f-topico-curso">
                    <div>Curso/Categoría: </div>
                    <select name="select-curso" id="select-curso" onChange={fijarCurso}>
                        <option value="1">Programación</option>
                        <option value="2">Front End</option>
                        <option value="3">Data Science</option>
                        <option value="4">Innovación y Gestión</option>
                        <option value="5">DevOps</option>
                        <option value="6">Off Topic</option>
                    </select>
                </div>
                <textarea className="f-topico-mensaje" type="text" placeholder="Escribe tu mensaje" resize="none" onChange={(e) => {setMensaje(e.target.value)}}/>
                <input className="f-topico-submit" type="submit" value="Enviar"/>
                {/* <button className="test" onClick={postData}>test</button> */}
                </form>
            </div>
        </div>
      
    )
}