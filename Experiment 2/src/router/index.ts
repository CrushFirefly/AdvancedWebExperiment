import { createRouter,createMemoryHistory } from "vue-router";

import Login from "@/components/popup/Login.vue";
import Register from "@/components/popup/Register.vue";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/Login",
            component: Login
        },
        {
            path: "/Register",
            component: Register
        }
    ]
})

export default router