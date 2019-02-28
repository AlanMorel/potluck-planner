import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "",
        host: "",
        date: "",
        time: "",
        guests: 10,
        sides: [],
        mains: [],
        apps: [],
        desserts: [],
        dietary: false,
        supplies: false,
        alcohol: false,
        kids: false,
        sides: []
    },
    getters: {
        getTitle: state => state.title,
        getHost: state => state.host,
        getDate: state => state.date,
        getTime: state => state.time,
        getGuests: state => state.guests,
        getSides: state => state.sides,
        getMains: state => state.mains,
        getApps: state => state.apps,
        getDesserts: state => state.desserts,
        getDietary: state => state.dietary,
        getSupplies: state => state.supplies,
        getAlcohol: state => state.alcohols,
        getKids: state => state.kids,
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
        updateDietary(state, dietary) {
            state.dietary = dietary;
        },
        updateSupplies(state, supplies) {
            state.supplies = supplies;
        },
        updateKids(state, kids) {
            state.kids = kids;
        },
        updateAlcohol(state, alcohol) {
            state.alcohol = alcohol;
        },
        updateSides(state, sides) {
            state.sides = sides;
        },
        updateMains(state, mains) {
            state.mains = mains;
        },
        updateApps(state, apps) {
            state.apps = apps;
        },
        updateDesserts(state, desserts) {
            state.desserts = desserts;
        }
    },
    actions: {

    }
});
