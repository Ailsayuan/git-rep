<template>
  <div class="header">
      <div class="home-banner"></div>
      <div class="header-box">
        <input type="text" class="input-search" placeholder="搜索职位/公司">
        <input type="button" value="搜索" class="btn-search">
      </div>
  </div>
</template>

<script>
  export default{
  name:"bossHeader",
  data:function(){
    return{

    }
  }
  }
</script>

<style scoped="scoped">
.header{
	width: 100%;
  background: url(../assets/img/home-bg.png) center 38px no-repeat;
	background-size: cover;
  height: 196px;
}
.home-banner{
	background: url(../assets/img/home-search-text.png) center 38px no-repeat;
	background-size: 252px auto;
	height: 138px;
}
.header-box{
	margin-left: 15px;
	margin-right: 15px;
	position: relative;
}
.input-search{
	width: 300px;
	height: 37px;
	border: 0;
	border-radius: 20px;
	padding-left:20px;
}
.btn-search{
	width: 60px;
	height: 34px;
	background: white;
	border: 0;
	position: absolute;
	left: 245px;
	color: #5bd4c7;
}
</style>
