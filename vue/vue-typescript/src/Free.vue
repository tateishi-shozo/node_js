<script setup lang="ts">
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from './components/BlogPost.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

const posts: Ref<{id:number,title:string}> = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize: Ref<number> = ref(1);

</script>

<template>
    <h1>Here is a child component!</h1>
    <ButtonCounter />
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
    </div>
</template>