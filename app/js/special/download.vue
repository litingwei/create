<template>
    <Panel title="下载APP" :class="$style.panel">
        <section :class="$style.content">
            <div>a</div>
            <p>立即下载</p>
            <span>copyright</span>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components:{
        Panel,
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
  html,body{
      background: #fff;
  }
  .panel{
      @include panel;
      margin: 0;
      >h4{
          display: none;
      }
      .content{
          @include flex;
          justify-content: center;
          align-items: center;
          height: 1136px;
          width: 100%;
          >div{
              background:url(//m.jr.jd.com/spe/downloadApp/css/i/bg.png) center center;
              width: 400px;
              height: 800px;
              background-size: 100% auto;
              margin-top: -40px;
          }
          >p{
              @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
              width: 471px;
              height: 100px;
              line-height: 100px;
              background-image:linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
              box-shadow: 0 6px 16px 0 rgba(255,169,135,0.6);
              position: fixed;
              bottom: 130px;
          }
          span{
              position:fixed;
              bottom: 16px;
              font-size: 10px;
          }
      }
  }
</style>
