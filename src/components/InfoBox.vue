<template>
    <section class="info-box-container">
        <div class="info-box">
            <div>
                Event: {{ event }}
            </div>
            <div>
                Host: {{ host }}
            </div>
            <div>
                Guests: {{ guests }}
            </div>
            <div>
                Location: {{ location }}
            </div>
            <div>
                Date & time: {{ date }} {{ time }}
            </div>
            <div>
                Notes: {{ notes }}
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "InfoBox",
        computed: {
            event() {
                return this.$store.getters.getEvent;
            },
            date() {
                return this.$store.getters.getDate;
            },
            time() {
                return this.$store.getters.getTime;
            },
            host() {
                return this.$store.getters.getHost;
            },
            guests() {
                return this.$store.getters.getGuests;
            },
            location() {
                return this.$store.getters.getLocation;
            },
            notes() {
                return this.$store.getters.getNotes;
            }
        },
    }
</script>

<style lang="scss">
    .info-box-container {
        max-width: 50rem;
        width: 100%;
        margin: auto;
        position: relative;
    }

    .info-box {
        background-color: white;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        width: 18rem;
        right: 0;
        position: absolute;
    }
</style>
