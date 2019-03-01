<template>
    <section>
        <section class="banner">
            <img :src="getImage(banner)">
        </section>
        <InfoBox />
        <section class="potluck-sheet form-container">
            <div class="potluck-sheet__section">
                <h3 class="potluck-sheet__header">Apps & Snacks</h3>
                <span class="potluck-sheet__header-note">Recommended Serving Size 10-20</span>
                <ul>
                    <li v-for="(app, index) in this.apps" class="potluck-sheet__signup">
                        <div class="potluck-sheet__signup--counter"><span>{{index + 1}}</span></div>
                        <div class="potluck-sheet__signup--name form-element">
                            <input type="text" name="guestName" placeholder="Name" :value="apps[index].name">
                        </div>
                        <div class="potluck-sheet__signup--dish form-element">
                            <input type="text" name="dishName" id="dishName" :value="apps[index].dish" placeholder="Dish">
                        </div>
                        <v-btn
                          color="#A0C3CC"
                          v-on:click="linkRecipe()"
                          flat
                          icon
                          class="potluck-sheet--link-btn"
                        >
                          <v-icon>link</v-icon>
                        </v-btn>
                          <v-select
                            item-text="Appetizer"
                            item-value="Appetizer"
                            :value="apps[index].type"
                            :items="appTypes"
                            class="potluck-sheet--type-btn"
                          ></v-select>
                        <div class="potluck-sheet__signup--notes form-element">
                            <input type="text" name="notes" placeholder="Notes">
                        </div>
                        <v-btn
                            v-on:click="deleteRow('apps', index)"
                            color="#A0C3CC"
                            flat
                            icon
                            class="potluck-sheet--delete-btn"
                        >
                          <v-icon>delete</v-icon>
                        </v-btn>
                    </li>
                    <li class="potluck-sheet__signup" >
                        <v-btn
                            v-on:click="addRow('apps')"
                          color="#A0C3CC"
                          dark
                          depressed
                          small
                          fab
                          class="potluck-sheet--add-btn"
                        >
                          <v-icon>add</v-icon>
                        </v-btn>
                        <div class="potluck-sheet__signup-add-text">Add a New Dish</div>
                    </li>
                </ul>
            </div>
            <div class="potluck-sheet__section">
                <h3 class="potluck-sheet__header">Sides</h3>
                <span class="potluck-sheet__header-note">Recommended Serving Size 4-6</span>
                <ul>
                    <li v-for="(side, index) in this.sides" class="potluck-sheet__signup">
                        <div class="potluck-sheet__signup--counter"><span>{{index + 1}}</span></div>
                        <div class="potluck-sheet__signup--name form-element">
                            <input type="text" name="guestName" placeholder="Name" :value="sides[index].name">
                        </div>
                        <div class="potluck-sheet__signup--dish form-element">
                            <input type="text" name="dishName" id="dishName" placeholder="Dish" :value="sides[index].dish">
                        </div>
                        <v-btn
                          color="#A0C3CC"
                          v-on:click="linkRecipe()"
                          flat
                          icon
                          class="potluck-sheet--link-btn"
                        >
                          <v-icon>link</v-icon>
                        </v-btn>
                        <v-select
                            item-text="Sides"
                            item-value="Sides"
                            :items="sideTypes"
                            :value="sides[index].type"
                            class="potluck-sheet--type-btn"
                          ></v-select>
                        <div class="potluck-sheet__signup--notes form-element">
                            <input type="text" name="notes" placeholder="Notes">
                        </div>
                        <v-btn
                            v-on:click="deleteRow('sides', index)"
                            color="#A0C3CC"
                            flat
                            icon
                            class="potluck-sheet--delete-btn"
                        >
                          <v-icon>delete</v-icon>
                        </v-btn>
                    </li>
                    <li class="potluck-sheet__signup" >
                        <v-btn
                            v-on:click="addRow('sides')"
                          color="#A0C3CC"
                          dark
                          depressed
                          small
                          fab
                          class="potluck-sheet--add-btn"
                        >
                          <v-icon>add</v-icon>
                        </v-btn>
                        <div class="potluck-sheet__signup-add-text">Add a New Dish</div>
                    </li>
                </ul>
            </div>
            <div class="potluck-sheet__section">
                <h3 class="potluck-sheet__header">Mains</h3>
                <span class="potluck-sheet__header-note">Recommended Serving Size 10-12</span>
                <ul>
                    <li v-for="(main, index) in this.mains" class="potluck-sheet__signup">
                        <div class="potluck-sheet__signup--counter"><span>{{index + 1}}</span></div>
                        <div class="potluck-sheet__signup--name form-element">
                            <input type="text" name="guestName" placeholder="Name" :value="mains[index].name">
                        </div>
                        <div class="potluck-sheet__signup--dish form-element">
                            <input type="text" name="dishName" id="dishName" placeholder="Dish" :value="mains[index].dish">
                        </div>
                        <v-btn
                          color="#A0C3CC"
                          v-on:click="linkRecipe()"
                          flat
                          icon
                          class="potluck-sheet--link-btn"
                        >
                          <v-icon>link</v-icon>
                        </v-btn>
                        <v-select
                            item-text="Mains"
                            item-value="Mains"
                            :items="mainTypes"
                            :value="mains[index].type"
                            class="potluck-sheet--type-btn"
                          ></v-select>
                        <div class="potluck-sheet__signup--notes form-element">
                            <input type="text" name="notes" placeholder="Notes">
                        </div>
                        <v-btn
                            v-on:click="deleteRow('mains', index)"
                            color="#A0C3CC"
                            flat
                            icon
                            class="potluck-sheet--delete-btn"
                        >
                          <v-icon>delete</v-icon>
                        </v-btn>
                    </li>
                    <li class="potluck-sheet__signup" >
                        <v-btn
                            v-on:click="addRow('mains')"
                          color="#A0C3CC"
                          dark
                          depressed
                          small
                          fab
                          class="potluck-sheet--add-btn"
                        >
                          <v-icon>add</v-icon>
                        </v-btn>
                        <div class="potluck-sheet__signup-add-text">Add a New Dish</div>
                    </li>
                </ul>
            </div>
            <div class="potluck-sheet__section">
                <h3 class="potluck-sheet__header">Desserts</h3>
                <span class="potluck-sheet__header-note">Recommended Serving Size 6-8</span>
                <ul>
                    <li v-for="(dessert, index) in this.desserts" class="potluck-sheet__signup">
                        <div class="potluck-sheet__signup--counter"><span>{{index + 1}}</span></div>
                        <div class="potluck-sheet__signup--name form-element">
                            <input type="text" name="guestName" placeholder="Name" :value="desserts[index].name">
                        </div>
                        <div class="potluck-sheet__signup--dish form-element">
                            <input type="text" name="dishName" id="dishName" placeholder="Dish" :value="desserts[index].dish">
                        </div>
                        <v-btn
                          color="#A0C3CC"
                          v-on:click="linkRecipe()"
                          flat
                          icon
                          class="potluck-sheet--link-btn"
                        >
                          <v-icon>link</v-icon>
                        </v-btn>
                        <v-select
                            item-text="Desserts"
                            item-value="Desserts"
                            :items="dessertTypes"
                            :value="desserts[index].type"
                            class="potluck-sheet--type-btn"
                          ></v-select>
                        <div class="potluck-sheet__signup--notes form-element">
                            <input type="text" name="notes" placeholder="Notes">
                        </div>
                        <v-btn
                            v-on:click="deleteRow('desserts', index)"
                            color="#A0C3CC"
                            flat
                            icon
                            class="potluck-sheet--delete-btn"
                        >
                          <v-icon>delete</v-icon>
                        </v-btn>
                    </li>
                    <li class="potluck-sheet__signup" >
                        <v-btn
                            v-on:click="addRow('desserts')"
                            color="#A0C3CC"
                            dark
                            depressed
                            small
                            fab
                            class="potluck-sheet--add-btn"
                        >
                          <v-icon>add</v-icon>
                        </v-btn>
                        <div class="potluck-sheet__signup-add-text">Add a New Dish</div>
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>

