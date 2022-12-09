import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: false
    }),
    getters: {
        isLoggedIn: (state) => state.user !== false,
        getUser: (state) => state.getUser
    },
    actions: {
        async fetchUser() {
            try {
                const {data} = await axios.get("https://zullkit-backend.buildwithangga.id/api/user", {
                    headers: {
                        Authorization: localStorage.getItem('token_type') + '' + localStorage.getItem('access_token')
                    }
                })
                this.user = data
            } catch (error) {
                this.user = false
            }
            
        }
    }
})