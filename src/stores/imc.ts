import { defineStore } from 'pinia'

export const useImcStore = defineStore({
  id: 'resultat',
  state: () => ({
    poids: 0, //clé
    taille: 0,
    resultat:0
  }),
  getters: {
    getPoids: (state) => state.poids,
    getTaille: (state) => state.taille,
    getResultat: (state) => state.resultat
  },
})
