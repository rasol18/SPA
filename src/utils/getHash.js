//location.hash trae el hash que hay despues del # en la url//
//usa el slice para eliminar el primer elemento que trae osea el #//
//toLocaleLowerCase pasa en minuscula el resultado//
//split devolverá un array con cada elemento y eliminará los / //
//devuelve lo que se encuentra dentro del array en la posicion 1 y si no hay nada devuelve / //
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;