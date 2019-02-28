<template>
    <section class="form-container">
        <h3>Finalize</h3>
        <div v-on:click="createNewPotluck" class="button">Finish</div>
    </section>
</template>

<script>
    export default {
        name: "Finalize",
        methods: {
        	createNewPotluck() {
                var numPeople = (this.$store.getters.getGuests);
                var dish = {
                    "name" : "",
                    "type" : "",
                    "dish" : ""
                };
                this.createSides(numPeople, dish);
                this.$router.push("/signupSheet");
            },
            createSides(num, dish) {
                var numSides = Math.round(num/2.5);
                var i = 0;
                var sides = [];
                for (i; i < numSides; i++) {
                    sides.push(dish);
                }
                this.$store.state.sides = sides;
                console.log(this.$store.getters.getSides);
            }
        }
    }
</script>

<style lang="scss">
    .finalize {

    }
</style>
