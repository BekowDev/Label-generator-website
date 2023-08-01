<template>
    <button :class="{
        'login-button': isLoginButton
    }">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'auth-button',
    props: {
        isLoginButton: Boolean
    }
}
</script>
<style scoped>
button {
    color: #5856d6;
    border: 1px solid #5856d6;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px 24px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    font-weight: 500;
    white-space: nowrap;
    line-height: 1.5;
    text-transform: uppercase;
}

button:hover {
    background-color: #ffffff;
    color: #5856d6;
    border: 1px solid transparent;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

button:active {
    background-color: #4442a8c3;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    color: white;
}
.login-button {
    color: white;
    border: 1px solid transparent;
    background-color: #5856d6;
}
</style>