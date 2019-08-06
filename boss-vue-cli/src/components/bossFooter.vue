<template>
  <div class="footer">
    <div class="footer-left">
    	<img src="../assets/img/logo-x.png">
    	<p>找工作要跟<br>老板谈</p>
    </div>
    <a href="register.html"><span class="span-res">立即注册</span></a>
  </div>
</template>

<script>
 export default{
   name:"bossFooter",
   data:function(){
    return{

    }
   }
 }
</script>

<style scoped="scoped">
.footer{
	background: #1ac9c7;
	width: 100%;
	height: 57px;
}
.footer-left{
	float: left;
	width: 252.2px;
	margin-left: 18px;
}
.footer img{
	width: 42px;
	height: 42px;
	margin-right: 10px;
	margin-top: 7px;
}
.footer p{
	display: inline-block;
	font-size: 14px;
	color: #f8fefd;
	line-height: 23px;
	vertical-align:5px;
}
.footer span{
	float: right;
	width: 81px;
	height: 32px;
	background: white;
	color: #7dddd5;
	margin: 12px 18px 0 0;
	border-radius: 15px;
	font-size: 14px;
	text-align: center;
	line-height: 32px;
}
</style>
