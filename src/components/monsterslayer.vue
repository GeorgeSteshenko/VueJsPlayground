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
            <section class="row" v-if="turns.length > 0">
                <h2>Game Log:</h2>
                <hr>
                <ul class="list-group">
                    <li v-for="turn in turns" class="list-group-item" :class="{'text-right disabled': !turn.isPlayer}">
                        {{ turn.text }}
                    </li>
                </ul>
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
                gameIsRunning: false,
                turns: []
            }
        },

        methods: {
            startGame: function() {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.turns = [];
            },
            attack: function() {
                let damage = this.calcDamage(3, 10)
                this.monsterHealth -= damage
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster for ' + damage + 'HP'
                });
                if (this.checkWin()) {
                    return;
                }
                this.monsterAttacks();
            },
            specialAttack: function() {
                let damage = this.calcDamage(10, 20)
                this.monsterHealth -= damage
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster HARD for ' + damage + 'HP'
                });
                if (this.checkWin()) {
                    return;
                }
                this.monsterAttacks();
            },
            heal: function() {
                if (this.playerHealth <= 90) {
                    this.playerHealth += 10;
                } else {
                    this.playerHealth = 100;
                }
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for +10HP'
                });
                this.monsterAttacks();
            },
            giveUp: function() {
                this.gameIsRunning = false;
            },
            monsterAttacks: function() {
                let damage = this.calcDamage(5, 12)
                this.playerHealth -= damage
                this.checkWin();
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for ' + damage + 'HP'
                });
            },
            calcDamage: function(min, max) {
                return Math.max(Math.floor(Math.random() * max) + 1, min);
            },
            checkWin: function() {
                if (this.monsterHealth <= 0) {

                    if (confirm('You Won! New game?')) {
                        this.startGame()
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;

                } else if (this.playerHealth <= 0) {

                    if (confirm('You Lost! New game?')) {
                        this.startGame()
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;

                }
                return false;
            }
        }
    }
</script>

<style scoped>
</style>
