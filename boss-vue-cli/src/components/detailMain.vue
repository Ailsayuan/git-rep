<template>
  <div class="main">
    <ul>
    	<li class="item">
    		<a href="#" class="item-a">
    			<img src="../assets/img/d0.jpg"  class="item-left">
    			<div class="item-right">
    				<div class="item-title">
    					<h4>web前端</h4>
    					<span class="salary">8-12K</span>
    				</div>
    				<div class="name">亚创科技</div>
    				 <div class="msg">
    					 <span>西安</span>
    					 <span>3-5年</span>
    					 <span>大专</span>
    				 </div>
    			</div>
    		</a>
    	</li>
      </ul>
  </div>
</template>

<script>
  export default{
    name:"detailMain",
    data:function(){
      return{

      }
    }
  }
</script>

<style scoped="scoped">
.main{
	width: 335px;
	height: 500px;
	margin: 0 auto;
	overflow-y:auto;
}

.item-a{
	display: block;
	color: #414A60;
	width: 335px;
	height: 91;
}

.item-left{
	float: left;
	width: 60px;
	height: 60px;
	margin-top: 16px;
}
.item-right{
	float: right;
	width: 260px;
}

.item-title h4{
	float: left;
	width: 189px;
	padding-top: 18px;
	line-height: 15px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.salary{
	float: right;
	width: 70px;
	height: 32px;
	font-size: 17px;
	color: orange;
	text-align: center;
	overflow: hidden;
}
.name{
	width: 260px;
	height: 28px;
	font-size: 12px;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 19px;
}
.msg{
	font-size: 12px;
	color: #8892AC;
}
.msg span{
	display: inline-block;
	margin-right: 18px;
}
</style>
