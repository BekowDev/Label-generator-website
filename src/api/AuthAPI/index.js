import { AuthConfigAPIInstance, DefaultAPIInstance } from "@/api"

export const AuthAPI = {
    signUp(username, password) {
        const url = "/signUp"
        const data = { username, password }
        return AuthConfigAPIInstance.post(url, data)
    },
    signIn(username, password) {
        const url = "/signIn"
        const data = { username, password }
        return AuthConfigAPIInstance.post(url, data)
    },
    updateUsername(username) {
        const url = "/updateUsername"
        const data = username
        return DefaultAPIInstance.post(url, data)
    },
    // updatePassword({ oldPassword, newPassword }) {
    //     const url = "/updatePassword"
    //     const data = { oldPassword, newPassword }
    //     return DefaultAPIInstance.post(url, data)
    // },
    deleteUser() {
        const url = "/deleteUser"
        return DefaultAPIInstance.delete(url)
    },
}
