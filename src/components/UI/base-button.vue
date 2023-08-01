<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'base-button',
}
</script>
<style scoped>
button {
    background-color: #5856d6;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    /* padding: 12px 24px; */
    /* padding: 0.375rem 0.75rem; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
    white-space: nowrap;
    line-height: 1.5;
    /* text-transform: uppercase; */
    padding: 0.65rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

button:hover {
    background-color: #4442a8;
}

button:active {
    background-color: #4442a8c3;
}
</style>