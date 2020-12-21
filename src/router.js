  
import vueRouter from 'vue-router'

import App from './App'
import Registro from './components/Registro.vue'
import Login from './components/Login.vue'
import Documento from './components/Documentos.vue'
import Usuario from './components/Usuario.vue'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/login',
                name: "login",
                component: Login
            },
            {
                path: '/usuario/:usuario',
                name: "usuario",
                component: Usuario
            },
            ,
            {
                path: '/registro',
                name: "registro",
                component: Registro
            },
            {
                path: '/documentos/:usuario',
                name: "documento",
                component: Documento
            },


        ]
    })

export default router
