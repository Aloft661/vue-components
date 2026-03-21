<template>
    <div class="home-container">
        <ul>
            <li v-for="item in banners" :key="item.id">
                <img :src="item.midImg" alt="">
                <h2>{{ item.title }}</h2>
                <h3>{{ item.description }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    import { getBanners } from "@/api/banner";

    export default {
        data () {
            return {
                banners: []
            }
        },
        async created () {
            this.banners = await getBanners();
            console.log(this.banners);
        }
    }
</script>

<style>

</style>