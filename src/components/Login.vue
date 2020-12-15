<template>
<div class="text-center">
  <b-jumbotron
          header="Iniciar Sesión">
          <div class="m-auto container w-50">
            <div class="col-sm-12 mt-4">

          <b-form class="w-100 m-auto">
          <label class="sr-only" for="inline-form-input-username"
            >Correo</label>
          <b-input-group prepend="✉" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="email"
            required
              id="inline-form-input-username"
              placeholder="jdvpl@gmail.com"
            ></b-form-input>
          </b-input-group><br>
          <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
              id="inline-form-input-username"
              placeholder="Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
          <b-button variant="dark" class="btn btn-block">Guardar</b-button>
        </b-form>
        </div>
          </div>
        </b-jumbotron>
        <div class="font-weight-bold lead"><h2>Bienvenido a tu Gestión Documental</h2></div>
        <footer/>
        </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  components: { Footer },
  name: "Login"
}
</script>
