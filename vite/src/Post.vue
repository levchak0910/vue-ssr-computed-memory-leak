<template>
  <div>
    <!-- <mark v-if="post.userId === 1">1</mark> -->
    <mark v-if="isFirstUser">1</mark>
    <span v-else>{{post.userId}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Post",
  props: {
    post: Object,
  },
  setup(props) {
    const isFirstUser = computed(() => props.post.userId === 1)

    return {
      isFirstUser,
    }
  }
});
</script>
