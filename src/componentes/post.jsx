import React from 'react';
import Posts from '../data/posts';
import { useParams, Navigate } from 'react-router-dom';

function Post() {
    //Se utiliza useParams para poder obtener parametros en nuestra aplicacion
    const {id} = useParams();
  return (
    <>
        {Posts[id-1] ?
            <div>
                <h1>{Posts[id -1].titulo}</h1>
                <p>{Posts[id -1].texto}</p>
            </div>
        :
        //Redirecciones con Navigate
            <Navigate replace to={"/"}/>
        }
        
    </>
    
  )
}

export default Post