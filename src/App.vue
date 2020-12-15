<template>
  <div id="app">
    <div class="header">
      <div>
        <b-navbar toggleable="sm"  type="dark" variant="dark">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <b-navbar-brand class="font-weight-bold ml-5 pl-5"
            >GecDocs</b-navbar-brand>
          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="text-right ml-auto mr-5">
              <b-nav-item v-on:click="login">Login</b-nav-item>
              <b-nav-item v-on:click="registro">Registro</b-nav-item>
              <b-nav-item v-if="is_auth" v-on:click="documentos">Documentos</b-nav-item>
              <b-nav-item v-if="is_auth">Cerrar Sesion</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div>
         <router-view></router-view>  
    </div>

    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function() {
    return {
      is_auth:localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    registro: function() {
      this.$router.push({ name: "registro" });
    },
    login: function() {
      this.$router.push({ name: "login" });
    },
      documentos: function() {
      this.$router.push({ name: "documento" });
    },
  },
  beforeCreate:function() {
    this.$router.push({ name: "login" });
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
