import router from './routes';
//muestra el home cuando carga la pantalla//
window.addEventListener('load', router);
//muestra una pantalla nueva cuando cambia el hash en el navegador//
window.addEventListener('hashchange',router)