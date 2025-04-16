<template>
    <div v-if="flashcard">
      <h1>{{ flashcard.name }}</h1>
      <img :src="flashcard.image" :alt="flashcard.name" />
      <p>{{ flashcard.description }}</p>
      <router-link to="/">Back</router-link>
    </div>
    <div v-else>
      <p>Flashcard not found.</p>
      <router-link to="/">Back</router-link>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useFlashcardsStore } from '@/stores/flashcard.store'
  import { Flashcard } from "@/types/flashcard-type";
  
  const route = useRoute()
  // Get the flashcard ID from the route params
  const flashcardId = Number(route.params.id)
  
  const flashcardsStore = useFlashcardsStore()
  
  onMounted(() => {
    // Fetch flashcards if they haven't been loaded yet
    if (flashcardsStore.flashcards.length === 0) {
      flashcardsStore.getFlashcards()
    }
  })
  
  // Find the selected flashcard using the ID
  const flashcard = computed<Flashcard | undefined>(() =>
    flashcardsStore.flashcards.find(card => card.id === flashcardId)
  )
  </script>
  