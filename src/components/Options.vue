<template>
    <section class="form-container">
        <h3>Options</h3>
        <ul class="event-options">
            <li v-for="event in events">
                {{ event.name }}
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
                events: [
                    {
                        name: "Thanksgiving",

                    },
                    {
                        name: "Dinner Party"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .options {

    }

    .event-options {
        display: flex;
        flex-direction: column;

        li {
            margin: 0;
            display: inline-block;
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
            border: solid 1px rgba(0, 0, 0, 0.15);
            margin-bottom: 1rem;
        }
    }
</style>
