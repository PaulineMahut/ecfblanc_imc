import { defineStore } from 'pinia'

export const useTailleStore = defineStore({
  id: 'taille',
  state: () => ({
    taille: "",
  }),
  getters: {
    getTaille: (state) => state.taille,
  },
})
