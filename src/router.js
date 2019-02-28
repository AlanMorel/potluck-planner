import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import Create from "@/components/Create.vue";
import Options from "@/components/Options.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/create",
            name: "create",
            component: Create,
        }, {
            path: "/create/options",
            name: "options",
            component: Options,
      }
    ]
});
