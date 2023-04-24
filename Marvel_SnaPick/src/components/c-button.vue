<template>
    <button class="c-button" v-bind="$attrs">
        Confirmar
    </button>
    <button class="c-button">
        Registrarse
    </button>
</template>

<script>
export default{
    name: 'CButton',
    inheritAttrs: false,
    props:{
        id:{
            type: String,
            default:'',
        }
    }
};
</script>