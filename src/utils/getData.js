const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    //si el id existe lo concatena a la url de la api y sino solo devuelve api//
    const apiURL = id ? `${API}${id}` : API;
    try {
        //hace la conexión con la api url//
        const response = await fetch(apiURL); 
        const data =await response.json();
        return data;
    }catch (error) {
        console.log('fetch error' + error)
        } 
}

export default getData;