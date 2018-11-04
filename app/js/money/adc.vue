<template>
    <Panel title="iphoneXR" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5343/39/10925/33230/5bcd8ac0Ee9f991e8/2963c222fe1c9ac0.jpg?width=750&height=200" alt="">
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

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin-bottom: 0;
        >h4{
            display:none;
        }
        .content{
            height: 160px;
            img{
                width: 100%;
                height: 160px;
            }
        }
    }
</style>
