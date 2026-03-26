<template>
    <div class="message-container" ref="messageContainer">
        <MessageArea 
            title="留言板" 
            :subTitle="`(${data.total})`" 
            :isListLoading="isLoading"
            :list="data.rows"
            @submit="handleSubmit"
        />
    </div>
</template>

<script>
    import MessageArea from "@/components/MessageArea";
    import fetchData from "@/mixins/fetchData";
    import mainScroll from "@/mixins/mainScroll";
    import * as messageApi from "@/api/message";

    export default {
        mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
        components: {
            MessageArea
        },
        created () {
            this.$bus.$on("mainScroll", this.handleScroll);
        },
        destroyed () {
            this.$bus.$off("mainScroll", this.handleScroll);
        },
        data () {
            return {
                page: 1,
                limit: 10,
            }
        },
        computed: {
            hasMore () {
                return this.data.rows.length < this.data.total;
            }
        },
        methods: {
            async fetchData () {
                return messageApi.getMessages(this.page, this.limit);
            },
            async handleSubmit (formData, callback) {
                const resp = await messageApi.postMessage({
                    blogId: this.$route.params.id,
                    ...formData
                });
                this.data.rows.unshift(resp);
                this.data.total++;
                callback("评论成功");
            },
            handleScroll (dom) {
                if (this.isLoading || !dom) {
                    return;
                }
                const range = 100;
                const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
                if (dec <= range) {
                    this.fetchMore();
                }
            },
            async fetchMore () {
                if (!this.hasMore) {
                    return;
                }
                this.isLoading = true;
                this.page++;
                const resp = await this.fetchData();
                this.data.total = resp.total;
                this.data.rows = this.data.rows.concat(resp.rows);
                this.isLoading = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .message-container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding: 25px 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    .message-area-container {
        width: 700px;
        margin: 0 auto;
    }
</style>