Vue.component("product_ordered", {
  template: `
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
        <div class="container_sucre">
            <button v-on:click ="sucrer()" class="sugar_button">Sucré</button>
            <button v-on:click ="sucrer()" class="sugar_button">Non sucré</button>
             </div>
        </div>`,
  props: ["nom"],
  methods: {
    sucrer: function () {
      this.$emit("go");
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    array: ["Espresso", "Double Espresso", "Cappucino", "Américain", "Allongé", "Ristretto", "Thé", "Infusion", "Chocolat chaud"],
    panier: [],
    isDisplay: false,
    value: 0,
    percentage: "%",
  },

  methods: {
    order: function (produits) {
      console.log(produits);
      this.panier.push(produits);
    },
    sugar_option: function () {
      console.log("ok");
      this.isDisplay = true;
    },
  },
});
