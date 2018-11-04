<template>
    <Panel title="导航条" :class="$style.panel">
      <ul :class="$style.content">
        <li>
          <router-link :to="{name:'home'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/213/11/11370/4345/5bcdaa52E20d7eefb/a965902b22794616.png?width=60&height=60" alt="">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'money'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/8563/27/1307/2434/5bcdaa5bEba9d9dd9/24c814db09f3da92.png?width=60&height=60" alt="">
            <p>赚钱</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'whiteBar'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3054/13/10967/1735/5bcdaa63E0687c0dc/b21244635b527ced.png?width=60&height=60" alt="">
            <p>借钱</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'raise'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/2082/7/11019/2025/5bcdaa69E739e5174/629d6f36e9ed049b.png?width=60&height=60" alt="">
            <p>省钱</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/6235/5/1661/1836/5bcdaa71Ef4eeabf4/3c3987edc4e831e1.png?width=60&height=60" alt="">
            <p>金融会员</p>
          </router-link>
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

<style lang="scss" module>
  @import "../../css/element.scss";
  .panel{
    @include panel;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin:0;
    height: 100px;
    z-index: 100;
    >h4{
      display:none;
    }
    .content{
      @include flex(row);
      justify-content: space-around;
      li{
        text-align: center;
        a{
          text-decoration: none;
          margin: 0;
        }
        img{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin:12px auto 6px;
        }
        p{
          font-size: 22px;
          color:#B1B4BB;
        }
      }
    }
  }
</style>
