<template>
  <router-view></router-view>
  <button onclick="get()">asd</button>
</template>

<script>
import axios from 'axios';
export default{
  name:"App",
  data(){
    return{
      data:[],
      id:1,
    };
  },
  methods: {
    get() {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
        .then((result) => {
          console.log(result.data);
          this.data.push(result.data);
          this.id++;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finally");
        });
    },
  },
};
</script>

<style>
#app{
  height:100vh;
  width: 100vw;
}
</style>