<script>
    import InfoBox from "@/components/InfoBox.vue";

    export default {
        name: "PotluckSheet",
        components: {
            InfoBox
        },
        data() {
            return {
                appTypes: ["App", "Snacks", "Chips & Dip", "Cheeseboard", "Hors d'oeuvres"],
                sideTypes: ["Side", "Greens", "Grains", "Salad", "Meat", "Starch"],
                mainTypes: ["Main", "Meat", "Red Meat", "Poultry", "Fish", "Vegetarian"],
                dessertTypes: ["Dessert", "Pie", "Cake", "Ice Cream", "Cookies", "Bars"]
            }
        },
        computed: {
            banner() {
                return this.$store.getters.getBanner;
            },
            sides() {
                return this.$store.getters.getSides;
            },
            apps() {
                return this.$store.getters.getApps;
            },
            mains() {
                return this.$store.getters.getMains;
            },
            desserts() {
                return this.$store.getters.getDesserts;
            }
        },
        methods: {
            addRow(type) {
                var dishes = this[type];
                dishes.push({
                    "name" : "",
                    "type" : "",
                    "dish" : ""
                });
                this.$store.commit("update" + type, dishes);
            },
            deleteRow(type, index) {
                var dishes = this[type];
                dishes.splice(index,1);
                this.$store.commit("update" + type, dishes);
            },
            getImage(path) {
                return require('../assets/' + path);
            },
            linkRecipe() {
                var query = document.getElementById("dishName").value;
                window.open("https://www.thespruceeats.com/search?q=" + query, '_blank');
            }
        }
    }
