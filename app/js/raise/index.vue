<template>
    <div>
       <Heador></Heador>
       <Hslider></Hslider>
       <Rslider></Rslider>
       <Life></Life>
       <Daily></Daily> 
       <In></In>
       <More></More>
       <Footer cname="mfooter"></Footer>
       <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Life from './life.vue'
import Footer from "../public/footer.vue"
import Navbar from '../public/navbar.vue'
import Rslider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"
import More from "./more.vue"

export default {
  components:{
    Heador,
    Hslider,
    Life,
    Rslider,
    Daily,
    In,
    More,
    Footer,
    Navbar,
  }
}
</script>

<style lang="scss">
  .mfooter{
    margin-top: 0;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
