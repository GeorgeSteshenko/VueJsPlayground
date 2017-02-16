<template>
    <div class="container">
        <div class="jumbotron">
            <h1>{{ title }} for {{ forecast.name }}, {{ forecast.country }}</h1>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." v-model.lazy="forecast.name">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" @click="weather">Show</button>
                        </span>
                    </div>
                    <hr>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ forecast.name }}, {{ forecast.country }}</h3>
                        </div>
                        <div class="panel-body">
                            <p>
                                {{ Math.round(forecast.temperature) }} &#0176;C
                                <span :class="'icon-'+forecast.weather.iconId"></span>
                            </p>
                            <p>{{ formatDate(forecast.dt) }}</p>
                            <p>{{ forecast.weather.main }}</p>
                            <p>{{ forecast.weather.description }}</p>
                            <p>{{ forecast.weather.iconId }}</p>
                            <p>{{ forecast.sys }}</p>
                        </div>
                    </div>
                </div>
            </div>
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
                    temperature: '',
                    weather: [
                        {
                            main: '',
                            description: '',
                            iconId: ''
                        }
                    ]
                }
            }
        },

        created: function(){
          this.weather();
        },

        methods: {
            weather:
                function() {
                    this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.forecast.name+'&units=metric&APPID=d55314939b523c73346bafda8fbaadca')
                        .then(function(response) {
                            this.forecast = response.data;
                            this.forecast.country = response.data.sys.country;
                            this.forecast.temperature = response.data.main.temp;
                            this.forecast.weather.main = response.data.weather[0].main;
                            this.forecast.weather.description = response.data.weather[0].description;
                            this.forecast.weather.iconId = response.data.weather[0].icon;
                        });
                },

            formatDate: function(date) {
                let theDate = new Date(this.forecast.dt * 1000)
                let dateString = theDate.toGMTString()
                return dateString
            }
        }
    }
</script>

<style scoped>
hr {
    border-color: #ccc;
}
</style>
