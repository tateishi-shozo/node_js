<!-- BlogPost.vue -->
<script setup lang="ts">
defineProps(['title'])
</script>

<template>
    <div>
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>