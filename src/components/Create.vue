<template>
    <section class="create-potluck-container">
        <form @submit.prevent="createNewPotluck" class="create-potluck-form">
            <div class="form-element">
                <label for="title">Title</label>
                <input type="text" name="title" :value="title" placeholder="Title" required @input="updateTitle">
            </div>
            <div class="form-element">
                <label for="host">Host Name</label>
                <input type="text" name="host" :value="host" placeholder="Host Name" required @input="updateHost">
            </div>
            <div class="form-element">
                <label for="date">Date</label>
                <input type="date" name="date" :value="date" placeholder="Date" required @input="updateDate">
            </div>
            <div class="form-element">
                <label for="time">Time</label>
                <input type="time" name="time" :value="time" placeholder="Time" required @input="updateTime">
            </div>
            <div class="form-element">
                <label for="guests">Number of Guests</label>
                <input type="number" name="guests" :value="guests" required @input="updateGuests">
            </div>
            <div class="form-element">
                <input type="submit" value="Create New Simple Potluck" class="button dark-button">
                <router-link to="/create/options" class="button explore-more">Or Explore More Options</router-link>
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
            createNewPotluck() {
                var numPeople = (this.people);
                this.createSides(numPeople);
            },
            createSides(num) {
                var sides = num/2;
                console.log(sides);
            }
        }
    }
</script>

<style lang="scss">
    .create-potluck-container {
        max-width: 30rem;
        width: 100%;
        margin: auto;
        padding: 1.5rem 2rem;
        background-color: white;
        border-radius: 0.25rem;
    }

    .form-element {
        margin-bottom: 2rem;
    }

    .explore-more {
        display: inline-block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border-radius: 0.25rem;
    }
</style>
