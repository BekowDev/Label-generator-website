<template>
    <Transition>
        <div class="dialog-wrapper"
             v-if="$store.state.generatorModule.dialogVisibleColumnSettings"
             @click.stop="$store.commit('showColumnSettingsDialog', false)">
            <div class="dialog-body relative overflow-visible"
                 @click.stop>
                <button class="absolute p-1 w-[36px] top-[15px] right-[15px] cursor-pointer bg-[#d9534f] rounded-[100%]"
                        @click="$store.commit('showColumnSettingsDialog', false)">
                    <img src="@/assets/icons/close.svg">
                </button>
                <h2 class="text-[36px] text-center mb-3"> {{ $t('settingsButtonG') }}
                </h2>
                <div class="border-b-[2px] border-solid border-[rgb(224, 223, 239)]">
                    <div class="h-[5px]"></div>
                </div>
                <div class="text-center mb-8"> {{ $t('subT') }} </div>
                <div class="flex flex-col gap-2 mb-8">
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.sku"
                               @change="$store.commit('setSkuVisible', $event.target.checked)">
                        <div>Артикул</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.size"
                               @change="$store.commit('setSizeVisible', $event.target.checked)">
                        <div>{{ $t('size') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.color"
                               @change="$store.commit('setColorVisible', $event.target.checked)">
                        <div>{{ $t('color') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.seller"
                               @change="$store.commit('setSellerVisible', $event.target.checked)">
                        <div>{{ $t('IP') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.date"
                               @change="$store.commit('setDateVisible', $event.target.checked)">
                        <div>{{ $t('date') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.country"
                               @change="$store.commit('setCountryVisible', $event.target.checked)">
                        <div>{{ $t('country') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.brand"
                               @change="$store.commit('setBrandVisible', $event.target.checked)">
                        <div>Бренд</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.composition"
                               @change="$store.commit('setCompositionVisible', $event.target.checked)">
                        <div>{{ $t('composition') }}</div>
                    </div>
                    <div class="flex gap-3 items-center">
                        <input type="checkbox"
                               :checked="$store.state.generatorModule.colVisible.freeTitle"
                               @change="$store.commit('setFreeTitleVisible', $event.target.checked)">
                        <div>{{ $t('freeTitle') }}</div>
                    </div>
                </div>

                <div class="h-14">
                    <v-warning>
                        {{ $t('warningGL') }}
                    </v-warning>
                </div>

            </div>
        </div>
    </Transition>
</template>
<script>

export default {

}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.dialog-wrapper {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
}

.dialog-body {
    background: #fff;
    border-radius: 20px;
    width: 550px;
    overflow-y: auto;
    padding: 25px 40px;
}
</style>