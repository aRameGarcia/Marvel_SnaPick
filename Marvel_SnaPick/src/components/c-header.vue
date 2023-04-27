<template>
    <div class="c-header">
        <slot v-if="$slots.user" name="user"/>
        <img class="c-header__image" src="../assets/cards/logo.png" alt="Marvel SnaPick">
        <div class="c-header__button--container" v-if="$slots.buttonProfile">
            <slot name="buttonProfile"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CHeader',
}
</script>

<style>
.c-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    /* object-fit: contain; */
}
.c-header__image{
    /* object-position: 50% 50%; */
    height: 120px;
}
.c-header__image:only-child{
    margin: 0 auto;
}
.c-header__button--container{
    display: flex;
    justify-content: end;
    width: 150px;
}
</style>