<template>
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
           <div :class="$style.item" v-for="item in items" :key="item.catory">
               <img :src="item.catory" alt="">
               <section :class="$style.list">
                   <div :class="$style.product" v-for="product in item.list" :key="product.img">
                       <img :src="product.img" alt="">
                       <p :class="$style.title">{{product.title}}</p>
                       <p :class="$style.price"><em>{{product.price}}</em>起</p>
                       <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
                            </div>
                            <p>{{product.progress}}%</p>
                       </article>
                       <label v-if="product.select">精选</label>  
                   </div>
               </section>
           </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
    components:{
        Panel,
    },
    name:'',
    data(){
        return {
            items:[{
                catory:"//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                list:[
                    {
                        img:'//img30.360buyimg.com/cf/jfs/t1/9976/40/1625/62627/5bcefea5Eeb9ed7a3/5292b6426189a176.jpg!q70.dpg',
                        title:'驰天下智能流媒体后视镜',
                        price:'369.00',
                        progress:62,
                        select:true,
                    },{
                        img:'//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                        title:'脑波相机',
                        price:'998.00',
                        progress:259,
                        select:false,
                    }
                ]
            },{
                catory:"//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                list:[{
                    img:'//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                    title:'智能电动牙刷',
                    price:'19.00',
                    progress:481,
                    select:false,
                },{
                    img:'//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                    title:'烟草加热电子烟',
                    price:'258.00',
                    progress:105,
                    select:true,
                }]
            },{
                catory:"//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                list:[{
                    img:'//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                    title:'赖公高淮封藏老酒',
                    price:'99.00',
                    progress:199,
                    select:true,
                },{
                    img:'//img30.360buyimg.com/cf/jfs/t20557/157/2508457053/47146/f6896f58/5baf46acNfa212c52.jpg!q70.dpg',
                    title:'花无缺富硒浓香型白酒',
                    price:'99.00',
                    progress:222,
                    select:false,
                }]
            }]
        }
    }
}
</script>

<style module lang="scss">
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex;
            .item{
                >img{
                   display:block; 
                   width: 100%;
                   height: 170px;
                }
                margin-bottom: 40px;
                .list{
                    @include flex(row);
                    .product{
                        width: 50%;
                        height: 396px;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, 0.021);
                        text-align: center;
                        position: relative;
                        img{
                            width: 180px;
                            height: 180px;
                            margin: 44px auto 20px;
                        }
                        .title{
                            font-family: PingFangSC-Medium;
                            font-size: 28px;
                            color: #444;
                        }
                        .price{
                            font-family: PingFangSC-Semibold;
                            font-size: 20px;
                            color: #999;
                            height: 48px;
                            line-height: 48px;
                            em{
                                font-size: 36px;
                                color:#FF3232;
                                margin-right:4px;
                                &:before{
                                    content: '￥';
                                    font-size: 28px;
                                }
                            }           
                        }
                        article{
                            @include flex(row);
                            align-items: center;
                            justify-content: space-around;
                            padding: 0 20px;
                            height: 30px;
                            line-height: 30px;
                            margin-top: 16px;
                            .wrapper{
                                width: 144px;
                                height: 10px;
                                background:#F6E6E6;
                                border-radius: 22px;
                                .inner{
                                    width: 40%;
                                    max-width: 100%;
                                    height: 10px;
                                    background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                                    border-radius: 22px;
                                }
                            }
                            p{
                                font-size: 24px;
                                color: #999;
                            }
                        }
                        label{
                            position: absolute;
                            left: 0;
                            top: 0;
                            font-family: PingFangSC-Medium;
                            font-size: 20px;
                            color: #ff0000;
                            text-align: center;
                            padding: 4px 8px;
                            background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
                        }
                    }
                }
            }
        }
    }
</style>
