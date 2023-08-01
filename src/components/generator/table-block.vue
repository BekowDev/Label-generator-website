<template>
    <div class="w-full h-[625px] bg-white p-5 rounded-[10px] flex flex-col gap-5 relative">
        <div class="h-[40px]">
            <v-warning>
                {{ $t('warningG') }}
            </v-warning>
        </div>
        <div class="w-full flex flex-col gap-4">
            <div class="w-full h-[520px] overflow-x-scroll overflow-y-scroll pr-1">
                <table cellpadding="3"
                       class="w-full">
                    <table-header />
                    <table-body />
                </table>
            </div>
            <table-field />
        </div>
    </div>
</template>
<script>
import tableField from './table-field.vue'
import tableBlock from './table-block.vue'
import tableHeader from './table-header.vue'
import tableBody from './table-body.vue'
export default {
    components: { tableBlock, tableField, tableHeader, tableBody, },
}
</script>
