// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

export default function Item({list, handleFavorita}) {
  return (
    <>
    {list.map((item,index) => <li key={index} onClick={() => {handleFavorita(item)}}>{item}</li>)}
    </>
  );
  }
  