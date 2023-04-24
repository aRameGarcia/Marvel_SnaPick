<template>
    <div class="c-text-field">
        <input class="c-text-field__input" v-bind="$attrs" @input="$emit('update', value)">
    </div>
</template>

<script>
export default{
    name: 'CTextField',
    inheritAttrs: false,
    props:{
        id:{
            type: String,
            default:'',
        },
        placeholder:{
            type: String,
            default:'',
        },
        type:{
            type: String,
            default:'text',
        },
        value:{
            type: String,
            default:'',
        }
    },
    emits:['update'],
}
</script>

<style lang="scss">
.c-text-field{
    margin-top: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 50%;
    background-color: var(--color-input);
}
.c-text-field__input{
    width: 100%;
    height: 100%;
    color: var(--color-font);
    border: none;
}
::placeholder{
    color:var(--color-font);
}
</style>