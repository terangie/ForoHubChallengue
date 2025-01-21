import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from './getTopicos';
import Respuesta from './respuesta';
import account from './media/account.png';
import escribir from './media/escribir.png'
import trash from './media/trash3.svg';

const TopicoDetail = () => {

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
   
    const { id } = useParams()
    const { datos } = useContext(DataContext)
    
    const topico = datos?.find((item) => {
        return item.id === parseInt(id)
    })

    const titulo = topico?.titulo
    const mensaje = topico?.mensaje
    const fecha_creacion = topico?.fecha_creacion
    const usuario = topico?.usuario_id.nombre
    const curso_id = topico?.curso_id
    const categoria = curso_id?.id_curso
    const respuestas = topico?.respuestas
    const respuestasNum = topico?.respuestas.length

    const [catName, setCatName] = useState()

    const fijarCatName = () => {
      if( categoria === 1) {
          setCatName('Programación')
      }
      if( categoria === 2) {
          setCatName('Front End')
      }
      if( categoria === 3) {
          setCatName('Data Science')
      }
      if( categoria === 4) {
          setCatName('Innovación y Gestión')
      }
      if( categoria === 5) {
          setCatName('DevOps')
      }
      if( categoria === 6) {
          setCatName('Off Topic')
      }
  }
  
  useEffect(()=>{
      fijarCatName()
  },[categoria])
    
    // console.log(respuestas)

    const [mensajeRes, setMensajeRes] = useState()

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

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    const respuesta = {
        "mensaje_respuesta": mensajeRes,
        "topico_id": {
          "id": id
        },
        "fecha_respuesta": formattedToday,
        "usuario_respuesta_id": {
          "id_usuario": usuarioId
        },
        "solucion": false
      };

      const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(respuesta),
        redirect: "follow"
      };
    
      let postData = async ()=> {
        fetch('http://localhost:8080/respuestas', options)
      }


      const navigate = useNavigate();

      const usuario_idA = topico?.usuario_id
      const usuario_idB = usuario_idA?.id_usuario
      const usuario_idC = Number(usuarioId)

      const optionsDelete = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: "follow"
      };

      let postDelete = () => {
        if (usuario_idC === usuario_idB) {
          fetch(`http://localhost:8080/topicos/${id}`, optionsDelete)
          navigate("/")
          alert('Topico eliminado!')
        } else {
          alert('No eres el autor del topico!')
        }      
      }


      const [showRes, setShowRes] = useState(false)

      function closeRes() {
        setShowRes(false)
      }

      const Ref = useRef(null);
    
      const handleOutsideClick = (e) => {
        if (
          Ref.current &&
          !Ref.current.contains(e.target) 
        ) {
          closeRes()
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    return (
        <div className="topico-detail-container">

          <div className="tdc">
         
            <div className="topico-detail">

                <div className="detail-container"> 
                  <div className='title-zone'>
                    <div className="detail-titulo">{titulo}</div>
                    <div className='detail-categoria'>{catName}</div>
                  </div>
                  <div className="detail-fecha">{fecha_creacion}</div>
                  <div className='detail-div-autor'>
                      <img src={account} width={50} height={50}  alt=''/>
                      <p>por</p>
                    <div className='detail-autor'>{usuario}</div>
                  </div>
                  <div className="detail-mensaje">{mensaje}</div>
                  <form className='detail-delete' onSubmit={postDelete}>
                    <button className='button-container-t' type='submit'>
                      <img  src={trash} width={20} height={25}  alt=''/>
                    </button>
                  </form>
                </div>
                  
                <div className="detail-respuestas-container">
                  <div className="res-title">{respuestasNum} Respuestas</div>
                    {respuestas?.map((res) => {
                      return (
                          <Respuesta res={res} key={res.id}/>
                      ) 
                    })} 
                </div>
                
            </div>

            <div className='crear-res-container'>
              <div className='crear-respuesta' onClick={() => setShowRes(true)}><img src={escribir} width={20} height={20}  alt=''/><p>Crear respuesta</p></div>
            </div>
         
          </div>
          
            <div className= {showRes ? "f-respuesta active" : "f-respuesta"} ref={Ref}>
              <div className="f-res-m">
                <div className="f-res-i">
                  <form onSubmit={postData} >
                    <textarea className="f-res-mensaje" type="text" placeholder="Escribe tu mensaje" resize="none" onChange={(e) => {setMensajeRes(e.target.value)}}/>
                    <input className="f-res-submit" type="submit" value="Enviar"/>
                  </form> 
                </div>
              </div>
            </div>
        </div>
    )
}

export default TopicoDetail