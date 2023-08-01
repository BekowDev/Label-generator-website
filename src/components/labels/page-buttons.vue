<template>
    <div class="flex items-center justify-center gap-5 mt-auto">
        <button @click="$store.commit('setPage', { numbers: false, page: '-' }), $store.dispatch('getLabels')"
                :disabled="$store.state.labelModule.getData.page === '1'">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApUlEQVR4nO3ZsQ3CMBSE4beE8b0rvP8aVAgUGlJkHJClFIgFuGfdN0FOfwpbjjAzeb33C8knyWsUH7GTfGfmPSoC0DLzNUeQPFpriGo8QoVLqHAJFS6hwiVUuIQK+AAoAi4hAiuUmEhu54h9XlejKq4yBD+/1hgjoyp4jCi4jCi4jCi4jCiXUeUyqlxGlcuoWqpM/3qeJvmIys4xW2be/v0tZqv6AICUr/VPeeNLAAAAAElFTkSuQmCC"
                 class="w-[18px] ">
        </button>
        <div class="flex gap-2">
            <button v-for="page in +$store.state.labelModule.totalPage"
                    :style="$store.state.labelModule.getData.page == page ? 'text-decoration: underline; font-weight: 700' : false"
                    class="text-[#5856d6]"
                    @click="$store.commit('setPage', { numbers: true, value: `${page}` }), $store.dispatch('getLabels')">
                {{ page }}
            </button>
        </div>
        <button @click="$store.commit('setPage', { numbers: false, value: '+' }), $store.dispatch('getLabels')"
                :disabled="$store.state.labelModule.getData.page >= $store.state.labelModule.totalPage">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApUlEQVR4nO3ZsQ3CMBSE4beE8b0rvP8aVAgUGlJkHJClFIgFuGfdN0FOfwpbjjAzeb33C8knyWsUH7GTfGfmPSoC0DLzNUeQPFpriGo8QoVLqHAJFS6hwiVUuIQK+AAoAi4hAiuUmEhu54h9XlejKq4yBD+/1hgjoyp4jCi4jCi4jCi4jCiXUeUyqlxGlcuoWqpM/3qeJvmIys4xW2be/v0tZqv6AICUr/VPeeNLAAAAAElFTkSuQmCC"
                 class="w-[18px] rotate-180">
        </button>
    </div>
</template>
<script>
export default {}
</script>
