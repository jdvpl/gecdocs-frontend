<template>
  <div id="app">
    <div class="header">
      <div>
        <b-navbar toggleable="sm"  type="dark" variant="dark">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <b-navbar-brand class="font-weight-bold ml-5 pl-5"
            >GesDocs</b-navbar-brand>
          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="text-center ml-auto mr-5">
              <b-nav-item  v-if="is_auth"><usuario/></b-nav-item>
              <b-nav-item v-on:click="init" v-if="!is_auth">Login</b-nav-item>
              <b-nav-item v-on:click="registro"  v-if="!is_auth">Registro</b-nav-item>
              <b-nav-item  v-on:click="documentos" v-if="is_auth">Documentos</b-nav-item>
              <b-nav-item  v-on:click="Nuevo" v-if="is_auth">Nuevo Documento</b-nav-item>
              <b-nav-item v-if="is_auth" v-on:click="logOut" >Cerrar Sesion</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div>
         <router-view v-on:log-in="logIn"></router-view>  
    </div>

  </div>
</template>

<script>


import vueRouter from 'vue-router'
import Usuario from './components/Usuario.vue'

export default {
  name: 'App',

  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      
      }    
  },
  components: {
    Usuario
  },

  methods:{
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "login"})

      else{
        let email = localStorage.getItem("email")
        self.$router.push({name: "usuario", params:{ email: email }})
      }  
    },

    logIn: function(email){
      this.$router.push({name: "login"})
      localStorage.setItem('email', email)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
      
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('email')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "login"){
        this.$router.push({name: "login"})        
      }
      
    },
      registro: function(){
        if(this.$route.name != "registro"){
      this.$router.push({name: "registro"})
      localStorage.setItem('email', email)
      localStorage.setItem('isAuth',false)
      this.updateAuth()
        }
      
    },

    documentos: function(){

      if(this.$route.name != "documento"){
        let email = localStorage.getItem("email")
        this.$router.push({name: "documento", params:{ email: email }})
      }
    },
       Nuevo: function(){
      if(this.$route.name != "nuevo"){
        let email = localStorage.getItem("email")
        this.$router.push({name: "nuevo", params:{ email: email }})
      }
    },
    
  },

  created: function(){
    
    this.$router.push({name: "root"})
    this.updateAuth()
  }
  

}
</script>

<style>
  /* color de la barra scroll */

  .navbar.scrolled {
    background: rgb(211, 63, 26) !important;
    transition: 0.5s;
  }
  
  ::-webkit-scrollbar {
    border-radius: 10px !important;
    width: 7px !important;
    background-color: rgba(255, 14, 14, 0.144) !important;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(70, 8, 185, 0.3) !important;
    background-color: rgba(27, 80, 226, 0.11) !important;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 1px !important;
    background-color: rgb(24, 25, 27) !important;
  }
nav {
  background-color: rgba(0, 0, 0, 0.521) !important;
}
.footer {
  bottom: 0;
  position: absolute;
  width: 100%;
  text-align: center !important;
}
</style>
