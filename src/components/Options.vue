<template>
    <section class="form-container options-container form-container-with-splash">
        <div class="options-form">
            <div class="options-header">
                <h3>Options</h3>
                <span to="/signupSheet" class="button nav-button" v-on:click="createNewPotluck">
                    Skip This Step
                </span>
            </div>
            <ul class="event-options">
                <li v-for="event in occassions">
                    <div class="event" @click="selectEvent(event)" :class="[
                        isEventActive(event.name) ? 'active-event' : '',
                        event.options ? 'has-options' : '',
                        event.toggled ? 'toggled' : '']">{{ event.name }}</div>
                    <ul class="options">
                        <li v-for="option in event.options" class="option" :class="[
                            isEventActive(option.name) ? 'active-event' : '']" :id="option.name" @click="selectOption(option)">
                            {{ option.name }}
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="form-element">
                <label for="dietary" class="slider-label">Dietary restrictions?</label>
                <input type="checkbox" name="dietary" :value="dietary" @input="updateDietary" class="slider">
            </div>
            <div class="form-element">
                <label for="supplies" class="slider-label">Do you need supplies?</label>
                <input type="checkbox" name="supplies" :value="supplies" @input="updateSupplies" class="slider">
            </div>
            <div class="form-element">
                <label for="kids" class="slider-label">Will kids be present?</label>
                <input type="checkbox" name="kids" :value="kids" @input="updateKids" class="slider">
            </div>
            <div class="form-element">
                <label for="alcohol" class="slider-label">Would you like alcohol?</label>
                <input type="checkbox" name="alcohol" :value="alcohol" @input="updateAlcohol" class="slider">
            </div>
            <div class="form-element">
                <router-link to="/create" class="button nav-button">Back</router-link>
                <span to="/signupSheet" class="button nav-button" v-on:click="createNewPotluck">
                    Continue
                </span>
            </div>
        </div>
        <div class="potluck-splash">
            <img src="../assets/splash2.jpg">
        </div>
    </section>
</template>

