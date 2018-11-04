import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import WhiteBar from "../whiteBar/index.vue"
import Raise from "../raise/index.vue"
import Download from "../special/download.vue"

import '../../css/reset.scss';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },{
            path:"/money",
            name:"money",
            component:Money,
        },{
            path:"/whiteBar",
            name:"whiteBar",
            component:WhiteBar,
        },{
            path:"/raise",
            name:"raise",
            component:Raise
        },{
            path:"/download",
            name:"download",
            component:Download
        }
    ],
})
