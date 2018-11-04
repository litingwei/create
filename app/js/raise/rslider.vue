<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
        <swiper :options="options" >
            <swiper-slide>打京东白条，享双11优惠！<em>></em></swiper-slide>
            <swiper-slide>新款iphone，速来领取！<em>></em> </swiper-slide>
        </swiper>
        </section>
    </Panel>  
</template>

<script>
    import Panel from "../core/panel.vue";
    import {swiper,swiperSlide} from 'vue-awesome-swiper';
    export default {
        components:{
            Panel,
            swiper,
            swiperSlide
        },
        name:'',
        data(){
            return {
                    options:{
                        direction: 'vertical',
                        autoplay:true,
                        loop:true,
                        observer:true,//修改swiper自己或子元素时，自动初始化swiper
                        observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    }
                }
        }
    }
</script>
<style lang="scss">
    .swiper-container-vertical{
        height: 72px;
        .swiper-slide{
            font-family:PingFangSC-Medium;
            font-size: 28px;
            color: #333;
            em{
                color: #ddd;
                float: right;
                margin-right: 20px;
            }
        }
    }
</style>

<style module lang="scss">
    @import "~swiper/dist/css/swiper.css";
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin-top:10px;
        >h4{
            display: none;
        }
        .content{
            height:72px;
            line-height:72px;
            padding-left:178px;
            background:url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
        }
    }

</style>
