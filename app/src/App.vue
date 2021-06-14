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
    </div>
    <div class="content">
      <input type="search" v-model="search" placeholder="Search some..." />
      <ul v-for="person in searchHandler" :key="person">
        <p>name: {{ person.name }}</p>
        <p>age: {{ person.age }}</p>
        <p>ability: {{ person.ability }}</p>
      </ul>
    </div>
  </div>
</template>
<script>
import { persons } from "./data/data";
export default {
  name: "App",
  data() {
    return {
      search: "",
      data: [],
    };
  },
  created() {
    this.data = persons;
    console.log(this.data);
  },
  computed: {
    searchHandler() {
      return this.data.filter((element) => {
        return (
          element.name.toLowerCase().includes(this.search.toLowerCase()) ||
          element.ability.toLowerCase().includes(this.search.toLowerCase()) ||
          ("" + element.age).includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style lang="scss">
.content {
  margin: 0 auto;
  max-width: 1170px;
  padding: 20px 10px 0px 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
input {
  font-size: 17px;
  padding: 10px 10px;
  margin: 0px 0px 10px 0px;
}
li {
  margin: 0px 0px 13px 0px;
  width: fit-content;
  text-align: left;
  list-style-type: none;
}
body {
  font-size: 18px;
}
button {
  margin: 0px 10px;
}
h1 {
  font-size: 18px;
  margin: 0px 0px 5px 0px;
}
h4 {
  margin: 0px 0px 0px 0px;
  text-align: left;
}
p {
  margin: 0px 0px 0px 0px;
}
</style>
