import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),//opcional para guardar historial de rutas
    routes,
});

const app = createApp(App);//Todo creado automaticamente por Vite
app.use(router);
app.mount('#app')