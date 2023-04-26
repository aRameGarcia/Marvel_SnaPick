<template>
    <div class="c-header">
        <slot v-if="$slots.user" name="user"/>
        <img class="c-header--image" src="../assets/cards/logo.png" alt="Marvel SnaPick">
        <div class="c-header--container--user">
            <slot v-if="$slots.buttonProfile" name="buttonProfile"/>
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
}
.c-header--image{
    height: 120px;
}
/* .c-header--image:first-child{
    margin: 0 auto;
} */
.c-header--container--user{
    display: flex;
    justify-content: end;
    width: 150px;
}
</style>