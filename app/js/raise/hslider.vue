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
                href:'raise',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t27115/298/1407158171/81048/4d8364d/5bc84d03N26d10ba1.jpg?width=750&height=360'
            },{
                href:'raise',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/5052/35/9045/125271/5bab5a90Eec911b26/fed970a12c4605b1.jpg?width=750&height=360'
            },{
                href:'raise',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/2266/36/12935/40390/5bd67350Ec7ce7c5f/df79735fbcefb50c.jpg?width=750&height=360'
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
