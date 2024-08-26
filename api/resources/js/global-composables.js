import useClient from './composables/useClient'

export default {
    install: (app) => {
        app.provide('useClient', useClient)
    },
    useClient,
}
