import { Gift } from "./clases.js";
import datos from "../Data/Data.json" assert { type: "json" };

let idGiftUpdate = null;
const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(
document.getElementById("modal-gift")
);

