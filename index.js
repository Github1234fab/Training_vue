Vue.component('product_ordered',{
    template:`
        <div class = "container_ordered">
            <p class="product_order_txt">Votre choix: {{ nom }}</p>
            <input type = "number"></input>
        </div>`
    ,
    props: ['nom'],
    // methods: {
    //     passer_commande: function (produits) {
    //         this.$emit('commande-passée' , produits)
    //     }
})

var app = new Vue({
  el: "#app",
  data: {
    array: ["carottes", "steack", "cake", "burger", "coffe", "granola", "sirop", "Grenadine", "Cacolac", "Pacalo"],
    panier: [ ],
  },

  methods: {
    order: function (produits) {
      console.log(produits);
      this.panier.push(produits);
    },
  },
});
