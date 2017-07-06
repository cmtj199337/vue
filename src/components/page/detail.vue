<template>    
    <div id="detial">
        <header>
        <div>
            <a href="javascript:history.go(-1);" class="back"></a>
            应用详情
            <router-link :to="'*'" class="home"></router-link>
        </div>         
        </header>
        <section class="recommendIcon detial" id="public3Game">
             <ul>
             <li class="clearfix">
                 <a href="javascript:;">
                     <span><img :src="proDetial.image" alt=""></span>
                      <div class="midtip">
                         <h3>{{proDetial.name}}</h3>
                         <p class="tip">
                            <i class="size">大小：{{proDetial.size}}</i>
                            <i class="ver">版本：&nbsp;{{proDetial.ver}}</i>
                         </p>
                         <p class="tip">
                         <i class="count">下载次数:{{(proDetial.downCount)!=null?limitCount(proDetial.downCount):''}}</i>
                         </p>
                     </div>
                 </a>
                 <a :href="proDetial.url" class="btn">安装</a> 
             </li>
             <div class="description" style="border-bottom:1px solid #e6e6e6;">
                 <h2>{{proDetial.name}}</h2>
                 <p>{{proDetial.intro}}</p>
             </div>
             <div class="description">
               <h2>{{proDetial.name}}截图</h2>
             </div>
             </ul>
        </section> 
        <swiper :options="swiperOption">
             <swiper-slide v-for=" banner in datalist" :key="banner.id">
                <img :src="banner" alt="">
             </swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
let href='http://www.wo116114.com/ry-spider/api/';
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default{
    name:'detial',
    data(){
        return {
            proDetial:[],
            datalist:[],
            swiperOption: {
                slidesPerView:3,
                spaceBetween: 25,
                observer:true,
                observeParents:true,
            }
        }
    },
    created:function(){  
        let str=window.location.href; 
        let num=str.indexOf("?");
        str=str.substr(num+1);
        let newStr=str.slice(3);
        //console.log(newStr);
        this.$http.jsonp(href+'getDetail.serch?id='+newStr).then(function(res) {
           this.proDetial =res.data.results;          
           this.datalist=this.proDetial.ads.split(',');
        }, function(res) {
            console.log('error')
        });  
    },
    methods: {
        limitCount: function(item){
           //alert(2);
          if(item.length>0&&item.length<4||item.length==4){
                item;
                return item;
          }
          if(item.length>4&&item.length<8||item.length==8){
                item=item/10000;
                item=item.toFixed(1)+"万";
                item=parseFloat(item)+"万";
                return item;
          }
          if(item>9){
                item=item/100000000;
                item=item.toFixed(1)+"亿";
                item=parseFloat(item)+"亿";
                return item;
          }
        },            
    },
    components: {
        swiper,
        swiperSlide,
    }    
}
</script>