<template>
  <div id="app">
    <div style="margin: 0 auto; max-width: 1170px; padding: 20px 10px">
      <Topics :topicProps="datatopics" />
      <div class="content">
        <Articles :propsData="posts" />
        <div class="numbers" v-for="(number, index) in filtered" :key="index">
          <p>Цена: {{ number }}тг</p>
          <li v-for="(info, index) in data" :key="index">
            {{ timeFilter(info.time.data) }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//data
import { postsData } from "./views/utils/dummy.data";
import { lessonsTitle } from "./views/utils/dummy.data";

//coponents
import Articles from "./components/Posts.vue";
import Topics from "./components/LessonsTitles.vue";

//filter

export default {
  components: {
    Articles,
    Topics,
  },
  data() {
    return {
      title: "News",
      posts: [],
      datatopics: [],
      accountBalance: [12.34343, 32.4543543, 55.4323],
    };
  },
  created() {
    this.posts = postsData;
    this.datatopics = lessonsTitle;
  },
};
</script>

<style >
/* @import "../../css/style.css"; */
</style>
