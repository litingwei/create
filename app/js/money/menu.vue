<template>
    <Panel title="菜单" :class="$style.panel">
        <section :class="$style.list">
             <div :class="$style.item" v-for="item in enters" :key="item.img">
                 <router-link :to="{name:item.href,params:{}}">
                     <img :src="item.img" :alt="item.title">
                     <h4>{{item.title}}</h4>
                 </router-link>
             </div>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  name:'',
  data(){
   return {
        enters:[{
          href:'download',
          img:'//img12.360buyimg.com/jrpmobile/jfs/t1/9158/3/1139/9762/5bcd308cE89ea4edd/85ae805b1c7332af.png?width=90&height=90',
          title:'领红包' 
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/8498/4/1139/9861/5bcd3095E0f7229b0/c8845d80881fb1d6.png?width=90&height=90',
           title:'领福利'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/4116/11/10862/9870/5bcd309eEf7246bdd/6c27e8896f4a8f12.png?width=90&height=90',
           title:'领券'
       },
       {
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/1657/21/10923/9664/5bcd30aaE447d9447/33e8284928fa2b4b.png?width=90&height=90',
           title:'支付抽奖'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/5595/33/10947/10178/5bcd30b2E25f62b03/85cc753244031c83.png?width=90&height=90',
           title:'全部'
       }]
   }
  }
}
</script>

<style module lang="scss">
@import "../../css/element.scss";
.panel{
        @include panel;
        >h4{
            display:none;
        }
        .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        .item{
            width: 20%;
            text-align: center;
            img{
                display:inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
    }
</style>
