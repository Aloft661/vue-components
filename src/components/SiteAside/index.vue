<template>
    <div class="site-aside-container">
        <Avatar 
            :url="url"
        />
        <h1 class="title">龙傲天的小窝</h1>
        <Menu />
        <Contact />
        <p class="footer"></p>
    </div>
</template>

<script>
    import Avatar from '@/components/Avatar/index.vue';
    import Menu from './Menu';
    import Contact from './Contact';
    export default {
        components: {
            Avatar,
            Menu,
            Contact,
        },
        data () {
            return {
                url: 'https://copyright.bdstatic.com/vcg/creative/7a55323c17ced5b5dfb5ee189a8e4349.jpg@wm_1,k_cGljX2JqaHdhdGVyLmpwZw=='
            }
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