<template>
    <div>
      <boss-header></boss-header>
      <boss-section></boss-section>
      <boss-footer></boss-footer>
    </div>
</template>

<script>
  import bossHeader from '../components/bossHeader';
  import bossSection from '../components/bossSection';
  import bossFooter from '../components/bossFooter';
  export default {
    name: 'index',
    data: function() {
      return {

      }
    },
    components: {
      bossHeader,bossSection,bossFooter
    }
  }
</script>

<style>

</style>
