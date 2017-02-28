<template>
    <div class="test">
        <input type="text" v-model="title">
        <br>
        <h1>{{ title }}</h1>
        <p v-if="showName">{{ user.firstName }}</p>
        <ul>
            <li v-for="item in items">{{ item.title }}</li>
        </ul>
        <button v-on:click="greet('Hello World!')">Say Greeting</button>
        <br>
        <input type="text" @keyup="pressKey" @keyup.enter="enterHit">
        <br>
        <hr>
        <br>
        <label>First Name:</label><input type="text" v-model="user.firstName"><br>
        <label>Last Name:</label><input type="text" v-model="user.lastName"><br>
        <h3>{{ fullName }}</h3>
        <h2>{{ msg }}</h2>
        <hr>
        <input type="text" name="" value="" v-model="city" @input="getList">
        <ul>
            <li v-for="city in suggestions">
                <a>{{ city }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'test',

        props: {
            msg: {
                type: String,
                default: 'WTF'
            }
        },

        data() {
            return {
                title: 'Hello',
                user: {
                    firstName: 'Yegor',
                    lastName: 'Steshenko'
                },
                showName: true,
                items: [
                    { title: 'Item One' },
                    { title: 'Item Two' },
                    { title: 'Item Three' }
                ],
                city: '',
                suggestions: []
            }
        },

        methods: {
            greet: function(greeting) {
                alert(greeting);
            },
            pressKey: function(e) {
                console.log(e.target.value);
            },
            enterHit: function() {
                console.log('You hit Enter');
            },

            getList: function() {
                if (this.city.length >= 3) {
                    this.$jsonp('http://autocompletecity.geobytes.com/AutoCompleteCity', {template: '<geobytes CityName>, <geobytes internet>',q: this.city}).then(json => {
                            this.suggestions = json;
                        }, json => {})
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    this.suggestions = false;
                }
            }
        },

        computed: {
            fullName: function() {
                return this.user.firstName + ' ' + this.user.lastName
            },

        }
    }
</script>

<style scoped>

</style>
