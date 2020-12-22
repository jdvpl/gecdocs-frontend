<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
        <h4>{{hoy}} <span class="text-secondary">{{hora}}</span></h4> 
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
   data:function(){
            return {
                hoy: "none",
                hora:"none"
            }
        },
        created: function(){
            let fecha = new Date()
            let hoy=fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
            let hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()
            this.hoy=hoy
            this.hora=hora
        }

  
};
</script>

<style>
.naranja{
  background-color: orange !important;
}
</style>
