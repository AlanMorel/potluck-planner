import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: ""
    },
    getters: {
        getTitle: state => state.title
    },
    mutations: {
        updateTitle(state, title) {
            state.title = title;
        }
    },
    actions: {

    }
});
