<template>
    <div id="softClassifyDetail">
        <header>
          <div>
              <a href="javascript:history.go(-1);" class="back"></a>
             {{newTitle}}
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
        name:"softClassifyDetail",
        data(){
            return {
                proList:[], 
                newTitle:'',
            }            
        },
        created:function() { 
            let str=window.location.href; 
            str=decodeURI(str);

            let num=str.indexOf("?");
            str=str.substr(num+1);
            let newStr=str.slice(3);
           
            let num2=str.indexOf("&");
            str=str.substr(num2+1);
            this.newTitle=str.slice(6);   
            
            this.$http.jsonp(href+'getTypeList.serch?typeId='+newStr).then(function(res) {
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

