import { AuthAPI } from "@/api/AuthAPI"
import router from "@/router/router"
import { ErrorCodes } from "vue"
export const authModule = {
    state: () => ({
        haveAccount: false,
        token: localStorage.getItem("token") || null,
        username: localStorage.getItem("username") || null,
        authorized: localStorage.hasOwnProperty("token") || false,
    }),
    mutations: {
        toggleAccount(state, value) {
            state.haveAccount = value
        },
        setToken(state, token) {
            state.token = token
            localStorage.setItem("token", token)
        },
        setUsername(state, username) {
            state.username = username
            localStorage.setItem("username", username)
        },
        clearData() {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
        }
    },
    actions: {
        async signUp({ commit }, { username, password }) {
            try {
                const res = await AuthAPI.signUp(username, password)
                if (res) {
                    commit('toggleAccount', res.data.signUp)
                }
            } catch (error) {
                console.error("Ошибка при отправке POST-запроса:", error)
                alert('Ошибка при регистрации')
            }
        },
        async signIn({ commit }, { username, password }) {
            try {
                const res = await AuthAPI.signIn(username, password)
                if (res) {
                    commit("setToken", res.data.token)
                    commit("setUsername", res.data.username)
                }
            } catch (error) {
                console.error("Ошибка при отправке POST-запроса:", error)
                alert('Ошибка при входе')
                localStorage.clear()
            }
        },
        async updateUsername({ commit }, username) {
            try {
                const res = await AuthAPI.updateUsername({ username })
                if (res) {
                    commit('setUsername', username)
                    alert(`${res.data.message} на "${res.data.user}"`)
                }
            } catch (error) {
                console.error("Ошибка при отправке POST-запроса:", error)
                alert('Ошибка')
            }
        },
        // async updatePassword({ }, { oldPassword, newPassword }) {
        //     try {
        //         const res = await AuthAPI.updatePassword({ oldPassword, newPassword })
        //         if (res) {
        //             alert(res.data.message)
        //         }
        //     } catch (error) {
        //         console.error("Ошибка при отправке POST-запроса:", error)
        //     }
        // },
        async deleteUser({ commit }) {
            try {
                const res = await AuthAPI.deleteUser()
                if (res) {
                    alert(res.data.message)
                    commit('clearData')
                    location.reload()
                }
            } catch (error) {
                console.error("Ошибка при отправке POST-запроса:", error)
            }
        },
    },
}
