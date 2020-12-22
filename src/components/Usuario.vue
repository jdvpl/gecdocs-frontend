<template>
        <p>Hola  <span> {{email}} </span></p>
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
