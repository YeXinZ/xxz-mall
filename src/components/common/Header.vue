<template>
  <div class="top_wrapper">
    <div class="flex justify-between align-center m-auto content">
      <h5>您好！欢迎进入星星租租赁平台。</h5>
      <div class="flex align-center top_links">
        <p>
          <el-link :underline="false">请登录</el-link>
          <el-link style="margin-left:20px;" :underline="false">注册</el-link>
        </p>
        <p>
          <el-link :underline="false">我的订单</el-link>
          <el-link style="margin-left:20px;" :underline="false">帮助中心</el-link>
        </p>
        <p>
          <span>客服热线：</span>
          <el-link class="bold-font" :underline="false">400-686-8341</el-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
    height: 100%;
    color: #666666;
  }
  h5{
    margin: 0;
    color: #666666;
    font-size: 14px;
  }
}
.top_links{
  p{
    padding: 0 10px;
    font-size: 14px;
    &:not(:first-child){
      border-left: 1px solid #dddddd;
    }

  }
}
</style>
