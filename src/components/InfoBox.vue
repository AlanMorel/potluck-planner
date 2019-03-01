<template>
    <section class="info-box-container">
        <div class="info-box">
            <div class="info-box-header">
                {{ event }} <span>by</span> {{ host }}
            </div>
            <div>
                {{ date }} at {{ time }}
            </div>
            <div>
                Location: {{ location }}
            </div>
            <div>
                Guests: {{ guests }} People
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
                var date = this.$store.getters.getDate;
                return new Date(date).toLocaleString('en-us', { month: 'long', day: 'numeric' });
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
        bottom: 8rem;
    }

    .info-box-header {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.25rem;

        span {
            font-weight: normal;
            font-size: 1rem;
        }
    }
</style>
