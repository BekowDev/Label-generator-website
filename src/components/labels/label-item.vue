<template>
    <div class="label"
         :style="`font-size: ${$store.state.labelModule.barcodeOptions.fontSize}px; width: ${$store.state.labelModule.labelOptions.width}mm; height: ${$store.state.labelModule.labelOptions.height}.9mm; justify-content: ${$store.state.labelModule.printSettings.YCentered == true ? 'center' : 'start'};`">
        <div class="flex flex-col justify-center">
            <div class="flex flex-col items-center ">
                <div :style="!$store.state.labelModule.printing ? 'margin-bottom: 0' : ($store.state.labelModule.barcodeOptions.fontSize < 10 ? 'margin-bottom: -3px' : 'margin-bottom: -7px')">
                    <v-barcode :barcode="label.barcode" />
                </div>
                <span>{{ label.seller }}</span>
            </div>
            <div class="flex justify-between h-fit">
                <div class="flex-1 flex flex-col justify-center"
                     :style="$store.state.labelModule.printSettings.centered ? 'align-items: center;  text-align: center;' : null">
                    <div>{{ label.name }}</div>
                    <div v-if="label.sku != ''">Артикул: {{ label.sku }}</div>
                    <div>
                        <p v-if="$store.state.labelModule.printSettings.colorSizeSameLine != true">
                        <div v-if="label.color != ''">Цвет: {{ label.color }}</div>
                        <div v-if="label.size != ''">Разм.: {{ label.size }}</div>
                        </p>
                        <p v-else
                           :style="$store.state.labelModule.printSettings.centered ? 'align-items: center;  text-align: center;' : null">
                            <span v-if="label.color != ''">Цвет: {{ label.color }}</span>
                            <span v-if="label.size != ''"> / Разм.: {{ label.size }}</span>
                        </p>
                    </div>
                    <div v-if="label.date">Срок годности: {{ label.date }}</div>
                    <div v-if="label.country">Страна: {{ label.country }}</div>
                    <div v-if="label.brand">Бренд: {{ label.brand }}</div>
                    <div v-if="label.composition">Состав: {{ label.composition }}</div>
                    <div v-if="label.freeTitle">Состав: {{ label.freeTitle }}</div>
                </div>
                <div class="flex flex-col justify-center"
                     :style="$store.state.labelModule.printSettings.centered ? 'align-items: center;  text-align: center;' : null">
                    <div v-if="$store.state.labelModule.printSettings.eac == true"
                         class="w-[18px]">
                        <svg viewBox="0 0 500 500"
                             class="block overflow-hidden w-full">

                            <path fill-rule="evenodd"
                                  fill="#161413"
                                  d="m221.96 59.31v54.36 54.38 54.36h54.37v-54.36-54.38-54.36h-54.37zm-54.37-54.372h54.37 54.37 54.36v54.372 54.36 54.38 54.36 54.36 54.37 54.37 54.36 54.37h-54.36v-54.37-54.36-54.37-54.37h-54.37v54.37 54.37 54.36 54.37h-54.37v-54.37-54.36-54.37-54.37-54.36-54.36-54.38-54.36-54.372zm-163.1 0h54.372 54.362v54.372h-54.361v54.36 54.38 54.36h54.361v54.36h-54.361v54.37 54.37 54.36h54.361v54.37h-54.361-54.372l-0.0005-54.37v-54.36-54.37-54.37-54.36-54.36-54.38-54.36-54.372zm380.57 0h54.37 54.37v54.372h-54.37v54.36 54.38 54.36 54.36 54.37 54.37 54.36h54.37v54.37h-54.37-54.37v-54.37-54.36-54.37-54.37-54.36-54.36-54.38-54.36-54.372z"
                                  label="Layer 1" />

                        </svg>
                    </div>
                </div>
            </div>
            <div v-if="$store.state.labelModule.printSettings.noCertificate == true"
                 :style="$store.state.labelModule.printSettings.centered ? 'align-items: center;  text-align: center;' : null">Товар не подлежит обязательной сертификации</div>
        </div>

    </div>
</template>
<script>

export default {
    props: {
        label: {
            required: true,
            type: Object
        }
    },

}
</script>
<style scoped>
.label {
    width: 58mm;
    height: 40mm;
    background: white;
    padding: 5px 10px 5px 10px;
    /* padding: 10px 10px 5px 10px; OLD */

    font-weight: 400;
    line-height: 1;
    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    flex-direction: column;
}
</style>