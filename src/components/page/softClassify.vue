<template>
    <div id="softClassify">
      <header>
        <div>
            <a href="javascript:history.go(-1);" class="back"></a>
            分类
            <router-link :to="'*'" class="home"></router-link>
        </div>         
      </header>
      <section class="public" id="publicSoft">
        <div class="contlist" v-for="item in proList">
          <h2>{{item.parentName}}</h2>
          <ul>
            <li v-for="item in item.subList">
            <router-link :to="'./'+name+'Detail?id='+item.id+'&title='+decodeURI(item.name)">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<script>
var href='http://www.wo116114.com/ry-spider/api/';
import proList from './../pro-list';

    export default{
        name:"softClassify",
        data(){
            return {
                proList:[], 
                name:'softClassify',
            }            
        },
        created:function() { 
            this.$http.jsonp(href+'getAppList.serch?').then(function(res) {
                  this.proList = res.data.results.typeList;
                },
                 function(res) {
                    console.log('error')
                }
            );
        }
    }
</script>
