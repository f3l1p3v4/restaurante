<template>
  <div class="card-container">
    <ul>
      <li class="card" v-for="item in items" :key="item._id" :item="item">
        <img
          @click.prevent="openPopUp(item)"
          style="border-radius: 80%; margin-left: 10px;"
          src="https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png"
          loading="lazy"
        />
        <div 
          @click.prevent="openPopUp(item)"
          style="padding-left: 10px;"
        >
          <h3>{{ item.name }}</h3>
          <span>
            {{ item.ingredients }}
          </span>
          <span> Grande: R${{ item.price }} </span>
        </div>
        <a href="genereteMessage">
          <WhatsappIcon></WhatsappIcon>
          <span>Pedir</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import { WhatsappIcon } from "@/icons";

export default {
  components: { WhatsappIcon },

  methods: {
    ...mapMutations("popUp", ["openPopUp"]),
    ...mapActions("menuItems", ["loadData"]),
  },

  computed: {
    ...mapState("menuItems", ["items"]),
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.card-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.card {
  background-color: var(--_color_0);
  display: grid;
  grid-template-columns: 20% 65% 15%;
  margin: 10px 5px;
  cursor: pointer;
  border-radius: 15px;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px 0 0 15px;
}

.card div:nth-child(2) {
  margin: 0 10px;
  padding: 10px 0 0;
  display: grid;
  min-height: 90px;
  grid-template-rows: 30% 50% 20%;
}

@media only screen and (max-width: 450px) {
  .card div:nth-child(2) {
    grid-template-rows: 30% 30% 20%;
  }
}

.card div:nth-child(2) h3 {
  font-family: "Lobster", cursive;
  color: var(--_color_3);
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
}

@media only screen and (max-width: 450px) {
  .card div:nth-child(2) h3 {
    font-size: 1.2em;
  }
}

.card div:nth-child(2) span:nth-child(2) {
  color: var(--_color_5);
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1em;
  overflow: hidden;
}

@media only screen and (max-width: 450px) {
  .card div:nth-child(2) span:nth-child(2) {
    font-size: 0.7em;
  }
}

.card div:nth-child(2) span:nth-child(3) {
  color: var(--_color_3);
  font-family: monospace;
  font-weight: bold;
  font-size: 1.5em;
  text-align: right;
  margin-right: 10px;
}

.card a:nth-child(3) {
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--_color_2);
  color: var(--_color_0);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
}

.card a {
  outline: none;
  border-radius: 0 15px 15px 0;
}

.card a:nth-child(3) span {
  font-size: 10pt;
}

.card a:nth-child(3) svg {
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 30pt;
}

@media only screen and (max-width: 450px) {
  .card a:nth-child(3) span {
    font-size: 7pt;
  }

  .card a:nth-child(3) svg {
    font-size: 20pt;
  }
}

.card a:active {
  background-color: var(--_color_2_1);
}

@media only screen and (max-width: 1300px) {
  .card-container {
    display: grid;
  }
}

@media only screen and (min-width: 1300px) {
  .card-container {
    height: 77vh;
  }
  .card-container ul {
    overflow-y: auto;
  }
}

@media only screen and (max-width: 420px) {
  .card div:nth-child(2) h3 {
    font-size: 1.1em;
  }

  .card div:nth-child(2) span:nth-child(3) {
    padding: 10px 0px;
    font-size: 1em;
  }
}
</style>