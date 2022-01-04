<template>
  <div>
    <h1>Hello world</h1>
    <Post 
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Post from "./Post.vue";

import p from "../../db/posts.json"

export default defineComponent({
  name: "App",
  components: {
    Post,
  },
  setup(){
    const posts = ref(p)

    return {
      posts,
    }
  },
});
</script>



