import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import account from './media/account.png'


const Topico = ({topic}) => {
    
    const { id, titulo, mensaje, fecha_creacion, usuario_id, curso_id, respuestas } = topic

    const [catName, setCatName] = useState()

    const categoria = curso_id?.id_curso

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

 
    return (
        <div className='topico-container'>
            <Link to={`/detail/${id}`} className='topico'>
                <div className='topico-l'>
                    <div className='title-zone'>
                        <div className='topico-titulo'>{titulo}</div>
                        <div className='topico-categoria'>{catName}</div>
                    </div>
                    
                    <div className='topico-mensaje'>{mensaje}</div>
                    <div className='topico-fecha'>{fecha_creacion}</div>
                </div>
                <div className='topico-r'>
                    <div className='topico-respuestas'>
                        <div>{respuestas.length}</div>
                        <div>respuestas</div>
                    </div>
                    <img src={account} width={50} height={50}  alt=''/>
                    <div className='topico-div-autor'>
                        <p>por</p>
                        <div className='topico-autor'>{usuario_id.nombre}</div>
                    </div>
                    
                </div>
            </Link>
        </div> 
    )   
}
  
  export default Topico;


