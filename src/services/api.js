import axios from "axios";

const api = axios.create({
  baseURL: "https://backendrestaurante.herokuapp.com/"
});

export default api;
