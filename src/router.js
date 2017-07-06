import VueRouter from "vue-router"
import recommend from "./components/recommend.vue"
import soft from "./components/soft.vue"
import game from "./components/game.vue"
import rank from "./components/rank.vue"
import search from "./components/search.vue"

// 推荐
import necessary from "./components/page/necessary.vue"
import special from "./components/page/special.vue"
import specialClassify from "./components/page/specialClassify.vue"

// 软件
import softClassify from "./components/page/softClassify.vue"
import softClassifyDetail from "./components/page/softClassifyDetail.vue"
import softRank from "./components/page/softRank.vue"

// 游戏
import gameClassify from "./components/page/gameClassify.vue"
import gameClassifyDetail from "./components/page/gameClassifyDetail.vue"
import gameRank from "./components/page/gameRank.vue"

// 详情
import detail from "./components/page/detail.vue"

export default new VueRouter({
    routes:[
        {path: '*',redirect: '/recommend'},
        {path:"/recommend",component:recommend},
        {path:"/soft",component:soft},
        {path:"/game",component:game},
        {path:"/rank",component:rank},
        {path:"/search",component:search},

        
        {path:"/necessary",component:necessary},
        {path:"/special",component:special},
        {path:"/specialClassify",component:specialClassify},

        {path:"/softClassify",component:softClassify},
        {path:"/softClassifyDetail",component:softClassifyDetail},          
        {path:"/softRank",component:softRank},

        {path:"/gameClassify",component:gameClassify},
        {path:"/gameClassifyDetail",component:gameClassifyDetail},
        {path:"/gameRank",component:gameRank},
        
        {path:"/detail",component:detail},
    ]
})