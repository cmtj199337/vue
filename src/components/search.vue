<template>
    <div id="search">
        <header>
            <div>
                <a href="javascript:history.go(-1);" class="back"></a>
                搜索
                <router-link :to="'*'"  class="home"></router-link>
            </div>   
        </header> 
        <div class="searchbar"> 
             <input type="text" placeholder="点击输入关键字" id="name" ref="valCont" @keyup="show($event)">
             <input type="button" value="搜索" id="search" @click="searchCont" >
        </div> 
        <section class="recommendIcon">
              <pro-list v-bind:parentToChild="proList" v-if="isHaving"></pro-list>
              <div class="isNone" v-if="isNone">暂无数据显示</div>
        </section>
        <div class="bottomTxt">
            <div class="hotRecommend">热门推荐</div>
            <swiper :options="swiperOption">
                 <swiper-slide v-for=" banner in bannerlist" :key="banner.id">
                    <img :src="banner.image" alt="">
                 </swiper-slide>
                 <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <toast v-bind:parentToChild2="toast" v-if="isEmpty"></toast>
    </div>
</template>
<style scoped>
  #search{
    cursor: pointer;
  }
  .isNone{
    width:100%;
    text-align: center;
    color: #ccc;
    font-size: 0.9rem;
    padding-top: 1rem;
  }
</style>
<script>
var href='http://www.wo116114.com/ry-spider/api/';
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import proList from './pro-list';
import toast from './page/toast';

export default{
    name:'search',
    data(){
        return {
            isHaving:false,
            isEmpty:false,
            isNone:false,
            bannerlist:[],
            swiperOption: {
                slidesPerView:5,
                spaceBetween: 30,
                observer:true,
                observeParents:true,
            },
            proList:[],   
            toast:'请输入关键字'   
        }            
    },
    mounted: function() {          
      this.$http.jsonp(href+'getAppRecommendList.serch').then(function(res) {
         this.bannerlist =res.data.results.infoList;
      }, function(res) {
          console.log('error')
      });
  },
  methods:{
    searchCont:function(){        
      if(this.$refs.valCont.value==null||this.$refs.valCont.value==''){
          this.isEmpty=true;
      }
      else{
          this.isEmpty=false;
          this.$http.jsonp(href+'searchList.serch?name='+this.$refs.valCont.value).then(function(res) {
            if(res.data.results.infoList.length==0||res.data.results.infoList.length==null){
                 this.isNone=true;
                 this.isHaving=false;
            }
            else{
                 this.isHaving=true;
                 this.isNone=false;
                 this.proList =res.data.results.infoList;
            }
          
          }, function(res) {
            console.log('error')
         });
      }      
    },
    show: function (ev) {
      if(ev.keyCode==13){
        this.searchCont();
      }
    }
  },
  components: {
      swiper,
      swiperSlide,
      proList,
      toast
  }
    }
</script>