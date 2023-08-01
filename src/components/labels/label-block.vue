<template>
    <div class="absolute top-0 left-0 bottom-0 right-0 flex gap-5 items-center justify-center">
        <div class="bg-white p-5 rounded-[10px] gap-5 flex flex-col z-40 items-center">
            <div class="h-[35px]">
                <v-warning>
                    {{ $t('warningGL') }}
                </v-warning>
            </div>
            <div class="w-fit flex gap-5">
                <div class="flex-1 flex justify-center items-center flex-col relative gap-3">
                    <div class="flex-1">
                        <div class="border-[1px] border-gray-400 rounded-[10px] overflow-hidden">
                            <label-item :label="$store.state.labelModule.chosenLabel"
                                        :id="$store.state.labelModule.chosenLabel._id" />
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div class="flex border-[1px] text-white bg-[#5856d6] pl-2 rounded-[10px] overflow-hidden gap-1">
                            X:
                            <input type="number"
                                   :value="$store.state.labelModule.labelOptions.width"
                                   @input="$store.commit('setLabelWidth', $event.target.value)"
                                   max="99"
                                   min="1">
                        </div>
                        <div class="flex border-[1px] text-white bg-[#5856d6] pl-2 rounded-[10px] overflow-hidden gap-1">
                            Y:
                            <input type="number"
                                   :value="$store.state.labelModule.labelOptions.height"
                                   @input="$store.commit('setLabelHeight', $event.target.value)"
                                   max="46"
                                   min="1">
                        </div>
                    </div>
                </div>
                <div class="w-[300px] text-[14px] flex flex-col gap-3">
                    <print-block />
                    <base-button class="w-full mt-auto"
                                 style="padding: 0; height: 35px;"
                                 @click="downloadLabel($store.state.labelModule.chosenLabel._id, $store.state.labelModule.chosenLabel.sku)">
                        {{ $t('download') }}
                    </base-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import labelItem from './label-item.vue';
import printBlock from './print-block.vue';
import html2pdf from 'html2pdf.js';
export default {
    components: {
        labelItem, printBlock
    },

    computed: mapGetters(["allLabels"]),
    methods: {
        downloadLabel(id, sku) {
            const element = document.getElementById(id);
            const pdfOptions = {
                filename: sku || 'l',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 9 },
                jsPDF: { unit: 'mm', format: [this.$store.state.labelModule.labelOptions.width, this.$store.state.labelModule.labelOptions.height + 2], orientation: 'l' }
            }
            const setLL = () => new Promise((resolve, reject) => {
                this.$store.commit('setPrinting')
                resolve();
            });

            setLL()
                .then(() => {
                    html2pdf().set(pdfOptions).from(element).save();
                    this.$store.commit('setPrinting');
                })
                .catch(error => console.error(error))
        }
    }
}
</script>
<style scoped>
input[type="number"] {
    width: 45px;
    color: white;
    padding: 0 0 0 5px;
    background: #5856d6;
}
</style>
  