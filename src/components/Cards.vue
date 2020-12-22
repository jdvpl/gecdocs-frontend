<template>

    <div class="row">
      <div class="col-md-4">
        <div class="card text-white bg-danger mb-3">
          <div class="card-header">Documentos a Vencer en 7 dias</div>
          <div class="card-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                Soat-25-03-2020
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Dapibus ac facilisis in</a
              >
      
            </div>
          </div>
        </div>
      </div>
         <div class="col-md-4">
        <div class="card text-white naranja mb-3">
          <div class="card-header">Documentos a Vencer en 15 dias</div>
          <div class="card-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >Dapibus ac facilisis in</a
              >
            
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Documentos a Vencer en 30 dias</div>
          <div class="card-body">
           
            <!-- <div class="list-group" v-for="dato in datos">
              <a
                href="!#"
                class="list-group-item list-group-item-action"
                aria-current="true"
                
              >
              <p v-if="dato.frenov==hoy">{{dato.name_doc}}</p>
               
              </a>
              
              
            </div> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name:"Card",
     data() {
      return {
        hoy:"",
          datos: [ ]
      }
     },
       created: function(){
            let fecha = new Date()
            let hoy=fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
            this.hoy=hoy
        this.email = this.$route.params.email

        let self = this

        axios.get("http://gestion-documental.herokuapp.com/documentos-usuario/?email=" + this.email).then((result) => {
            const resulta=result.data.documentosPn
            console.log(resulta)
            this.datos=resulta
        })

    }
}
</script>

<style>

</style>