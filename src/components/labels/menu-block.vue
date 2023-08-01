<template>
    <div class="dialog-body flex flex-col gap-3">
        <div class="flex flex-col gap-2 bg-white rounded-[10px] p-5 menu__item">
            <div class="flex flex-1 gap-2 items-center justify-between">
                <label>{{ $t('theme') }}:</label>
                <div class="flex border-[1px] border-[#5856d6] rounded-full overflow-hidden">
                    <button class="px-[15px]"
                            @click="$store.commit('setTheme', 'light')"
                            style="transition: all 0.3s;"
                            :style="$store.state.theme == 'light' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false">
                        {{ $t('light') }}
                    </button>
                    <button class="px-[15px] py-[2px]"
                            @click="$store.commit('setTheme', 'dark')"
                            style="transition: all 0.3s;"
                            :style="$store.state.theme == 'dark' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false">
                        {{ $t('dark') }}
                    </button>
                </div>
            </div>
            <div class="flex flex-1 gap-2 items-center justify-between">
                <label>{{ $t('lang') }}:</label>
                <div class="flex border-[1px] border-[#5856d6] rounded-full overflow-hidden">
                    <button class="px-[15px]"
                            @click="$store.commit('setLanguage', 'ru')"
                            style="transition: all 0.3s;"
                            :style="$store.state.language == 'ru' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false">
                        {{ $t('rus') }}
                    </button>
                    <button class="px-[15px] py-[2px]"
                            @click="$store.commit('setLanguage', 'kz')"
                            style="transition: all 0.3s;"
                            :style="$store.state.language == 'kz' ? {
                                'background': '#5856d6',
                                'color': '#FFFFFF',
                            } : false">
                        {{ $t('kaz') }}
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 bg-white rounded-[10px] p-5 menu__item">
            <div class="flex gap-2 flex-col">
                <div class="flex gap-2">
                    <div class="font-medium">{{ $t('userL') }}:</div>
                    <button class="underline flex items-center text-[#5856d6]"
                            @click="showChangeUsername(changeUsername)">
                        <svg fill="#5856d6"
                             viewBox="0 0 24 24"
                             width="20px">
                            <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z" />
                        </svg>
                        {{ $store.state.authModule.username }}
                    </button>
                </div>
                <div class="flex gap-1"
                     v-show="changeUsername">
                    <base-input :placeholder="$t('newName')"
                                style="font-size: 12px; padding: 0 12px; min-height: 100%;"
                                v-model="username" />
                    <button @click="updateUsername"
                            class="text-[14px] bg-[#5856d6] text-white px-3 rounded-[10px]">{{ $t('saveL') }}</button>
                </div>
            </div>
            <div class="text-center">
                <button class="underline flex items-center text-[#FE805D]"
                        @dblclick="deleteUser">
                    {{ $t('deleteAccount') }}
                </button>
            </div>
            <auth-button @dblclick="$store.commit('exitAccount')">
                {{ $t('leaveAccount') }}
            </auth-button>
        </div>
    </div>
</template>
<script>

import printBlock from './print-block'
export default {
    components: { printBlock },
    data() {
        return {
            changeUsername: false,
            changePassword: false,

            username: "",
            oldPassword: "",
            password: ""
        }
    },
    methods: {
        showChangeUsername(value) {
            if (this.changeUsername)
                this.username = ''

            this.changeUsername = !value
        },
        showChangePassword(value) {
            if (this.changePassword) {
                this.password = ''
                this.oldPassword = ""
            }

            this.changePassword = !value
        },

        updateUsername() {
            this.$store.dispatch('updateUsername', this.username)
        },
        updatePassword() {
            this.$store.dispatch('updatePassword', { oldPassword: this.oldPassword, newPassword: this.password })
        },
        deleteUser() {
            let confirm = prompt("Напишите 'Удалить' для подтверждения")
            confirm === 'Удалить' ? this.$store.dispatch('deleteUser') : false
        },
    }
}
</script>
<style scoped>
.dialog-body {
    width: 320px;
    z-index: 30;
    position: absolute;
    top: 12%;
    right: 2%;
}
</style>