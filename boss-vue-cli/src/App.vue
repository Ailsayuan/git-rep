<template>
  <div id="app">
  <router-link to="index"></router-link>
  <router-link to="detail"></router-link>
  <router-view></router-view>
  </div>
</template>
<script src=""></script>
<script>
  import index from './views/index';
  import detail from './views/detail';

 
  export default {
    name: 'App',
    data: function() {
      return {

      }
    },
    components: {
      index
    }
  }
</script>

<style>
body,h1,h2,h3,h4,h5, h6, p,ul,ol,dl,dd,input,textarea,select,td,th{
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }

  ul,ol {
    list-style: none;
  }

  /* 顶部底部固定时候需要 */
  html,body {
    height: 100%;
  }
</style>
