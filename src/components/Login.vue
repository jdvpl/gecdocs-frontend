<template>
<div class="text-center">
  <b-jumbotron
          header="Iniciar Sesión">
          <div class="m-auto container w-50">
            <div class="col-sm-12 mt-4">

          <b-form class="w-100 m-auto" v-on:submit.prevent="processAuthUser">
          <label class="sr-only" for="inline-form-input-username"
            >Correo</label>
          <b-input-group prepend="✉" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="email"
            required
            v-model="user_in.email"
              id="inline-form-input-username"
              placeholder="jdvpl@gmail.com"
            ></b-form-input>
          </b-input-group><br>
          <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
            v-model="user_in.password"
              id="inline-form-input-username"
              placeholder="Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
          <b-button variant="dark" class="btn btn-block" type="submit">Iniciar Sesión</b-button>
        </b-form>
        </div>
          </div>
        </b-jumbotron>
        <div class="font-weight-bold lead"><h2>Bienvenido a tu Gestión Documental</h2></div>
        <footer/>
        </div>
</template>

<script>
import axios from 'axios';
import Footer from './Footer.vue'
export default {
  components: { Footer },
  name: "Login",

data: function() {
    return {
      user_in:{
      email: "",
      password: "",
      }
    };
  },
  methods: {
    processAuthUser: function(){
      var self = this
      //? recordar cambiar al servidor en la nueve https://gestion-documental.herokuapp.com
      axios.post("http://gestion-documental.herokuapp.com/login-usuario/", self.user_in,{headers: {}})
        .then(response => {
          alert(response.data.msg);
          self.$emit('log-in', self.user_in.email)
        })
        .catch(err => {
          console.log(err);
          alert("error en el servidor");
        });
    }
  }
};
</script>