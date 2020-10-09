<template>
        <div class="hello">
            <h1> {{post.title}}</h1>
            <div>{{post.text}}</div>
            <p>{{post.createdAt}}</p>

            <div>Comments: </div>
            <AddComment @add="addComment"/>
            
        </div>
</template>

<script>
import {posts} from '../services/Posts'
import AddComment from './AddComment'


export default {
  name: 'posts',
    components: { AddComment},

  data() {
    return {
      post: [],

    }
  },

  async created() {
      this.post = (await posts.getOne(this.$route.params.id)).data
     
    },

  methods: {
    getPost() {
        posts.getOne(this.$route.params.id).then((data) => {
            console.log(data)
          this.post = data;
        });
  },

  addComment(comment) {
      posts.addComment(comment ,this.$route.params.id)
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
