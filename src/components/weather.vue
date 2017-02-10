<template>
    <div class="weather">
        <h1>{{ title }}</h1>
        <!-- <input type="text" v-model="forecast.city"> -->
        <div class="weather">
            <!-- <p>{{ forecast.city }}, {{ forecast.country }}</p>
            <p>{{ formatDate(forecast.date) }}</p>
            <p>{{ forecast.weather }}</p>
            <p>{{ Math.round(forecast.temperature) }} &#0176;C</p> -->
            <input type="text" v-model="forecast.name">
            <p>{{ forecast.name }}</p>
            <p>{{ forecast.dt }}</p>
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
                forecast: [
                    // {
                    //     city: '',
                    //     weather: '',
                    //     temperature: ''
                    // }
                ]
            }
        },

        created: function(){
          this.weather();
        },

        methods: {
            weather: function() {

                this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d55314939b523c73346bafda8fbaadca')
                    .then(function(response) {
                        this.forecast = response.data;
                        // this.forecast.city = response.data.name;
                        // this.forecast.country = response.data.sys.country;
                        // this.forecast.date = response.data.dt;
                        // this.forecast.weather = response.data.weather;
                        // this.forecast.temperature = response.data.main.temp;
                    });
            },

            // formatDate: function(date) {
            //     let theDate = new Date(this.forecast.date * 1000)
            //     let dateString = theDate.toGMTString()
            //     return dateString
            // }
        }
    }
</script>

<style scoped>

</style>
