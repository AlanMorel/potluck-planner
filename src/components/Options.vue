<template>
    <section class="form-container">
        <h3>Options</h3>
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
        <router-link to="/create/finalize" class="button explore-more">Skip</router-link>
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
            }
        }
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;

    .options {
        margin-left: 1rem;
        max-height: 0;
        overflow: hidden;

        .toggled + & {
            max-height: 10rem;
        }
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
            content: (' ^');
        }

        &.has-options.toggled:after {
            content: (' v');
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
</style>
