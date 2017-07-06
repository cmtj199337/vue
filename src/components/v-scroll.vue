<template>
  <div id="scroll">
      <div class="menu-wrapper" ref="menu">
          一段内容1
      </div>

      <div class="foods-wrapper" ref="foodsWrapper">   
          一段内容2
      </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'      
  const ERR_OK = 0

  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        goods: []
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

      this.$http.get('/api/goods').then((res) => {
        res = res.body
        if (res.errno === ERR_OK) {
          this.goods = res.data
          this.$nextTick(() => {       // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            //console.log(this)   //可以打印看看this的内容
            this._initScroll()
          })
        }
      })
    },
    methods: {
      _initScroll () {         // 2 函数声明
        this.menuScroll = new BScroll(this.$refs.menu, {})            //注意此处是 this.$refs.xxx
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
      }
    }
  }
</script>