<template>
    <div class="c-text-field">
        <input class="c-text-field__input" :id="id" :placeholder="placeholder" :type="type"
            @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script>
export default {
    name: 'CTextField',

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
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
}
</script>

<style lang="scss">
.c-text-field{
  background-color: var(--color-input);
  color: var(--color-font);
  border-radius: 10px;
  width: 100%;
  height: 2em;
  padding: 5px;
}
.c-text-field__input{
  background-color: transparent;
  color: var(--color-font);
  border: none;
  width: 100%;
  height: 100%;
}
::placeholder{
    color:var(--color-font);
}
</style>