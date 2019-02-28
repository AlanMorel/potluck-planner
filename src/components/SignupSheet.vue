<template>
    <section class="potluck-sheet form-container">
        <div class="potluck-sheet__section">
            <h3 class="potluck-sheet__header">Apps & Snacks</h3>
            <ul>
                <li v-for="app in this.apps" class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name form-element">
                        <input type="text" name="guestName" :value="guestName" placeholder="Name">
                    </div>
                    <div class="potluck-sheet__signup--dish form-element">
                        <input type="text" name="dishName" :value="dishName" placeholder="Dish">
                    </div>
                      <v-select
                        item-text="Appetizer"
                        item-value="Appetizer"
                        :items="appTypes"
                        class="potluck-sheet--type-btn"
                      ></v-select>
                    <div class="potluck-sheet__signup--notes form-element">
                        <input type="text" name="notes" :value="notes" placeholder="Notes">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__section">
            <h3 class="potluck-sheet_header">Sides</h3>
            <ul>
                <li v-for="side in this.sides" class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name form-element">
                        <input type="text" name="guestName" :value="guestName" placeholder="Name">
                    </div>
                    <div class="potluck-sheet__signup--dish form-element">
                        <input type="text" name="dishName" :value="dishName" placeholder="Dish">
                    </div>
                    <v-select
                        item-text="Sides"
                        item-value="Sides"
                        :items="sideTypes"
                        class="potluck-sheet--type-btn"
                      ></v-select>
                    <div class="potluck-sheet__signup--notes form-element">
                        <input type="text" name="notes" :value="notes" placeholder="Notes">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__section">
            <h3 class="potluck-sheet__header">Mains</h3>
            <ul>
                <li v-for="main in this.mains" class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name form-element">
                        <input type="text" name="guestName" :value="guestName" placeholder="Name">
                    </div>
                    <div class="potluck-sheet__signup--dish form-element">
                        <input type="text" name="dishName" :value="dishName" placeholder="Dish">
                    </div>
                    <v-select
                        item-text="Mains"
                        item-value="Mains"
                        :items="mainTypes"
                        class="potluck-sheet--type-btn"
                      ></v-select>
                    <div class="potluck-sheet__signup--notes form-element">
                        <input type="text" name="notes" :value="notes" placeholder="Notes">
                    </div>
                </li>
            </ul>
        </div>
        <div class="potluck-sheet__section">
            <h3 class="potluck-sheet__header">Desserts</h3>
            <ul>
                <li v-for="dessert in this.desserts" class="potluck-sheet__signup">
                    <div class="potluck-sheet__signup--name form-element">
                        <input type="text" name="guestName" :value="guestName" placeholder="Name">
                    </div>
                    <div class="potluck-sheet__signup--dish form-element">
                        <input type="text" name="dishName" :value="dishName" placeholder="Dish">
                    </div>
                    <v-select
                        item-text="Desserts"
                        item-value="Desserts"
                        :items="dessertTypes"
                        class="potluck-sheet--type-btn"
                      ></v-select>
                    <div class="potluck-sheet__signup--notes form-element">
                        <input type="text" name="notes" :value="notes" placeholder="Notes">
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
                sides: this.$store.getters.getSides,
                apps: this.$store.getters.getApps,
                mains: this.$store.getters.getMains,
                desserts: this.$store.getters.getApps,
                appTypes: ['Appetizer', 'Snacks', 'Chips & Dip', 'Cheeseboard', 'Finger Food'],
                sideTypes: ["Greens", "Grains", "Salad", "Meat", "Starch"],
                mainTypes: ["Meat", "Red Meat", "Poultry", "Fish", "Vegetarian"],
                dessertTypes: ["Pie", "Cake", "Ice Cream", "Cookies", "Bars"]
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
    .potluck-sheet__signup--dish,
    .potluck-sheet__signup--notes {
        margin: 1rem;
    }

    .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
        border-color: #A0C3CC;
    }

    .potluck-sheet--type-btn {
        min-width: 10rem;
        text-transform: capitalize;

        input[type="text"] {
            border-bottom: none;
            display: none;
        }
    }

    .v-menu__content {
        top: 10px !important;
        left: 0 !important;
    }
</style>