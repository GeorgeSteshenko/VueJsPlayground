<template>
    <div class="weather">
        <h1>{{ title }} for {{ forecast.name }}, {{ forecast.country }}</h1>
        <div class="weather">
            <input type="text" v-model="forecast.name" @input="weather">
            <h2>{{ forecast.name }}, {{ forecast.country }}</h2>
            <h4>{{ Math.round(forecast.temperature) }} &#0176;C</h4>
            <p>{{ formatDate(forecast.dt) }}</p>
            <p>{{ forecast.sys }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather',

        data () {
            return {
                title: 'Weather Forecast',
                forecast: {
                    name: 'London',
                    dt: '',
                    country: '',
                    temperature: ''
                }
            }
        },

        created: function(){
          this.weather();
        },

        methods: {
            weather: _.debounce(
                function() {
                    this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.forecast.name+'&units=metric&APPID=d55314939b523c73346bafda8fbaadca')
                        .then(function(response) {
                            this.forecast = response.data;
                            this.forecast.country = response.data.sys.country;
                            this.forecast.temperature = response.data.main.temp;
                        });
                },
            1000),

            formatDate: function(date) {
                let theDate = new Date(this.forecast.dt * 1000)
                let dateString = theDate.toGMTString()
                return dateString
            }
        }
    }
</script>

<style scoped>

</style>
