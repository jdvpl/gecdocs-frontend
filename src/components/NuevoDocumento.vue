<template>
<div class="mt-5 container">

  <b-form class="w-100 m-auto">
        <label class="sr" for="inline-form-input-username"
            >Nombre</label
          >
          <b-input-group prepend="📄" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="text"

            v-model="name_doc" 

            required
              id="inline-form-input-username"
              placeholder="Licencia de comida"
            ></b-form-input>
          </b-input-group><br>

          <label class="sr" for="inline-form-input-username"
            >Fecha Renovacion</label
          >
          <b-input-group prepend="📅" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="date"
            required

            v-model="frenov" 

              id="inline-form-input-username"
            ></b-form-input>
          </b-input-group><br>
           <label class="sr" for="inline-form-input-username"
            >Fecha Vencimiento</label
          >
          <b-input-group prepend="📅" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="date"
            required

            v-model="fvenc" 

              id="inline-form-input-username"
            ></b-form-input>
          </b-input-group><br>

           <label class="sr" for="inline-form-input-username"
            >Fecha Alarma</label
          >
          <b-input-group prepend="📅" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="date"
            required
            v-model="falarm" 

              id="inline-form-input-username"
            ></b-form-input>
          </b-input-group><br>

          
          <b-button variant="dark" type="sumit" v-on:click="agregarDocumento" class="btn btn-block">Guardar</b-button>
        </b-form>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"NuevoDocumento",

data: function() {
    return {
      name_doc:"",
      frenov: "",
      fvenc: "",
      falarm: "",
      email: email,
    }
    
  }
  ,
   created: function(){
        this.email = this.$route.params.email
    },
  methods: {
    agregarDocumento: function() {
      var datosJson = {
        name_doc:this.name_doc,
        frenov: this.frenov,
        fvenc: this.fvenc,
        falarm: this.falarm,
        email: this.email,
      };
      axios
     //? recordar cambiar al servidor en la nueve https://gestion-documental.herokuapp.com
        .post("http://127.0.0.1:8000/crear-documento/", datosJson)
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

<style>

</style>