<template>
    <header class="h-20 flex items-center justify-between">
        <h1 class="text-4xl font-bold cursor-pointer"
            @click="$router.push('/')">
            WildCoder
        </h1>

        <div class="flex flex-col gap-2 text-[12px]">
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

    </header>
    <main class="text-[16px] flex gap-10 justify-between items-center">
        <div class="w-[40%]">
            <h1 class="text-[46px] leading-[56px] mb-[20px]">
                {{ $t('landingH') }}
            </h1>
            <div class="flex flex-col gap-4">
                <p>
                    {{ $t('landingSubT1') }}
                </p>
                <p>
                    {{ $t('landingSubT2') }}
                </p>
                <div>
                    <p>{{ $t('landingFormat') }}</p>
                    <ul>
                        <li class="ml-8 li">{{ $t('landingCode13') }}</li>
                        <li class="ml-8 li">{{ $t('landingCode128') }}</li>
                    </ul>
                </div>
                <div v-if="!$store.state.authModule.authorized">
                    <p class="pb-2">{{ $t('landingForCreate') }}</p>
                    <router-link class="flex gap-4 items-center"
                                 to="/auth">
                        <auth-button :isLoginButton="true"
                                     @click="$store.commit('toggleAccount', true)">
                            {{ $t('landingEnter') }}
                        </auth-button>
                        {{ $t('orItem') }}
                        <auth-button @click="$store.commit('toggleAccount', false)">
                            {{ $t('landingRegistration') }}
                        </auth-button>
                    </router-link>
                </div>
                <router-link class="flex gap-4 items-center"
                             to="/labels"
                             v-else>
                    <base-button :isLoginButton="true"
                                 class="flex-1 flex items-center justify-center gap-2">
                        <div>{{ $t('landingButton') }}</div>
                        <div class="w-[24px]">
                            <img src="../assets/icons/linking.png">
                        </div>
                    </base-button>
                </router-link>
            </div>
        </div>
        <div class="max-w-[55%] flex items-center">
            <div class="mr-[-20px]">
                <img class="noDark"
                     src="../assets/hero-image.png">
            </div>
        </div>
    </main>
</template>
<script>
export default {}
</script>
<style scoped>
.li {
    position: relative;
    display: flex;
}
.li::before {
    content: "";
    background: #000;
    position: absolute;
    height: 1px;
    width: 20px;
    left: -25px;
    bottom: 45%;
}
</style>