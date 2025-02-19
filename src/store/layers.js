import {defineStore} from "pinia";

export const useLayersStore = defineStore('layersManage', {
    state: () => ({
        status: 'success',
        message: 'This is a message'
    }),
    getters: {

    },
    actions: {
        setStatus(status, message) {
            this.status = status
            this.message = message
        }
    }
})
