<template>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'myNav',
    data:function(){
      return{

      }
    }
  }
</script>

<style scoped>
div{
  width: 250px;
  height: 100px;
  background: deeppink;
}
ul{
  list-style: none;
  overflow: hidden;
}
ul li{
  float: left;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px;
  background-color: blue;
}
</style>
