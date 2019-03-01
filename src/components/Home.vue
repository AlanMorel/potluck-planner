<template>
    <section class="home">
        <div class="home-banner">
            <img src="../assets/homepage-background.jpg">
            <nav>
                <ul>
                    <li>
                        <router-link to="/create" class="nav-link">Plan a Potluck</router-link>
                    </li>
                    <li>
                        <router-link to="/join" class="nav-link">Find a Potluck</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;
    $active-color: #256cb3;

    .home {

    }

    .home-banner {
        img {
            width: 100%;
        }
    }

    nav {
        margin-top: -6rem;
        text-align: center;
    }

    .nav-link {
        font-size: 1.5rem;
        text-decoration: none;
        border: solid 1px lighten($primary-color, 60%);
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        transition: all 0.15s ease;
        background-color: white;
        margin: 0 1rem;

        &:hover {
            border-color: $primary-color;
            background-color: $primary-color;
            color: white;
        }
    }
</style>
