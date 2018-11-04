<template>
    <Panel title="家庭保险" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/4348/19/6052/23261/5ba1b654E348ecfa8/6db1f6144439c704.jpg?width=210&height=260" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/1788/16/6042/22234/5ba1b66bE0048bd22/0ed4acf833baf2bf.jpg?width=210&height=260" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/4217/20/6057/22119/5ba1b67bEaf4daa54/bf8ede85e530d57f.jpg?width=210&height=260" alt="">
            <span>安心放心></span>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
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
        .content{
            @include flex(row);
            position: relative;
            padding-bottom: 40px;
            img{
                width: 33.3333%;
                height: 280px;
            }
            span{
                position: absolute;
                right: 20px;
                top: -112px;
                font-size: 28px;
                color: #999;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>
