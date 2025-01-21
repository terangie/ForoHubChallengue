
const DataResProvider = ({children}) => {

    const [ datos, setDatos ] = useState()

    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      const getRespuestas = () => {
        fetch("http://localhost:8080/respuestas", requestOptions)
        .then((response) => response.json())
        .then((result) => setDatos(result))
        .catch((error) => console.error(error));
      }
      
    useEffect(()=> {
        getRespuestas()
    },[])

    return ( <DataResContext.Provider value={{datos}}>{children}</DataResContext.Provider> 
    )
}

export default DataResProvider