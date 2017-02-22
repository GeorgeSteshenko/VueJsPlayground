<template>
    <div class="monsterslayer">

        <div class="container">
            <h1>{{ title }}</h1>
            <div class="row">
                <div class="col-lg-6">
                    <fieldset>
                        <legend>Player Health</legend>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success progress-bar-striped active"
                                 role="progressbar"
                                 aria-valuemin="0"
                                 aria-valuemax="100"
                                 :aria-valuenow="playerHealth"
                                 :style="{width: playerHealth + '%'}">
                                {{ playerHealth }}%
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-lg-6">
                    <fieldset>
                        <legend>Monster Health</legend>
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger progress-bar-striped active"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            :aria-valuenow="monsterHealth"
                            :style="{width: monsterHealth + '%'}">
                            {{ monsterHealth }}%
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <section class="row" v-if="!gameIsRunning">
                <hr>
                <p class="text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="startGame">Start New Game</button>
                </p>
            </section>
            <section class="row" v-else>
                <hr>
                <p class="text-center">
                    <button type="button" class="btn btn-danger btn-lg"  @click="attack">Attack</button>
                    <button type="button" class="btn btn-warning btn-lg" @click="specialAttack">Special Atrack</button>
                    <button type="button" class="btn btn-success btn-lg" @click="heal">Heal</button>
                    <button type="button" class="btn btn-default btn-lg" @click="giveUp">Give Up</button>
                </p>
            </section>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'monsterslayer',

        data () {
            return {
                title: 'Monster Slayer',
                playerHealth: 100,
                monsterHealth: 100,
                gameIsRunning: false
            }
        },

        methods: {
            startGame: function() {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
            },
            attack: function() {
                let max = 10
                let min = 3
                let damage = Math.max(Math.floor(Math.random() * max) + 1, min)
                this.monsterHealth -= damage

                if (this.monsterHealth <= 0) {
                    console.log('You won!');
                    this.gameIsRunning = false;
                    return;
                }

                max = 12
                min = 5
                damage = Math.max(Math.floor(Math.random() * max) + 1, min)
                this.playerHealth -= damage

                if (this.playerHealth <= 0) {
                    console.log('You won!');
                    this.gameIsRunning = false;
                    return;
                }
            },
            specialAttack: function() {

            },
            heal: function() {

            },
            giveUp: function() {

            },
        }
    }
</script>

<style scoped>
</style>
