<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider"></Slider>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components:{
        Panel,
        Slider,
    },
    name:'',
    data(){
        return {
            items:[{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t26410/82/1197118504/78608/76eb9a19/5bc40c2bNa6734d34.png?width=375&height=233'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&height=233'
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
        .content{
            .slider{
                margin-top: 120px;
                a{
                    margin: 0;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
