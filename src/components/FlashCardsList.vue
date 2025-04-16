<template>
  <div>
    <h1>Flash Cards</h1>
    <v-expansion-panels multiple class="my-5"> 

      <v-expansion-panel v-for="card in flashcards" :key="card.id" >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          {{ card.name }}  <v-icon color="success" icon="mdi-antenna" size="small"></v-icon>
          <template v-slot:actions>
            <v-icon color="error" icon="mdi-alert-circle">
            </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ card.description }}
          <div>
            <router-link :to="`/flashcard/${card.id}`">
              <h2>{{ card.name }}</h2>
            </router-link>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel> 
    </v-expansion-panels>   
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useFlashcardsStore } from '@/stores/flashcard.store';

const flashcardsStore = useFlashcardsStore()
const { flashcards } = storeToRefs(flashcardsStore);

onMounted(async () => {
  await flashcardsStore.getFlashcards();
})
</script>