Vue.component("product_ordered", {
  template: `
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
        <div class="sucre">
            <button v-on:click ="sucrer()" class="sugar">Sucré</button>
             </div>
        </div>`,
  props: ["nom"],
    methods: {
        sucrer: function () {
            this.$emit("go");
        }
    }  
});

// Vue.component("sugar_selection", {
//   template: `
//         <div class = "container_sugarSelection">
//     <input type="range" v-on:click="range()"></input> 
//         </div>`,
//   methods: {
//    range: function () {
//       this.$emit("bam");
//     },
//   },
// });

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
            
        },
    }
});
