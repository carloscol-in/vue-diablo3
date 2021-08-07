<template>
  <div id="app" class="bg-white dark:bg-gray-800">
    <div id="nav">
      <router-link to="/" class="text-black dark:text-white">Home</router-link>
      <span class="text-black dark:text-white"> | </span>
      <router-link to="/about" class="text-black dark:text-white">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
</style>
