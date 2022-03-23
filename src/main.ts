import { createApp, provide, h } from "vue"
import { DefaultApolloClient } from "@vue/apollo-composable"
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import { apolloClient } from "./apollo-client"

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

initializeRouter(app)

app.mount('#app')
