<template>
    <section class="form-container">
        <form class="create-potluck-form">
            <h3>Create a New Potluck</h3>
            <div class="form-element">
                <input type="text" name="title" :value="title" placeholder="Title" required @input="updateTitle">
            </div>
            <div class="form-element">
                <input type="text" name="host" :value="host" placeholder="Host Name" required @input="updateHost">
            </div>
            <div class="form-element">
                <label for="date">Date and Time</label>
                <input type="date" name="date" :value="date" placeholder="Date" @input="updateDate">
                <input type="time" name="time" :value="time" placeholder="Time" @input="updateTime">
            </div>
            <div class="form-element single-line-form-element">
                <label for="guests">Number of Guests</label>
                <input type="number" name="guests" :value="guests" required @input="updateGuests" class="guest-input">
            </div>
            <div class="form-element">
                <input type="text" name="location" :value="location" placeholder="Location" @input="updateLocation">
            </div>
            <div class="form-element">
                <textarea name="notes" :value="notes" placeholder="Notes" @input="updateNotes"></textarea>
            </div>
            <div class="form-element">
                <router-link to="/create/options" class="button explore-more">Next</router-link>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "Create",
        computed: {
            title() {
                return this.$store.getters.getTitle;
            },
            date() {
                return this.$store.getters.getDate;
            },
            time() {
                return this.$store.getters.getTime;
            },
            host() {
                return this.$store.getters.getHost;
            },
            guests() {
                return this.$store.getters.getGuests;
            },
            location() {
                return this.$store.getters.getLocation;
            },
            notes() {
                return this.$store.getters.getNotes;
            }
        },
        methods: {
            updateTitle(e) {
                this.$store.commit("updateTitle", e.target.value);
            },
            updateDate(e) {
                this.$store.commit("updateDate", e.target.value);
            },
            updateTime(e) {
                this.$store.commit("updateTime", e.target.value);
            },
            updateHost(e) {
                this.$store.commit("updateHost", e.target.value);
            },
            updateGuests(e) {
                this.$store.commit("updateGuests", e.target.value);
            },
            updateLocation(e) {
                this.$store.commit("updateLocation", e.target.value);
            },
            updateNotes(e) {
                this.$store.commit("updateNotes", e.target.value);
            },
        }
    }
</script>

<style lang="scss">

    .create-potluck-form {
        h3 {
            margin-bottom: 1rem;
        }
    }

    .explore-more {
        display: inline-block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border-radius: 0.25rem;
        margin: 0;
    }

    input[type="number"].guest-input {
        width: 5rem;
    }
</style>
