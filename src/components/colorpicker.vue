<template>
    <div class="colorpicker" :style="bgColor">
        <h1>{{ title }}</h1>
        <input type="color" v-model="bgColor.backgroundColor">
    </div>
</template>

<script>
    export default {
        name: 'colorpicker',

        data() {
            return {
                title: 'Pick a color for background',
                bgColor: {
                    backgroundColor: '#bada55'
                }
            }
        }
    }
</script>

<style scoped>
.colorpicker {
    width: 100%;
    height: 500px;
    text-align: center;
    padding: 100px 0;
}
</style>
