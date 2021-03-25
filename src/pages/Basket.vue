<template>
  <section id="body-basket">
    <header id="header-basket">
      <div>
        <a class="iconarrowback" href="/digital-menu/#/"> <ArrowBackIcon /></a>
        <div>
          <h1>Cesta de compras</h1>
          <a class="basket-icon">
            <BasketIcon /><span>{{ volume }}</span>
          </a>
        </div>
      </div>
    </header>
    <main>
      <button @click="removeAll">Limpar</button>
      <ul v-if="volume" style="list-style: none">
        <li v-for="item in shoppingBasket" :key="item[0]">
          <div>
            <h2>{{ item[0] }}</h2>
            <span
              >R${{ computedPrice(item[1].item.price, item[1].quantity) }}</span
            >
          </div>
          <div class="action">
            <strong style="padding: 0 10px">Qtd: {{ item[1].quantity }}</strong>
            <TrashIcon />
          </div>
        </li>
        <div class="price">
          <span
            ><strong>Valor:</strong> R$ 20</span
          >
        </div>
      </ul>
      <div v-else class="empty-message">
        <h3>A sua cesta está vazio</h3>

        <h5>Adicione seu lanche favorito aqui!</h5>
      </div>
      <span v-show="volume" id="send-request"><SendIcon /> </span>
    </main>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { ArrowBackIcon, BasketIcon, TrashIcon, SendIcon } from "@/icons";

export default {
  components: {
    ArrowBackIcon,
    BasketIcon,
    TrashIcon,
    SendIcon,
  },

  methods: {
    ...mapActions("shoppingBasket", ["loadShoppingBasket"]),
    ...mapMutations("shoppingBasket", ["removeAll"]),

    computedPrice(price, qtd) {
      return (parseFloat(price) * qtd).toFixed(2);
    },
  },

  computed: {
    ...mapState("shoppingBasket", ["shoppingBasket", "volume"]),
  },

  // watch: {
  //   shoppingBasket(){
  //     this.loadShoppingBasket()
  //   }
  // },

  async mounted() {
    await this.loadShoppingBasket();
    console.log(this.shoppingBasket.get("Calabresa").quantity);
  },
};
</script>

<style scoped>
#body-basket {
  max-width: 1300px;
  margin: 0 auto;
  color: var(--_color_6);
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.11fr 1fr;
  box-sizing: border-box;
}

#body-basket main {
  overflow-y: auto;
  padding: 30px;
}

#body-basket main button {
  background-color: rgb(181, 9, 9);
  color: var(--_color_0);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 12pt;
  cursor: pointer;
}

#body-basket main ul {
  margin-top: 10px;
  box-shadow: 0 0 1em grey;
  border: none;
  border-radius: 8px;
  padding: 10px 20px 20px;
  color: rgb(40, 40, 40);
}

#body-basket main ul li {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(186, 184, 184);
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
}

.action svg {
  cursor: pointer;
}

#body-basket main ul li div svg {
  font-size: 20pt;
}

.price {
  font-size: 16pt;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--_color_2);
}

#header-basket {
  color: var(--_color_0);
  background: var(--_color_2);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
}

#header-basket div {
  display: flex;
  height: 90px;
  align-items: center;
  padding: 5px;
  border-bottom: 2px dashed var(--_color_4);
  font-size: 18pt;
}

#header-basket div div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.basket-icon {
  margin: 0;
  position: relative;
  padding-top: 10px;
  cursor: pointer;
  text-decoration: none;
  color: var(--_color_6);
}
.basket-icon span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 15%;
  background-color: var(--_color_0);
  color: var(--_color_2);
  border-radius: 80%;
  font-size: 10pt;
  font-weight: bold;
}

.basket-icon svg {
  margin-left: 10px;
  font-size: 25pt;
  color: white;
}

#send-request {
  cursor: pointer;
  height: 55px;
  width: 55px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  font-size: 30pt;
  background: var(--_color_2);
  color: var(--_color_0);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin: 0;
  padding: 0;
}

#send-request svg {
  padding-left: 5px;
}

#send-request:hover {
  color: var(--_color_0);
  background-color: var(--_color_2_1);
}

.empty-message {
  text-align: center;
  padding: 20% 20px;
}

.empty-message h3 {
  font-size: 28pt;
}

.empty-message h5 {
  margin-top: 20px;
  font-size: 14pt;
}
.iconarrowback {
  color: var(--_color_0);
  font-weight: bold;
  font-size: 25px;
}
</style>