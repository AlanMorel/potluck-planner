<template>
    <section>
        <h1>Potluck Planner</h1>
        <form @submit.prevent="createNewPotluck">
            <div>
                <label for="event">Event Name</label>
                <input type="text" name="event" v-model="event">
            </div>
            <div>
                <label for="host">Host Name</label>
                <input type="text" name="host" v-model="host">
            </div>
            <div>
                <label for="people">Number of People</label>
                <input type="number" name="people" v-model="people">
            </div>
            <input type="submit" value="Create New Potluck">
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
    label {
        display: block;
    }
    h3 {
      margin: 40px 0 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
</style>
