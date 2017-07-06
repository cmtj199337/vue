<template>    
     <ul>
         <li v-for="item in parentToChild" :key="item.id">

             <router-link :to="'./detail?id='+item.id">
             <span><img :src="item.image" alt=""></span><div class="midtip"><h3>{{item.name}}</h3><p class="tip"><i class="size">大小：{{item.size}}</i><i class="count">下载次数：{{limitCount(item.downCount)}}</i></p><p class="detial">{{item.intro}}</p></div>
             </router-link>
             <a class="btn" :href="item.url">安装</a>
         </li>
     </ul>
    
</template>
<script>
export default{
    data(){
        return {
        }
    },
    props:["parentToChild"],
    methods: {
        limitCount: function(item){
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
    }
}
</script>