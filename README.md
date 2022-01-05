# Vue SSR memory leak when using computed

## Steps to reproduce

#### For nuxt

```bash
cd nuxt
yarn install
yarn c # build app; run server in production mode; make performance test
```

Result - memory leak: constant increasing in tab "Memory Usage"  
![n1](https://user-images.githubusercontent.com/37511777/148110192-6eacaea3-bdf5-4ad8-bf90-57a55caa9744.png)

After test move to `/nuxt/Post.vue` and change  

```diff
- <!-- <mark v-if="post.userId === 1">1</mark> -->
- <mark v-if="isFirstUser">1</mark>
+ <mark v-if="post.userId === 1">1</mark>
+ <!-- <mark v-if="isFirstUser">1</mark> -->
```

```bash
yarn c # run the test again
```

Result - **no** memory leak: approximate usage of memory around 200Mb (after huge jump to 1Gb, maybe some nuxt stuff)
![n2](https://user-images.githubusercontent.com/37511777/148110242-340eb0f7-c23d-4bbd-a9e5-530a06824ac6.png)


#### For vite
```bash
cd vite
yarn install
yarn c # build app; run server in production mode; make performance test
```

Result - memory leak: constant increasing in tab "Memory Usage"  
![v1](https://user-images.githubusercontent.com/37511777/148110269-72d87cbc-e001-481b-bfc9-3dd9bcfdc6a5.png)

After test move to `/vite/src/Post.vue` and change  

```diff
- <!-- <mark v-if="post.userId === 1">1</mark> -->
- <mark v-if="isFirstUser">1</mark>
+ <mark v-if="post.userId === 1">1</mark>
+ <!-- <mark v-if="isFirstUser">1</mark> -->
```

```bash
yarn c # run the test again
```

Result - **no** memory leak: approximate usage of memory around 150Mb
![v2](https://user-images.githubusercontent.com/37511777/148110304-cafd315b-d3cd-4f7b-a6e5-4bab35eb6dbe.png)

