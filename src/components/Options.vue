<template>
    <section class="form-container options-container">
        <div class="options-header">
            <h3>Options</h3>
            <span to="/signupSheet" class="button explore-more skip-continue" v-on:click="createNewPotluck">
                {{ shouldContinue() ? 'Continue' : 'Skip' }}
            </span>
        </div>
        <ul class="event-options">
            <li v-for="event in events">
                <div class="event" @click="selectEvent(event)" :class="[
                    isEventActive(event.name) ? 'active-event' : '',
                    event.options ? 'has-options' : '',
                    event.toggled ? 'toggled' : '']">{{ event.name }}</div>
                <ul class="options">
                    <li v-for="option in event.options" class="option" :class="[
                        isEventActive(option) ? 'active-event' : '']" @click="selectOption(option)">
                        {{ option }}
                    </li>
                </ul>
            </li>
        </ul>
        <div class="form-element">
            <label for="dietary">Dietary restrictions?</label>
            <input type="checkbox" name="dietary" :value="dietary" @input="updateDietary" class="slider">
        </div>
        <div class="form-element">
            <label for="supplies">Do you need supplies?</label>
            <input type="checkbox" name="supplies" :value="supplies" @input="updateSupplies" class="slider">
        </div>
        <div class="form-element">
            <label for="kids">Kids?</label>
            <input type="checkbox" name="kids" :value="kids" @input="updateKids" class="slider">
        </div>
        <div class="form-element">
            <label for="alcohol">Alcohol?</label>
            <input type="checkbox" name="alcohol" :value="alcohol" @input="updateAlcohol" class="slider">
        </div>
    </section>
</template>

<script>
    export default {
        name: "Options",
        data() {
            return {
                activeEvent: "",
                events: [
                    {
                        name: "Brunch",
                    },
                    {
                        name: "Dinner Party",
                    },
                    {
                        name: "Birthday Party"
                    },
                    {
                        name: "Shower (Bridal, Baby)"
                    },
                    {
                        name: "Holiday",
                        toggled: false,
                        options: [
                            "Thanksgiving",
                            "Christmas"
                        ]
                    }
                ]
            }
        },
        computed: {
            sides() {
                return this.$store.getters.getSides;
            },
            guests() {
                return this.$store.getters.getGuests;
            },
            dietary() {
                return this.$store.getters.getDietary;
            },
            supplies() {
                return this.$store.getters.getSupplies;
            },
            kids() {
                return this.$store.getters.getKids;
            },
            alcohol() {
                return this.$store.getters.getAlcohol;
            }
        },
        methods: {
            selectEvent(event) {
                if (event.options) {
                    event.toggled = !event.toggled;
                } else if (this.activeEvent === event.name) {
                    this.activeEvent = "";
                } else {
                    this.activeEvent = event.name;
                }
            },
            selectOption(option) {
                if (this.activeEvent === option) {
                    this.activeEvent = "";
                } else {
                    this.activeEvent = option;
                }
            },
            isEventActive(eventName) {
                return eventName === this.activeEvent;
            },
            shouldContinue() {
                return this.dietary || this.supplies || this.kids || this.alcohol || this.activeEvent.length;
            },
            updateDietary(e) {
                this.$store.commit("updateDietary", e.target.checked);
            },
            updateSupplies(e) {
                this.$store.commit("updateSupplies", e.target.checked);
            },
            updateKids(e) {
                this.$store.commit("updateKids", e.target.checked);
            },
            updateAlcohol(e) {
                this.$store.commit("updateAlcohol", e.target.checked);
            },
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
                var numDishes = Math.round(people / denom);
                var i = 0;
                var dishes = [];
                var item = dish;
                for (i; i < numDishes; i++) {
                    item.type = type;
                    dishes.push(item);
                }
                this.$store.commit("update" + type, dishes);
            }
        }
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;

    .options-container {
        label,
        .slider {
            display: inline-block;
        }

        label {
            margin-right: 1rem;
        }
    }

    .options {
        margin-left: 1rem;
        max-height: 0;
        overflow: hidden;

        .toggled + & {
            max-height: 10rem;
        }
    }

    .options-header {
        margin-bottom: 1.5rem;
        align-items: center;
    }

    .event-options {
        display: flex;
        flex-direction: column;
    }

    .option, .event {
        margin: 0;
        border-radius: 0.25rem;
        border: solid 1px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }

    .event {
        display: inline-block;
        padding: 0.5rem 1.25rem;
        margin-bottom: 1rem;

        &.has-options:after {
            content: (' ▼');
            font-size: 0.75rem;
            margin-left: 0.25rem;
        }

        &.has-options.toggled:after {
            content: (' ▲');
        }
    }

    .option {
        padding: 0.25rem 1.25rem;
        margin-right: 1rem;
    }

    .active-event {
        background-color: $primary-color;
        color: white;
    }

    .skip-continue {
        float: right;
    }

    .options-header {
        display: flex;
    }
</style>
