import React, { createContext, useState, useEffect } from "react";


export const DataContext =  createContext()

const DataProvider = ({children}) => {

    const [ datos, setDatos ] = useState()

    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      const getTopicos = () => {
        fetch("http://localhost:8080/topicos", requestOptions)
        .then((response) => response.json())
        .then((result) => setDatos(result))
        .catch((error) => console.error(error));
      }
      
    useEffect(()=> {
        getTopicos()
    },[])

    return ( <DataContext.Provider value={{datos}}>{children}</DataContext.Provider> 
    )
}

export default DataProvider