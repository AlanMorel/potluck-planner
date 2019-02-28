<template>
    <section class="form-container">
        <h3>Finalize</h3>
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
                this.createDishes(numPeople, 2.5, dish, "Sides");
                this.createDishes(numPeople, 10, dish, "Mains");
                this.createDishes(numPeople, 5, dish, "Desserts");
                this.createDishes(numPeople, 6.65, dish, "Apps");
                this.$router.push("/signupSheet");
            },
            createDishes(people, denom, dish, type) {
            	var numDishes = Math.round(people/denom);
                var i = 0;
                var dishes = [];
                var item = dish;
                for (i; i < numDishes; i++) {
                	console.log('type');
                	item.type = type;
                	console.log(item);
                    dishes.push(item);
                }
                this.$store.commit("update" + type, dishes);
            }
        }
    }
</script>

<style lang="scss">
    .finalize {

    }
</style>
