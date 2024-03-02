const resolveRoutes = (route) => {
    //verifica si la ruta es parte del home o de algun id//
    if (route.length <= 3 ) {
        //si router es / devuelve el valor de router, sino sabe que es un id y devuelve /:id //
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }
    //si la ruta tiene un nombre mayor a 3 valores no es un id ni el home, entonces la agrega despues del /  //
    return `/${route}`;
}

export default resolveRoutes;