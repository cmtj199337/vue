<template>
    <div id="recommend">
      <main-cont v-bind:newImg="columnImg"></main-cont>
      <section class="recommendIcon">
          <h2>精品推荐</h2>
          <div class="loading" v-if="isLoading">
            <p><img src="../images/loading.gif" alt=""></p>
            <span>正在加载</span>
          </div>
          <pro-list v-bind:parentToChild="proList" ref="menu"></pro-list>
       </section>
    </div> 
</template>
<style scoped>
  .loading{
    position: absolute;
    width:4.4rem;
    height: 4.4rem;
    border-radius: 5px;
    text-align: center;
    background: rgba(0,0,0,.5);
    padding: 0.6rem 0;
    box-sizing:border-box;
    bottom: 30%;
    left:50%;
    margin-left: -2.2rem;
  }
  .loading p{
      width:50%;
      margin: 0 auto;
  }
  .loading p>img{
      width: 100%;
  }
  .loading span{
    color: #fff;
    font-size: 0.65rem;
  }
</style>
<script>
var href='http://www.wo116114.com/ry-spider/api/';
import mainCont from './main-cont';
import proList from './pro-list';
import BScroll from 'better-scroll'

export default {
    name:"recommend",
    data(){
        return{ 
          isLoading:true,  
          columnImg:[
                {
                    name:'必备',
                    imgUrl:require('../images/icon/icon-bibei0.png'),
                    url:'/necessary'
                },
                {
                    name:'专题',
                    imgUrl:require('../images/icon/icon-zhuanti0.png'),
                    url:'/special'
                }
          ],
          proList:[],            
        }
    },
    created: function() {          
        this.$http.jsonp(href+'getRecommendList.serch').then(function(res) {
           this.isLoading=false;
           this.proList = res.data.results.infoList;
            this.$nextTick(() => {       
              //console.log(this)   
              this._initScroll()
            })
        }, function(res) {
            console.log('error')
        });
    },
    methods:{
      _initScroll () {         
        this.menuScroll = new BScroll(this.$refs.menu, {})            
      }
    },
    components: {
        mainCont,
        proList
    }
}   
</script>