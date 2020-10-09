<template>
  <div class="hello">
    <h1> POSTS</h1>
    <ul v-for="(post, index) in posts" :key="index">
      <li>{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
import {posts} from '../services/Posts'


export default {
  name: 'posts',


  data() {
    return {
      posts: []
    }
  },

  async created() {
    console.log('ovde')
    this.posts = await posts.getAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
