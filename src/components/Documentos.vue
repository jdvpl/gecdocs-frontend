<template>
  <div class="container mt-5">
    <div class="float-right">

    </div>
    
    <cards></cards>
    <div id="tabla">
      <tabla></tabla>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Cards from './Cards.vue';
import Tabla from './Tabla.vue';
export default {
  components: { Tabla, Cards },
  name: "Documento",
  
};
</script>

<style>
.naranja{
  background-color: orange !important;
}
</style>
