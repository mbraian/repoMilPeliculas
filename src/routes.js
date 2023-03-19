const routes = [
    {
        name: "peliculaLista",
        path: "/",
        component: () => import("./pages/PeliculaLista.vue"),
    },
    {
        name: "pelicula",
        path: "/pelicula/:id",
        component: () => import("./pages/Pelicula.vue"),
    },
    {
        name: "actor",
        path: "/actor/:id",
        component: () => import("./pages/Actor.vue"),
    }
]

export default routes;