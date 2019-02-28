import Vue from "vue";
import Router from "vue-router";

import PotluckPlanner from "./components/PotluckPlanner.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
          path: "/",
          name: "PotluckPlanner",
          component: PotluckPlanner
        }
    ]
});
