<template>
    <div>
       <Heador></Heador>
       <Wslider></Wslider>
       <Benefit></Benefit>
       <Service></Service>
       <Footer></Footer>
       <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from "../public/footer.vue"
import Navbar from '../public/navbar.vue'
import Wslider from "./wslider.vue"
import Benefit from "./benefit.vue"
import Service from "./service.vue"

export default {
  components:{
    Heador,
    Footer,
    Navbar,
    Wslider,
    Benefit,
    Service
  }
}
</script>

<style lang="scss">
  
</style>
