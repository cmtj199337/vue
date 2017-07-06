<template>
    <div id="rank">
      <main-cont v-bind:newImg="columnImg"></main-cont>
      <section class="recommendIcon">
          <h2>精品推荐</h2>
          <pro-list v-bind:parentToChild="proList"></pro-list>
       </section>
    </div> 
</template>

<script>
var href='http://www.wo116114.com/ry-spider/api/';
import mainCont from './main-cont'
import proList from './pro-list'

export default {
    name:"rank",
    data(){
        return{  
            columnImg:[
                {
                    name:'软件排行榜',
                    imgUrl:require('../images/icon/icon-rank0.png'),
                    url:'/softRank'
                },
                {
                    name:'游戏排行榜',
                    imgUrl:require('../images/icon/icon-game0.png'),
                    url:'/gameRank'
                }
            ],      
          proList:[],            
        }
    },
    mounted: function() {          
        this.$http.jsonp(href+'getTopRecommendList.serch').then(function(res) {
           this.proList = res.data.results.infoList;
        }, function(res) {
            console.log('error')
        });
    },
    components: {
        mainCont,
        proList
    }
}   
</script>