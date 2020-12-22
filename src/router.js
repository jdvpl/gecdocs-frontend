  
import vueRouter from 'vue-router'

import App from './App'
import Registro from './components/Registro.vue'
import Login from './components/Login.vue'
import Documento from './components/Documentos.vue'
import NuevoDocuemento from './components/NuevoDocumento.vue'


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
                path: '/usuario/:email',
                name: "usuario",
                component: Documento
            },
            ,
            {
                path: '/registro',
                name: "registro",
                component: Registro
            },
            {
                path: '/documentos/:email',
                name: "documento",
                component: Documento
            },
            {
                path: '/nuevo-documento',
                name: "nuevo",
                component: NuevoDocuemento
            },


        ]
    })

export default router
