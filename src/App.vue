<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from "./components/header/header";

  const ERR_OK=0;


  export default {
    data(){
      return{
        seller:{}
      };
    },
    created(){//生命周期函数
      this.$http.get('/api/seller').then((response)=>{//异步获取数据,将data传给seller
        response = response.body;
        console.log("数据"+response)
        if (response.errno===ERR_OK){
            this.seller = response.data;
            console.log(this.seller)
        }
      });
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl"

    .tab
      display flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex 1
        text-align center
        & > a
          display :block
          text-decoration :none//去下划线
          font-size :14px
          color :rgb(77,85,93)
          &.active
            color rgb(240,20,20)

  //文本居中
</style>
