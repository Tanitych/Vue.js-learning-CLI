<template>
  <div>
    <div
      v-for="item in lessonsTitle"
      :key="item"
      style="text-align: center; font-size: 20px; padding: 5px 0px"
      class="titles"
    >
      <h1>{{ item.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessonsTitles: {
      type: [Array],
      required: true,
    },
  },
};
</script>