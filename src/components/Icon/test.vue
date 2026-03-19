<template>
    <div class="test-container">
        <div class="item" v-for="(item, index) in types" :key="index">
            <Icon :type="item" />
            <label>{{ item }}</label>
        </div>
    </div>
</template>

<script>
    import Icon, { types } from './';
    export default {
        components: {
            Icon
        },
        data () {
            return {
                types
            }
        }
    }
</script>

<style lang="less" scoped>
    .test-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
        width: 580px;
        flex-wrap: wrap;
        .item {
            margin: 1em;
            text-align: center;
            .icon-container {
                display: block;
            }
        }
    }
</style>
