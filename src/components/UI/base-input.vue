<template>
    <input
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateInput"
    />
</template> 
<script>
export default {
    name: "base-input",
    props: {
        modelValue: [String, Number],
        placeholder: String,
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        },
    },
}
</script>
<style scoped>
input {
    background: var(--fields-color);
    border-radius: 10px;
    color: #20196c;
    font-size: 14px;
    height: 40px;
    max-width: 100%;
    padding: 20px 15px;
    width: 100%;
    transition: all 0.3s;
}
</style>
