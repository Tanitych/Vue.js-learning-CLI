<template>
  <div>
    <div v-for="item in posts" :key="item">
      <p style="margin-bottom: 15px">
        {{ item.id }} - {{ item.title }} - {{ item.desc }}
      </p>
      <hr />
    </div>
    <h2>Hiiii</h2>
  </div>
</template>

<script>
export default {};
</script>