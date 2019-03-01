<template>
    <div id="app" v-bind:style="{ backgroundColor: backgroundColor }">
        <router-link to="/" class="header-link">
            <Logo />
        </router-link>
        <router-view />
    </div>
</template>

<script>
    import Logo from "@/components/Logo.vue";

    export default {
        name: "App",
        components: {
            Logo
        },
        computed: {
            backgroundColor() {
                return this.$store.getters.getBackgroundColor;
            }
        }
    }
</script>


<style lang="scss">

    $primary-color: #2c3e50;
    $active-color: #256cb3;

    html,
    body,
    #app {
        min-height: 100vh;
    }

    body {
        margin: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $primary-color;
        background-color: #F2F5F8;
        transition: background-color 0.5s ease;
        padding-bottom: 10rem;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    label {
        display: block;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;

        nav & {
            margin-left: 0;
        }
    }

    a {
        color: $primary-color;
    }

    .header-link {
        text-decoration: none;
    }

    input {
        outline: 0;
        box-sizing: border-box;
    }

    input[type="text"],
    input[type="number"],
    input[type="submit"],
    input[type="date"],
    input[type="time"],
    textarea {
        border: 0;
        width: 100%;
        padding: 0.5rem 0.25rem;
        border-bottom: solid 1px lighten($primary-color, 60%);

        &:focus {
            border-color: $active-color;
        }
    }

    textarea {
        resize: vertical;
    }

    input[type="date"],
    input[type="time"] {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        max-width: 50%;
    }

    .button {
        color: $primary-color;
        font-size: 0.8rem;
        margin-top: 1rem;
        max-width: 20rem;
        border-radius: 0.5rem;
        border: solid 1px lighten($primary-color, 60%);
        cursor: pointer;
        transition: background-color 0.15s ease;

        &:hover {
            background-color: lighten($primary-color, 70%);
        }
    }

    .dark-button {
        background-color: $primary-color;
        color: white;
    }

    input[type="submit"].button {
        display: block;
        border: solid 1px $primary-color;
        border-radius: 0.25rem;
    }

    .form-container {
        max-width: 50rem;
        width: 100%;
        margin: auto;
        padding: 1.5rem 2rem;
        background-color: white;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .form-container-with-splash {
        padding: 0;
        display: flex;
        position: relative;
        margin-top: 5rem;
    }

    .form-element {
        margin-bottom: 2rem;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .single-line-form-element {
        display: flex;

        label {
            margin-right: 1rem;
            transform: translateY(0.5rem);
        }
    }

    .slider {
        width: auto;
        display: block;
        position: relative;
        visibility: hidden;
        cursor: pointer;

        &:before,
        &:after {
            content: '';
            border-radius: 2rem;
            height: 1.5rem;
            display: block;
            position: absolute;
            visibility: visible;
        }

        &:before {
            background-color: rgba(0, 0, 0, 0.25);
            width: 2.75rem;
            left: 0rem;
        }

        &:checked:before {
            background-color: $primary-color;
        }

        &:after {
            background-color: white;
            width: 1.5rem;
            transition: 0.3s ease;
            transform: scale(0.8) translateX(0);
        }

        &:checked:after {
            transform: scale(0.8) translateX(1.5rem);
        }
    }

    .potluck-logo {

    }
</style>
