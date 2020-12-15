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
           <b-input-group prepend="🗝" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
            type="password"
              id="inline-form-input-username"
              placeholder="Confrimar Contraseña"
              required
            ></b-form-input>
          </b-input-group><br>
          <b-button variant="dark" class="btn btn-block">Guardar</b-button>
        </b-form>
            </div>
          </div>
        </b-jumbotron>
        </div>
</template>
<script>
export default {
  name: "Registro"
}
</script>
