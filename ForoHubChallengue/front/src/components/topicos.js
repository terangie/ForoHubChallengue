import React, { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from './getTopicos';
import Topico from './topico';
import escribir from './media/escribir.png'
import PostTopic from './postTopico';

export default function Topicos() {

  const { datos } = useContext(DataContext)

  const topicos = datos?.filter((item) => {
    return item.status === true
    }).sort().reverse()
    

  const [showTop, setShowTop] = useState(false)

      function closeTop() {
        setShowTop(false)
      }

      const Ref = useRef(null);
    
      const handleOutsideClick = (e) => {
        if (
          Ref.current &&
          !Ref.current.contains(e.target) 
        ) {
          closeTop()
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);


  
    return (
      <div className='topicos'>

        <div className='tc'>

          
          <div className='crear-topico-container'>
            <div className='crear-topico' onClick={() => setShowTop(true)}><img src={escribir} width={20} height={20}  alt=''/><p>Crear nuevo topico</p></div>
          </div>
           
        <div className="topicos-container">
            {topicos?.map((topic) => {
                  return (
                      <Topico topic={topic} key={topic.id}/>
                  ) 
              })} 
        </div>

        </div>

        <div className= {showTop ? "f-topico active" : "f-topico"} ref={Ref}>
          <PostTopic/>
        </div>
        
      </div>

    );
}