</script>

<style lang="scss">
    .potluck-sheet {
        position: relative;
        margin-top: -6rem;
    }

    .potluck-sheet__signup {
        display: flex;
    }

    .potluck-sheet__section {
        margin-top: 2rem;
    }

    .potluck-sheet__signup--name,
    .potluck-sheet__signup--type,
    .potluck-sheet__signup--dish,
    .potluck-sheet__signup--notes,
    .potluck-sheet__signup--counter {
        margin: 1rem;
    }

    .potluck-sheet__signup--dish {
        margin-right: 0;
    }

    .potluck-sheet__signup--counter {
        line-height: 2.5rem;
        font-size: 1rem;
        color: #6495A3;
        margin-right: 0;
    }

    .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
        border-color: #cbd7e3;
    }

    .theme--light.v-text-field > .v-input__control > .v-input__slot:hover:before {
        border-color: #256cb3;
    }

    .v-text-field__details {
        display: none;
    }

    .v-input__slot {
        margin-bottom: 0;
        height: 35px;
    }

    .v-input {
        font-size: 14px;
    }

    .potluck-sheet--add-btn,
    .potluck-sheet--link-btn {
        &.v-btn--floating.v-btn--small, {
            width: 30px;
            height: 30px;
        }
    }

    .potluck-sheet__header-note {
        color: #8e8e8e;
        margin-left: 20px;
    }

    .potluck-sheet__header {
        display: inline-block;
    }

    .potluck-sheet--link-btn {
        margin: 0;
        margin-top: 0.8rem;
        transform: translateX(-30px);
    }

    .v-icon {
       .potluck-sheet--delete-btn &,
       .potluck-sheet--link-btn & {
        font-size: 20px;
       }
    }

    .potluck-sheet--delete-btn {
        margin-left: 0;
        margin-top: 1.5rem;
    }

    .potluck-sheet__signup-add-text {
        line-height: 44px;
        color: #8e8e8e;
    }

    .potluck-sheet--type-btn {
        min-width: 7rem;
        text-transform: capitalize;
        height: 35px;
        margin: 1rem;
        margin-top: 0.84rem;
        padding-top: 0;
        margin-left: 0;

        input[type="text"] {
            border-bottom: none;
            display: none;
        }
    }

    .v-menu__content {
        top: 10px !important;
        left: 0 !important;
    }

    .banner {
        position: relative;
        overflow: hidden;
        height: 24rem;
        margin-bottom: 2rem;

        img {
            width: 100%;
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
        }
    }
</style>
