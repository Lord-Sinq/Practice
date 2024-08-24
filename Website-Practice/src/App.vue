<script>
import { RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="content-wrapper">
    <div id="app">
      <header>
        <div id="header-container">
          <h1>Practice!</h1>
          <Navbar />
        </div>
      </header>
      <!--Routed Content will appear here-->
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the app container takes up the full width */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
}
/* The fixed navbar at the top */
header {
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  background-color: #333;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
/* Container for the title and Navbar */
#header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: 1200px;
}
/* Padding for the main content to avoid being hidden by the fixed navbar */
main {
  margin-top: 80px; /* Adjust this value according to your navbar height */
  padding: 20px;
  align-content: center;
}
/* Center the title */
#title {
  text-align: center;
  margin-bottom: auto; /* Space between title and routed content */
}
h1 {
  margin: 0;
  padding-right: 20px;
  font-size: xx-large;
  color: burlywood;
} 
</style>
