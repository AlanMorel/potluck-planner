<template>
    <section class="share-container" @click="openModal">
        Invite Guests
    </section>
</template>

<script>
    export default {
        name: "Share",
        methods: {
            openModal() {
                var modal = {
                    opened: true
                };
                this.$store.commit("updateModal", modal);
            }
        }
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;
    $active-color: #607d8b;

    .share-container {
        display: inline-block;
        background-color: $primary-color;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;

        &:hover {
            background-color: $active-color;
        }
    }
</style>
