<template>
    <div id="softRank">
      <header>
        <div>
            <a href="javascript:history.go(-1);" class="back"></a>
            游戏排行
            <router-link :to="'*'" class="home"></router-link>
        </div>         
      </header>
      <section class="recommendIcon">
          <pro-list v-bind:parentToChild="proList"></pro-list>
      </section>
    </div>
</template>

<script>
var href='http://www.wo116114.com/ry-spider/api/';
import proList from './../pro-list';

    export default{
        name:"softRank",
        data(){
            return {
                proList:[], 
            }            
        },
        created:function() {         
            this.$http.jsonp(href+'getGameTopList.serch').then(function(res) {
                  //console.log( res.data);
                  this.proList = res.data.results.infoList;
                },
                 function(res) {
                    console.log('error')
                }
            );
        },
        components: {
          proList
        }
    }
</script>

