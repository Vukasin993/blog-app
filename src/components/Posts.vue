<template>
  <div class="hello">
    <h1> POSTS</h1>
    <ul v-for="(post, index) in posts" :key="index">
      <li>{{post.title}}</li>
      <router-link :to="{ name: 'view-post', params: { id: post.id } }">View Post</router-link>
      <router-link :to="{ name: 'edit', params: { id: post.id } }">Edit</router-link>
       <button @click="deletePost(post.id)">Delete</button>

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
    this.posts = await posts.getAll()
  },

  methods: {
      deletePost(id) {
      posts.delete(id).then(() => {
       posts.getAll().then((data)=> {
          this.posts = data
        })
      });
  }
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
