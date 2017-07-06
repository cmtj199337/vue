<template>
    <div id="necessary">
        <header>
            <div>
                <a href="javascript:history.go(-1);" class="back"></a>
                必备
                <router-link :to="'*'"  class="home"></router-link>
            </div>             
        </header>
        <section class="recommendIcon neccssary">
             <h2>软件</h2>
             <pro-list v-bind:parentToChild="proList"></pro-list>
        </section>
        <section class="recommendIcon neccssary">
             <h2>游戏</h2>
             <pro-list v-bind:parentToChild="proList2"></pro-list>
        </section>
    </div>
</template>

<script>
var href='http://www.wo116114.com/ry-spider/api/';
import proList from './../pro-list'
    export default{
        name:'necessary',
        data(){
            return {
                proList:[],
                proList2:[],
            }            

        },
        
         mounted: function() {          
            this.$http.jsonp(href+'getEssentialAppList.serch').then(function(res) {
                   this.proList = res.data.results.infoList;
                },
                 function(res) {
                    console.log('error')
                }
            );

            this.$http.jsonp(href+'getEssentialGameList.serch').then(function(res) {
                   this.proList2 = res.data.results.infoList;
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
