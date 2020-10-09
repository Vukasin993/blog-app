<template>
  <div class="hello">
    <h1> Add post</h1>
<form @submit.prevent="addPost">
  <div class="form-group row">
    <label for="title" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input v-model="post.title" type="text" class="form-control"  placeholder="Title">
    </div>
  </div>
  <div class="form-group row">
    <label for="content" class="col-sm-2 col-form-label">Content</label>
    <div class="col-sm-10">
      <input v-model="post.text" type="text" class="form-control" placeholder="Content">
    </div>
  </div>
  <button>Submit</button>
  </form>
  </div>
</template>

<script>
import {posts} from '../services/Posts'

export default {
  name: 'posts',


  data() {
    return {
            post: {
                title: '',
                text: '',
                }
         }
    
  },

     created() {

      
    },

methods: {
    addPost() {
        console.log(this.post)
         posts.add(this.post)
            this.$router.push({ name: 'posts'})
    },

        getPost() {
        posts.getOne(this.$route.params.id).then((data) => {
            console.log(data)
          this.post = data;
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
