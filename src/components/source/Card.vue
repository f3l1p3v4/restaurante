<template>
  <div class="card-container">
    <ul>
      <li class="card" v-for="item in items" :key="item.bus" :item="item">
        <img
          @click.prevent="openPopUp(item)"
          src="https://diariodoturismo.com.br/wp-content/uploads/2020/11/Margheritta-pizza-11-2020.jpg"
          loading="lazy"
        />
        <div
          @click.prevent="openPopUp(item)"
        >
          <h3>{{ item.bus }}</h3>
          <span>
            {{ item.categorie }}
          </span>
          <span> Grande: R${{ item.group }} </span>
        </div>
        <a href="genereteMessage">
          <span>Pedir Essa</span>
          <WhatsappIcon></WhatsappIcon>
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
  padding: 10px 0;
  display: grid;
  min-height: 100px;
  grid-template-rows: 30% 50% 20%;
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

.card div:nth-child(2) span:nth-child(2) {
  color: var(--_color_5);
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1em;
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
  align-items: center;
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

@media only screen and (max-width: 320px) {
  /*.card div:nth-child(2) h3 {
    font-size: 1.1em;
  }*/

  .card div:nth-child(2) span:nth-child(3) {
    padding: 10px 0px;
    font-size: 1.2em;
  }
}
</style>