<template>
  <div class="top_wrapper">
    <div class="flex justify-between align-center content">
      <h3>您好！欢迎进入星星租租赁平台。</h3>
      <div class="top_links">
        <el-link :underline="false">无下划线</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.top_wrapper {
  height: $header-height;
  background: #f1f1f1;
  box-shadow: 0px 1px 0px 0px #e6e6e6;
  .content {
    width: $content-width;
  }
}
</style>
