<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/games">Games</router-link>
      <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
/* Make sure the navbar spans the full width and stays fixed */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000; /* Ensure navbar stays on top */
  padding: 10px;
}
/* Navbar links styling */
.navbar a {
  color: white;
  text-decoration: wavy;
  padding: 10px 15px;
  font-size: large;
  font-weight: bold;
  transition: color 0.3s, background-color 0.3s;
}
/* Hover effect on links */
.navbar a:hover {
  background-color: black;
  border-radius: 5px;
  border-style: dashed;
}
/* Active link styling */
.navbar a.router-link-exact-active {
  color: #13e2b4;
  text-decoration: underline;
}
@media (max-width: 1024px) {
  .navbar {
    font-size: xx-large;
  }
}
@media (min-width: 1024px) {
  .navbar {
    font-size: xx-large;
  }
}
</style>