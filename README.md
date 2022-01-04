# Vue SSR memory leak when using computed

## Steps to reproduce

#### For nuxt

```bash
cd nuxt
yarn install
yarn c
```

look for result (memory leak) in browser  
move to /nuxt/Post.vue and change  

```diff
- <!-- <mark v-if="post.userId === 1">1</mark> -->
- <mark v-if="isFirstUser">1</mark>
+ <mark v-if="post.userId === 1">1</mark>
+ <!-- <mark v-if="isFirstUser">1</mark> -->
```

```bash
yarn c
```

look for result (no memory leak) in browser and compare with previous

#### For vite
```
cd vite
yarn install
yarn c
```

look for result (memory leak) in browser  
move to /vite/src/Post.vue and change  

```diff
- <!-- <mark v-if="post.userId === 1">1</mark> -->
- <mark v-if="isFirstUser">1</mark>
+ <mark v-if="post.userId === 1">1</mark>
+ <!-- <mark v-if="isFirstUser">1</mark> -->
```

look for result (no memory leak) in browser and compare with previous
