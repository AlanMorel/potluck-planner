<template>
    <section class="create-potluck-container">
        <h1>Potluck Planner</h1>
        <form @submit.prevent="createNewPotluck" class="create-potluck-form">
            <div class="form-element">
                <label for="event">Event Name</label>
                <input type="text" name="event" v-model="event" required>
            </div>
            <div class="form-element">
                <label for="host">Host Name</label>
                <input type="text" name="host" v-model="host" requred>
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
        name: "PotluckPlanner",
        data() {
            return {
                event: "",
                host: "",
                people: 1
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
        padding: 1rem 0;
    }

    .create-potluck-form {

    }
</style>
