<template>
    <Panel title="现金福袋" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3995/20/12502/51064/5bd2fc56Eb7911510/b7a602a62af511f1.jpg?width=750&height=220" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel
    },
    name:'',
    data(){
        return {

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
            img{
                width: 100%;
                height: 230px;
                display: block;
            }
        }
    }
</style>
