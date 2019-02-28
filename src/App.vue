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

    h3 {
        margin: 0;
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
        border: solid 1px lighten($primary-color, 60%);
        border-radius: 0.25rem;
        padding: 0.25rem 1rem;
        transition: all 0.15s ease;
        margin-right: 0.5rem;

        &:hover {
            border-color: $primary-color;
            background-color: $primary-color;
            color: white;
        }
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
        max-width: 15rem;
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
        max-width: calc(15rem / 2);
    }

    .button {
        color: $primary-color;
        font-size: 0.8rem;
        margin-top: 1rem;
        max-width: 20rem;
        border-radius: 0.5rem;
        border: solid 1px lighten($primary-color, 60%);
        cursor: pointer;
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
            transform: translateY(0.25rem);
        }
    }

    .slider {
        width: auto;
        display: block;
        position: relative;
        visibility: hidden;
        cursor: pointer;
        transform: translateY(-0.4rem);

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
</style>
