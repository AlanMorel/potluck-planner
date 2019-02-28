import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "",
        host: "",
        date: "",
        time: "",
        guests: 10
    },
    getters: {
        getTitle: state => state.title,
        getHost: state => state.host,
        getDate: state => state.date,
        getTime: state => state.time,
        getGuests: state => state.guests,
        getSides: state => state.sides
    },
    mutations: {
        updateTitle(state, title) {
            state.title = title;
        },
        updateHost(state, host) {
            state.host = host;
        },
        updateDate(state, date) {
            state.date = date;
        },
        updateTime(state, time) {
            state.time = time;
        },
        updateGuests(state, guests) {
            state.guests = guests;
        },
        updateSides(state, sides) {
            state.sides = sides;
        }
    },
    actions: {

    }
});
