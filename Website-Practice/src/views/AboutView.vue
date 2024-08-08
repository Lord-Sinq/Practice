<script setup>
import { marked } from 'marked';
import readme from '../../README.md?raw';

const readmeContent = marked(readme);
</script>

<template>
  <div class="about">
    <h1>This will be a website for practice with html, css, and javascript.</h1>

    <h4 v-html="readmeContent"></h4>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
