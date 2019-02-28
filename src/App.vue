<template>
    <div id="app">
        <h1>SmörgasBoard</h1>
        <router-link to="/create">Create</router-link>
        <router-link to="/join">Join</router-link>
        <router-view />
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #F2F5F8;
        padding: 1rem;
    }

    h1 {
        margin-top: 0;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
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
    }

    a {
      color: #42b983;
    }

    input[type="text"],
    input[type="number"],
    input[type="submit"],
    input[type="date"],
    input[type="time"] {
        border: 0;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        border: solid 1px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 10rem;
    }

    input[type="date"],
    input[type="time"] {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    input[type="submit"] {
        color: #2c3e50;
        font-size: 0.75rem;
        margin-top: 1rem;
    }

    .form-element {
        margin-bottom: 1rem;
    }
</style>
