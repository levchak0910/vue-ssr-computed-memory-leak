# Vue SSR memory leak when using computed

## Steps to reproduce

#### For nuxt

```bash
cd nuxt
yarn install
yarn c
```

look for result (memory leak) in browser  
![n1](https://user-images.githubusercontent.com/37511777/148110192-6eacaea3-bdf5-4ad8-bf90-57a55caa9744.png)

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
![n2](https://user-images.githubusercontent.com/37511777/148110242-340eb0f7-c23d-4bbd-a9e5-530a06824ac6.png)


#### For vite
```
cd vite
yarn install
yarn c
```

look for result (memory leak) in browser  
![v1](https://user-images.githubusercontent.com/37511777/148110269-72d87cbc-e001-481b-bfc9-3dd9bcfdc6a5.png)

move to /vite/src/Post.vue and change  

```diff
- <!-- <mark v-if="post.userId === 1">1</mark> -->
- <mark v-if="isFirstUser">1</mark>
+ <mark v-if="post.userId === 1">1</mark>
+ <!-- <mark v-if="isFirstUser">1</mark> -->
```

look for result (no memory leak) in browser and compare with previous
![v2](https://user-images.githubusercontent.com/37511777/148110304-cafd315b-d3cd-4f7b-a6e5-4bab35eb6dbe.png)

