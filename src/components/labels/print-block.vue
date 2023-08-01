<template>
    <div class="flex flex-col gap-5">
        <div class="flex gap-3 justify-between whitespace-nowrap">
            <div class="flex flex-col gap-2 items-center">
                <label>{{ $t('format') }}</label>
                <div class="flex border-[1px] border-[#5856d6] rounded-full overflow-hidden">
                    <button class="px-[20px] py-[9px]"
                            @click="$store.commit('setFormat', 'CODE128')"
                            style="transition: all 0.3s;"
                            :style="$store.state.labelModule.barcodeOptions.format == 'CODE128' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false">
                        CODE-128
                    </button>
                    <button class="px-[20px] py-[9px]"
                            @click="$store.commit('setFormat', 'EAN13')"
                            style="transition: all 0.3s;"
                            :style="$store.state.labelModule.barcodeOptions.format == 'EAN13' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false"
                            :disabled="$store.state.labelModule.chosenLabel.barcode.length !== 12">
                        EAN-13
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-2 items-center w-[70px]">
                <label>
                    Текст
                </label>
                <select :value="$store.state.labelModule.barcodeOptions.fontSize"
                        @change="$store.commit('setFontSize', $event.target.value)">
                    <option value="5">5px</option>
                    <option value="6">6px</option>
                    <option value="7">7px</option>
                    <option value="8">8px</option>
                    <option value="9">9px</option>
                    <option value="10">10px</option>
                    <option value="11">11px</option>
                    <option value="12">12px</option>
                    <option value="13">13px</option>
                    <option value="14">14px</option>
                    <option value="15">15px</option>
                    <option value="16">16px</option>
                    <option value="17">17px</option>
                    <option value="18">18px</option>
                </select>
            </div>
        </div>

        <div class="flex flex-col gap-1 text-[12px]">
            <div class="flex w-full items-center gap-2">

                <input type="checkbox"
                       :checked="$store.state.labelModule.printSettings.colorSizeSameLine"
                       @change="$store.commit('setColorSizeSameLine', $event.target.checked)">

                <label>
                    {{ $t('colorSizeSameLine') }}
                </label>
            </div>
            <div class="flex w-full items-center gap-2">
                <input type="checkbox"
                       :checked="$store.state.labelModule.printSettings.eac"
                       @change="$store.commit('setEac', $event.target.checked)">
                <label>
                    {{ $t('eac') }}
                </label>
            </div>
            <div class="flex w-full items-center gap-2">
                <input type="checkbox"
                       :checked="$store.state.labelModule.printSettings.noCertificate"
                       @change="$store.commit('setNoCertificate', $event.target.checked)">
                <label>
                    {{ $t('noCert') }}
                </label>
            </div>
            <div class="flex flex-wrap w-full items-center gap-1">

                <div class="flex gap-2">
                    <input type="checkbox"
                           :checked="$store.state.labelModule.printSettings.centered"
                           @change="$store.commit('setCentered', $event.target.checked)">

                    <label>
                        {{ $t('centered') }}
                    </label>
                </div>

                <div class="flex gap-2">
                    <input type="checkbox"
                           :checked="$store.state.labelModule.printSettings.YCentered"
                           @change="$store.commit('setYCentered', $event.target.checked)">

                    <label>
                        {{ $t('centeredY') }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
select {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 4px 15px;
    font-size: 16px;
    border: 1px solid #5856d6;
    border-radius: 9999px;
    appearance: none;
}
select:hover {
    border-color: #999;
    box-shadow: 0 0 5px #337ab7;
}
input[type="checkbox"] {
    cursor: pointer;
    padding: 0;
    margin: 0;
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
}
</style>