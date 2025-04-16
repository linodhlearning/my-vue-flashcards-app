// src/stores/flashcard.store.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { Flashcard } from "../types/flashcard-type";
export const useFlashcardsStore = defineStore("flashcards-store", () => {
  const flashcards = ref<Flashcard[]>([]);

  const getFlashcards = async () => {
    try {
      const response = await fetch("/flashcards.json");
      if (!response.ok) throw new Error("Failed to fetch flashcards data");
      flashcards.value = await response.json();
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };
  return { flashcards, getFlashcards };
});
