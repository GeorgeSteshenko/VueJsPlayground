<template>
    <div class="container">
        <div class="jumbotron">
            <h1>{{ title }} for {{ forecast.name }}, {{ forecast.country }}</h1>
            <!-- {{ cities }} -->
            <!-- <input type="text" v-model="filterInput">
            <ul>
                <li v-for="city in filterBy(cities, filterInput)">
                    {{ city.name }}, {{ city.country }}
                </li>
            </ul> -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <form class="form-inline" @submit.prevent="weather">
                        <input type="text" class="form-control" placeholder="Search for..." v-model.lazy="userLocation.city">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="weather">Get Weather</button>
                            </span>
                        </form>
                    </div>
                    <hr>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ forecast.name }}, {{ forecast.country }}</h3>
                        </div>
                        <div class="panel-body">
                            <h1>{{ Math.round(forecast.temperature) }}&#0176;C</h1>
                            <h1><span :class="'icon-'+forecast.weather.iconId"></span> <small>{{ forecast.weather.main }}</small></h1>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item lead text-capitalize"><b>date:</b> {{ formatDate(forecast.dt) }}</li>
                            <li class="list-group-item lead text-capitalize"><b>description:</b> {{ forecast.weather.description }}</li>
                            <li class="list-group-item lead"><b>Pressure:</b> <i class="wi wi-barometer"></i> {{ forecast.pressure }} hPa</li>
                            <li class="list-group-item lead"><b>Humidity:</b> <i class="wi wi-humidity"></i> {{ forecast.humidity }}</li>
                            <li class="list-group-item lead">
                                <b>Wind:</b> <i class="wi wi-strong-wind"></i> {{ forecast.wind }} meter/sec,
                                it's {{ toKmHr(forecast.wind) }} km/Hr <i class="wi wi-train"></i>
                            </li>
                            <li class="list-group-item lead"><b>Sunrise:</b> <i class="wi wi-sunrise"></i> {{ formatTime(forecast.sunrise) }}</li>
                            <li class="list-group-item lead"><b>Sunset:</b> <i class="wi wi-sunset"></i> {{ formatTime(forecast.sunset) }}</li>
                        </ul>
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
                // cities: [],
                // filterInput: '',
                userLocation: {
                    city: '',
                    countryCode: ''
                },
                forecast: {
                    dt: '',
                    country: '',
                    temperature: '',
                    pressure: '',
                    humidity: '',
                    wind: '',
                    sunrise: '',
                    sunset: '',
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
            this.getUserLocation();
            this.weather();
            // this.getCitiesList();
        },

        methods: {
            getUserLocation:
                function() {
                    this.$http.get('http://ip-api.com/json')
                        .then(function(response) {
                            this.userLocation.city = response.body.city;
                            this.userLocation.countryCode = response.body.countryCode;
                            this.weather();
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                },

            weather: _.debounce(
                function() {
                    let apiWeather = 'http://api.openweathermap.org/data/2.5/weather?q='
                    let location = this.userLocation.city + ','
                    let countryCode = this.userLocation.countryCode
                    let units = '&units=metric'
                    let apiKey = '&APPID=d55314939b523c73346bafda8fbaadca'
                    this.$http.get(apiWeather + location + countryCode + units + apiKey)
                        .then(function(response) {
                            this.forecast = response.data;
                            this.forecast.country = response.data.sys.country;
                            this.forecast.temperature = response.data.main.temp;
                            this.forecast.pressure = response.data.main.pressure;
                            this.forecast.humidity = response.data.main.humidity;
                            this.forecast.wind = response.data.wind.speed;
                            this.forecast.weather.main = response.data.weather[0].main;
                            this.forecast.weather.description = response.data.weather[0].description;
                            this.forecast.weather.iconId = response.data.weather[0].icon;
                            this.forecast.sunrise = response.data.sys.sunrise;
                            this.forecast.sunset = response.data.sys.sunset;
                        });
                }, 300
            ),

            // getCitiesList:
            //     function() {
            //     this.$http.get('http://data.okfn.org/data/core/world-cities/r/world-cities.json')
            //         .then(function(response) {
            //             this.cities = response.body;
            //         });
            // },

            // filterBy(list, value) {
            //     return list.filter(function(city){
            //         return city.name.indexOf(value) > -1;
            //     });
            // },

            formatDate: function(date) {
                let theDate = new Date(date * 1000).toLocaleString()
                return theDate
            },

            formatTime: function(time) {
                let theTime = new Date(time * 1000).toLocaleTimeString()
                return theTime
            },

            toKmHr: function(speed) {
                let theSpeed = Math.round(speed * 3.6)
                return theSpeed
            }
        }
    }
</script>

<style scoped>
hr {
    border-color: #ccc;
}
form {
    display: table-row;
}
.panel-body h1 {
    display: inline-block;
}
.panel-body h1 span {
    padding-left: 10px;
}
[class*='icon'] {
    font-family: 'weathericons';
}
.icon-01d:before {content: '\f00d'}
.icon-02d:before {content: '\f00c'}
.icon-03d:before {content: '\f041'}
.icon-04d:before {content: '\f013'}
.icon-09d:before {content: '\f019'}
.icon-10d:before {content: '\f008'}
.icon-11d:before {content: '\f01e'}
.icon-13d:before {content: '\f01b'}
.icon-50d:before {content: '\f003'}
.icon-01n:before {content: '\f02e'}
.icon-02n:before {content: '\f086'}
.icon-03n:before {content: '\f041'}
.icon-04n:before {content: '\f041'}
.icon-09n:before {content: '\f037'}
.icon-10n:before {content: '\f028'}
.icon-11n:before {content: '\f03b'}
.icon-13n:before {content: '\f02a'}
.icon-50n:before {content: '\f04a'}
</style>
