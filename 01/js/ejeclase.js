import { Gift } from "./clases.js";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

// Obtener ruta real del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construir ruta correcta a Data.json
const dataPath = path.join(__dirname, "..", "Data", "Data.json");

console.log("Ruta absoluta generada:", dataPath);

const miGift = new Gift(
  1,
  "Spotify Premium",
  "Suscripción",
  "Un mes",
  150,
  "url-imagen"
);

const jsonData = JSON.stringify(miGift, null, 2);

fs.writeFileSync(dataPath, jsonData, "utf-8");

console.log("Datos guardados correctamente");
