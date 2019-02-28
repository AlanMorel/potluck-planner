<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
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
    input[type="submit"] {
        border: 0;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        border: solid 1px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 10rem;
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
