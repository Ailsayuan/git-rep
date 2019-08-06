<template>
<div class="search-bar">
			<img src="img/icon-home.png">
			<span class="span-search">
				<span>西安</span>
				<span class="icon iconfont icon-select-arrow"></span>
				<input type="text" placeholder="web前端">
			</span>
			<!-- <input type="button" value="搜索" class="btn-search"> -->
			<button type="button" class="btn-search">搜索</button>
</div>
</template>

<script>
  export default{
    name:"detailHeader",
    data:function(){
      return{

      }
    }
  }
</script>

<style scoped="scoped">
  .search-bar{
  	width: 100%;
  	height: 55px;
  	padding-top: 13px;
  	border-bottom: 1px solid gray;
  }
  .search-bar img{
  	width: 18px;
  	height: 18px;
  	margin-left: 18px;
  	margin-right: 8px;
  	vertical-align: middle;
  }
  .span-search{
  	display: inline-block;
  	width: 250px;
  	height: 20px;
  	padding-top: 5px;
  	padding-bottom: 5px;
  	padding-right: 12px;
  	vertical-align: middle;
  	text-indent: 10px;
  	border-radius: 15px;
  	background: #f4f7f9;
  }
  .span-search span:first-child{
  	font-size: 12px;
  }
  .span-search .icon-select-arrow{
  	font-size: 6px;
  }
  .span-search input{
  	border: none;
  	background: #f4f7f9;
  }
  .btn-search{
  	display: inline-block;
  	width: 59px;
  	height: 55px;
  	color: #1AC9C7;
  	border: none;
  	outline: none;
  	background: white;
  	text-align: center;
  	padding: 0;
  }

</style>
