import Item from "./Item";

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

// CONSIGNAS EN TARJETA:
// 1- importar Item
// 2- utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩
// 3- cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma

export default function Tarjeta({handleFavorita}) {
  return (
    <ul>
      <Item list={listadoPlataformas} handleFavorita={handleFavorita}/>
    </ul>
  );
}
