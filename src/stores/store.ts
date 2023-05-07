import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      name: "ViteUp",
      stars: 0
    }
  },

  actions: {
    addStar() {
      this.stars += 1;
    }
  }
})