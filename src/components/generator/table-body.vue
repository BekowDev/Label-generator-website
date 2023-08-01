<template>
    <tbody>
        <TransitionGroup
            name="tr-table"
            class="tr-container"
        >
            <tr
                v-for="(row, index) in allRows"
                :key="row._id"
            >
                <td class="font-medium text-center">
                    {{ index + 1 }}
                </td>
                <td>
                    <base-input
                        type="text"
                        placeholder="Штрихкод"
                        :value="row.barcode"
                        required
                        @input="$store.commit('setBarcode', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.sku">
                    <base-input
                        type="text"
                        placeholder="Артикул"
                        :value="row.sku"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.sku"
                        @input="$store.commit('setSku', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.color">
                    <base-input
                        type="text"
                        :placeholder="$t('color')"
                        :value="row.color"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.color"
                        @input="$store.commit('setColor', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.size">
                    <base-input
                        type="text"
                        :placeholder="$t('size')"
                        :value="row.size"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.size"
                        @input="$store.commit('setSize', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.name">
                    <base-input
                        type="text"
                        :placeholder="$t('good')"
                        :value="row.name"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.name"
                        @input="$store.commit('setName', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.seller">
                    <base-input
                        type="text"
                        :placeholder="$t('IP')"
                        :value="row.seller"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.seller"
                        @input="$store.commit('setSeller', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.date">
                    <base-input
                        type="text"
                        :placeholder="$t('date')"
                        :value="row.date"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.date"
                        @input="$store.commit('setDate', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.country">
                    <base-input
                        type="text"
                        :placeholder="$t('country')"
                        :value="row.country"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.country"
                        @input="$store.commit('setCountry', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.brand">
                    <base-input
                        type="text"
                        placeholder="Бренд"
                        :value="row.brand"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.brand"
                        @input="$store.commit('setBrand', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.composition">
                    <base-input
                        type="text"
                        :placeholder="$t('composition')"
                        :value="row.composition"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.composition"
                        @input="$store.commit('setComposition', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td v-show="$store.state.generatorModule.colVisible.freeTitle">
                    <base-input
                        type="text"
                        :placeholder="$t('freeTitle')"
                        :value="row.freeTitle"
                        :disabled="$store.state.generatorModule.sameValueCheckbox.freeTitle"
                        @input="$store.commit('setFreeTitle', { id: row._id, value: $event.target.value })"
                    />
                </td>
                <td>
                    <v-delete @click="$store.commit('deleteRow', row._id)" />
                </td>
            </tr>
        </TransitionGroup>
    </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(["allRows"]),
}
</script>

<style scoped>
tbody {
    position: relative;
    overflow: hidden;
}

.tr-container {
    position: relative;
    padding: 0;
}

tr {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
}

.tr-table-move,
.tr-table-enter-active,
.tr-table-leave-active {
    transition: all var(--animation-speed) cubic-bezier(0.55, 0, 0.1, 1);
}

.tr-table-enter-from {
    opacity: 0;
    transform: translate(-165px, 0);
}

.tr-table-leave-to {
    opacity: 0;
    transform: translate(-165px, 0);
}

.tr-table-leave-active {
    position: absolute;
}</style>