<template>
  <div class="footer">
  	<div class="footer-btn">
  		<img src="img/p.png" >
  		<p>职位</p>
  	</div>
  	<div class="footer-btn">
  		<img src="img/f.png" >
  		<p>公司</p>
  	</div>
  	<div class="footer-btn">
  		<img src="img/m.png" >
  		<p>消息</p>
  	</div>
  	<div class="footer-btn">
  		<img src="img/me.png" >
  		<p>我的</p>
  	</div>
  </div>
</template>

<script>
  export default{
    name:"detailFooter",
    data:function(){

    }
  }
</script>

<style scoped="scoped">
.footer{
	background: #ffffff;
	width: 100%;
	height: 50px;
	border-top: 1px solid gray;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.footer-btn{
	font-size: 14px;
	color: #666666;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.footer-btn img{
	display: block;
	width: 30px;
	height: 30px;
}

</style>
