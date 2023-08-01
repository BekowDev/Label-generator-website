<template>
    <div class="flex gap-3 items-center justify-between font-medium text-[#4e4e53] px-5">
        <div class="flex gap-[24px]">
            <base-button @click="$store.commit('clearChosenLabels'), $router.push('/generator'), $store.commit('setSortBy', 'addedDate')">
                <svg fill="#FFFFFF"
                     viewBox="0 0 30 30"
                     class="rotate-45 w-[16px]">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                </svg>
                {{ $t('create') }}
            </base-button>
            <button class="flex items-center gap-2"
                    @click="$store.commit('editLabels', $store.state.labelModule.chosenLabels), $router.push('/generator'), $store.commit('clearChosenLabels')"
                    :disabled="$store.state.labelModule.chosenLabels.length === 0 ? true : false">
                <svg fill="none"
                     height="16"
                     viewBox="-2 -2 24 24"
                     width="16">
                    <path clip-rule="evenodd"
                          d="M14.4374 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20.0001 4.91217 20.0001 5.56508C20.0001 6.21799 19.7407 6.84416 19.279 7.30584L7.95751 18.6238C7.25902 19.4295 6.2689 19.9245 5.1346 20.0023H0V19.0023L0.00324765 14.7873C0.0884382 13.7328 0.578667 12.7523 1.3265 12.0934L12.6954 0.724628C13.1564 0.26083 13.7834 0 14.4374 0ZM5.06398 18.0048C5.59821 17.967 6.09549 17.7184 6.49479 17.2616L14.0567 9.69972L10.3023 5.94519L2.6961 13.5496C2.29095 13.9079 2.04031 14.4092 2 14.8678V18.0029L5.06398 18.0048ZM11.7167 4.53115L15.4709 8.2855L17.8648 5.89162C17.9514 5.80502 18.0001 5.68756 18.0001 5.56508C18.0001 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4374 2C14.3158 2 14.1992 2.04855 14.1136 2.13486L11.7167 4.53115Z"
                          fill="#4e4e53"
                          fill-rule="evenodd"></path>
                </svg>
                {{ $t('edit') }}
            </button>
            <button class="flex items-center gap-2"
                    :disabled="$store.state.labelModule.chosenLabels.length === 0 ? true : false"
                    @click="$store.dispatch('deleteLabels'), $store.dispatch('getLabels'), $store.commit('clearChosenLabels')">
                <svg fill="none"
                     height="16"
                     viewBox="-2 -1 24 24"
                     width="16">
                    <path clip-rule="evenodd"
                          d="M7 0H13C14.1046 0 15 0.89543 15 2V3H18C19.1046 3 20 3.89543 20 5V7C20 8.10457 19.1046 9 18 9H17.9199L17 20C17 21.1046 16.1046 22 15 22H5C3.89543 22 3 21.1046 3.00345 20.083L2.07987 9H2C0.89543 9 0 8.10457 0 7V5C0 3.89543 0.89543 3 2 3H5V2C5 0.89543 5.89543 0 7 0ZM2 5H5H15H18V7H2V5ZM4.08649 9H15.9132L15.0035 19.917L15 20H5L4.08649 9ZM13 2V3H7V2H13Z"
                          fill="#4e4e53"
                          fill-rule="evenodd"></path>
                </svg>
                {{ $t('delete') }}
            </button>
        </div>
        <div class="flex items-center gap-[24px]"
             @click.stop>
            <div class="relative">
                <button class="flex items-center gap-2"
                        @click="$store.commit('setDialogWrapper', true), $store.commit('setSortDialog')">
                    <svg fill="none"
                         height="16"
                         viewBox="0 0 16 16"
                         width="16">
                        <path d="M6.66667 12H9.33333V10.6667H6.66667V12ZM2 4V5.33333H14V4H2ZM4 8.66667H12V7.33333H4V8.66667Z"
                              fill="#77767E"></path>
                    </svg>
                    {{ $t('sort') }}
                </button>

                <div class="w-fit absolute bg-white p-5 top-[160%] rounded-[10px] left-[-100%] z-30 flex flex-col items-center gap-2 whitespace-nowrap"
                     v-show="$store.state.labelModule.sortActive">
                    <div class="flex border-[1px] border-[#5856d6] rounded-full overflow-hidden">
                        <button class="px-[15px]"
                                @click="$store.commit('setSortOrder', 'desc'), $store.dispatch('getLabels')"
                                style="transition: all 0.3s;"
                                :style="$store.state.labelModule.getData.sortOrder == 'desc' ? {
                                    'background': '#5856d6',
                                    'color': '#FFFFFF',
                                } : false">
                            {{ $t('sortDnUp') }}

                        </button>
                        <button class="px-[15px] py-[2px]"
                                @click="$store.commit('setSortOrder', 'asc'), $store.dispatch('getLabels')"
                                style="transition: all 0.3s;"
                                :style="$store.state.labelModule.getData.sortOrder == 'asc' ? {
                                    'background': '#5856d6',
                                    'color': '#FFFFFF',
                                } : false">
                            {{ $t('sortUpDn') }}
                        </button>
                    </div>
                    <div>
                        <select @change="$store.commit('setSortBy', $event.target.value), $store.dispatch('getLabels')"
                                :value="$store.state.labelModule.getData.sortBy">
                            <option value="barcode"> {{ $t('sortBarcode') }}</option>
                            <option value="addedDate"> {{ $t('sortDate') }}</option>
                            <option value="sku"> {{ $t('sortSku') }}</option>
                            <option value="color"> {{ $t('sortColor') }}</option>
                            <option value="size"> {{ $t('sortSize') }}</option>
                            <option value="name"> {{ $t('sortGood') }}</option>
                            <option value="seller"> {{ $t('sortIP') }}</option>
                            <option value="brand"> {{ $t('sortBrand') }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="w-[400px] flex relative rounded-[10px] overflow-hidden">
                <input :placeholder="$t('searchPlaceholder')"
                       class="w-full pl-5 pr-16 py-[12px] text-[14px]"
                       @input="$store.commit('setSearch', $event.target.value), $store.commit('setPage', { numbers: true, value: '1' }), $store.dispatch('getLabels')" />
                <button class="absolute right-0 px-4 self-center h-full"
                        @click="$store.dispatch('getLabels')">
                    <svg fill="none"
                         height="24"
                         viewBox="-2 -1 24 24"
                         width="24">
                        <path clip-rule="evenodd"
                              d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                              fill="#4e4e53"
                              fill-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <button class="menu__icon"
                    :class="$store.state.labelModule.menuActive ? '_active' : ''"
                    @click="$store.commit('setDialogWrapper', true), $store.commit('setMenuActive')">
                <span :class="$store.state.labelModule.menuActive ? '_active' : ''"></span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showSortDialog: false,
        }
    },
    methods: {
        toggleSort(value) {
            this.showSortDialog = !value
        },
    }
}
</script>
<style scoped>
select {

    width: 100%;
    padding: 4px 15px;
    font-size: 16px;
    border: 1px solid #5856d6;
    border-radius: 9999px;
}
select:hover {
    border-color: #999;
    box-shadow: 0 0 5px #337ab7;
}
.menu__icon {
    z-index: 20;
    position: relative;
    width: 30px;
    height: 20px;
}
.menu__icon::before,
.menu__icon::after,
.menu__icon span {
    position: absolute;
    left: 0;
    height: 12%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background: #77767E;
}
.menu__icon::before,
.menu__icon::after {
    content: '';
}
.menu__icon::before {
    top: 0;
}
.menu__icon::after {
    bottom: 0;
}
.menu__icon span {
    top: 41%;
    transform: translate(0px, 50%);
}

.menu__icon._active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
}
.menu__icon._active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
}
.menu__icon span._active {
    transform: scale(0);
}
</style>