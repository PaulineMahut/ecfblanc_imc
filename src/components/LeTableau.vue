<template>
  <div>
    <table>
      <thead>
        <tr id="titre">
          <th colspan="3">Résultats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">Taille</th>
          <th scope="col">Poids</th>
          <th scope="col">Indice de masse Corporelle</th>
        </tr>
        <tr>
          <th scope="col">{{ store.taille}}cm</th>
          <th scope="col">{{ store.poids }}kg</th>
          <th scope="col">{{ store.resultat }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {useImcStore} from "../stores/imc";
const store = useImcStore();

</script>

<style scoped>

#titre {
  padding: 10px;
  background-color: #41b883;
}

table {
  background-color: #34495e;
  border: thin solid black;
}

th {
  padding: 30px;
  border: thin solid black;
}</style>
