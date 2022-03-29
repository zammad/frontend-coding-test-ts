import { createApp, provide, h } from "vue"
import { DefaultApolloClient } from "@vue/apollo-composable"
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import { apolloClient } from "./apollo-client"
import Toast, { PluginOptions , POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

const options: PluginOptions = {
    transition: "Vue-Toastification__bounce",
  maxToasts: 2,
  newestOnTop: true,
  position: POSITION.TOP_RIGHT
};

app.use(Toast, options);

initializeRouter(app)

app.mount('#app')
