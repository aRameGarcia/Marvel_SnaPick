<template>
    <div class="c-text-field">
        <input class="c-text-field__input" :id="id" :placeholder="placeholder" :type="type" :value="value"
            @input="$emit('update', value)">
    </div>
</template>

<script>
export default {
    name: 'CTextField',
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            default: '',
        }
    },
    emits: ['update'],
}
</script>

<style lang="scss">
</style>