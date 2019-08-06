<template>
  <div>
    	<dl>
    		<dt>
    			<div class="dt-title">
    				<img src="../assets/img/technology.png">
    				<h4>技术</h4>
    			</div>
    		<dd>
    			<a href="#">java</a>
    			<a href="#">php</a>
    			<a href="detail.html">web前端</a>
    			<a href="#">数据挖掘</a>
    			<a href="#">c++</a>
    			<a href="#">python</a>
    			<a href="#">Android</a>
    			<a href="#">ios</a>
    		</dd>
    		</dt>
    	</dl>
      <div class="tips">
      	<p>违法和不良信息举报邮箱：jubao@kanzhun.com</p>
      	<p>企业服务热线和举报投诉：400 065 5799</p>
      </div>
  </div>
</template>

<script>
  export default{
  name:"bossSection",
  data:function(){
    return{

    }
  }
  }
</script>

<style scoped="scoped">
dl{
	padding: 18px 0 16px;
}
.dt-title{
	margin: 0 15px 18px;
}
.dt-title img{
	width: 50px;
	height: 50px;
	margin-right: 15px;
	vertical-align: middle;
}
.dt-title h4{
	color: #404855;
	font-size: 15px;
	display: inline-block;
	width: 232.2px;
	height: 25.6px;
	margin-top: 14px;
}
dd{
	margin: 0 15px;
}
dd a{
	color: #7e8793;
	font-size: 13px;
	display: inline-block;
	padding: 8px 16px;
	background: #f5f8f9;
	border-radius: 10px;
	margin-right: 8px;
	margin-bottom: 8px;
}
.tips{

	padding: 20px 0;
}
.tips p{
	color: grey;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
}
</style>
