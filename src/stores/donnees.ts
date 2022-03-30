import { defineStore } from 'pinia'

export const useDonneesStore = defineStore({
  id: 'donnees',
  state: () => ({
    poids: 0,
    taille: 0,
    resultat:0
  }),
  getters: {
    getPoids: (state) => state.poids,
    getResultat: (state) => state.taille,
    getImc: (state) => state.resultat,

  },
})
