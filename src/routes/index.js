import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    //obtenemos el hash y lo mandamos a la funcion para encontrar la ruta//
    let hash = getHash();
    let route = await resolveRoutes(hash);
    //si encuentra la ruta la muestra y sino muestra la pagina de error//
    let render = routes[route] ? routes[route] : Error404;
    //muestra en pantalla el resultado del render//
    content.innerHTML = await render();
}

export default router;