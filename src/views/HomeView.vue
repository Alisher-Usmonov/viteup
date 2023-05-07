<script setup lang="ts">
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <div class="text-2xl flex flex-col gap-y-2">
    <h1>Home page {{ store.stars }}</h1>
    <button
      class="p-2 px-4 rounded-xl bg-gray-900 shadow-md border-3px border-gray-900 active:border-black"
      @click="store.addStar()"
    >
      click
    </button>
  </div>
</template>
