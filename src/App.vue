<template>
    <div class="min-h-[100vh] overflow-hidden box-border relative">
        <div class="container px-[3rem] py-[1rem] mx-auto">
            <router-view></router-view>
        </div>
    </div>
    <div class="z-20 top-0 left-0 bottom-0 right-0 h-[100vh] fixed bg-[#00000046]"
         v-show="$store.state.labelModule.dialogWrapper"
         @click="$store.commit('setDialogWrapper', false)">
    </div>
</template>
<script >
import router from './router/router.js'
export default {
    components: {
        router
    },
    methods: {
        setDarkTheme() {
            if (this.$store.state.theme === 'dark') {
                const htmlElement = document.documentElement;
                htmlElement.style.webkitFilter = "invert(100%) hue-rotate(180deg) brightness(70%) contrast(70%)";
                htmlElement.style.filter = "invert(100%) hue-rotate(180deg) brightness(70%) contrast(70%)";
                htmlElement.style.textShadow = "0 0 0";
                htmlElement.style.background = "rgb(255, 255, 255)";
                const elements1 = document.querySelectorAll("video, :not(object):not(body) > embed, object, svg image, .noDark, [background]");
                for (let i = 0; i < elements1.length; i++) {
                    let element = elements1[i];
                    element.style.webkitFilter = "invert(100%) hue-rotate(180deg)";
                    element.style.filter = "invert(100%) hue-rotate(180deg)";
                }
                const elements2 = document.querySelectorAll("input, [background] *");
                for (let i = 0; i < elements2.length; i++) {
                    let element = elements2[i];
                    element.style.webkitFilter = "none";
                    element.style.filter = "none";
                }
            }
            else {
                const htmlElement = document.documentElement;
                htmlElement.style.webkitFilter = "none";
                htmlElement.style.filter = "none";
                htmlElement.style.textShadow = "none";
                htmlElement.style.background = "none";
                const elements1 = document.querySelectorAll("video, :not(object):not(body) > embed, object, svg image, .noDark, [background]");
                for (var i = 0; i < elements1.length; i++) {
                    var element = elements1[i];
                    element.style.webkitFilter = "none";
                    element.style.filter = "none";
                }
                const elements2 = document.querySelectorAll("input, [background] *");
                for (var i = 0; i < elements2.length; i++) {
                    var element = elements2[i];
                    element.style.webkitFilter = "none";
                    element.style.filter = "none";
                }
            }
        },
        setLanguage() {
            this.$i18n.locale = this.$store.state.language
        }
    },
    watch: {
        '$store.state.theme': {
            handler(newValue) {
                this.setDarkTheme()
            },
            deep: true
        },
        '$store.state.language': {
            handler(newValue) {
                this.setLanguage()
            },
            deep: true
        },
    },
    created() {
        this.setLanguage()
        this.setDarkTheme()
    },
}
</script>

