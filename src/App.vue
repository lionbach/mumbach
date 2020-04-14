<template>
  <v-app>
    <TopBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
