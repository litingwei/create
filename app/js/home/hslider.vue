<template>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
             <div :class="$style.item" v-for="item in enters" :key="item.img">
                 <router-link :to="{name:item.href,params:{}}">
                     <img :src="item.img" :alt="item.title">
                     <h4>{{item.title}}</h4>
                 </router-link>
             </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
  components:{
      Slider,
  },
  name:'',
  data(){
   return {
       items:[{
           href:"home",
           src:"//img12.360buyimg.com/jrpmobile/jfs/t25759/60/2272607322/48838/438e6aad/5bc6f6a5Ncd00b8cb.jpg?width=750&height=300",
       },{
           href:"home",
           src:"//img12.360buyimg.com/jrpmobile/jfs/t1/2138/29/10014/38080/5bc9cd7dEe2eef9a2/9bb9597cb2b8f224.jpg?width=750&height=300"
       },{
           href:"home",
           src:"//img12.360buyimg.com/jrpmobile/jfs/t1/7002/2/3329/82184/5bd6cac1E4b22e3a0/01d0fed55cf0185b.jpg?width=750&height=320"
       }],
       enters:[{
          href:'download',
          img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title:'优惠券' 
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
           title:'领福利'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
           title:'抢钢镚'
       },
       {
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
           title:'白条提额'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
           title:'工资理财'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
           title:'众筹'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
           title:'租房'
       },{
           href:'home',
           img:'//img12.360buyimg.com/jrpmobile/jfs/t1/479/25/929/9198/5b9243aaE826fc97b/37ef0a7cdfd24238.png?width=120&height=120',
           title:'电影票'
       }]
   }
  }
}
</script>

<style module lang="scss">
    @import "../../css/element.scss";
    .slider{
        margin-top: 120px;
        a{
            margin: 0;
        }
        img{
            width: 100%;
        }
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
            width: 25%;
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
</style>
