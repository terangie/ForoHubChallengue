import React, { useEffect, useState } from 'react';
import account from './media/account.png';
import prize from './media/bookmark-star-fill.svg';
import noprize from './media/bookmark-star.svg';
import trash from './media/trash3.svg';

const Respuesta = ({res}) => {
    
    const { id_respuesta, mensaje_respuesta, fecha_respuesta, usuario_respuesta_id, solucion } = res

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


    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    const respuesta = {
        "id_respuesta": id_respuesta,
        "solucion": !solucion
      };

      const options = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(respuesta),
        redirect: "follow"
      };
    
      let postData = async ()=> {
        fetch('http://localhost:8080/respuestas', options)
      }
        

      const usuario_idA = usuario_respuesta_id?.id_usuario
      const usuario_idB = Number(usuarioId)

      const optionsDelete = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: "follow"
      };

      let postDelete = async ()=> {
        if (usuario_idB === usuario_idA) {
        fetch(`http://localhost:8080/respuestas/${id_respuesta}`, optionsDelete)
        alert('Respuesta eliminada!')
        } else {
        alert('No eres el autor de la respuesta!')
        }
      }

      const [awarded, setAwarded] = useState() 

      const giveaward = () => {
        if(solucion === true) {
            setAwarded(true)
        } if(solucion === false) {
            setAwarded(false)
        }
      }
 
    useEffect(()=> {
        giveaward()
    },[solucion])

    return (
        <div className='respuesta'>
            <form className='res-one' onSubmit={postData}>
              <button className='button-container' type='submit'>
                <img src={awarded === true ? prize : noprize} width={30} height={40}  alt=''/>
              </button>
            </form>
            <div className='res-two'>
                <img src={account} width={40} height={40}  alt=''/>
                <p>por</p>
                <div className='res-autor'>{usuario_respuesta_id.nombre}</div>
            </div>
            <div className='res-three'>{mensaje_respuesta}</div>
            <div className='res-four'>{fecha_respuesta}</div>
            <form className='res-five'  onClick={postDelete}>
              <button className='button-container' type='submit'>
                <img src={trash} width={20} height={25}  alt=''/>
              </button>
            </form>
        </div> 
    )   
}
  
  export default Respuesta;