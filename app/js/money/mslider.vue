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
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/8642/32/1563/25894/5bcedd36E019d8e9a/5618807ef0fd751f.jpg?width=750&height=400'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/5202/38/13259/31171/5bd6dedbEa9d1cb05/9f8c67d58c74cb44.jpg?width=750&height=400'
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
