import axios from "axios";

const apiURL =
  "https://food-app-c7486-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeFood(food) {
  return axios.post(apiURL, food);
}

export function getFood() {
  return axios.get(apiURL + "menu.json");
}
