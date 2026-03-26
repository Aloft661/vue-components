<template>
    <div class="site-aside-container">
        <Avatar :url="url"/>
        <h1 class="title" v-if="data">{{ data.siteTitle }}</h1>
        <Menu />
        <Contact v-if="data"/>
        <p class="footer" v-if="data">{{ data.icp }}</p>
    </div>
</template>

<script>
    import Avatar from '@/components/Avatar/index.vue';
    import Menu from './Menu';
    import Contact from './Contact';
    import avatar from '@/assets/avatar.jpg';
    import { mapState } from "vuex"
    export default {
        components: {
            Avatar,
            Menu,
            Contact,
        },
        data () {
            return {
                url: avatar
            }
        },
        computed: {
            ...mapState("setting", ["data"])
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    .site-aside-container {
        width: 100%;
        height: 100%;
        background: @dark;
        padding: 20px 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .avatar-container {
        margin: 0 auto;
    }
    .footer {
        text-align: center;
        font-size: 12px;
    }
    .title {
        font-size: 1.2em;
        color: #fff;
        text-align: center;
    }
</style>