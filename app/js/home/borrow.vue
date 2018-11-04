<template>
    <Panel title="支付优惠" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name:'home',params:{}}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components:{
      Panel
  },
  name:''
}
</script>

<style module lang="scss">
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom: 0px;
            a{
                margin: 0;
            }
        }
        img{
            display: block;
            width: 100%;
        }
    }
</style>
