<template>
    <Panel title="保险保障" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56" alt="">
                <div>
                    <h4>车险</h4>
                    <p>享白条分期付款</p>
                </div>
                <em>去看车 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56" alt="">
                <div>
                    <h4>人寿</h4>
                    <p>京融一号终身年金保险</p>
                </div>
                <em>养老金 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56" alt="">
                <div>
                    <h4>意外</h4>
                    <p>京享全能综合意外保险</p>
                </div>
                <em>保平安 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56" alt="">
                <div>
                    <h4>旅行</h4>
                    <p>全球境外旅行险</p>
                </div>
                <em>无忧游 > </em>
            </div>
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
        >h4{
            border-bottom: 1px solid #ddd;
            margin-bottom: 0;
        }
        .content{
            @include flex;
            .item{
                @include flex(row);
                align-items: center;
                height: 140px;
                &:after{
                    content: " ";
                    box-sizing:border-box;
                    height: 0;
                    width: 100%;
                    border-bottom: 1px solid #ddd;
                    margin-left: 150px;
                }
                &:last-child::after{
                    border-color: #fff;
                }
                >img{
                    width: 88px;
                    height: 88px;
                    display: inline-block;
                    margin: 0 32px;
                }
                >div{
                    font-size: 32px;
                    color: #333;
                    line-height: 1.8;
                    width: 344px;
                    p{
                        color: #ff3232;
                        font-size: 24px;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                >em{
                    color: #FF801A;
                    font-size: 28px;
                }
            }
        }
    }
</style>
