<template>
    <div>
       <Heador></Heador>
       <Mslider></Mslider>
       <Menu></Menu>
       <Ada></Ada>
       <Task></Task>
       <Money></Money>
       <Adb></Adb> 
       <Finance></Finance>
       <Adc></Adc>
       <Footer cname="mfooter"></Footer>
       <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from "../public/footer.vue"
import Navbar from '../public/navbar.vue'
import Mslider from './mslider.vue'
import Menu from './menu.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Task from './task.vue'
import Adc from './adc.vue'
import Finance from './finance.vue'

export default {
  components:{
    Heador,
    Mslider,
    Menu,
    Ada,
    Money,
    Adb,
    Task,
    Finance,
    Adc,
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