<script>
    export default {
        name: "Options",
        data() {
            return {
                activeEvent: ""
            }
        },
        computed: {
            occassions() {
                return this.$store.getters.getOccassions;
            },
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
                if (event.options) {
                    return;
                }
                this.$store.commit("updateBackgroundColor", event.color ? event.color : "#F2F5F8");
                this.$store.commit("updateBanner", event.banner ? event.banner : "generic.jpg");
            },
            selectOption(option) {
                if (this.activeEvent === option.name) {
                    this.activeEvent = "";
                } else {
                    this.activeEvent = option.name;
                }
                this.$store.commit("updateBackgroundColor", option.color ? option.color : "#F2F5F8");
                this.$store.commit("updateBanner", option.banner ? option.banner : "generic.jpg");
            },
            isEventActive(eventName) {
                return eventName === this.activeEvent;
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
                var thanksgiving = document.getElementById("Thanksgiving");
                if(thanksgiving.classList.contains("active-event")) {
                    var apps = [{
                        "name" : "",
                        "type" : "Snack",
                        "dish" : "Cranberry Brie Bites",
                        "link" : "https://www.thespruceeats.com/cranberry-brie-bites-4176316"
                    },
                    {
                        "name" : "",
                        "type" : "Chips & Dip",
                        "dish" : "Tortilla & Spinach Dip",
                        "link" : "https://www.thespruceeats.com/easy-spinach-dip-recipe-3377686"
                    },
                    {
                        "name" : "",
                        "type" : "App",
                        "dish" : "Stuffed Brussels",
                        "link" : "https://www.thespruceeats.com/top-stuffed-mushroom-recipes-4158372"
                    }
                    ];
                    var sides = [{
                        "name" : "",
                        "type" : "Grains",
                        "dish" : "Sage Stuffing",
                        "link" : "https://www.thespruceeats.com/oven-baked-stuffing-with-sage-995371"
                    },
                    {
                        "name" : "",
                        "type" : "Salad",
                        "dish" : "Autumn Salad",
                        "link" : "https://www.thespruceeats.com/colorful-autumn-salad-recipe-2096984"
                    },
                    {
                        "name" : "",
                        "type" : "Greens",
                        "dish" : "Cranberry Butternut",
                        "link" : "https://www.thespruceeats.com/roasted-brussels-sprouts-butternut-squash-cranberries-3988905"
                    },
                    {
                        "name" : "",
                        "type" : "Starch",
                        "dish" : "Mashed Potatoes",
                        "link" : "https://www.thespruceeats.com/roasted-garlic-mashed-potatoes-4173813"
                    },{
                        "name" : "",
                        "type" : "Starch",
                        "dish" : "Candied Yams",
                        "link" : "https://www.thespruceeats.com/candied-yams-with-marshmallows-4173737"
                    },
                    {
                        "name" : "",
                        "type" : "Side",
                        "dish" : "",
                        "link" : ""
                    },{
                        "name" : "",
                        "type" : "Side",
                        "dish" : "",
                        "link" : ""
                    },
                    {
                        "name" : "",
                        "type" : "Side",
                        "dish" : "",
                        "link" : ""
                    }
                    ];
                    var mains = [{
                        "name" : "",
                        "type" : "Poultry",
                        "dish" : "Oven Turkey",
                        "link" : "https://www.thespruceeats.com/oven-bag-turkey-recipe-2098986"
                    },
                    {
                        "name" : "",
                        "type" : "Meat",
                        "dish" : "Spiral Ham",
                        "link" : "https://www.thespruceeats.com/glazed-spiral-sliced-ham-recipe-480790"
                    }];
                    var desserts = [{
                        "name" : "",
                        "type" : "Pie",
                        "dish" : "Apple Pie",
                        "link" : "https://www.thespruceeats.com/step-by-step-apple-pie-recipe-305498"
                    },
                    {
                        "name" : "",
                        "type" : "Ice Cream",
                        "dish" : "Chocolate Therapy",
                        "link" : ""
                    },
                    {
                        "name" : "",
                        "type" : "Pie",
                        "dish" : "Pumpkin Pie",
                        "link" : "https://www.thespruceeats.com/autumn-pumpkin-pie-3059962"
                    },
                    {
                        "name" : "",
                        "type" : "Dessert",
                        "dish" : "",
                        "link" : ""
                    }
                    ];
                    this.$store.commit("updateApps", apps);
                    this.$store.commit("updateSides", sides);
                    this.$store.commit("updateMains", mains);
                    this.$store.commit("updateDesserts", desserts);
                    this.$router.push("/signupSheet");
                } else {
                    this.createDishes(2.5, "Sides");
                    this.createDishes(10, "Mains");
                    this.createDishes(5, "Desserts");
                    this.createDishes(6.65, "Apps");
                    this.$router.push("/signupSheet");
                }
            },
            createDishes(denom, type) {
                var numDishes = Math.round(this.guests / denom);
                var dishes = [];
                var typeName = type.slice(0, -1);
                for (var i = 0; i < numDishes; i++) {
                    var item = {
                        "name" : "",
                        "type" : typeName,
                        "dish" : "",
                        "link" : ""
                    };
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
            font-size: 1.25rem;
            margin-right: 1rem;
        }

        h3 {
            margin-right: auto;
        }
    }

    .options-form {
        width: 50%;
        padding: 2rem;
    }

    .options {
        margin-left: 2rem;
        margin-bottom: 1rem;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;

        .toggled + & {
            max-height: 3rem;
        }
    }

    .options-header {
        margin-bottom: 1.5rem;
        align-items: center;
    }

    .event-options {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
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
        margin-bottom: 0.5rem;

        &.has-options:after {
            content: (' ▼');
            font-size: 0.75rem;
            margin-left: 0.25rem;
        }

        &.has-options.toggled:after {
            content: (' ▲');
        }

        &:hover {
            background-color: lighten($primary-color, 70%);
        }

        &.active-event {

            &:hover {
                background-color: $primary-color;
            }
        }
    }

    .option {
        padding: 0.35rem 1rem;
        margin-right: 1rem;
        margin-top: 0.5rem;

        &:hover {
            background-color: lighten($primary-color, 70%);
        }

        &.active-event {

            &:hover {
                background-color: $primary-color;
            }
        }
    }

    .active-event {
        background-color: $primary-color;
        color: white;
    }

    .options-header {
        display: flex;
    }

    .slider-label {
        transform: translateY(0.25rem);
    }
</style>
