<template>
    <button class="c-button" :id="id" :innerText="innerText"></button>
</template>

<script>
export default{
    name: 'CButton',
    props:{
        id:{
            type: String,
            default:'',
        },
        innerText:{
            type: String,
            default:'',
        }
    }
};
</script>

<style>
.c-button{
    background-color: var(--color-button);
    color: var(--color-background-light);
    border: none;
    padding: 5px;
    font-weight: bold;
    box-shadow: 4px 4px 8px 0 var(--color-button-hover);
}
.c-button:hover{
    cursor: pointer;
    box-shadow: 8px 8px 16px 0 var(--color-button-hover);
}
</style>
