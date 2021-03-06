import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        backgroundColor: "#F2F5F8",
        banner: "generic.jpg",
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
        kids: false,
        modal: {
            opened: false
        },
        occassions: [
            {
                name: "Brunch",
                color: "#bec2f3",
            },
            {
                name: "Dinner Party",
                color: "#edbef3",
            },
            {
                name: "Birthday Party",
                color: "#bec9f3",
            },
            {
                name: "Shower (Bridal, Baby)",
                color: "#bef3f3",
                banner: "splash2.jpg"
            },
            {
                name: "Holiday",
                toggled: false,
                options: [
                    {
                        name: "Thanksgiving",
                        color: "#ffd3a4",
                        banner: "thanksgiving.jpg"
                    },
                    {
                        name: "Christmas",
                        color: "#ffa4a4",
                        banner: "splash2.jpg"
                    }
                ]
            }
        ]
    },
    getters: {
        getBackgroundColor: state => state.backgroundColor,
        getBanner: state => state.banner,
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
        getAlcohol: state => state.alcohol,
        getKids: state => state.kids,
        getOccassions: state => state.occassions,
        getModal: state => state.modal
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
        },
        updateBanner(state, banner) {
            state.banner = banner;
        },
        updateModal(state, modal) {
            state.modal = modal;
        }
    },
    actions: {

    }
});
