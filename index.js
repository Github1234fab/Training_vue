Vue.component("product_ordered", {
  template: `
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
        <div class="sucre">
            <button v-on:click ="sucrer()" class="sugar">Sucré</button>
             <button class="sugar">Non Sucré</button>
             </div>
        </div>`,
  props: ["nom"],
    methods: {
        sucrer: function () {
            this.$emit('balance')
        }
    }  
});

var app = new Vue({
  el: "#app",
  data: {
    array: ["Espresso", "Double Espresso", "Cappucino", "Américain", "Allongé", "Ristretto", "Thé", "Infusion", "Chocolat chaud"],
    panier: [],
  },

  methods: {
    order: function (produits) {
      console.log(produits);
      this.panier.push(produits);
      },
      sugar_option: function () {
          console.log("ok");
      }
  },
});
