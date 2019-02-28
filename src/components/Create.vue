<template>
    <section class="create-potluck-container">
        <form @submit.prevent="createNewPotluck" class="create-potluck-form">
            <div class="form-element">
                <label for="title">Title</label>
                <input type="text" name="title" v-model="title" placeholder="Title" required>
            </div>
            <div class="form-element">
                <label for="host">Host Name</label>
                <input type="text" name="host" v-model="host" placeholder="Host Name" requred>
            </div>
            <div class="form-element">
                <label for="date">Date</label>
                <input type="date" name="date" v-model="date" placeholder="Date" requred>
            </div>
            <div class="form-element">
                <label for="time">Time</label>
                <input type="time" name="time" v-model="time" placeholder="Time" requred>
            </div>
            <div class="form-element">
                <label for="guests">Number of Guests</label>
                <input type="number" name="guests" v-model="guests" required>
            </div>
            <div class="form-element">
                <input type="submit" value="Create New Simple Potluck" class="button dark-button">
                <input type="submit" value="Or Explore More Options" class="button">
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "Create",
        data() {
            return {
                title: "",
                date: "",
                time: "",
                host: "",
                guests: 10
            }
        },
        methods: {
            createNewPotluck() {
                console.log("create new potluck!");
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
</style>
