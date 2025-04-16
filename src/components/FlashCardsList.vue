<template>
    <div>
      <h1>Flash Cards</h1>
      <ul>
        <li v-for="card in flashcardsStore.flashcards" :key="card.id">
          <router-link :to="`/flashcard/${card.id}`">
            <h2>{{ card.name }}</h2>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue'
  import { useFlashcardsStore } from '@/stores/flashcard.store';
  
  const flashcardsStore = useFlashcardsStore()
  
  onMounted(() => {
    if (flashcardsStore.flashcards.length === 0) {
      flashcardsStore.getFlashcards()
    }
  })
  </script>
  