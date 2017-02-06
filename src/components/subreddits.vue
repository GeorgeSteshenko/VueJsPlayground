<template>
    <fieldset>
        <legend>{{ category | capitalize }}</legend>
        <ul class="item-list">
            <li v-for="post in subreddits">
                <subreddit :item="post"></subreddit>
            </li>
        </ul>
    </fieldset>
</template>

<script>
    import subreddit from 'components/subreddits/subreddit'

    export default {
        name: 'subreddits',
        props: ['category'],

        data() {
            return {
                subreddits: []
            }
        },

        components: {
            subreddit
        },

        filters: {
            capitalize: function(value) {
                if (!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        },

        created: function() {
            this.$http.get('https://www.reddit.com/r/' + this.category + '/top.json?limit=5')
                .then((response) => {
                    this.subreddits = response.data.data.children;
                    // console.log(response.data.data.children);
                });
        }
    }
</script>

<style scoped>
fieldset {
    width: 960px;
    margin-bottom: 20px;
}

legend {
    font-size: 24px;
    padding: 0 20px;
    font-weight: bold;
}

ul {
    list-style: none;
}

li {
    margin: 20px 0;
}
</style>
