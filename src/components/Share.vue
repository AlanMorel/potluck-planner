<template>
    <section class="share-container">
        Share with Guests
    </section>
</template>

<script>
    export default {
        name: "Share",
        computed: {

        }
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;
    $active-color: #256cb3;

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
