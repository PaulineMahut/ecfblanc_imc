import { defineStore } from 'pinia'

export const usePoidsStore = defineStore({
  id: 'poids',
  state: () => ({
    poids: "",
  }),
  getters: {
    getPoids: (state) => state.poids,
  },
})
