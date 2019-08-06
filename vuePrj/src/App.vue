<template>
  <div id="app">
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <hr>
    <ul>
    	<li v-for="type in datatypes">
        <h1>{{type}}</h1>
        <goodslist v-bind:type="type"  ></goodslist>
      </li>
    </ul>
    <my-footer></my-footer>
    <router-view/>
  </div>
</template>

<script>
  import banner from './components/banner';
  import myNav from './components/myNav';
  import goodslist from './components/goodslist';
  import myFooter from './components/myFooter';
  import top from './components/top';
export default {
  name: 'App',
  data:function(){
    return {
      datatypes:[]
    }
  },
  created:function(){
    fetch('http://localhost:3000/goodstype')
    .then((res)=>{
      return res.json();
    })
    .then((datas)=>{
      this.datatypes = datas;
    })
  },
  components:{
    top,banner,myNav,goodslist,myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
}
h1{
  font-size: 16px;
}
a{
  text-decoration: none;
}
ul li{
  list-style: none;
}
body{
  font-family: "微软雅黑";
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}
</style>
