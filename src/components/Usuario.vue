<template>
    <div id="usuario">
        <h2>Hola  <span> {{usuario}}, </span>  ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Usuario",
        data:function(){
            return {
                usuario: "none"
            }
        },

        created: function(){
            this.usuario = this.$route.params.usuario
        }
    }
</script>
