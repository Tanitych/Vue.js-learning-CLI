<template>
  <div id="app">
    <div class="titles">
      <h1>Methods</h1>
      <h1>Computed</h1>
      <h1>Watch</h1>
      <h1>Life cycle hooks</h1>
      <h1>V-for</h1>
      <h1>Conditions</h1>
      <h1>Live Search Vue</h1>
      <h1>Components</h1>
      <h1>Vue filters</h1>
    </div>
    <div class="content">
      <p
        style="
          margin-bottom: 15px;
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        {{ title }}
        <posts :data="posts" />
      </p>
    </div>
  </div>
</template>

<script>
//data
import { postsData } from "./views/utils/dummy.data";

//coponents
import posts from "./components/Posts.vue";
export default {
  data() {
    return {
      title: "News",
      posts: [],
    };
  },
  components: {
    posts,
  },
  created() {
    this.posts = postsData;
  },
};
</script>


  



<style >
/* @import "../../css/style.css"; */
</style>
