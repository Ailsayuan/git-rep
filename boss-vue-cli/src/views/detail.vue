<template>
  <div>
<detail-header></detail-header>
<detail-select></detail-select>
<detail-main></detail-main>
<detail-footer></detail-footer>
  </div>
</template>

<script>
  import detailHeader from "../components/detailHeader";
  import detailSelect from "../components/detailSelect";
  import detailMain from "../components/detailMain";
  import detailFooter from "../components/detailFooter";
  export default{
    name:"detail",
    data:function(){
      return{

      }
    },
    components:{
      detailHeader,detailSelect,detailMain,detailFooter
    }
  }
</script>

<style>
 @import '../assets/css/iconfont.css';
</style>
