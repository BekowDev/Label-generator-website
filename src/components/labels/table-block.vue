<template>
    <table class="w-full text-center table-fixed">
        <thead class="font-medium whitespace-nowrap text-[16px] leading-4">
            <tr>
                <td class="w-[2%]"></td>
                <td class="px-2 w-[13%]">{{ $t('goodBarcode') }}</td>
                <td class="px-2 w-[15%]">{{ $t('sku') }}</td>
                <td class="px-2 w-[12%]">{{ $t('goodL') }}</td>
                <td class="px-2 w-[12%]">{{ $t('brandIP') }}</td>
                <td class="px-2 w-[8%]">{{ $t('size') }}</td>
                <td class="px-2 w-[24%]">{{ $t('color') }}</td>
                <td class="px-2 w-[7%]">
                    <div class="w-full flex gap-2 justify-center">
                        Дата
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApUlEQVR4nO3ZsQ3CMBSE4beE8b0rvP8aVAgUGlJkHJClFIgFuGfdN0FOfwpbjjAzeb33C8knyWsUH7GTfGfmPSoC0DLzNUeQPFpriGo8QoVLqHAJFS6hwiVUuIQK+AAoAi4hAiuUmEhu54h9XlejKq4yBD+/1hgjoyp4jCi4jCi4jCi4jCiXUeUyqlxGlcuoWqpM/3qeJvmIys4xW2be/v0tZqv6AICUr/VPeeNLAAAAAElFTkSuQmCC"
                             class="w-[14px]"
                             :style="$store.state.labelModule.getData.sortBy === 'addedDate' ? 'rotate: -90deg' : 'rotate: 90deg'">
                    </div>
                </td>
                <td class="px-2 w-[7%]"></td>
            </tr>
        </thead>
        <div class="bg-gray-300 h-[1px] left-0 right-0 top-[50px] absolute"></div>
        <tbody class="text-[14px] leading-3">
            <tr>
                <div class="h-4"></div>
            </tr>
            <tr v-for="label in allLabels"
                class="border-b-[1px]">
                <td class="h-[64px]">
                    <div class="flex items-center justify-center h-[24px]">
                        <input type="checkbox"
                               :checked="$store.state.labelModule.chosenLabels.find((obj) => obj._id === label._id)"
                               @change="$store.commit('setChosenLabels', { obj: label, checked: $event.target.checked })">
                    </div>
                </td>
                <td class="px-2">{{ !label.barcode ? "——————" : label.barcode }}</td>
                <td class="px-2">{{ !label.sku ? "——————" : label.sku }}</td>
                <td class="px-2">{{ !label.name ? "——————" : label.name }}</td>
                <td class="px-2">{{ !label.brand ? "——————" : label.brand }} <br> {{ !label.seller ? "——————" : label.seller }}</td>
                <td class="px-2">{{ !label.size ? "——————" : label.size }}</td>
                <td class="px-2">{{ !label.color ? "——————" : label.color }}</td>
                <td class="px-2">{{ !label.addedDate ? "——————" : label.addedDate.slice(0, label.addedDate.indexOf("T")) }}</td>
                <td class="px-2">
                    <div class="flex justify-between">
                        <button class="border-[1px] rounded-full p-[10px]"
                                @click="$store.commit('setChosenLabel', label), $store.commit('setDialogWrapper', true), $store.commit('setPrintActive')">
                            <svg fill="none"
                                 height="15"
                                 viewBox="0 0 14 14"
                                 width="15"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2301 1.84003C10.2434 1.03337 9.02343 0.500033 7.68343 0.366699V1.71337C8.65676 1.83337 9.54343 2.22003 10.2834 2.79337L11.2301 1.84003ZM12.3034 6.33337H13.6501C13.5168 4.99337 12.9834 3.77337 12.1768 2.7867L11.2234 3.73337C11.7968 4.47337 12.1834 5.36003 12.3034 6.33337ZM11.2234 10.2667L12.1768 11.22C12.9834 10.2334 13.5168 9.0067 13.6501 7.67337H12.3034C12.1834 8.64003 11.7968 9.5267 11.2234 10.2667ZM7.68343 12.2867V13.6334C9.02343 13.5 10.2434 12.9667 11.2301 12.16L10.2768 11.2067C9.54343 11.78 8.65676 12.1667 7.68343 12.2867ZM9.4101 6.06003L7.68343 7.78003V3.6667H6.3501V7.78003L4.62343 6.05337L3.68343 7.00003L7.01676 10.3334L10.3501 7.00003L9.4101 6.06003ZM6.3501 12.2867V13.6334C2.98343 13.3 0.350098 10.46 0.350098 7.00003C0.350098 3.54003 2.98343 0.700033 6.3501 0.366699V1.71337C3.71676 2.04003 1.68343 4.28003 1.68343 7.00003C1.68343 9.72003 3.71676 11.96 6.3501 12.2867Z"
                                      fill="#77767E"></path>
                            </svg>
                        </button>
                        <button class="border-[1px] rounded-full p-[10px]"
                                @dblclick="$store.dispatch('deleteLabel', label._id), $store.dispatch('getLabels')">
                            <svg fill="none"
                                 height="15"
                                 viewBox="-2 -1 24 24"
                                 width="15">
                                <path clip-rule="evenodd"
                                      d="M7 0H13C14.1046 0 15 0.89543 15 2V3H18C19.1046 3 20 3.89543 20 5V7C20 8.10457 19.1046 9 18 9H17.9199L17 20C17 21.1046 16.1046 22 15 22H5C3.89543 22 3 21.1046 3.00345 20.083L2.07987 9H2C0.89543 9 0 8.10457 0 7V5C0 3.89543 0.89543 3 2 3H5V2C5 0.89543 5.89543 0 7 0ZM2 5H5H15H18V7H2V5ZM4.08649 9H15.9132L15.0035 19.917L15 20H5L4.08649 9ZM13 2V3H7V2H13Z"
                                      fill="#f96666"
                                      fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(["allLabels"]),
    created() {
        this.$store.dispatch('getLabels');
    }
}

</script>
<style scoped>
td {
    overflow: hidden;
}
input[type="checkbox"] {
    cursor: pointer;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>