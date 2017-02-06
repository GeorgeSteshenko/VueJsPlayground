<template>
    <div class="redditapp">
        <h1>{{ title }}</h1>
        <subreddits category="nasa"></subreddits>
        <subreddits category="funny"></subreddits>
        <subreddits category="gifs"></subreddits>
    </div>


</template>

<script>
    import subreddits from 'components/subreddits'

    export default {
        name: 'redditapp',

        components: {
            subreddits
        },

        data() {
            return {
                title: 'Reddit App'
            }
        }
    }
</script>

<style scoped>

</style>
