<template>
  <div class="mt-5">
    <b-table class="text-center" striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
      name:'Tabla',
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            label:'Nombre Documento',
            key: 'name_doc',
            sortable: true
          },
          {
            label:'Fecha Renovacion',
            key: 'frenov',
            sortable: true
          },
          {
            key: 'fvenc',
            label: 'Fecha Vencimiento',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            // variant: 'danger' aplicacar bacgron
          },
           {
            key: 'falarm',
            label: 'Fecha Alarma',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            // variant: 'danger' aplicacar bacgron
          }
        ],
        items: [
          {  },
          
        ],
        
      }
    },
  mounted: function(){
        this.email = this.$route.params.email
        let self = this
        // https://gestion-documental.herokuapp.com/
        axios.get("https://gestion-documental.herokuapp.com/documentos-usuario/?email=" + this.email).then((result) => {
            this.items = result.data.documentosPn
            this.usuario=result.data
        })
    }
}
</script>