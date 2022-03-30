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
      <input type="number" v-model="poids" name="poids" id="poids" />
      <label for="taille">Taille</label>
      <input type="number" v-model="taille" name="taille" id="taille" />
      <input type="submit" id="calculer" value="Calculer" />
      <p id="resultat">{{ resultat }}</p>
    </form>
        </div>

    <table>
        <thead>
        <tr id="titre">
          <th colspan="3" >Résultats</th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <th scope="col">Taille</th>
              <th scope="col">Poids</th>
              <th scope="col">Indice de masse Corporelle</th>
          </tr>
           <tr>
              <th scope="col">{{this.taille}}cm</th>
              <th scope="col">{{this.poids}}kg</th>
              <th scope="col">{{resultat}}</th>
          </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  data() {
    return {
      taille: "",
      poids: "",
      resultat: 0,
    };
  },
  methods: {
    onSubmit() {
      this.resultat = Math.round((this.poids / (this.taille * this.taille)) * 10000);

        if (!this.taille || !this.poids) {
          alert("Veuillez saisir une donnée");
        }
        return false;

    },
  },
};
</script>

<style scoped>

#titre {
    padding: 10px;
    background-color: #41b883
}

table {
    background-color: #34495e;
    border: thin solid black;
}

th {
    padding: 30px;
    border: thin solid black;

}

</style>
