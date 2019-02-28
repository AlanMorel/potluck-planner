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
                    <v-menu
                      bottom
                      origin="center center"
                      transition="scale-transition"
                    >
                      <v-btn
                        slot="activator"
                        color="#A0C3CC"
                      >
                        Appetizer
                      </v-btn>

                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>Appetizer</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Snack</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Chips & Dip</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Cheese Board</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Finger Food</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
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
                    <v-menu
                      bottom
                      origin="center center"
                      transition="scale-transition"
                    >
                      <v-btn
                        slot="activator"
                        color="#A0C3CC"
                      >
                        Appetizer
                      </v-btn>

                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>Side</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Greens</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Grains</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Salad</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Starch</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Meat</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
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
                    <v-menu
                      bottom
                      origin="center center"
                      transition="scale-transition"
                    >
                      <v-btn
                        slot="activator"
                        color="#A0C3CC"
                      >
                        Appetizer
                      </v-btn>

                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>Main</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Meat</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>red Meat</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Poultry</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Fish</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Vegetarian</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
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
                    <v-menu
                      bottom
                      origin="center center"
                      transition="scale-transition"
                    >
                      <v-btn
                        slot="activator"
                        color="#A0C3CC"
                      >
                        Appetizer
                      </v-btn>

                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>Dessert</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Pie</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Cake</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Ice Cream</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Cookies</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-title>Bars</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
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
                desserts: this.$store.getters.getApps
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
</style>