<template>
    <section class="create-potluck-container">
        <form @submit.prevent="createNewPotluck" class="create-potluck-form">
            <div class="form-element">
                <label for="title">Title</label>
                <input type="text" name="title" v-model="title" required>
            </div>
            <div class="form-element">
                <label for="host">Host Name</label>
                <input type="text" name="host" v-model="host" required>
            </div>
            <div class="form-element">
                <label for="date">Date</label>
                <input type="date" name="date" v-model="date">
            </div>
            <div class="form-element">
                <label for="time">Time</label>
                <input type="time" name="time" v-model="time">
            </div>
            <div class="form-element">
                <label for="people">Number of People</label>
                <input type="number" name="people" v-model="people" required>
            </div>
            <div class="form-element">
                <input type="submit" value="Create New Potluck">
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
                people: 1
            }
        },
        methods: {
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
        padding: 1rem 0;
    }

    .create-potluck-form {

    }
</style>
