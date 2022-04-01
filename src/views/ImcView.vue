<template>
  <div>
    <FormImc />
    <LeTableau v-if="store.resultat" />
  </div>
</template>

<script setup>
import FormImc from "../components/FormImc.vue";
import LeTableau from "../components/LeTableau.vue";
import {useImcStore} from "../stores/imc";
const store = useImcStore();

</script>

<style scoped>

</style>
