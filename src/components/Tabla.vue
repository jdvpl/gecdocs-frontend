<template>
  <div class="mt-5">
    <b-table class="text-center" striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
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
          { isActive: true, name_doc: 'Soat', frenov:'2020-1-19',fvenc:'2021-1-19',falarm:'2024-1-10' },
          { isActive: true, name_doc: 'Comida', frenov:'2020-1-19',fvenc:'2021-1-19',falarm:'2024-1-10' },
          { isActive: true, name_doc: 'Salud', frenov:'2020-1-19',fvenc:'2021-1-19',falarm:'2024-1-10' },
          
        ]
      }
    }
  }
</script>