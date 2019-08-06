<template>
<div>
  <ul>
  	<li v-for="goods in goodslist">
      {{goods.goodsname}}
    </li>
  </ul>
</div>
</template>

<script>
  //默认导入
  export default{
  name:"goodslist",
  props:['type'],
  data:function(){
    return{
    goodslist:[]
    }
  },
  created:function(){
    fetch('http://localhost:3000/goodstype')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(this.type);
      this.goodslist = data[this.type];
    });
  }
  }
</script>

<style scoped="scoped">
  div{
    width: 250px;
    background: lightpink;
  }
  ul li{
    font-size: 14px;
  }
</style>
