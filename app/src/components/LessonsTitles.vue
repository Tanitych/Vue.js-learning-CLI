<template>
  <div class="topics">
    <h1 v-for="item in topicProps" :key="item">{{ item.title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["topicProps"],
};
</script>