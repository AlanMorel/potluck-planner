import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        backgroundColor: "#F2F5F8",
        event: "",
        host: "",
        date: "",
        time: "",
        location: "",
        notes: "",
        guests: 10,
        sides: [],
        mains: [],
        apps: [],
        desserts: [],
        dietary: false,
        supplies: false,
        alcohol: false,
        kids: false
    },
    getters: {
        getBackgroundColor: state => state.backgroundColor,
        getEvent: state => state.event,
        getHost: state => state.host,
        getDate: state => state.date,
        getTime: state => state.time,
        getGuests: state => state.guests,
        getLocation: state => state.location,
        getNotes: state => state.notes,
        getSides: state => state.sides,
        getMains: state => state.mains,
        getApps: state => state.apps,
        getDesserts: state => state.desserts,
        getDietary: state => state.dietary,
        getSupplies: state => state.supplies,
        getAlcohol: state => state.alcohols,
        getKids: state => state.kids
    },
    mutations: {
        updateEvent(state, event) {
            state.event = event;
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
        updateLocation(state, location) {
            state.location = location;
        },
        updateNotes(state, notes) {
            state.notes = notes;
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
        },
        updateBackgroundColor(state, color) {
            state.backgroundColor = color;
        }
    },
    actions: {

    }
});
