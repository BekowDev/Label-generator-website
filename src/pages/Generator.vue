<template>
    <div class="flex flex-col gap-3">
        <table-buttons />
        <table-block />
    </div>
</template>
<script>
import tableBlock from "@/components/generator/table-block.vue"
import tableButtons from '@/components/generator/table-buttons.vue'
import printBlock from "@/components/labels/print-block.vue";
export default {
    components: { tableBlock, tableButtons, printBlock },
}
</script>