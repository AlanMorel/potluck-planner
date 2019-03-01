<template>
    <section class="home">
        Home
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
    </section>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss">
    .home {

    }
</style>
