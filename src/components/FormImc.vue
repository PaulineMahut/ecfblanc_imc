<template>
  <div>
    <h1>Calculateur d'IMC</h1>
    <p>
      L’IMC permet de déterminer de manière objective la corpulence d’une
      personne. C’est au mathématicien et statisticien Adolphe Quetelet
      (1796-1874) que l’on doit cet indice. Toutefois, le terme « Indice de
      Masse Corporelle » n’apparaît qu’en 1972 (1), soit bien après la création
      de ce qui se dénommait à l’origine « Indice de Quetelet ». Depuis 1997,
      l’OMS utilise cet indice afin d’établir une classification standard de
      référence en matière de surcharge pondérale, qui puisse être utilisée de
      manière internationale. Cette classification (voir tableau ci-dessus) a
      pour rôle d’évaluer les risques liés au surpoids. Le fait de calculer de
      manière régulière son IMC présente donc un intérêt : repérer ses propres
      évolutions de poids et les interpréter en accord avec les informations
      fournies par l’OMS.
    </p>
    <form @submit.prevent="onSubmit">
      <label for="poids">Poids</label>
      <input type="number" v-model="imc.poids" name="poids" id="poids" />
      <label for="taille">Taille</label>
      <input type="number" v-model="imc.taille" name="taille" id="taille" />
      <input type="submit" id="calculer" value="Calculer" />
      <p id="resultat">Votre IMC : {{ store.resultat }}</p>
    </form>
  </div>
</template>

<script setup>
import {useImcStore} from "../stores/imc";
import { reactive } from "vue";

const store = useImcStore();
const imc = reactive({
    taille: 0,
    poids: 0,
});

function onSubmit() {
    let resultat = Math.round((imc.poids / (imc.taille * imc.taille) * 10000));
    console.log(resultat);

    store.poids = imc.poids;
    store.taille = imc.taille;
    store.resultat = resultat;
}

</script>

<style lang="scss" scoped></style>
