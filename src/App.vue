<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .el-menu {
        background: white;
        text-align: center
    }

</style>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                 activeIndex: '1'
            }
        },

        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
