import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-kaito-shop.herokuapp.com/api/products/",
});

export default instance;
