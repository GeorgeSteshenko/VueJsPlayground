<template>
    <div class="subreddit">
        <a :href="makeUrl(item.data.permalink)" :style="makeImage(item.data.thumbnail)" tagret="_blank" class="thumb"></a>
        <div>
            <a :href="makeUrl(item.data.permalink)" :title="item.data.title" target="_blank" class="title">
                {{ item.data.title | truncate }}
            </a>
            <div>
                <i class="material-icons">thumbs_up_down</i>{{ item.data.score }}
                <i class="material-icons">forum</i>{{ item.data.num_comments }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'subreddit',

        props: ['item'],

        methods: {
            makeImage: function(img) {
                if (img == "") return "background-image: url('https://placehold.it/100x100/bada55/?text=No+Image')";
                return 'background-image: url('+img+')';
            },
            makeUrl: function(permalink) {
                return 'http://reddit.com'+permalink;
            }
        },

        filters: {
            truncate: function(value) {
                let length = 50;

                if (value.length <= length) {
                    return value;
                } else {
                    return value.substring(0, length) + '...';
                }
            }
        }
    }
</script>

<style scoped>
.subreddit {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
}

a.thumb {
    display: block;
    flex: 0 0 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    border-radius: 10px;
}
</style>
