<template>
  <div>
    <ul>
      <li>首页</li>
      <li>商城</li>
      <li>购物车</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "myfooter",
    data: function() {
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  div{
    width: 250px;
    height: 50px;
    background: hotpink;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li{
    float: left;
    width: 38px;
    height: 30px;
    margin: 10px;
    font-size: 12px;
  }
</style>
