<template>
    <h1 class="text-4xl font-medium uppercase flex whitespace-nowrap items-center gap-2 pb-0 px-5 pt-6 italic ">
        <slot></slot>
        <div class="w-full h-[1px] bg-black"></div>
    </h1>
</template>
<script>
export default {
    name: "base-title",
}
</script>