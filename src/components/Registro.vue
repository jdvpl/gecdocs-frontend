<template>
<div class="text-center">
 <b-jumbotron
          header="Regístrate">
          <div class="m-auto container col-md-6">
            <div class="col-sm-12 mt-4 ">

        <b-form class="m-auto" v-on:submit.prevent="processAuthUserRegistro">
        <label class="sr-only" for="inline-form-input-username"
            >Nombre</label
          >
          <b-input-group prepend="👤" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="text"

             v-model="user_in.name"

            required
              id="inline-form-input-name"
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
            v-model="user_in.email"
              id="inline-form-input-email"
              placeholder="jdvpl@gmail.com"
            ></b-form-input>
          </b-input-group><br>

          <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
            v-model="user_in.password"
              id="inline-form-input-pass1"
              placeholder="Contraseña"
              require
            ></b-form-input>
          </b-input-group><br>
           <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
              v-model="user_in.confirmar"
              id="inline-form-input-pass"
              placeholder="Confrimar Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
          <b-button variant="dark" type="submit" class="btn btn-block">Registrame</b-button>
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
      user_in:{
      name:"",
      email: "",
      password: "",
      confirmar:"",
      }
    };
  },
  methods: {
    processAuthUserRegistro: function(){
      
      if(this.user_in.confirmar==this.user_in.password){
            var self = this
      axios.post("https://gestion-documental.herokuapp.com/registrar-usuario/", self.user_in,{headers: {}})
        .then(response => {
          alert(response.data.msg);
          self.$emit('log-in', self.user_in.email)
        })
        .catch(err => {
          console.log(err);
          alert("Error en el servidor");
        });
      }else{
         alert("Las contraseñas no coinciden");
      }
    }
  }
};
</script>
