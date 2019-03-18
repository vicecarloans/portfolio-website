<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <app-banner></app-banner>
    <app-qualities></app-qualities>

    <app-contact></app-contact>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
/*eslint-disable */
  new SmoothScroll('a[href*="#"]');
  import Banner from './components/Banner.vue'
  import Qualities from './components/Qualities.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import NavBar from './components/Navbar.vue'
  export default {
    name: 'App',
    components: {
      appBanner: Banner,
      appQualities: Qualities,
      appContact: Contact,
      appFooter: Footer,
      appNavBar: NavBar
    }
  }
</script>

<style lang="scss">
  @import './custom-bootstrap.scss';
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
</style>

<style>
body {
  margin-top: 60px;
}
h1, h2, h3, h4, h5 {
  font-family: 'Roboto Condensed', sans-serif;
}
.height-100 {
  min-height: 100vh;
}
.height-80 {
  min-height: 80vh;
}
.height-60 {
  min-height: 60vh;
}
.height-50 {
  min-height: 50vh;
}
.height-40 {
  min-height: 40vh;
}

#banner,#contact
 {
  background: linear-gradient(to right, #141e30 25%, #243b55);

}
#qualities{
  background: linear-gradient(to bottom, #c6b07f 0%, #b48811 20%, #a2790d 100%);
}


</style>
