<template>
    <div class="yesNo">
        <h1>{{ title }}</h1>
        <h2>Ask a question</h2>
        <h5>Must be Yes/No question</h5>
        <input type="text" v-model="question">
        <br><br>
        <h2>{{ answer }}</h2>
        <img v-bind:src="image" alt="">
    </div>


</template>

<script>
    export default {
        name: 'yesNo',

        data() {
            return {
                title: 'Yes No App',
                question: '',
                answer: '',
                image: ''
            }
        },

        watch: {
            question: function(newQuestion) {
                this.answer = 'Wiating for you to stop typing...'
                this.getAnswer()
            }
        },

        methods: {
            getAnswer: _.debounce(
                function() {
                    let vm = this

                    if(this.question.indexOf('?') === -1) {
                        vm.answer = 'Questions usually have a questionmark'
                        return
                    }

                    vm.answer = 'Thinking...'
                    axios.get('https://yesno.wtf/api')
                        .then(function(response){
                            vm.answer = _.capitalize(response.data.answer)
                            vm.image = response.data.image
                        })
                        .catch(function(err){
                            vm.answer = 'Error...' + err
                        })
                }, 500
            )
        }
    }
</script>

<style scoped>
* {
    text-align: center;
}
</style>
