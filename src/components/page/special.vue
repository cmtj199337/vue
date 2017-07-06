<template>
    <div id="special">
        <header>
          <div>
              <a href="javascript:history.go(-1);" class="back"></a>
              专题
              <router-link :to="'*'" class="home"></router-link>
          </div>         
        </header>
        <section class="specialTxt" id="publicSpecial">
           <ul>
               <li v-for="item in specialList">
                   <router-link :to="'./specialClassify?id='+item.id+'&title='+decodeURI(item.name)">
                       <img :src="item.image" alt="">
                       <p>{{item.name}}</p>
                   </router-link>
               </li>
          </ul>
        </section>
    </div>
</template>

<script>
var href='http://www.wo116114.com/ry-spider/api/';
    export default{
        name:'special',
        data(){
            return {
                specialList:[],
            }            
        },
        mounted: function() {          
            this.$http.jsonp(href+'getSpecialList.serch').then(function(res) {
                  this.specialList = res.data.results.specialList;
                    console.log(this.specialList);
                },
                 function(res) {
                    console.log('error')
                }
            );
        }
    }
</script>
