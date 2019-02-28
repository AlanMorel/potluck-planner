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
                    <li v-for="option in event.options" class="option" @click="selectOption(option)">
                        {{ option }}
                    </li>
                </ul>
            </li>
        </ul>
        <router-link to="/create/finalize" class="button explore-more">Skip</router-link>
    </section>
</template>

<script>
    export default {
        name: "Options",
        data() {
            return {
                activeEvent: "Brunch",
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
                    return;
                }
                this.activeEvent = event.name;
                console.log(event.name);
            },
            selectOption(option) {
                console.log(option);
            },
            isEventActive(eventName) {
                return eventName === this.activeEvent;
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

    .event {
        margin: 0;
        display: inline-block;
        padding: 0.5rem 1.25rem;
        border-radius: 0.25rem;
        border: solid 1px rgba(0, 0, 0, 0.15);
        margin-bottom: 1rem;
        cursor: pointer;

        &.has-options:after {
            content: ('^');
        }

        &.has-options.toggled:after {
            content: ('v');
        }
    }

    .option {
        margin: 0;
        padding: 0.25rem 1.25rem;
        border: solid 1px rgba(0, 0, 0, 0.15);
        border-radius: 0.25rem;
        margin-right: 0.5rem;
    }

    .active-event {
        background-color: $primary-color;
        color: white;
    }
</style>
