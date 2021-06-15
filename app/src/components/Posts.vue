<template>
  <div>
    <div v-for="post in data" :key="post.id">
      <h1 style="text-align: left">{{ post.title }}</h1>
      <p style="font-weight: normal">Статья: {{ post.id }} - {{ post.desc }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>