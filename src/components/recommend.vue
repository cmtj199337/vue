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
          <div class="endTip" v-if="isEnd">数据已加载完</div>
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
  .endTip{
    width: 100%;
    text-align: center;
    color: #aaa;
    font-size: 0.8rem;
    height: 2rem;
    line-height: 2rem;
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
          isEnd:false,
          page:1,  
          size :10,  
          length:0,
          num:0,
          scroll:0,
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
  mounted() {
    addEventListener('scroll', () => {
      if (document.body.scrollTop+ window.innerHeight==document.body.scrollHeight) {
        this.showAlert();
        this.fetch();
        this.page++;
      }
    })
     this.fetch()
  },
  // watch: {
  //   scroll() {
  //     if (document.body.scrollTop+ window.innerHeight==document.body.scrollHeight) {
  //       this.showAlert();
  //       this.fetch();
  //       this.page++;
  //     }
  //   }
  // },
    methods:{
      showAlert(){
        alert(0);
      },
      fetch() {
          this.$http.jsonp(href+'getRecommendList.serch').then(function(res) {
            let newData=res.data.results.infoList;
            this.length=newData.length;
            console.log(this.length);
            this.num=this.page*50;
            if(this.length > 0){  
               if(this.num>this.length){
                this.isEnd=true;
                return false;

                }                         
                else{                  
                    this.num=this.page*10;
                    for(var i=(this.page-1)*10;i<this.num;i++){
                        this.isLoading=false;
                        this.proList.push(newData[i]);
                    }
                }
            }    
            else{
              alert('error');
            }
        });
      }
    },
    components: {
        mainCont,
        proList
    }
}   









</script>