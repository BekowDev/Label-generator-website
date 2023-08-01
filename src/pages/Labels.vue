<template>
    <div class="flex gap-3 flex-col">
        <header-buttons />
        <div class="w-full min-h-[625px] bg-white p-5 flex flex-col gap-3 rounded-[10px] relative">
            <table-block />
            <page-buttons />
        </div>
    </div>
    <label-block v-if="$store.state.labelModule.printActive" />
    <menu-block v-show="$store.state.labelModule.menuActive" />
</template>
<script>
import headerButtons from '@/components/labels/header-buttons'
import tableBlock from '@/components/labels/table-block'
import pageButtons from "@/components/labels/page-buttons"
import menuBlock from '@/components/labels/menu-block'
import labelBlock from '@/components/labels/label-block'
export default {
    components: {
        tableBlock,
        pageButtons,
        headerButtons,
        menuBlock,
        labelBlock
    }
}
</script>




