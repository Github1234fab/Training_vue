Vue.component("product_ordered", {
  template: `
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
        <div class="container_sucre">
            <button v-on:click ="sucrer()" class="sugar_button">Sucré</button>
            <button class="sugar_button" v-on:click= "sucro()">Non Sucré</button>
             </div>
        </div>`,
  props: ["nom"],
  data: function () {
    return {
      isDisplay2: false,
    };
  },
  methods: {
    sucrer: function () {
      this.$emit("go");
    },
    sucro: function () {
      this.$emit("go-board");
      console.log("board");
    },
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
