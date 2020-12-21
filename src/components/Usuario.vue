<template>
    <div id="usuario">
        <h2>Hola  <span> {{email}}, </span>  ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Usuario",
        data:function(){
            return {
                email: "none"
            }
        },

        created: function(){
            this.email = this.$route.params.email
        }
    }
</script>
