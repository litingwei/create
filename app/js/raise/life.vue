<template>
  <Panel title="生活服务" :class="$style.panel">
      <ul :class="$style.content">
          <li :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3256/1/8339/10638/5ba98da9E4331a644/bc82f7dbfe7778b6.png?width=120&height=120" alt="">
              <p>机票</p>
          </li>
          <li :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&height=120" alt="">
              <p>每日特惠</p>
          </li>
          <li :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/2919/38/8573/9112/5ba98db9E3096b801/0520550e7994d3a4.png?width=120&height=120" alt="">
              <p>领钢镚</p>
          </li>
          <li :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&height=120" alt="">
              <p>信用卡还款</p>
              <p>全新升级</p>
          </li>
          <li :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&height=120" alt="">
              <p>火车票</p>
          </li>
      </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
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
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item{
                width: 20%;
                text-align: center;
                img{
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size:26px;
                    color: #666; 
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-child(3){
                        color: #FF801A;
                    }
                }
            }
        }
    }
</style>
