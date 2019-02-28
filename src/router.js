import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import Create from "@/components/Create.vue";
import SignupSheet from "@/components/SignupSheet.vue";
import Options from "@/components/Options.vue";
import Finalize from "@/components/Finalize.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },{
          path: "/create",
          name: "create",
          component: Create
        },
        {
          path: "/signupsheet",
          name: "SignupSheet",
          component: SignupSheet
        },
        {
            path: "/create/options",
            name: "options",
            component: Options,
      	},
        {
            path: "/create/finalize",
            name: "finalize",
            component: Finalize,
      	}
    ]
});
