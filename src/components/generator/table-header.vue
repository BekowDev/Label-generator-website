<template>
    <thead>
        <tr class="text-center text-[16px] font-medium">
            <td class="w-[25px]">№</td>
            <td class="font-bold min-w-[165px]">Штрихкод*</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.sku">Артикул</td>

            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.color">{{ $t('color') }}</td>
            <td class="  min-w-[165px] w-[165px]"
                v-show="$store.state.generatorModule.colVisible.size">{{ $t('size') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.name">{{ $t('good') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.seller">{{ $t('IP') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.date">{{ $t('date') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.country">{{ $t('country') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.brand">Бренд</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.composition">{{ $t('composition') }}</td>
            <td class="  min-w-[225px]"
                v-show="$store.state.generatorModule.colVisible.freeTitle">{{ $t('freeTitle') }}</td>
            <td class="w-[35px]"></td>
        </tr>
        <tr class="mb-2 text-[12px] align-top text-left">
            <td></td>
            <td></td>
            <td v-show="$store.state.generatorModule.colVisible.sku">
                <div class="flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.sku"
                           @change="$store.commit('activeSameValue', { name: 'sku', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            placeholder='Артикул'
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.sku"
                            @input="$store.commit('setSameSku', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.color">
                <div class="flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.color"
                           @change="$store.commit('activeSameValue', { name: 'color', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('color')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.color"
                            @input="$store.commit('setSameColor', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.size"
                class="">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.size"
                           @change="$store.commit('activeSameValue', { name: 'size', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('size')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.size"
                            @input="$store.commit('setSameSize', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.name">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.name"
                           @change="$store.commit('activeSameValue', { name: 'name', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('good')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.name"
                            @input="$store.commit('setSameName', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.seller">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.seller"
                           @change="$store.commit('activeSameValue', { name: 'seller', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('IP')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.seller"
                            @input="$store.commit('setSameSeller', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.date">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.date"
                           @change="$store.commit('activeSameValue', { name: 'date', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('date')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.date"
                            @input="$store.commit('setSameDate', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.country">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.country"
                           @change="$store.commit('activeSameValue', { name: 'country', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('country')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.country"
                            @input="$store.commit('setSameCountry', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.brand">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.brand"
                           @change="$store.commit('activeSameValue', { name: 'brand', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            placeholder='Бренд'
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.brand"
                            @input="$store.commit('setSameBrand', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.composition">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.composition"
                           @change="$store.commit('activeSameValue', { name: 'composition', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('composition')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.composition"
                            @input="$store.commit('setSameComposition', $event.target.value)" />
            </td>
            <td v-show="$store.state.generatorModule.colVisible.freeTitle">
                <div class=" flex items-center gap-3">
                    <input type="checkbox"
                           :checked="$store.state.generatorModule.sameValueCheckbox.freeTitle"
                           @change="$store.commit('activeSameValue', { name: 'freeTitle', value: $event.target.checked })">
                    <div>
                        {{ $t('checkboxG1') }} <br> {{ $t('checkboxG2') }}
                    </div>
                </div>
                <base-input type="text"
                            :placeholder="$t('freeTitle')"
                            :disabled="!$store.state.generatorModule.sameValueCheckbox.freeTitle"
                            @input="$store.commit('setSameFreeTitle', $event.target.value)" />
            </td>
            <td></td>
        </tr>
        <tr class="relative">
            <td>
                <div class="h-[5px]"></div>
                <div class="bg-gray-300 h-[1px] absolute left-0 right-0 rounded-[20px]"></div>
                <div class="h-[6px]"></div>
            </td>
        </tr>
    </thead>
</template>
<script>
export default {}
</script>
