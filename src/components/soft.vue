<template>
    <div id="soft">
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
    name:"soft",
    data(){
        return{ 
            columnImg:[
                {
                    name:'分类',
                    imgUrl:require('../images/icon/icon-sort0.png'),
                    url:'/softClassify'
                },
                {
                    name:'软件排行',
                    imgUrl:require('../images/icon/icon-rank0.png'),
                    url:'/softRank'
                }
            ],  
            proList:[],            
        }
    },
    mounted: function() {        
        this.$http.jsonp(href+'getAppRecommendList.serch').then(function(res) {
            console.log(res.data);
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