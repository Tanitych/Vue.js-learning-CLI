<template>
  <div id="app">
    <div style="margin: 0 auto; max-width: 1170px; padding: 20px 10px">
      <div class="content">
        <div v-for="item in titlesData" :key="item.id">
          <h1>{{ item.title }}</h1>
        </div>
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
  </div>
</template>

<script>
//data
import { postsData } from "./views/utils/dummy.data";
import { lessonsTitle } from "./views/utils/dummy.data";

//coponents
import posts from "./components/Posts.vue";
export default {
  data() {
    return {
      title: "News",
      posts: [],
      titlesData: [],
    };
  },
  components: {
    posts,
  },
  created() {
    this.posts = postsData;
    this.titlesData = lessonsTitle;
  },
};
</script>


<style >
/* @import "../../css/style.css"; */
</style>
