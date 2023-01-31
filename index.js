Vue.component("product_ordered", {
  template: `
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
        <div class="container_sucre">
            <button v-on:click ="sucrer()" class="sugar_button">Sucré</button>
            <button v-on:click ="displayOrderBoardNoSugar()" class="sugar_button">Non sucré</button>
             </div>
        </div>`,
  props: ["nom"],
  methods: {
    sucrer: function () {
      this.$emit("go");
    },
    displayOrderBoardNoSugar: function () {
displayOrderBoard
    }
  },
});

var app = new Vue({
  el: "#app",
  data: {
    array: ["Espresso", "Double Espresso", "Cappuccino", "Américain", "Allongé", "Ristretto", "Thé", "Infusion", "Chocolat chaud"],
    panier: [],
    isDisplay: false,
    isDisplay2: false,
    isDisplay3: false,
    value: 0,
    percentage: "%",
    disabled: false,
    texte: "coucou",
  },
  methods: {
    order: function (produits) {
      console.log(produits);
      this.panier.push(produits);
    },
    displayOptionSugar: function () {
      console.log("ok");
      this.isDisplay = true;
    },
    displayOptionConfirmation: function () {
      console.log("ok");
      this.isDisplay2 = true;
    },
    displayOrderBoard: function () {
      console.log("ok");
      this.isDisplay3 = true;
    },

    reloadPage: function () {
      window.location.reload();
    },

    goOrder: function () {
      console.log("paf");
    },
  },
});
