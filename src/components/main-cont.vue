<template>
    <div id="mainCont">
            <header>
              <nav>
                   <ul>
                      <li v-for="item in menulist">
                          <router-link :to="item.url">{{item.name}}</router-link>
                      </li>   
                   </ul>
                   <router-link :to="'./search'" class="search"></router-link>
              </nav>
            </header> 
             <swiper :options="swiperOption">
                 <swiper-slide v-for=" banner in bannerlist" :key="banner.id">
                    <img :src="banner.image" alt="">
                 </swiper-slide>
                 <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <section class="classify">
                 <ul>
                    <li v-for="item in newImg">
                        <router-link :to="item.url">
                            <span><img :src="item.imgUrl" alt=""></span>
                            <p>{{item.name}}</p>
                        </router-link>
                    </li>
                 </ul>
            </section>
    </div>
</template>
<style scoped>
  .router-link-active{
    display: inline-block;
    border-bottom:2px solid #fff;
  }
</style>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default{
    name:'mainCont',
    data(){
        return {
            menulist:[
                {name:'推荐',url:'/recommend'},
                {name:'软件',url:'/soft'},
                {name:'游戏',url:'/game'},
                {name:'排榜',url:'/rank'}
            ],
            bannerlist:[],
            swiperOption: {
                autoplay: 3000,
                direction: 'horizontal',
                autoplayDisableOnInteraction: false,
                observeParents:true,
                pagination: '.swiper-pagination',
                loop: true
            }
        }            
    },
    props:["newImg"],

    mounted: function() {          
      this.$http.jsonp("http://www.wo116114.com/ry-spider/api/getSpecialList.serch").then(function(res) {
         this.bannerlist =res.data.results.specialList;
      }, function(res) {
          console.log('error')
      });
  },
  components: {
      swiper,
      swiperSlide,
  }
    }
</script>