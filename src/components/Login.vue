<template>
<div class="text-center">
  <b-jumbotron
          header="Iniciar Sesión">
          <div class="m-auto container w-50">
            <div class="col-sm-12 mt-4">

          <form class="w-100 m-auto" v-on:submit.prevent="processAuthUser">
          <label class="sr-only" for="inline-form-input-username"
            >Correo</label>
          <b-input-group prepend="✉" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="email"
            required
            v-model="user_in.usuario"
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
        </form>
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
      email: "",
      password: "",
    };
    console.log(password)
  },
  methods: {
    agregarregistro: function() {
      var datosJson = {
        email: this.email,
        name: this.name,
        password: this.password
      };
      axios
        .post("http://127.0.0.1:8000/registrar-usuario/", datosJson)
        .then(response => {
          alert(response.data.msg);
        })
        .catch(err => {
          console.log(err);
          alert("error en el servidor");
        });
    }
  }
};
</script>
