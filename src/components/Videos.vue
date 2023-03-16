<script setup lang="ts">
import { ref } from 'vue';

const videos = ref([
  {
    id: 3,
    title: `Github-Copilot : l'IA au service des développeurs`,
    author: 'Sylviane R.',
  },
  {
    id: 2,
    title: 'Les nouveautés .Net 7 : des perfs sinon rien !',
    author: 'John D.',
  },
  {
    id: 1,
    title: 'Green IT : Les actions à mener (Partie II)',
    author: 'Monsieur D.',
  },
]);
</script>

<template>
  <nav>
    <button class="last selected">{{ $t('Last videos') }}</button>
    <button class="popular">{{ $t('Popular') }}</button>
  </nav>
  <ul class="videos">
    <li v-for="video in videos" :key="video.title">
      <figure>
        <img :src="`/src/assets/videos/${video.id}.svg`" />
        <figcaption>
          {{ $t('Viseo Tech An Hour') }} - {{ video.title }}
        </figcaption>
      </figure>
    </li>
  </ul>
</template>
