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
