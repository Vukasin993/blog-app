<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label for="content" class="col-sm-2 col-form-label">Text</label>
                <div class="col-sm-10">
                <input v-model="comment.text" type="text" required="required" maxlength="300" class="form-control" placeholder="Content">
                </div>
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
          text: ''
      }
    }
  },

  methods: {
      onSubmit() {
          this.$emit('add', this.comment)
      }
  }
}
</script>

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