<template>
    <div>
        <Avatar :url="url" :size="50"/>
    </div>
</template>

<script>
    import Avatar from './';

    export default {
        components: { 
            Avatar
        },
        data () {
            return {
                url: 'https://copyright.bdstatic.com/vcg/creative/7a55323c17ced5b5dfb5ee189a8e4349.jpg@wm_1,k_cGljX2JqaHdhdGVyLmpwZw=='
            }
        }
    }
</script>

<style>

</style>