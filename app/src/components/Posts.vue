<template>
  <div v-if="data">
    <div v-for="item in data" :key="item">
      <p style="margin-bottom: 15px">
        {{ item.id }} - {{ item.title }} - {{ item.desc }}
      </p>
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