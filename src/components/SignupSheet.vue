<template>
    <section class="potluck-sheet">
        <div class="potluck-sheet__apps">
            <h3 class="potluck-sheet__apps">Apps & Snacks</h3>
            <ul>
                <li class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name">
                        <label for="guestName">Name</label>
                        <input type="text" name="guestName">
                    </div>
                    <div class="potluck-sheet__signup--type">
                        <label for="dishType">Type</label>
                        <select id="dishType">
                            <option value="app">Appetizer</option>
                            <option value="snack">Snack</option>
                            <option value="chips-dips">Chips & Dips</option>
                            <option value="cheese">Cheese Board</option>
                            <option value="finger-food">Finger Food</option>
                        </select>
                    </div>
                    <div class="potluck-sheet__signup--dish">
                        <label for="dishName">Dish</label>
                        <input type="text" name="dishName">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__sides">
            <h3 class="potluck-sheet__sides">Sides</h3>
            <ul>
                <li v-for="side in this.sides" class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name">
                        <label for="guestName">Name</label>
                        <input type="text" name="guestName">
                    </div>
                    <div class="potluck-sheet__signup--type">
                        <label for="dishType">Type</label>
                        <select id="dishType">
                            <option value="Side">Side</option>
                            <option value="Greens">Greens</option>
                            <option value="Grains">Grains</option>
                            <option value="Salad">Salad</option>
                            <option value="Starch">Starch</option>
                            <option value="Meat">Meat</option>
                        </select>
                    </div>
                    <div class="potluck-sheet__signup--dish">
                        <label for="dishName">Dish</label>
                        <input type="text" name="dishName">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__mains">
            <h3 class="potluck-sheet__mains">Mains</h3>
            <ul>
                <li class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name">
                        <label for="guestName">Name</label>
                        <input type="text" name="guestName">
                    </div>
                    <div class="potluck-sheet__signup--type">
                        <label for="dishType">Type</label>
                        <select id="dishType">
                            <option value="main">Main</option>
                            <option value="meat">Meat</option>
                            <option value="red-meat">Red Meat</option>
                            <option value="poultry">Poultry</option>
                            <option value="pasta">Pasta</option>
                            <option value="fish">Fish</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <div class="potluck-sheet__signup--dish">
                        <label for="dishName">Dish</label>
                        <input type="text" name="dishName">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__desserts">
            <h3 class="potluck-sheet__desserts">Desserts</h3>
            <ul>
                <li class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name">
                        <label for="guestName">Name</label>
                        <input type="text" name="guestName">
                    </div>
                    <div class="potluck-sheet__signup--type">
                        <label for="dishType">Type</label>
                        <select id="dishType">
                            <option value="dessert">Dessert</option>
                            <option value="pie">Pie</option>
                            <option value="cake">Cake</option>
                            <option value="ice-cream">Ice Cream</option>
                            <option value="cookies">Cookies</option>
                            <option value="bars">Bars</option>
                        </select>
                    </div>
                    <div class="potluck-sheet__signup--dish">
                        <label for="dishName">Dish</label>
                        <input type="text" name="dishName">
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PotluckSheet",
        data() {
            return {
                title: "",
                sides: this.$store.getters.getSides
            }
        },
        methods: {
            createNewPotluck() {
                console.log("sides", this.$store.getters.getSides);
            }
        }
    }
</script>

<style lang="scss">
    .potluck-sheet__signup {
        display: flex;
    }

    .potluck-sheet__signup--name,
    .potluck-sheet__signup--type,
    .potluck-sheet__signup--dish {
        margin: 1rem;
    }

    select {
        height: 2rem;
    }
</style>