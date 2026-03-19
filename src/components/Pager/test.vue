<template>
  <div>
    <Pager :total="total" :current="current" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
  import Pager from './index';

  export default {
    components: {
      Pager
    },
    data() {
      return {
        current: 1,
        total: 302
      }
    },
    methods: {
      handlePageChange (newPage) {
        this.current = newPage;
      }
    }
  }
</script>

<style lang="less" scoped>

</style>