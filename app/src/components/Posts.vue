<template>
  <div class="texts_block">
    <div class="texts" v-for="item in propsData" :key="item.id">
      <p class="nowrap">{{ item.title }}</p>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propsData: [Array],
  },
};
</script>