<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
           <div class="arrow">更多尖货></div>
           <Slider :options="options" :items="items" cname="product-slider"></Slider> 
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue';
export default {
    components:{
        Panel,
        Slider
    },
  name:'',
  data(){
   return {
       items:[{
           href:'home',
           src:'//img12.360buyimg.com/jrpmobile/jfs/t25891/268/2097181035/42657/b8584396/5bc43fd0Nac95eb04.jpg?width=335&height=421'
       },{
           href:'home',
           src:'//img12.360buyimg.com/jrpmobile/jfs/t26968/61/1274056827/41076/5bdf947c/5bc43fdeN03255b3a.jpg?width=335&height=421'
       },{
           href:'home',
           src:'//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
       },{
           href:'home',
           src:'//img12.360buyimg.com/jrpmobile/jfs/t24958/177/2070925579/46278/53db97cc/5bc43fedNc8cfd19d.jpg?width=335&height=421'
       }],
       options:{
            slidesPerView: 2.3,
            spaceBetween: 30,
            freeMode: true
       }
   }
  }
}
</script>

<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide {
                a{
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom:40px;
            position: relative;
            &>div{
                position: absolute;
                font-size:28px;
                color:#999;
                right:20px;
                top:-70px;
            }
        }
    }
</style>

