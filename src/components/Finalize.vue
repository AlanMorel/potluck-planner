<template>
    <section class="form-container">
        <h3 v-on:click="createNewPotluck">Finalize</h3>
        <div v-on:click="createNewPotluck" class="button">Finish</div>
    </section>
</template>

<script>
    export default {
        name: "Finalize",
        computed: {
            sides() {
                return this.$store.getters.getSides;
            },
            guests() {
                return this.$store.getters.getGuests;
            }
        },
        methods: {
        	createNewPotluck() {
                var numPeople = this.guests;
                var dish = {
                    "name" : "",
                    "type" : "",
                    "dish" : ""
                };
                this.createSides(numPeople, dish);
                // this.$router.push("/signupSheet");
            },
            createSides(num, dish) {
                var numSides = Math.round(num/2.5);
                var i = 0;
                var sides = [];
                for (i; i < numSides; i++) {
                    sides.push(dish);
                }
                this.$store.commit("updateSides", sides);
            }
        }
    }
</script>

<style lang="scss">
    .finalize {

    }
</style>
