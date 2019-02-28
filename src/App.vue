<template>
    <div id="app">
        <router-link to="/" class="header-link">
            <h1>SmörgasBoard</h1>
        </router-link>
        <nav>
            <ul>
                <li>
                    <router-link to="/create" class="nav-link">Create</router-link>
                </li>
                <li>
                    <router-link to="/join" class="nav-link">Join</router-link>
                </li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">

    $primary-color: #2c3e50;
    $active-color: #256cb3;

    body {
        margin: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $primary-color;
        background-color: #F2F5F8;
        padding: 1rem;
    }

    h1 {
        margin-top: 0;
    }

    label {
        display: block;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;

        nav & {
            margin-left: 0;
        }
    }

    nav {
        margin-bottom: 3rem;
    }

    a {
        color: $primary-color;
    }

    .header-link {
        text-decoration: none;
    }

    .nav-link {
        font-size: 1rem;
        text-decoration: none;
        border: solid 1px $primary-color;
        border-radius: 0.25rem;
        padding: 0.25rem 1rem;
        transition: all 0.15s ease;
        margin-right: 0.5rem;

        &:hover {
            background-color: $primary-color;
            color: white;
        }
    }

    input {
        outline: 0;
    }

    input[type="text"],
    input[type="number"],
    input[type="submit"],
    input[type="date"],
    input[type="time"] {
        border: 0;
        padding: 0.5rem 0.25rem;
        width: 100%;
        max-width: 15rem;
        border-bottom: solid 1px lighten($primary-color, 60%);

        &:focus {
            border-color: $active-color;
        }
    }

    input[type="date"],
    input[type="time"] {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }

    .button {
        color: $primary-color;
        font-size: 0.8rem;
        margin-top: 1rem;
        max-width: 20rem;
        border-radius: 0.5rem;
        border: solid 1px lighten($primary-color, 60%);
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
</style>
