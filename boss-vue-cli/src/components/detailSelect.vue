<template>
  	<ul class="bar-select">
  	<li>经验
  		<span class="icon iconfont icon-select-arrow"></span>
  	</li>
  	<li>学历
  		<span class="icon iconfont icon-select-arrow"></span>
  	</li>
  	<li>薪资
  		<span class="icon iconfont icon-select-arrow"></span>
  	</li>
  	<li>规模
  		<span class="icon iconfont icon-select-arrow"></span>
  	</li>
  	<li>融资
  		<span class="icon iconfont icon-select-arrow"></span>
  	</li>
  </ul>
</template>

<script>
  export default{
    name:"detailSelect",
    data:function(){
      return{

      }
    }
  }
</script>

<style scoped="scoped">
  .bar-select{
  	width: 100%;
  	height: 36px;
  	border-bottom: 1px solid lightgray;
  	display: flex;
  }
  .bar-select li{
  	flex: 1;
  	text-align: center;
  	color: #AAAAAA;
  	font-size: 12px;
  	line-height: 36px;
  	border: none;
  }
</style>
