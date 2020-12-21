<template>
<div class="text-center">
 <b-jumbotron
          header="Regístrate">
          <div class="m-auto container w-50">
            <div class="col-sm-12 mt-4">
        <b-form class="w-100 m-auto">
        <label class="sr-only" for="inline-form-input-username"
            >Nombre</label
          >
          <b-input-group prepend="👤" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="text"

            v-model="name" 

            required
              id="inline-form-input-username"
              placeholder="Pepita Perez"
            ></b-form-input>
          </b-input-group><br>

          <label class="sr-only" for="inline-form-input-username"
            >Correo</label
          >
          <b-input-group prepend="📩" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="email"
            required

            v-model="email" 

              id="inline-form-input-username"
              placeholder="jdvpl@gmail.com"
            ></b-form-input>
          </b-input-group><br>

          <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
            v-model="password" 
              id="inline-form-input-username"
              placeholder="Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
           <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"

            v-model="confirmar" 

              id="inline-form-input-username"
              placeholder="Confrimar Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
          <b-button variant="dark"  v-on:click="agregarregistro" class="btn btn-block">Guardar</b-button>
        </b-form>
            </div>
          </div>
        </b-jumbotron>
        </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Registro",
data: function() {
    return {
      name:"",
      email: "",
      password: "",
    };
    console.log(password)
  },
  methods: {
    agregarregistro: function() {
      var datosJson = {
        name:this.name,
        email: this.email,
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