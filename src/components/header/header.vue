<template>
  <div class="header">
    <div class="content-weapper">
      <div class="avatar">
        <img  width="64" height="64" :src="seller.avatar" >
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>

</template>

<script>
    export default {
        props:{
          seller:{
            type: Object
          }
      }
    };
</script>

<style scoped>

</style>
